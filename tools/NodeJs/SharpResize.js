const sharp = require('sharp');

let dims = [[256, 139], [1130, 612], [1580, 856], [1920, 1040], [2048, 1109]]
var src = 'WebserverVSCode';
var path = '/Users/Lukas/OneDrive/OneDrive - University of Guelph/Documents/ICS/donau.ca/www/html/proj/images/';
var doLossless = false;

for (var dim = 0; dim < dims.length; dim++) {

    sharp(path + 'originals/' + src + ".png")
        .resize(dims[dim][0], dims[dim][1], {
            kernel: sharp.kernel.cubic,
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