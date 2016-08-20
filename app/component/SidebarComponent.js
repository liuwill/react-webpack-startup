var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
    getInitialState: function() {
        return { expanded: false };
    },
    openSidebar:function(){
        this.setState({ expanded: true });
    },
    closeSidebar:function(){
        this.setState({ expanded: false });
    },
    render: function() {
        if(this.state.expanded){
            return (
                <div className="js-sidebar-inner">
                    <div className="sidebar-menu-mask"></div>
                    <div className="sidebar-container">
                        <div className="sidebar-menu u-clearfix">
                            <div className="sidebar-content">
                                <div className="sidebar-header">
                                    <a href="" className="logo-img">LiuWill</a>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeSidebar}><span aria-hidden="true">×</span></button>
                                </div>
                                <div className="sidebar-body">
                                    <div className="sidebar-button-group">
                                        <a className="pure-btn link-btn border-btn" href="https://github.com/liuwill/react-webpack-startup">
                                            <span className="btn-text">查看源代码</span>
                                        </a>
                                    </div>
                                    <ul className="sidebar-menu-group">
                                        <li>清除记录</li>
                                        <li>加载默认数据</li>
                                        <li><a href="http://www.liuwill.com/">关于</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }else {
            return <div />;
        }

    }
});