import MainContainer from './MainContainer.mjs';

const onStart = () => Neo.app({
    mainView: MainContainer,
    name    : 'Neo.examples.dialog'
});

export {onStart as onStart};