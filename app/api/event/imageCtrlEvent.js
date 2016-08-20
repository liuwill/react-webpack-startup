var React = require('react');
var ReactDOM = require('react-dom');
var ImgListItemComponent = require('../../component/ImgListItemComponent');
var ImageCtrl = require('../../schema/image');

var ImageCtrlEvent = {
    initImageCtrl:function(args){
        var imageCtrl = new ImageCtrl();
        var imageDataStore = imageCtrl.findAll();
        if(args && args === "default" && !imageDataStore || imageDataStore.length < 1){
            ImageCtrlEvent.loadDefaultData();
        }

        ImageCtrlEvent.showImageList();
    },
    "loadDefaultData":function(){
        var imageCtrl = new ImageCtrl();
        var defaultImgData = require('../../data/imageData');

        for(var i in defaultImgData){
            var imgData = defaultImgData[i];

            var imageData = new ImageData(imgData);
            imageCtrl.addImage(imageData);
        }
    },
    "showImageList":function(){
        var imageCtrl = new ImageCtrl();
        var imageDataStore = imageCtrl.findAll();
        ReactDOM.render(
            <div className="img-content card-mode">
                <ul className="js-img-list u-clearfix">
                    {
                        imageDataStore.map(function (item,index) {
                            return <li key={item.id}><ImgListItemComponent imgData={item}/></li>
                        })
                    }
                </ul>
            </div>,
            document.getElementById('imageList')
        );
    }
};
module.exports = ImageCtrlEvent;