class Queue {
  constructor(){
    this.elements = []
  }

  size(){
    return this.elements.length
  }

  add(element) {
    return this.elements.push(element)
  }

  dequeue() {
    if(this.size() > 0) return this.elements.shift()
  }

  peek() {
    if(this.size() > 0) return this.elements[0]
  }
}

module.exports = Queue