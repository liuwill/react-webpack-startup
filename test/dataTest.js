var assert = require('assert');

describe('ImgCtrl', function() {
    var ImageCtrl = require('../app/schema/image');

    describe('#init()', function() {
        it('they should be functions', function() {
            var imageCtrl = new ImageCtrl();

            assert.equal(typeof imageCtrl.addImage , "function");
            assert.equal(typeof imageCtrl.removeImage , "function");
            assert.equal(typeof imageCtrl.modifyImage , "function");
            assert.equal(typeof imageCtrl.getById , "function");
            assert.equal(typeof imageCtrl.findAll , "function");
            assert.equal(typeof ImageData, "function");
        });
    });

    describe('#produceImage()', function() {
        it('should product image data', function() {
            var imageCtrl = new ImageCtrl();

            var curLen = imageCtrl.findAll().length;
            var imageData = imageCtrl.produceImage();
            assert.equal(curLen + 1 ,imageData.id);
        });
    });

    describe('#addImage()', function() {
        it('should product image data', function() {
            var imageCtrl = new ImageCtrl();
            var imageData = imageCtrl.produceImage();

            imageData.name = "test_name";
            assert.ok(imageCtrl.addImage(imageData));
        });
    });
});

describe('ImageData', function() {

    describe('#ImageData()', function() {
        it('they should be value', function() {
            var testImgData = require('./data/imageTestData');

            var imageData = new ImageData(testImgData);
            var parmaList = ImageData.getParamList();
            for(var key in parmaList){
                var keyName = parmaList[key];
                assert.equal(imageData[keyName], testImgData[keyName]);
            }
            assert.ok(imageData.id);
        });
    });
});
