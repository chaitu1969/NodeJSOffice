const tasks = {
  tasks: [
    {
      text: "Groceries",
      completed: true,
    },
    {
      text: "Clean yard",
      completed: true,
    },
    {
      text: "Film course",
      completed: false,
    },
  ],

  // getTaskToDo() {
  //   const taskToDo = this.tasks.filter((tasks) => {
  //     return tasks.completed === false;
  //   });
  //   return taskToDo;
  // },
  getTaskToDo() {
    return this.tasks.filter((tasks) => tasks.completed === false);
  },
};

// const getTaskToDo = (task) => {};

console.log(tasks.getTaskToDo());
