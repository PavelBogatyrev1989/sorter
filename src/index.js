class Sorter {
  constructor(value) {
    this.value = value;
    this.arr = [];
    this.comparator = (left, right) => left - right;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    indices.sort((left, right) => left - right);
    if (indices.length > 1) {
      var mastSorted = [];
      for (var i = 0; i < indices.length; ++i) {
        mastSorted.push(        
          this.arr[indices[i]]);    
      }
      mastSorted.sort(this.comparator);  
      for (var i = 0; i < indices.length; i++) {
        this.arr[indices[i]] = mastSorted[i];
      }
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}
module.exports = Sorter;
