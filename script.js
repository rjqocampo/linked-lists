function createNode(value = null, nextNode = null) {
  return { value, nextNode };
}

function createLinkedList() {
  let head = null;

  function firstNode() {
    return head;
  }

  function append(value, node) {
    if (head === null) {
      head = createNode(value);
      return;
    }

    const current = node || head;

    if (current.nextNode !== null) {
      append(value, current.nextNode);
    }

    if (current.nextNode === null) {
      current.nextNode = createNode(value);
    }
  }

  function prepend(value) {
    const temporary = head;
    head = createNode(value);
    head.nextNode = temporary;
  }

  return { firstNode, append, prepend };
}

const linkedList = createLinkedList();
// console.log(linkedList.firstNode());

linkedList.append("A");
// console.log(linkedList.firstNode());

linkedList.append("B");
// console.log(linkedList.firstNode());

linkedList.append("C");
// console.log(linkedList.firstNode());

linkedList.prepend("X");
console.log(linkedList.firstNode());

linkedList.prepend("Y");
console.log(linkedList.firstNode());

linkedList.prepend("Z");
console.log(linkedList.firstNode());
