// Section 22 - [L159 > 170]

class TreeNode {
    constructor(val) {
        this.val = val;

        this.left = null;

        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new TreeNode(val);

        if (this.root === null) {
            this.root = newNode;

            return this;
        }

        let current = this.root;

        while (true) {
            if (val === current.val) return undefined;

            if (val < current.val) {
                if (current.left === null) {
                    current.left === newNode;

                    return this;
                }

                current = current.left;
            } else {
                if (val > current.val) {
                    if (current.right === null) {
                        current.right === newNode;

                        return this;
                    }

                    current = current.right;
                }
            }
        }
    }

    find(val) {
        if (this.root === null) return undefined;

        let current = this.root;

        let found = false;

        while (current && !found) {
            if (val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            } else {
                found = true;
            }
        }

        if (!found) return undefined;

        return current;
    }

    contains(val) {
        if (this.root === null) return false;

        let current = this.root;

        let found = false;

        while (current && !found) {
            if (val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            } else {
                return true;
            }
        }

        return false;
    }

    BFS () {
        let node = this.root;

        const data = [];

        const queue = [];

        queue.push(node);

        while (queue.length) {
            node = queue.shift();

            data.push(node.val);

            if (node.left) queue.push(node.left);

            if (node.right) queue.push(node.right);
        }

        return data;
    }

    DFSPreOrder() {
        const data = [];

        const traverse = (node) => {
            data.push(node.val);

            if (node.left) traverse(node.left);

            if (node.right) traverse(node.right);
        }

        traverse(this.root);

        return data;
    }

    DFSPostOrder() {
        const data = [];

        const traverse = (node) => {
            if (node.left) traverse(node.left);

            if (node.right) traverse(node.right);

            data.push(node.val);
        }

        traverse(this.root);

        return data;
    }

    DFSInOrder() {
        const data = [];

        const traverse = (node) => {
            if (node.left) traverse(node.left);

            data.push(node.val);

            if (node.right) traverse(node.right);
        }

        traverse(this.root);

        return data;
    }
}