const sharp = require('sharp');

let dims = [[256, 144], [720, 405], [1180, 664], [1650, 928], [2016, 1134], [2200, 1238]]
var src = "banner.png"
var path = '/Users/Lukas/OneDrive/OneDrive - University of Guelph/Documents/ICS/donau.ca/www/html/images/'

for (var dim = 0; dim < dims.length; dim++) {

    sharp(path + 'originals/' + src)
        .resize(dims[dim][0], dims[dim][1], {
            kernel: sharp.kernel.cubic,
        })
        .webp({
            smartSubsample: true,
            preset: 'photo',
            effort: 6,
            quality: 80
        })
        .toFile(src + '-' + dims[dim][0] + '.webp');


}