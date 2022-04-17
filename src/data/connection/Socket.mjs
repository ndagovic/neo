import Base from '../../core/Base.mjs';

/**
 * @class Neo.data.connection.WebSocket
 * @extends Neo.core.Base
 */
class Socket extends Base {
    /**
     * @member {String|null} serverAddress=null
     */
    serverAddress = null

    static getConfig() {return {
        /**
         * @member {String} className='Neo.data.connection.WebSocket'
         * @protected
         */
        className: 'Neo.data.connection.WebSocket',
        /**
         * @member {String} ntype='socket-connection'
         * @protected
         */
        ntype: 'socket-connection',
        /**
         * @member {WebSocket|null} socket=null
         * @protected
         */
        socket: null
    }}
}

Neo.applyClassConfig(Socket);

export default Socket;
