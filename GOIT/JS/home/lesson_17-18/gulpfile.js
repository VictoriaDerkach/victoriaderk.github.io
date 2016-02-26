var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var rename = require('gulp-rename');
var image = require('gulp-image');

gulp.task('js', function() {  
    return gulp.src('src/js/*.js')
        .pipe(concat('script.main.js'))
        .pipe(gulp.dest('./js/'))
        .pipe(uglify())
        .pipe(rename('script.main.min.js'))
        .pipe(gulp.dest('./js/'))
});

gulp.task('css', function() {  
    return gulp.src(['src/css/reset.css', 'src/css/style.css'])
        .pipe(concat('style.main.css'))
        .pipe(gulp.dest('./css/'))
        .pipe(cssmin())
        .pipe(rename('style.main.min.css'))
        .pipe(gulp.dest('./css/'))
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
    .pipe(gulp.dest('./img'));
});

gulp.task('default', ['js', 'css', 'html', 'img'], function() {
});


