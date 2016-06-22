module.exports = function(grunt) {
	
	// Load plugins
	require('load-grunt-tasks')(grunt);
	
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			main: {
				files: {
					'dist/jquery-editable-select.js': ['src/jquery-editable-select.js'],
					'dist/jquery-editable-select.css': ['src/jquery-editable-select.css']
				}
			}
		},
		uglify: {
			main: {
				files: {
					'dist/jquery-editable-select.min.js': ['dist/jquery-editable-select.js']
				}
			}
		},
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			main: {
				files: {
					'dist/jquery-editable-select.min.css': ['dist/jquery-editable-select.css']
				}
			}
		},
		header: {
			main: {
				options: {
					text: '/*! jQuery Editable Select - v<%= pkg.version %> - https://github.com/indrimuska/jquery-editable-select - (c) 2016 Indri Muska - MIT */'
				},
				files: {
					'dist/jquery-editable-select.min.js': 'dist/jquery-editable-select.min.js',
					'dist/jquery-editable-select.min.css': 'dist/jquery-editable-select.min.css'
				}
			}
		},
		'sync-json': {
			options: {
				include: ['name', 'description', 'version']
			},
			bower: {
				files: {
					"bower.json": "package.json"
				}
			}
		}
	});
	
	// Default tasks.
	grunt.registerTask('default', ['copy', 'uglify', 'cssmin', 'header', 'sync-json']);
	
};