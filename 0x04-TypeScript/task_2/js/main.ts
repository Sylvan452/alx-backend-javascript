  // Interface for Director
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}
  
  // Interface for Teacher
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
  
  // implementing DirectorInterface via Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}
  
  // implementing TeacherInterface via Teacher class 
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  
  getCoffeeBreak(): string {
    return "Cannot have a break";
 }
  
  workTeacherTasks(): string {
    return "Getting to work";
  }
}
  
  // Function createEmployee
function createEmployee(salary: number | string) {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Interface for Director
interface DirectorInterface {
  workDirectorTasks(): string;
}
  
  // Interface for Teacher
interface TeacherInterface {
  workTeacherTasks(): string;
}

  
  
  // Type predicate function isDirector
function isDirector(employee: any): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}
  
  // Function executeWork
function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}


type Subjects = 'Math' | 'History';


// Function teachClass
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    return 'Invalid subject';
  }
}
