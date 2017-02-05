{
	baseUrl: "./",
	name: "init",
	mainConfigFile: "config.js",
	include: ["init"],
	out: "dist/main.debug.js",
	cjsTranslate: true,
	generateSourceMaps: false,
	findNestedDependencies: true,
	removeCombined: true,
	preserveLicenseComments: false,
	optimize: "none",
	stubModules: ['jsx','text','JSXTransformer'],
	pragmas: {
		debug: true,
		production: false
	}
}