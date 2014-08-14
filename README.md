sms-grunt-boilerplate 1.0
=================

Our own grunt-powered boilerplate for static sites, using BrowserSync, Assemble, and Sass.

This particluar flavor is for static HTML sites, and makes use of the plugins listed in package.json

Important Documentation to Read:

http://assemble.io/docs/

http://www.browsersync.io/docs/grunt/

#SMS Grunt Configuration

We thought we'd post our current Grunt.js configuration, which is the result of hours of research, trial, and error..

It is important however, that you be familiar with using and configuring Grunt before trying to use this.

##Installation

###For the Gruntless:
  
  Install node.js from nodejs.org

	npm install -g grunt-cli

###Configure Gruntfile.js to suit your needs.	

If you are having issues, make sure that you are pointing watch, concat, uglify, sass, browserSync, etc, to the appropriate directories in your project.

###Once the above is taken care of:

Copy the contents of this repo into your project directory, navigate to your project directory and run:

	npm install

Then in your directory, run:

	grunt