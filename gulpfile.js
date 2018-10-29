var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

gulp.task('reload', function() {
    browserSync.reload(); 
});

gulp.task('serve', ['sass'], function() {
    browserSync({
        server: './'
    })
    
    gulp.watch('./*.html', ['reload']);
    gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('sass', function() {
    return gulp.src('./scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);