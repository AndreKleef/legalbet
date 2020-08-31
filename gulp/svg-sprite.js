// Copies images to ./build directory and optimizes them.
var gulp      = require('gulp'),
    svgSprite = require('gulp-svg-sprite')
	cfg       = require('../config.json');

// SVG Config
var spriteConfig = {
    mode: {
        symbol: { // Symbol mode to build the SVG
            dest: cfg.build.images, // Destination folder
            sprite: 'sprite.svg', // Sprite name
            example: false // Build sample page
        }
    },
    svg: {
        xmlDeclaration: false, // strip out the XML attribute
        doctypeDeclaration: false // don't include the !DOCTYPE declaration
    }
};

var spriteConfigDev = {
    mode: {
        symbol: { // Symbol mode to build the SVG
            dest: cfg.src.images, // Destination folder
            sprite: 'sprite.svg', // Sprite name
            example: false // Build sample page
        }
    },
    svg: {
        xmlDeclaration: false, // strip out the XML attribute
        doctypeDeclaration: false // don't include the !DOCTYPE declaration
    }
};

gulp.task('svg-sprite', function() {
    return gulp.src(cfg.src.icons + '/**/*.svg')
        .pipe(svgSprite(spriteConfig))
        .pipe(gulp.dest('.'));
});

gulp.task('svg-sprite-dev', function() {
    return gulp.src(cfg.src.icons + '/**/*.svg')
        .pipe(svgSprite(spriteConfigDev))
        .pipe(gulp.dest('.'));
});

gulp.task('svg-sprite:watch', function() {
    gulp.watch(cfg.src.icons + '/**/*.svg', ['svg-sprite']);
});
