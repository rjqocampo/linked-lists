function createNode(value = null, nextNode = null) {
  return { value, nextNode };
}

function createLinkedList() {
  let head = null;

  function firstNode() {
    return head;
  }

  function nextNode() {
    return head.nextNode;
  }

  function append(value, node) {
    if (head === null) {
      head = createNode(value);
      return;
    }

    const current = head || node;

    while (current.nextNode !== null) {
      append(value, current);
    }

    if (current.nextNode === null) {
      current.nextNode = createNode(value);
    }
  }

  return { firstNode, nextNode, append };
}

const linkedList = createLinkedList();
console.log(linkedList.firstNode());
linkedList.append(1);
console.log(linkedList.firstNode());
linkedList.append(2);
console.log(linkedList.firstNode());
