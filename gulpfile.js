var gulp = require("gulp"),
	gutil = require("gulp-util"),
	compass = require("gulp-compass");

var sassSources = [ "sass/style.scss" ];
var sassWatchSources = [
							"sass/*.scss",
							"sass/base/*.scss",
							"sass/layout/*.scss",
							"sass/module/*.scss",
							"sass/theme/*.scss"
						]

gulp.task("compass", function() {
	gulp.src(sassSources)
		.pipe(compass({
			sass: "sass",
			image: "images",
			style: "expanded"
		}))
		.pipe(gulp.dest("css"));
});

gulp.task("watch", function() {
	gulp.watch(sassWatchSources, ["compass"]);
});