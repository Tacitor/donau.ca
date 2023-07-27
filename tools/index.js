const sharp = require('sharp');

let dims = [[1000, 750], [2000, 1500]]
var input = 'lighthouse_sunset'

for (var dim = 0; dim < dims.length; dim++) {

    sharp(input + '.webp')
        .resize(dims[dim][0], dims[dim][1], {
            kernel: sharp.kernel.cubic,
        })
        .webp({
            smartSubsample: true,
            preset: 'photo',
            effort: 6,
            quality: 80
        })
        .toFile(input + '-' + dims[dim][0] + '.webp');


}