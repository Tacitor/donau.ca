const sharp = require('sharp');

let dims = [[256, 192], [830, 623], [1150, 863], [1510, 1133], [1800, 1350], [2048, 1536]]
var src = "images/pi_cropped.webp"

for (var dim = 0; dim < dims.length; dim++) {

    sharp(src + '.webp')
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