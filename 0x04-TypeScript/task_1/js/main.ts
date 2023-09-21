class Teacher {
  private firstName: string;
  private lastName: string;
  private fullTimeEmployee: boolean;
  private yearsOfExperience?: number;
  private location: string;
  [key: string]: any;
  
  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
  }
  
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
    // Other methods can be added here
}

class Directors extends Teacher {
  private numberOfReports: number;
  
  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    numberOfReports: number
  ) {
    super(firstName, lastName, fullTimeEmployee, location);
    this.numberOfReports = numberOfReports;
  }
}

// Interface for the printTeacherFunction
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
  
  // Implementation of the printTeacher function
function printTeacher(firstName: string, lastName: string): string {
  const firstInitial = firstName.charAt(0).toUpperCase();
  const fullName = `${firstInitial}. ${lastName}`;
  return fullName;
}


// Interface for the constructor of StudentClass
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface for the StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// StudentClass implementation
class StudentClass implements StudentClass {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}


  

  
  
  
  
  