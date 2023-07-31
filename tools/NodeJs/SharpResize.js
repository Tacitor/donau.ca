const sharp = require('sharp');

let dims = [[256, 352], [580, 797], [784, 1077], [980, 1346], [1150, 1580]]
var src = "lighthouse_frame"
var path = '/Users/Lukas/OneDrive/OneDrive - University of Guelph/Documents/ICS/donau.ca/www/html/images/'

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