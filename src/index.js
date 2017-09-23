import j from 'jscodeshift'
import fs from 'fs'
import path from 'path'

import {
  getBody,
  setSourceFromBody,
  stripLines,
  stripSemicolons,
} from './utils/general'
import { getImports, importSorter } from './utils/import-types'

const source = fs.readFileSync(path.resolve('samples/sample-2.js')).toString(),
  src = j(source),
  body = getBody(src)

const config = ['default', 'destructured-multi', 'destructured-single', 'namespace', 'unbound']

console.log(
  stripSemicolons(
    setSourceFromBody(src,
      importSorter(true, config)(
        stripLines(
          getImports(body)
        )
      )
    )
  )
)
