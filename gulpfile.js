var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var del = require('del');
var rename = require("gulp-rename");

gulp.task('default', function() {
    gulp.src(['less/style.less'])
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(gulp.dest('css'))
});

gulp.task('dev', function() {
    gulp.src(['less/style.less'])
        .pipe(less())
        .pipe(gulp.dest('css'))
});
