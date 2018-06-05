module.exports = attacher;
const visit = require('unist-util-visit');
const is = require('unist-util-is');
const assign = require('object-assign')
const map = require('unist-util-map')


function attacher() {
  return transformer;

  function transformer(tree, file) {
    // visit(tree, 'listItem', visitor);
    // console.log(tree);
    return map(tree, (node) => {
      if (node.type == 'listItem' && node.checked != null) {
        return assign({}, node, {checked: true})
      }
      return node;
    });


    function visitor(node) {
      console.log(node);
      return;
      const children = node.children;

      children.forEach(function (child, index) {
        if (
          is('SentenceNode', children[index - 1]) &&
          is('WhiteSpaceNode', child) &&
          is('SentenceNode', children[index + 1])
        ) {
          console.log(child);
        }
      });
    }
  }
}
