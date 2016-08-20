if(typeof sessionStorage != "object"){
    var imageDataList = require("../data/imageData");
    var imageDataStr = JSON.stringify(imageDataList);
    sessionStorage = {
        data:imageDataList
    };
    sessionStorage.getItem = function(key){
        if(key){
            return JSON.stringify(sessionStorage.data);
        }
    };
    sessionStorage.setItem = function(key,value){
        sessionStorage.data = JSON.parse(value);
        return true;
    };
}

var DataHandler = {
    get:function(key,callback){
        if(typeof sessionStorage != "object"){
            return [];
        }

        var dataStr = sessionStorage.getItem(key);
        var keyData = [];
        if(dataStr){
            keyData = JSON.parse(dataStr);
        }
        typeof callback == "function" && callback(keyData);
        return keyData;
    },
    getList:function(key,index,length,callback){
        if(typeof sessionStorage != "object"){
            return [];
        }

        var dataStr = sessionStorage.getItem(key);
        var keyData = [];
        if(dataStr){
            keyData = JSON.parse(dataStr);
        }

        var resultData = [];
        if(index < 0 || index+length > keyData.length){
            return resultData;
        }
        for(var i = 0;i < length; i++){
            resultData.push(keyData[index+i]);
        }
        typeof callback == "function" && callback(keyData);
        return keyData;
    },
    save:function(key,data,callback){
        if(typeof sessionStorage != "object"){
            typeof callback == "function" && callback("false");
            return false;
        }

        var dataStr = sessionStorage.getItem(key);
        var keyData = [];
        if(dataStr){
            keyData = JSON.parse(dataStr);
        }

        var dataMark = false;
        for(var i = 0;i < keyData.length; i++){
            if(data.id == keyData[i].id){
                keyData[i] = data;
                dataMark = true;
            }
        }

        if(!dataMark){
            keyData.push(data);
        }
        sessionStorage.setItem(key,JSON.stringify(keyData));
        typeof callback == "function" && callback("success");
        return true;
    },
    delete:function(key,id,callback){
        if(typeof sessionStorage != "object"){
            typeof callback == "function" && callback("false");
            return false;
        }

        var dataStr = sessionStorage.getItem(key);
        var keyData = [];
        if(dataStr){
            keyData = JSON.parse(dataStr);
        }

        for(var i = 0;i < keyData.length; i++){
            if(data.id == keyData[i].id){
                delete keyData[i];
            }
        }
        sessionStorage.setItem(key,JSON.stringify(keyData));
        typeof callback == "function" && callback("success");
        return true;
    }
};
module.exports = DataHandler;