class Node {
    constructor(value, next_node = null) {
        this.value = value;
        this.next_node = next_node;
    }
}
class LinkedList {
    // setup head and tail
    nodeVariable = [];
    add(number) {
        const node = new Node(number);
        this.nodeVariable.push(node);
    }
    get(index) {
        // your code here
        return this.nodeVariable[index].value;
    }
    addAt(index, item) {
        const node = new Node(item);
        this.nodeVariable = this.get_node(this.nodeVariable, index, node);
    }
    get_node = (arr, index, newItem) => [
        ...arr.slice(0, index),
        newItem,
        ...arr.slice(index),
    ];
    remove(index) {
        return this.nodeVariable.splice(index, 1);
    }
}
const list = new LinkedList();
list.add(3);
list.add(5);
list.addAt(1, 11);
list.addAt(0, 13);
console.log(list.get(2));
// => 11
console.log(list.get(3));
// => 5