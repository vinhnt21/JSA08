let my_self = {
  name: "Mai Linh",
  age: 8,
  school: "Nguyen Du",
  class: "3A",
  hobbies: ["reading", "playing game", "singing"],
  is_single: true,
};

for (let key in my_self) {
  console.log(key + ": " + my_self[key]);
}

my_self.is_single = false;

for (let key in my_self) {
  console.log(key + ": " + my_self[key]);
}

delete my_self.class;

for (let key in my_self) {
  console.log(key + ": " + my_self[key]);
}
