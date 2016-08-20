var React = require('react');
var ReactDOM = require('react-dom');
var ImageCtrl = require('../schema/image');
var imageCtrlEvent = require('../api/event/imageCtrlEvent');

//require('../styles/main.scss');

module.exports = React.createClass({
    getInitialState: function() {
        return {fileName: ""};
    },
    choosefile:function(event) {
        //e.preventDefault();
        var fileLsit = event.target.files;
        var imgFile = fileLsit[0];
        var imageType = /image.*/;

        if (fileLsit > 1) {
            alert("一次只能选择一张图片");
            return;
        }else if (!imgFile.type.match(imageType)) {
            alert("文件不是图片类型");
            return;
        }else if (!imgFile.size > "800000") {
            alert("文件大小不能超过800KB");
            return;
        }

        this.setState({fileName: imgFile.name});
        var img = document.getElementById("showImg");
        img.classList.add("obj");
        img.file = imgFile;

        var reader = new FileReader();
        reader.onload = (function(aImg){
            return function(e){
                aImg.src = e.target.result;
            };
        })(img);
        reader.readAsDataURL(imgFile);
    },
    saveFile:function () {
        console.log("==========================");
        var fileLsit = document.getElementById("imgFile").files;
        var imgFile = fileLsit[0];
        var imageType = /image.*/;

        if (fileLsit > 1) {
            alert("一次只能选择一张图片");
            return;
        }else if (!imgFile.type.match(imageType)) {
            alert("文件不是图片类型");
            return;
        }else if (!imgFile.size > "800000") {
            alert("文件大小不能超过800KB");
            return;
        }

        var imageCtrl = new ImageCtrl();
        var imgData = imageCtrl.produceImage();
        imgData.name = imgFile.name;
        imgData.format = imgFile.type;
        imgData.createTime = new Date();
        imgData.visit = 0;

        var reader = new FileReader();
        reader.onload = (function(imageData){
            return function(e){
                imageData.file = e.target.result;
                imageCtrl.addImage(imageData);
                imageCtrlEvent.showImageList();
            };
        })(imgData);
        reader.readAsDataURL(imgFile);
    },
    render: function() {
        return (
            <div className="file-choose-container">
                <div className="file-choose-row">
                    <div className="file-choose-ctrl">
                        <button className="btn btn-smooth btn-danger img-choose-btn" onClick={this.saveFile}>Choose Photo</button>
                        <input id="imgFile" type="file" onChange={this.choosefile}/>
                    </div>
                    <div className="upload-file-info">
                        <span>{this.state.fileName}</span>
                    </div>
                    <button className="btn btn-smooth btn-success img-save-btn" onClick={this.saveFile}>Save</button>
                </div>
                <div className="file-preview-row">
                    <img id="showImg" className="img-card"/>
                </div>
            </div>
        );
    }
});