/*

TO DO

1) Reduce CSS duplication
   - Ideally just a single build - global.scss turns into /build/global.css
   - Can Autoprefixer output minified?
   - If it can, is it as good as cssmin?
   - Could Sass be used again to minify instead?
   - If it can, is it as good as cssmin?

2) Better JS dependency management
   - Require js?
   - Can it be like the Asset Pipeline where you just do //= require "whatever.js"

3) Is HTML minification worth it?

4) Set up a Jasmine test just to try it.

5) Can this Gruntfile.js be abstracted into smaller parts?
   - https://github.com/cowboy/wesbos/commit/5a2980a7818957cbaeedcd7552af9ce54e05e3fb

   */

module.exports = function(grunt) {

grunt.initConfig({

	pkg: grunt.file.readJSON('package.json'),

	assemble: {
		options: {
			flatten: true,
			assets: "stephenbe/assets",
 			layout: 'layout.hbs',
        	layoutdir: 'src/templates/',			
		},	  	
		stephenbe : {
	        options: {
	          data: ['src/data/*.{json,yml}']
	        },
	        files: {
	          'stephenbe/': ['src/templates/pages/*.hbs']
	        }			
		}
	}

});

	//require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('assemble');

  //Default Task is basically a rebuild
  grunt.registerTask('default', ['assemble']);

};
