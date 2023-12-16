const sharp = require('sharp');

let dims = [[256, 366], [730, 1045], [1006, 1440], [1230, 1761], [1420, 2033], [1580, 2262], [1730, 2476]]
var src = 'lighthouse_blur';
var path = '/Users/Lukas/Documents/ICS/donau.ca/www/html/images/';
var doLossless = false;

for (var dim = 0; dim < dims.length; dim++) {

    sharp(path + 'originals/' + src + ".png")
        .resize(dims[dim][0], dims[dim][1], {
            kernel: sharp.kernel.cubic
        })
        .webp({
            smartSubsample: true,
            preset: 'photo',
            effort: 6,
            quality: 80,
            lossless: doLossless
        })
        .toFile(path + src + '-' + dims[dim][0] + '.webp');


}