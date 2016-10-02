/// <reference path='../typings.d.ts' />

import {templateFor, indent, capitalize} from './template' 
const xtend = require('xtend')

export class PropertyNode {
	type: string = null
	name: string = null
	typeName: string = null
	ownType: boolean = false
	stringMap: boolean = false
	optional: boolean = false

	template = templateFor('Property')

	constructor(opts) {
		this.ownType = !!opts.ownType
		this.stringMap = !!opts.stringMap
		this.optional = !!opts.optional
		this.type = opts.type
		this.name = opts.name
		this.typeName = !this.ownType ? opts.type : capitalize(opts.type)
	}

	getTemplateArguments() {
		return [
			this.name + (this.optional ? '?' : ''),
			this.stringMap
				? `{ [name: string]: ${this.typeName} }`
				: this.ownType
					? `I${this.typeName}`
					: this.typeName
		]
	}

	print() {
		return this.template(...this.getTemplateArguments())
	}
}

export class InterfaceNode {
	name: string = null
	type: string = null
	properties: any[] = null
	description: any[] = null

	template = templateFor('Interface')

	constructor(opts) {
		this.name = capitalize(opts.type)
		this.type = opts.type
		this.properties = opts.properties
		this.description = opts.description
	}

	getTemplateArguments() {
		let args = null

		return {
			name: this.name,
			type: this.type,
			properties: this.properties.map(p => {
				return indent((new PropertyNode(p).print()))
			}).join("\n")
		}
	}

	print() {
		return this.template(this.getTemplateArguments())
	}
}

export class SemanticsNode {
	models: { type: string }[] = null

	template = templateFor('Semantics')

	constructor(models: { type: string }[]) {
		this.models = models
	}

	getTemplateArguments() {
		return [this.models.map(model => {
			return new InterfaceNode(model).print()
		}).join("\n")]
	}

	print() {
		return this.template(...this.getTemplateArguments()) + '\n'
	}
}

export function build(models: any[]) {
	return new SemanticsNode(models)
}
