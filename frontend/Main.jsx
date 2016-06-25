import * as React from 'react';
import * as Elm from '../obj/Lib';


export default React.createClass({
    getInitialState: function() {
        return {msg: "initializing..."};
    },
    componentDidMount: function() {
        const ports = Elm.ElmLib.worker().ports; 
        ports.testMessage.subscribe(this.updateMessage);
        setTimeout(function() {
            ports.dispatchGetTestMessage.send("hello");
        });
    },
    updateMessage: function(elmMsg) {
        this.setState({msg: elmMsg});
    },
    render: function () {
        return (
            <div className="row">
                <div className="col-md-6 bolded">hello</div>
                <div className="col-md-6 bolded">world</div>
                <div className="col-md-6">{this.state.msg}</div>
            </div>
        );
    }
});
