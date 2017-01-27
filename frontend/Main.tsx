import * as React from 'react'

export class Main extends React.Component<{}, { msg:string }> {
    constructor(props?:{}) {
        super(props)
        this.state = { msg: "initializing..." }
   }

    // componentDidMount() {
    //     const ports = Elm.ElmLib.worker().ports; 
    //     ports.elm2JsTestMessage.subscribe(this.updateMessage);
    //     ports.js2ElmTestMessage.send("hello");

    //     ports.elm2JsTestInt.subscribe(this.updateInt)
    //     ports.js2ElmTestInt.send(3)
    // }

    // updateMessage(elmMsg:string) {
    //     this.setState({msg: elmMsg, i: this.state.i});
    // }

    // updateInt(i) { this.setState({msg: this.state.msg, i: i}) }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 bolded">hello</div>
                <div className="col-md-6 bolded">world</div>
                <div className="col-md-6">{this.state.msg}</div>
            </div>
        );
        // <div className="col-md-6 bolded">{this.state.i}</div>
    }
}
