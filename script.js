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
    if (head === null) {
      head = createNode(value);
      return;
    }

    const temporary = head;
    head = createNode(value);
    head.nextNode = temporary;
  }

  function size(node) {
    let total = 1;

    if (head === null) return 0;

    const current = node || head;

    if (current.nextNode === null) return 1;

    if (current.nextNode !== null) {
      return (total += size(current.nextNode));
    }
  }

  return { firstNode, append, prepend, size };
}

/* 
Handle exceptions:
If list is empty
*/

const linkedList = createLinkedList();
// console.log(linkedList.firstNode());

linkedList.append("A");
// console.log(linkedList.firstNode());

linkedList.append("B");
// console.log(linkedList.firstNode());

linkedList.append("C");
// console.log(linkedList.firstNode());

// linkedList.prepend("X");
// console.log(linkedList.firstNode());

// linkedList.prepend("Y");
// console.log(linkedList.firstNode());

// linkedList.prepend("Z");
// console.log(linkedList.firstNode());

console.log(linkedList.size());
