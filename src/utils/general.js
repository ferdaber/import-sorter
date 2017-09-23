import j from 'jscodeshift'

const options = {
  tabWidth: 4,
  reuseWhitespace: false,
  quote: 'single'
}

export const getSource = maybeAst => (typeof maybeAst.toSource === 'function' ? maybeAst.toSource() : j(maybeAst).toSource(options))

export const getBody = srcAst => [...srcAst.find('Program').get().value.body]

export const setSourceFromBody = (srcAst, body) => {
  srcAst.find('Program').get().value.body = body
  return getSource(srcAst)
}

export const getSourceFromBody = body => getSource(j.program(body))

export const stripSemicolons = (str = '') => str.replace(/;/g, '')

export const stripLines = nodeArray => getBody(
  j(
    getSourceFromBody(nodeArray).replace(/^\s*$/g, '')
  )
)
