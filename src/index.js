import j from 'jscodeshift'
import fs from 'fs'
import path from 'path'

import { getBody, getSourceFromBody } from './utils/general'
import { getImports } from './utils/import-types'
import { stripSemicolons } from './utils/string-manipulations'

const source = fs.readFileSync(path.resolve('samples/sample-2.js')).toString(),
  src = j(source),
  body = getBody(src)

// console.log(getSourceFromBody(body))

// console.log(getImports(body))


const spacedBody = getImports(body).reduce((a, i) => [...a, i, ' '], [])

console.log(stripSemicolons(getSourceFromBody(src, spacedBody)))
