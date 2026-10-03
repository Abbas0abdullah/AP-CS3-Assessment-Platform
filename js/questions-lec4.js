// Lecture 4: AP_Lec4 MCQ_Bank_4 (Dr. Baidaa Laalaa & Eng. Abdulmalik Hassan Alhaj)
// Total questions: 80
export const lec4Questions = [
  {
    id: "lec4_q1",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Strategy Pattern",
    qNum: 1,
    question: "What is the main purpose of Strategy Pattern?",
    options: {
      A: "Create only one object in the system",
      B: "Define a family of algorithms and make them interchangeable at runtime",
      C: "Convert incompatible interfaces",
      D: "Hide complex subsystems"
    },
    answer: "B",
    explanation: "Strategy defines a family of algorithms, encapsulates each one in a separate class, and makes them interchangeable at runtime."
  },
  {
    id: "lec4_q2",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Strategy Pattern",
    qNum: 2,
    question: "In Strategy Pattern, each algorithm is placed in:",
    options: {
      A: "The same class using if-else statements",
      B: "A separate class",
      C: "The database",
      D: "The client code only"
    },
    answer: "B",
    explanation: "Each variant of the algorithm is encapsulated within its own dedicated class implementing a common strategy interface."
  },
  {
    id: "lec4_q3",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Strategy Pattern Motivation",
    qNum: 3,
    question: "Which problem occurs when all payment methods are written inside one class?",
    options: {
      A: "Better performance",
      B: "Easier maintenance",
      C: "Large if-else statements",
      D: "Less code duplication"
    },
    answer: "C",
    explanation: "Cramming multiple payment implementations into a single class leads to bulky, fragile, conditional if-else / switch structures."
  },
  {
    id: "lec4_q4",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Strategy & SOLID",
    qNum: 4,
    question: "Adding a new payment method requires modifying the same class. This violates:",
    options: {
      A: "Single Responsibility Principle",
      B: "Open/Closed Principle",
      C: "Liskov Substitution Principle",
      D: "Interface Segregation Principle"
    },
    answer: "B",
    explanation: "Modifying existing core code every time a new payment provider is supported violates the Open/Closed Principle."
  },
  {
    id: "lec4_q5",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Strategy Pattern",
    qNum: 5,
    question: "In Strategy Pattern, all concrete strategies implement the same:",
    options: {
      A: "Database",
      B: "Interface",
      C: "Constructor",
      D: "Main method"
    },
    answer: "B",
    explanation: "All concrete strategy variations implement a unified strategy interface."
  },
  {
    id: "lec4_q6",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Strategy Payment Example",
    qNum: 6,
    question: "Which class represents the Context in the payment example?",
    options: {
      A: "VisaPayment",
      B: "PayPalPayment",
      C: "ShoppingCart",
      D: "IPaymentStrategy"
    },
    answer: "C",
    explanation: "ShoppingCart maintains a reference to an IPaymentStrategy and acts as the Context."
  },
  {
    id: "lec4_q7",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Strategy Pattern",
    qNum: 7,
    question: "The Context class in Strategy Pattern:",
    options: {
      A: "Knows all algorithm details",
      B: "Uses the selected strategy without knowing its internal implementation",
      C: "Creates every algorithm itself",
      D: "Removes all interfaces"
    },
    answer: "B",
    explanation: "The Context executes the strategy via its interface without caring about the concrete implementation mechanics."
  },
  {
    id: "lec4_q8",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Strategy Payment Example",
    qNum: 8,
    question: "Which of the following is a Concrete Strategy example?",
    options: {
      A: "IPaymentStrategy",
      B: "ShoppingCart",
      C: "VisaPayment",
      D: "Client"
    },
    answer: "C",
    explanation: "VisaPayment is a concrete class implementing IPaymentStrategy."
  },
  {
    id: "lec4_q9",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "When to Use Strategy",
    qNum: 9,
    question: "Strategy Pattern is useful when:",
    options: {
      A: "Only one algorithm exists",
      B: "Algorithms change frequently",
      C: "A class must have one instance",
      D: "Interfaces are incompatible"
    },
    answer: "B",
    explanation: "Strategy is ideal when algorithms vary often or different algorithmic approaches are chosen dynamically at runtime."
  },
  {
    id: "lec4_q10",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Strategy Pattern Use Cases",
    qNum: 10,
    question: "Which example uses Strategy Pattern?",
    options: {
      A: "Payment gateways",
      B: "One shared object",
      C: "Converting interfaces",
      D: "Adding access control"
    },
    answer: "A",
    explanation: "Payment gateways (Visa, PayPal, Crypto) are the classic textbook use case for the Strategy pattern."
  },
  {
    id: "lec4_q11",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Observer Pattern",
    qNum: 11,
    question: "Observer Pattern defines a:",
    options: {
      A: "One-to-one dependency",
      B: "One-to-many dependency",
      C: "Many-to-many dependency only",
      D: "Class inheritance dependency"
    },
    answer: "B",
    explanation: "Observer defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified."
  },
  {
    id: "lec4_q12",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Observer Pattern",
    qNum: 12,
    question: "The main idea of Observer Pattern is:",
    options: {
      A: "Create objects automatically",
      B: "Notify dependent objects automatically when state changes",
      C: "Hide a subsystem",
      D: "Change object interfaces"
    },
    answer: "B",
    explanation: "Dependent observer objects receive automatic notifications and updates whenever the subject's internal state updates."
  },
  {
    id: "lec4_q13",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Observer Pattern",
    qNum: 13,
    question: "In Observer Pattern, the object whose state changes is called:",
    options: {
      A: "Observer",
      B: "Subject",
      C: "Client",
      D: "Context"
    },
    answer: "B",
    explanation: "The state-holder that publishes notifications is known as the Subject (or Observable/Publisher)."
  },
  {
    id: "lec4_q14",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Observer Pattern",
    qNum: 14,
    question: "Which responsibility belongs to Subject?",
    options: {
      A: "Register observers",
      B: "Remove observers",
      C: "Notify observers",
      D: "All of the above"
    },
    answer: "D",
    explanation: "A Subject manages subscribers: registering (Attach), unregistering (Detach), and broadcasting updates (Notify)."
  },
  {
    id: "lec4_q15",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Observer Pattern",
    qNum: 15,
    question: "The Observer interface defines which method?",
    options: {
      A: "Pay()",
      B: "Create()",
      C: "Update()",
      D: "Checkout()"
    },
    answer: "C",
    explanation: "The standard Observer interface exposes an Update() method invoked by the subject during broadcast."
  },
  {
    id: "lec4_q16",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Coffee Shop Observer Example",
    qNum: 16,
    question: "In the Coffee Shop example, which class is the Subject?",
    options: {
      A: "CustomerApp",
      B: "SMS Service",
      C: "CoffeeOrder",
      D: "AnalyticsService"
    },
    answer: "C",
    explanation: "CoffeeOrder holds order status changes and notifies subscribers; hence it is the Subject."
  },
  {
    id: "lec4_q17",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Observer Pattern Motivation",
    qNum: 17,
    question: "Without Observer Pattern, the main problem is:",
    options: {
      A: "Loose coupling",
      B: "Tight coupling",
      C: "Too many interfaces",
      D: "No classes"
    },
    answer: "B",
    explanation: "Without Observer, the subject must explicitly call every client service directly, causing tight coupling."
  },
  {
    id: "lec4_q18",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Observer & SOLID",
    qNum: 18,
    question: "Adding a new observer without changing CoffeeOrder demonstrates:",
    options: {
      A: "SRP",
      B: "OCP",
      C: "DIP only",
      D: "LSP only"
    },
    answer: "B",
    explanation: "Adding new subscriber classes without touching CoffeeOrder code embodies the Open/Closed Principle."
  },
  {
    id: "lec4_q19",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Comparison",
    qNum: 19,
    question: "Which pattern answers the question: \"Should many objects be notified when something changes?\"",
    options: {
      A: "Strategy",
      B: "Observer",
      C: "Adapter",
      D: "Factory Method"
    },
    answer: "B",
    explanation: "Observer addresses multi-object notification upon state transitions."
  },
  {
    id: "lec4_q20",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Comparison",
    qNum: 20,
    question: "Which pattern answers: \"Can I change the algorithm at runtime?\"",
    options: {
      A: "Observer",
      B: "Strategy",
      C: "Proxy",
      D: "Facade"
    },
    answer: "B",
    explanation: "Strategy enables dynamic, runtime algorithm switching."
  },
  {
    id: "lec4_q21",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Comparison",
    qNum: 21,
    question: "Which pattern encapsulates each algorithm in a separate class?",
    options: {
      A: "Observer",
      B: "Strategy",
      C: "Proxy",
      D: "Facade"
    },
    answer: "B",
    explanation: "Strategy encapsulates algorithmic variants into discrete, interchangeable classes."
  },
  {
    id: "lec4_q22",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Strategy Pattern",
    qNum: 22,
    question: "In Strategy Pattern, the client can choose the algorithm:",
    options: {
      A: "Only before compiling",
      B: "At runtime",
      C: "Only during installation",
      D: "After deleting the class"
    },
    answer: "B",
    explanation: "Strategy allows the client to switch or select algorithms on the fly during runtime execution."
  },
  {
    id: "lec4_q23",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Strategy Payment Example",
    qNum: 23,
    question: "Which interface is used in the Strategy payment example?",
    options: {
      A: "IObserver",
      B: "IPaymentStrategy",
      C: "IFactory",
      D: "IContext"
    },
    answer: "B",
    explanation: "IPaymentStrategy is the abstraction for payment methods."
  },
  {
    id: "lec4_q24",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Strategy Payment Example",
    qNum: 24,
    question: "The method provided by IPaymentStrategy is:",
    options: {
      A: "Update()",
      B: "Create()",
      C: "Pay()",
      D: "Notify()"
    },
    answer: "C",
    explanation: "IPaymentStrategy exposes the Pay() method."
  },
  {
    id: "lec4_q25",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Strategy Pattern Use Cases",
    qNum: 25,
    question: "Which of these is NOT a Strategy Pattern example mentioned in the lecture?",
    options: {
      A: "Payment gateways",
      B: "Data compression",
      C: "Sorting algorithms",
      D: "Database connection"
    },
    answer: "D",
    explanation: "Database connection is an example of Singleton / Factory / Resource pool, not a Strategy example."
  },
  {
    id: "lec4_q26",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Observer Pattern",
    qNum: 26,
    question: "In Observer Pattern, when the Subject changes state:",
    options: {
      A: "It deletes all observers",
      B: "It automatically notifies observers",
      C: "It creates a new subject",
      D: "It changes interfaces"
    },
    answer: "B",
    explanation: "Whenever state changes, the subject automatically calls Notify() to trigger all registered observers."
  },
  {
    id: "lec4_q27",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Observer YouTube Example",
    qNum: 27,
    question: "Which class represents a subscriber in the YouTube example?",
    options: {
      A: "Channel",
      B: "Observer",
      C: "Subject",
      D: "Context"
    },
    answer: "B",
    explanation: "Subscribers represent Observers subscribing to notifications from the YouTube Channel (Subject)."
  },
  {
    id: "lec4_q28",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Observer YouTube Example",
    qNum: 28,
    question: "The YouTube channel example demonstrates:",
    options: {
      A: "Creating objects",
      B: "Automatic notification to interested objects",
      C: "Interface conversion",
      D: "Object cloning"
    },
    answer: "B",
    explanation: "When a new video is published, all subscribed users are automatically alerted."
  },
  {
    id: "lec4_q29",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Coffee Shop Observer Example",
    qNum: 29,
    question: "Which of the following is NOT a Concrete Observer in Coffee Shop example?",
    options: {
      A: "OrderDisplay",
      B: "CustomerApp",
      C: "CoffeeOrder",
      D: "SmsService"
    },
    answer: "C",
    explanation: "CoffeeOrder is the Subject, not an observer. OrderDisplay, CustomerApp, and SmsService are the concrete observers."
  },
  {
    id: "lec4_q30",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Observer Pattern",
    qNum: 30,
    question: "Concrete Observers perform:",
    options: {
      A: "The same action always",
      B: "Different actions after receiving notification",
      C: "Object creation only",
      D: "Algorithm selection"
    },
    answer: "B",
    explanation: "Each observer acts according to its own requirements (e.g. updating a display screen, sending an SMS, or logging metrics)."
  },
  {
    id: "lec4_q31",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Observer Pattern Benefits",
    qNum: 31,
    question: "The Observer Pattern helps reduce:",
    options: {
      A: "Tight coupling",
      B: "Interfaces",
      C: "Classes",
      D: "Objects"
    },
    answer: "A",
    explanation: "The Subject interacts solely with the abstract IObserver interface, minimizing coupling."
  },
  {
    id: "lec4_q32",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Observer Pattern Methods",
    qNum: 32,
    question: "Which method is responsible for adding observers?",
    options: {
      A: "Attach()",
      B: "Pay()",
      C: "Checkout()",
      D: "Create()"
    },
    answer: "A",
    explanation: "Attach() (or Register / Subscribe) adds an observer to the subject's internal notification list."
  },
  {
    id: "lec4_q33",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Observer Pattern Methods",
    qNum: 33,
    question: "Which method removes an observer?",
    options: {
      A: "Add()",
      B: "Detach()",
      C: "Notify()",
      D: "Update()"
    },
    answer: "B",
    explanation: "Detach() (or Unsubscribe) removes an observer from the list."
  },
  {
    id: "lec4_q34",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Observer Pattern Internals",
    qNum: 34,
    question: "The Subject maintains:",
    options: {
      A: "A list of observers",
      B: "A list of algorithms",
      C: "A list of classes only",
      D: "A database table"
    },
    answer: "A",
    explanation: "The Subject keeps a private collection/list of registered IObserver subscribers."
  },
  {
    id: "lec4_q35",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Classification",
    qNum: 35,
    question: "Which pattern belongs to Behavioral Design Patterns?",
    options: {
      A: "Adapter",
      B: "Facade",
      C: "Observer",
      D: "Proxy"
    },
    answer: "C",
    explanation: "Observer is a Behavioral pattern; Adapter, Facade, and Proxy are Structural."
  },
  {
    id: "lec4_q36",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Comparison",
    qNum: 36,
    question: "Which pattern is used to replace algorithms dynamically?",
    options: {
      A: "Strategy",
      B: "Observer",
      C: "Singleton",
      D: "Factory Method"
    },
    answer: "A",
    explanation: "Strategy enables dynamic algorithm swapping at runtime."
  },
  {
    id: "lec4_q37",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Comparison",
    qNum: 37,
    question: "Which pattern provides one-to-many automatic notification?",
    options: {
      A: "Strategy",
      B: "Observer",
      C: "Adapter",
      D: "Decorator"
    },
    answer: "B",
    explanation: "Observer broadcasts updates across a one-to-many relationship."
  },
  {
    id: "lec4_q38",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Comparison",
    qNum: 38,
    question: "The key idea of Strategy Pattern is:",
    options: {
      A: "One shared object for application",
      B: "Replace algorithms dynamically",
      C: "Hide subsystem complexity",
      D: "Control object access"
    },
    answer: "B",
    explanation: "The core thesis of Strategy is swapping algorithms dynamically without changing the context."
  },
  {
    id: "lec4_q39",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Comparison",
    qNum: 39,
    question: "The key idea of Observer Pattern is:",
    options: {
      A: "One-to-many automatic notification",
      B: "Create objects without concrete classes",
      C: "Convert interfaces",
      D: "Add features dynamically"
    },
    answer: "A",
    explanation: "The core thesis of Observer is automatic one-to-many notification on state changes."
  },
  {
    id: "lec4_q40",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Comparison",
    qNum: 40,
    question: "Which pattern solves the problem: \"Multiple algorithms exist and client should switch between them\"?",
    options: {
      A: "Strategy",
      B: "Observer",
      C: "Proxy",
      D: "Singleton"
    },
    answer: "A",
    explanation: "Strategy directly solves switching among algorithmic alternatives."
  },
  {
    id: "lec4_q41",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Categories",
    qNum: 41,
    question: "Singleton Pattern belongs to which category?",
    options: {
      A: "Behavioral",
      B: "Structural",
      C: "Creational",
      D: "Interface"
    },
    answer: "C",
    explanation: "Singleton is a Creational design pattern."
  },
  {
    id: "lec4_q42",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Comparison",
    qNum: 42,
    question: "The main problem solved by Singleton Pattern is:",
    options: {
      A: "Incompatible interfaces",
      B: "Multiple instances of a class may cause inconsistent behavior",
      C: "Many objects need notification",
      D: "Changing algorithms dynamically"
    },
    answer: "B",
    explanation: "Singleton prevents state desynchronization and resource conflicts arising from duplicate instances."
  },
  {
    id: "lec4_q43",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Comparison",
    qNum: 43,
    question: "The main idea of Singleton Pattern is:",
    options: {
      A: "Create many objects",
      B: "Ensure only one instance exists",
      C: "Convert one interface into another",
      D: "Add responsibilities dynamically"
    },
    answer: "B",
    explanation: "Guarantees a solitary unique instance throughout the application."
  },
  {
    id: "lec4_q44",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Comparison",
    qNum: 44,
    question: "Factory Method Pattern solves the problem of:",
    options: {
      A: "Object creation depending on concrete classes",
      B: "Notification between objects",
      C: "Controlling access to objects",
      D: "Adding features at runtime"
    },
    answer: "A",
    explanation: "It decouples client code from having hard dependencies on concrete implementation types during creation."
  },
  {
    id: "lec4_q45",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Comparison",
    qNum: 45,
    question: "Factory Method delegates object creation to:",
    options: {
      A: "Observer",
      B: "Factory method",
      C: "Proxy object",
      D: "Client class"
    },
    answer: "B",
    explanation: "Creation is handed off to a specialized factory method overridden by subclasses."
  },
  {
    id: "lec4_q46",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Comparison",
    qNum: 46,
    question: "The key idea of Factory Method is:",
    options: {
      A: "Hide complexity behind one interface",
      B: "Create objects without exposing concrete classes",
      C: "Notify multiple objects",
      D: "Replace algorithms"
    },
    answer: "B",
    explanation: "Clients acquire products conforming to an abstraction without needing to reference concrete product classes."
  },
  {
    id: "lec4_q47",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Comparison",
    qNum: 47,
    question: "Adapter Pattern is used when:",
    options: {
      A: "Two incompatible classes cannot work together",
      B: "Only one instance is needed",
      C: "Algorithms change frequently",
      D: "Many observers exist"
    },
    answer: "A",
    explanation: "Adapter is required when two components have incompatible interface contracts."
  },
  {
    id: "lec4_q48",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Comparison",
    qNum: 48,
    question: "The solution provided by Adapter Pattern is:",
    options: {
      A: "Create a global object",
      B: "Convert one interface into another expected by the client",
      C: "Notify all objects",
      D: "Add new behavior dynamically"
    },
    answer: "B",
    explanation: "Converts the adaptee interface into the target interface anticipated by the caller."
  },
  {
    id: "lec4_q49",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Comparison",
    qNum: 49,
    question: "Facade Pattern is used to:",
    options: {
      A: "Hide a complex subsystem behind a simple interface",
      B: "Create multiple objects",
      C: "Change algorithms",
      D: "Register observers"
    },
    answer: "A",
    explanation: "Facade provides a clean, unified facade shielding users from complicated subsystem interactions."
  },
  {
    id: "lec4_q50",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Comparison",
    qNum: 50,
    question: "The key idea of Facade Pattern is:",
    options: {
      A: "Make incompatible classes collaborate",
      B: "Hide complexity behind a single entry point",
      C: "Replace algorithms dynamically",
      D: "Control access to objects"
    },
    answer: "B",
    explanation: "Consolidates multi-step subsystem actions behind a simplified single point of entry."
  },
  {
    id: "lec4_q51",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Comparison",
    qNum: 51,
    question: "Decorator Pattern allows:",
    options: {
      A: "Adding functionality at runtime",
      B: "Creating only one instance",
      C: "Sending notifications",
      D: "Converting interfaces"
    },
    answer: "A",
    explanation: "Decorator attaches additional behavior to an object dynamically at runtime."
  },
  {
    id: "lec4_q52",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Comparison",
    qNum: 52,
    question: "Decorator Pattern adds new behaviors by:",
    options: {
      A: "Modifying the original class directly",
      B: "Wrapping objects with decorator classes",
      C: "Deleting old classes",
      D: "Using one global object"
    },
    answer: "B",
    explanation: "It encloses the target object inside wrapper decorator classes conforming to the same interface."
  },
  {
    id: "lec4_q53",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Comparison",
    qNum: 53,
    question: "Proxy Pattern controls:",
    options: {
      A: "Algorithm selection",
      B: "Access to another object",
      C: "Object creation only",
      D: "Interface design"
    },
    answer: "B",
    explanation: "Proxy acts as an intermediary controlling access to the underlying real object."
  },
  {
    id: "lec4_q54",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Comparison",
    qNum: 54,
    question: "Proxy Pattern places a proxy object between:",
    options: {
      A: "Two algorithms",
      B: "Client and real object",
      C: "Observer and Subject",
      D: "Factory and product"
    },
    answer: "B",
    explanation: "The proxy sits directly between the client and the real subject."
  },
  {
    id: "lec4_q55",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Identification Questions",
    qNum: 55,
    question: "\"Should there be only one instance?\" refers to which pattern?",
    options: {
      A: "Singleton",
      B: "Observer",
      C: "Strategy",
      D: "Adapter"
    },
    answer: "A",
    explanation: "Singleton guarantees a single global instance."
  },
  {
    id: "lec4_q56",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Identification Questions",
    qNum: 56,
    question: "\"Who should create the object?\" refers to:",
    options: {
      A: "Factory Method",
      B: "Proxy",
      C: "Facade",
      D: "Decorator"
    },
    answer: "A",
    explanation: "Factory Method delegates creation to subclasses or factory routines."
  },
  {
    id: "lec4_q57",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Identification Questions",
    qNum: 57,
    question: "\"Can these two incompatible classes work together?\" refers to:",
    options: {
      A: "Strategy",
      B: "Adapter",
      C: "Observer",
      D: "Singleton"
    },
    answer: "B",
    explanation: "Adapter bridges incompatible interfaces."
  },
  {
    id: "lec4_q58",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Identification Questions",
    qNum: 58,
    question: "\"Can I hide this complex subsystem?\" refers to:",
    options: {
      A: "Facade",
      B: "Factory Method",
      C: "Proxy",
      D: "Observer"
    },
    answer: "A",
    explanation: "Facade conceals complex subsystems."
  },
  {
    id: "lec4_q59",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Identification Questions",
    qNum: 59,
    question: "\"Can I add features without modifying the class?\" refers to:",
    options: {
      A: "Decorator",
      B: "Strategy",
      C: "Singleton",
      D: "Adapter"
    },
    answer: "A",
    explanation: "Decorator dynamically wraps and extends objects without source code alteration."
  },
  {
    id: "lec4_q60",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Identification Questions",
    qNum: 60,
    question: "\"Should access to this object be controlled?\" refers to:",
    options: {
      A: "Proxy",
      B: "Observer",
      C: "Factory Method",
      D: "Strategy"
    },
    answer: "A",
    explanation: "Proxy governs and controls access."
  },
  {
    id: "lec4_q61",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Patterns & SOLID Mapping",
    qNum: 61,
    question: "Which SOLID principle means \"New behavior is added by extending classes rather than modifying existing ones\"?",
    options: {
      A: "SRP",
      B: "OCP",
      C: "LSP",
      D: "ISP"
    },
    answer: "B",
    explanation: "Open/Closed Principle (OCP)."
  },
  {
    id: "lec4_q62",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Patterns & SOLID Mapping",
    qNum: 62,
    question: "OCP stands for:",
    options: {
      A: "Object Control Principle",
      B: "Open/Closed Principle",
      C: "Object Creation Pattern",
      D: "Open Class Pattern"
    },
    answer: "B",
    explanation: "OCP stands for Open/Closed Principle."
  },
  {
    id: "lec4_q63",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Patterns & SOLID Mapping",
    qNum: 63,
    question: "Which patterns apply to Open/Closed Principle (OCP)?",
    options: {
      A: "Observer and Strategy",
      B: "Singleton only",
      C: "Facade only",
      D: "None"
    },
    answer: "A",
    explanation: "Observer and Strategy strongly uphold OCP by allowing new subscribers or strategies to be added without altering existing code."
  },
  {
    id: "lec4_q64",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Patterns & SOLID Mapping",
    qNum: 64,
    question: "SRP stands for:",
    options: {
      A: "Single Responsibility Principle",
      B: "Simple Runtime Principle",
      C: "Strategy Replacement Principle",
      D: "System Responsibility Pattern"
    },
    answer: "A",
    explanation: "SRP stands for Single Responsibility Principle."
  },
  {
    id: "lec4_q65",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Patterns & SOLID Mapping",
    qNum: 65,
    question: "The main idea of SRP is:",
    options: {
      A: "Each class has one well-defined responsibility",
      B: "Each class has many responsibilities",
      C: "Objects must have one instance",
      D: "Classes must inherit everything"
    },
    answer: "A",
    explanation: "Each class should fulfill exactly one responsibility and have only one reason to change."
  },
  {
    id: "lec4_q66",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Patterns & SOLID Mapping",
    qNum: 66,
    question: "Which patterns apply to SRP according to the lecture?",
    options: {
      A: "Singleton, Facade, Decorator, Proxy",
      B: "Observer, Strategy only",
      C: "Factory Method only",
      D: "Adapter only"
    },
    answer: "A",
    explanation: "Singleton (manages its one instance), Facade (hides subsystem), Decorator (one decoration per class), and Proxy (access control) all embody SRP."
  },
  {
    id: "lec4_q67",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Patterns & SOLID Mapping",
    qNum: 67,
    question: "LSP stands for:",
    options: {
      A: "Logical System Principle",
      B: "Liskov Substitution Principle",
      C: "Layer Separation Principle",
      D: "List Structure Principle"
    },
    answer: "B",
    explanation: "LSP stands for Liskov Substitution Principle."
  },
  {
    id: "lec4_q68",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Patterns & SOLID Mapping",
    qNum: 68,
    question: "LSP means:",
    options: {
      A: "Derived classes can replace their abstractions",
      B: "Classes must have one responsibility",
      C: "Objects cannot be replaced",
      D: "Interfaces should be larger"
    },
    answer: "A",
    explanation: "Subtypes can seamlessly replace base abstractions without breaking system expectations."
  },
  {
    id: "lec4_q69",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Patterns & SOLID Mapping",
    qNum: 69,
    question: "Which patterns apply to LSP?",
    options: {
      A: "Observer, Strategy, Adapter",
      B: "Factory Method, Decorator, Proxy, Strategy",
      C: "Singleton only",
      D: "Facade only"
    },
    answer: "B",
    explanation: "Factory Method products, Decorator wrappers, Proxy surrogates, and Strategy implementations must all be safely substitutable for their base types."
  },
  {
    id: "lec4_q70",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Patterns & SOLID Mapping",
    qNum: 70,
    question: "ISP stands for:",
    options: {
      A: "Interface Segregation Principle",
      B: "Internal System Principle",
      C: "Interface Strategy Pattern",
      D: "Instance Separation Principle"
    },
    answer: "A",
    explanation: "ISP stands for Interface Segregation Principle."
  },
  {
    id: "lec4_q71",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Patterns & SOLID Mapping",
    qNum: 71,
    question: "The purpose of ISP is:",
    options: {
      A: "Prevent unnecessary dependencies using small focused interfaces",
      B: "Create one object only",
      C: "Hide complex systems",
      D: "Change algorithms"
    },
    answer: "A",
    explanation: "To keep interfaces small, cohesive, and prevent clients from depending on methods they do not require."
  },
  {
    id: "lec4_q72",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Patterns & SOLID Mapping",
    qNum: 72,
    question: "Which patterns apply to ISP?",
    options: {
      A: "Observer, Strategy, Adapter",
      B: "Singleton, Proxy",
      C: "Facade only",
      D: "Factory only"
    },
    answer: "A",
    explanation: "Observer (single Update method), Strategy (single algorithm method), and Adapter rely on lean, targeted interfaces."
  },
  {
    id: "lec4_q73",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Patterns & SOLID Mapping",
    qNum: 73,
    question: "DIP stands for:",
    options: {
      A: "Dependency Inversion Principle",
      B: "Data Interface Principle",
      C: "Design Implementation Pattern",
      D: "Dependency Instance Pattern"
    },
    answer: "A",
    explanation: "DIP stands for Dependency Inversion Principle."
  },
  {
    id: "lec4_q74",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Patterns & SOLID Mapping",
    qNum: 74,
    question: "DIP means:",
    options: {
      A: "Clients depend on abstractions instead of concrete implementations",
      B: "Clients depend only on concrete classes",
      C: "Classes should have many responsibilities",
      D: "Objects cannot communicate"
    },
    answer: "A",
    explanation: "High-level callers depend on abstract contracts rather than concrete low-level details."
  },
  {
    id: "lec4_q75",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Patterns & SOLID Mapping",
    qNum: 75,
    question: "Which patterns apply to DIP?",
    options: {
      A: "Factory Method, Adapter, Facade, Observer, Strategy",
      B: "Singleton only",
      C: "Decorator only",
      D: "Proxy only"
    },
    answer: "A",
    explanation: "Factory Method, Adapter, Facade, Observer, and Strategy all empower modules to interact via abstractions rather than direct instantiation."
  },
  {
    id: "lec4_q76",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Identification Questions",
    qNum: 76,
    question: "Which pattern is associated with \"One-to-many automatic notification\"?",
    options: {
      A: "Strategy",
      B: "Observer",
      C: "Adapter",
      D: "Factory Method"
    },
    answer: "B",
    explanation: "Observer broadcast notification."
  },
  {
    id: "lec4_q77",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Identification Questions",
    qNum: 77,
    question: "Which pattern is associated with \"Replace algorithms dynamically\"?",
    options: {
      A: "Strategy",
      B: "Singleton",
      C: "Facade",
      D: "Proxy"
    },
    answer: "A",
    explanation: "Strategy dynamic algorithm switching."
  },
  {
    id: "lec4_q78",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Identification Questions",
    qNum: 78,
    question: "Which pattern is associated with \"Hide complexity behind a single entry point\"?",
    options: {
      A: "Observer",
      B: "Facade",
      C: "Adapter",
      D: "Strategy"
    },
    answer: "B",
    explanation: "Facade simplifies complex subsystems."
  },
  {
    id: "lec4_q79",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Identification Questions",
    qNum: 79,
    question: "Which pattern is associated with \"Control access to another object\"?",
    options: {
      A: "Proxy",
      B: "Decorator",
      C: "Factory Method",
      D: "Singleton"
    },
    answer: "A",
    explanation: "Proxy intercepts and governs access."
  },
  {
    id: "lec4_q80",
    lectureId: 4,
    lectureTitle: "Lecture 4: Behavioral Patterns (Strategy & Observer)",
    lectureTitleAr: "المحاضرة 4: أنماط التصميم السلوكية (Strategy & Observer)",
    topic: "Pattern Identification Questions",
    qNum: 80,
    question: "Which pattern is associated with \"Add functionality at runtime\"?",
    options: {
      A: "Decorator",
      B: "Observer",
      C: "Strategy",
      D: "Adapter"
    },
    answer: "A",
    explanation: "Decorator dynamically wraps and extends object capabilities at runtime."
  }
];
