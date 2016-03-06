const gulp = require('gulp');
const babel = require('gulp-babel');
const jasmine = require('gulp-jasmine-phantom');
 
gulp.task('tests', function () {
  return gulp.src('spec/test.js')
          .pipe(jasmine());
});


gulp.task('default', function() {
	return gulp.src(['./js/src/lodash.js', './js/src/hw-21-22.js', './js/src/script.js'])
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('js'));
});
