// Lecture 5+6: AP_Lec5+6 MCQ_Bank_5+6 (Dr. Baidaa Laalaa & Eng. Abdulmalik Hassan Alhaj)
// Total questions: 108
export const lec5Questions = [
  {
    id: "lec5_q1",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Software Architecture Basics",
    qNum: 1,
    question: "What is Software Architecture?",
    options: {
      A: "A programming language",
      B: "The high-level structure of a software system",
      C: "A database table",
      D: "A testing tool"
    },
    answer: "B",
    explanation: "Software Architecture defines the high-level organization, blueprint, and structural system design."
  },
  {
    id: "lec5_q2",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Software Architecture Basics",
    qNum: 2,
    question: "Software Architecture defines how components:",
    options: {
      A: "Are deleted",
      B: "Interact, communicate, and collaborate",
      C: "Are stored only in databases",
      D: "Are compiled"
    },
    answer: "B",
    explanation: "It specifies how system subsystems and components communicate, interact, and collaborate with one another."
  },
  {
    id: "lec5_q3",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Good Architecture Attributes",
    qNum: 3,
    question: "Which of the following is a characteristic of good architecture?",
    options: {
      A: "High coupling",
      B: "Difficult maintenance",
      C: "Testable",
      D: "Dependent on database"
    },
    answer: "C",
    explanation: "High testability, low coupling, high cohesion, and ease of maintenance characterize sound architecture."
  },
  {
    id: "lec5_q4",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Separation of Concerns",
    qNum: 4,
    question: "Separation of Concerns (SoC) means:",
    options: {
      A: "Putting everything in one class",
      B: "Dividing the system into independent parts with single responsibility",
      C: "Removing all layers",
      D: "Connecting all components directly"
    },
    answer: "B",
    explanation: "SoC advocates dividing a software system into distinct sections, each addressing a separate concern."
  },
  {
    id: "lec5_q5",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "N-Tier Architecture",
    qNum: 5,
    question: "N-Tier Architecture divides an application into:",
    options: {
      A: "Random files",
      B: "Multiple layers with specific responsibilities",
      C: "One large class",
      D: "Only database tables"
    },
    answer: "B",
    explanation: "N-Tier partitions systems into multiple stacked tiers (e.g. Presentation, Business Logic, Data Access)."
  },
  {
    id: "lec5_q6",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "N-Tier Architecture",
    qNum: 6,
    question: "Which layer is responsible for user interaction in N-Tier Architecture?",
    options: {
      A: "Database Layer",
      B: "Data Access Layer",
      C: "Presentation Layer",
      D: "Storage Layer"
    },
    answer: "C",
    explanation: "The Presentation Layer captures user input, displays data, and handles user interactions."
  },
  {
    id: "lec5_q7",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "N-Tier Architecture",
    qNum: 7,
    question: "A common advantage of N-Tier Architecture is:",
    options: {
      A: "High coupling",
      B: "Easy to understand",
      C: "No separation of layers",
      D: "Database dependency"
    },
    answer: "B",
    explanation: "Its traditional layered structure is intuitive, well understood, and widely adopted across legacy apps."
  },
  {
    id: "lec5_q8",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "N-Tier Architecture Problems",
    qNum: 8,
    question: "The main problem in traditional 3-Tier Architecture is:",
    options: {
      A: "Business logic depends directly on database",
      B: "Too many interfaces",
      C: "No database access",
      D: "No controllers"
    },
    answer: "A",
    explanation: "In traditional 3-tier architectures, business logic directly depends on the data access layer / database."
  },
  {
    id: "lec5_q9",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "N-Tier Architecture Problems",
    qNum: 9,
    question: "When Business Logic depends directly on SQL Server, the system becomes:",
    options: {
      A: "Flexible",
      B: "Highly coupled",
      C: "Independent",
      D: "Easy to replace"
    },
    answer: "B",
    explanation: "Hardwiring business rules to database technologies tightly couples core logic to persistence details."
  },
  {
    id: "lec5_q10",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "N-Tier Architecture Problems",
    qNum: 10,
    question: "Problems caused by direct database dependency include:",
    options: {
      A: "Easy testing",
      B: "Easy database replacement",
      C: "Hard testing and high coupling",
      D: "Better scalability"
    },
    answer: "C",
    explanation: "Unit testing becomes painful (requiring live databases) and swapping database engines is nearly impossible."
  },
  {
    id: "lec5_q11",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Clean Architecture Inversion",
    qNum: 11,
    question: "Clean Architecture replaces:",
    options: {
      A: "Service → SQL Repository",
      B: "Service → Interface ← SQL Repository",
      C: "Database → UI",
      D: "Controller → Database"
    },
    answer: "B",
    explanation: "Clean Architecture inverts dependencies: Service depends on an Interface, and SQL Repository implements that Interface."
  },
  {
    id: "lec5_q12",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Clean Architecture Principles",
    qNum: 12,
    question: "In Clean Architecture, the application depends on:",
    options: {
      A: "Concrete database classes",
      B: "Abstractions",
      C: "SQL queries",
      D: "External APIs directly"
    },
    answer: "B",
    explanation: "The application core depends entirely on abstractions (interfaces) rather than infrastructure implementations."
  },
  {
    id: "lec5_q13",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Clean Architecture History",
    qNum: 13,
    question: "Clean Architecture was proposed by:",
    options: {
      A: "Microsoft",
      B: "Robert C. Martin",
      C: "Andrew Lock",
      D: "Linus Torvalds"
    },
    answer: "B",
    explanation: "Robert C. Martin ('Uncle Bob') formulated and popularized Clean Architecture in 2012."
  },
  {
    id: "lec5_q14",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Clean Architecture Principles",
    qNum: 14,
    question: "The main goal of Clean Architecture is:",
    options: {
      A: "Make database the center of the system",
      B: "Separate business rules from implementation details",
      C: "Remove business logic",
      D: "Increase dependency"
    },
    answer: "B",
    explanation: "It isolates enterprise business rules from external frameworks, databases, and UI delivery mechanisms."
  },
  {
    id: "lec5_q15",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Clean Architecture Principles",
    qNum: 15,
    question: "In Clean Architecture, which can change without affecting business logic?",
    options: {
      A: "Database",
      B: "UI",
      C: "External APIs",
      D: "All of the above"
    },
    answer: "D",
    explanation: "UI, databases, web frameworks, and third-party APIs can be swapped without touching core business rules."
  },
  {
    id: "lec5_q16",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Clean Architecture Principles",
    qNum: 16,
    question: "The core principle of Clean Architecture is separation between:",
    options: {
      A: "Users and computers",
      B: "Business Logic and Technical Details",
      C: "Database and tables",
      D: "Classes and objects"
    },
    answer: "B",
    explanation: "Strict segregation between pure Business Logic (core domain) and Technical Details (frameworks, DB, UI)."
  },
  {
    id: "lec5_q17",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Clean Architecture Layers",
    qNum: 17,
    question: "How many main layers does Clean Architecture consist of?",
    options: {
      A: "Two",
      B: "Three",
      C: "Four",
      D: "Five"
    },
    answer: "C",
    explanation: "Clean Architecture is structured into four primary concentric layers."
  },
  {
    id: "lec5_q18",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Clean Architecture Layers",
    qNum: 18,
    question: "The four layers of Clean Architecture are:",
    options: {
      A: "UI, Database, Server, Client",
      B: "Presentation, Infrastructure, Application, Domain",
      C: "Controller, Model, View, Database",
      D: "API, SQL, Framework, User"
    },
    answer: "B",
    explanation: "The canonical four layers are Presentation, Infrastructure, Application, and Domain."
  },
  {
    id: "lec5_q19",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "The Dependency Rule",
    qNum: 19,
    question: "The Dependency Rule states that dependencies should point:",
    options: {
      A: "Outside only",
      B: "Only inward",
      C: "Randomly",
      D: "Toward databases"
    },
    answer: "B",
    explanation: "Source code dependencies must point only inward, toward higher-level policies (Domain)."
  },
  {
    id: "lec5_q20",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "The Dependency Rule",
    qNum: 20,
    question: "According to Clean Architecture, inner layers:",
    options: {
      A: "Know everything about outer layers",
      B: "Know nothing about outer layers",
      C: "Depend on databases",
      D: "Depend on frameworks"
    },
    answer: "B",
    explanation: "Inner circles know nothing about anything in an outer circle (no mentions of DB, UI, or frameworks)."
  },
  {
    id: "lec5_q21",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Domain Layer",
    qNum: 21,
    question: "Which layer is considered the heart of Clean Architecture?",
    options: {
      A: "Presentation Layer",
      B: "Infrastructure Layer",
      C: "Domain Layer",
      D: "Database Layer"
    },
    answer: "C",
    explanation: "The Domain Layer is the innermost core, representing the heart and soul of the business logic."
  },
  {
    id: "lec5_q22",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Domain Layer",
    qNum: 22,
    question: "The Domain Layer contains:",
    options: {
      A: "Controllers and HTTP requests",
      B: "Business model and business rules",
      C: "SQL queries",
      D: "External APIs"
    },
    answer: "B",
    explanation: "It houses domain entities, value objects, domain events, and core enterprise business rules."
  },
  {
    id: "lec5_q23",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Domain Layer",
    qNum: 23,
    question: "The Domain Layer represents:",
    options: {
      A: "Technology",
      B: "Database structure",
      C: "Business, not technology",
      D: "User interface"
    },
    answer: "C",
    explanation: "Domain represents pure business reality, completely independent of any software technology or framework."
  },
  {
    id: "lec5_q24",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Domain Layer",
    qNum: 24,
    question: "Which of the following belongs to Domain Layer?",
    options: {
      A: "SQL Server",
      B: "Entities",
      C: "Controllers",
      D: "HTTP Requests"
    },
    answer: "B",
    explanation: "Entities belong exclusively in the Domain Layer."
  },
  {
    id: "lec5_q25",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Domain Layer - Entities",
    qNum: 25,
    question: "Which component represents business objects and behavior?",
    options: {
      A: "Entities",
      B: "DTOs",
      C: "Controllers",
      D: "Repositories"
    },
    answer: "A",
    explanation: "Entities encapsulate domain concepts with enduring identity, business state, and behavior."
  },
  {
    id: "lec5_q26",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Domain Layer - Value Objects",
    qNum: 26,
    question: "A Value Object is identified by:",
    options: {
      A: "Database ID",
      B: "Its value",
      C: "Table name",
      D: "Foreign key"
    },
    answer: "B",
    explanation: "Value Objects have no distinct identity; two Value Objects are equal if all their attributes (values) are equal."
  },
  {
    id: "lec5_q27",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Domain Layer - Value Objects",
    qNum: 27,
    question: "Which of these is an example of Value Object?",
    options: {
      A: "Customer",
      B: "Order",
      C: "Address",
      D: "Account Entity"
    },
    answer: "C",
    explanation: "Address (Street, City, PostalCode) is a classic Value Object characterized solely by its attribute values."
  },
  {
    id: "lec5_q28",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Entity vs Value Object",
    qNum: 28,
    question: "The difference between Entity and Value Object is:",
    options: {
      A: "Entity has identity, Value Object has no identity",
      B: "Both always have IDs",
      C: "Value Object depends on database",
      D: "Entity has no behavior"
    },
    answer: "A",
    explanation: "Entities are tracked by a unique identity across state mutations; Value Objects are defined strictly by their properties."
  },
  {
    id: "lec5_q29",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Domain Layer - Entities",
    qNum: 29,
    question: "An Entity contains:",
    options: {
      A: "Only data",
      B: "Identity, data, and business behavior",
      C: "Only database columns",
      D: "Only methods"
    },
    answer: "B",
    explanation: "A proper DDD entity incorporates identity, internal data fields, and domain business behavior."
  },
  {
    id: "lec5_q30",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Domain Misconceptions",
    qNum: 30,
    question: "The statement \"Entity = Database Table\" is:",
    options: {
      A: "Always true",
      B: "Correct in Clean Architecture",
      C: "A common misconception",
      D: "Required rule"
    },
    answer: "C",
    explanation: "Confusing domain entities with database relational tables is a common architectural misconception."
  },
  {
    id: "lec5_q31",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Domain Layer - Entities",
    qNum: 31,
    question: "An Entity represents:",
    options: {
      A: "Storage",
      B: "A business concept",
      C: "SQL table only",
      D: "Database connection"
    },
    answer: "B",
    explanation: "An Entity represents an authentic, living business concept, not a database storage construct."
  },
  {
    id: "lec5_q32",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Rich vs Anemic Domain Model",
    qNum: 32,
    question: "A Rich Domain Model means:",
    options: {
      A: "Entity only stores data",
      B: "Business logic lives inside Entity",
      C: "Database controls rules",
      D: "Controller contains rules"
    },
    answer: "B",
    explanation: "In a Rich Domain Model, entities embody both their state and the business logic that operates on that state."
  },
  {
    id: "lec5_q33",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Rich vs Anemic Domain Model",
    qNum: 33,
    question: "An Anemic Domain Model means:",
    options: {
      A: "Entity contains behavior",
      B: "Business logic is placed elsewhere and entity only stores data",
      C: "Entity protects its state",
      D: "Entity contains rules"
    },
    answer: "B",
    explanation: "An Anemic Domain Model treats entities as dumb data bags (only getters/setters), moving logic to procedural services."
  },
  {
    id: "lec5_q34",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Domain Layer - Business Rules",
    qNum: 34,
    question: "Business Rules define:",
    options: {
      A: "Database connections",
      B: "What is allowed and not allowed",
      C: "HTTP responses",
      D: "User interfaces"
    },
    answer: "B",
    explanation: "Business rules specify invariant constraints, validations, and operations permitted by business policy."
  },
  {
    id: "lec5_q35",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Domain Layer - Business Rules",
    qNum: 35,
    question: "Where should the rule \"A completed order cannot be modified\" be implemented?",
    options: {
      A: "Controller",
      B: "Repository",
      C: "Database Trigger",
      D: "Order Entity"
    },
    answer: "D",
    explanation: "Core domain invariants belong directly within the Order Entity."
  },
  {
    id: "lec5_q36",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Domain Layer - Encapsulation",
    qNum: 36,
    question: "Encapsulation in Domain Layer protects data by:",
    options: {
      A: "Allowing direct modification",
      B: "Preventing direct modification and enforcing rules",
      C: "Removing methods",
      D: "Using SQL queries"
    },
    answer: "B",
    explanation: "By making setters private and exposing meaningful domain methods, entities protect internal state invariants."
  },
  {
    id: "lec5_q37",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Domain Layer",
    qNum: 37,
    question: "The Domain Layer should know:",
    options: {
      A: "Which database is used",
      B: "How HTTP requests arrive",
      C: "How the business works",
      D: "Which framework is used"
    },
    answer: "C",
    explanation: "The Domain Layer understands purely how business rules and operations function."
  },
  {
    id: "lec5_q38",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Domain Layer",
    qNum: 38,
    question: "The Domain Layer should NOT depend on:",
    options: {
      A: "Business Rules",
      B: "Entities",
      C: "Database and frameworks",
      D: "Value Objects"
    },
    answer: "C",
    explanation: "Domain has zero dependencies on databases, ORMs, HTTP libraries, or third-party frameworks."
  },
  {
    id: "lec5_q39",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Domain Layer",
    qNum: 39,
    question: "Which of the following does NOT belong in Domain Layer?",
    options: {
      A: "Entity",
      B: "Business Rule",
      C: "SQL Query",
      D: "Value Object"
    },
    answer: "C",
    explanation: "SQL queries belong in the Infrastructure persistence layer, never in the pure Domain Layer."
  },
  {
    id: "lec5_q40",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Domain Layer",
    qNum: 40,
    question: "The Domain Layer is:",
    options: {
      A: "The outermost layer",
      B: "The innermost layer",
      C: "A database layer",
      D: "A presentation layer"
    },
    answer: "B",
    explanation: "Domain occupies the innermost center of Clean Architecture."
  },
  {
    id: "lec5_q41",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Application Layer",
    qNum: 41,
    question: "The Application Layer contains:",
    options: {
      A: "Database tables",
      B: "Use cases and coordinates business operations",
      C: "HTTP requests only",
      D: "SQL queries"
    },
    answer: "B",
    explanation: "Application contains use case handlers and orchestrates the flow of business operations."
  },
  {
    id: "lec5_q42",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Application Layer",
    qNum: 42,
    question: "The Application Layer defines what:",
    options: {
      A: "The database stores",
      B: "The system does",
      C: "The UI looks like",
      D: "The framework provides"
    },
    answer: "B",
    explanation: "Application defines application-specific behaviors ('what the system does') through use cases."
  },
  {
    id: "lec5_q43",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Application Layer",
    qNum: 43,
    question: "The Application Layer does NOT contain:",
    options: {
      A: "Use cases",
      B: "Application workflows",
      C: "Core business rules",
      D: "Interfaces"
    },
    answer: "C",
    explanation: "Enterprise core business rules reside in Domain, while Application coordinates workflows and use cases."
  },
  {
    id: "lec5_q44",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Application Layer",
    qNum: 44,
    question: "The Application Layer should not depend on:",
    options: {
      A: "Domain Layer",
      B: "External technologies",
      C: "Business objects",
      D: "Interfaces"
    },
    answer: "B",
    explanation: "Application should not depend on UI, external databases, or third-party SDKs."
  },
  {
    id: "lec5_q45",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Application Layer",
    qNum: 45,
    question: "Which is a responsibility of Application Layer?",
    options: {
      A: "Execute business use cases",
      B: "Create database tables",
      C: "Handle HTTP directly",
      D: "Write SQL queries"
    },
    answer: "A",
    explanation: "Executing application use cases and orchestrating domain interactions is its core responsibility."
  },
  {
    id: "lec5_q46",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Application Layer - Use Cases",
    qNum: 46,
    question: "A Use Case represents:",
    options: {
      A: "A database connection",
      B: "An action the system can perform",
      C: "A user interface design",
      D: "A programming language"
    },
    answer: "B",
    explanation: "A use case models a discrete, actionable goal that a user or external actor can execute on the system."
  },
  {
    id: "lec5_q47",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Application Layer - Use Cases",
    qNum: 47,
    question: "Which of the following is an example of a Use Case?",
    options: {
      A: "SQL Server",
      B: "Withdraw Money",
      C: "Controller",
      D: "DbContext"
    },
    answer: "B",
    explanation: "'Withdraw Money' is a clear, actionable application use case."
  },
  {
    id: "lec5_q48",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Clean Architecture Layers",
    qNum: 48,
    question: "In Clean Architecture, Application Layer is located between:",
    options: {
      A: "Database and API",
      B: "Presentation and Domain",
      C: "Infrastructure and Database",
      D: "UI and SQL"
    },
    answer: "B",
    explanation: "Application mediates between outer layers (Presentation/Infrastructure) and inner core (Domain)."
  },
  {
    id: "lec5_q49",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Layer Dependencies",
    qNum: 49,
    question: "The relationship between Application and Domain is:",
    options: {
      A: "Domain depends on Application",
      B: "Application depends on Domain",
      C: "Both depend on Database",
      D: "No relationship"
    },
    answer: "B",
    explanation: "Application depends on Domain (inward dependency rule)."
  },
  {
    id: "lec5_q50",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Application Layer",
    qNum: 50,
    question: "Which layer controls the workflow of a Use Case?",
    options: {
      A: "Domain",
      B: "Application",
      C: "Infrastructure",
      D: "Database"
    },
    answer: "B",
    explanation: "The Application Layer coordinates the steps and workflow execution of use cases."
  },
  {
    id: "lec5_q51",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Application Layer Structure",
    qNum: 51,
    question: "The Application Layer structure contains:",
    options: {
      A: "Interfaces, DTOs, Services, Commands, Queries, Validators",
      B: "Controllers and SQL only",
      C: "Database tables only",
      D: "HTML pages"
    },
    answer: "A",
    explanation: "It commonly houses contracts (interfaces), DTOs, CQRS commands/queries, handlers, and validation rules."
  },
  {
    id: "lec5_q52",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Application Layer - DTOs",
    qNum: 52,
    question: "DTO stands for:",
    options: {
      A: "Data Transfer Object",
      B: "Database Transfer Operation",
      C: "Domain Type Object",
      D: "Data Table Operation"
    },
    answer: "A",
    explanation: "DTO stands for Data Transfer Object."
  },
  {
    id: "lec5_q53",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Application Layer - DTOs",
    qNum: 53,
    question: "The main purpose of DTOs is:",
    options: {
      A: "Store database tables",
      B: "Transfer data between layers",
      C: "Replace entities",
      D: "Handle HTTP requests"
    },
    answer: "B",
    explanation: "DTOs transport data between boundaries (e.g. between Application and Presentation) without behavior."
  },
  {
    id: "lec5_q54",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Application Layer - DTOs",
    qNum: 54,
    question: "One benefit of DTOs is:",
    options: {
      A: "Increasing coupling",
      B: "Exposing domain models",
      C: "Improving security",
      D: "Removing all layers"
    },
    answer: "C",
    explanation: "DTOs prevent over-posting vulnerabilities and safeguard internal domain data structures."
  },
  {
    id: "lec5_q55",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Application Layer - DTOs",
    qNum: 55,
    question: "DTOs help prevent:",
    options: {
      A: "Exposing domain models",
      B: "Creating interfaces",
      C: "Using services",
      D: "Application workflows"
    },
    answer: "A",
    explanation: "By mapping entities to DTOs, internal entity structures and business logic are not leaked directly to clients."
  },
  {
    id: "lec5_q56",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Application Layer - Repositories",
    qNum: 56,
    question: "The Application Layer defines repository:",
    options: {
      A: "Implementations",
      B: "Contracts (Interfaces)",
      C: "SQL commands",
      D: "Database tables"
    },
    answer: "B",
    explanation: "Application defines the repository interfaces (contracts), which Infrastructure then implements."
  },
  {
    id: "lec5_q57",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Application Layer - Repositories",
    qNum: 57,
    question: "The Application Layer knows:",
    options: {
      A: "SQL Server details",
      B: "Entity Framework Core details",
      C: "Repository Interface",
      D: "Database connection string"
    },
    answer: "C",
    explanation: "Application knows only the abstract Repository Interface, knowing nothing of EF Core or SQL Server."
  },
  {
    id: "lec5_q58",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Application Layer - Repositories",
    qNum: 58,
    question: "Which interface example is defined in Application Layer?",
    options: {
      A: "IAccountRepository",
      B: "SqlConnection",
      C: "DbContext",
      D: "AccountTable"
    },
    answer: "A",
    explanation: "IAccountRepository is the abstract repository contract residing in the Application layer."
  },
  {
    id: "lec5_q59",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Infrastructure Layer",
    qNum: 59,
    question: "Infrastructure provides:",
    options: {
      A: "Business rules",
      B: "Repository implementation",
      C: "Use cases",
      D: "Controllers"
    },
    answer: "B",
    explanation: "Infrastructure supplies the concrete database implementation of repository interfaces."
  },
  {
    id: "lec5_q60",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Dependency Inversion in Architecture",
    qNum: 60,
    question: "The Application Layer says: \"I need a repository that can save and retrieve accounts.\" This means it depends on:",
    options: {
      A: "SQL Server directly",
      B: "Abstraction",
      C: "Database table",
      D: "Framework"
    },
    answer: "B",
    explanation: "It expresses its dependency via an abstract contract (IAccountRepository), decoupling it from SQL."
  },
  {
    id: "lec5_q61",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Infrastructure Layer",
    qNum: 61,
    question: "The Infrastructure Layer contains:",
    options: {
      A: "Business rules only",
      B: "Implementation details that interact with external systems",
      C: "User interface pages",
      D: "Domain entities only"
    },
    answer: "B",
    explanation: "Infrastructure deals with low-level technical machinery: databases, file storage, email providers, payment SDKs."
  },
  {
    id: "lec5_q62",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Infrastructure Layer",
    qNum: 62,
    question: "The Infrastructure Layer provides technical capabilities such as:",
    options: {
      A: "Business constraints",
      B: "Database access and external APIs",
      C: "HTTP request validation only",
      D: "Use cases"
    },
    answer: "B",
    explanation: "Persistence querying, network requests, message queues, and external APIs are delivered by Infrastructure."
  },
  {
    id: "lec5_q63",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Infrastructure Layer",
    qNum: 63,
    question: "The Infrastructure Layer answers the question:",
    options: {
      A: "What does the business mean?",
      B: "How does the system communicate with external technologies?",
      C: "How does the user interact with the system?",
      D: "How are entities created?"
    },
    answer: "B",
    explanation: "Infrastructure answers: How do we technically persist data or talk to third-party technologies?"
  },
  {
    id: "lec5_q64",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Clean Architecture Layers",
    qNum: 64,
    question: "Infrastructure Layer is considered:",
    options: {
      A: "The innermost layer",
      B: "An outer layer",
      C: "The Domain Layer",
      D: "A replacement for Application Layer"
    },
    answer: "B",
    explanation: "Infrastructure is an outer ring, depending inward upon Application and Domain."
  },
  {
    id: "lec5_q65",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Layer Dependencies",
    qNum: 65,
    question: "According to Dependency Rule, Infrastructure depends on:",
    options: {
      A: "Application and Domain",
      B: "Database only",
      C: "Presentation only",
      D: "Nothing"
    },
    answer: "A",
    explanation: "Infrastructure references and implements interfaces declared in Application and uses Domain models."
  },
  {
    id: "lec5_q66",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Infrastructure Layer",
    qNum: 66,
    question: "Which of the following belongs to Infrastructure Layer?",
    options: {
      A: "Business Rules",
      B: "Entities",
      C: "Database Access",
      D: "Use Cases"
    },
    answer: "C",
    explanation: "Database access and persistence logic belong in Infrastructure."
  },
  {
    id: "lec5_q67",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Infrastructure Layer",
    qNum: 67,
    question: "Examples of databases handled by Infrastructure Layer include:",
    options: {
      A: "SQL Server, PostgreSQL, MongoDB",
      B: "HTML, CSS, JavaScript",
      C: "Controllers and APIs",
      D: "Entities and Value Objects"
    },
    answer: "A",
    explanation: "SQL Server, PostgreSQL, MongoDB, SQLite, and Redis are all handled within Infrastructure."
  },
  {
    id: "lec5_q68",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Infrastructure Layer",
    qNum: 68,
    question: "Which technologies can be used for data access in Infrastructure?",
    options: {
      A: "Entity Framework Core",
      B: "Dapper",
      C: "ADO.NET",
      D: "All of the above"
    },
    answer: "D",
    explanation: "EF Core, micro-ORMs like Dapper, and low-level ADO.NET are all viable persistence tools for Infrastructure."
  },
  {
    id: "lec5_q69",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Infrastructure Layer",
    qNum: 69,
    question: "Infrastructure provides the implementation of:",
    options: {
      A: "IAccountRepository",
      B: "Business Rules",
      C: "Use Cases",
      D: "DTOs"
    },
    answer: "A",
    explanation: "Infrastructure implements the IAccountRepository interface (e.g. AccountSqlRepository)."
  },
  {
    id: "lec5_q70",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Repository Placement",
    qNum: 70,
    question: "Why is Repository Implementation NOT in Application Layer?",
    options: {
      A: "Because Application should not know database details",
      B: "Because repositories are not needed",
      C: "Because Domain handles SQL",
      D: "Because Controllers handle databases"
    },
    answer: "A",
    explanation: "Keeping concrete SQL / EF code out of Application preserves cleanliness and independent testability."
  },
  {
    id: "lec5_q71",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Repository Dependency Flow",
    qNum: 71,
    question: "The correct dependency flow for Repository is:",
    options: {
      A: "Application → Database",
      B: "Application → Interface ← Infrastructure → Database",
      C: "Database → Application",
      D: "Domain → Infrastructure"
    },
    answer: "B",
    explanation: "Application depends on the Interface; Infrastructure implements that Interface and talks to the Database."
  },
  {
    id: "lec5_q72",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Repository Pattern",
    qNum: 72,
    question: "Repository Pattern separates:",
    options: {
      A: "UI and API",
      B: "Business logic and Data access logic",
      C: "Domain and Application",
      D: "Controllers and Views"
    },
    answer: "B",
    explanation: "Repository cleanly decouples core business logic from database storage queries."
  },
  {
    id: "lec5_q73",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Repository Pattern",
    qNum: 73,
    question: "The purpose of Repository Pattern is to:",
    options: {
      A: "Put SQL code inside business logic",
      B: "Separate data access from business logic",
      C: "Replace entities",
      D: "Remove interfaces"
    },
    answer: "B",
    explanation: "It encapsulates data access operations behind collection-like interfaces."
  },
  {
    id: "lec5_q74",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Infrastructure Services",
    qNum: 74,
    question: "External Services in Infrastructure include:",
    options: {
      A: "Sending emails",
      B: "Sending SMS",
      C: "Payment gateways",
      D: "All of the above"
    },
    answer: "D",
    explanation: "Email sending (SMTP/SendGrid), SMS notifications (Twilio), and payment gateways (Stripe) belong in Infrastructure."
  },
  {
    id: "lec5_q75",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Layer Boundaries",
    qNum: 75,
    question: "Which layer should NOT contain business rules?",
    options: {
      A: "Domain",
      B: "Infrastructure",
      C: "Entity",
      D: "Application Domain Logic"
    },
    answer: "B",
    explanation: "Infrastructure deals strictly with technical mechanics; it should never harbor business rules."
  },
  {
    id: "lec5_q76",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Layer Placement",
    qNum: 76,
    question: "if(balance < amount) belongs to which layer?",
    options: {
      A: "Infrastructure",
      B: "Domain",
      C: "Presentation",
      D: "Database"
    },
    answer: "B",
    explanation: "Validating sufficient account balance is an essential domain business invariant."
  },
  {
    id: "lec5_q77",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Layer Placement",
    qNum: 77,
    question: "WithdrawMoney() use case belongs to:",
    options: {
      A: "Infrastructure",
      B: "Application",
      C: "Presentation",
      D: "Database"
    },
    answer: "B",
    explanation: "Application use case workflows (orchestrating withdraw steps) reside in the Application layer."
  },
  {
    id: "lec5_q78",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Presentation Layer",
    qNum: 78,
    question: "Controllers belong to:",
    options: {
      A: "Domain Layer",
      B: "Infrastructure Layer",
      C: "Presentation Layer",
      D: "Application Layer"
    },
    answer: "C",
    explanation: "API and MVC Controllers are delivery endpoints belonging in Presentation."
  },
  {
    id: "lec5_q79",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Infrastructure Layer",
    qNum: 79,
    question: "Database configuration using Entity Framework Core belongs to:",
    options: {
      A: "Infrastructure Layer",
      B: "Domain Layer",
      C: "Presentation Layer",
      D: "Application Layer"
    },
    answer: "A",
    explanation: "DbContext, migration scripts, and EF Core table configurations reside in Infrastructure."
  },
  {
    id: "lec5_q80",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Presentation Layer",
    qNum: 80,
    question: "The Presentation Layer is:",
    options: {
      A: "The heart of the system",
      B: "The entry point of the application",
      C: "The database layer",
      D: "The business rules layer"
    },
    answer: "B",
    explanation: "Presentation serves as the initial entry point where user requests enter the system."
  },
  {
    id: "lec5_q81",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Presentation Layer",
    qNum: 81,
    question: "The Presentation Layer is responsible for:",
    options: {
      A: "Receiving requests and returning responses",
      B: "Writing database queries",
      C: "Implementing business rules",
      D: "Creating domain entities only"
    },
    answer: "A",
    explanation: "It accepts inbound client requests, triggers use cases, and shapes outbound HTTP responses."
  },
  {
    id: "lec5_q82",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Presentation Layer",
    qNum: 82,
    question: "The Presentation Layer answers the question:",
    options: {
      A: "How does the database store data?",
      B: "How does the user interact with the system?",
      C: "How are repositories implemented?",
      D: "How are entities created?"
    },
    answer: "B",
    explanation: "It addresses user interaction, API contracts, view rendering, and UX."
  },
  {
    id: "lec5_q83",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Presentation Layer",
    qNum: 83,
    question: "The Presentation Layer is considered:",
    options: {
      A: "The innermost layer",
      B: "The outermost layer",
      C: "The Domain Layer",
      D: "The Infrastructure Layer"
    },
    answer: "B",
    explanation: "Presentation is the outermost delivery mechanism facing end users."
  },
  {
    id: "lec5_q84",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Presentation Layer",
    qNum: 84,
    question: "The Presentation Layer communicates directly with:",
    options: {
      A: "Database",
      B: "Infrastructure",
      C: "Application Layer",
      D: "SQL Server"
    },
    answer: "C",
    explanation: "Presentation communicates directly with the Application layer to execute use cases."
  },
  {
    id: "lec5_q85",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Presentation Layer",
    qNum: 85,
    question: "The Presentation Layer should NOT communicate directly with:",
    options: {
      A: "Application Layer",
      B: "Controllers",
      C: "Domain or Database",
      D: "HTTP Requests"
    },
    answer: "C",
    explanation: "Presentation must not bypass Application to communicate directly with Domain or Database."
  },
  {
    id: "lec5_q86",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Controllers",
    qNum: 86,
    question: "A Controller should:",
    options: {
      A: "Contain business rules",
      B: "Receive requests, call Application Service, return response",
      C: "Access database directly",
      D: "Write SQL queries"
    },
    answer: "B",
    explanation: "Controllers act as thin coordinators: receive HTTP input, dispatch to application service, return HTTP response."
  },
  {
    id: "lec5_q87",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Controllers",
    qNum: 87,
    question: "Where should business logic NOT exist?",
    options: {
      A: "Domain Layer",
      B: "Entity",
      C: "Controller",
      D: "Business Rules"
    },
    answer: "C",
    explanation: "Controllers should never contain core business logic (a classic anti-pattern)."
  },
  {
    id: "lec5_q88",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Presentation Layer",
    qNum: 88,
    question: "The Presentation Layer is responsible for managing:",
    options: {
      A: "HTTP status codes",
      B: "Database tables",
      C: "Business constraints",
      D: "Repository implementation"
    },
    answer: "A",
    explanation: "Translating application results into HTTP status codes (200 OK, 400 Bad Request, 404 Not Found) is Presentation's job."
  },
  {
    id: "lec5_q89",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Presentation Layer",
    qNum: 89,
    question: "Which component handles HTTP requests and responses?",
    options: {
      A: "Entity",
      B: "Controller",
      C: "Repository",
      D: "Value Object"
    },
    answer: "B",
    explanation: "The Controller handles HTTP verbs, route bindings, and response payloads."
  },
  {
    id: "lec5_q90",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "ASP.NET Core Program.cs",
    qNum: 90,
    question: "Program.cs is responsible for:",
    options: {
      A: "Storing entities",
      B: "Configuring services and middleware",
      C: "Implementing business rules",
      D: "Managing database tables only"
    },
    answer: "B",
    explanation: "Program.cs configures the application host, registers dependencies in DI container, and builds the HTTP middleware pipeline."
  },
  {
    id: "lec5_q91",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "ASP.NET Core Configuration",
    qNum: 91,
    question: "appsettings.json stores:",
    options: {
      A: "Business rules",
      B: "Application configuration",
      C: "Domain entities",
      D: "Use cases"
    },
    answer: "B",
    explanation: "appsettings.json holds configuration parameters, settings, and environment variables."
  },
  {
    id: "lec5_q92",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "ASP.NET Core Configuration",
    qNum: 92,
    question: "Which of these can be stored in appsettings.json?",
    options: {
      A: "Database connection strings",
      B: "Logging configuration",
      C: "API keys",
      D: "All of the above"
    },
    answer: "D",
    explanation: "Connection strings, logging levels, and service API credentials are stored in appsettings.json."
  },
  {
    id: "lec5_q93",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Dependency Injection",
    qNum: 93,
    question: "Dependency Injection means:",
    options: {
      A: "Creating objects manually everywhere",
      B: "Providing required dependencies from outside",
      C: "Removing interfaces",
      D: "Connecting controllers directly to databases"
    },
    answer: "B",
    explanation: "DI supplies dependent objects from an external IoC container rather than having callers instantiate them internally."
  },
  {
    id: "lec5_q94",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Clean Architecture Controllers",
    qNum: 94,
    question: "In Clean Architecture, the Controller depends on:",
    options: {
      A: "Concrete implementation",
      B: "Abstraction (Interface)",
      C: "Database",
      D: "SQL Server"
    },
    answer: "B",
    explanation: "Controllers inject and interact with abstraction interfaces (e.g. IAccountService), not concrete classes."
  },
  {
    id: "lec5_q95",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "ASP.NET Core DI",
    qNum: 95,
    question: "ASP.NET Core provides a built-in:",
    options: {
      A: "Database engine",
      B: "Dependency Injection container",
      C: "SQL compiler",
      D: "Domain layer"
    },
    answer: "B",
    explanation: "ASP.NET Core comes out-of-the-box with a lightweight, built-in IoC Dependency Injection container (IServiceCollection)."
  },
  {
    id: "lec5_q96",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "ASP.NET Core Registration",
    qNum: 96,
    question: "Services are registered in:",
    options: {
      A: "Domain.cs",
      B: "Program.cs",
      C: "Entity.cs",
      D: "Controller.cs"
    },
    answer: "B",
    explanation: "Services are registered into the DI container inside Program.cs (composition root)."
  },
  {
    id: "lec5_q97",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Service Lifetimes",
    qNum: 97,
    question: "Which registration method creates one object per HTTP request?",
    options: {
      A: "AddTransient()",
      B: "AddScoped()",
      C: "AddSingleton()",
      D: "AddObject()"
    },
    answer: "B",
    explanation: "AddScoped() creates a single instance per client HTTP request scope, reused across all injections in that request."
  },
  {
    id: "lec5_q98",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Service Lifetimes",
    qNum: 98,
    question: "Transient lifetime means:",
    options: {
      A: "One object for the whole application",
      B: "New object every request",
      C: "One object per HTTP request",
      D: "No object creation"
    },
    answer: "B",
    explanation: "Transient services create a brand-new instance every single time they are requested/injected."
  },
  {
    id: "lec5_q99",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Service Lifetimes",
    qNum: 99,
    question: "Singleton lifetime means:",
    options: {
      A: "New object every request",
      B: "One object for the whole application",
      C: "One object per controller",
      D: "One object per database"
    },
    answer: "B",
    explanation: "Singleton creates a single instance the first time it is requested and shares it across the entire application lifecycle."
  },
  {
    id: "lec5_q100",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Service Lifetimes",
    qNum: 100,
    question: "Which method registers a Singleton service?",
    options: {
      A: "AddSingleton()",
      B: "AddScoped()",
      C: "AddTransient()",
      D: "AddService()"
    },
    answer: "A",
    explanation: "builder.Services.AddSingleton<IService, Service>();"
  },
  {
    id: "lec5_q101",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Service Lifetimes",
    qNum: 101,
    question: "Which method registers a Scoped service?",
    options: {
      A: "AddSingleton()",
      B: "AddScoped()",
      C: "AddTransient()",
      D: "AddObject()"
    },
    answer: "B",
    explanation: "builder.Services.AddScoped<IService, Service>();"
  },
  {
    id: "lec5_q102",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Service Lifetimes",
    qNum: 102,
    question: "The most common service lifetime in ASP.NET Core is:",
    options: {
      A: "Transient",
      B: "Scoped",
      C: "Singleton",
      D: "None"
    },
    answer: "B",
    explanation: "Scoped is the workhorse lifetime for web apps (e.g. EF Core DbContext, repositories, use cases tied to HTTP requests)."
  },
  {
    id: "lec5_q103",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Clean Architecture Request Flow",
    qNum: 103,
    question: "Complete Clean Architecture request flow is:",
    options: {
      A: "Database → Controller → Domain",
      B: "Controller → Application Service → Domain Entity → Repository → SQL Server",
      C: "SQL Server → UI → Domain",
      D: "Infrastructure → Controller → Database"
    },
    answer: "B",
    explanation: "Inbound: Controller receives request → delegates to Application Service → interacts with Domain Entity → saves via Repository → writes to SQL Server."
  },
  {
    id: "lec5_q104",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "When to Use Clean Architecture",
    qNum: 104,
    question: "Clean Architecture is recommended for:",
    options: {
      A: "Banking systems",
      B: "Enterprise applications",
      C: "Large REST APIs",
      D: "All of the above"
    },
    answer: "D",
    explanation: "Complex domain logic, high compliance, banking, enterprise scale, and long lifecycle applications thrive on Clean Architecture."
  },
  {
    id: "lec5_q105",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "When NOT to Use Clean Architecture",
    qNum: 105,
    question: "Clean Architecture is NOT recommended for:",
    options: {
      A: "Banking systems",
      B: "Complex business systems",
      C: "Small CRUD applications",
      D: "Long-term projects"
    },
    answer: "C",
    explanation: "For tiny CRUD utilities or simple micro-sites, Clean Architecture brings unnecessary boilerplate and overhead."
  },
  {
    id: "lec5_q106",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Transitive Dependency",
    qNum: 106,
    question: "What is a transitive dependency?",
    options: {
      A: "A change in one component can affect dependent components",
      B: "A class with no dependencies",
      C: "A database table",
      D: "A user interface"
    },
    answer: "A",
    explanation: "A transitive dependency occurs when A depends on B and B depends on C; changes ripple transitively through intermediate layers."
  },
  {
    id: "lec5_q107",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Architecture Comparisons",
    qNum: 107,
    question: "In database-centric architecture, what is treated as the center of the system?",
    options: {
      A: "The database",
      B: "The user interface",
      C: "The controller",
      D: "The API gateway"
    },
    answer: "A",
    explanation: "In traditional database-centric models, the database schema is built first and treated as the center around which code revolves."
  },
  {
    id: "lec5_q108",
    lectureId: 5,
    lectureTitle: "Lecture 5+6: Clean Architecture & ASP.NET Core",
    lectureTitleAr: "المحاضرة 5+6: معمارية البرمجيات والنظيفة Clean Architecture وبيئة ASP.NET Core",
    topic: "Clean Architecture Heart",
    qNum: 108,
    question: "In Clean Architecture, what is the heart of the system?",
    options: {
      A: "The business domain",
      B: "The database",
      C: "The framework",
      D: "The presentation layer"
    },
    answer: "A",
    explanation: "In Clean Architecture, the business domain and its rules are the central core around which everything else revolves."
  }
];
