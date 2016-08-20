var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="img-item">
                <div className="img-view">
                    <img className="picture" src={this.props.imgData.file}/>
                </div>
                <div className="img-info">
                    <span className="img-name">{this.props.imgData.name}</span>
                    <span className="img-type">{this.props.imgData.format}</span>
                </div>
            </div>
        );
    }
});