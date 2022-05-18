// https://www.cs.usfca.edu/~galles/visualization/BST.html
// http://btv.melezinek.cz/binary-search-tree.html
/*
            root
              |
             (10)
       .left /   \ .right
          (5)    (15)
         / \     /   \ 
              (12)   (20)
              /  \   /  \
*/

class BSTNode {
    constructor(val) {
        this.val = val;
        /* These properties are how this node is connected to other nodes to form
        the tree. Similar to .next in a SinglyLinkedList except a BST node can
        be connected to two other nodes. To start, new nodes will not be
        connected to any other nodes, these properties will be set after
        the new node is instantiated.*/
        this.left = null;
        this.right = null;
    }
};

class BST {
    constructor() {
        /* Just like the head of a linked list, this is the start of our tree which
        branches downward from here. */
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    };

    /* recursive insert
     
          the new Node(val) we want to insert
            |
            |     pass a changed current as we call the function again
            |       |
            v       v                       */
    insert(node, current) {
        // create defaults
        if (current === undefined) {
            current = this.root;
        }

        // if the tree is empty
        if (current === null) {
            this.root = node;
            return;
        }

        // check if node val is > or < current's val
        if (node.val < current.val) {
            // less than
            if (current.left === null) {
                // check if current.left is null
                current.left = node;
                // insert node
                return;
            } else this.insert(node, current.left);

            if (current.right == null) {
                current.right = node;
                return;
            } else this.insert(node, current.right);

        }

    };
}

// Recursion is:
// - function that calls itself
// - and modifies the inputs
// - so that the inputs lead to a 'base case' and end the recursive call

// https://www.cs.usfca.edu/~galles/visualization/BST.html
// http://btv.melezinek.cz/binary-search-tree.html

var myBST = new BST();
myBST.insert(new BSTNode(10));
myBST.insert(new BSTNode(15));
myBST.insert(new BSTNode(5));
myBST.insert(new BSTNode(20));
myBST.insert(new BSTNode(12));
console.log(myBST);
/*
            root
              |
             (10)
       .left /   \ .right
          (5)    (15)
         / \     /   \
              (12)   (20)
              /  \   /  \
*/

// ------------------

function recursiveIncrement(num) {

    // 1. create defaults
    if (num === undefined) {
        num = 1;
    }

    // 2. create a BREAKPOINT -> recursive function will end
    if (num >= 10) {
        return;
    }

    // 3. logic
    num++;

    // 4. recall the function -> recurse
    return recursiveIncrement(num)

}
recursiveIncrement(4)