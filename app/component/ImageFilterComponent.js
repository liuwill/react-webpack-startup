var React = require('react');

module.exports = React.createClass({
    render:function(){
        return (
            <div className="top-menu u-clearfix">
                <div className="top-menu-inner u-clearfix">
                    <div className="top-menu-item" title="详情">
                        <span className="items-witch"><i className="fa fa-th-large" aria-hidden="true"></i></span>
                    </div>
                    <div className="top-menu-item" title="小图">
                        <span className="items-witch"><i className="fa fa-th" aria-hidden="true"></i></span>
                    </div>
                    <div className="top-menu-item" title="列表">
                        <span className="items-witch"><i className="fa fa-th-list" aria-hidden="true"></i></span>
                    </div>
                </div>
            </div>
        );
    }
});