var React = require('react');
var ReactDOM = require('react-dom');
var FileChooseComponent = require('./component/FileChooseComponent');
var ImgListItemComponent = require('./component/ImgListItemComponent');
var NaviHeaderComponent = require('./component/NaviHeaderComponent');
var ImageFilterComponent = require('./component/ImageFilterComponent');
var imageCtrlEvent = require('./api/event/imageCtrlEvent');

var jsNaviHeader = document.getElementById('js-navi-header');
var jsFileChoose = document.getElementById('js-user-data');

ReactDOM.render(
    <NaviHeaderComponent />,
    jsNaviHeader
);

ReactDOM.render(
    <ImageFilterComponent/>,
    jsFileChoose
);

imageCtrlEvent.initImageCtrl("default");
