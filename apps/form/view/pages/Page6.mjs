import FormPageContainer from '../FormPageContainer.mjs';
import TextArea          from '../../../../src/form/field/TextArea.mjs';

/**
 * @class Form.view.pages.Page6
 * @extends Form.view.FormPageContainer
 */
class Page6 extends FormPageContainer {
    static config = {
        /**
         * @member {String} className='Form.view.pages.Page6'
         * @protected
         */
        className: 'Form.view.pages.Page6',
        /**
         * @member {String} formGroup='page6'
         */
        formGroup: 'page6',
        /**
         * @member {Object[]} items
         */
        items: [{
            module   : TextArea,
            labelText: 'Page 6 Field 1',
            name     : 'field1',
            required : true,
            height   : 200,
            value    : 'Lorem ipsum'
        }, {
            module   : TextArea,
            labelText: 'Page 6 Field 2',
            name     : 'field2'
        }]
    }
}

Neo.applyClassConfig(Page6);

export default Page6;
