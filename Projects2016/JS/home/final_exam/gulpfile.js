var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var minifyHtml = require('gulp-minify-html');
var image = require('gulp-image');
var sass = require('gulp-sass');
var del = require('del');

gulp.task('clean', function() {
  del(['build']);
});

gulp.task('sass', function () {
  return gulp.src('./src/css/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/css/**/*.scss', ['sass']);
});

gulp.task('js', function() {  
    return gulp.src('src/js/*.js')
        .pipe(concat('script.main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js/'))
        //
});

gulp.task('css', function() {  
    return gulp.src(['./css/reset.css', './css/style.css'])
        .pipe(concat('style.main.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('./build/css/'))
        
        //.pipe(rename('style.main.min.css'))
        //.pipe(gulp.dest('./css/'))
});

gulp.task('html', function() {  
    return gulp.src(['src/html/header.html', 'src/html/content.html', 'src/html/footer.html'])
        .pipe(concat('index.html'))
        .pipe(minifyHtml()) 
        .pipe(gulp.dest('./'))
});

gulp.task('img', function () {
  gulp.src('./src/img/*')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      advpng: true,
      jpegRecompress: false,
      jpegoptim: true,
      mozjpeg: true,
      gifsicle: true,
      svgo: true
    }))
    .pipe(gulp.dest('./build/img'));
});

gulp.task('default', ['sass', 'js', 'css', 'html', 'img'], function() {
});