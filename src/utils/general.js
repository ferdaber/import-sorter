import j from 'jscodeshift'

const options = {
  tabWidth: 4,
  reuseWhitespace: false,
  quote: 'single'
}

export const getSource = ast => (typeof ast.toSource === 'function' ? ast.toSource() : j(ast).toSource(options))

export const getBody = srcAst => [...srcAst.find('Program').get().value.body]

export const getSourceFromBody = (srcAst, body = []) => {
  srcAst.find('Program').get().value.body = body
  return getSource(srcAst)
}

export const nodeShifter = (linesDown = 1, linesUp = 0) => node => ({
  ...node,
  loc: {
    ...node.loc,
    start: {
      ...node.loc.start,
      line: node.loc.start.line - linesUp + linesDown
    },
    end: {
      ...node.loc.end,
      line: node.loc.end.line - linesUp + linesDown
    }
  }
})

export const renameSource = (newName = 'foo') => node => ({
  ...node,
  source: {
    ...node.source,
    raw: `'${newName}'`,
    rawValue: newName,
    value: newName
  }
})

