const sharp = require('sharp');

let dims = [[256, 295], [830, 956], [1150, 1325], [1380, 1589], [1570, 1808], [1750, 2016], [1900, 2188], [2048, 2359]]
var src = 'ModelMMicrocontroller';
var path = '/Users/Lukas/OneDrive/OneDrive - University of Guelph/Documents/ICS/donau.ca/www/html/proj/images/';
var doLossless = false;

for (var dim = 0; dim < dims.length; dim++) {

    sharp(path + 'originals/' + src + ".webp")
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