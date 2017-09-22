const fooToBar = (fileInfo, api) => {
  const j = api.jscodeshift

  const newSource = j(fileInfo.source)
    .findVariableDeclarators('foo')
    .renameTo('bar')
    .toSource()

  return newSource
}

export default fooToBar
