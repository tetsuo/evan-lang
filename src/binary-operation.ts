/// <reference path='../typings.d.ts' />

import {ISemanticsTyped} from './base-semantics'
import {IContext} from './context'

export interface IBinaryOperation extends ISemanticsTyped {
	$sType: "binary operation";
	operator: string;
	left: any;
	right: any;
}

export class BinaryOperationAtom {
	constructor(private node: IBinaryOperation, private ctx: IContext) {
	}
}
