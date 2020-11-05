import Model  from '../../../src/data/Model.mjs';

/**
 * @class Docs.model.Example
 * @extends Neo.data.Model
 */
class Example extends Model {
    static getConfig() {return {
        /**
         * @member {String} className='Docs.model.Example'
         * @protected
         */
        className: 'Docs.model.Example',
        /**
         * @member {Object[]} fields
         */
        fields: [{
            name: 'id',
            type: 'Integer'
        }, {
            name: 'isLeaf',
            type: 'Boolean'
        }, {
            name: 'name',
            type: 'String'
        }, {
            name: 'parentId',
            type: 'Integer'
        }, {
            name: 'path',
            type: 'String'
        }]
    }}
}

Neo.applyClassConfig(Example);

export {Example as default};