// https://www.cs.usfca.edu/~galles/visualization/BST.html
// http://btv.melezinek.cz/binary-search-tree.html
/*
          this.root
              |
             (10)
   node.left /   \ node.right
          (5)     (15)
         /  \     /   \ 
               (12)   (20)
               /  \   /  \
*/

class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    };


    // recursive insert
    //    the new node we want to insert
    //      |
    //      |     pass a changed current as we call the function again
    //      |       |
    //      v       v
    insert(node, current) {
        // default current to root if no current exists
        if (current === undefined) {
            current = this.root;
        };

        // if empty tree, new node becomes root
        if (current === null) {
            this.root = node;
            return;
        };

        if (current.val > node.val) { // go left
            // check if null and insert
            if (current.left === null) { // <-- base case for inserting left
                current.left = node;
                return;
            } else {
                // otherwise recurse left
                // return xyz.join(", ");
                return this.insert(node, current.left); // <-- move current to current.left
            }
        } else if (current.val < node.val) { // go right
            // check if null and insert
            if (current.right === null) { // <-- base case for inserting right
                current.right = node;
                return;
            } else {
                // otherwise recurse right
                return this.insert(node, current.right);
            }
        }
    };

    // recursive
    getLargestFromSubtree(current) {
        // if (current) {
        //     console.log(current.val)
        // }
        if (current === undefined) {
            current = this.root;
        }
        if (current === null) {
            return;
        }
        if (current.right === null) {
            return current.val;
        } else {
            return this.getLargestFromSubtree(current.right);
        }
    }

    // iterative
    getSmallestFromSubtree() {
        var current = undefined
        if (current === undefined) {
            current = this.root;
        }
        if (current === null) {
            return;
        }
        while (current.left) {
            current = current.left
        }
        return current.val;
    }

    // return true or false is val exists within the current tree
    // if current is undefined, current = this.root
    find(val, current) {
        // create defaults
        if (current === undefined) {
            current = this.root;
        }

        // if the tree is empty
        if (current === null) {
            return false;
        }

        if (current.val == val) {
            return true;
        }
        if (current.val < val) {
            this.find(val, current.left)
        }
    }

};

// Recursion is:
// - function that calls itself
// - and modifies the inputs
// - so that the inputs lead to a 'base case' and end the recursive call


var myBST = new BST();
myBST.insert(new BSTNode(10));
myBST.insert(new BSTNode(15));
myBST.insert(new BSTNode(5));
myBST.insert(new BSTNode(20));
myBST.insert(new BSTNode(12));
// console.log(myBST);
console.log(myBST.getLargestFromSubtree());
console.log(myBST.getSmallestFromSubtree());