var dataHandler = require('../api/DataHandler');

ImageData = function(initData){
    this.name = "";
    this.id = "";
    this.desc = "";
    this.url = "";
    this.visit = "";
    this.createTime = null;
    this.format = null;
    this.file = "";
    this.type = "";

    var dataTypeList = ImageData.getParamList();
    if(typeof initData == "object"){
        for(var key in dataTypeList){
            var keyName = dataTypeList[key];
            if(initData[keyName]){
                this[keyName] = initData[keyName];
            }
        }
    }
};
ImageData.getParamList = function(){
    var dataTypeList = ["name","id","desc","url","visit","createTime","format","file","type"];
    return dataTypeList;
};

/* ImageCtrl */
ImageCtrl = function(){};
ImageCtrl.key = "loc_images";
ImageCtrl.prototype.produceImage = function(data){
    var imageList = dataHandler.get(ImageCtrl.key);
    var id = imageList.length + 1;
    return new ImageData({id:id});
};
ImageCtrl.prototype.addImage = function(data){
    return dataHandler.save(ImageCtrl.key,data);
};
ImageCtrl.prototype.removeImage = function(id){
    return dataHandler.delete(ImageCtrl.key,id);
};
ImageCtrl.prototype.modifyImage = function(data){
    return dataHandler.save(ImageCtrl.key,data);
};
ImageCtrl.prototype.getById = function(id) {
    var imageList = dataHandler.get(ImageCtrl.key);
    for (var i in imageList) {
        var singleImg = imageList[i];
        if (singleImg.id == id) {
            return singleImg;
        }
    }
    return null;
};
ImageCtrl.prototype.findAll = function(){
    return dataHandler.get(ImageCtrl.key);
};

module.exports = ImageCtrl;