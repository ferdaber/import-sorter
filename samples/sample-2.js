import { Foo } from 's'
import { Foo } from 'e'
import { Foo, Bar } from 'as'
import { Foo, Bar, Baz } from 'e'
import { Foo as foo } from 'b'
import { Foo as foo, Bar as bar } from 'j'

import Foo from 'e'

import * as Foo from 'i'

const _ = require('lodash')
const Collection = require('../Collection')
const NodeCollection = require('./Node')
const matchNode = require('../matchNode')
const recast = require('recast')

const astNodesAreEquivalent = recast.types.astNodesAreEquivalent
const b = recast.types.builders
var types = recast.types.namedTypes

const VariableDeclarator = recast.types.namedTypes.VariableDeclarator

/**
* @mixin
*/
const globalMethods = {
  /**
   * Finds all variable declarators, optionally filtered by name.
   *
   * @param {string} name
   * @return {Collection}
   */
  findVariableDeclarators: function(name) {
    const filter = name ? { id: { name: name } } : null
    return this.find(VariableDeclarator, filter)
  }
}

const filterMethods = {
  /**
   * Returns a function that returns true if the provided path is a variable
   * declarator and requires one of the specified module names.
   *
   * @param {string|Array} names A module name or an array of module names
   * @return {Function}
   */
  requiresModule: function(names) {
    if (names && !Array.isArray(names)) {
      names = [names]
    }
    const requireIdentifier = b.identifier('require')
    return function(path) {
      const node = path.value
      if (
        !VariableDeclarator.check(node) ||
        !types.CallExpression.check(node.init) ||
        !astNodesAreEquivalent(node.init.callee, requireIdentifier)
      ) {
        return false
      }
      return !names || names.some(n => astNodesAreEquivalent(node.init.arguments[0], b.literal(n)))
    }
  }
}

module.exports = filterMethods

f(b)
