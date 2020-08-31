// Copies images to ./build directory and optimizes them.
var gulp     = require('gulp'),
    cfg      = require('../config.json'),
    imagemin = require('gulp-imagemin');

var includePath = cfg.src.images + '/**',
    excludePath = '!' + cfg.src.icons + '{,/**/*}';

gulp.task('images', function(){

    return gulp.src([includePath, excludePath])
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5})
        ]))
        .pipe(gulp.dest(cfg.build.images));
});

gulp.task('images:watch', function () {
  gulp.watch([includePath, excludePath], ['images']);
});
