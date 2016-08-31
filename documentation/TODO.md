# TODO

Roughly in order of importance.
Done items are prepended with "&#10003;".

* Extend visualizer with selecting and editing (and folding) capabilities:
	* &#10003; Be able to select rendered components.
	* Provide generic "add something" component.
		(For this, look at: [react-json](https://github.com/arqex/react-json).)
	* Provide edit mode for every component.
	* Provide sensible edit icons.
* Introduce semantics types for:
	* Defining an immutable value.
	* Defining a mutable value - *if we want to allow that*.
	* Aggregating JSON contents from resource.
	* Changing some aggregated JSON in some way (e.g. using a JSON Patch-like expression) - for using in an action.
	* Indicating that some stuff is to be rendered as HTML/React component.
	* Defining types *and interpreters on them*.
	* Calling functions in JavaScript space.
	* Doing ES6-style imports that actually execute a `require` (of something that can receive a version specification).
		To execute such programs we need some way of dynamically calling `npm install` and loading the result
			- see this [StackoverFlow answer](http://stackoverflow.com/questions/15957529/can-i-install-a-npm-package-from-javascript-running-in-node-js/15957574#15957574).
		Having this capability and the previous one, enables us to tap into the rich JavaScript ecology.
	* A way to keep the interpretation from finishing, to be able to define servers.
* &#10003; Move to Browserify over WebPack - see e.g. the [`tsify` plugin for compiling TS in Browserify](https://www.npmjs.com/package/tsify).
* Implement a type checker.
* Extend IDE with instant type checking of source.
* Implement Lisp-style macro's.
* Small things:
	* &#10003; Commit TSD typings to repo as the `tsd` module takes 21M.
		Also: factor typings better by distinguishing Node.js vs. Browserify usage.
	* &#10003; Don't use `nscript` (whose installation is kinda heavy) unless actually convenient.
	* &#10003; Replace various CLI dependencies with `npm`-able, OS-independent alternatives: `rimraf`.
		Can we also replace `mkdir -p` and `diff` with NPM alternatives?
* Implement hot reload - see e.g. [this GitHub repo](https://github.com/milankinen/livereactload).
* Update to TypeScript 2.0 and make use of tagged unions for `ISemanticsTyped.$sType`.
