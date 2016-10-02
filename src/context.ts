/// <reference path='../typings.d.ts' />

interface IFunctionDefinition {
	$sType: "function definition";
	name: string;
	parameters: { [name: string]: string };
	returnType?: string;
	body: any;
}

export interface IContext {
	functionDefinitions: { [name: string]: IFunctionDefinition };
	letValues: { [name: string]: any };
}

const cloneDeep = require('clone-deep')

export function cloneContext(context: IContext): IContext {
	return cloneDeep(context);
}

export const emptyContext: IContext = {
	functionDefinitions: {},
	letValues: {}
};

// TODO  make into a class and be able to nest and such (scoping!)


