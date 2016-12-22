import * as React from 'react';
import * as Elm from '../obj/Lib';


export default React.createClass({
    getInitialState: function() {
        return {msg: "initializing...", i: 0};
    },

    componentDidMount: function() {
        const ports = Elm.ElmLib.worker().ports; 
        ports.elm2JsTestMessage.subscribe(this.updateMessage);
        ports.js2ElmTestMessage.send("hello");

        ports.elm2JsTestInt.subscribe(this.updateInt)
        ports.js2ElmTestInt.send(3)
    },

    updateMessage: function(elmMsg) {
        this.setState({msg: elmMsg, i: this.state.i});
    },

    updateInt: function(i) { this.setState({msg: this.state.msg, i: i})},

    render: function () {
        return (
            <div className="row">
                <div className="col-md-6 bolded">hello</div>
                <div className="col-md-6 bolded">world</div>
                <div className="col-md-6">{this.state.msg}</div>
                <div className="col-md-6 bolded">{this.state.i}</div>
            </div>
        );
    }
});
