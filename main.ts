//------------UNIVERSITY MANAGEMENT SYSTEM --------------

//--- CLASSES

// Parent Class

class Person{      
    
    name: string;
    age: number;

    constructor(name: string, age: number){

        this.name = name
        this.age = age
    }

    getName(): string {
        return this.name
    }

}

// Child Class

class Student extends Person{

    rollNumber: number;
    courses: Course [];

    constructor(name: string, age: number, rollNumber: number){

        super(name, age)
        this.rollNumber = rollNumber
        this.courses = [];
    }

    registerForCourse(courses: Course){
        this.courses.push(courses)
    }

}

class Instructor extends Person{

    salary: number;
    courses: Course[];

    constructor(name: string, age: number, salary: number){
        super(name, age)
        
        this.salary = salary;
        this.courses = [];
    }
    assignCourses(courses: Course){
        this.courses.push(courses)
    }
}

// Another Classes


class Course{
    id: number;
    name: string;
    students: Student[];
    instructors!: Instructor;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
        this.students = [];
        
    }

    addStd(std: Student){
        this.students.push(std)
    }

    setInst(inst: Instructor){
       this.instructors = inst
    }
}

class Department{
    name: string;
    courses: Course[];

    constructor(name: string){
        this.name = name;
        this.courses = []

    }

    addCourse(course: Course){
        this.courses.push(course)
    }
}


// -------INITIALIZED STUDENTS ONLY FOR EXAMPLE-----------

const student1 = new Student ("Shezan Usman ", 20, 1001);
const student2 = new Student ("Hameed Riaz", 20, 2001);
const student3 = new Student ("Bashar Shafiq", 20, 3001);
const student4 = new Student ("Amaan Iqbal", 21, 4001);


// -------INITIALIZED INSTRUCTORS  ONLY FOR EXAMPLE-----------

const instructor1 = new Instructor("Hamzah Syed", 23, 2000); 
const instructor2 = new Instructor("Adnaan Ali", 38, 3000);
const instructor3 = new Instructor("Hasan Marfaani", 35, 4000);
const instructor4 = new Instructor("Hisham Sarwer", 40, 4500);

// -------INITIALIZED COURSES ONLY FOR EXAMPLE-----------

const course1 = new Course (1 ,"Gen Ai and Web 3.0" );
const course2 = new Course (2 ,"Microbiology" );
const course3 = new Course (3 ,"Charterd Accountant" );
const course4 = new Course (4  ,"Digital Marketing and SEO" );

// -------INITIALIZED DEPARTMENTS ONLY FOR EXAMPLE-----------

const department1 = new Department("IT");
const department2 = new Department("Life Sciences");
const department3 = new Department("Charterd Accountancy");
const department4 = new Department("Digital Markiting");


// -------ADD COURSES TO DEPARTMENT-----------

department1.addCourse(course1);
department2.addCourse(course2);
department3.addCourse(course3);
department4.addCourse(course4);

// -------ADD STUDENTS TO COURSES-----------

student1.registerForCourse(course1);
student2.registerForCourse(course2);
student3.registerForCourse(course3);
student4.registerForCourse(course4);

course1.addStd(student1);
course2.addStd(student2);
course3.addStd(student3);
course4.addStd(student4);

// -------SET TEACHERS FOR COURSES/DEPARTMENTS-----------


course1.setInst(instructor1);
course2.setInst(instructor2);
course3.setInst(instructor3);
course4.setInst(instructor4);


console.log(student1.getName()); // Output: Shezan Usman
console.log(student1.courses); // Output: [Course]
console.log(instructor1.courses); // Output: [Course]
console.log(department1.courses); // Output: [Course, Course]









