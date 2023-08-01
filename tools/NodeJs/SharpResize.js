const sharp = require('sharp');

let dims = [[256, 144], [860, 484], [1190, 669], [1530, 861], [1810, 1018], [2048, 1152]];
var src = 'pi_cropped';
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