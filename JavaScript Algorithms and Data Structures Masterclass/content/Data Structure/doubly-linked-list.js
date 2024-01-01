// Section 20 - [L130 > 149]

class Node {
    constructor(val) {
        this.val = val;

        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;

        this.tail = null;

        this.length = 0;
    }

    push (val) {
        const newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;

            this.tail = newNode;
        } else {
            this.tail.next = newNode;

            newNode.prev = this.tail;

            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    pop () {
        if (this.length === 0) return undefined;

        const poppedNode = this.tail;

        if (this.length === 1) {
            this.head = null;

            this.tail = null;
        } else {
            this.tail = poppedNode.prev;

            this.tail.next = null;
        }

        poppedNode.prev = null;

        this.length--;

        return poppedNode;
    }


    shift() {
        if (this.length === 0) return undefined;

        const oldHead = this.head;

        if (this.length === 1) {
            this.head = null;

            this.tail = null;
        } else {
            this.head = oldHead.next;

            this.head.prev = null;
        }

        oldHead.next = null;

        this.length--;

        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;

            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            
            newNode.next = this.head;

            this.head = newNode;
        }

        this.length++;

        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let counter;

        let current;

        if (index <= this.length / 2) {
            counter = 0;

            current = this.head;

            while (counter !== index) {
                current = current.next;
    
                counter++;
            }
        } else {
            counter = this.length - 1;

            current = this.tail;

            while (counter !== index) {
                current = current.prev;
    
                counter--;
            }
        }

        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);

        if (foundNode) {
            foundNode.val = val;

            return true;
        }

        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;

        if (index === this.length) return !!this.push(val);

        if (index === 0) return !!this.unshift(val);

        let newNode = new Node(val);

        let beforeNode = this.get(index - 1);

        let afterNode = beforeNode.next;

        beforeNode.next = newNode;

        newNode.prev = beforeNode;

        newNode.next = afterNode;

        afterNode.prev = newNode;

        this.length++;

        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;

        if (index === this.length - 1) return this.pop(); 

        if (index === 0) return this.shift();

        let removedNode = this.get(index);

        removedNode.prev.next = removedNode.next;

        removedNode.next.prev = removedNode.prev;

        removedNode.next = null;

        removedNode.prev = null;

        this.length--;

        return removed;
    }

    reverse() {
        let node = this.head;

        this.head = this.tail;

        this.tail = node;

        let next;

        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;

            node.next = prev;

            prev = node;

            node = next;
        }

        return this;
    }
}