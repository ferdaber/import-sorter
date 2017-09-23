export const isImportDeclaration = node => node.type === 'ImportDeclaration'
export const getImports = nodeArray => nodeArray.filter(isImportDeclaration)

export const isSpecifiedImport = node => isImportDeclaration(node) && node.specifiers.length
export const isNamespaceImport = node =>
  isSpecifiedImport(node) && node.specifiers.length === 1 && node.specifiers[0].type === 'ImportNamespaceSpecifier'
export const isDefaultImport = node =>
  isSpecifiedImport(node) && node.specifiers.length === 1 && node.specifiers[0].type === 'ImportDefaultSpecifier'
export const isDestructuredImport = node =>
  isSpecifiedImport(node) && node.specifiers.every(s => s.type === 'ImportSpecifier')
export const isDestructuredMultiImport = node => isDestructuredImport(node) && node.specifiers.length > 1
export const isDestructuredSingleImport = node => isDestructuredImport(node) && node.specifiers.length === 1
export const isUnboundImport = node => !isSpecifiedImport(node)

const categorizers = {
  namespace: isNamespaceImport,
  default: isDefaultImport,
  destructured: isDestructuredImport,
  'destructured-single': isDestructuredSingleImport,
  'destructured-multi': isDestructuredMultiImport,
  unbound: isUnboundImport
}
export const categorizeImports = nodeArray => Object.keys(categorizers).reduce(
  (acc, key) => ({
    ...acc,
    [key]: nodeArray.filter(categorizers[key])
  }), {})

const alphaSorter = keyGetter => (a, b) =>
  keyGetter(a).toLowerCase() < keyGetter(b).toLowerCase()
    ? -1
    : keyGetter(a).toLowerCase() > keyGetter(b).toLowerCase() ? 1 : 0
export const sortNamespaceImport = alphaSorter(n => n.specifiers[0].local.name)
export const sortDefaultImport = sortNamespaceImport
export const sortDestructuredSingleImport = alphaSorter(n => n.specifiers[0].imported.name)
export const sortDestructuredMultiImport = alphaSorter(
  n => n.specifiers.sort(alphaSorter(s => s.imported.name))[0].imported.name
)
export const sortDestructuredImport = sortDestructuredMultiImport
export const sortUnboundImport = alphaSorter(n => n.source.value)

const sorters = {
  namespace: sortNamespaceImport,
  default: sortDefaultImport,
  destructured: sortDestructuredImport,
  'destructured-single': sortDestructuredSingleImport,
  'destructured-multi': sortDestructuredImport,
  unbound: sortUnboundImport
}

const defaultImportSort = [
  'default',
  'destructured',
  'namespace',
  'unbound'
]

export const importSorter = (group, importTypesArray = defaultImportSort) => nodeArray => {
  const categories = Object.keys(categories).reduce((acc, key) => ({
    ...acc,
    [key]: nodeArray.filter(categorizers[key]).sort(sorters[key])
  }), {})
  return importTypesArray.reduce(
    (acc, type) => group
      ? acc.concat(categories[type], ' ')
      : acc.concat(categories[type]), []
  )
}
