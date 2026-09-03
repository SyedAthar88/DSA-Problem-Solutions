// linklist is basically a linear data structure with nodes one of them is data and other one is addres of next node in 
// the memory


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Your pushFront method (PERFECT!)
    pushFront(value) {
        const newNode = new Node(value);

        if (!this.head) {
            // List is empty
            this.head = newNode;
            this.tail = newNode;
        } else {
            // List has elements
            newNode.next = this.head;
            this.head = newNode; // very important to note now head is represneting our new node 
        }

        this.length++;
    }
    // now make a push back method 
    pushback(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;

        }

        this.length++;
    }
    // Remove from the front 
    Remove_from_Front() {
        if (!this.head) {
            return undefind;
        }
        const removed = this.head;
        this.head = this.head.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;

        }
        return removed.value;

    }
    Remove_from_back() {
        if (!this.head) return undefined;
        let current = this.head;
        while (current.next !== this.tail) {
            current = current.next;
        }
        const remmoved = this.tail;
        current.next = null;
        this.tail = current;
        this.length--;
        return remmoved.value

    }










    // Helper method to print the list
    print() {
        if (!this.head) {
            console.log('[]');
            return;
        }

        let current = this.head;
        let result = '';

        while (current) {
            result += current.value;
            if (current.next) result += ' → ';
            current = current.next;
        }

        console.log(result);
    }

    // Helper method to get all values as array
    toArray() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }
}

// ========== TESTING YOUR pushFront ==========

// Create a new list
const myList = new List();
console.log('Initial list:');
myList.print(); // []

// Test 1: Add first element to empty list
console.log('\n--- Test 1: Add first element ---');
myList.pushFront(10);
myList.pushback(20);
myList.pushback(30);
myList.Remove_from_back()



myList.print(); // 10
console.log('Head:', myList.head.value); // 10
console.log('Tail:', myList.tail.value); // 10
console.log('Length:', myList.length); // 1

// Test 2: Add second element to front
// console.log('\n--- Test 2: Add second element ---');
// myList.pushFront(20);
// myList.print(); // 20 → 10
// console.log('Head:', myList.head.value); // 20
// console.log('Tail:', myList.tail.value); // 10
// console.log('Length:', myList.length); // 2