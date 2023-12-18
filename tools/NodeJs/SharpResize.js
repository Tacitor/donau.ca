const sharp = require('sharp');

let dims = [[256, 181], [870, 615], [1200, 848], [1530, 1081], [1800, 1272], [2048, 1447]]
var src = 'GeoEssayProduction';
var path = '/Users/Lukas/Documents/ICS/donau.ca/www/html/proj/images/';
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