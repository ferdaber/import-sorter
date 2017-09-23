export const getImports = (nodeArray = []) => nodeArray.filter(n => n.type === 'ImportDeclaration')
