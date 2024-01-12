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
}