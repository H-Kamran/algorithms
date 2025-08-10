// Finding a given tree is symmetrical
function isSymmetricalTree(tree) {
    if (tree[1][0] != tree[1][1]) return false;
    for (let i = 2; i < tree.length; i++) {
        if (tree[i][0].flat(Infinity).join("") != tree[i][1].flat(Infinity).reverse().join("")) return false;
    }
    return true;
}

console.log(isSymmetricalTree([[1], [1, 1], [[1, 1, 0], [0, 1, 1]], [[[1, 1], [1, 0], [0, 1]], [[1, 0], [0, 1], [1, 1]]]])); 