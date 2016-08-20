var React = require('react');
var ReactDOM = require('react-dom');
var ImageCtrl = require('../schema/image');
var imageCtrlEvent = require('../api/event/imageCtrlEvent');
var LayeredComponentMixin = require('./LayeredComponentMixin');

//require('../styles/main.scss');
module.exports = React.createClass({
    mixins: [LayeredComponentMixin],
    getInitialState: function() {
        return {fileTip: "",fileName: "",fileStatus:false,fileEntity:null,clicked: false,fileContent:"",fileNameShow:""};
    },
    render: function () {
        return (
            <button className="pure-btn border-btn upload-trigger-btn" onClick={this.handleClick}>
                <i className="fa fa-plus" aria-hidden="true"></i>
                <span className="btn-text">上传</span>
            </button>
        );
    },
    renderLayer: function() {
        if (this.state.clicked) {
            return (
                <div className="simple-modal upload-modal">
                    <div className="modal-dialog">
                        <div className="modal-box">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.handleClose}>
                                    <span aria-hidden="true">×</span>
                                </button>
                                <div className="modal-title">上传图片</div>
                            </div>
                            <div className="modal-body">
                                <div className="file-choose-container">
                                    <div className="file-choose-row">
                                        <div className="file-choose-ctrl">
                                            <button className="btn btn-danger img-choose-btn">Choose Photo</button>
                                            <input id="imgFile" type="file" onChange={this.choosefile}/>
                                        </div>
                                        <div className="upload-file-info">
                                            {this.state.fileTip}
                                        </div>
                                    </div>
                                    <div className="file-preview-row image-package">
                                        <img id="showImg" className="img-card" src={this.state.fileContent}/>
                                        {this.state.fileNameShow}
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-smooth btn-cancel" onClick={this.handleClose}>Cancel</button>
                                <button className="btn btn-smooth btn-success img-save-btn" onClick={this.saveFile}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }else {
            return <div />;
        }
    },
    choosefile:function(event) {
        //e.preventDefault();
        this.setState({fileContent:"",fileStatus:false,fileEntity:null});

        var fileLsit = event.target.files;
        var imgFile = fileLsit[0];
        var imageType = /image.*/;

        if (fileLsit > 1) {
            this.setState({fileTip: "一次只能选择一张图片"});
            //alert("一次只能选择一张图片");
            return;
        }else if (!imgFile.type.match(imageType)) {
            this.setState({fileTip: "文件不是图片类型"});
            //alert("文件不是图片类型");
            return;
        }else if (!imgFile.size > "800000") {
            this.setState({fileTip: "文件大小不能超过800KB"});
            //alert("文件大小不能超过800KB");
            return;
        }

        //this.setState({fileName: imgFile.name, fileTip:imgFile.type});
        this.setState({
            fileName: imgFile.name,
            fileNameShow:<div className="image-caption">{imgFile.name}</div>,
            fileTip:<div className="tip-content">
                <span className="tip-col"><label className="tip-label">type</label><span className="tip-text">{imgFile.type}</span></span>
                <span className="tip-col"><label className="tip-label">size</label><span className="tip-text">{imgFile.size}</span></span>
            </div>
        });
        /*var img = document.getElementById("showImg");
        img.classList.add("obj");
        img.file = imgFile;*/

        this.setState({fileEntity:imgFile});
        var reader = new FileReader();
        reader.onload = (function(reactObj){
            return function(e){
                reactObj.setState({fileContent:e.target.result,fileStatus:true});
                //aImg.src = e.target.result;
            };
        })(this);
        reader.readAsDataURL(imgFile);
    },
    saveFile:function () {
        if(!this.state.fileStatus){
            this.setState({fileTip: "请点击按钮选择要上传的文件"});
            return;
        }

        //var fileLsit = this.refs.modalFile.getDOMNode().files;
        var imgFile = this.state.fileEntity;//fileLsit[0];
        var imageType = /image.*/;

        /*if (fileLsit > 1) {
            alert("一次只能选择一张图片");
            return;
        }else */
        if (!imgFile.type.match(imageType)) {
            this.setState({fileTip: "文件不是图片类型"});
            //alert("文件不是图片类型");
            return;
        }else if (!imgFile.size > "800000") {
            this.setState({fileTip: "文件大小不能超过800KB"});
            //alert("文件大小不能超过800KB");
            return;
        }

        var imageCtrl = new ImageCtrl();
        var imgData = imageCtrl.produceImage();
        imgData.name = imgFile.name;
        imgData.format = imgFile.type;
        imgData.createTime = new Date();
        imgData.visit = 0;

        var reader = new FileReader();
        reader.onload = (function(imageData,reactObj){
            return function(e){
                imageData.file = e.target.result;
                imageCtrl.addImage(imageData);
                imageCtrlEvent.showImageList();
                reactObj.setState({fileTip:"保存成功",fileName: "",fileStatus:false,fileEntity:null,fileContent:"",fileNameShow:""});
            };
        })(imgData,this);
        reader.readAsDataURL(imgFile);
    },
    handleClose: function() {
        this.setState({fileTip:"",fileName: "",fileStatus:false,fileEntity:null,clicked: false,fileContent:"",fileNameShow:""});
    },
    handleClick: function() {
        this.setState({ clicked: true });
    }
});