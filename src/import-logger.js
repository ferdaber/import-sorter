const importLogger = (fileInfo, api) => {
  const j = api.jscodeshift

  j(fileInfo.source)
    .find('ImportDeclaration')
    .forEach(n =>
      n.node.specifiers.forEach(s =>
        console.log(s.local.name)
      )
    )

  return j(fileInfo.source).toSource({
    quote: 'single'
  })
}

export default importLogger
