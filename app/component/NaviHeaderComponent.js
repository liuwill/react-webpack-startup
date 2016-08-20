var React = require('react');
var ReactDOM = require('react-dom');
var SidebwarComponent = require('./SidebarComponent');
var FileChooseModalComponent = require('./FileChooseModalComponent');

module.exports = React.createClass({
    expandSidebar:function(){
        this.refs.jsSidebar.openSidebar();
    },
    render: function() {
        return (
            <div className="header-container u-clearfix">
                <div className="site-header-content">
                    <button className="menu-toggler" onClick={this.expandSidebar}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    <a href="" className="logo-img">LiuWill</a>

                    <div className="js-sidebar">
                        <SidebwarComponent ref="jsSidebar"/>
                    </div>
                </div>
                <div className="menu-header-content">
                    <FileChooseModalComponent/>
                </div>
            </div>
        );

    }
});