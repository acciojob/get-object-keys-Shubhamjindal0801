// Create student object with name property
const student = {
  name: "John Doe"
};

// Add getKeys() method to Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Test getKeys() method on student object
console.log(student.getKeys()); // Output: ["name"]
