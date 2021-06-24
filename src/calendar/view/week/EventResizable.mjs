import Resizable from '../../../plugin/Resizable.mjs';

/**
 * @class Neo.calendar.view.week.EventResizable
 * @extends Neo.container.Base
 */
class EventResizable extends Resizable {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.calendar.view.week.EventResizable'
         * @protected
         */
        className: 'Neo.calendar.view.week.EventResizable'
    }}

    /**
     *
     * @param {Object} data
     */
    onDragEnd(data) {
        let me = this;

        me.isDragging = false;
        me.removeBodyCursorCls();
        me.removeAllNodes();
    }

    /**
     *
     * @param {Object} data
     */
    onDragMove(data) {

    }

    /**
     *
     * @param {Object} data
     */
    onDragStart(data) {
        let me = this;

        me.isDragging = true;
        me.addBodyCursorCls();
        me.owner.eventDragZone[me.currentNodeName === 'top' ? 'keepEndDate' : 'keepStartDate'] = true;
    }

    /**
     * Only show the resize handles in case dragging is enabled.
     * @param {Object} data
     */
    onMouseMove(data) {
        if (this.owner.data.events.enableDrag) {
            super.onMouseMove(data);
        }
    }
}

Neo.applyClassConfig(EventResizable);

export {EventResizable as default};
