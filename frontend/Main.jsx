import * as React from 'react';

export default React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="col-md-6 bolded">hello</div>
                <div className="col-md-6 bolded">world</div>
                <div className="col-md-6">better be a new line</div>
            </div>
        );
    }
})
