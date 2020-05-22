'use strict';

const chalk       = require('chalk'),
      commander   = require('commander'),
      cp          = require('child_process'),
      cpOpts      = { env: process.env, cwd: process.cwd(), stdio: 'inherit' },
      envinfo     = require('envinfo'),
      inquirer    = require('inquirer'),
      packageJson = require('../../package.json'),
      path        = './buildScripts/webpack/',
      programName = `${packageJson.name} buildMyApps`,
      questions   = [];

const program = new commander.Command(programName)
    .version(packageJson.version)
    .option('-i, --info',           'print environment debug info')
    .option('-e, --env <name>',     '"all", "dev", "prod"') // defaults to all
    .option('-n, --noquestions')                            // do not prompt questions
    .allowUnknownOption()
    .on('--help', () => {
        console.log('\nIn case you have any issues, please create a ticket here:');
        console.log(chalk.cyan(packageJson.bugs.url));
    })
    .parse(process.argv);

if (program.info) {
    console.log(chalk.bold('\nEnvironment Info:'));
    console.log(`\n  current version of ${packageJson.name}: ${packageJson.version}`);
    console.log(`  running from ${__dirname}`);
    return envinfo
        .run({
            System     : ['OS', 'CPU'],
            Binaries   : ['Node', 'npm', 'Yarn'],
            Browsers   : ['Chrome', 'Edge', 'Firefox', 'Safari'],
            npmPackages: ['neo.mjs']
        }, {
            duplicates  : true,
            showNotFound: true
        })
        .then(console.log);
}

console.log(chalk.green(programName));

if (!program.noquestions) {
    if (!program.env) {
        questions.push({
            type   : 'list',
            name   : 'env',
            message: 'Please choose the environment:',
            choices: ['all', 'dev', 'prod'],
            default: 'all'
        });
    }
}

inquirer.prompt(questions).then(answers => {
    const env       = program.env || answers.env || 'all',
          startDate = new Date();

    // dist/development
    if (env === 'all' || env === 'dev') {
        console.log(chalk.blue(`${programName} starting dist/development`));
        cp.spawnSync('webpack', ['--config', `${path}development/webpack.config.myapps.js`], cpOpts);
    }

    // dist/production
    if (env === 'all' || env === 'prod') {
        console.log(chalk.blue(`${programName} starting dist/production`));
        cp.spawnSync('webpack', ['--config', `${path}production/webpack.config.myapps.js`],  cpOpts);
    }

    const processTime = (Math.round((new Date - startDate) * 100) / 100000).toFixed(2);
    console.log(`\nTotal time ${programName}: ${processTime}s`);

    process.exit();
});