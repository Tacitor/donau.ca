const sharp = require('sharp');

sharp('lighthouse_sunset.webp')
    .resize(1000, 750, {
        kernel: sharp.kernel.cubic,
    })
    .webp({
        smartSubsample: true,
        preset: 'photo',
        effort: 6,
        quality: 80
    })
    .toFile('output/test.webp');