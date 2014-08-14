'use strict';

module.exports = function(grunt) {
	
	require('time-grunt')(grunt);
	require('jit-grunt')(grunt);

	grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
		
		watch: {
	    styles: {
		    files: ['library/scss/*.scss'],
		    tasks: ['sass'],
			},
			scripts: {
				files: [
					'library/js/*/*.js'
				],
				tasks: ['concat'],
			},
			markup: {
				files: [
					'templates/*/*.hbs'
				],
				tasks: ['assemble'],
			},
		},
		
		sass: {
	    compile: {
				files: {
					'site/library/css/style.css': 'library/scss/combined.scss'
				},
				options: {
					sourceMap: true
				},
			},
		},

		concat: {
	    vendor: {
	      src: [
	      	'library/js/vendor/*.js',
	      	'library/js/plugins/*.js',
	      	'library/js/custom/*.js',
      	],
	      dest: 'site/library/js/script.js',
	    },
	  },
		
		// full options available - http://www.browsersync.io/docs/options/

		assemble: {
      options: {	
      	layout: 'templates/layouts/default.hbs',
				partials: ['templates/includes/*.hbs'],
				flatten: true,
			},
			home: {
				src: ['templates/pages/index.hbs'],
				dest: 'site/',
			},
    },

		browserSync: {
			dev: {
		    bsFiles: {
	        src : [
	        	'site/library/css/style.css',
	        	'site/library/js/*.js',
	        	'site/*.html',
	        	'site/*/*.html',
        	]
		    }, 
		    options: {
		    	watchTask: true,
		    	server: {
		    	    baseDir: 'site',
		    	},
          debugInfo: true,
          browser: 'google chrome',
          ghostMode: {
          	scroll: false,
          	links: true,
          	forms: true,
          	location: false
          },
        },
			},
		},

  });
	
	grunt.registerTask('default', ['browserSync', 'watch']);

};