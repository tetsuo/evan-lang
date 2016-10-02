/// <reference path='../../typings-test.d.ts' />

import * as test from 'tape'
import * as fs from 'fs'
import * as path from 'path'
const split = require('split2')
const ndjson = require('ndjson')
const glob = require('glob')
import {SemanticsNode} from '../semantics-builder'

glob(__dirname + '/../../versions/*.json*', (err, files) => {
	if (err) throw err

	files.forEach(file => {
		const basename = path.basename(file)
		if (/latest/.test(basename)) return

		const version = basename.split(".json")[0]

		const s = fs.createReadStream(file).pipe(split()).pipe(ndjson.parse())
			.on('data', data => {
				fs.readFile(__dirname + '/../../versions/' + version + '.ts', 'utf8',  (err, expected) => {
					if (err) throw err

					test(`${version} build semantics`, t => {
						const node = new SemanticsNode(data)
						const actual = node.print()
						t.equal(expected.trim(), actual.trim())
						t.end()
					})
				})
			})
	})
})
