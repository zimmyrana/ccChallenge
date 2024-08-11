//Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.

class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new TreeNode(value)
        if (this.root === null) {
            this.root = newNode
        } else {
            this._insertNode(this.root, newNode)
        }
    }

    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this._insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this._insertNode(node.right, newNode)
            }
        }

    }

    inOrderTraversal() {
        const result = [];
        this._inOrder(this.root, result);
        return result;
    }

    _inOrder(node, result) {
        if (node !== null) {
            this._inOrder(node.left, result);
            result.push(node.value);
            this._inOrder(node.right, result);
        }
    }
}

const tree = new BinaryTree();
tree.insert(5)
tree.insert(3)
tree.insert(7)
tree.insert(2)
tree.insert(4)
tree.insert(6)
tree.insert(8)

console.log(tree.inOrderTraversal())
