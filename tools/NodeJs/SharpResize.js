const sharp = require('sharp');

let dims = [[256, 192], [1030, 773], [1440, 1080], [1750, 1313], [2016, 1512]]
var src = 'SkiWide';
var path = '/Users/Lukas/OneDrive/OneDrive - University of Guelph/Documents/ICS/donau.ca/www/html/images/';
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