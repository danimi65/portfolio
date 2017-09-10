const gulp = require('gulp');
const scss = require('gulp-sass');

gulp.task('scss', () => {
	return gulp.src('./src/containers/Home/index.scss')
		.pipe(scss({ errorLogToConsole: true }))
		.on('error', process.exit)
		.pipe(gulp.dest('./src/containers/Home'));
});

gulp.task('watch', () => {
	gulp.watch('./src/containers/Home/*.scss', ['scss']);
	gulp.watch('./gulpfile.js', process.exit);
});

gulp.task('default', ['watch']);