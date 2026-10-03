// Lecture 7: AP_Lec7 MCQ_Bank_7 (Dr. Baidaa Laalaa & Eng. Abdulmalik Hassan Alhaj)
// Total questions: 120
export const lec7Questions = [
  {
    id: "lec7_q1",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "API Fundamentals",
    qNum: 1,
    question: "What does API stand for?",
    options: {
      A: "Application Programming Interface",
      B: "Advanced Program Internet",
      C: "Application Private Integration",
      D: "Automated Programming Instruction"
    },
    answer: "A",
    explanation: "API stands for Application Programming Interface."
  },
  {
    id: "lec7_q2",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "API Fundamentals",
    qNum: 2,
    question: "An API allows two different software systems to:",
    options: {
      A: "Share the same database only",
      B: "Communicate and exchange data through a defined contract",
      C: "Use the same programming language",
      D: "Replace each other"
    },
    answer: "B",
    explanation: "An API provides a formal contract enabling disparate systems to exchange data and invoke functionality safely."
  },
  {
    id: "lec7_q3",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Restaurant Analogy",
    qNum: 3,
    question: "In the restaurant example, the waiter represents:",
    options: {
      A: "Database",
      B: "API",
      C: "Client",
      D: "Server"
    },
    answer: "B",
    explanation: "The waiter acts as the messenger/API, taking the customer's order to the kitchen and bringing back food."
  },
  {
    id: "lec7_q4",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Restaurant Analogy",
    qNum: 4,
    question: "The customer in the restaurant example represents:",
    options: {
      A: "System",
      B: "API",
      C: "Client",
      D: "Database"
    },
    answer: "C",
    explanation: "The customer represents the Client who initiates the request."
  },
  {
    id: "lec7_q5",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Modern API Architecture",
    qNum: 5,
    question: "Modern API architecture contains:",
    options: {
      A: "Client → API Layer → Application Layer → Infrastructure Layer → Domain Layer",
      B: "Database → Client → API",
      C: "UI → Database only",
      D: "Client → Database directly"
    },
    answer: "A",
    explanation: "Clean API architecture cascades from Client into API/Presentation, Application use cases, Infrastructure, and Domain."
  },
  {
    id: "lec7_q6",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "API Architecture Benefits",
    qNum: 6,
    question: "One benefit of API architecture is:",
    options: {
      A: "High coupling",
      B: "Maintainability",
      C: "More complexity",
      D: "Less flexibility"
    },
    answer: "B",
    explanation: "Decoupling clients from backends via well-defined APIs drastically improves maintainability and evolvability."
  },
  {
    id: "lec7_q7",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "API Usage",
    qNum: 7,
    question: "Which of the following is an example of API usage?",
    options: {
      A: "Payment API connecting online store with bank",
      B: "Writing code without communication",
      C: "Local file storage",
      D: "CPU management"
    },
    answer: "A",
    explanation: "An e-commerce store connecting to Stripe or PayPal payment gateways is a classic API integration."
  },
  {
    id: "lec7_q8",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "API Classification",
    qNum: 8,
    question: "APIs can be classified based on availability into:",
    options: {
      A: "Public, Private/Internal, Partner",
      B: "REST, SOAP, JSON",
      C: "Client, Server, Database",
      D: "HTTP, TCP, UDP"
    },
    answer: "A",
    explanation: "By audience/availability: Public (open to external devs), Private/Internal (inside org), Partner (shared with trusted partners)."
  },
  {
    id: "lec7_q9",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Public APIs",
    qNum: 9,
    question: "A Public API is:",
    options: {
      A: "Used only inside one organization",
      B: "Available for external developers",
      C: "Only for databases",
      D: "Hidden from users"
    },
    answer: "B",
    explanation: "Public APIs (Open APIs) are publicly exposed for any external third-party developers."
  },
  {
    id: "lec7_q10",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Public APIs",
    qNum: 10,
    question: "An example of Public API is:",
    options: {
      A: "Bank internal system",
      B: "Weather API",
      C: "Private company database",
      D: "Local application class"
    },
    answer: "B",
    explanation: "Public Weather APIs (e.g. OpenWeatherMap) are openly accessible to developers worldwide."
  },
  {
    id: "lec7_q11",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Public APIs Challenges",
    qNum: 11,
    question: "One challenge of Public APIs is:",
    options: {
      A: "No integration",
      B: "Security and rate limiting",
      C: "No external users",
      D: "No data exchange"
    },
    answer: "B",
    explanation: "Protecting public endpoints against DDoS, credential abuse, and managing quotas requires rate limiting and robust security."
  },
  {
    id: "lec7_q12",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Private APIs",
    qNum: 12,
    question: "Private/Internal API is used:",
    options: {
      A: "By external developers only",
      B: "Inside an organization",
      C: "Without security",
      D: "For public websites only"
    },
    answer: "B",
    explanation: "Internal APIs connect microservices and systems strictly within a company's private boundaries."
  },
  {
    id: "lec7_q13",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Partner APIs",
    qNum: 13,
    question: "Partner API is shared with:",
    options: {
      A: "Random users",
      B: "Trusted companies",
      C: "Operating system",
      D: "Database administrators only"
    },
    answer: "B",
    explanation: "Partner APIs are shared with specific external business partners under explicit contractual agreements."
  },
  {
    id: "lec7_q14",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "REST Architecture",
    qNum: 14,
    question: "REST stands for:",
    options: {
      A: "Remote Exchange System Technology",
      B: "Representational State Transfer",
      C: "Resource Software Transfer",
      D: "Real System Technology"
    },
    answer: "B",
    explanation: "REST stands for Representational State Transfer, introduced by Roy Fielding."
  },
  {
    id: "lec7_q15",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "REST Architecture",
    qNum: 15,
    question: "REST is:",
    options: {
      A: "A programming language",
      B: "An architectural style for building web APIs",
      C: "A database system",
      D: "A testing tool"
    },
    answer: "B",
    explanation: "REST is an architectural style (not a protocol or library) leveraging web standards like HTTP."
  },
  {
    id: "lec7_q16",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "REST Protocols",
    qNum: 16,
    question: "REST uses:",
    options: {
      A: "HTTP Protocol",
      B: "XML only",
      C: "TCP only",
      D: "SQL"
    },
    answer: "A",
    explanation: "REST relies natively on HTTP verbs, headers, status codes, and URI addressing."
  },
  {
    id: "lec7_q17",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "REST Formats",
    qNum: 17,
    question: "REST commonly uses which data format?",
    options: {
      A: "XML",
      B: "JSON",
      C: "HTML",
      D: "CSV only"
    },
    answer: "B",
    explanation: "JSON (JavaScript Object Notation) is the de facto standard format for REST payloads."
  },
  {
    id: "lec7_q18",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "REST Resources",
    qNum: 18,
    question: "In REST, everything is considered a:",
    options: {
      A: "Function",
      B: "Resource",
      C: "Database",
      D: "Class"
    },
    answer: "B",
    explanation: "In REST philosophy, any data or service is modeled and addressed as a 'Resource'."
  },
  {
    id: "lec7_q19",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "REST Resources",
    qNum: 19,
    question: "Examples of REST resources are:",
    options: {
      A: "/users /products /orders",
      B: "/database /server",
      C: "/computer /memory",
      D: "/files only"
    },
    answer: "A",
    explanation: "URIs represent nouns for resources: /api/users, /api/products, /api/orders."
  },
  {
    id: "lec7_q20",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Statelessness",
    qNum: 20,
    question: "Stateless communication means:",
    options: {
      A: "Server remembers all previous requests",
      B: "Each request contains all required information",
      C: "Client has no data",
      D: "Server stores sessions always"
    },
    answer: "B",
    explanation: "Statelessness requires that each request from client to server contains all the context needed to process it."
  },
  {
    id: "lec7_q21",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Client-Server Separation",
    qNum: 21,
    question: "Client-Server Separation in REST means:",
    options: {
      A: "Frontend and backend are independent",
      B: "Client and database are the same",
      C: "Server controls the user interface",
      D: "Client writes database queries"
    },
    answer: "A",
    explanation: "The UI/client and data storage/backend evolve independently without cross-concern leakage."
  },
  {
    id: "lec7_q22",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "SOAP Protocol",
    qNum: 22,
    question: "SOAP stands for:",
    options: {
      A: "Simple Object Access Protocol",
      B: "System Object Application Protocol",
      C: "Secure Online Access Protocol",
      D: "Software Object API Protocol"
    },
    answer: "A",
    explanation: "SOAP stands for Simple Object Access Protocol."
  },
  {
    id: "lec7_q23",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "SOAP Protocol",
    qNum: 23,
    question: "SOAP is considered:",
    options: {
      A: "A newer replacement for REST",
      B: "An older API protocol",
      C: "A database language",
      D: "A frontend framework"
    },
    answer: "B",
    explanation: "SOAP is an older, standardized enterprise messaging protocol pre-dating widespread REST adoption."
  },
  {
    id: "lec7_q24",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "SOAP Formats",
    qNum: 24,
    question: "SOAP data format is based on:",
    options: {
      A: "JSON",
      B: "XML",
      C: "HTML",
      D: "YAML"
    },
    answer: "B",
    explanation: "SOAP strictly packages all messages inside structured XML envelopes."
  },
  {
    id: "lec7_q25",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "SOAP Characteristics",
    qNum: 25,
    question: "One characteristic of SOAP is:",
    options: {
      A: "No standards",
      B: "Strict standards",
      C: "No security",
      D: "Flexible queries"
    },
    answer: "B",
    explanation: "SOAP follows strict, formal enterprise standards (WSDL, WS-Security, ACID transactions)."
  },
  {
    id: "lec7_q26",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "SOAP Security",
    qNum: 26,
    question: "SOAP provides:",
    options: {
      A: "Built-in security standards",
      B: "Only application-level security",
      C: "No security features",
      D: "Database security only"
    },
    answer: "A",
    explanation: "SOAP features built-in WS-Security standards for end-to-end message encryption and signing."
  },
  {
    id: "lec7_q27",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "SOAP Adoption",
    qNum: 27,
    question: "SOAP is commonly used in:",
    options: {
      A: "Banking and government systems",
      B: "Simple websites only",
      C: "Mobile games only",
      D: "Local files"
    },
    answer: "A",
    explanation: "Financial legacy systems, banking core networks, and government integrations frequently use SOAP."
  },
  {
    id: "lec7_q28",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "REST vs SOAP",
    qNum: 28,
    question: "Which statement is correct about REST vs SOAP?",
    options: {
      A: "REST uses JSON, SOAP uses XML",
      B: "REST uses XML, SOAP uses JSON",
      C: "Both use only XML",
      D: "Both use only JSON"
    },
    answer: "A",
    explanation: "Typically, REST uses lightweight JSON payloads, whereas SOAP relies on heavyweight XML."
  },
  {
    id: "lec7_q29",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "REST vs SOAP",
    qNum: 29,
    question: "Compared with SOAP, REST is generally:",
    options: {
      A: "More complex",
      B: "Simpler",
      C: "Slower",
      D: "Less flexible"
    },
    answer: "B",
    explanation: "REST is vastly simpler to implement, inspect, and consume across browsers and mobile devices."
  },
  {
    id: "lec7_q30",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "REST Security",
    qNum: 30,
    question: "REST security is mainly handled at:",
    options: {
      A: "Application level",
      B: "Hardware level",
      C: "Database level only",
      D: "Operating system level"
    },
    answer: "A",
    explanation: "REST relies on application/transport mechanisms like HTTPS (TLS) and JWT/OAuth tokens."
  },
  {
    id: "lec7_q31",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "GraphQL",
    qNum: 31,
    question: "GraphQL allows clients to:",
    options: {
      A: "Request exactly the required data",
      B: "Always receive all data",
      C: "Use XML only",
      D: "Avoid APIs"
    },
    answer: "A",
    explanation: "GraphQL allows the frontend to specify exactly which fields it needs in a single query."
  },
  {
    id: "lec7_q32",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "REST vs GraphQL",
    qNum: 32,
    question: "A problem in REST compared with GraphQL is:",
    options: {
      A: "Flexible queries",
      B: "Over-fetching possibility",
      C: "No endpoints",
      D: "No caching"
    },
    answer: "B",
    explanation: "REST endpoints often return fixed payloads with surplus fields (over-fetching) or require multiple calls (under-fetching)."
  },
  {
    id: "lec7_q33",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "REST Endpoints",
    qNum: 33,
    question: "REST uses:",
    options: {
      A: "Fixed endpoints",
      B: "Flexible queries only",
      C: "Protobuf contracts",
      D: "Binary messages"
    },
    answer: "A",
    explanation: "REST operates through multiple fixed URL routes (e.g. /users, /orders)."
  },
  {
    id: "lec7_q34",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "GraphQL Queries",
    qNum: 34,
    question: "GraphQL data requests are:",
    options: {
      A: "Fixed endpoints",
      B: "Flexible queries",
      C: "XML messages",
      D: "HTTP methods only"
    },
    answer: "B",
    explanation: "GraphQL uses declarative, flexible queries sent typically to a single endpoint (/graphql)."
  },
  {
    id: "lec7_q35",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "API Learning Curve",
    qNum: 35,
    question: "Which one is easier to learn according to the comparison?",
    options: {
      A: "GraphQL",
      B: "REST",
      C: "Both are equal",
      D: "Neither"
    },
    answer: "B",
    explanation: "REST has a much gentler learning curve and standard HTTP semantics compared to GraphQL schema/resolvers."
  },
  {
    id: "lec7_q36",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "gRPC",
    qNum: 36,
    question: "gRPC stands for:",
    options: {
      A: "Google Remote Procedure Call",
      B: "Global Request Processing Code",
      C: "Google Resource Protocol",
      D: "Global Request Processing Code"
    },
    answer: "A",
    explanation: "gRPC stands for Google Remote Procedure Call."
  },
  {
    id: "lec7_q37",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "gRPC",
    qNum: 37,
    question: "gRPC is designed for:",
    options: {
      A: "High-performance APIs",
      B: "Database design",
      C: "UI development",
      D: "File compression only"
    },
    answer: "A",
    explanation: "gRPC is engineered for lightning-fast, low-latency inter-service communication."
  },
  {
    id: "lec7_q38",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "gRPC Protocols",
    qNum: 38,
    question: "gRPC uses which communication protocol?",
    options: {
      A: "HTTP/1",
      B: "HTTP/2",
      C: "FTP",
      D: "SMTP"
    },
    answer: "B",
    explanation: "gRPC is built upon HTTP/2 for multiplexing, streaming, and header compression."
  },
  {
    id: "lec7_q39",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "gRPC Formats",
    qNum: 39,
    question: "gRPC uses which data format?",
    options: {
      A: "JSON",
      B: "XML",
      C: "Protocol Buffers (Protobuf)",
      D: "HTML"
    },
    answer: "C",
    explanation: "gRPC uses binary Protocol Buffers (Protobuf) for compact serialization."
  },
  {
    id: "lec7_q40",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "gRPC Performance",
    qNum: 40,
    question: "Binary serialization in gRPC provides:",
    options: {
      A: "Faster communication",
      B: "More HTML pages",
      C: "Database storage",
      D: "User authentication"
    },
    answer: "A",
    explanation: "Binary Protobuf payloads are significantly smaller and faster to serialize/deserialize than text JSON."
  },
  {
    id: "lec7_q41",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "gRPC Contracts",
    qNum: 41,
    question: "In gRPC, communication is based on:",
    options: {
      A: "A predefined contract using .proto file",
      B: "SQL tables",
      C: "JSON only",
      D: "HTML forms"
    },
    answer: "A",
    explanation: "Services and messages are defined upfront in strict .proto contract files."
  },
  {
    id: "lec7_q42",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "REST vs gRPC",
    qNum: 42,
    question: "REST API usually sends:",
    options: {
      A: "HTTP requests and JSON responses",
      B: "Binary messages only",
      C: "XML contracts",
      D: "SQL commands"
    },
    answer: "A",
    explanation: "Standard REST sends HTTP text requests and receives formatted JSON responses."
  },
  {
    id: "lec7_q43",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "gRPC Mechanics",
    qNum: 43,
    question: "gRPC client calls:",
    options: {
      A: "A remote method directly",
      B: "A database table",
      C: "An HTML page",
      D: "A REST endpoint only"
    },
    answer: "A",
    explanation: "gRPC gives the illusion of calling a local method on a remote server directly (RPC)."
  },
  {
    id: "lec7_q44",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "gRPC Contracts",
    qNum: 44,
    question: "The file used to define gRPC contracts is:",
    options: {
      A: ".json",
      B: ".xml",
      C: ".proto",
      D: ".html"
    },
    answer: "C",
    explanation: "Protobuf interface definition files use the .proto extension."
  },
  {
    id: "lec7_q45",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "REST Flow",
    qNum: 45,
    question: "In REST architecture, the flow is:",
    options: {
      A: "Controller → JSON DTO → Service",
      B: "Service → Database → Controller",
      C: "Client → SQL",
      D: "Database → UI"
    },
    answer: "A",
    explanation: "The Controller receives input, maps to DTO, and invokes application services."
  },
  {
    id: "lec7_q46",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Methods - GET",
    qNum: 46,
    question: "Which HTTP method is used to retrieve data from the server?",
    options: {
      A: "POST",
      B: "GET",
      C: "PUT",
      D: "DELETE"
    },
    answer: "B",
    explanation: "GET retrieves representations of resources without mutating server state."
  },
  {
    id: "lec7_q47",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Methods - GET",
    qNum: 47,
    question: "The purpose of GET method is:",
    options: {
      A: "Create new resource",
      B: "Delete resource",
      C: "Retrieve data",
      D: "Replace resource"
    },
    answer: "C",
    explanation: "GET is purely for reading and querying data."
  },
  {
    id: "lec7_q48",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Methods - GET",
    qNum: 48,
    question: "Example of GET request is:",
    options: {
      A: "GET /api/users/1",
      B: "POST /api/users",
      C: "DELETE /api/users/1",
      D: "PATCH /api/users/1"
    },
    answer: "A",
    explanation: "GET /api/users/1 fetches user #1."
  },
  {
    id: "lec7_q49",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Methods - POST",
    qNum: 49,
    question: "Which HTTP method is used to create new data?",
    options: {
      A: "GET",
      B: "POST",
      C: "PUT",
      D: "PATCH"
    },
    answer: "B",
    explanation: "POST submits data to create a new subordinate resource."
  },
  {
    id: "lec7_q50",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Methods - POST",
    qNum: 50,
    question: "POST request is commonly used for:",
    options: {
      A: "Registering a new user",
      B: "Retrieving a user profile",
      C: "Deleting a user",
      D: "Reading data only"
    },
    answer: "A",
    explanation: "User registration, creating orders, and submitting forms use POST."
  },
  {
    id: "lec7_q51",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Methods - PUT",
    qNum: 51,
    question: "Which HTTP method replaces an entire resource?",
    options: {
      A: "PATCH",
      B: "PUT",
      C: "GET",
      D: "DELETE"
    },
    answer: "B",
    explanation: "PUT replaces the entire targeted resource with the uploaded payload."
  },
  {
    id: "lec7_q52",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Methods - PUT",
    qNum: 52,
    question: "PUT is used when:",
    options: {
      A: "Updating all resource information",
      B: "Updating only one field",
      C: "Reading data",
      D: "Removing data"
    },
    answer: "A",
    explanation: "PUT updates or replaces all fields of a resource."
  },
  {
    id: "lec7_q53",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Methods - PATCH",
    qNum: 53,
    question: "Which HTTP method updates only specific fields?",
    options: {
      A: "PUT",
      B: "PATCH",
      C: "POST",
      D: "GET"
    },
    answer: "B",
    explanation: "PATCH applies partial modifications to a resource."
  },
  {
    id: "lec7_q54",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Methods - PATCH",
    qNum: 54,
    question: "Changing only the user's email is an example of:",
    options: {
      A: "GET",
      B: "PUT",
      C: "PATCH",
      D: "DELETE"
    },
    answer: "C",
    explanation: "Modifying only a single attribute (like email) without sending the full object is PATCH."
  },
  {
    id: "lec7_q55",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Methods - DELETE",
    qNum: 55,
    question: "Which HTTP method removes a resource?",
    options: {
      A: "DELETE",
      B: "POST",
      C: "PATCH",
      D: "PUT"
    },
    answer: "A",
    explanation: "DELETE instructs the server to delete the specified resource."
  },
  {
    id: "lec7_q56",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Status Codes",
    qNum: 56,
    question: "DELETE /api/users/1 returns:",
    options: {
      A: "201 Created",
      B: "204 No Content",
      C: "400 Bad Request",
      D: "500 Error"
    },
    answer: "B",
    explanation: "Successful DELETE typically returns 204 No Content (or 200 OK)."
  },
  {
    id: "lec7_q57",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Status Codes Categories",
    qNum: 57,
    question: "HTTP status code category 2xx means:",
    options: {
      A: "Client Error",
      B: "Success",
      C: "Server Error",
      D: "Redirection"
    },
    answer: "B",
    explanation: "2xx codes signify Success."
  },
  {
    id: "lec7_q58",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Status Codes Categories",
    qNum: 58,
    question: "HTTP status code category 4xx indicates:",
    options: {
      A: "Server failure",
      B: "Client error",
      C: "Successful request",
      D: "Redirection"
    },
    answer: "B",
    explanation: "4xx codes indicate Client Error (bad data, unauthorized, not found)."
  },
  {
    id: "lec7_q59",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Status Codes Categories",
    qNum: 59,
    question: "HTTP status code category 5xx indicates:",
    options: {
      A: "Client sent invalid request",
      B: "Server failed while processing a valid request",
      C: "Successful creation",
      D: "Additional action required"
    },
    answer: "B",
    explanation: "5xx codes indicate unexpected Server Error/failure."
  },
  {
    id: "lec7_q60",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Status Codes Categories",
    qNum: 60,
    question: "The meaning of 1xx status codes is:",
    options: {
      A: "Informational",
      B: "Success",
      C: "Client Error",
      D: "Server Error"
    },
    answer: "A",
    explanation: "1xx codes represent Informational responses."
  },
  {
    id: "lec7_q61",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Status Code 200",
    qNum: 61,
    question: "200 OK means:",
    options: {
      A: "Data retrieved successfully",
      B: "New resource created",
      C: "Resource deleted",
      D: "User unauthorized"
    },
    answer: "A",
    explanation: "200 OK confirms standard successful execution."
  },
  {
    id: "lec7_q62",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Status Code 201",
    qNum: 62,
    question: "201 Created is used when:",
    options: {
      A: "A new resource is created",
      B: "Data is deleted",
      C: "Request fails",
      D: "Server is unavailable"
    },
    answer: "A",
    explanation: "201 Created confirms that a new resource has been successfully instantiated on the server."
  },
  {
    id: "lec7_q63",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Status Code 204",
    qNum: 63,
    question: "204 No Content is commonly used for:",
    options: {
      A: "Successful delete operation",
      B: "User authentication",
      C: "Creating a resource",
      D: "Invalid request"
    },
    answer: "A",
    explanation: "204 confirms success without returning any response body (standard for deletions)."
  },
  {
    id: "lec7_q64",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Status Code 400",
    qNum: 64,
    question: "400 Bad Request means:",
    options: {
      A: "User is not authenticated",
      B: "Invalid request from client",
      C: "Server failure",
      D: "Resource created"
    },
    answer: "B",
    explanation: "400 indicates client syntax errors, missing parameters, or validation failures."
  },
  {
    id: "lec7_q65",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Status Code 401",
    qNum: 65,
    question: "401 Unauthorized means:",
    options: {
      A: "User is authenticated but not allowed",
      B: "User is not authenticated",
      C: "Resource does not exist",
      D: "Server error"
    },
    answer: "B",
    explanation: "401 means authentication is missing or invalid (no valid token/credentials supplied)."
  },
  {
    id: "lec7_q66",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Status Code 403",
    qNum: 66,
    question: "403 Forbidden means:",
    options: {
      A: "User authenticated but not allowed",
      B: "User not authenticated",
      C: "Resource deleted",
      D: "Server unavailable"
    },
    answer: "A",
    explanation: "403 means the user identity is known (authenticated), but they lack permissions (authorization failed)."
  },
  {
    id: "lec7_q67",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Status Code 404",
    qNum: 67,
    question: "404 Not Found means:",
    options: {
      A: "Duplicate data",
      B: "Resource does not exist",
      C: "Server crashed",
      D: "Request succeeded"
    },
    answer: "B",
    explanation: "404 signifies that the requested resource URI does not exist."
  },
  {
    id: "lec7_q68",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Status Code 409",
    qNum: 68,
    question: "409 Conflict is used for:",
    options: {
      A: "Duplicate or conflicting data",
      B: "Authentication failure",
      C: "Successful request",
      D: "Server unavailable"
    },
    answer: "A",
    explanation: "409 indicates a conflict with current server state (e.g. email already registered)."
  },
  {
    id: "lec7_q69",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Status Code 500",
    qNum: 69,
    question: "500 Internal Server Error means:",
    options: {
      A: "Invalid client request",
      B: "Unexpected server-side failure",
      C: "Missing resource",
      D: "Successful operation"
    },
    answer: "B",
    explanation: "500 indicates an unhandled exception or crash on the server."
  },
  {
    id: "lec7_q70",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTP Status Code 503",
    qNum: 70,
    question: "503 Service Unavailable means:",
    options: {
      A: "Server temporarily unavailable",
      B: "User unauthorized",
      C: "Resource created",
      D: "Invalid request"
    },
    answer: "A",
    explanation: "503 indicates temporary overload or maintenance."
  },
  {
    id: "lec7_q71",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "API Error Handling",
    qNum: 71,
    question: "A good API should return:",
    options: {
      A: "Database errors directly",
      B: "Standard error responses",
      C: "SQL exceptions to users",
      D: "Internal code details"
    },
    answer: "B",
    explanation: "APIs must return predictable, standardized error bodies (e.g. RFC 7807 Problem Details)."
  },
  {
    id: "lec7_q72",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "API Information Disclosure",
    qNum: 72,
    question: "Returning SQL Exception details to the client causes:",
    options: {
      A: "Better performance",
      B: "Exposing internal details",
      C: "Higher security",
      D: "Faster requests"
    },
    answer: "B",
    explanation: "Leaking raw stack traces and SQL errors exposes schema internals to attackers."
  },
  {
    id: "lec7_q73",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "API Error Format",
    qNum: 73,
    question: "Which is a better API error response format?",
    options: {
      A: "Standardized JSON error object with message and status code",
      B: "Raw HTML stack trace",
      C: "Empty body with no status code",
      D: "Database log dump"
    },
    answer: "A",
    explanation: "Consistent JSON error payloads facilitate reliable client-side parsing."
  },
  {
    id: "lec7_q74",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Authentication Problems",
    qNum: 74,
    question: "API security threat caused by weak passwords is related to:",
    options: {
      A: "Authentication Problems",
      B: "Data Formatting",
      C: "API Versioning",
      D: "Documentation"
    },
    answer: "A",
    explanation: "Weak passwords compromise user identity verification (Authentication)."
  },
  {
    id: "lec7_q75",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Authentication Mechanisms",
    qNum: 75,
    question: "Examples of protection against authentication problems include:",
    options: {
      A: "JWT, OAuth, MFA",
      B: "SQL, XML, JSON",
      C: "GET, POST, PUT",
      D: "Swagger only"
    },
    answer: "A",
    explanation: "Multi-Factor Authentication (MFA), JWT tokens, and OAuth 2.0 guard authentication."
  },
  {
    id: "lec7_q76",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Authorization Problems",
    qNum: 76,
    question: "Authorization problems occur when:",
    options: {
      A: "User accesses resources they are not allowed to access",
      B: "Password is encrypted",
      C: "API returns JSON",
      D: "Server creates a token"
    },
    answer: "A",
    explanation: "Authorization verifies permissions; unauthorized access violates authorization rules."
  },
  {
    id: "lec7_q77",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Authorization Examples",
    qNum: 77,
    question: "A user accessing Admin APIs without permission is an example of:",
    options: {
      A: "Authentication success",
      B: "Authorization problem",
      C: "Data formatting issue",
      D: "API versioning"
    },
    answer: "B",
    explanation: "A standard user reaching admin endpoints represents Broken Object/Function Level Authorization."
  },
  {
    id: "lec7_q78",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Authorization Protection",
    qNum: 78,
    question: "Protection against authorization problems includes:",
    options: {
      A: "Roles and Policies",
      B: "XML and JSON",
      C: "HTTP methods",
      D: "Database tables"
    },
    answer: "A",
    explanation: "Role-Based Access Control (RBAC) and policy-based authorization enforce boundaries."
  },
  {
    id: "lec7_q79",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Injection Attacks",
    qNum: 79,
    question: "SQL Injection is an example of:",
    options: {
      A: "Injection Attacks",
      B: "Authentication",
      C: "API Documentation",
      D: "Versioning"
    },
    answer: "A",
    explanation: "SQL Injection is a dangerous Injection Attack vulnerability."
  },
  {
    id: "lec7_q80",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "SQL Injection Defense",
    qNum: 80,
    question: "Protection against SQL Injection includes:",
    options: {
      A: "Parameterized queries and ORM",
      B: "Returning passwords",
      C: "Disabling validation",
      D: "Removing security"
    },
    answer: "A",
    explanation: "Parameterized queries, prepared statements, and modern ORMs (EF Core) eliminate SQL injection."
  },
  {
    id: "lec7_q81",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Data Exposure",
    qNum: 81,
    question: "Returning passwords in API responses causes:",
    options: {
      A: "Data Exposure",
      B: "Better security",
      C: "Faster communication",
      D: "API versioning"
    },
    answer: "A",
    explanation: "Sensitive data exposure leaks confidential user credentials."
  },
  {
    id: "lec7_q82",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Data Exposure Defense",
    qNum: 82,
    question: "Protection against Data Exposure includes:",
    options: {
      A: "DTO and Data filtering",
      B: "SQL Exceptions",
      C: "Direct database access",
      D: "Removing authentication"
    },
    answer: "A",
    explanation: "Using DTOs filters out internal sensitive columns (password hashes, salts) before serialization."
  },
  {
    id: "lec7_q83",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Auth Questions",
    qNum: 83,
    question: "Authentication answers the question:",
    options: {
      A: "What can you do?",
      B: "Who are you?",
      C: "Where is the server?",
      D: "What database is used?"
    },
    answer: "B",
    explanation: "Authentication proves your identity ('Who are you?')."
  },
  {
    id: "lec7_q84",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Auth Questions",
    qNum: 84,
    question: "Authorization answers the question:",
    options: {
      A: "Who are you?",
      B: "What can you do?",
      C: "What is your password?",
      D: "What API version?"
    },
    answer: "B",
    explanation: "Authorization checks your permissions ('What are you permitted to do?')."
  },
  {
    id: "lec7_q85",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Password Attacks",
    qNum: 85,
    question: "Username and password authentication problems include:",
    options: {
      A: "Password theft and brute force attacks",
      B: "JSON errors only",
      C: "API documentation problems",
      D: "Version conflicts"
    },
    answer: "A",
    explanation: "Credential stuffing, brute-forcing, and rainbow table password theft threaten passwords."
  },
  {
    id: "lec7_q86",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Password Security",
    qNum: 86,
    question: "Solutions for password security include:",
    options: {
      A: "Hashing, Salt, MFA",
      B: "XML, JSON, HTML",
      C: "GET, POST, DELETE",
      D: "Swagger, Postman"
    },
    answer: "A",
    explanation: "Cryptographic hashing (bcrypt, Argon2), unique salts, and MFA protect passwords."
  },
  {
    id: "lec7_q87",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Password Storage",
    qNum: 87,
    question: "Passwords should be stored as:",
    options: {
      A: "Plain text",
      B: "Hash values",
      C: "User names",
      D: "JSON objects"
    },
    answer: "B",
    explanation: "Never store plaintext; always store salted cryptographic hash values."
  },
  {
    id: "lec7_q88",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Password Hashing Process",
    qNum: 88,
    question: "Password hashing process is:",
    options: {
      A: "Password → Hash Algorithm → Stored Hash",
      B: "Password → Database → User",
      C: "User → API → Password",
      D: "Token → Password → Hash"
    },
    answer: "A",
    explanation: "Plain password passes through a one-way hash algorithm resulting in the stored hash."
  },
  {
    id: "lec7_q89",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "JWT",
    qNum: 89,
    question: "JWT stands for:",
    options: {
      A: "Java Web Token",
      B: "JSON Web Token",
      C: "JSON Web Transfer",
      D: "Java Wireless Technology"
    },
    answer: "B",
    explanation: "JWT stands for JSON Web Token."
  },
  {
    id: "lec7_q90",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "JWT Flow",
    qNum: 90,
    question: "JWT authentication flow starts with:",
    options: {
      A: "Delete request",
      B: "Login",
      C: "API documentation",
      D: "Database update"
    },
    answer: "B",
    explanation: "Client initiates by sending login credentials to the auth endpoint."
  },
  {
    id: "lec7_q91",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "JWT Flow",
    qNum: 91,
    question: "After validating the user, the server:",
    options: {
      A: "Deletes the account",
      B: "Generates JWT token",
      C: "Returns SQL code",
      D: "Changes API version"
    },
    answer: "B",
    explanation: "The authentication server mints and signs a signed JWT token."
  },
  {
    id: "lec7_q92",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "JWT Header",
    qNum: 92,
    question: "The client sends JWT token using:",
    options: {
      A: "Authorization: Bearer Token",
      B: "Password header",
      C: "SQL command",
      D: "XML file"
    },
    answer: "A",
    explanation: "The standard header is: Authorization: Bearer <token>."
  },
  {
    id: "lec7_q93",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "OAuth 2.0",
    qNum: 93,
    question: "OAuth 2.0 is:",
    options: {
      A: "An authorization framework",
      B: "A database system",
      C: "An HTTP method",
      D: "A programming language"
    },
    answer: "A",
    explanation: "OAuth 2.0 is an industry-standard delegation and authorization framework."
  },
  {
    id: "lec7_q94",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "OAuth 2.0 Examples",
    qNum: 94,
    question: "An example of OAuth usage is:",
    options: {
      A: "Login with Google",
      B: "SQL Injection",
      C: "Password storage",
      D: "API deletion"
    },
    answer: "A",
    explanation: "'Sign in with Google / GitHub' utilizes OAuth 2.0 / OpenID Connect."
  },
  {
    id: "lec7_q95",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "OAuth 2.0 Tokens",
    qNum: 95,
    question: "OAuth allows applications to receive:",
    options: {
      A: "Passwords",
      B: "Access Tokens",
      C: "SQL Queries",
      D: "Database tables"
    },
    answer: "B",
    explanation: "Applications receive scoped Access Tokens without ever seeing user credentials."
  },
  {
    id: "lec7_q96",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "HTTPS",
    qNum: 96,
    question: "HTTPS is used in API security to:",
    options: {
      A: "Create database tables",
      B: "Encrypt communication",
      C: "Generate SQL queries",
      D: "Replace authentication"
    },
    answer: "B",
    explanation: "TLS/HTTPS encrypts the HTTP transport to prevent eavesdropping and man-in-the-middle attacks."
  },
  {
    id: "lec7_q97",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "API Best Practices",
    qNum: 97,
    question: "Which of the following is an API Security Best Practice?",
    options: {
      A: "Disable validation",
      B: "Use HTTPS",
      C: "Return passwords",
      D: "Store plain passwords"
    },
    answer: "B",
    explanation: "Enforcing HTTPS everywhere is a non-negotiable security foundation."
  },
  {
    id: "lec7_q98",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Authentication Best Practices",
    qNum: 98,
    question: "Authentication best practices include using:",
    options: {
      A: "JWT / OAuth",
      B: "XML only",
      C: "SQL only",
      D: "HTML forms only"
    },
    answer: "A",
    explanation: "Token-based architectures (JWT and OAuth 2.0) are standard practice."
  },
  {
    id: "lec7_q99",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Authorization Best Practices",
    qNum: 99,
    question: "Authorization best practices include:",
    options: {
      A: "Roles and policies",
      B: "Password storage",
      C: "JSON formatting",
      D: "API deletion"
    },
    answer: "A",
    explanation: "Enforcing clear Role-Based and Claims/Policy-Based checks on every controller."
  },
  {
    id: "lec7_q100",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Input Validation",
    qNum: 100,
    question: "Input Validation is important because it helps protect against:",
    options: {
      A: "Invalid or harmful input",
      B: "API documentation",
      C: "Version changes",
      D: "Resource naming"
    },
    answer: "A",
    explanation: "Validating input blocks malicious payloads (XSS, injections) and data corruption."
  },
  {
    id: "lec7_q101",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Rate Limiting",
    qNum: 101,
    question: "Rate Limiting controls:",
    options: {
      A: "Number of requests allowed",
      B: "Database size",
      C: "Password length only",
      D: "API format"
    },
    answer: "A",
    explanation: "Rate limiting caps the number of requests a client can make in a given timeframe."
  },
  {
    id: "lec7_q102",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Rate Limiting",
    qNum: 102,
    question: "Example of Rate Limiting:",
    options: {
      A: "100 requests/minute",
      B: "100 databases/hour",
      C: "100 passwords/day",
      D: "100 controllers"
    },
    answer: "A",
    explanation: "e.g., 100 requests per minute per IP address."
  },
  {
    id: "lec7_q103",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Logging and Monitoring",
    qNum: 103,
    question: "Logging and Monitoring are used for:",
    options: {
      A: "Tracking API activities",
      B: "Creating entities",
      C: "Replacing HTTP",
      D: "Removing security"
    },
    answer: "A",
    explanation: "Logging and telemetry track usage, alert anomalies, and debug issues."
  },
  {
    id: "lec7_q104",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "API Versioning",
    qNum: 104,
    question: "API Versioning is needed because:",
    options: {
      A: "APIs change over time",
      B: "APIs never change",
      C: "Databases cannot update",
      D: "HTTP methods disappear"
    },
    answer: "A",
    explanation: "Business requirements evolve, necessitating non-breaking versioned upgrades."
  },
  {
    id: "lec7_q105",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "API Versioning",
    qNum: 105,
    question: "An example of API Versioning is:",
    options: {
      A: "/api/v1/users",
      B: "/database/users",
      C: "/users/password",
      D: "/api/sql/users"
    },
    answer: "A",
    explanation: "URI path versioning: /api/v1/users vs /api/v2/users."
  },
  {
    id: "lec7_q106",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "API Versioning",
    qNum: 106,
    question: "The main benefits of API Versioning are:",
    options: {
      A: "Backward compatibility and safe updates",
      B: "More database errors",
      C: "Removing security",
      D: "Increasing coupling"
    },
    answer: "A",
    explanation: "Versioning protects existing client integrations while deploying new features."
  },
  {
    id: "lec7_q107",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "API as a Contract",
    qNum: 107,
    question: "API is considered a:",
    options: {
      A: "Contract",
      B: "Database",
      C: "Programming language",
      D: "Framework"
    },
    answer: "A",
    explanation: "An API acts as a binding contract defining expectations between client and server."
  },
  {
    id: "lec7_q108",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Swagger / OpenAPI",
    qNum: 108,
    question: "Swagger/OpenAPI provides:",
    options: {
      A: "Endpoints, parameters, examples, testing",
      B: "Database tables only",
      C: "Password storage",
      D: "Server hardware"
    },
    answer: "A",
    explanation: "Swagger generates interactive documentation and sandbox testing for API routes."
  },
  {
    id: "lec7_q109",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Swagger / OpenAPI",
    qNum: 109,
    question: "Which tool is used for API documentation?",
    options: {
      A: "Swagger / OpenAPI",
      B: "SQL Server",
      C: "Visual Studio only",
      D: "Windows Explorer"
    },
    answer: "A",
    explanation: "Swagger (OpenAPI standard) is the industry standard for API documentation."
  },
  {
    id: "lec7_q110",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Postman",
    qNum: 110,
    question: "Postman is used for:",
    options: {
      A: "Testing API requests",
      B: "Creating databases",
      C: "Designing UI",
      D: "Compiling code"
    },
    answer: "A",
    explanation: "Postman is widely used to construct, test, and debug API requests."
  },
  {
    id: "lec7_q111",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Postman",
    qNum: 111,
    question: "Postman can be used for:",
    options: {
      A: "Testing requests and automation",
      B: "Database migration only",
      C: "Creating classes",
      D: "Writing HTML pages"
    },
    answer: "A",
    explanation: "Postman supports automated test collections, runners, and CI/CD integrations."
  },
  {
    id: "lec7_q112",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Testing Types",
    qNum: 112,
    question: "Unit Testing tests:",
    options: {
      A: "Logic",
      B: "Complete API system",
      C: "Database server only",
      D: "User interface only"
    },
    answer: "A",
    explanation: "Unit testing validates individual business logic routines in complete isolation."
  },
  {
    id: "lec7_q113",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "Testing Types",
    qNum: 113,
    question: "Integration Testing tests:",
    options: {
      A: "Complete API",
      B: "Single variable",
      C: "Password hash only",
      D: "JSON format only"
    },
    answer: "A",
    explanation: "Integration tests verify how multiple layers (Controller, DB, Service) work together."
  },
  {
    id: "lec7_q114",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "JWT Student Example",
    qNum: 114,
    question: "In JWT authentication example, the first step is:",
    options: {
      A: "User Login",
      B: "Create Student",
      C: "Verify Token",
      D: "Delete User"
    },
    answer: "A",
    explanation: "The user must first log in with valid credentials."
  },
  {
    id: "lec7_q115",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "JWT Student Example",
    qNum: 115,
    question: "During login, the client sends:",
    options: {
      A: "Username and password",
      B: "JWT token only",
      C: "Database query",
      D: "API documentation"
    },
    answer: "A",
    explanation: "Login delivers username and password to the authentication service."
  },
  {
    id: "lec7_q116",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "JWT Student Example",
    qNum: 116,
    question: "The server generates JWT token after:",
    options: {
      A: "Validating user credentials",
      B: "Deleting the account",
      C: "Changing API version",
      D: "Creating database tables"
    },
    answer: "A",
    explanation: "Once credentials pass verification, the token is signed and returned."
  },
  {
    id: "lec7_q117",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "JWT Student Example",
    qNum: 117,
    question: "After receiving JWT, the client:",
    options: {
      A: "Stores the token",
      B: "Deletes the token",
      C: "Sends password everywhere",
      D: "Changes the database"
    },
    answer: "A",
    explanation: "Client caches the token in local storage or secure HTTP-only cookies."
  },
  {
    id: "lec7_q118",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "JWT Student Example",
    qNum: 118,
    question: "To access a protected API, the client sends:",
    options: {
      A: "Authorization: Bearer Token",
      B: "SQL Password",
      C: "XML File",
      D: "Database Table"
    },
    answer: "A",
    explanation: "Sends Authorization: Bearer <JWT> in the request headers."
  },
  {
    id: "lec7_q119",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "JWT Verification",
    qNum: 119,
    question: "When verifying JWT, the server checks:",
    options: {
      A: "Token presence, validity, expiration, permission",
      B: "Only username",
      C: "Only password",
      D: "Database name"
    },
    answer: "A",
    explanation: "Validates cryptographic signature, expiry date, issuer, and user permission claims."
  },
  {
    id: "lec7_q120",
    lectureId: 7,
    lectureTitle: "Lecture 7: Web APIs, REST, GraphQL, gRPC & API Security",
    lectureTitleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    topic: "JWT Student Example",
    qNum: 120,
    question: "If JWT verification succeeds, creating a student returns:",
    options: {
      A: "201 Created",
      B: "404 Not Found",
      C: "500 Error",
      D: "400 Bad Request"
    },
    answer: "A",
    explanation: "Successful authorized student creation returns 201 Created."
  }
];
