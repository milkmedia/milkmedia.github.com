var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function () {
  gulp.src('./less/*.less')
    .pipe(less({paths: './bower_components/bootstrap/less/'}))
    .pipe(gulp.dest('./css/'));
});
