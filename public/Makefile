all:
	make dist/build.min.js

dist/build.min.js: $(shell find js/ -type f -name "*.js" -o -name "*.jsx")
	r.js -o js/dist/debug.build.js