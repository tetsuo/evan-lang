/// <reference path='../typings.d.ts' />

// templates required by the builders

const templates = {

Property: tag `${0}: ${1}`,

Semantics: tag
`export interface ISemanticsTyped {
  $sType: string
}

${0}
`,

Interface: tag
`export interface I${'name'} extends ISemanticsTyped {
  $sType: "${'type'}"
${'properties'}
}
`

}

export function templateFor($type: string) {
	if (templates.hasOwnProperty($type))
		return templates[$type]
}

const isInteger = require('is-integer')

export function tag(strings, ...keys) {
	return (function(...values) {
		const dict = values[values.length-1] || {}
		const result = [strings[0]]

		keys.forEach((key, i) => {
			const value = isInteger(key) ? values[key] : dict[key]
			result.push(value, strings[i + 1])
		})

		return result.join('')
	})
}

const indentString = require('indent-string')

export function indent(s, n=2, p=' ') {
	return indentString(String(s), n, p)
}

export function capitalize(s: string) {
	return s
		.replace(/-/g, ' ')
		.replace(/\w\S*/g, res => {
			return res.charAt(0).toUpperCase() + res.substr(1).toLowerCase()
		})
		.replace(/[\s\xa0]+/g, '')
}
