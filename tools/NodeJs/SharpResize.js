const sharp = require('sharp');

let dims = [[256, 261], [784, 800], [1150, 1173], [1430, 1459], [1660, 1694], [1860, 1898], [2048, 2090]]
var src = 'SkiCropped';
var path = '/Users/Lukas/OneDrive/OneDrive - University of Guelph/Documents/ICS/donau.ca/www/html/images/';

for (var dim = 0; dim < dims.length; dim++) {

    sharp(path + 'originals/' + src + ".png")
        .resize(dims[dim][0], dims[dim][1], {
            kernel: sharp.kernel.cubic,
        })
        .webp({
            smartSubsample: true,
            preset: 'photo',
            effort: 6,
            quality: 80
        })
        .toFile(path + src + '-' + dims[dim][0] + '.webp');


}