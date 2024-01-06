class Node{
    constructor (data) {
       this.data = data;
       this.next = null;
    }
}



class LinkedList{
    constructor() {
        this.head = null;
    }

    addNode(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
}

let list = new LinkedList();
list.addNode(10);
list.addNode(20);
list.addNode(30);
console.log(list);
// list.print();
