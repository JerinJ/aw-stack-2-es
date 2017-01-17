'use strict';

/**
 * Import from node_modules
 */
const path = require('path');

/**
 * Import form local/current directory
 */
const product = require('../../package.json');

/**
 * Define constants
 */
const processEnv = process.env;
const banner = `
	${product.name} v${product.version}
	Developed by ${product.author}.
`;

/**
 * Export constants configuration
 */
module.exports = {
	/**
	 * Constants for webpack-dev-server to development environment
	 */
	"dev": {
		"env": processEnv.NODE_ENV || "development",
		"host": processEnv.HOST || "localhost",
		"port": processEnv.PORT || 3000,
		"name": "dev",
	},

	/**
	 * Constants for webpack-dev-server to production environment
	 * to check locally.
	 */
	"prod": {
		"env": processEnv.NODE_ENV || "production",
		"host": processEnv.HOST || "localhost",
		"port": processEnv.PORT || 3500,
		"name": "prod",
		"banner": banner
	},

	"bundle": {
		/**
		 * Specify the output directory path for bundle. (By default generated on project root)
		 */
		"output": "./dist",

		/**
		 * Specify the name of each output file.
		 */
		"filename": "app.js",

		/**
		 * Specify the name of map output file.
		 */
		"mapfile": "app.dev.map"
	},

	/**
	 * Build options
	 */
	"build": {
		/**
		 * Specify the output directory path for build. (By default generated on project root)
		 */
		"output": "./dist",

		/**
		 * Specify the name of each output file.
		 */
		"filename": "app.min.js",

		/**
		 * Specify the name of map output file.
		 */
		"mapfile": "app.prod.map"
	},

	/**
	 *Gateway options.
	 */
	"gateway": {
		/**
		 * Server side RESTful service api version.
		 */
		"api": {
			"default": {
				"version": "v1"
			}
		},

		/**
		 * Client side source directory path.
		 */
		"client": "./src/",

		/**
		 * Client side entry point file for Webpack to bundle.
		 */
		"entry": "app.js",

		/**
		 * Client side index page.
		 */
		"index": "index.html"
	}
};
