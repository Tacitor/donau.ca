const sharp = require('sharp');

let dims = [[256, 192], [830, 623], [1150, 863], [1510, 1133], [1800, 1350], [2048, 1536]]
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