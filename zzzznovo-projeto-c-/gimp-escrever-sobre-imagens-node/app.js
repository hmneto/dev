var Jimp = require("jimp");

var fileName = 'test.png';
var imageCaption = 'segj';
var loadedImage;

Jimp.read(fileName)
    .then(function (image) {
        loadedImage = image;
        return Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
    })
    .then(function (font) {
        loadedImage.print(font, 30, 30, imageCaption)
                   .write(fileName);
    })
    .catch(function (err) {
        console.error(err);
    })