const sharp = require('sharp');

let dims = [[256, 144], [1140, 641], [1600, 900], [1950, 1097], [2250, 1266], [2510, 1412], [2750, 1547], [2960, 1665], [3170, 1783], [3360, 1890], [3540, 1991], [3710, 2087], [3870, 2177], [4032, 2268]]
var src = 'banner';
var path = '/Users/Lukas/Documents/ICS/donau.ca/www/html/images/';
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