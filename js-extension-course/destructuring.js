const employee = {
  name: "alfan",
  position: "Owner",
  salary: 3455,
};

//   destructuring
const { name, salary } = employee;

console.log(name, salary);

//   destructuring array
const hobbies = ["badminton", "swimming"];
const [hobby_firs, hobby_second] = hobbies;

console.log(hobby_firs, hobby_second);
