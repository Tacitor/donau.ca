const sharp = require('sharp');

let dims = [[256, 316], [684, 843], [950, 1171], [1150, 1417], [1380, 1701], [1570, 1935], [1750, 2157], [1900, 2342], [2048, 2524]]
var src = 'FileProcessorJSON';
var path = '/Users/Lukas/OneDrive/OneDrive - University of Guelph/Documents/ICS/donau.ca/www/html/proj/images/';
var doLossless = false;

for (var dim = 0; dim < dims.length; dim++) {

    sharp(path + 'originals/' + src + ".png")
        .resize(dims[dim][0], dims[dim][1], {
            kernel: sharp.kernel.nearest
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