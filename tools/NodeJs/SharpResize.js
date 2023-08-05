const sharp = require('sharp');

let dims = [[256, 338], [670, 884], [906, 1195], [1150, 1517], [1340, 1767], [1510, 1992], [1660, 2190], [1800, 2374], [1930, 2546], [2048, 2701]]
var src = 'FileProcessorContributors';
var path = '/Users/Lukas/OneDrive/OneDrive - University of Guelph/Documents/ICS/donau.ca/www/html/proj/images/';
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