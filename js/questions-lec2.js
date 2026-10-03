// Lecture 2: AP_Lec2 MCQ_Bank_2 (Dr. Baidaa Laalaa & Eng. Abdulmalik Hassan Alhaj)
// Total questions: 80
export const lec2Questions = [
  {
    id: "lec2_q1",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Introduction to Design Patterns",
    qNum: 1,
    question: "By the end of the lecture, students should be able to explain why:",
    options: {
      A: "Databases are needed",
      B: "Design Patterns are needed",
      C: "Operating systems are needed",
      D: "Networks are needed"
    },
    answer: "B",
    explanation: "A primary learning objective is understanding the rationale and benefits of adopting design patterns in software development."
  },
  {
    id: "lec2_q2",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Singleton Pattern",
    qNum: 2,
    question: "Which of the following is a learning objective of the lecture?",
    options: {
      A: "Implement Singleton Pattern in C#",
      B: "Build operating systems",
      C: "Create hardware devices",
      D: "Design network protocols"
    },
    answer: "A",
    explanation: "Implementing the Singleton Pattern in C# and understanding its mechanics is an explicit core learning objective."
  },
  {
    id: "lec2_q3",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Software Design Problems",
    qNum: 3,
    question: "Poor software design can cause:",
    options: {
      A: "Duplicate Code",
      B: "Better maintenance",
      C: "Easier testing",
      D: "Higher software quality"
    },
    answer: "A",
    explanation: "Suboptimal design invariably leads to code duplication, anti-patterns, tight coupling, and brittleness."
  },
  {
    id: "lec2_q4",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Software Design Problems",
    qNum: 4,
    question: "One common problem in poor software design is:",
    options: {
      A: "Small Classes",
      B: "Tight Coupling",
      C: "Easy Extension",
      D: "Simple Testing"
    },
    answer: "B",
    explanation: "Tight coupling binds components too closely together, making modifications hard and bug-prone."
  },
  {
    id: "lec2_q5",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Software Design Problems",
    qNum: 5,
    question: "Difficult maintenance is considered a problem of:",
    options: {
      A: "Good software design",
      B: "Poor software design",
      C: "Object creation",
      D: "Software testing only"
    },
    answer: "B",
    explanation: "Poor architecture makes even minor bug fixes and feature enhancements difficult and risky."
  },
  {
    id: "lec2_q6",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Software Design Problems",
    qNum: 6,
    question: "Issues caused by poor software design increase:",
    options: {
      A: "Development cost",
      B: "Software simplicity",
      C: "Code readability",
      D: "Reusability only"
    },
    answer: "A",
    explanation: "Fixing regressions, navigating spaghetti code, and technical debt dramatically drive up overall development and maintenance costs."
  },
  {
    id: "lec2_q7",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Good Software Principles",
    qNum: 7,
    question: "Good software is not only about making it work, but also about making it easy to:",
    options: {
      A: "Change",
      B: "Delete",
      C: "Hide",
      D: "Copy"
    },
    answer: "A",
    explanation: "Software must not only function correctly today, but be structured so that future modifications and extensions are easy and safe."
  },
  {
    id: "lec2_q8",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Design Pattern Motivation",
    qNum: 8,
    question: "In the Online Shopping System scenario, the initial payment methods include:",
    options: {
      A: "MasterCard and Apple Pay",
      B: "Visa and PayPal",
      C: "Crypto Payment and Google Pay",
      D: "Bank Transfer only"
    },
    answer: "B",
    explanation: "In the lecture scenario, the initial e-commerce checkout accepted only Visa and PayPal before expanding."
  },
  {
    id: "lec2_q9",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Design Pattern Motivation",
    qNum: 9,
    question: "Later, the company requested adding:",
    options: {
      A: "MasterCard, Apple Pay, Google Pay, Crypto Payment",
      B: "Only Visa",
      C: "Only PayPal",
      D: "Database Connection"
    },
    answer: "A",
    explanation: "New business requirements demanded adding multiple payment providers: MasterCard, Apple Pay, Google Pay, and Crypto."
  },
  {
    id: "lec2_q10",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Design Pattern Motivation",
    qNum: 10,
    question: "As software complexity increases:",
    options: {
      A: "Good design becomes essential",
      B: "Code becomes unnecessary",
      C: "Testing becomes impossible",
      D: "Objects are removed"
    },
    answer: "A",
    explanation: "Scalable architecture and proven design patterns become indispensable as enterprise system complexity grows."
  },
  {
    id: "lec2_q11",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Definition of Design Pattern",
    qNum: 11,
    question: "A Design Pattern is NOT:",
    options: {
      A: "A blueprint",
      B: "A programming language",
      C: "A reusable solution",
      D: "A design solution"
    },
    answer: "B",
    explanation: "Design patterns are language-agnostic conceptual templates, not programming languages themselves."
  },
  {
    id: "lec2_q12",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Definition of Design Pattern",
    qNum: 12,
    question: "Pattern ≠ Code means that a design pattern is:",
    options: {
      A: "Ready-to-use code",
      B: "A blueprint",
      C: "A programming language",
      D: "A library"
    },
    answer: "B",
    explanation: "A pattern is not off-the-shelf copy-paste code or a NuGet package; it is an architectural blueprint tailored to a specific problem."
  },
  {
    id: "lec2_q13",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Definition of Design Pattern",
    qNum: 13,
    question: "A Design Pattern is similar to:",
    options: {
      A: "Building Blueprint before construction",
      B: "A database table",
      C: "A programming compiler",
      D: "A hardware device"
    },
    answer: "A",
    explanation: "Just as an architect draws building blueprints before constructing walls, developers use patterns as blueprints before writing code."
  },
  {
    id: "lec2_q14",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Definition of Design Pattern",
    qNum: 14,
    question: "Design Patterns are typical solutions to:",
    options: {
      A: "Hardware problems",
      B: "Common software design problems",
      C: "Network problems",
      D: "Database storage problems"
    },
    answer: "B",
    explanation: "Patterns offer generalized, industry-tested solutions for common, recurring software architectural hurdles."
  },
  {
    id: "lec2_q15",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Definition of Design Pattern",
    qNum: 15,
    question: "A Design Pattern is a proven, reusable solution to:",
    options: {
      A: "A recurring software design problem",
      B: "A computer hardware issue",
      C: "A programming language problem",
      D: "A database error"
    },
    answer: "A",
    explanation: "Design patterns capture established best practices to resolve recurring software design dilemmas."
  },
  {
    id: "lec2_q16",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Gang of Four (GoF) History",
    qNum: 16,
    question: "In 1994, four software engineers published the book:",
    options: {
      A: "Clean Code",
      B: "Design Patterns: Elements of Reusable Object-Oriented Software",
      C: "Programming in C#",
      D: "Software Architecture Guide"
    },
    answer: "B",
    explanation: "Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides published 'Design Patterns: Elements of Reusable Object-Oriented Software' in 1994."
  },
  {
    id: "lec2_q17",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Gang of Four (GoF) History",
    qNum: 17,
    question: "The four software engineers became known as:",
    options: {
      A: "Microsoft Team",
      B: "Gang of Four (GoF)",
      C: "Design Group",
      D: "Software Builders"
    },
    answer: "B",
    explanation: "The quartet of authors is universally recognized in computer science as the 'Gang of Four' (GoF)."
  },
  {
    id: "lec2_q18",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Gang of Four (GoF) History",
    qNum: 18,
    question: "The Gang of Four book introduced:",
    options: {
      A: "10 Design Patterns",
      B: "15 Design Patterns",
      C: "23 Classic Design Patterns",
      D: "50 Design Patterns"
    },
    answer: "C",
    explanation: "The seminal GoF publication cataloged exactly 23 classic design patterns."
  },
  {
    id: "lec2_q19",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Pattern Categories",
    qNum: 19,
    question: "Design Patterns are grouped into how many categories?",
    options: {
      A: "Two",
      B: "Three",
      C: "Four",
      D: "Five"
    },
    answer: "B",
    explanation: "GoF classifies design patterns into three broad families: Creational, Structural, and Behavioral."
  },
  {
    id: "lec2_q20",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Pattern Categories",
    qNum: 20,
    question: "The three categories of Design Patterns are:",
    options: {
      A: "Object, Class, Method",
      B: "Creational, Structural, Behavioral",
      C: "Public, Private, Protected",
      D: "Data, Code, Interface"
    },
    answer: "B",
    explanation: "The three canonical categories are Creational, Structural, and Behavioral."
  },
  {
    id: "lec2_q21",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Pattern Categories",
    qNum: 21,
    question: "The Creational category focuses on:",
    options: {
      A: "Object Communication",
      B: "Object Creation",
      C: "Object Composition",
      D: "Object Testing"
    },
    answer: "B",
    explanation: "Creational patterns abstract and control object instantiation mechanisms, increasing flexibility."
  },
  {
    id: "lec2_q22",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Pattern Categories",
    qNum: 22,
    question: "The Structural category focuses on:",
    options: {
      A: "How classes and objects are composed",
      B: "How objects are created",
      C: "How objects communicate only",
      D: "How programs are executed"
    },
    answer: "A",
    explanation: "Structural patterns explain how classes and objects assemble into larger, flexible architectures."
  },
  {
    id: "lec2_q23",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Pattern Categories",
    qNum: 23,
    question: "The Behavioral category focuses on:",
    options: {
      A: "Memory management",
      B: "How objects interact and communicate",
      C: "Object creation",
      D: "Class inheritance only"
    },
    answer: "B",
    explanation: "Behavioral patterns govern communication, message passing, and assignment of responsibilities between objects."
  },
  {
    id: "lec2_q24",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Creational Patterns",
    qNum: 24,
    question: "Which of the following is a Creational Pattern example?",
    options: {
      A: "Singleton",
      B: "Adapter",
      C: "Observer",
      D: "Strategy"
    },
    answer: "A",
    explanation: "Singleton is a creational pattern; Adapter is structural; Observer and Strategy are behavioral."
  },
  {
    id: "lec2_q25",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Structural Patterns",
    qNum: 25,
    question: "Which of the following is a Structural Pattern example?",
    options: {
      A: "Builder",
      B: "Singleton",
      C: "Adapter",
      D: "Factory Method"
    },
    answer: "C",
    explanation: "Adapter is a classic structural pattern."
  },
  {
    id: "lec2_q26",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Behavioral Patterns",
    qNum: 26,
    question: "Which of the following is a Behavioral Pattern example?",
    options: {
      A: "Observer",
      B: "Prototype",
      C: "Facade",
      D: "Builder"
    },
    answer: "A",
    explanation: "Observer is a key behavioral pattern; Prototype and Builder are creational; Facade is structural."
  },
  {
    id: "lec2_q27",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Creational Patterns",
    qNum: 27,
    question: "The key idea of Creational Patterns is to:",
    options: {
      A: "Encapsulate object creation to improve flexibility and maintainability",
      B: "Remove all objects",
      C: "Increase duplicate code",
      D: "Avoid software design"
    },
    answer: "A",
    explanation: "Creational patterns isolate the instantiation logic so code depends on abstractions rather than concrete constructors."
  },
  {
    id: "lec2_q28",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Creational Patterns",
    qNum: 28,
    question: "Creational Patterns focus on:",
    options: {
      A: "How objects are created",
      B: "How objects communicate",
      C: "How classes are composed",
      D: "How errors are handled"
    },
    answer: "A",
    explanation: "The core focus of creational patterns is controlling the lifecycle and mechanics of object instantiation."
  },
  {
    id: "lec2_q29",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Creational Patterns",
    qNum: 29,
    question: "Which of the following is NOT an example of Creational Patterns?",
    options: {
      A: "Singleton",
      B: "Factory Method",
      C: "Builder",
      D: "Adapter"
    },
    answer: "D",
    explanation: "Adapter is a Structural Pattern, whereas Singleton, Factory Method, and Builder are Creational."
  },
  {
    id: "lec2_q30",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Structural Patterns",
    qNum: 30,
    question: "Structural Patterns examples include:",
    options: {
      A: "Adapter, Facade, Decorator, Proxy, Composite",
      B: "Singleton, Builder, Prototype",
      C: "Strategy, Observer, Command",
      D: "Logger, Cache Manager"
    },
    answer: "A",
    explanation: "Adapter, Facade, Decorator, Proxy, and Composite are all structural patterns."
  },
  {
    id: "lec2_q31",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Behavioral Patterns",
    qNum: 31,
    question: "Behavioral Patterns examples include:",
    options: {
      A: "Adapter and Proxy",
      B: "Strategy and Observer",
      C: "Singleton and Factory Method",
      D: "Builder and Prototype"
    },
    answer: "B",
    explanation: "Strategy and Observer are quintessential behavioral patterns."
  },
  {
    id: "lec2_q32",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Creational Patterns",
    qNum: 32,
    question: "Creational Patterns are needed because:",
    options: {
      A: "Object creation should be managed carefully",
      B: "Objects should never be created",
      C: "Classes should be removed",
      D: "Code should be duplicated"
    },
    answer: "A",
    explanation: "Uncontrolled object creation leads to hardcoded dependencies and rigid systems; managing it yields flexible code."
  },
  {
    id: "lec2_q33",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Singleton Pattern",
    qNum: 33,
    question: "Singleton is a:",
    options: {
      A: "Structural Pattern",
      B: "Behavioral Pattern",
      C: "Creational Design Pattern",
      D: "Programming Language"
    },
    answer: "C",
    explanation: "Singleton belongs squarely to the Creational Design Pattern family."
  },
  {
    id: "lec2_q34",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Singleton Pattern",
    qNum: 34,
    question: "Singleton ensures that a class has:",
    options: {
      A: "Many instances",
      B: "Only one instance",
      C: "No objects",
      D: "Unlimited constructors"
    },
    answer: "B",
    explanation: "The hallmark of Singleton is restricting class instantiation to a single unique instance."
  },
  {
    id: "lec2_q35",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Singleton Pattern",
    qNum: 35,
    question: "Singleton provides:",
    options: {
      A: "A global access point to the instance",
      B: "Multiple instances of a class",
      C: "No access to objects",
      D: "Only private methods"
    },
    answer: "A",
    explanation: "In addition to ensuring one instance, Singleton supplies a globally accessible entry point to that instance."
  },
  {
    id: "lec2_q36",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Singleton Pattern",
    qNum: 36,
    question: "Singleton solves two problems:",
    options: {
      A: "Multiple instances and no access",
      B: "Single instance and global access point",
      C: "Inheritance and polymorphism",
      D: "Testing and debugging"
    },
    answer: "B",
    explanation: "Singleton guarantees: 1) only one instance exists, and 2) a global access point is provided to clients."
  },
  {
    id: "lec2_q37",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Singleton Pattern",
    qNum: 37,
    question: "In Singleton, the default constructor should be:",
    options: {
      A: "Public",
      B: "Private",
      C: "Protected",
      D: "Internal"
    },
    answer: "B",
    explanation: "The constructor is declared private to forbid other classes from creating instances with the 'new' operator."
  },
  {
    id: "lec2_q38",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Singleton Pattern",
    qNum: 38,
    question: "The purpose of making Singleton constructor private is to:",
    options: {
      A: "Prevent other objects from using new operator with the Singleton class",
      B: "Increase the number of objects",
      C: "Allow unlimited instances",
      D: "Remove the class"
    },
    answer: "A",
    explanation: "A private constructor blocks direct instantiation from external callers."
  },
  {
    id: "lec2_q39",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Singleton Pattern",
    qNum: 39,
    question: "Singleton uses a static creation method that:",
    options: {
      A: "Creates and returns the instance",
      B: "Deletes the class",
      C: "Creates multiple objects",
      D: "Removes memory"
    },
    answer: "A",
    explanation: "A static factory method (such as GetInstance()) instantiates the object if not yet created and returns it."
  },
  {
    id: "lec2_q40",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Singleton Pattern",
    qNum: 40,
    question: "Following calls to the Singleton creation method return:",
    options: {
      A: "New objects every time",
      B: "The cached object",
      C: "Empty values",
      D: "Different classes"
    },
    answer: "B",
    explanation: "Subsequent requests return the already created and cached static instance."
  },
  {
    id: "lec2_q41",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Singleton Pattern",
    qNum: 41,
    question: "Common examples of Singleton usage include:",
    options: {
      A: "Student and Employee",
      B: "Logger and Configuration Manager",
      C: "Product and Customer",
      D: "Order and Student"
    },
    answer: "B",
    explanation: "Loggers, Configuration Managers, and Cache Managers are prime candidates for Singleton."
  },
  {
    id: "lec2_q42",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Singleton Pattern",
    qNum: 42,
    question: "Which of the following can use Singleton according to the lecture?",
    options: {
      A: "Database Connection",
      B: "Student",
      C: "Product",
      D: "Customer"
    },
    answer: "A",
    explanation: "Database Connection pools or coordinators often use Singleton to avoid resource exhaustion."
  },
  {
    id: "lec2_q43",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Singleton Misuse",
    qNum: 43,
    question: "Singleton should NOT be used for classes that naturally require:",
    options: {
      A: "One instance only",
      B: "Multiple objects",
      C: "Global access",
      D: "Static methods"
    },
    answer: "B",
    explanation: "Entities that represent diverse domain records (e.g. users, products) naturally require multiple separate instances."
  },
  {
    id: "lec2_q44",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Singleton Misuse",
    qNum: 44,
    question: "Which class should NOT use Singleton?",
    options: {
      A: "Logger",
      B: "Cache Manager",
      C: "Student",
      D: "Application Settings"
    },
    answer: "C",
    explanation: "A Student class represents an individual entity, of which thousands may exist in a university system."
  },
  {
    id: "lec2_q45",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Singleton Pattern",
    qNum: 45,
    question: "The intent of Singleton is to:",
    options: {
      A: "Ensure a class has only one instance and provide global access",
      B: "Create many objects",
      C: "Replace all design patterns",
      D: "Increase duplicate code"
    },
    answer: "A",
    explanation: "The official GoF intent of Singleton is ensuring a single instance and a global point of access."
  },
  {
    id: "lec2_q46",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Singleton Implementation in C#",
    qNum: 46,
    question: "In Singleton C# code, the instance variable is declared as:",
    options: {
      A: "Public static",
      B: "Private static",
      C: "Public private",
      D: "Protected only"
    },
    answer: "B",
    explanation: "'private static Singleton _instance;' keeps the instance variable encapsulated inside the class."
  },
  {
    id: "lec2_q47",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Singleton Implementation in C#",
    qNum: 47,
    question: "The GetInstance() method in Singleton is:",
    options: {
      A: "Public static",
      B: "Private static",
      C: "Protected",
      D: "Internal"
    },
    answer: "A",
    explanation: "'public static' allows callers anywhere to invoke Singleton.GetInstance() without prior instantiation."
  },
  {
    id: "lec2_q48",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Factory Method Pattern",
    qNum: 48,
    question: "Factory Method is a:",
    options: {
      A: "Behavioral Pattern",
      B: "Structural Pattern",
      C: "Creational Design Pattern",
      D: "Programming Language"
    },
    answer: "C",
    explanation: "Factory Method is classified under Creational Design Patterns."
  },
  {
    id: "lec2_q49",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Factory Method Pattern",
    qNum: 49,
    question: "Factory Method provides an interface for creating objects in a:",
    options: {
      A: "Database",
      B: "Superclass",
      C: "Library",
      D: "Framework"
    },
    answer: "B",
    explanation: "Factory Method defines an interface for creating an object in a superclass, but lets subclasses decide which class to instantiate."
  },
  {
    id: "lec2_q50",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Factory Method Pattern",
    qNum: 50,
    question: "Factory Method allows subclasses to:",
    options: {
      A: "Alter the type of objects that will be created",
      B: "Remove all objects",
      C: "Prevent object creation",
      D: "Delete classes"
    },
    answer: "A",
    explanation: "Subclasses can override the factory method to return specialized concrete product instances."
  },
  {
    id: "lec2_q51",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Factory Method Pattern",
    qNum: 51,
    question: "Factory Method delegates object creation responsibility to:",
    options: {
      A: "A dedicated method or class",
      B: "The user interface",
      C: "A database table",
      D: "A compiler"
    },
    answer: "A",
    explanation: "Instead of calling 'new' directly across business code, creation is delegated to a dedicated method/class."
  },
  {
    id: "lec2_q52",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Factory Method Benefits",
    qNum: 52,
    question: "Factory Method promotes:",
    options: {
      A: "Tight coupling",
      B: "Loose coupling and scalability",
      C: "Duplicate code",
      D: "Large classes"
    },
    answer: "B",
    explanation: "By relying on product interfaces rather than concrete constructors, it fosters loose coupling and scalability."
  },
  {
    id: "lec2_q53",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Factory Method Pattern",
    qNum: 53,
    question: "Factory Method should be used instead of:",
    options: {
      A: "Direct constructor call using new operator",
      B: "Interfaces",
      C: "Classes",
      D: "Objects"
    },
    answer: "A",
    explanation: "It replaces scattered and inflexible 'new ClassName()' statements throughout business logic."
  },
  {
    id: "lec2_q54",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Factory Method Pattern",
    qNum: 54,
    question: "Subclasses can override Factory Method to change:",
    options: {
      A: "The class of objects that will be created",
      B: "The programming language",
      C: "The database structure",
      D: "The user interface"
    },
    answer: "A",
    explanation: "Overriding the factory method allows concrete creators to return custom concrete product implementations."
  },
  {
    id: "lec2_q55",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Factory Method Usage",
    qNum: 55,
    question: "Factory Method is useful when instantiation logic is:",
    options: {
      A: "Simple and always the same",
      B: "Complex or varies based on conditions",
      C: "Not required",
      D: "Removed from the system"
    },
    answer: "B",
    explanation: "It excels when instantiation requires complex configuration, conditional branches, or external parameters."
  },
  {
    id: "lec2_q56",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Factory Method Usage",
    qNum: 56,
    question: "Factory Method is used when the code does not know ahead of time:",
    options: {
      A: "Which exact types it needs to work with",
      B: "The programming language",
      C: "The operating system",
      D: "The database name"
    },
    answer: "A",
    explanation: "When code must work with various objects whose exact concrete types cannot be determined until runtime."
  },
  {
    id: "lec2_q57",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Factory Method Benefits",
    qNum: 57,
    question: "Centralized Control means:",
    options: {
      A: "Consolidating complex creation logic in one place",
      B: "Removing all classes",
      C: "Creating objects everywhere",
      D: "Avoiding testing"
    },
    answer: "A",
    explanation: "Centralized creation logic ensures updates to object initialization only need to be modified in one unified location."
  },
  {
    id: "lec2_q58",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Factory Method Benefits",
    qNum: 58,
    question: "Factory Method can help in Unit Testing by allowing:",
    options: {
      A: "Easy substitution of dependencies with mock objects",
      B: "Removing objects",
      C: "Avoiding classes",
      D: "Increasing coupling"
    },
    answer: "A",
    explanation: "Factories can return mock or test doubles during automated unit testing without modifying caller code."
  },
  {
    id: "lec2_q59",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Notification Factory Example",
    qNum: 59,
    question: "In the Factory example, Notification can have different types such as:",
    options: {
      A: "Email, SMS, WhatsApp",
      B: "Student, Employee, Product",
      C: "Database, Logger, Cache",
      D: "Adapter, Proxy, Facade"
    },
    answer: "A",
    explanation: "In the lecture scenario, the INotification factory creates EmailNotification, SmsNotification, or WhatsAppNotification."
  },
  {
    id: "lec2_q60",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Notification Factory Example",
    qNum: 60,
    question: "Without Factory, object creation requires:",
    options: {
      A: "Multiple direct new calls depending on type",
      B: "A single factory method",
      C: "No objects",
      D: "Only interfaces"
    },
    answer: "A",
    explanation: "Without a factory, the caller must write brittle switch/if-else blocks calling 'new EmailNotification()', 'new SmsNotification()', etc."
  },
  {
    id: "lec2_q61",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Factory Method Pattern",
    qNum: 61,
    question: "With Factory Method, the client receives the object by using:",
    options: {
      A: "Direct constructor call only",
      B: "Factory method to create the object",
      C: "Database connection",
      D: "Static variable only"
    },
    answer: "B",
    explanation: "The client invokes the factory method (e.g. factory.CreateNotification(type)) to receive an instance."
  },
  {
    id: "lec2_q62",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Factory Method Benefits",
    qNum: 62,
    question: "The Factory Pattern helps to improve:",
    options: {
      A: "Loose coupling and scalability",
      B: "Duplicate code",
      C: "Tight coupling",
      D: "Code complexity"
    },
    answer: "A",
    explanation: "It decouples client code from concrete implementations, directly fostering system scalability."
  },
  {
    id: "lec2_q63",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Factory Method Pattern",
    qNum: 63,
    question: "The main purpose of Factory Method is:",
    options: {
      A: "Managing object creation",
      B: "Deleting objects",
      C: "Preventing inheritance",
      D: "Removing interfaces"
    },
    answer: "A",
    explanation: "Factory Method standardizes and abstracts how objects are created across an application."
  },
  {
    id: "lec2_q64",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Pattern Categories",
    qNum: 64,
    question: "Factory Method belongs to which Design Pattern category?",
    options: {
      A: "Structural",
      B: "Behavioral",
      C: "Creational",
      D: "Communication"
    },
    answer: "C",
    explanation: "Factory Method is categorized under Creational patterns."
  },
  {
    id: "lec2_q65",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Pattern Categories",
    qNum: 65,
    question: "Singleton and Factory Method are examples of:",
    options: {
      A: "Creational Patterns",
      B: "Structural Patterns",
      C: "Behavioral Patterns",
      D: "Testing Patterns"
    },
    answer: "A",
    explanation: "Both Singleton and Factory Method handle the creation of objects, making them Creational patterns."
  },
  {
    id: "lec2_q66",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Factory Method Pattern",
    qNum: 66,
    question: "In Factory Method, subclasses can change:",
    options: {
      A: "The object creation process",
      B: "The programming language",
      C: "The operating system",
      D: "The database server"
    },
    answer: "A",
    explanation: "Subclasses can customize or alter the object creation logic by overriding the factory method."
  },
  {
    id: "lec2_q67",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Factory Method Pattern",
    qNum: 67,
    question: "The Factory Method avoids:",
    options: {
      A: "Direct object creation using new operator",
      B: "Using classes",
      C: "Using objects",
      D: "Using interfaces"
    },
    answer: "A",
    explanation: "It avoids direct coupling caused by widespread 'new' constructor calls."
  },
  {
    id: "lec2_q68",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Factory Method Pattern",
    qNum: 68,
    question: "Factory Method is useful when object creation depends on:",
    options: {
      A: "Certain conditions",
      B: "Random values only",
      C: "File size",
      D: "Hardware type"
    },
    answer: "A",
    explanation: "When instantiation decisions depend on runtime rules, configuration, or environment conditions."
  },
  {
    id: "lec2_q69",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Notification Factory Example",
    qNum: 69,
    question: "The Factory example creates different Notification objects such as:",
    options: {
      A: "EmailNotification, SmsNotification, WhatsAppNotification",
      B: "Student, Employee, Customer",
      C: "Logger, Cache, Database",
      D: "Adapter, Proxy, Composite"
    },
    answer: "A",
    explanation: "The lecture demonstrates EmailNotification, SmsNotification, and WhatsAppNotification deriving from INotification."
  },
  {
    id: "lec2_q70",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Factory Method Pattern",
    qNum: 70,
    question: "In Factory Pattern, the Factory class is responsible for:",
    options: {
      A: "Creating the appropriate object",
      B: "Storing database data",
      C: "Displaying user interface",
      D: "Managing memory"
    },
    answer: "A",
    explanation: "The factory encapsulates the rules and delivers the right concrete object instance."
  },
  {
    id: "lec2_q71",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Factory Method Benefits",
    qNum: 71,
    question: "The Factory Method pattern makes code more:",
    options: {
      A: "Scalable",
      B: "Dependent on direct creation",
      C: "Difficult to maintain",
      D: "Duplicated"
    },
    answer: "A",
    explanation: "New product types can be added without altering client business code, making the system highly scalable."
  },
  {
    id: "lec2_q72",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Definition of Design Pattern",
    qNum: 72,
    question: "A Design Pattern is considered a:",
    options: {
      A: "Blueprint for solving design problems",
      B: "Ready-to-run program",
      C: "Programming language",
      D: "Library"
    },
    answer: "A",
    explanation: "A design pattern is a reusable conceptual blueprint rather than an off-the-shelf compiled software application."
  },
  {
    id: "lec2_q73",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Definition of Design Pattern",
    qNum: 73,
    question: "Design Patterns help developers solve:",
    options: {
      A: "Recurring software design problems",
      B: "Hardware failures",
      C: "Network failures",
      D: "Database storage only"
    },
    answer: "A",
    explanation: "They provide battle-tested blueprints for solving recurrent object-oriented software engineering challenges."
  },
  {
    id: "lec2_q74",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Pattern Categories",
    qNum: 74,
    question: "The three Design Pattern categories are:",
    options: {
      A: "Creational, Structural, Behavioral",
      B: "Public, Private, Protected",
      C: "Class, Object, Method",
      D: "Code, Library, Framework"
    },
    answer: "A",
    explanation: "Creational, Structural, and Behavioral are the three categories established by the Gang of Four."
  },
  {
    id: "lec2_q75",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Pattern Categories",
    qNum: 75,
    question: "Structural Patterns focus on:",
    options: {
      A: "Object creation",
      B: "Object composition",
      C: "Object communication",
      D: "Error handling"
    },
    answer: "B",
    explanation: "Structural patterns focus on object and class composition to form larger and coherent software structures."
  },
  {
    id: "lec2_q76",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Pattern Categories",
    qNum: 76,
    question: "Behavioral Patterns focus on:",
    options: {
      A: "Object interaction and communication",
      B: "Object creation only",
      C: "Memory management",
      D: "Class visibility"
    },
    answer: "A",
    explanation: "Behavioral patterns focus on dynamic algorithms, assignment of responsibilities, and object communication."
  },
  {
    id: "lec2_q77",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Pattern Categories",
    qNum: 77,
    question: "Which of the following is NOT a Design Pattern category?",
    options: {
      A: "Creational",
      B: "Structural",
      C: "Behavioral",
      D: "Programming Language"
    },
    answer: "D",
    explanation: "Programming Language is not a design pattern category."
  },
  {
    id: "lec2_q78",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Singleton Pattern",
    qNum: 78,
    question: "The Singleton Pattern ensures:",
    options: {
      A: "Multiple instances of a class",
      B: "Only one instance of a class",
      C: "No access to objects",
      D: "Unlimited constructors"
    },
    answer: "B",
    explanation: "Singleton strictly guarantees a single instance throughout the application lifecycle."
  },
  {
    id: "lec2_q79",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Factory Method Pattern",
    qNum: 79,
    question: "The Factory Method pattern is especially useful for:",
    options: {
      A: "Complex object creation logic",
      B: "Removing all objects",
      C: "Avoiding software design",
      D: "Increasing code duplication"
    },
    answer: "A",
    explanation: "Factory Method encapsulates complex instantiation logic, keeping callers clean and decoupled."
  },
  {
    id: "lec2_q80",
    lectureId: 2,
    lectureTitle: "Lecture 2: Design Patterns & Creational (Singleton & Factory)",
    lectureTitleAr: "المحاضرة 2: أنماط التصميم والإنشائية (Singleton & Factory)",
    topic: "Design Pattern Benefits",
    qNum: 80,
    question: "Good Design Patterns help software become:",
    options: {
      A: "More flexible and maintainable",
      B: "More difficult to extend",
      C: "Less reusable",
      D: "More dependent"
    },
    answer: "A",
    explanation: "Applying good design patterns enhances flexibility, testability, reusability, and maintainability."
  }
];
