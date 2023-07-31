const sharp = require('sharp');

let dims = [[256, 248], [540, 523], [830, 804], [1150, 1114], [1430, 1386], [1660, 1608], [1860, 1802], [2048, 1984]]
var src = "pi"
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