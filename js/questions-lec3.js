// Lecture 3: AP_Lec3 MCQ_Bank_3 (Dr. Baidaa Laalaa & Eng. Abdulmalik Hassan Alhaj)
// Total questions: 100
export const lec3Questions = [
  {
    id: "lec3_q1",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Structural Patterns Introduction",
    qNum: 1,
    question: "Structural Design Patterns describe how classes and objects are:",
    options: {
      A: "Created only",
      B: "Combined to create larger and maintainable systems",
      C: "Deleted from systems",
      D: "Converted into databases"
    },
    answer: "B",
    explanation: "Structural patterns explain how classes and objects are composed and assembled to form larger, maintainable structures."
  },
  {
    id: "lec3_q2",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Structural Patterns Introduction",
    qNum: 2,
    question: "Structural Design Patterns help developers to:",
    options: {
      A: "Increase dependencies",
      B: "Reuse existing code",
      C: "Remove flexibility",
      D: "Avoid object collaboration"
    },
    answer: "B",
    explanation: "Structural patterns facilitate robust code reuse by organizing relationships cleanly."
  },
  {
    id: "lec3_q3",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Structural Patterns Introduction",
    qNum: 3,
    question: "One benefit of Structural Design Patterns is:",
    options: {
      A: "Reduce dependencies",
      B: "Increase complexity",
      C: "Prevent code reuse",
      D: "Remove interfaces"
    },
    answer: "A",
    explanation: "They reduce tight coupling and harmful dependencies across disparate subsystems."
  },
  {
    id: "lec3_q4",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Structural Patterns Introduction",
    qNum: 4,
    question: "Structural Patterns focus on:",
    options: {
      A: "Relationships, Composition, and Object Collaboration",
      B: "Only programming languages",
      C: "Hardware design",
      D: "Database creation"
    },
    answer: "A",
    explanation: "Their primary focus is object composition, component relationships, and cohesive collaboration."
  },
  {
    id: "lec3_q5",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Structural Patterns Introduction",
    qNum: 5,
    question: "Structural Patterns often use:",
    options: {
      A: "Interfaces, Inheritance, and Composition",
      B: "Only variables",
      C: "Only databases",
      D: "Operating systems"
    },
    answer: "A",
    explanation: "They leverage interfaces, class inheritance, and object composition to forge adaptable architectures."
  },
  {
    id: "lec3_q6",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Composition vs Inheritance",
    qNum: 6,
    question: "Most Structural Patterns prefer:",
    options: {
      A: "Inheritance over Composition",
      B: "Composition over Inheritance",
      C: "No relationships",
      D: "Duplicate code"
    },
    answer: "B",
    explanation: "A foundational Gang of Four principle: 'Favor object composition over class inheritance.'"
  },
  {
    id: "lec3_q7",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "UML Relationships",
    qNum: 7,
    question: "Inheritance represents which relationship?",
    options: {
      A: "HAS-A",
      B: "IS-A",
      C: "USES-A",
      D: "PART-OF only"
    },
    answer: "B",
    explanation: "Inheritance models an 'IS-A' relationship (e.g., Dog is an Animal)."
  },
  {
    id: "lec3_q8",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "UML Relationships",
    qNum: 8,
    question: "Composition represents which relationship?",
    options: {
      A: "IS-A",
      B: "HAS-A",
      C: "USES-A",
      D: "IMPLEMENTS-A"
    },
    answer: "B",
    explanation: "Composition models a strong 'HAS-A' relationship where the child cannot exist independently of the whole."
  },
  {
    id: "lec3_q9",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "UML Relationships",
    qNum: 9,
    question: "The example of Inheritance relationship is:",
    options: {
      A: "Car has an Engine",
      B: "Dog is an Animal",
      C: "Laptop uses charger",
      D: "Student uses Course"
    },
    answer: "B",
    explanation: "'Dog is an Animal' exemplifies the IS-A inheritance relationship."
  },
  {
    id: "lec3_q10",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "UML Relationships",
    qNum: 10,
    question: "The example of Composition relationship is:",
    options: {
      A: "Dog is an Animal",
      B: "Car has an Engine",
      C: "Bird is an Animal",
      D: "Class implements Interface"
    },
    answer: "B",
    explanation: "'Car has an Engine' exemplifies the HAS-A composition relationship."
  },
  {
    id: "lec3_q11",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Structural Patterns Introduction",
    qNum: 11,
    question: "Structural Patterns solve problems related to:",
    options: {
      A: "How existing components work together",
      B: "Creating hardware devices",
      C: "Writing operating systems",
      D: "Database indexing"
    },
    answer: "A",
    explanation: "They solve integration and collaboration challenges among diverse existing components."
  },
  {
    id: "lec3_q12",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Adapter Pattern",
    qNum: 12,
    question: "Adapter Pattern is used to:",
    options: {
      A: "Add new features dynamically",
      B: "Make incompatible interfaces work together",
      C: "Control access to objects",
      D: "Simplify a subsystem"
    },
    answer: "B",
    explanation: "Adapter acts as a bridge between incompatible interfaces, allowing them to collaborate seamlessly."
  },
  {
    id: "lec3_q13",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Facade Pattern",
    qNum: 13,
    question: "Facade Pattern provides:",
    options: {
      A: "One simple interface",
      B: "Multiple complicated interfaces",
      C: "Object security",
      D: "Dynamic features"
    },
    answer: "A",
    explanation: "Facade provides a simplified, unified high-level interface to a complex subsystem."
  },
  {
    id: "lec3_q14",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Proxy Pattern",
    qNum: 14,
    question: "Proxy Pattern is used to:",
    options: {
      A: "Add features dynamically",
      B: "Control access to another object",
      C: "Convert interfaces",
      D: "Combine classes"
    },
    answer: "B",
    explanation: "Proxy provides a placeholder/surrogate to control and manage access to the underlying real object."
  },
  {
    id: "lec3_q15",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Decorator Pattern",
    qNum: 15,
    question: "Decorator Pattern is used to:",
    options: {
      A: "Add new features dynamically",
      B: "Control access",
      C: "Replace interfaces",
      D: "Create only one object"
    },
    answer: "A",
    explanation: "Decorator attaches additional responsibilities and behavior to an object dynamically at runtime."
  },
  {
    id: "lec3_q16",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Real-Life Analogies",
    qNum: 16,
    question: "Adapter real-life analogy is:",
    options: {
      A: "TV Remote Control",
      B: "ATM Card",
      C: "Power Adapter",
      D: "Coffee Toppings"
    },
    answer: "C",
    explanation: "A power adapter converts a foreign wall socket plug to match your device plug."
  },
  {
    id: "lec3_q17",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Real-Life Analogies",
    qNum: 17,
    question: "Facade real-life analogy is:",
    options: {
      A: "Power Adapter",
      B: "TV Remote Control",
      C: "ATM Card",
      D: "Coffee Toppings"
    },
    answer: "B",
    explanation: "A TV remote control provides simple buttons that hide the complicated electronics inside."
  },
  {
    id: "lec3_q18",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Real-Life Analogies",
    qNum: 18,
    question: "Proxy real-life analogy is:",
    options: {
      A: "ATM Card",
      B: "Coffee Toppings",
      C: "Power Adapter",
      D: "TV Remote Control"
    },
    answer: "A",
    explanation: "An ATM card acts as a proxy for your real bank account, controlling access and verifying your PIN."
  },
  {
    id: "lec3_q19",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Real-Life Analogies",
    qNum: 19,
    question: "Decorator real-life analogy is:",
    options: {
      A: "Power Adapter",
      B: "TV Remote Control",
      C: "ATM Card",
      D: "Coffee Toppings"
    },
    answer: "D",
    explanation: "Adding milk, caramel, or whipped cream toppings to base coffee dynamically decorates the beverage."
  },
  {
    id: "lec3_q20",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Structural Patterns Introduction",
    qNum: 20,
    question: "Choosing the right Structural Pattern depends on:",
    options: {
      A: "Personal preference only",
      B: "The problem being solved",
      C: "The programming language",
      D: "The number of classes"
    },
    answer: "B",
    explanation: "Pattern selection must always align directly with the specific architectural problem being addressed."
  },
  {
    id: "lec3_q21",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Structural Patterns Introduction",
    qNum: 21,
    question: "Structural Patterns help organize:",
    options: {
      A: "Connections between existing components",
      B: "Programming syntax",
      C: "Hardware parts only",
      D: "Database records"
    },
    answer: "A",
    explanation: "They organize and streamline the interactions and connections among disparate software components."
  },
  {
    id: "lec3_q22",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Structural Patterns Introduction",
    qNum: 22,
    question: "Instead of changing existing classes, Structural Patterns:",
    options: {
      A: "Delete them",
      B: "Reorganize relationships between them",
      C: "Replace all objects",
      D: "Remove interfaces"
    },
    answer: "B",
    explanation: "They preserve existing class definitions and reorganize how they relate and collaborate."
  },
  {
    id: "lec3_q23",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "UML Relationships",
    qNum: 23,
    question: "Which UML relationship means \"One object uses another\"?",
    options: {
      A: "Association",
      B: "Inheritance",
      C: "Composition",
      D: "Realization"
    },
    answer: "A",
    explanation: "Association indicates a general structural link where one class knows about and uses another."
  },
  {
    id: "lec3_q24",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "UML Relationships",
    qNum: 24,
    question: "Dependency relationship in UML means:",
    options: {
      A: "Strong ownership",
      B: "Temporary usage",
      C: "IS-A relationship",
      D: "HAS-A relationship"
    },
    answer: "B",
    explanation: "Dependency (represented by a dashed arrow) indicates temporary usage, such as passing a parameter into a method."
  },
  {
    id: "lec3_q25",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "UML Relationships",
    qNum: 25,
    question: "Realization relationship means:",
    options: {
      A: "Implements an interface",
      B: "Owns another object strongly",
      C: "Uses another object temporarily",
      D: "Creates a new class"
    },
    answer: "A",
    explanation: "In UML, Realization depicts a class implementing the contract defined by an interface."
  },
  {
    id: "lec3_q26",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "UML Relationships",
    qNum: 26,
    question: "Aggregation represents:",
    options: {
      A: "HAS-A weak ownership",
      B: "HAS-A strong ownership",
      C: "IS-A relationship",
      D: "Temporary usage"
    },
    answer: "A",
    explanation: "Aggregation is a weak 'HAS-A' relationship where the contained object can survive independently outside the container."
  },
  {
    id: "lec3_q27",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "UML Relationships",
    qNum: 27,
    question: "Composition represents:",
    options: {
      A: "HAS-A strong ownership",
      B: "Temporary usage",
      C: "Interface implementation",
      D: "Simple usage"
    },
    answer: "A",
    explanation: "Composition represents a strong 'HAS-A' relationship where the part's lifecycle is bound strictly to the whole."
  },
  {
    id: "lec3_q28",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Adapter Pattern",
    qNum: 28,
    question: "Adapter Pattern acts as a:",
    options: {
      A: "Security layer",
      B: "Bridge between two classes",
      C: "Object creator",
      D: "Feature remover"
    },
    answer: "B",
    explanation: "Adapter functions as a bridge that bridges the gap between two incompatible interfaces."
  },
  {
    id: "lec3_q29",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Adapter Pattern",
    qNum: 29,
    question: "Adapter converts one interface into:",
    options: {
      A: "Another interface expected by the client",
      B: "A database",
      C: "A new programming language",
      D: "A hardware device"
    },
    answer: "A",
    explanation: "Adapter converts the interface of a class into another interface that clients expect."
  },
  {
    id: "lec3_q30",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Adapter Pattern",
    qNum: 30,
    question: "Simple definition of Adapter is:",
    options: {
      A: "Controller",
      B: "Translator",
      C: "Creator",
      D: "Manager"
    },
    answer: "B",
    explanation: "Conceptually, an Adapter is a 'translator' between two incompatible APIs."
  },
  {
    id: "lec3_q31",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Adapter Pattern",
    qNum: 31,
    question: "The Adapter changes the:",
    options: {
      A: "Devices themselves",
      B: "Connection, not the devices",
      C: "Source code of both classes",
      D: "Database structure"
    },
    answer: "B",
    explanation: "The adapter alters the connection/interaction mechanism without tampering with either underlying component."
  },
  {
    id: "lec3_q32",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "EmailAdapter Example",
    qNum: 32,
    question: "In the Legacy Email Service example, the existing method is:",
    options: {
      A: "Send()",
      B: "SendEmail()",
      C: "Message()",
      D: "Email()"
    },
    answer: "B",
    explanation: "The legacy service already provides SendEmail(), whereas new clients expect Send()."
  },
  {
    id: "lec3_q33",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "EmailAdapter Example",
    qNum: 33,
    question: "The new application expects the method:",
    options: {
      A: "Send()",
      B: "SendEmail()",
      C: "Process()",
      D: "Execute()"
    },
    answer: "A",
    explanation: "The client interface defines Send()."
  },
  {
    id: "lec3_q34",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "EmailAdapter Example",
    qNum: 34,
    question: "EmailAdapter solves the problem by:",
    options: {
      A: "Deleting LegacyEmailService",
      B: "Translating Send() into SendEmail()",
      C: "Modifying the client",
      D: "Creating a new interface"
    },
    answer: "B",
    explanation: "EmailAdapter maps the expected Send() method call to the legacy SendEmail() method."
  },
  {
    id: "lec3_q35",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "EmailAdapter Example",
    qNum: 35,
    question: "EmailAdapter implements:",
    options: {
      A: "LegacyEmailService",
      B: "IMessageService",
      C: "DatabaseService",
      D: "PaymentService"
    },
    answer: "B",
    explanation: "EmailAdapter implements the target interface expected by the client: IMessageService."
  },
  {
    id: "lec3_q36",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "EmailAdapter Example",
    qNum: 36,
    question: "EmailAdapter holds a reference to:",
    options: {
      A: "Client",
      B: "LegacyEmailService",
      C: "IMessageService",
      D: "Database"
    },
    answer: "B",
    explanation: "EmailAdapter contains an instance (reference) to LegacyEmailService to delegate actual execution."
  },
  {
    id: "lec3_q37",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Adapter Pattern",
    qNum: 37,
    question: "The Adapter Pattern allows systems to work together without:",
    options: {
      A: "Creating objects",
      B: "Modifying existing code",
      C: "Using interfaces",
      D: "Writing methods"
    },
    answer: "B",
    explanation: "Adapter adheres to OCP: classes collaborate without having to rewrite or modify their source code."
  },
  {
    id: "lec3_q38",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Payment Adapter Example",
    qNum: 38,
    question: "In the Payment System example, the application expects:",
    options: {
      A: "IPaymentProcessor",
      B: "StripeGateway only",
      C: "PayPalGateway only",
      D: "Database Interface"
    },
    answer: "A",
    explanation: "The application relies on the common abstraction IPaymentProcessor."
  },
  {
    id: "lec3_q39",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Payment Adapter Example",
    qNum: 39,
    question: "Stripe does not implement:",
    options: {
      A: "IPaymentProcessor",
      B: "StripeGateway",
      C: "PayPalGateway",
      D: "PaymentAdapter"
    },
    answer: "A",
    explanation: "Third-party vendor libraries like Stripe do not implement your internal IPaymentProcessor interface."
  },
  {
    id: "lec3_q40",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Payment Adapter Example",
    qNum: 40,
    question: "The better solution instead of modifying the client is to create:",
    options: {
      A: "Payment Adapters",
      B: "More clients",
      C: "New databases",
      D: "New operating systems"
    },
    answer: "A",
    explanation: "Creating Payment Adapters wraps each third-party SDK and translates the calls cleanly."
  },
  {
    id: "lec3_q41",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Payment Adapter Example",
    qNum: 41,
    question: "In the Payment Adapter example, the client communicates with:",
    options: {
      A: "StripeGateway directly",
      B: "PayPalGateway directly",
      C: "PaymentAdapter through the common interface",
      D: "Database directly"
    },
    answer: "C",
    explanation: "The client interacts only through the common IPaymentProcessor interface exposed by PaymentAdapter."
  },
  {
    id: "lec3_q42",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Payment Adapter Example",
    qNum: 42,
    question: "StripeAdapter converts:",
    options: {
      A: "Pay() into SendPayment()",
      B: "Pay() into ProcessStripePayment()",
      C: "ProcessStripePayment() into PayPal",
      D: "Database calls into methods"
    },
    answer: "B",
    explanation: "StripeAdapter converts client Pay() calls into Stripe's ProcessStripePayment() method."
  },
  {
    id: "lec3_q43",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Payment Adapter Example",
    qNum: 43,
    question: "PayPalAdapter converts:",
    options: {
      A: "Pay() into SendPayment()",
      B: "SendPayment() into ProcessStripePayment()",
      C: "Pay() into ProcessPayment()",
      D: "Pay() into ValidateOrder()"
    },
    answer: "A",
    explanation: "PayPalAdapter converts client Pay() calls into PayPal's SendPayment() method."
  },
  {
    id: "lec3_q44",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Payment Adapter Example",
    qNum: 44,
    question: "The client never communicates directly with:",
    options: {
      A: "PaymentAdapter",
      B: "IPaymentProcessor",
      C: "Stripe or PayPal",
      D: "Application"
    },
    answer: "C",
    explanation: "The client remains completely insulated from vendor-specific classes like Stripe or PayPal."
  },
  {
    id: "lec3_q45",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "When to Use Adapter",
    qNum: 45,
    question: "Use Adapter Pattern when:",
    options: {
      A: "Two classes have incompatible interfaces",
      B: "Interfaces are already compatible",
      C: "No classes exist",
      D: "The system is simple"
    },
    answer: "A",
    explanation: "Use Adapter when you want existing classes to work together despite mismatched signatures."
  },
  {
    id: "lec3_q46",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "When to Use Adapter",
    qNum: 46,
    question: "Adapter Pattern can be used for integrating:",
    options: {
      A: "Third-party libraries or APIs",
      B: "Only local variables",
      C: "Operating systems",
      D: "Hardware components only"
    },
    answer: "A",
    explanation: "It is standard practice for cleanly wrapping external 3rd-party libraries and SDKs."
  },
  {
    id: "lec3_q47",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "When to Use Adapter",
    qNum: 47,
    question: "Adapter Pattern helps when working with legacy systems by:",
    options: {
      A: "Modifying existing source code",
      B: "Avoiding modification of existing code",
      C: "Removing old systems",
      D: "Creating duplicate systems"
    },
    answer: "B",
    explanation: "It connects legacy code to modern subsystems without modifying the fragile legacy codebase."
  },
  {
    id: "lec3_q48",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "When NOT to Use Adapter",
    qNum: 48,
    question: "Do not use Adapter Pattern when:",
    options: {
      A: "Interfaces are incompatible",
      B: "Existing class can be easily modified",
      C: "Legacy systems exist",
      D: "Different implementations exist"
    },
    answer: "B",
    explanation: "If you own the class and can modify it easily without side effects, an extra adapter layer is redundant."
  },
  {
    id: "lec3_q49",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "When NOT to Use Adapter",
    qNum: 49,
    question: "Adding an Adapter when unnecessary may create:",
    options: {
      A: "Simpler design",
      B: "Unnecessary complexity",
      C: "Better performance always",
      D: "No changes"
    },
    answer: "B",
    explanation: "Over-engineering introduces unnecessary indirections and architectural bloat."
  },
  {
    id: "lec3_q50",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "When to Use Adapter",
    qNum: 50,
    question: "Adapter should be used only to solve:",
    options: {
      A: "Interface incompatibility",
      B: "Database problems",
      C: "Memory problems",
      D: "User interface problems"
    },
    answer: "A",
    explanation: "The sole mandate of the Adapter pattern is resolving interface incompatibility."
  },
  {
    id: "lec3_q51",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Facade Pattern",
    qNum: 51,
    question: "Facade Pattern provides:",
    options: {
      A: "A simple interface to a complex subsystem",
      B: "Many complex interfaces",
      C: "Object creation mechanism",
      D: "Dynamic object features"
    },
    answer: "A",
    explanation: "Facade provides a unified, higher-level interface that makes a complex subsystem easy to use."
  },
  {
    id: "lec3_q52",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Facade Pattern",
    qNum: 52,
    question: "Without Facade, watching a movie requires:",
    options: {
      A: "One simple action only",
      B: "Several steps involving different devices",
      C: "No devices",
      D: "Creating new classes"
    },
    answer: "B",
    explanation: "Without a home-theater facade, you must turn on TV, switch input, dim lights, turn on soundbar, and start DVD player individually."
  },
  {
    id: "lec3_q53",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Facade Pattern",
    qNum: 53,
    question: "Facade simplifies a task by creating:",
    options: {
      A: "A single object that performs multiple actions",
      B: "Many new subsystems",
      C: "More client classes",
      D: "New interfaces only"
    },
    answer: "A",
    explanation: "A single facade object coordinates multiple underlying subsystem operations behind a single method call."
  },
  {
    id: "lec3_q54",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "ShoppingFacade Example",
    qNum: 54,
    question: "In Online Shopping System, Place Order requires:",
    options: {
      A: "Only payment",
      B: "Multiple subsystem operations",
      C: "Only email",
      D: "Only inventory"
    },
    answer: "B",
    explanation: "Placing an order coordinates inventory check, payment processing, invoice generation, and shipping notification."
  },
  {
    id: "lec3_q55",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "ShoppingFacade Example",
    qNum: 55,
    question: "Without Facade, the client communicates directly with:",
    options: {
      A: "One class only",
      B: "Five different services",
      C: "No services",
      D: "Database only"
    },
    answer: "B",
    explanation: "Without Facade, the caller must manually coordinate all separate services (Payment, Inventory, Shipping, Email, etc.)."
  },
  {
    id: "lec3_q56",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "ShoppingFacade Example",
    qNum: 56,
    question: "One problem without Facade is:",
    options: {
      A: "Loose coupling",
      B: "Tight coupling",
      C: "Simple maintenance",
      D: "Easy extension"
    },
    answer: "B",
    explanation: "Directly linking the client to numerous subsystem classes creates tight coupling."
  },
  {
    id: "lec3_q57",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "ShoppingFacade Example",
    qNum: 57,
    question: "ShoppingFacade allows the client to communicate with:",
    options: {
      A: "All subsystem classes directly",
      B: "Only the Facade",
      C: "Database directly",
      D: "Payment service only"
    },
    answer: "B",
    explanation: "The client talks only to ShoppingFacade, which internally delegates work to the subsystems."
  },
  {
    id: "lec3_q58",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Facade Pattern",
    qNum: 58,
    question: "The key idea of Facade is:",
    options: {
      A: "Client knows all subsystems",
      B: "Facade knows the subsystem, client does not",
      C: "No subsystem exists",
      D: "Client manages everything"
    },
    answer: "B",
    explanation: "The Facade knows subsystem internals; the client remains blissfully unaware of subsystem complexities."
  },
  {
    id: "lec3_q59",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Facade Pattern",
    qNum: 59,
    question: "In Facade Pattern, subsystem classes:",
    options: {
      A: "Perform the actual work",
      B: "Replace the client",
      C: "Create the Facade",
      D: "Control access"
    },
    answer: "A",
    explanation: "The subsystem classes do the heavy lifting; the Facade merely orchestrates their execution."
  },
  {
    id: "lec3_q60",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "When to Use Facade",
    qNum: 60,
    question: "Use Facade when:",
    options: {
      A: "A subsystem is too complex",
      B: "The system has no classes",
      C: "Direct access is required always",
      D: "No simplification is needed"
    },
    answer: "A",
    explanation: "Facade is ideal when you need a simple interface to shield clients from a multifaceted, complex subsystem."
  },
  {
    id: "lec3_q61",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "When NOT to Use Facade",
    qNum: 61,
    question: "Facade Pattern should not be used when:",
    options: {
      A: "The subsystem is already simple",
      B: "The subsystem is complex",
      C: "The client communicates with many classes",
      D: "You want to hide implementation details"
    },
    answer: "A",
    explanation: "If a subsystem only has one or two trivial classes, wrapping it in a facade is redundant overhead."
  },
  {
    id: "lec3_q62",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Proxy Pattern",
    qNum: 62,
    question: "The Proxy Pattern provides:",
    options: {
      A: "A placeholder or surrogate for another object",
      B: "A new programming language",
      C: "A database connection",
      D: "A replacement for all classes"
    },
    answer: "A",
    explanation: "Proxy provides a placeholder or surrogate object that controls access to the real subject."
  },
  {
    id: "lec3_q63",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Proxy Pattern",
    qNum: 63,
    question: "Proxy controls access to:",
    options: {
      A: "Another object",
      B: "The compiler",
      C: "The database only",
      D: "The user interface"
    },
    answer: "A",
    explanation: "A proxy mediates calls from clients to the target subject object."
  },
  {
    id: "lec3_q64",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Proxy Pattern",
    qNum: 64,
    question: "Instead of communicating directly with the real object, the client communicates with:",
    options: {
      A: "Adapter",
      B: "Proxy",
      C: "Facade",
      D: "Decorator"
    },
    answer: "B",
    explanation: "The client interacts directly with the proxy, which forwards permitted requests to the real object."
  },
  {
    id: "lec3_q65",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Proxy Pattern",
    qNum: 65,
    question: "The Proxy decides:",
    options: {
      A: "How and when to access the real object",
      B: "How to create databases",
      C: "How to design interfaces",
      D: "How to remove classes"
    },
    answer: "A",
    explanation: "The proxy controls whether, when, and how calls are forwarded to the real service."
  },
  {
    id: "lec3_q66",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Proxy Pattern",
    qNum: 66,
    question: "Reasons for using Proxy include:",
    options: {
      A: "Security, Performance, and Lazy Loading",
      B: "Increasing duplicate code",
      C: "Removing all objects",
      D: "Avoiding interfaces"
    },
    answer: "A",
    explanation: "Common proxy types include Protection Proxy (Security), Caching Proxy (Performance), and Virtual Proxy (Lazy Loading)."
  },
  {
    id: "lec3_q67",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Proxy ATM Example",
    qNum: 67,
    question: "In the ATM Card example, the ATM card acts as:",
    options: {
      A: "Real Object",
      B: "Proxy",
      C: "Client",
      D: "Subsystem"
    },
    answer: "B",
    explanation: "The physical ATM card serves as the proxy mediating access to the bank account."
  },
  {
    id: "lec3_q68",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Proxy ATM Example",
    qNum: 68,
    question: "The bank account in ATM example represents:",
    options: {
      A: "Proxy",
      B: "Real Object",
      C: "Client",
      D: "Interface"
    },
    answer: "B",
    explanation: "The actual bank account holds the funds and represents the Real Object (Real Subject)."
  },
  {
    id: "lec3_q69",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Proxy ATM Example",
    qNum: 69,
    question: "The ATM card verifies:",
    options: {
      A: "Identity and PIN",
      B: "Database structure",
      C: "Programming language",
      D: "Source code"
    },
    answer: "A",
    explanation: "The ATM card proxy verifies the cardholder's PIN and identity before authorising transactions."
  },
  {
    id: "lec3_q70",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Proxy ATM Example",
    qNum: 70,
    question: "BankAccountProxy controls access to:",
    options: {
      A: "BankAccount",
      B: "Client",
      C: "Interface",
      D: "Facade"
    },
    answer: "A",
    explanation: "BankAccountProxy guards access to the BankAccount instance."
  },
  {
    id: "lec3_q71",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Proxy Pattern",
    qNum: 71,
    question: "In Proxy Pattern, both Proxy and Real Object share:",
    options: {
      A: "A common interface",
      B: "A database",
      C: "A constructor",
      D: "A programming language"
    },
    answer: "A",
    explanation: "Both Proxy and RealSubject implement the same common Subject interface so the client treats them interchangeably."
  },
  {
    id: "lec3_q72",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Proxy ATM Example",
    qNum: 72,
    question: "The BankAccount class performs:",
    options: {
      A: "Actual withdrawal",
      B: "Access control",
      C: "Authentication only",
      D: "Interface conversion"
    },
    answer: "A",
    explanation: "The BankAccount executes the actual core operation (withdrawing the money)."
  },
  {
    id: "lec3_q73",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "When to Use Proxy",
    qNum: 73,
    question: "Use Proxy Pattern when you need to:",
    options: {
      A: "Control access to an object",
      B: "Create multiple classes",
      C: "Remove security",
      D: "Avoid optimization"
    },
    answer: "A",
    explanation: "Proxy is chosen when controlled, audited, cached, or lazy access to an object is essential."
  },
  {
    id: "lec3_q74",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Proxy Applications",
    qNum: 74,
    question: "Proxy can be used for:",
    options: {
      A: "Caching expensive operations",
      B: "Increasing unnecessary complexity",
      C: "Removing objects",
      D: "Avoiding all processing"
    },
    answer: "A",
    explanation: "A caching proxy intercepts repeated calls to return cached results and save resources."
  },
  {
    id: "lec3_q75",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "When NOT to Use Proxy",
    qNum: 75,
    question: "Do not use Proxy when:",
    options: {
      A: "Direct access is acceptable",
      B: "Security is required",
      C: "Logging is required",
      D: "Lazy Loading is needed"
    },
    answer: "A",
    explanation: "If direct access to the service has no overhead, security, or caching requirements, a proxy is redundant."
  },
  {
    id: "lec3_q76",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Proxy Pattern Summary",
    qNum: 76,
    question: "The key idea of Proxy is:",
    options: {
      A: "Control, optimize, or secure access to another object",
      B: "Create new objects dynamically",
      C: "Replace all interfaces",
      D: "Add formatting features"
    },
    answer: "A",
    explanation: "Proxy controls, optimizes (caching/lazy-loading), or secures access to another underlying object."
  },
  {
    id: "lec3_q77",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Decorator Pattern",
    qNum: 77,
    question: "Decorator Pattern allows you to add:",
    options: {
      A: "New behavior dynamically",
      B: "New databases",
      C: "New operating systems",
      D: "New programming languages"
    },
    answer: "A",
    explanation: "Decorator dynamically attaches new behaviors to objects without affecting other instances."
  },
  {
    id: "lec3_q78",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Decorator Pattern",
    qNum: 78,
    question: "Decorator adds functionality by:",
    options: {
      A: "Wrapping the object with decorators",
      B: "Modifying the original source code",
      C: "Deleting the object",
      D: "Replacing all classes"
    },
    answer: "A",
    explanation: "It encloses the target component within a wrapper decorator object that enhances its behavior."
  },
  {
    id: "lec3_q79",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Decorator Pattern",
    qNum: 79,
    question: "In Decorator Pattern, the original class is:",
    options: {
      A: "Modified every time",
      B: "Not modified",
      C: "Deleted",
      D: "Converted into database"
    },
    answer: "B",
    explanation: "The original class stays completely untouched, adhering cleanly to the Open-Closed Principle."
  },
  {
    id: "lec3_q80",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Decorator Text Editor Example",
    qNum: 80,
    question: "Text Editor example uses Decorator to add:",
    options: {
      A: "Bold, Italic, Underline, Highlight",
      B: "Database tables",
      C: "Network protocols",
      D: "Security checks"
    },
    answer: "A",
    explanation: "Formatting styles (Bold, Italic, Underline, Highlight) are stacked as decorators on top of plain text."
  },
  {
    id: "lec3_q81",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Decorator vs Subclassing",
    qNum: 81,
    question: "Creating a separate class for every formatting combination causes:",
    options: {
      A: "Easier maintenance",
      B: "Too many subclasses",
      C: "Less complexity",
      D: "Better scalability"
    },
    answer: "B",
    explanation: "Using inheritance produces a combinatorial explosion of subclasses (e.g. BoldItalicUnderlineText)."
  },
  {
    id: "lec3_q82",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Decorator vs Subclassing",
    qNum: 82,
    question: "The inheritance solution for text formatting has problems such as:",
    options: {
      A: "Difficult maintenance and hard extension",
      B: "No classes",
      C: "No objects",
      D: "No features"
    },
    answer: "A",
    explanation: "A massive explosion of static subclasses makes maintenance an intractable nightmare."
  },
  {
    id: "lec3_q83",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Decorator & SOLID",
    qNum: 83,
    question: "The inheritance solution in Decorator example violates:",
    options: {
      A: "Single Responsibility Principle",
      B: "Open/Closed Principle",
      C: "Dependency Inversion Principle",
      D: "Interface Segregation Principle"
    },
    answer: "B",
    explanation: "Subclassing explosion requires modifying or adding endless rigid classes instead of extending smoothly (violating OCP)."
  },
  {
    id: "lec3_q84",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Decorator Pattern",
    qNum: 84,
    question: "Decorator Pattern solves the problem by:",
    options: {
      A: "Using decorators to add responsibilities",
      B: "Creating many subclasses",
      C: "Modifying the original class",
      D: "Removing objects"
    },
    answer: "A",
    explanation: "Decorators compose dynamically at runtime, allowing any combination of features without subclassing."
  },
  {
    id: "lec3_q85",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Decorator Pattern",
    qNum: 85,
    question: "In Decorator Pattern, every decorator adds:",
    options: {
      A: "One responsibility",
      B: "One database",
      C: "One interface only",
      D: "One client"
    },
    answer: "A",
    explanation: "Each concrete decorator is responsible for one specific supplementary responsibility (e.g. BoldDecorator adds bolding)."
  },
  {
    id: "lec3_q86",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Decorator Text Editor Example",
    qNum: 86,
    question: "In Text Decorator example, the common interface is:",
    options: {
      A: "IText",
      B: "TextDecorator",
      C: "PlainText",
      D: "RenderClass"
    },
    answer: "A",
    explanation: "The shared abstraction implemented by both PlainText and TextDecorator is IText."
  },
  {
    id: "lec3_q87",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Decorator Text Editor Example",
    qNum: 87,
    question: "PlainText represents:",
    options: {
      A: "The original object",
      B: "The base decorator",
      C: "A concrete decorator",
      D: "The client"
    },
    answer: "A",
    explanation: "PlainText is the concrete component (the original object being wrapped)."
  },
  {
    id: "lec3_q88",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Decorator Text Editor Example",
    qNum: 88,
    question: "TextDecorator represents:",
    options: {
      A: "Base decorator",
      B: "Original object",
      C: "Client interface",
      D: "Subsystem"
    },
    answer: "A",
    explanation: "TextDecorator is the abstract base decorator class wrapping an IText reference."
  },
  {
    id: "lec3_q89",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Decorator Text Editor Example",
    qNum: 89,
    question: "Concrete Decorators are responsible for:",
    options: {
      A: "Adding formatting features",
      B: "Creating databases",
      C: "Controlling access",
      D: "Converting interfaces"
    },
    answer: "A",
    explanation: "Concrete decorators (BoldDecorator, ItalicDecorator) apply their specific formatting decorations."
  },
  {
    id: "lec3_q90",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Decorator Pattern Benefits",
    qNum: 90,
    question: "Decorator Pattern allows features to be:",
    options: {
      A: "Added or removed independently",
      B: "Deleted permanently",
      C: "Fixed forever",
      D: "Hidden completely"
    },
    answer: "A",
    explanation: "Decorators can be nested or stripped off independently at runtime without modifying the target object."
  },
  {
    id: "lec3_q91",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "When to Use Decorator",
    qNum: 91,
    question: "Use Decorator Pattern when:",
    options: {
      A: "You need to add behavior dynamically",
      B: "Behavior never changes",
      C: "Only one variation exists",
      D: "No extension is required"
    },
    answer: "A",
    explanation: "Use it whenever you must add or remove responsibilities dynamically without disrupting client code."
  },
  {
    id: "lec3_q92",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Decorator Pattern Benefits",
    qNum: 92,
    question: "Decorator avoids creating:",
    options: {
      A: "Many subclasses",
      B: "Interfaces",
      C: "Objects",
      D: "Methods"
    },
    answer: "A",
    explanation: "It prevents an explosion of rigid subclass combinations."
  },
  {
    id: "lec3_q93",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Decorator Pattern Benefits",
    qNum: 93,
    question: "Decorator extends objects without modifying:",
    options: {
      A: "Their source code",
      B: "Their names",
      C: "Their interfaces",
      D: "Their users"
    },
    answer: "A",
    explanation: "It augments functionality from the outside without altering the component's internal source code."
  },
  {
    id: "lec3_q94",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "When NOT to Use Decorator",
    qNum: 94,
    question: "Do not use Decorator when:",
    options: {
      A: "Behavior is fixed and never changes",
      B: "Features need dynamic addition",
      C: "Multiple combinations are required",
      D: "Extensions are needed"
    },
    answer: "A",
    explanation: "If behavior is static and will never need dynamic embellishment, simple classes are preferable."
  },
  {
    id: "lec3_q95",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "When NOT to Use Decorator",
    qNum: 95,
    question: "Adding decorators is unnecessary when:",
    options: {
      A: "It introduces unnecessary complexity",
      B: "Dynamic behavior is required",
      C: "Many combinations exist",
      D: "Objects need extension"
    },
    answer: "A",
    explanation: "Deeply nested wrappers can complicate debugging and object identity comparisons if used needlessly."
  },
  {
    id: "lec3_q96",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Structural Patterns Summary",
    qNum: 96,
    question: "Structural Design Patterns covered in this lecture are:",
    options: {
      A: "Adapter, Facade, Proxy, Decorator",
      B: "Singleton, Factory, Builder, Prototype",
      C: "Strategy, Observer, Command, State",
      D: "MVC, MVP, MVVM, DAO"
    },
    answer: "A",
    explanation: "Lecture 3 covers Adapter, Facade, Proxy, and Decorator."
  },
  {
    id: "lec3_q97",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Structural Patterns Summary",
    qNum: 97,
    question: "Adapter Pattern solves:",
    options: {
      A: "Interface incompatibility",
      B: "Object security",
      C: "Dynamic behavior addition",
      D: "Complex subsystem access"
    },
    answer: "A",
    explanation: "Adapter bridges incompatible interfaces."
  },
  {
    id: "lec3_q98",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Structural Patterns Summary",
    qNum: 98,
    question: "Facade Pattern solves:",
    options: {
      A: "Complex subsystem interaction",
      B: "Interface conversion",
      C: "Access control",
      D: "Dynamic decoration"
    },
    answer: "A",
    explanation: "Facade provides a simple entry point to a convoluted subsystem."
  },
  {
    id: "lec3_q99",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Structural Patterns Summary",
    qNum: 99,
    question: "Proxy Pattern solves:",
    options: {
      A: "Controlled access to objects",
      B: "Interface translation",
      C: "Object decoration",
      D: "Subsystem simplification"
    },
    answer: "A",
    explanation: "Proxy intercepts and governs access (security, lazy loading, caching) to target objects."
  },
  {
    id: "lec3_q100",
    lectureId: 3,
    lectureTitle: "Lecture 3: Structural Design Patterns",
    lectureTitleAr: "المحاضرة 3: أنماط التصميم الهيكلية (Structural Patterns)",
    topic: "Structural Patterns Summary",
    qNum: 100,
    question: "Decorator Pattern solves:",
    options: {
      A: "Dynamic addition of responsibilities",
      B: "Interface incompatibility",
      C: "Access restriction",
      D: "Subsystem complexity"
    },
    answer: "A",
    explanation: "Decorator dynamically augments an object with additional capabilities without subclassing."
  }
];
