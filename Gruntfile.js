module.exports = function(grunt) {

  // Project configuration.
	grunt.initConfig({

		watch: {
			scripts: {
				files: ["*.css", "*.html"],
				options: {
					spawn: false,
				},
			} 
		},
		browserSync: {
			dev: {
				bsFiles: {
					src : [
						"*.css",
						"*.html"
					]
				},
				options: {
					watchTask: true,
					server: {
						baseDir: "./"
					}
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-browser-sync");
  
	grunt.registerTask("default", ["browserSync", "watch"]);
};
