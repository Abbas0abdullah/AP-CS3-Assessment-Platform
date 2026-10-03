// Lecture 9: AP_Lec9 MCQ_Bank_9 (Dr. Baidaa Laalaa & Eng. Abdulmalik Hassan Alhaj)
// Total questions: 100
export const lec9Questions = [
  {
    id: "lec9_q1",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Lecture Overview",
    qNum: 1,
    question: "The main topics covered in Lecture 9 include:",
    options: {
      A: "Databases and Operating Systems only",
      B: "Microservices, Webhooks, AI Engineering, RAG, and Automation",
      C: "Computer Networks only",
      D: "Frontend Design only"
    },
    answer: "B",
    explanation: "Lecture 9 explores modern distributed architectures, Microservices, Webhooks, AI Engineering, RAG, and Workflow Automation."
  },
  {
    id: "lec9_q2",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Webhooks",
    qNum: 2,
    question: "A Webhook is:",
    options: {
      A: "A database table",
      B: "An HTTP endpoint that receives event notifications",
      C: "A programming language",
      D: "A type of database"
    },
    answer: "B",
    explanation: "A Webhook is an HTTP callback endpoint where an external system sends notifications as events occur."
  },
  {
    id: "lec9_q3",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "WhatsApp Webhook Example",
    qNum: 3,
    question: "In the WhatsApp example, Meta notifies our application using:",
    options: {
      A: "SQL Query",
      B: "HTTP POST Request",
      C: "FTP Connection",
      D: "Local File"
    },
    answer: "B",
    explanation: "Meta pushes incoming chat message payloads via an HTTP POST request to our registered webhook endpoint."
  },
  {
    id: "lec9_q4",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Webhook Purpose",
    qNum: 4,
    question: "The main purpose of a Webhook is to:",
    options: {
      A: "Tell our system that a new event happened",
      B: "Store database records",
      C: "Generate AI models",
      D: "Replace APIs completely"
    },
    answer: "A",
    explanation: "Webhooks deliver real-time reactive event notifications from external systems without polling."
  },
  {
    id: "lec9_q5",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "WhatsApp Webhook Flow",
    qNum: 5,
    question: "The flow of receiving a WhatsApp message is:",
    options: {
      A: "Customer → Meta → Webhook → Application",
      B: "Application → Customer → Database",
      C: "Database → Meta → Customer",
      D: "Customer → Database directly"
    },
    answer: "A",
    explanation: "Customer sends message -> Meta receives it -> Meta triggers our Webhook -> Application processes it."
  },
  {
    id: "lec9_q6",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "C# Webhook Endpoint",
    qNum: 6,
    question: "The C# Webhook endpoint example receives:",
    options: {
      A: "GET /api/users",
      B: "POST /api/webhooks/whatsapp",
      C: "DELETE /api/messages",
      D: "PUT /api/products"
    },
    answer: "B",
    explanation: "POST /api/webhooks/whatsapp is the webhook callback route."
  },
  {
    id: "lec9_q7",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "API vs Webhook",
    qNum: 7,
    question: "The difference between API and Webhook is:",
    options: {
      A: "API calls another system, Webhook receives notifications from another system",
      B: "API and Webhook are exactly the same",
      C: "Webhook always sends requests first",
      D: "API cannot exchange data"
    },
    answer: "A",
    explanation: "API: Pull/Polling model (I ask you). Webhook: Push/Reactive model (You notify me)."
  },
  {
    id: "lec9_q8",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "API vs Webhook Rule",
    qNum: 8,
    question: "The simple rule in the lecture is:",
    options: {
      A: "API: You tell me / Webhook: I ask you",
      B: "API: I ask you / Webhook: You tell me",
      C: "Both: I ask you",
      D: "Both: You ask me"
    },
    answer: "B",
    explanation: "API = 'I ask you'; Webhook = 'You tell me when something happens'."
  },
  {
    id: "lec9_q9",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "AI Engineering Motivation",
    qNum: 9,
    question: "A bad solution for answering product questions is:",
    options: {
      A: "Using Product Service",
      B: "Writing many if statements for every product",
      C: "Using RAG",
      D: "Using Microservices"
    },
    answer: "B",
    explanation: "Hardcoding nested if/else statements for dynamic catalog questions is completely unmaintainable."
  },
  {
    id: "lec9_q10",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "AI Engineering Motivation",
    qNum: 10,
    question: "Why is using many if/else statements a bad solution?",
    options: {
      A: "Difficult to maintain with many products",
      B: "It increases AI accuracy",
      C: "It creates databases automatically",
      D: "It improves scalability"
    },
    answer: "A",
    explanation: "Rule explosion causes code bloat, fragile logic, and fails on complex natural language queries."
  },
  {
    id: "lec9_q11",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "RAG Knowledge Source",
    qNum: 11,
    question: "Company policy information example is stored in:",
    options: {
      A: "company.txt",
      B: "CPU memory",
      C: "API Gateway",
      D: "Message Broker"
    },
    answer: "A",
    explanation: "External documentation file (company.txt) used as an external knowledge base."
  },
  {
    id: "lec9_q12",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "RAG Definition",
    qNum: 12,
    question: "RAG stands for:",
    options: {
      A: "Random Access Generation",
      B: "Retrieval-Augmented Generation",
      C: "Remote Application Gateway",
      D: "Resource API Generator"
    },
    answer: "B",
    explanation: "RAG stands for Retrieval-Augmented Generation."
  },
  {
    id: "lec9_q13",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "RAG Concepts",
    qNum: 13,
    question: "RAG combines two ideas:",
    options: {
      A: "Storage and Database",
      B: "Retrieval and Generation",
      C: "API and Webhook",
      D: "Thread and Process"
    },
    answer: "B",
    explanation: "1) Retrieving relevant domain documents + 2) Generating grounded answers via an LLM."
  },
  {
    id: "lec9_q14",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "RAG Retrieval",
    qNum: 14,
    question: "The Retrieval part of RAG is responsible for:",
    options: {
      A: "Finding relevant information",
      B: "Creating UI",
      C: "Sending HTTP requests",
      D: "Managing threads"
    },
    answer: "A",
    explanation: "Searching the vector knowledge base for text chunks related to the user's query."
  },
  {
    id: "lec9_q15",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "RAG Generation",
    qNum: 15,
    question: "The Generation part of RAG uses:",
    options: {
      A: "Database only",
      B: "LLM to generate answers",
      C: "Webhook only",
      D: "API Gateway"
    },
    answer: "B",
    explanation: "Feeding the retrieved chunks and user question into an LLM to generate an accurate, grounded reply."
  },
  {
    id: "lec9_q16",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "RAG Flow",
    qNum: 16,
    question: "The RAG flow is:",
    options: {
      A: "Question → Retrieve Information → Give to LLM → Generate Answer",
      B: "Question → Database Delete → Answer",
      C: "LLM → Database → Question",
      D: "API → Webhook → Memory"
    },
    answer: "A",
    explanation: "Question -> Semantic Retrieval -> Prompt Augmentation with context -> LLM Answer Generation."
  },
  {
    id: "lec9_q17",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Chunking",
    qNum: 17,
    question: "Chunking means:",
    options: {
      A: "Splitting a large document into smaller meaningful pieces",
      B: "Deleting documents",
      C: "Encrypting data",
      D: "Creating APIs"
    },
    answer: "A",
    explanation: "Chunking segments voluminous text files into digestible paragraphs or passages."
  },
  {
    id: "lec9_q18",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Chunking Purpose",
    qNum: 18,
    question: "Why do we use Chunking?",
    options: {
      A: "To avoid searching a huge document every time",
      B: "To increase file size",
      C: "To remove AI models",
      D: "To replace databases"
    },
    answer: "A",
    explanation: "Targeted chunks fit within LLM context windows and allow pinpoint semantic matching."
  },
  {
    id: "lec9_q19",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Embeddings",
    qNum: 19,
    question: "Embeddings convert text into:",
    options: {
      A: "Images",
      B: "Numerical vectors representing meaning",
      C: "Database tables",
      D: "HTTP requests"
    },
    answer: "B",
    explanation: "Embedding models map semantic concepts into high-dimensional numerical vectors (arrays of floats)."
  },
  {
    id: "lec9_q20",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Embeddings Advantages",
    qNum: 20,
    question: "The main advantage of embeddings is:",
    options: {
      A: "Compare meaning, not only exact words",
      B: "Delete documents",
      C: "Replace LLMs",
      D: "Create APIs automatically"
    },
    answer: "A",
    explanation: "Embeddings capture conceptual similarity so synonyms match even with different wording."
  },
  {
    id: "lec9_q21",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Vector Database",
    qNum: 21,
    question: "A Vector Database stores:",
    options: {
      A: "Images only",
      B: "Embeddings and allows semantic search",
      C: "HTTP requests",
      D: "Source code only"
    },
    answer: "B",
    explanation: "Stores high-dimensional vectors with specialized indexes (HNSW, IVFFlat) for cosine distance search."
  },
  {
    id: "lec9_q22",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Vector Search",
    qNum: 22,
    question: "The purpose of Vector Search is to find:",
    options: {
      A: "Exact words only",
      B: "Semantically similar content",
      C: "Database tables",
      D: "Programming errors"
    },
    answer: "B",
    explanation: "Finds the closest vectors in multidimensional space corresponding to conceptual similarity."
  },
  {
    id: "lec9_q23",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Vector Database Example",
    qNum: 23,
    question: "An example of Vector Database mentioned in the lecture is:",
    options: {
      A: "MySQL only",
      B: "PostgreSQL + pgvector",
      C: "Excel",
      D: "Redis only"
    },
    answer: "B",
    explanation: "PostgreSQL with the pgvector open-source extension."
  },
  {
    id: "lec9_q24",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Vector Search Flow",
    qNum: 24,
    question: "The Vector Database flow is:",
    options: {
      A: "Question → Embedding → Vector Search → Most Similar Chunks",
      B: "Question → Delete → Database",
      C: "LLM → Question → API",
      D: "Webhook → Thread → Memory"
    },
    answer: "A",
    explanation: "Convert query into embedding vector -> execute nearest neighbor vector search -> retrieve top matching text chunks."
  },
  {
    id: "lec9_q25",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Vector Similarity",
    qNum: 25,
    question: "In Vector Search, similarity is based on:",
    options: {
      A: "Text length only",
      B: "Meaning represented by vectors",
      C: "File name",
      D: "Database ID"
    },
    answer: "B",
    explanation: "Calculated via cosine similarity or dot product over mathematical vectors."
  },
  {
    id: "lec9_q26",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "LLM Definition",
    qNum: 26,
    question: "LLM stands for:",
    options: {
      A: "Large Language Model",
      B: "Local Logic Machine",
      C: "Large Link Method",
      D: "Language Loading Module"
    },
    answer: "A",
    explanation: "LLM stands for Large Language Model."
  },
  {
    id: "lec9_q27",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "LLM Capabilities",
    qNum: 27,
    question: "An LLM can:",
    options: {
      A: "Understand natural language and generate responses",
      B: "Replace all databases",
      C: "Create operating systems",
      D: "Manage hardware only"
    },
    answer: "A",
    explanation: "LLMs process, comprehend, summarize, and generate human-like natural language."
  },
  {
    id: "lec9_q28",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "LLM Integration",
    qNum: 28,
    question: "Applications communicate with LLM through:",
    options: {
      A: "LLM API",
      B: "Database tables",
      C: "Message Broker only",
      D: "File system only"
    },
    answer: "A",
    explanation: "Software communicates with LLMs over HTTP REST APIs (OpenAI, Gemini, Ollama)."
  },
  {
    id: "lec9_q29",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "RAG + LLM Flow",
    qNum: 29,
    question: "The correct RAG + LLM flow is:",
    options: {
      A: "Question → RAG → Relevant Information → LLM → Answer",
      B: "Question → Database → Delete",
      C: "LLM → Webhook → Question",
      D: "API → Database → Thread"
    },
    answer: "A",
    explanation: "Question -> RAG retrieval -> augment system prompt with knowledge -> LLM generates final answer."
  },
  {
    id: "lec9_q30",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Prompt Context",
    qNum: 30,
    question: "When giving context to an LLM, the system should:",
    options: {
      A: "Provide retrieved company information",
      B: "Give no information",
      C: "Only send database password",
      D: "Remove the question"
    },
    answer: "A",
    explanation: "Inject retrieved facts to ground the model and prevent hallucinations."
  },
  {
    id: "lec9_q31",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Hallucination Control",
    qNum: 31,
    question: "The instruction \"Do not invent information\" is related to:",
    options: {
      A: "Giving controlled context to LLM",
      B: "Creating databases",
      C: "API Gateway",
      D: "Thread management"
    },
    answer: "A",
    explanation: "System prompt guardrail commanding the LLM to rely strictly on provided knowledge chunks."
  },
  {
    id: "lec9_q32",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Monolithic Architecture",
    qNum: 32,
    question: "A Monolith means:",
    options: {
      A: "Everything is inside one application",
      B: "Many independent services",
      C: "Only database system",
      D: "A message queue"
    },
    answer: "A",
    explanation: "All functional modules, UI, business logic, and data access are bundled into a single codebase and deployment unit."
  },
  {
    id: "lec9_q33",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Monolith Challenges",
    qNum: 33,
    question: "A monolithic application may become difficult to:",
    options: {
      A: "Deploy, scale, maintain, test, and change",
      B: "Start only",
      C: "Write one line of code",
      D: "Store files"
    },
    answer: "A",
    explanation: "As size grows, rebuilding and releasing the entire monolith becomes slow and risky."
  },
  {
    id: "lec9_q34",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Monolith Example",
    qNum: 34,
    question: "In the monolith example, all these parts are inside one application:",
    options: {
      A: "Product Logic, Customer Logic, Order Logic, RAG, LLM",
      B: "Only Database",
      C: "Only UI",
      D: "Only API Gateway"
    },
    answer: "A",
    explanation: "Products, orders, users, and AI pipelines all bundled in one monolithic process."
  },
  {
    id: "lec9_q35",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Diverse Resource Needs",
    qNum: 35,
    question: "Different parts of a system may have different needs because:",
    options: {
      A: "AI requests, products, orders, and notifications have different requirements",
      B: "All parts are identical",
      C: "Databases cannot work",
      D: "APIs are removed"
    },
    answer: "A",
    explanation: "AI requests need GPU/high RAM; orders require strict transactional integrity; notifications require async throughput."
  },
  {
    id: "lec9_q36",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Microservices",
    qNum: 36,
    question: "Microservices architecture:",
    options: {
      A: "Splits a system into small independent services",
      B: "Creates one large application",
      C: "Removes business logic",
      D: "Uses one database only"
    },
    answer: "A",
    explanation: "Decomposes a system into small, independently deployable services around business domains."
  },
  {
    id: "lec9_q37",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Microservices Boundaries",
    qNum: 37,
    question: "Each Microservice is responsible for:",
    options: {
      A: "A specific business capability",
      B: "All system functions",
      C: "Database management only",
      D: "User interface only"
    },
    answer: "A",
    explanation: "Aligned around bounded contexts fulfilling one specific business domain."
  },
  {
    id: "lec9_q38",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Product Service",
    qNum: 38,
    question: "Product Service is responsible for:",
    options: {
      A: "Products and inventory",
      B: "Customer notifications",
      C: "AI generation only",
      D: "User authentication only"
    },
    answer: "A",
    explanation: "Manages catalog, SKU information, and stock inventory."
  },
  {
    id: "lec9_q39",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Order Service",
    qNum: 39,
    question: "Order Service is responsible for:",
    options: {
      A: "Orders",
      B: "Product search only",
      C: "Sending SMS only",
      D: "Vector storage only"
    },
    answer: "A",
    explanation: "Oversees checkout, order creation, order statuses, and invoices."
  },
  {
    id: "lec9_q40",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "AI/RAG Service",
    qNum: 40,
    question: "AI/RAG Service is responsible for:",
    options: {
      A: "AI and knowledge retrieval",
      B: "Database backup",
      C: "User interface",
      D: "HTTP routing only"
    },
    answer: "A",
    explanation: "Generates embeddings, queries pgvector, and orchestrates LLM answers."
  },
  {
    id: "lec9_q41",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Inter-service Communication",
    qNum: 41,
    question: "A new problem after creating Microservices is:",
    options: {
      A: "How services communicate with each other",
      B: "How to create a single class",
      C: "How to remove databases",
      D: "How to stop APIs"
    },
    answer: "A",
    explanation: "Decoupled distributed services must coordinate over networks reliably."
  },
  {
    id: "lec9_q42",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Inter-service Communication",
    qNum: 42,
    question: "Service-to-Service Communication means:",
    options: {
      A: "Communication between different services",
      B: "Communication between users only",
      C: "Database formatting",
      D: "File compression"
    },
    answer: "A",
    explanation: "Data exchange and command messaging across independent microservice instances."
  },
  {
    id: "lec9_q43",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Communication Patterns",
    qNum: 43,
    question: "Microservices can communicate using:",
    options: {
      A: "HTTP or Messaging",
      B: "Only SQL",
      C: "Only files",
      D: "Only UI"
    },
    answer: "A",
    explanation: "Synchronous HTTP/REST/gRPC or Asynchronous Message Brokers (RabbitMQ/Kafka)."
  },
  {
    id: "lec9_q44",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Microservices Advantage",
    qNum: 44,
    question: "A major advantage of Microservices is:",
    options: {
      A: "Independent services with specific responsibilities",
      B: "One huge codebase",
      C: "No communication",
      D: "No deployment"
    },
    answer: "A",
    explanation: "Autonomy: independent tech stacks, isolated scaling, and modular deployments."
  },
  {
    id: "lec9_q45",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Microservices vs Monolith",
    qNum: 45,
    question: "The main problem solved by Microservices compared with Monolith is:",
    options: {
      A: "Large systems become easier to scale and maintain",
      B: "Removing all services",
      C: "Removing APIs",
      D: "Preventing databases"
    },
    answer: "A",
    explanation: "Complex enterprise systems can be partitioned across independent engineering teams."
  },
  {
    id: "lec9_q46",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Synchronous Communication",
    qNum: 46,
    question: "Synchronous Communication means:",
    options: {
      A: "The sender waits for a response",
      B: "The sender does not wait",
      C: "Communication without messages",
      D: "No service interaction"
    },
    answer: "A",
    explanation: "The client makes a request and blocks/waits until the receiving service responds."
  },
  {
    id: "lec9_q47",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Synchronous Example",
    qNum: 47,
    question: "An example of synchronous communication is:",
    options: {
      A: "HTTP Request/Response",
      B: "Message Queue",
      C: "Event Bus",
      D: "Background worker only"
    },
    answer: "A",
    explanation: "Standard REST HTTP request/response cycle."
  },
  {
    id: "lec9_q48",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Synchronous Pitfalls",
    qNum: 48,
    question: "In synchronous communication, if the receiving service is unavailable:",
    options: {
      A: "The request may fail",
      B: "The message is always stored",
      C: "The system continues automatically",
      D: "No error occurs"
    },
    answer: "A",
    explanation: "If Service B crashes or times out, Service A immediately fails (cascading failure)."
  },
  {
    id: "lec9_q49",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Synchronous Pitfalls",
    qNum: 49,
    question: "A disadvantage of synchronous communication is:",
    options: {
      A: "Tight coupling between services",
      B: "No communication",
      C: "No response",
      D: "No API usage"
    },
    answer: "A",
    explanation: "Services become tightly temporal-coupled (both must be available simultaneously)."
  },
  {
    id: "lec9_q50",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Asynchronous Communication",
    qNum: 50,
    question: "Asynchronous Communication means:",
    options: {
      A: "The sender sends a message and continues without waiting",
      B: "The sender always waits",
      C: "Only HTTP is used",
      D: "Services cannot communicate"
    },
    answer: "A",
    explanation: "Fire-and-forget: Producer delivers the payload to a broker and immediately resumes without blocking."
  },
  {
    id: "lec9_q51",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Asynchronous Example",
    qNum: 51,
    question: "An example of asynchronous communication is:",
    options: {
      A: "Message Queue",
      B: "HTTP GET",
      C: "HTTP Response",
      D: "Direct Function Call"
    },
    answer: "A",
    explanation: "Publishing an event onto a Message Queue (e.g. RabbitMQ)."
  },
  {
    id: "lec9_q52",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Message Storage",
    qNum: 52,
    question: "In asynchronous communication, the message is stored in:",
    options: {
      A: "Message Broker",
      B: "Controller",
      C: "Database Table only",
      D: "UI Layer"
    },
    answer: "A",
    explanation: "The Message Broker buffers and persists the queue of messages until consumed."
  },
  {
    id: "lec9_q53",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Asynchronous Benefits",
    qNum: 53,
    question: "The main benefit of asynchronous communication is:",
    options: {
      A: "Services are more independent",
      B: "More coupling",
      C: "No scalability",
      D: "Slower processing always"
    },
    answer: "A",
    explanation: "Temporal decoupling: consumers can process messages at their own pace even if offline."
  },
  {
    id: "lec9_q54",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Message Broker",
    qNum: 54,
    question: "A Message Broker acts as:",
    options: {
      A: "A middle layer between services",
      B: "A database replacement",
      C: "A user interface",
      D: "A programming language"
    },
    answer: "A",
    explanation: "An architectural intermediary handling ingestion, routing, and delivery of messages."
  },
  {
    id: "lec9_q55",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Message Broker Role",
    qNum: 55,
    question: "The role of Message Broker is to:",
    options: {
      A: "Receive, store, and deliver messages",
      B: "Create UI pages",
      C: "Replace microservices",
      D: "Generate AI models"
    },
    answer: "A",
    explanation: "Ingest from producers, buffer reliably in queues, and route to consumers."
  },
  {
    id: "lec9_q56",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Message Broker Examples",
    qNum: 56,
    question: "Examples of Message Brokers include:",
    options: {
      A: "RabbitMQ and Azure Service Bus",
      B: "HTML and CSS",
      C: "SQL and C#",
      D: "React and Angular"
    },
    answer: "A",
    explanation: "RabbitMQ, Apache Kafka, Azure Service Bus, and Amazon SQS."
  },
  {
    id: "lec9_q57",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Message Queue",
    qNum: 57,
    question: "A Message Queue provides:",
    options: {
      A: "Reliable message delivery",
      B: "Direct database access",
      C: "User authentication",
      D: "API documentation"
    },
    answer: "A",
    explanation: "Guarantees reliable message queuing, persistence, and delivery acknowledgments."
  },
  {
    id: "lec9_q58",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Producer-Consumer",
    qNum: 58,
    question: "In a Message Queue system:",
    options: {
      A: "Producer sends messages, Consumer processes them",
      B: "Consumer creates messages only",
      C: "Database sends requests",
      D: "UI handles messages"
    },
    answer: "A",
    explanation: "Producers publish payloads to the queue; Consumers subscribe and process them."
  },
  {
    id: "lec9_q59",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Producer",
    qNum: 59,
    question: "The Producer is responsible for:",
    options: {
      A: "Sending messages",
      B: "Processing messages",
      C: "Creating databases",
      D: "Managing users"
    },
    answer: "A",
    explanation: "Producing and publishing event payloads into the message broker."
  },
  {
    id: "lec9_q60",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Consumer",
    qNum: 60,
    question: "The Consumer is responsible for:",
    options: {
      A: "Processing received messages",
      B: "Sending HTTP requests only",
      C: "Creating APIs",
      D: "Storing passwords"
    },
    answer: "A",
    explanation: "Reading messages from the queue and executing corresponding business logic."
  },
  {
    id: "lec9_q61",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Events Definition",
    qNum: 61,
    question: "Events represent:",
    options: {
      A: "Something that happened in the system",
      B: "A database table",
      C: "A programming language",
      D: "A UI component"
    },
    answer: "A",
    explanation: "An immutable record of a past business fact (e.g., OrderPlaced, PaymentReceived)."
  },
  {
    id: "lec9_q62",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Event Example",
    qNum: 62,
    question: "An example of an event is:",
    options: {
      A: "OrderCreated",
      B: "CreateDatabase",
      C: "DeleteCode",
      D: "RunCompiler"
    },
    answer: "A",
    explanation: "Named in past tense: OrderCreated, PaymentProcessed, InvoiceGenerated."
  },
  {
    id: "lec9_q63",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Event-Driven Architecture",
    qNum: 63,
    question: "Event-driven architecture works by:",
    options: {
      A: "Publishing events and allowing services to react",
      B: "Connecting all services directly",
      C: "Removing communication",
      D: "Using one large application only"
    },
    answer: "A",
    explanation: "Services emit events on state changes; any interested service subscribes and reacts autonomously."
  },
  {
    id: "lec9_q64",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Event Reaction",
    qNum: 64,
    question: "When an order is created, other services can react using:",
    options: {
      A: "OrderCreated event",
      B: "SQL table only",
      C: "UI button",
      D: "Local variable"
    },
    answer: "A",
    explanation: "Inventory, Shipping, and Billing all listen to the OrderCreated event."
  },
  {
    id: "lec9_q65",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Order Service Event Role",
    qNum: 65,
    question: "In Event-driven architecture, the Order Service:",
    options: {
      A: "Publishes an event",
      B: "Controls all other services",
      C: "Replaces databases",
      D: "Generates AI answers"
    },
    answer: "A",
    explanation: "Order Service commits the order and publishes OrderCreated without orchestrating other services directly."
  },
  {
    id: "lec9_q66",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Notification Service",
    qNum: 66,
    question: "Notification Service can react to:",
    options: {
      A: "OrderCreated event",
      B: "Product database only",
      C: "UI changes only",
      D: "Password changes only"
    },
    answer: "A",
    explanation: "Receives the event and automatically dispatches confirmation SMS or emails."
  },
  {
    id: "lec9_q67",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Events Advantage",
    qNum: 67,
    question: "The main advantage of events is:",
    options: {
      A: "Loose coupling between services",
      B: "Strong dependency",
      C: "One large codebase",
      D: "Direct database sharing"
    },
    answer: "A",
    explanation: "Publishers know nothing about subscribers, maximizing decoupling."
  },
  {
    id: "lec9_q68",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Event-Driven Scalability",
    qNum: 68,
    question: "Microservices with events help achieve:",
    options: {
      A: "Scalable and flexible systems",
      B: "More dependency",
      C: "Less communication",
      D: "Single application only"
    },
    answer: "A",
    explanation: "Enables independent horizontal scaling and seamless addition of new subscriber services."
  },
  {
    id: "lec9_q69",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "When to Use Sync",
    qNum: 69,
    question: "Synchronous communication is suitable when:",
    options: {
      A: "Immediate response is required",
      B: "Response is not needed",
      C: "Background processing only",
      D: "Events only"
    },
    answer: "A",
    explanation: "Queries and real-time operations where the client cannot proceed without immediate return data."
  },
  {
    id: "lec9_q70",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "When to Use Async",
    qNum: 70,
    question: "Asynchronous communication is suitable when:",
    options: {
      A: "Tasks can be processed later",
      B: "Immediate response is mandatory",
      C: "No message is needed",
      D: "Only UI is involved"
    },
    answer: "A",
    explanation: "Long-running tasks, notifications, and operations where immediate consistency is not required."
  },
  {
    id: "lec9_q71",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Final Architecture Components",
    qNum: 71,
    question: "In the final architecture, Product Service handles:",
    options: {
      A: "Products and inventory",
      B: "AI knowledge search",
      C: "Notifications only",
      D: "Workflow automation only"
    },
    answer: "A",
    explanation: "Manages catalog queries and stock reservations."
  },
  {
    id: "lec9_q72",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Final Architecture Components",
    qNum: 72,
    question: "Order Service is responsible for:",
    options: {
      A: "Managing orders",
      B: "Generating embeddings",
      C: "Sending emails only",
      D: "Managing CI/CD"
    },
    answer: "A",
    explanation: "Processing checkouts and order state."
  },
  {
    id: "lec9_q73",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Final Architecture Components",
    qNum: 73,
    question: "AI/RAG Service provides:",
    options: {
      A: "Intelligent answers using retrieved knowledge",
      B: "Database management",
      C: "User interface design",
      D: "Hardware control"
    },
    answer: "A",
    explanation: "Conversational QA using company documentation."
  },
  {
    id: "lec9_q74",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Final Architecture Components",
    qNum: 74,
    question: "Notification Service handles:",
    options: {
      A: "Sending notifications",
      B: "Product inventory",
      C: "AI model training only",
      D: "Database creation"
    },
    answer: "A",
    explanation: "SMS, Push, WhatsApp, and Email dispatch."
  },
  {
    id: "lec9_q75",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Final Architecture Events",
    qNum: 75,
    question: "The final architecture uses events to achieve:",
    options: {
      A: "Communication between independent services",
      B: "One large application",
      C: "Direct database sharing",
      D: "Removing APIs"
    },
    answer: "A",
    explanation: "Asynchronous event-driven communication linking autonomous microservices."
  },
  {
    id: "lec9_q76",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "AI Engineering Stack",
    qNum: 76,
    question: "AI Engineering combines:",
    options: {
      A: "LLM + RAG + Vector Database",
      B: "Only databases",
      C: "Only APIs",
      D: "Only frontend"
    },
    answer: "A",
    explanation: "The contemporary GenAI stack: LLM, Vector Database, and RAG pipelines."
  },
  {
    id: "lec9_q77",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "RAG Purpose",
    qNum: 77,
    question: "The purpose of RAG in AI systems is:",
    options: {
      A: "Provide relevant information to the LLM before generating answers",
      B: "Replace all databases",
      C: "Remove documents",
      D: "Create UI pages"
    },
    answer: "A",
    explanation: "Ground the LLM with up-to-date, proprietary company information to eliminate hallucinations."
  },
  {
    id: "lec9_q78",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Scalable Systems",
    qNum: 78,
    question: "Modern scalable systems depend on:",
    options: {
      A: "Independent services, communication, automation, and AI",
      B: "One huge application only",
      C: "Manual work only",
      D: "No architecture"
    },
    answer: "A",
    explanation: "Distributed services, asynchronous messaging, smart automation, and AI augmentation."
  },
  {
    id: "lec9_q79",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Lecture Goal",
    qNum: 79,
    question: "The main goal of the lecture is understanding:",
    options: {
      A: "How modern systems are designed and connected",
      B: "How to write only one class",
      C: "How to create databases only",
      D: "How to design interfaces only"
    },
    answer: "A",
    explanation: "Comprehending enterprise architecture, integration patterns, and modern AI engineering."
  },
  {
    id: "lec9_q80",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Distributed Systems Challenges",
    qNum: 80,
    question: "Which problem can occur in a distributed system?",
    options: {
      A: "Network calls can fail",
      B: "All calls are always successful",
      C: "Databases never fail",
      D: "Messages are always immediate"
    },
    answer: "A",
    explanation: "Fallacies of distributed computing: the network is unreliable, latency is not zero, and packets drop."
  },
  {
    id: "lec9_q81",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Resilience",
    qNum: 81,
    question: "Why do microservices require resilience strategies?",
    options: {
      A: "Services, networks, and databases can fail",
      B: "They use only one class",
      C: "They cannot use HTTP",
      D: "They eliminate all timeouts"
    },
    answer: "A",
    explanation: "To gracefully survive transient network glitches, database timeouts, and partial outages."
  },
  {
    id: "lec9_q82",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Retry Pattern",
    qNum: 82,
    question: "What is the purpose of Retry?",
    options: {
      A: "Try a failed operation again after a temporary failure",
      B: "Delete the service",
      C: "Create a database",
      D: "Disable all requests"
    },
    answer: "A",
    explanation: "Re-attempts transient failures (e.g. temporary network blips) with exponential backoff."
  },
  {
    id: "lec9_q83",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Circuit Breaker",
    qNum: 83,
    question: "What does a Circuit Breaker prevent?",
    options: {
      A: "Repeated calls to a failing service",
      B: "All successful requests",
      C: "Database creation",
      D: "Message validation"
    },
    answer: "A",
    explanation: "Trips open when failures exceed a threshold, failing fast to let the downstream system recover."
  },
  {
    id: "lec9_q84",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Duplicate Webhooks",
    qNum: 84,
    question: "What can duplicate webhook messages cause?",
    options: {
      A: "Duplicate orders",
      B: "Faster responses",
      C: "Automatic documentation",
      D: "One-time processing"
    },
    answer: "A",
    explanation: "At-least-once delivery can cause double payments or duplicate orders if not handled idempotently."
  },
  {
    id: "lec9_q85",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Idempotency",
    qNum: 85,
    question: "Idempotency means that processing the same message multiple times:",
    options: {
      A: "Produces the same result as processing it once",
      B: "Always creates duplicate orders",
      C: "Deletes the message",
      D: "Requires a new database"
    },
    answer: "A",
    explanation: "f(f(x)) = f(x): applying the same operation repeatedly yields the identical outcome without duplicate side effects."
  },
  {
    id: "lec9_q86",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Message ID Tracking",
    qNum: 86,
    question: "What is the purpose of storing a processed Message ID?",
    options: {
      A: "Prevent duplicate processing and side effects",
      B: "Increase message duplication",
      C: "Replace the API Gateway",
      D: "Create embeddings"
    },
    answer: "A",
    explanation: "Deduplication: checking if the message ID was already processed ignores redundant incoming retries."
  },
  {
    id: "lec9_q87",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Fast Webhook Ack",
    qNum: 87,
    question: "What should a webhook do before long AI/RAG processing?",
    options: {
      A: "Validate, publish an event, and return 200 OK",
      B: "Wait for every operation to finish",
      C: "Delete the message",
      D: "Call every service directly"
    },
    answer: "A",
    explanation: "Acknowledge receipt immediately (200 OK) to prevent webhook timeouts from Meta/Stripe, then process in background."
  },
  {
    id: "lec9_q88",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Background Worker",
    qNum: 88,
    question: "Why is a Background Worker used?",
    options: {
      A: "To process queued tasks continuously in the background",
      B: "To replace the database",
      C: "To define REST resources",
      D: "To create JWT tokens"
    },
    answer: "A",
    explanation: "Runs as a hosted background service (IHostedService / BackgroundService in .NET) consuming messages."
  },
  {
    id: "lec9_q89",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Background Worker",
    qNum: 89,
    question: "A Background Worker processes tasks:",
    options: {
      A: "Without waiting for a user request",
      B: "Only after deleting the queue",
      C: "Only inside the user interface",
      D: "Never continuously"
    },
    answer: "A",
    explanation: "Autonomously polls/consumes queued jobs in the background."
  },
  {
    id: "lec9_q90",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Database per Service",
    qNum: 90,
    question: "What does Database per Service mean?",
    options: {
      A: "Each service owns its data",
      B: "All services share one table",
      C: "Only the API owns data",
      D: "No service uses a database"
    },
    answer: "A",
    explanation: "Every microservice maintains exclusive ownership of its data store; other services must access it via APIs/events."
  },
  {
    id: "lec9_q91",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "API Gateway",
    qNum: 91,
    question: "What is an API Gateway?",
    options: {
      A: "A single-entry point between clients and microservices",
      B: "A background worker",
      C: "A vector embedding",
      D: "A database entity"
    },
    answer: "A",
    explanation: "A reverse proxy acting as the front door for all external client traffic."
  },
  {
    id: "lec9_q92",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "API Gateway Responsibilities",
    qNum: 92,
    question: "Which is a responsibility of an API Gateway?",
    options: {
      A: "Routing requests to the correct service",
      B: "Generating all business rules",
      C: "Replacing every microservice",
      D: "Creating product embeddings"
    },
    answer: "A",
    explanation: "Request routing and reverse proxy load balancing."
  },
  {
    id: "lec9_q93",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "API Gateway Responsibilities",
    qNum: 93,
    question: "Which is another responsibility of an API Gateway?",
    options: {
      A: "Authentication and rate limiting",
      B: "Changing domain entities",
      C: "Creating database tables only",
      D: "Training an LLM"
    },
    answer: "A",
    explanation: "Centralized TLS termination, auth token verification, rate limiting, and CORS."
  },
  {
    id: "lec9_q94",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Message Broker Example",
    qNum: 94,
    question: "Which technology is listed as a Message Broker example?",
    options: {
      A: "Kafka",
      B: "Photoshop",
      C: "Postman",
      D: "JWT"
    },
    answer: "A",
    explanation: "Apache Kafka."
  },
  {
    id: "lec9_q95",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Complete Architecture Story",
    qNum: 95,
    question: "What does the Complete Story identify as the solution for service failure?",
    options: {
      A: "Retry / Circuit Breaker",
      B: "GraphQL only",
      C: "DTO mapping",
      D: "Inheritance"
    },
    answer: "A",
    explanation: "Resilience patterns: Retry policies and Circuit Breakers (e.g. Polly library in .NET)."
  },
  {
    id: "lec9_q96",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Complete Architecture Story",
    qNum: 96,
    question: "What does the Complete Story identify as the solution for duplicate events?",
    options: {
      A: "Idempotency",
      B: "Chunking",
      C: "API versioning",
      D: "Parallel.For"
    },
    answer: "A",
    explanation: "Idempotency patterns and duplicate message ID checking."
  },
  {
    id: "lec9_q97",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Complete Architecture Story",
    qNum: 97,
    question: "What does the Complete Story identify as the solution for monitoring everything?",
    options: {
      A: "Logging / Metrics / Tracing",
      B: "Only HTTP",
      C: "Only a database",
      D: "Only a webhook"
    },
    answer: "A",
    explanation: "The 3 pillars of observability: Distributed Tracing (OpenTelemetry), Metrics, and Structured Logging."
  },
  {
    id: "lec9_q98",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "Semantic Search Component",
    qNum: 98,
    question: "Which component is used for semantic search in the described system?",
    options: {
      A: "PostgreSQL with pgvector",
      B: "A ThreadPool",
      C: "A JWT token",
      D: "A SOAP envelope"
    },
    answer: "A",
    explanation: "PostgreSQL database empowered with the pgvector vector indexing extension."
  },
  {
    id: "lec9_q99",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "System Architecture Stack",
    qNum: 99,
    question: "Which components are listed as used in the built system?",
    options: {
      A: "Meta WhatsApp API, LLM, Embedding Model, PostgreSQL, pgvector, and Message Broker",
      B: "Only WhatsApp itself",
      C: "Only a database table",
      D: "Only a web browser"
    },
    answer: "A",
    explanation: "WhatsApp API, LLM, text-embedding-ada, PostgreSQL + pgvector, and RabbitMQ/Kafka."
  },
  {
    id: "lec9_q100",
    lectureId: 9,
    lectureTitle: "Lecture 9: Microservices, Webhooks, AI Engineering & RAG",
    lectureTitleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    topic: "System Implementation",
    qNum: 100,
    question: "What did the system build according to the final slide?",
    options: {
      A: "C# services, a Webhook, business logic, RAG orchestration, and service communication",
      B: "WhatsApp itself",
      C: "Only an LLM model",
      D: "Only a mobile application"
    },
    answer: "A",
    explanation: "Production-ready enterprise C# services, webhooks, business models, RAG orchestration, and asynchronous messaging."
  }
];
