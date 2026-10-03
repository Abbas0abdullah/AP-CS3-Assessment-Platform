// Lecture 1: AP_Lec1 MCQ_Bank_1 (Dr. Baidaa Laalaa & Eng. Abdulmalik Hassan Alhaj)
// Total questions: 97
export const lec1Questions = [
  {
    id: "lec1_q1",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "Advanced Programming Basics",
    qNum: 1,
    question: "Advanced Programming focuses on designing and developing:",
    options: {
      A: "Only small software programs",
      B: "Scalable, maintainable, and high-quality software systems",
      C: "Hardware components",
      D: "Database servers only"
    },
    answer: "B",
    explanation: "Advanced Programming emphasizes building scalable, maintainable, robust, and high-quality software architectures."
  },
  {
    id: "lec1_q2",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "Advanced Programming Basics",
    qNum: 2,
    question: "Which of the following is a key goal of Advanced Programming?",
    options: {
      A: "Increasing code complexity",
      B: "Reducing software quality",
      C: "Code Quality",
      D: "Removing all documentation"
    },
    answer: "C",
    explanation: "Achieving high code quality, readability, testability, and maintainability is a core objective of Advanced Programming."
  },
  {
    id: "lec1_q3",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "Software Engineering Concepts",
    qNum: 3,
    question: "Reusability means:",
    options: {
      A: "Developing components that can be reused across different applications",
      B: "Writing code only once without modification",
      C: "Removing all software components",
      D: "Avoiding software design"
    },
    answer: "A",
    explanation: "Reusability refers to designing modular components that can be repurposed in different contexts and applications without rewriting."
  },
  {
    id: "lec1_q4",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "Software Engineering Concepts",
    qNum: 4,
    question: "Maintainability helps software to become easier to:",
    options: {
      A: "Delete",
      B: "Modify and enhance over time",
      C: "Replace hardware",
      D: "Avoid testing"
    },
    answer: "B",
    explanation: "Maintainability ensures that software can be easily fixed, updated, adapted, and extended as requirements evolve."
  },
  {
    id: "lec1_q5",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: ".NET Platform & CLR",
    qNum: 5,
    question: ".NET is a software development platform created by:",
    options: {
      A: "Google",
      B: "Microsoft",
      C: "Apple",
      D: "Oracle"
    },
    answer: "B",
    explanation: ".NET is a free, cross-platform, open source developer platform created and maintained by Microsoft."
  },
  {
    id: "lec1_q6",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: ".NET Platform & CLR",
    qNum: 6,
    question: ".NET provides:",
    options: {
      A: "Runtime Environment, Libraries, and Development Tools",
      B: "Only Programming Languages",
      C: "Only Databases",
      D: "Only Operating Systems"
    },
    answer: "A",
    explanation: ".NET encompasses the Common Language Runtime (CLR), standard libraries/frameworks, and comprehensive developer tooling."
  },
  {
    id: "lec1_q7",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: ".NET Applications",
    qNum: 7,
    question: "Which of the following is an application built using .NET?",
    options: {
      A: "Web Applications",
      B: "Hardware Drivers only",
      C: "BIOS Systems",
      D: "Computer Chips"
    },
    answer: "A",
    explanation: ".NET (especially ASP.NET Core) is widely utilized to build high-performance web applications and APIs."
  },
  {
    id: "lec1_q8",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: ".NET Platform & CLR",
    qNum: 8,
    question: "The CLR is the execution engine of:",
    options: {
      A: "Java",
      B: "Python",
      C: ".NET",
      D: "HTML"
    },
    answer: "C",
    explanation: "CLR (Common Language Runtime) serves as the virtual machine component and execution engine of the .NET framework."
  },
  {
    id: "lec1_q9",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: ".NET Platform & CLR",
    qNum: 9,
    question: "Garbage Collection (GC) in CLR is responsible for:",
    options: {
      A: "Designing user interfaces",
      B: "Automatically managing memory",
      C: "Creating databases",
      D: "Encrypting files"
    },
    answer: "B",
    explanation: "The Garbage Collector (GC) automatically manages memory allocation and deallocates memory when objects are no longer referenced."
  },
  {
    id: "lec1_q10",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: ".NET Platform & CLR",
    qNum: 10,
    question: "Type Safety & Verification ensures that:",
    options: {
      A: "Variables and objects are used correctly",
      B: "Programs run without memory",
      C: "All code is deleted",
      D: "Applications cannot be extended"
    },
    answer: "A",
    explanation: "Type safety prevents code from accessing memory locations it is not authorized to access and guarantees that types match expected operations."
  },
  {
    id: "lec1_q11",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: ".NET Platform & CLR",
    qNum: 11,
    question: "Exception Handling in CLR provides:",
    options: {
      A: "A way to detect and handle errors",
      B: "A method to create objects",
      C: "A way to remove classes",
      D: "A way to design interfaces"
    },
    answer: "A",
    explanation: "Structured Exception Handling gives developers a robust mechanism to detect, catch, and handle runtime errors gracefully."
  },
  {
    id: "lec1_q12",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "OOP Foundations",
    qNum: 12,
    question: "Object-Oriented Programming is based on the concept of:",
    options: {
      A: "Objects and classes",
      B: "Only functions",
      C: "Only variables",
      D: "Hardware devices"
    },
    answer: "A",
    explanation: "OOP revolves around objects (instances that bundle data and behavior) instantiated from classes (blueprints)."
  },
  {
    id: "lec1_q13",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "OOP Foundations",
    qNum: 13,
    question: "In OOP, a class is considered as:",
    options: {
      A: "The instance of an object",
      B: "A blueprint for creating objects",
      C: "A database table",
      D: "A programming language"
    },
    answer: "B",
    explanation: "A class acts as a template or blueprint specifying the fields, properties, and methods that created objects will possess."
  },
  {
    id: "lec1_q14",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "OOP Foundations",
    qNum: 14,
    question: "Which OOP principle means \"Hide data inside classes\"?",
    options: {
      A: "Abstraction",
      B: "Inheritance",
      C: "Encapsulation",
      D: "Polymorphism"
    },
    answer: "C",
    explanation: "Encapsulation bundles data and methods together and hides internal state from outside direct tampering (information hiding)."
  },
  {
    id: "lec1_q15",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "OOP Foundations",
    qNum: 15,
    question: "Abstraction means:",
    options: {
      A: "Showing only what is necessary",
      B: "Repeating code many times",
      C: "Making all data public",
      D: "Removing objects"
    },
    answer: "A",
    explanation: "Abstraction exposes only relevant and essential characteristics to the outside world while concealing internal complexity."
  },
  {
    id: "lec1_q16",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "OOP Foundations",
    qNum: 16,
    question: "Inheritance allows:",
    options: {
      A: "Reuse parent features",
      B: "Deleting classes",
      C: "Hiding all methods",
      D: "Preventing code reuse"
    },
    answer: "A",
    explanation: "Inheritance enables a derived class to inherit, reuse, and extend fields and methods defined in a parent (base) class."
  },
  {
    id: "lec1_q17",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "OOP Foundations",
    qNum: 17,
    question: "Polymorphism means:",
    options: {
      A: "Same method, different behavior",
      B: "One class only",
      C: "No objects in programming",
      D: "Removing methods"
    },
    answer: "A",
    explanation: "Polymorphism (\"many forms\") enables objects of different types to respond to the same method invocation in their own specific way."
  },
  {
    id: "lec1_q18",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "OOP Foundations",
    qNum: 18,
    question: "Encapsulation groups related data variables and functions into:",
    options: {
      A: "Files",
      B: "Single units called objects",
      C: "Databases",
      D: "Applications"
    },
    answer: "B",
    explanation: "Encapsulation packages variables (state) and functions (behavior) together into a cohesive object entity."
  },
  {
    id: "lec1_q19",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "OOP Foundations",
    qNum: 19,
    question: "One benefit of Encapsulation is:",
    options: {
      A: "Increasing source code complexity",
      B: "Reducing source code complexity",
      C: "Removing reusability",
      D: "Preventing objects"
    },
    answer: "B",
    explanation: "By isolating internal states and reducing tight coupling, encapsulation makes code cleaner, less complex, and easier to manage."
  },
  {
    id: "lec1_q20",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "OOP Foundations",
    qNum: 20,
    question: "Abstraction creates:",
    options: {
      A: "More complicated interfaces",
      B: "Simpler interfaces",
      C: "More duplicate code",
      D: "More memory leaks"
    },
    answer: "B",
    explanation: "Abstraction simplifies interaction by exposing clean, concise interfaces and hiding convoluted background machinery."
  },
  {
    id: "lec1_q21",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "OOP Foundations",
    qNum: 21,
    question: "Inheritance is a mechanism used for:",
    options: {
      A: "Eliminating redundant code",
      B: "Increasing duplicate code",
      C: "Removing all classes",
      D: "Preventing code reuse"
    },
    answer: "A",
    explanation: "By centralizing shared logic in a superclass, inheritance eliminates duplicate and redundant code across subclasses."
  },
  {
    id: "lec1_q22",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "OOP Foundations",
    qNum: 22,
    question: "Inheritance allows properties and methods to be:",
    options: {
      A: "Deleted permanently",
      B: "Grouped into a single object and reused",
      C: "Converted into databases",
      D: "Hidden from all classes"
    },
    answer: "B",
    explanation: "Inheritance allows common properties and methods to be established once in a base entity and reused effortlessly across subtypes."
  },
  {
    id: "lec1_q23",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "OOP Foundations",
    qNum: 23,
    question: "Polymorphism is used to render variables, methods, and objects in:",
    options: {
      A: "One form only",
      B: "Multiple forms",
      C: "No forms",
      D: "Database forms only"
    },
    answer: "B",
    explanation: "From the Greek word for 'many shapes', polymorphism allows a single interface to control entities of multiple concrete forms."
  },
  {
    id: "lec1_q24",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "C# Access Modifiers",
    qNum: 24,
    question: "Access modifiers in C# define:",
    options: {
      A: "Program speed",
      B: "Where classes, methods, and variables can be accessed",
      C: "Number of objects",
      D: "Database size"
    },
    answer: "B",
    explanation: "Access modifiers set the scope and accessibility limits for types and type members within assemblies and inheritance hierarchies."
  },
  {
    id: "lec1_q25",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "C# Access Modifiers",
    qNum: 25,
    question: "Access modifiers control:",
    options: {
      A: "Visibility",
      B: "Memory allocation only",
      C: "Application installation",
      D: "Software version"
    },
    answer: "A",
    explanation: "Access modifiers govern the visibility and reachability of classes, methods, and member variables."
  },
  {
    id: "lec1_q26",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "C# Access Modifiers",
    qNum: 26,
    question: "Which access modifier allows everyone to access?",
    options: {
      A: "private",
      B: "protected",
      C: "public",
      D: "internal"
    },
    answer: "C",
    explanation: "The 'public' keyword gives unrestricted access to the member from any other code within the same or referencing assemblies."
  },
  {
    id: "lec1_q27",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "C# Access Modifiers",
    qNum: 27,
    question: "Which access modifier allows access only inside the same class?",
    options: {
      A: "public",
      B: "private",
      C: "protected",
      D: "internal"
    },
    answer: "B",
    explanation: "'private' limits access strictly to within the body of the class or struct in which it is declared."
  },
  {
    id: "lec1_q28",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "C# Access Modifiers",
    qNum: 28,
    question: "Which access modifier allows access to the class and child classes?",
    options: {
      A: "protected",
      B: "private",
      C: "public",
      D: "internal"
    },
    answer: "A",
    explanation: "'protected' allows members to be accessed inside its containing class and by instances of derived/child classes."
  },
  {
    id: "lec1_q29",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID Principles Overview",
    qNum: 29,
    question: "SOLID is a collection of:",
    options: {
      A: "Programming languages",
      B: "Design principles",
      C: "Operating systems",
      D: "Databases"
    },
    answer: "B",
    explanation: "SOLID is an acronym for five foundational object-oriented design principles: SRP, OCP, LSP, ISP, and DIP."
  },
  {
    id: "lec1_q30",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID Principles Overview",
    qNum: 30,
    question: "The goal of SOLID principles is to create:",
    options: {
      A: "Flexible and maintainable systems",
      B: "More complex systems",
      C: "Larger files",
      D: "Duplicate code"
    },
    answer: "A",
    explanation: "SOLID aims to produce codebases that are understandable, flexible, easy to maintain, and resilient to changing requirements."
  },
  {
    id: "lec1_q31",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - SRP",
    qNum: 31,
    question: "SRP stands for:",
    options: {
      A: "Single Responsibility Principle",
      B: "Software Runtime Process",
      C: "System Resource Program",
      D: "Simple Reuse Pattern"
    },
    answer: "A",
    explanation: "SRP stands for Single Responsibility Principle."
  },
  {
    id: "lec1_q32",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - SRP",
    qNum: 32,
    question: "According to SRP, a class should have:",
    options: {
      A: "Many reasons to change",
      B: "Only one reason to change",
      C: "No methods",
      D: "Unlimited responsibilities"
    },
    answer: "B",
    explanation: "As stated by Robert C. Martin: 'A class should have one, and only one, reason to change.'"
  },
  {
    id: "lec1_q33",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - SRP",
    qNum: 33,
    question: "In the bad example of SRP, the Student class:",
    options: {
      A: "Has only one responsibility",
      B: "Saves data, prints reports, and sends email",
      C: "Contains no methods",
      D: "Cannot store data"
    },
    answer: "B",
    explanation: "A class that persists data, renders reports, and dispatches emails violates SRP by holding three completely distinct responsibilities."
  },
  {
    id: "lec1_q34",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - SRP",
    qNum: 34,
    question: "The good example of SRP uses:",
    options: {
      A: "One large class for everything",
      B: "Separate classes for each responsibility",
      C: "No classes",
      D: "Duplicate methods"
    },
    answer: "B",
    explanation: "Good SRP design breaks distinct responsibilities into specialized, single-purpose classes (e.g. StudentRepository, ReportPrinter, EmailService)."
  },
  {
    id: "lec1_q35",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - SRP",
    qNum: 35,
    question: "A problem of putting multiple responsibilities in one class is:",
    options: {
      A: "Easier maintenance",
      B: "Changes can unintentionally affect others",
      C: "Better reuse",
      D: "Less complexity"
    },
    answer: "B",
    explanation: "When multiple concerns collide in one class, changing code for one feature frequently introduces bugs or breaks other unrelated features."
  },
  {
    id: "lec1_q36",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - SRP",
    qNum: 36,
    question: "The Employee class example in SRP contains methods used by different departments including:",
    options: {
      A: "calculatePay(), reportHours(), save()",
      B: "Login(), Register(), Delete()",
      C: "Start(), Stop(), Run()",
      D: "Open(), Close(), Print()"
    },
    answer: "A",
    explanation: "In Uncle Bob's classic example, calculatePay() serves Accounting, reportHours() serves HR, and save() serves DBAs."
  },
  {
    id: "lec1_q37",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - SRP",
    qNum: 37,
    question: "The method calculatePay() is used by:",
    options: {
      A: "Human Resources Department",
      B: "Accounting Department",
      C: "Database Administrators",
      D: "Marketing Department"
    },
    answer: "B",
    explanation: "Financial calculations and payroll policies are specified and used by the Accounting Department (CFO team)."
  },
  {
    id: "lec1_q38",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - SRP",
    qNum: 38,
    question: "The method reportHours() is used by:",
    options: {
      A: "Human Resources Department",
      B: "Accounting Department",
      C: "Database Administrators",
      D: "Software Developers"
    },
    answer: "A",
    explanation: "Work hour reports and attendance tracking are specified and consumed by Human Resources (COO team)."
  },
  {
    id: "lec1_q39",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - SRP",
    qNum: 39,
    question: "The method save() is used by:",
    options: {
      A: "Accounting Department",
      B: "Human Resources Department",
      C: "Database Administrators",
      D: "Users"
    },
    answer: "C",
    explanation: "Persistence mechanisms and database storage requirements belong to Database Administrators (CTO team)."
  },
  {
    id: "lec1_q40",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - SRP",
    qNum: 40,
    question: "According to SRP, code that serves different actors should be separated into:",
    options: {
      A: "Different classes",
      B: "One large class",
      C: "One database",
      D: "One method"
    },
    answer: "A",
    explanation: "Code serving different stakeholders or actors must be isolated into distinct classes so changes for one actor do not affect others."
  },
  {
    id: "lec1_q41",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - SRP",
    qNum: 41,
    question: "Instead of using one Employee class with many responsibilities, SRP suggests using:",
    options: {
      A: "PayrollCalculator, HoursReporter, EmployeeRepository",
      B: "One Employee class only",
      C: "One database table",
      D: "One interface only"
    },
    answer: "A",
    explanation: "Separating into PayrollCalculator (Accounting), HoursReporter (HR), and EmployeeRepository (DBA) adheres strictly to SRP."
  },
  {
    id: "lec1_q42",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - OCP",
    qNum: 42,
    question: "OCP stands for:",
    options: {
      A: "Object Control Principle",
      B: "Open-Closed Principle",
      C: "Object Creation Process",
      D: "Open Code Program"
    },
    answer: "B",
    explanation: "OCP stands for Open-Closed Principle."
  },
  {
    id: "lec1_q43",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - OCP",
    qNum: 43,
    question: "The Open-Closed Principle was coined in:",
    options: {
      A: "1978",
      B: "1988",
      C: "1998",
      D: "2008"
    },
    answer: "B",
    explanation: "Bertrand Meyer originally coined the Open-Closed Principle in his 1988 book 'Object-Oriented Software Construction'."
  },
  {
    id: "lec1_q44",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - OCP",
    qNum: 44,
    question: "According to OCP, software should be:",
    options: {
      A: "Open for extension but closed for modification",
      B: "Closed for extension and open for modification",
      C: "Open for deletion",
      D: "Closed for reuse"
    },
    answer: "A",
    explanation: "Software entities should be open for extension (adding new functionality) but closed for modification (leaving tested code untouched)."
  },
  {
    id: "lec1_q45",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - OCP",
    qNum: 45,
    question: "The challenge in OCP example is to add new features with:",
    options: {
      A: "Maximum changes to existing code",
      B: "Minimal changes to existing code",
      C: "Removing all code",
      D: "Creating duplicate systems"
    },
    answer: "B",
    explanation: "OCP empowers developers to seamlessly plug in new features while making minimal or zero changes to existing, validated source code."
  },
  {
    id: "lec1_q46",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - OCP Clean Architecture View",
    qNum: 46,
    question: "In the OCP solution, the Controller:",
    options: {
      A: "Stores data permanently",
      B: "Receives user requests and coordinates workflow",
      C: "Formats output only",
      D: "Displays final output"
    },
    answer: "B",
    explanation: "In an OCP-compliant architecture, the Controller receives input requests from clients and coordinates execution with interactor/use cases."
  },
  {
    id: "lec1_q47",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - OCP Clean Architecture View",
    qNum: 47,
    question: "The Interactor component contains:",
    options: {
      A: "Business rules and processes financial data",
      B: "User interface design",
      C: "Database storage only",
      D: "Hardware information"
    },
    answer: "A",
    explanation: "The Interactor encapsulates application-specific business rules, orchestrating data flow and computations independent of UI or persistence."
  },
  {
    id: "lec1_q48",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - OCP Clean Architecture View",
    qNum: 48,
    question: "The Database component is responsible for:",
    options: {
      A: "Formatting reports",
      B: "Storing and retrieving data",
      C: "Receiving user requests",
      D: "Displaying web pages"
    },
    answer: "B",
    explanation: "The Database component handles the technical persistence details of saving, querying, and retrieving stored records."
  },
  {
    id: "lec1_q49",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - OCP Clean Architecture View",
    qNum: 49,
    question: "Presenters are responsible for:",
    options: {
      A: "Formatting data for specific outputs",
      B: "Managing memory",
      C: "Creating classes",
      D: "Handling inheritance"
    },
    answer: "A",
    explanation: "Presenters accept output data from interactors and format/transform it into a structure suitable for the view layer."
  },
  {
    id: "lec1_q50",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - OCP Clean Architecture View",
    qNum: 50,
    question: "Views display:",
    options: {
      A: "Final output (web page or printed report)",
      B: "Database tables only",
      C: "Source code",
      D: "Memory objects"
    },
    answer: "A",
    explanation: "Views represent the outermost visual interface, rendering formatted information (HTML, PDF, console output) to end users."
  },
  {
    id: "lec1_q51",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "Architecture Benefits",
    qNum: 51,
    question: "The key benefit of separating responsibilities and dependencies is:",
    options: {
      A: "Making systems harder to maintain",
      B: "Implementing new requirements with little or no impact on existing code",
      C: "Increasing duplicate code",
      D: "Preventing extensions"
    },
    answer: "B",
    explanation: "Decoupling dependencies shields existing, working code from regression bugs when adding new features."
  },
  {
    id: "lec1_q52",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - OCP",
    qNum: 52,
    question: "OCP helps make systems:",
    options: {
      A: "Easy to extend without high impact of change",
      B: "Impossible to modify",
      C: "Dependent on lower-level components",
      D: "Less maintainable"
    },
    answer: "A",
    explanation: "Systems designed around OCP can effortlessly incorporate new features via polymorphism and interfaces without widespread refactoring."
  },
  {
    id: "lec1_q53",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - LSP",
    qNum: 53,
    question: "LSP stands for:",
    options: {
      A: "Logical System Principle",
      B: "Liskov Substitution Principle",
      C: "Language Software Principle",
      D: "Link Subsystem Protocol"
    },
    answer: "B",
    explanation: "LSP stands for Liskov Substitution Principle, named after Barbara Liskov."
  },
  {
    id: "lec1_q54",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - LSP",
    qNum: 54,
    question: "According to LSP, derived classes should:",
    options: {
      A: "Replace base classes without breaking behavior",
      B: "Remove base classes",
      C: "Avoid inheritance completely",
      D: "Add unrelated methods"
    },
    answer: "A",
    explanation: "Subtypes must be substitutable for their base types without altering any of the desirable properties of the program (correctness, task performed)."
  },
  {
    id: "lec1_q55",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - LSP",
    qNum: 55,
    question: "If replacing a parent object with a child object breaks the program, then:",
    options: {
      A: "OCP is applied",
      B: "LSP is violated",
      C: "SRP is applied",
      D: "Encapsulation is improved"
    },
    answer: "B",
    explanation: "Breaking contract expectations when substituting a subtype directly constitutes a violation of LSP."
  },
  {
    id: "lec1_q56",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - LSP",
    qNum: 56,
    question: "LSP requires that inheritance should:",
    options: {
      A: "Increase code duplication",
      B: "Preserve expected behavior",
      C: "Remove all child classes",
      D: "Prevent code reuse"
    },
    answer: "B",
    explanation: "Inheritance hierarchies must honor the behavioral contracts defined by parent types to keep system behavior consistent."
  },
  {
    id: "lec1_q57",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - LSP",
    qNum: 57,
    question: "In the LSP example, which class cannot replace Bird because it cannot fly?",
    options: {
      A: "Sparrow",
      B: "Penguin",
      C: "License",
      D: "Employee"
    },
    answer: "B",
    explanation: "If a base Bird class specifies Fly(), a Penguin cannot substitute it because penguins cannot fly, throwing an exception and violating LSP."
  },
  {
    id: "lec1_q58",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - LSP",
    qNum: 58,
    question: "Bad inheritance design causes:",
    options: {
      A: "Better system performance",
      B: "Problems in software design",
      C: "More flexibility",
      D: "Less maintenance needs"
    },
    answer: "B",
    explanation: "Misusing inheritance creates brittle hierarchies, unexpected runtime crashes, and architectural pitfalls."
  },
  {
    id: "lec1_q59",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - LSP",
    qNum: 59,
    question: "The LSP design example allows subtypes to be:",
    options: {
      A: "Deleted from the system",
      B: "Substitutable for the License type",
      C: "Converted into interfaces only",
      D: "Ignored by applications"
    },
    answer: "B",
    explanation: "In Uncle Bob's License example (PersonalLicense and BusinessLicense), both are interchangeable wherever the base License type is required."
  },
  {
    id: "lec1_q60",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - ISP",
    qNum: 60,
    question: "ISP stands for:",
    options: {
      A: "Interface Segregation Principle",
      B: "Internal Software Principle",
      C: "Interface System Program",
      D: "Inheritance Separation Process"
    },
    answer: "A",
    explanation: "ISP stands for Interface Segregation Principle."
  },
  {
    id: "lec1_q61",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - ISP",
    qNum: 61,
    question: "According to ISP, clients should not be forced to depend on:",
    options: {
      A: "Methods they do not use",
      B: "Small interfaces",
      C: "Required methods",
      D: "Focused interfaces"
    },
    answer: "A",
    explanation: "ISP states that no client should be forced to depend on methods it does not use."
  },
  {
    id: "lec1_q62",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - ISP",
    qNum: 62,
    question: "The idea of ISP is to keep interfaces:",
    options: {
      A: "Large and complex",
      B: "Small and focused",
      C: "Empty",
      D: "Hidden"
    },
    answer: "B",
    explanation: "ISP advocates for creating fine-grained, cohesive, small, and role-specific interfaces."
  },
  {
    id: "lec1_q63",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - ISP",
    qNum: 63,
    question: "Large interfaces can lead to:",
    options: {
      A: "Better design always",
      B: "Poor design and maintenance problems",
      C: "Faster execution",
      D: "More reusable code automatically"
    },
    answer: "B",
    explanation: "'Fat' interfaces force implementers to write dummy or throwing stubs for irrelevant methods, creating code smell and maintenance drag."
  },
  {
    id: "lec1_q64",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - ISP",
    qNum: 64,
    question: "In the bad ISP design, a robot is forced to implement methods it:",
    options: {
      A: "Needs always",
      B: "Does not need",
      C: "Creates automatically",
      D: "Inherits from database"
    },
    answer: "B",
    explanation: "If IWorker has Work() and Eat(), a RobotWorker is forced to provide an Eat() implementation even though robots do not eat."
  },
  {
    id: "lec1_q65",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - ISP",
    qNum: 65,
    question: "Good ISP design suggests splitting large interfaces into:",
    options: {
      A: "Smaller specialized interfaces",
      B: "Larger classes",
      C: "More databases",
      D: "Duplicate interfaces"
    },
    answer: "A",
    explanation: "Decomposing IWorker into IWorkable and IFeedable allows classes to implement only the interfaces relevant to their role."
  },
  {
    id: "lec1_q66",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - ISP",
    qNum: 66,
    question: "One benefit of ISP is:",
    options: {
      A: "Increased coupling",
      B: "Reduced coupling",
      C: "More unnecessary methods",
      D: "Larger interfaces"
    },
    answer: "B",
    explanation: "Focused interfaces drastically reduce accidental coupling between unrelated modules."
  },
  {
    id: "lec1_q67",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - ISP",
    qNum: 67,
    question: "ISP helps classes to implement:",
    options: {
      A: "Everything available",
      B: "Only what they actually need",
      C: "No interfaces",
      D: "Unrelated methods"
    },
    answer: "B",
    explanation: "With granular interfaces, implementers provide concrete behavior only for functions that make logical sense for their purpose."
  },
  {
    id: "lec1_q68",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - ISP",
    qNum: 68,
    question: "Another benefit of ISP is:",
    options: {
      A: "Easier maintenance and extension",
      B: "More complex systems",
      C: "More dependencies",
      D: "More code duplication"
    },
    answer: "A",
    explanation: "Granular interfaces make future system updates modular, clean, and straightforward to maintain."
  },
  {
    id: "lec1_q69",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - DIP",
    qNum: 69,
    question: "DIP stands for:",
    options: {
      A: "Dependency Inversion Principle",
      B: "Data Integration Process",
      C: "Development Interface Program",
      D: "Dependency Internal Principle"
    },
    answer: "A",
    explanation: "DIP stands for Dependency Inversion Principle."
  },
  {
    id: "lec1_q70",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - DIP",
    qNum: 70,
    question: "The goal of Dependency Inversion Principle is that high-level business rules depend on:",
    options: {
      A: "Concrete implementations",
      B: "Abstractions (interfaces)",
      C: "Hardware components",
      D: "Database tables"
    },
    answer: "B",
    explanation: "High-level modules should not depend on low-level modules; both should depend on abstractions (interfaces)."
  },
  {
    id: "lec1_q71",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - DIP",
    qNum: 71,
    question: "According to DIP, a system cannot run using only:",
    options: {
      A: "Classes",
      B: "Interfaces",
      C: "Objects",
      D: "Methods"
    },
    answer: "B",
    explanation: "Interfaces define contracts, but execution ultimately requires concrete objects instantiated and plugged in."
  },
  {
    id: "lec1_q72",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - DIP",
    qNum: 72,
    question: "In DIP, concrete objects must be:",
    options: {
      A: "Never created",
      B: "Created at some point",
      C: "Removed completely",
      D: "Converted into comments"
    },
    answer: "B",
    explanation: "Concrete implementations must still be created somewhere (e.g. at the composition root / startup using Dependency Injection)."
  },
  {
    id: "lec1_q73",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - DIP",
    qNum: 73,
    question: "DIP organizes dependencies so that:",
    options: {
      A: "High-level logic depends on low-level details",
      B: "High-level business logic is independent of low-level implementation details",
      C: "All classes become public",
      D: "Interfaces are removed"
    },
    answer: "B",
    explanation: "DIP inverts traditional control so high-level policy code remains pure and agnostic of specific database or framework implementations."
  },
  {
    id: "lec1_q74",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID Principles Overview",
    qNum: 74,
    question: "SOLID principles are used to create systems that are:",
    options: {
      A: "Flexible and maintainable",
      B: "Difficult to change",
      C: "Dependent on one class",
      D: "Without design rules"
    },
    answer: "A",
    explanation: "The overarching purpose of SOLID is to engineer agile, flexible, testable, and maintainable software systems."
  },
  {
    id: "lec1_q75",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID Mapping",
    qNum: 75,
    question: "Which principle focuses on separating interfaces into smaller specialized ones?",
    options: {
      A: "SRP",
      B: "OCP",
      C: "ISP",
      D: "DIP"
    },
    answer: "C",
    explanation: "ISP (Interface Segregation Principle) mandates lean, specialized interfaces over monolithic ones."
  },
  {
    id: "lec1_q76",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID Mapping",
    qNum: 76,
    question: "Which SOLID principle states that a class should have only one reason to change?",
    options: {
      A: "Open-Closed Principle",
      B: "Single Responsibility Principle",
      C: "Dependency Inversion Principle",
      D: "Interface Segregation Principle"
    },
    answer: "B",
    explanation: "Single Responsibility Principle (SRP) asserts each class should focus on one sole responsibility."
  },
  {
    id: "lec1_q77",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID Mapping",
    qNum: 77,
    question: "Which principle says software should be open for extension but closed for modification?",
    options: {
      A: "OCP",
      B: "SRP",
      C: "LSP",
      D: "ISP"
    },
    answer: "A",
    explanation: "OCP (Open-Closed Principle)."
  },
  {
    id: "lec1_q78",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID Mapping",
    qNum: 78,
    question: "Which principle ensures that derived classes can replace base classes without breaking behavior?",
    options: {
      A: "DIP",
      B: "ISP",
      C: "LSP",
      D: "SRP"
    },
    answer: "C",
    explanation: "LSP (Liskov Substitution Principle)."
  },
  {
    id: "lec1_q79",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID Mapping",
    qNum: 79,
    question: "Which principle focuses on high-level business rules depending on abstractions?",
    options: {
      A: "DIP",
      B: "OCP",
      C: "SRP",
      D: "Encapsulation"
    },
    answer: "A",
    explanation: "DIP (Dependency Inversion Principle)."
  },
  {
    id: "lec1_q80",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID Mapping",
    qNum: 80,
    question: "Which principle prevents clients from depending on methods they do not use?",
    options: {
      A: "LSP",
      B: "ISP",
      C: "OCP",
      D: "Inheritance"
    },
    answer: "B",
    explanation: "ISP (Interface Segregation Principle)."
  },
  {
    id: "lec1_q81",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID Principles Overview",
    qNum: 81,
    question: "The main purpose of SOLID principles is to improve:",
    options: {
      A: "Software flexibility and maintainability",
      B: "Hardware performance",
      C: "Programming language syntax",
      D: "File storage size"
    },
    answer: "A",
    explanation: "SOLID aims directly at maximizing architecture flexibility and long-term code maintainability."
  },
  {
    id: "lec1_q82",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "OOP Foundations",
    qNum: 82,
    question: "In OOP, hiding data inside classes refers to:",
    options: {
      A: "Abstraction",
      B: "Encapsulation",
      C: "Polymorphism",
      D: "Inheritance"
    },
    answer: "B",
    explanation: "Encapsulation encapsulates state and conceals internal implementation data."
  },
  {
    id: "lec1_q83",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "OOP Foundations",
    qNum: 83,
    question: "Showing only what is necessary refers to:",
    options: {
      A: "Encapsulation",
      B: "Inheritance",
      C: "Abstraction",
      D: "Polymorphism"
    },
    answer: "C",
    explanation: "Abstraction simplifies viewports by exposing purely essential capabilities."
  },
  {
    id: "lec1_q84",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "OOP Foundations",
    qNum: 84,
    question: "Reusing parent features refers to:",
    options: {
      A: "Inheritance",
      B: "Encapsulation",
      C: "Abstraction",
      D: "Exception Handling"
    },
    answer: "A",
    explanation: "Inheritance allows subclasses to acquire characteristics and logic from base classes."
  },
  {
    id: "lec1_q85",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "OOP Foundations",
    qNum: 85,
    question: "Same method with different behavior refers to:",
    options: {
      A: "Type Safety",
      B: "Polymorphism",
      C: "Garbage Collection",
      D: "Dependency Inversion"
    },
    answer: "B",
    explanation: "Polymorphism enables an identical method signature to execute specialized behaviors according to the runtime instance type."
  },
  {
    id: "lec1_q86",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: ".NET Platform & CLR",
    qNum: 86,
    question: "Which CLR responsibility automatically manages memory?",
    options: {
      A: "Exception Handling",
      B: "Garbage Collection",
      C: "Type Safety",
      D: "Verification"
    },
    answer: "B",
    explanation: "Garbage Collection (GC) in the CLR handles automated heap memory allocation and reclamation."
  },
  {
    id: "lec1_q87",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: ".NET Platform & CLR",
    qNum: 87,
    question: "CLR prevents invalid type conversions through:",
    options: {
      A: "Type Safety & Verification",
      B: "Garbage Collection",
      C: "Exception Handling",
      D: "Inheritance"
    },
    answer: "A",
    explanation: "Type Safety and MSIL Verification guarantee that memory cannot be reinterpreted improperly or corrupted."
  },
  {
    id: "lec1_q88",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: ".NET Platform & CLR",
    qNum: 88,
    question: "CLR improves system stability through:",
    options: {
      A: "Exception Handling",
      B: "Encapsulation",
      C: "Polymorphism",
      D: "Interface Segregation"
    },
    answer: "A",
    explanation: "The robust exception engine in the CLR prevents unexpected fatal process aborts and supports recovery."
  },
  {
    id: "lec1_q89",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: ".NET Applications",
    qNum: 89,
    question: ".NET applications include:",
    options: {
      A: "Web Applications and Desktop Applications",
      B: "Only Games",
      C: "Only Operating Systems",
      D: "Only Databases"
    },
    answer: "A",
    explanation: ".NET is versatile, supporting Web (ASP.NET Core), Desktop (WPF, WinForms, MAUI), Cloud, Mobile, and Microservices."
  },
  {
    id: "lec1_q90",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: ".NET Applications",
    qNum: 90,
    question: ".NET can be used to build:",
    options: {
      A: "AI Applications",
      B: "Only text files",
      C: "Only hardware devices",
      D: "Only networks"
    },
    answer: "A",
    explanation: "Modern .NET provides ML.NET, Semantic Kernel, and native tensor integrations to build sophisticated AI applications."
  },
  {
    id: "lec1_q91",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: ".NET Platform & CLR",
    qNum: 91,
    question: "The Common Language Runtime (CLR) is responsible for:",
    options: {
      A: "Managing program execution",
      B: "Designing websites only",
      C: "Creating databases only",
      D: "Writing documentation"
    },
    answer: "A",
    explanation: "The CLR oversees program execution: JIT compiling CIL bytecode to machine code, managing threads, security, and memory."
  },
  {
    id: "lec1_q92",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "C# Access Modifiers",
    qNum: 92,
    question: "Internal access modifier allows access to:",
    options: {
      A: "Everyone",
      B: "Same project only",
      C: "Child classes only",
      D: "No classes"
    },
    answer: "B",
    explanation: "In C#, 'internal' restricts access to code located within the same compiled assembly / project."
  },
  {
    id: "lec1_q93",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "C# Access Modifiers",
    qNum: 93,
    question: "Protected access modifier allows access to:",
    options: {
      A: "This class + child classes",
      B: "Everyone",
      C: "Same project only",
      D: "Only external classes"
    },
    answer: "A",
    explanation: "'protected' allows access within the declaring class and any derived (child) subclasses."
  },
  {
    id: "lec1_q94",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "C# Access Modifiers",
    qNum: 94,
    question: "Public access modifier means:",
    options: {
      A: "Only this class can access",
      B: "Everyone can access",
      C: "Only child classes can access",
      D: "Same project only"
    },
    answer: "B",
    explanation: "'public' grants unrestricted visibility and access to all callers in any assembly."
  },
  {
    id: "lec1_q95",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "C# Access Modifiers",
    qNum: 95,
    question: "Internal access modifier is related to:",
    options: {
      A: "Same project only",
      B: "All applications",
      C: "Parent classes only",
      D: "Database access"
    },
    answer: "A",
    explanation: "'internal' limits access strictly within the boundary of the containing assembly / project."
  },
  {
    id: "lec1_q96",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID History",
    qNum: 96,
    question: "Who coined the Open-Closed Principle in 1988?",
    options: {
      A: "Bertrand Meyer",
      B: "Robert C. Martin",
      C: "Alan Turing",
      D: "James Gosling"
    },
    answer: "A",
    explanation: "Bertrand Meyer formulated the Open-Closed Principle in 1988 in 'Object-Oriented Software Construction'."
  },
  {
    id: "lec1_q97",
    lectureId: 1,
    lectureTitle: "Lecture 1: .NET, OOP & SOLID",
    lectureTitleAr: "المحاضرة 1: بيئة .NET والبرمجة الكائنية ومبادئ SOLID",
    topic: "SOLID - SRP",
    qNum: 97,
    question: "What issue can result when different teams modify the same Employee class?",
    options: {
      A: "Merge conflicts",
      B: "Faster execution",
      C: "Automatic memory cleanup",
      D: "More interfaces"
    },
    answer: "A",
    explanation: "When independent teams edit the same monolithic class simultaneously for different purposes, frequent source control merge conflicts and regressions occur."
  }
];
