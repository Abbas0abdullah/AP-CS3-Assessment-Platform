// Lecture 8: AP_Lec8 MCQ_Bank_8 (Dr. Baidaa Laalaa & Eng. Abdulmalik Hassan Alhaj)
// Total questions: 159
export const lec8Questions = [
  {
    id: "lec8_q1",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Synchronous Execution",
    qNum: 1,
    question: "What does synchronous execution mean?",
    options: {
      A: "Operations execute randomly",
      B: "Operations are executed one after another",
      C: "Multiple threads execute simultaneously",
      D: "Operations never wait"
    },
    answer: "B",
    explanation: "Synchronous execution runs steps sequentially; each operation must finish before the next begins."
  },
  {
    id: "lec8_q2",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Synchronous Execution",
    qNum: 2,
    question: "In synchronous execution, if GetData() takes 5 seconds, the program:",
    options: {
      A: "Continues immediately",
      B: "Creates a new thread automatically",
      C: "Waits for 5 seconds",
      D: "Deletes the operation"
    },
    answer: "C",
    explanation: "The thread is blocked and idly waits for the full 5 seconds."
  },
  {
    id: "lec8_q3",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Blocking Operations",
    qNum: 3,
    question: "A blocking operation prevents the current thread from:",
    options: {
      A: "Creating objects",
      B: "Doing other useful work",
      C: "Using memory",
      D: "Calling methods"
    },
    answer: "B",
    explanation: "Blocking halts the thread, preventing it from serving other requests or UI interactions."
  },
  {
    id: "lec8_q4",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Asynchronous Programming",
    qNum: 4,
    question: "Asynchronous programming allows a program to:",
    options: {
      A: "Stop completely while waiting",
      B: "Start an operation and continue other work while waiting",
      C: "Use only multiple CPUs",
      D: "Remove all threads"
    },
    answer: "B",
    explanation: "Async initiates tasks without blocking, yielding the thread back to do other productive work."
  },
  {
    id: "lec8_q5",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Async Keywords",
    qNum: 5,
    question: "Which keyword indicates that a method contains asynchronous operations?",
    options: {
      A: "await",
      B: "async",
      C: "Task",
      D: "Thread"
    },
    answer: "B",
    explanation: "The 'async' keyword modifiers method signatures to enable the 'await' keyword inside."
  },
  {
    id: "lec8_q6",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Async Keywords",
    qNum: 6,
    question: "The purpose of await is to:",
    options: {
      A: "Create a new process",
      B: "Wait asynchronously for an operation",
      C: "Stop the application",
      D: "Lock a thread"
    },
    answer: "B",
    explanation: "'await' pauses the method execution asynchronously without blocking the underlying thread."
  },
  {
    id: "lec8_q7",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Async vs Multithreading",
    qNum: 7,
    question: "Asynchronous programming does NOT automatically mean:",
    options: {
      A: "Faster code",
      B: "Multithreading",
      C: "Waiting without blocking",
      D: "Better I/O handling"
    },
    answer: "B",
    explanation: "Async is about non-blocking I/O completion, not necessarily spawning multiple OS threads."
  },
  {
    id: "lec8_q8",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "I/O-Bound Operations",
    qNum: 8,
    question: "Which is an example of I/O-Bound operation?",
    options: {
      A: "Image processing",
      B: "Encryption",
      C: "Database query",
      D: "Large calculation"
    },
    answer: "C",
    explanation: "Waiting for database responses over a network socket is an I/O-bound operation."
  },
  {
    id: "lec8_q9",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "I/O-Bound Operations",
    qNum: 9,
    question: "I/O-Bound operations spend most of their time:",
    options: {
      A: "Waiting",
      B: "Calculating",
      C: "Using CPU cores",
      D: "Creating threads"
    },
    answer: "A",
    explanation: "I/O-bound tasks spend almost all their duration waiting on external hardware or network responses."
  },
  {
    id: "lec8_q10",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "CPU-Bound Operations",
    qNum: 10,
    question: "Which of the following is CPU-Bound?",
    options: {
      A: "HTTP request",
      B: "Reading a file",
      C: "Image processing",
      D: "Database query"
    },
    answer: "C",
    explanation: "Image processing, video encoding, and cryptographic calculations consume heavy CPU cycles."
  },
  {
    id: "lec8_q11",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "CPU-Bound Operations",
    qNum: 11,
    question: "CPU-Bound operations spend most of their time:",
    options: {
      A: "Waiting for network",
      B: "Performing computation",
      C: "Waiting for disk",
      D: "Waiting for user input"
    },
    answer: "B",
    explanation: "CPU-bound tasks actively execute arithmetic instructions on processor cores."
  },
  {
    id: "lec8_q12",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Async Target",
    qNum: 12,
    question: "Async programming is especially useful for:",
    options: {
      A: "I/O-bound operations",
      B: "Replacing databases",
      C: "Creating UI designs",
      D: "Memory allocation only"
    },
    answer: "A",
    explanation: "Async excels at freeing threads while waiting for I/O operations (network, files, databases)."
  },
  {
    id: "lec8_q13",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Async Return Types",
    qNum: 13,
    question: "The return type of an asynchronous method can be:",
    options: {
      A: "Task",
      B: "Task<T>",
      C: "Both A and B",
      D: "Only void"
    },
    answer: "C",
    explanation: "Async methods typically return Task (for void equivalents) or Task<T> (for value returns)."
  },
  {
    id: "lec8_q14",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Task Concepts",
    qNum: 14,
    question: "What does Task represent?",
    options: {
      A: "A CPU core",
      B: "An asynchronous operation",
      C: "A database table",
      D: "A thread only"
    },
    answer: "B",
    explanation: "Task represents an ongoing or completed asynchronous operation."
  },
  {
    id: "lec8_q15",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Task Concepts",
    qNum: 15,
    question: "Task<int> represents:",
    options: {
      A: "A task that returns an integer result",
      B: "A thread pool",
      C: "A memory object",
      D: "A lock"
    },
    answer: "A",
    explanation: "Task<int> is a promise/future that resolves to an integer upon completion."
  },
  {
    id: "lec8_q16",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Task Concepts",
    qNum: 16,
    question: "A Task can be viewed as:",
    options: {
      A: "An operation that will finish sometime in the future",
      B: "A completed operation only",
      C: "A database connection",
      D: "A CPU instruction"
    },
    answer: "A",
    explanation: "It represents future work yielding a completion status or result."
  },
  {
    id: "lec8_q17",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Task.Run",
    qNum: 17,
    question: "Using Task.Run is recommended for:",
    options: {
      A: "CPU-bound work",
      B: "Database waiting",
      C: "HTTP requests",
      D: "File reading only"
    },
    answer: "A",
    explanation: "Task.Run pushes computationally intensive CPU-bound jobs onto ThreadPool threads."
  },
  {
    id: "lec8_q18",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Task.Run",
    qNum: 18,
    question: "Task.Run moves CPU-intensive work to:",
    options: {
      A: "Database server",
      B: "ThreadPool thread",
      C: "Main thread",
      D: "Garbage Collector"
    },
    answer: "B",
    explanation: "It queues execution onto background worker threads managed by the .NET ThreadPool."
  },
  {
    id: "lec8_q19",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Task.Run Misuse",
    qNum: 19,
    question: "Task.Run should NOT be used as a replacement for:",
    options: {
      A: "CPU calculations",
      B: "Asynchronous I/O operations",
      C: "Parallel loops",
      D: "ThreadPool"
    },
    answer: "B",
    explanation: "Wrapping naturally asynchronous I/O calls in Task.Run wastes a thread for no reason."
  },
  {
    id: "lec8_q20",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Async Truths",
    qNum: 20,
    question: "Which statement is correct?",
    options: {
      A: "Async always creates new threads",
      B: "Async can work without multithreading",
      C: "Async means parallel execution always",
      D: "Async removes Tasks"
    },
    answer: "B",
    explanation: "Async I/O relies on hardware interrupt notifications (I/O Completion Ports) without reserving threads."
  },
  {
    id: "lec8_q21",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Sequential Async",
    qNum: 21,
    question: "Sequential async means:",
    options: {
      A: "Operations start at the same time",
      B: "Operations execute one after another",
      C: "Operations use multiple CPU cores",
      D: "Operations never wait"
    },
    answer: "B",
    explanation: "Awaiting task1 before calling task2 executes them sequentially in series."
  },
  {
    id: "lec8_q22",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Sequential Async Time",
    qNum: 22,
    question: "The total time for sequential async (A and B) is approximately:",
    options: {
      A: "A × B",
      B: "A + B",
      C: "Max(A,B)",
      D: "Zero"
    },
    answer: "B",
    explanation: "Sequential execution adds individual execution durations together (Time ≈ A + B)."
  },
  {
    id: "lec8_q23",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Concurrent Async",
    qNum: 23,
    question: "Concurrent Async means:",
    options: {
      A: "Operations are started without waiting for previous operations to finish",
      B: "Only one operation can run",
      C: "All operations use one thread only",
      D: "Operations are deleted"
    },
    answer: "A",
    explanation: "Both asynchronous operations are kicked off concurrently and then awaited together."
  },
  {
    id: "lec8_q24",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Concurrent Async Code",
    qNum: 24,
    question: "Which code starts tasks concurrently?",
    options: {
      A: "var taskA = GetAAsync(); var taskB = GetBAsync(); await Task.WhenAll(taskA, taskB);",
      B: "await GetAAsync(); await GetBAsync();",
      C: "Thread.Sleep(1000);",
      D: "lock(this) { GetA(); }"
    },
    answer: "A",
    explanation: "Invoking methods without immediate await starts them concurrently; Task.WhenAll awaits both."
  },
  {
    id: "lec8_q25",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Concurrent Async Time",
    qNum: 25,
    question: "The total time in Concurrent Async is approximately:",
    options: {
      A: "A + B",
      B: "A × B",
      C: "Max(A,B)",
      D: "Infinite"
    },
    answer: "C",
    explanation: "Because both run concurrently, total time is roughly the duration of the longest operation (Max(A, B))."
  },
  {
    id: "lec8_q26",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Task.WhenAll",
    qNum: 26,
    question: "Task.WhenAll is used to:",
    options: {
      A: "Wait for all tasks to complete",
      B: "Wait for the first task only",
      C: "Cancel all tasks",
      D: "Create threads manually"
    },
    answer: "A",
    explanation: "Task.WhenAll completes when every task in the supplied collection has finished."
  },
  {
    id: "lec8_q27",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Task.WhenAll",
    qNum: 27,
    question: "Task.WhenAll should be used when operations are:",
    options: {
      A: "Dependent on each other",
      B: "Independent and can safely run concurrently",
      C: "Always CPU-bound",
      D: "Sequential only"
    },
    answer: "B",
    explanation: "Independent tasks that do not rely on each other's intermediate state can safely run together."
  },
  {
    id: "lec8_q28",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Task.WhenAll Example",
    qNum: 28,
    question: "Which method is suitable for getting user, orders, and payments together?",
    options: {
      A: "Task.WhenAll",
      B: "Thread.Sleep",
      C: "lock",
      D: "Task.WhenAny"
    },
    answer: "A",
    explanation: "Fetching independent dashboard widgets in parallel is the quintessential Task.WhenAll scenario."
  },
  {
    id: "lec8_q29",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Task.WhenAll Syntax",
    qNum: 29,
    question: "Example of Task.WhenAll syntax is:",
    options: {
      A: "await Task.WhenAny(task1, task2);",
      B: "await Task.WhenAll(task1, task2);",
      C: "Task.Run(task1);",
      D: "lock(task1) { }"
    },
    answer: "B",
    explanation: "await Task.WhenAll(task1, task2);"
  },
  {
    id: "lec8_q30",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Task.WhenAny",
    qNum: 30,
    question: "Task.WhenAny waits for:",
    options: {
      A: "All tasks to complete",
      B: "The first task to complete",
      C: "No tasks",
      D: "Only failed tasks"
    },
    answer: "B",
    explanation: "Task.WhenAny returns as soon as any single task finishes."
  },
  {
    id: "lec8_q31",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Task.WhenAny",
    qNum: 31,
    question: "Task.WhenAny is useful when:",
    options: {
      A: "The first available result is needed",
      B: "All results are required always",
      C: "Memory needs cleaning",
      D: "Creating objects"
    },
    answer: "A",
    explanation: "Ideal for timeouts or querying multiple redundant data replicas for the fastest answer."
  },
  {
    id: "lec8_q32",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Task.WhenAny",
    qNum: 32,
    question: "In Task.WhenAny, after getting the completed task, we use:",
    options: {
      A: "await completed",
      B: "lock completed",
      C: "Thread.Start",
      D: "Dispose completed"
    },
    answer: "A",
    explanation: "Awaiting the completed task retrieves its result or unpacks potential exceptions."
  },
  {
    id: "lec8_q33",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Concurrency",
    qNum: 33,
    question: "Concurrency means:",
    options: {
      A: "Multiple tasks are in progress during overlapping periods",
      B: "Multiple tasks must run at exactly the same time",
      C: "Only one task exists",
      D: "No task management"
    },
    answer: "A",
    explanation: "Concurrency is about structure: dealing with lots of things at once (overlapping execution periods)."
  },
  {
    id: "lec8_q34",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Concurrency vs Parallelism",
    qNum: 34,
    question: "Concurrency does NOT necessarily mean:",
    options: {
      A: "Tasks overlap",
      B: "Tasks execute exactly at the same time",
      C: "Multiple operations are handled",
      D: "Tasks are managed"
    },
    answer: "B",
    explanation: "Concurrent tasks can interleave on a single CPU core without executing at the exact same physical clock cycle."
  },
  {
    id: "lec8_q35",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Parallelism",
    qNum: 35,
    question: "Parallelism means:",
    options: {
      A: "Multiple tasks execute simultaneously",
      B: "Tasks wait one by one",
      C: "Only I/O operations happen",
      D: "No CPU usage"
    },
    answer: "A",
    explanation: "Parallelism is about execution: doing lots of things at the exact same physical instant on separate cores."
  },
  {
    id: "lec8_q36",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Concurrency Requirements",
    qNum: 36,
    question: "Concurrency can happen on:",
    options: {
      A: "One CPU core",
      B: "Only four CPU cores",
      C: "No CPU",
      D: "Database only"
    },
    answer: "A",
    explanation: "A single core can manage multiple concurrent tasks via time-slicing and interleaving."
  },
  {
    id: "lec8_q37",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Parallelism Requirements",
    qNum: 37,
    question: "Parallelism usually requires:",
    options: {
      A: "Multiple CPU cores",
      B: "One variable",
      C: "A database",
      D: "HTTP request"
    },
    answer: "A",
    explanation: "True simultaneous parallel execution physically mandates multiple processor cores."
  },
  {
    id: "lec8_q38",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Concurrency Focus",
    qNum: 38,
    question: "Concurrency focuses on:",
    options: {
      A: "Managing tasks",
      B: "Executing tasks simultaneously",
      C: "Memory cleanup",
      D: "Creating objects"
    },
    answer: "A",
    explanation: "Concurrency focuses on the architectural structure and coordination of multiple tasks."
  },
  {
    id: "lec8_q39",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Parallelism Focus",
    qNum: 39,
    question: "Parallelism focuses on:",
    options: {
      A: "Executing tasks",
      B: "Waiting for I/O",
      C: "Managing requests only",
      D: "Avoiding CPU usage"
    },
    answer: "A",
    explanation: "Parallelism focuses on simultaneous execution of computation across hardware."
  },
  {
    id: "lec8_q40",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Concurrency Use Cases",
    qNum: 40,
    question: "Concurrency is especially good for:",
    options: {
      A: "I/O operations",
      B: "CPU-intensive calculations",
      C: "Image processing only",
      D: "Encryption only"
    },
    answer: "A",
    explanation: "Asynchronous concurrency maximizes server throughput when handling thousands of I/O operations."
  },
  {
    id: "lec8_q41",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Parallelism Use Cases",
    qNum: 41,
    question: "Parallelism is especially good for:",
    options: {
      A: "CPU-intensive work",
      B: "Waiting for database",
      C: "HTTP requests",
      D: "File waiting"
    },
    answer: "A",
    explanation: "Parallel data processing divides compute-heavy arrays and matrices across CPU cores."
  },
  {
    id: "lec8_q42",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Concurrency vs Parallelism",
    qNum: 42,
    question: "Which comparison is correct?",
    options: {
      A: "Concurrency = managing multiple tasks, Parallelism = simultaneous execution",
      B: "Concurrency = only CPU work, Parallelism = only I/O",
      C: "Both are exactly the same",
      D: "Neither uses tasks"
    },
    answer: "A",
    explanation: "Rob Pike's dictum: 'Concurrency is about dealing with lots of things at once; parallelism is about doing lots of things at once.'"
  },
  {
    id: "lec8_q43",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Dashboard Example",
    qNum: 43,
    question: "A dashboard loading user, orders, payments, notifications is a good example of:",
    options: {
      A: "Task.WhenAll",
      B: "lock",
      C: "Thread creation",
      D: "Garbage Collection"
    },
    answer: "A",
    explanation: "Loading independent aggregates concurrently via Task.WhenAll."
  },
  {
    id: "lec8_q44",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Task.WhenAll Performance",
    qNum: 44,
    question: "Starting multiple independent async operations before awaiting them improves:",
    options: {
      A: "Execution time",
      B: "Memory leaks",
      C: "Deadlocks",
      D: "Coupling"
    },
    answer: "A",
    explanation: "Running I/O in parallel dramatically reduces total wall-clock execution time."
  },
  {
    id: "lec8_q45",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "WhenAll vs WhenAny",
    qNum: 45,
    question: "The main difference between WhenAll and WhenAny is:",
    options: {
      A: "WhenAll waits for all tasks, WhenAny waits for the first task",
      B: "Both wait for the first task",
      C: "Both create threads",
      D: "Both manage memory"
    },
    answer: "A",
    explanation: "WhenAll completes after all tasks; WhenAny completes after the quickest task."
  },
  {
    id: "lec8_q46",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Threads",
    qNum: 46,
    question: "A thread is:",
    options: {
      A: "A database connection",
      B: "A path of execution inside a process",
      C: "A memory location",
      D: "A programming language"
    },
    answer: "B",
    explanation: "A thread is the smallest basic unit of CPU execution within an operating system process."
  },
  {
    id: "lec8_q47",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Processes & Threads",
    qNum: 47,
    question: "A single process can contain:",
    options: {
      A: "Only one thread",
      B: "Multiple threads",
      C: "No threads",
      D: "Only CPU cores"
    },
    answer: "B",
    explanation: "Processes host an address space and can contain multiple concurrently executing threads."
  },
  {
    id: "lec8_q48",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Process vs Thread",
    qNum: 48,
    question: "The relationship between Process and Thread is:",
    options: {
      A: "A thread contains processes",
      B: "A process can contain multiple threads",
      C: "They are exactly the same",
      D: "A process is inside a thread"
    },
    answer: "B",
    explanation: "A process is an isolated application boundary containing one or more threads."
  },
  {
    id: "lec8_q49",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Manual Threading",
    qNum: 49,
    question: "Creating a thread manually in C# uses:",
    options: {
      A: "Task",
      B: "Thread class",
      C: "Garbage Collector",
      D: "Lock"
    },
    answer: "B",
    explanation: "The legacy System.Threading.Thread class creates dedicated OS threads manually."
  },
  {
    id: "lec8_q50",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Modern Concurrency",
    qNum: 50,
    question: "In modern .NET applications, it is usually preferred to use:",
    options: {
      A: "Manual thread creation only",
      B: "Task, async/await, ThreadPool, Parallel",
      C: "Database connections",
      D: "Static variables"
    },
    answer: "B",
    explanation: "High-level abstractions (Tasks, TPL, ThreadPool, async/await) supersede manual thread management."
  },
  {
    id: "lec8_q51",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "ThreadPool",
    qNum: 51,
    question: "ThreadPool in .NET is:",
    options: {
      A: "A collection of reusable worker threads",
      B: "A database pool",
      C: "A memory manager",
      D: "A type of lock"
    },
    answer: "A",
    explanation: "ThreadPool maintains a managed collection of reusable background worker threads."
  },
  {
    id: "lec8_q52",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "ThreadPool Purpose",
    qNum: 52,
    question: "The main purpose of ThreadPool is to:",
    options: {
      A: "Create new threads repeatedly",
      B: "Reuse threads and improve scalability",
      C: "Replace the CPU",
      D: "Manage databases"
    },
    answer: "B",
    explanation: "It eliminates the heavy OS overhead of repeatedly creating and tearing down threads."
  },
  {
    id: "lec8_q53",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "ThreadPool Benefits",
    qNum: 53,
    question: "ThreadPool avoids:",
    options: {
      A: "Creating threads repeatedly",
      B: "Using tasks",
      C: "Running code",
      D: "Memory allocation"
    },
    answer: "A",
    explanation: "Reusing idle threads avoids kernel context switches and expensive thread creation costs."
  },
  {
    id: "lec8_q54",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Tasks & ThreadPool",
    qNum: 54,
    question: "Tasks can use:",
    options: {
      A: "ThreadPool threads when appropriate",
      B: "Database threads only",
      C: "Garbage Collector threads only",
      D: "UI threads always"
    },
    answer: "A",
    explanation: "Task schedulers automatically draw execution workers from the ThreadPool."
  },
  {
    id: "lec8_q55",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Task.Run Scope",
    qNum: 55,
    question: "Task.Run is mainly useful for:",
    options: {
      A: "CPU-bound work",
      B: "Database waiting",
      C: "HTTP requests",
      D: "File reading only"
    },
    answer: "A",
    explanation: "Offloading intensive calculations away from caller or UI threads."
  },
  {
    id: "lec8_q56",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Task.Run Usage",
    qNum: 56,
    question: "Which is the correct use of Task.Run?",
    options: {
      A: "await Task.Run(Calculate);",
      B: "await Task.Run(httpClient.GetAsync(url));",
      C: "lock(Task.Run());",
      D: "ThreadPool.Delete();"
    },
    answer: "A",
    explanation: "Wrapping synchronous compute tasks (Calculate) into Task.Run."
  },
  {
    id: "lec8_q57",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Task.Run Anti-pattern",
    qNum: 57,
    question: "Using Task.Run for HTTP requests is:",
    options: {
      A: "Recommended always",
      B: "Usually unnecessary",
      C: "Required for async",
      D: "The only way to use APIs"
    },
    answer: "B",
    explanation: "HTTP requests already possess asynchronous I/O primitives (GetAsync); wrapping them wastes threads."
  },
  {
    id: "lec8_q58",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "HTTP Async Calls",
    qNum: 58,
    question: "For HTTP asynchronous calls, prefer:",
    options: {
      A: "await httpClient.GetAsync(url);",
      B: "Task.Run(() => httpClient.GetAsync(url));",
      C: "Thread.Start();",
      D: "lock(url);"
    },
    answer: "A",
    explanation: "Call the native async method directly: await httpClient.GetAsync(url)."
  },
  {
    id: "lec8_q59",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Parallel.For",
    qNum: 59,
    question: "Parallel.For is used to:",
    options: {
      A: "Execute loop iterations in parallel",
      B: "Create databases",
      C: "Manage memory",
      D: "Replace async"
    },
    answer: "A",
    explanation: "Parallel.For executes independent loop iterations simultaneously across available cores."
  },
  {
    id: "lec8_q60",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Standard For Loop",
    qNum: 60,
    question: "Normal for loop executes iterations:",
    options: {
      A: "In parallel",
      B: "One after another",
      C: "On multiple cores always",
      D: "Using ThreadPool only"
    },
    answer: "B",
    explanation: "A standard for loop runs sequentially on a single thread from start to finish."
  },
  {
    id: "lec8_q61",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Parallel.For Workers",
    qNum: 61,
    question: "Parallel.For distributes work across:",
    options: {
      A: "Multiple ThreadPool threads",
      B: "One database",
      C: "Garbage Collector",
      D: "HTTP servers"
    },
    answer: "A",
    explanation: "Parallel.For automatically partitions loop indices across worker threads from the ThreadPool."
  },
  {
    id: "lec8_q62",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Parallel.For Workload",
    qNum: 62,
    question: "Parallel.For is mainly useful for:",
    options: {
      A: "CPU-bound work",
      B: "Waiting for network",
      C: "Database queries",
      D: "Reading files asynchronously"
    },
    answer: "A",
    explanation: "Compute-intensive loops (e.g. matrix mathematics, image pixel transformations)."
  },
  {
    id: "lec8_q63",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Parallel.For Efficiency",
    qNum: 63,
    question: "For Parallel.For to work efficiently, each iteration should be:",
    options: {
      A: "Independent",
      B: "Dependent on previous iteration",
      C: "Locked always",
      D: "Stored in database"
    },
    answer: "A",
    explanation: "Loop iterations must be embarrassingly parallel and independent of previous iterations."
  },
  {
    id: "lec8_q64",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Parallel.For Cores",
    qNum: 64,
    question: "Which statement about Parallel.For is correct?",
    options: {
      A: "Iterations may execute at the same time on different CPU cores",
      B: "It always executes sequentially",
      C: "It replaces Garbage Collector",
      D: "It is only for I/O operations"
    },
    answer: "A",
    explanation: "The runtime schedules different iteration blocks across distinct physical CPU cores."
  },
  {
    id: "lec8_q65",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Tool Selection",
    qNum: 65,
    question: "Which tool is better for CPU-intensive calculations?",
    options: {
      A: "Parallel.For",
      B: "HTTP request",
      C: "Database query",
      D: "await only"
    },
    answer: "A",
    explanation: "Parallel.For distributes compute loops across multi-core CPUs."
  },
  {
    id: "lec8_q66",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Tool Selection",
    qNum: 66,
    question: "Which tool is better for I/O waiting operations?",
    options: {
      A: "async/await",
      B: "Parallel.For",
      C: "Manual threads always",
      D: "Lock"
    },
    answer: "A",
    explanation: "async/await releases threads during I/O waiting periods."
  },
  {
    id: "lec8_q67",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Manual Threading Risks",
    qNum: 67,
    question: "Creating a new Thread for every operation is discouraged because:",
    options: {
      A: "It can reduce scalability",
      B: "It improves memory always",
      C: "It removes CPU usage",
      D: "It prevents execution"
    },
    answer: "A",
    explanation: "Each thread claims 1MB of stack memory plus kernel scheduling overhead, crippling server scalability."
  },
  {
    id: "lec8_q68",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Modern Concurrency",
    qNum: 68,
    question: "Modern .NET applications prefer:",
    options: {
      A: "ThreadPool and Tasks",
      B: "Creating thousands of Threads",
      C: "Blocking operations",
      D: "Manual synchronization only"
    },
    answer: "A",
    explanation: "Tasks backed by the smart ThreadPool scheduler."
  },
  {
    id: "lec8_q69",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "ThreadPool Purpose",
    qNum: 69,
    question: "The main purpose of ThreadPool is:",
    options: {
      A: "Efficient thread reuse",
      B: "Memory deletion",
      C: "Data encryption",
      D: "API authentication"
    },
    answer: "A",
    explanation: "Thread recycling and pooling."
  },
  {
    id: "lec8_q70",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Race Conditions",
    qNum: 70,
    question: "A race condition occurs when:",
    options: {
      A: "One thread accesses data",
      B: "Multiple threads access shared data and the result depends on timing",
      C: "Memory is released",
      D: "A task completes successfully"
    },
    answer: "B",
    explanation: "Multiple threads read and write shared data without synchronization, producing erratic results based on thread timing."
  },
  {
    id: "lec8_q71",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Race Condition Causes",
    qNum: 71,
    question: "The main cause of race conditions is:",
    options: {
      A: "Shared state accessed by multiple threads",
      B: "Using async/await",
      C: "Creating objects",
      D: "Using Task.WhenAll"
    },
    answer: "A",
    explanation: "Unprotected mutable shared state."
  },
  {
    id: "lec8_q72",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Shared State Example",
    qNum: 72,
    question: "Which of the following is an example of shared state?",
    options: {
      A: "int counter",
      B: "CPU core",
      C: "HTTP request",
      D: "Method name"
    },
    answer: "A",
    explanation: "A mutable integer counter variable shared among concurrent threads."
  },
  {
    id: "lec8_q73",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Atomicity",
    qNum: 73,
    question: "The operation counter++ is actually composed of:",
    options: {
      A: "Create → Delete → Save",
      B: "Read → Modify → Write",
      C: "Start → Wait → Finish",
      D: "Open → Close → Dispose"
    },
    answer: "B",
    explanation: "counter++ is not atomic: it reads current value into CPU register, increments it, and writes it back."
  },
  {
    id: "lec8_q74",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Atomicity",
    qNum: 74,
    question: "Why can two threads interfere with counter++?",
    options: {
      A: "Because the operation is not atomic",
      B: "Because memory does not exist",
      C: "Because threads cannot run",
      D: "Because Task is disabled"
    },
    answer: "A",
    explanation: "Lack of atomicity allows another thread to interleave reads/writes midway."
  },
  {
    id: "lec8_q75",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Thread-Safe Code",
    qNum: 75,
    question: "Thread-safe code means:",
    options: {
      A: "Code that works correctly when accessed concurrently by multiple threads",
      B: "Code that uses only one thread",
      C: "Code without variables",
      D: "Code without methods"
    },
    answer: "A",
    explanation: "Thread-safety guarantees deterministic, correct state mutations despite concurrent multi-thread invocations."
  },
  {
    id: "lec8_q76",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Race Conditions",
    qNum: 76,
    question: "Which situation can create a race condition?",
    options: {
      A: "Multiple threads modifying the same variable",
      B: "Reading a constant value",
      C: "Creating a new class",
      D: "Calling a method once"
    },
    answer: "A",
    explanation: "Concurrent mutations on unsynchronized variables."
  },
  {
    id: "lec8_q77",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Synchronization",
    qNum: 77,
    question: "One solution for synchronization is using:",
    options: {
      A: "lock",
      B: "JSON",
      C: "HTTP",
      D: "Garbage Collector"
    },
    answer: "A",
    explanation: "C# lock statement establishes mutual exclusion."
  },
  {
    id: "lec8_q78",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Lock Statement",
    qNum: 78,
    question: "The purpose of lock is to:",
    options: {
      A: "Allow only one thread into a critical section at a time",
      B: "Create new threads",
      C: "Delete memory",
      D: "Increase CPU cores"
    },
    answer: "A",
    explanation: "Mutual exclusion: strictly one thread enters the critical section at any given time."
  },
  {
    id: "lec8_q79",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Lock Statement",
    qNum: 79,
    question: "Inside a lock block:",
    options: {
      A: "Multiple threads enter together",
      B: "Only one thread enters at a time",
      C: "No thread can enter",
      D: "Threads are deleted"
    },
    answer: "B",
    explanation: "Serializes entry so other threads wait outside until release."
  },
  {
    id: "lec8_q80",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Lock Statement",
    qNum: 80,
    question: "The variable is protected from:",
    options: {
      A: "Memory allocation",
      B: "Race conditions",
      C: "Garbage Collection",
      D: "API errors"
    },
    answer: "B",
    explanation: "Lock blocks conflicting writes, preventing race conditions."
  },
  {
    id: "lec8_q81",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Interlocked Class",
    qNum: 81,
    question: "Interlocked is used for:",
    options: {
      A: "Simple atomic operations",
      B: "Creating UI elements",
      C: "Database connections",
      D: "HTTP communication"
    },
    answer: "A",
    explanation: "Hardware-level atomic primitives (CAS - Compare-And-Swap) for primitive types."
  },
  {
    id: "lec8_q82",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Interlocked Class",
    qNum: 82,
    question: "Which method safely increments a counter atomically?",
    options: {
      A: "counter++",
      B: "Interlocked.Increment(ref counter)",
      C: "counter = counter + 1 only",
      D: "Thread.Start(counter)"
    },
    answer: "B",
    explanation: "Interlocked.Increment(ref counter) compiles down to a hardware atomic bus lock."
  },
  {
    id: "lec8_q83",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Interlocked Operations",
    qNum: 83,
    question: "Interlocked is useful for:",
    options: {
      A: "Increment, Decrement, Add, Exchange",
      B: "Creating classes",
      C: "Managing databases",
      D: "Sending HTTP requests"
    },
    answer: "A",
    explanation: "Atomic numeric operations and pointer exchanges."
  },
  {
    id: "lec8_q84",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Interlocked vs Lock",
    qNum: 84,
    question: "Compared with lock, Interlocked is suitable for:",
    options: {
      A: "Simple atomic operations",
      B: "Large critical sections",
      C: "Complex business logic",
      D: "Database transactions"
    },
    answer: "A",
    explanation: "Lightweight and non-blocking, but limited to simple atomic variable mutations."
  },
  {
    id: "lec8_q85",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Concurrent Collections",
    qNum: 85,
    question: ".NET provides concurrent collections for:",
    options: {
      A: "Safe concurrent access",
      B: "Replacing databases",
      C: "Creating threads manually",
      D: "Memory cleanup"
    },
    answer: "A",
    explanation: "Thread-safe data structures optimized for concurrent readers and writers without coarse locking."
  },
  {
    id: "lec8_q86",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Concurrent Collections",
    qNum: 86,
    question: "Which of the following is a concurrent collection?",
    options: {
      A: "ConcurrentDictionary",
      B: "List only",
      C: "Array only",
      D: "String only"
    },
    answer: "A",
    explanation: "ConcurrentDictionary<TKey, TValue>."
  },
  {
    id: "lec8_q87",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Concurrent Collections",
    qNum: 87,
    question: "Which collection is designed for concurrent queue operations?",
    options: {
      A: "ConcurrentQueue",
      B: "Queue only",
      C: "Dictionary",
      D: "Stack only"
    },
    answer: "A",
    explanation: "ConcurrentQueue<T> supports lock-free Enqueue/TryDequeue."
  },
  {
    id: "lec8_q88",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Concurrent Collections",
    qNum: 88,
    question: "Concurrent collections are useful when:",
    options: {
      A: "Multiple threads add/remove items",
      B: "Only one thread exists",
      C: "No data is stored",
      D: "The program stops"
    },
    answer: "A",
    explanation: "Multiple worker threads produce and consume elements simultaneously."
  },
  {
    id: "lec8_q89",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Concurrent Collections Namespace",
    qNum: 89,
    question: "Which namespace contains thread-safe collection types?",
    options: {
      A: "System.Collections.Concurrent",
      B: "System.Threading.UI",
      C: "System.Database",
      D: "System.Memory"
    },
    answer: "A",
    explanation: "System.Collections.Concurrent."
  },
  {
    id: "lec8_q90",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Deadlocks",
    qNum: 90,
    question: "Deadlock occurs when:",
    options: {
      A: "Threads wait forever for resources held by each other",
      B: "Memory is released",
      C: "Tasks finish quickly",
      D: "A thread runs once"
    },
    answer: "A",
    explanation: "Circular wait: Thread 1 holds Lock A waiting for Lock B, while Thread 2 holds Lock B waiting for Lock A."
  },
  {
    id: "lec8_q91",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Deadlocks",
    qNum: 91,
    question: "In a deadlock:",
    options: {
      A: "Threads continue normally",
      B: "Threads are stuck waiting",
      C: "Memory is deleted",
      D: "CPU stops permanently"
    },
    answer: "B",
    explanation: "The affected threads freeze indefinitely, unable to proceed."
  },
  {
    id: "lec8_q92",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Deadlock Causes",
    qNum: 92,
    question: "A common cause of deadlock is:",
    options: {
      A: "Nested locks",
      B: "Using variables",
      C: "Creating methods",
      D: "Using classes"
    },
    answer: "A",
    explanation: "Acquiring locks in inconsistent or nested orders across different threads."
  },
  {
    id: "lec8_q93",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Deadlock Prevention",
    qNum: 93,
    question: "To reduce deadlocks, locks should be:",
    options: {
      A: "Kept small",
      B: "Used everywhere",
      C: "Nested deeply",
      D: "Randomly ordered"
    },
    answer: "A",
    explanation: "Keep critical sections as small and brief as possible."
  },
  {
    id: "lec8_q94",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Deadlock Prevention",
    qNum: 94,
    question: "Avoiding nested locks helps prevent:",
    options: {
      A: "Deadlocks",
      B: "Garbage Collection",
      C: "Compilation errors",
      D: "API requests"
    },
    answer: "A",
    explanation: "Preventing nested locking breaks circular dependency preconditions."
  },
  {
    id: "lec8_q95",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Lock Ordering",
    qNum: 95,
    question: "Consistent lock ordering means:",
    options: {
      A: "Always acquire multiple locks in the same order",
      B: "Use random lock order",
      C: "Avoid all locks",
      D: "Delete locks"
    },
    answer: "A",
    explanation: "If Lock A and Lock B are needed, every thread must acquire Lock A first, then Lock B."
  },
  {
    id: "lec8_q96",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Async Deadlocks",
    qNum: 96,
    question: "Blocking async code using .Result or .Wait() can cause:",
    options: {
      A: "Deadlocks in some environments",
      B: "Faster execution always",
      C: "Better scalability always",
      D: "More memory"
    },
    answer: "A",
    explanation: "Calling .Result on UI or ASP.NET SynchronizationContext blocks the thread waiting for a continuation it cannot post, causing deadlocks."
  },
  {
    id: "lec8_q97",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Async Best Practice",
    qNum: 97,
    question: "Prefer:",
    options: {
      A: "await GetDataAsync()",
      B: "Thread.Sleep()",
      C: "lock()",
      D: "new Thread()"
    },
    answer: "A",
    explanation: "Asynchronous await is vastly preferred over synchronous thread sleep."
  },
  {
    id: "lec8_q98",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "High-level Abstractions",
    qNum: 98,
    question: "A higher-level concurrency abstraction example is:",
    options: {
      A: "ConcurrentQueue",
      B: "Manual locking everywhere",
      C: "Creating threads repeatedly",
      D: "Blocking async calls"
    },
    answer: "A",
    explanation: "ConcurrentQueue abstracts complex low-level lock mechanics away from application code."
  },
  {
    id: "lec8_q99",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Locking Principle",
    qNum: 99,
    question: "The key principle about locks is:",
    options: {
      A: "Locks protect shared data, but unnecessary locking can hurt performance",
      B: "More locks always mean better performance",
      C: "Locks remove all bugs",
      D: "Locks replace async programming"
    },
    answer: "A",
    explanation: "Overuse of locks serializes execution and destroys concurrency throughput."
  },
  {
    id: "lec8_q100",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Memory Management",
    qNum: 100,
    question: "Memory management is the process of:",
    options: {
      A: "Only allocating memory",
      B: "Allocating, using, releasing, and reusing memory",
      C: "Creating threads only",
      D: "Managing databases"
    },
    answer: "B",
    explanation: "The complete lifecycle of memory: allocation, utilization, deallocation, and reuse."
  },
  {
    id: "lec8_q101",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Garbage Collector",
    qNum: 101,
    question: "In .NET, memory management is largely handled by:",
    options: {
      A: "ThreadPool",
      B: "Garbage Collector (GC)",
      C: "Compiler",
      D: "HTTP Server"
    },
    answer: "B",
    explanation: "The .NET runtime Garbage Collector automatically supervises managed memory."
  },
  {
    id: "lec8_q102",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Stack vs Heap",
    qNum: 102,
    question: "The two main memory areas discussed are:",
    options: {
      A: "CPU and GPU",
      B: "Stack and Heap",
      C: "RAM and ROM",
      D: "Cache and Disk"
    },
    answer: "B",
    explanation: "Stack (fast, scope-bound) and Managed Heap (dynamic, GC-collected)."
  },
  {
    id: "lec8_q103",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Stack Memory",
    qNum: 103,
    question: "Stack usually contains:",
    options: {
      A: "Dynamically allocated objects",
      B: "Local variables and method call information",
      C: "Database connections",
      D: "External resources"
    },
    answer: "B",
    explanation: "Stack stores activation call frames, return addresses, and local value-type variables."
  },
  {
    id: "lec8_q104",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Stack Storage",
    qNum: 104,
    question: "int x = 10; stores:",
    options: {
      A: "Object",
      B: "Local value",
      C: "Database connection",
      D: "File handle"
    },
    answer: "B",
    explanation: "Value type primitive stored directly as a local value on the thread's Stack."
  },
  {
    id: "lec8_q105",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Heap Memory",
    qNum: 105,
    question: "Heap is used for:",
    options: {
      A: "Dynamically allocated objects",
      B: "Method names",
      C: "CPU instructions only",
      D: "Local variables only"
    },
    answer: "A",
    explanation: "Heap stores all reference type instances and dynamically allocated objects."
  },
  {
    id: "lec8_q106",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Heap Allocation",
    qNum: 106,
    question: "Which statement creates an object on the managed Heap?",
    options: {
      A: "int x = 10;",
      B: "var user = new User();",
      C: "return;",
      D: "await Task.Delay();"
    },
    answer: "B",
    explanation: "'new User()' instantiates a class reference type on the managed Heap."
  },
  {
    id: "lec8_q107",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Value Types",
    qNum: 107,
    question: "Value Types include:",
    options: {
      A: "Class and object",
      B: "int, double, bool, struct, enum",
      C: "Array and string",
      D: "Database connection"
    },
    answer: "B",
    explanation: "int, double, bool, struct, and enum inherit from System.ValueType."
  },
  {
    id: "lec8_q108",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Value Copying",
    qNum: 108,
    question: "In (int x = 5; int y = x; y = 10;), changing y will:",
    options: {
      A: "Change x automatically",
      B: "Not affect x",
      C: "Delete x",
      D: "Move x to Heap"
    },
    answer: "B",
    explanation: "Value types copy the underlying bits; mutating y leaves x completely unaffected."
  },
  {
    id: "lec8_q109",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Reference Types",
    qNum: 109,
    question: "Reference Types include:",
    options: {
      A: "int and bool",
      B: "class, object, string, Array",
      C: "enum only",
      D: "struct only"
    },
    answer: "B",
    explanation: "Classes, strings, and arrays are managed heap reference types."
  },
  {
    id: "lec8_q110",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Reference Copying",
    qNum: 110,
    question: "When two Reference Types point to the same object:",
    options: {
      A: "They have separate objects",
      B: "They reference the same object",
      C: "The object is deleted",
      D: "Memory is duplicated"
    },
    answer: "B",
    explanation: "Assignment copies the pointer/reference; mutations through one variable reflect in the other."
  },
  {
    id: "lec8_q111",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Reference Example",
    qNum: 111,
    question: "In (var user1 = new User(); var user2 = user1;), here:",
    options: {
      A: "user1 and user2 point to the same object",
      B: "Two objects are created",
      C: "No object exists",
      D: "user2 is a Value Type"
    },
    answer: "A",
    explanation: "Both variables hold references pointing to the same Heap instance."
  },
  {
    id: "lec8_q112",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "GC Reachability",
    qNum: 112,
    question: "Garbage Collector (GC) identifies objects that are:",
    options: {
      A: "Recently created",
      B: "No longer reachable",
      C: "Always used",
      D: "Stored in Stack only"
    },
    answer: "B",
    explanation: "Objects unreachable from any active application roots (stack variables, static fields)."
  },
  {
    id: "lec8_q113",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "GC Role",
    qNum: 113,
    question: "The Garbage Collector reclaims:",
    options: {
      A: "Unused memory",
      B: "CPU cores",
      C: "Network connections only",
      D: "Source code"
    },
    answer: "A",
    explanation: "Reclaims unused heap memory for future allocations."
  },
  {
    id: "lec8_q114",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "GC Lifecycle",
    qNum: 114,
    question: "The correct GC lifecycle is:",
    options: {
      A: "Create Object → Use Object → No References → GC → Memory Reclaimed",
      B: "Delete Object → Create → Use",
      C: "Compile → Execute → Delete",
      D: "Thread → Lock → Dispose"
    },
    answer: "A",
    explanation: "Creation -> Usage -> Reference Loss -> GC Collection -> Memory Reclaimed."
  },
  {
    id: "lec8_q115",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Setting to Null",
    qNum: 115,
    question: "Setting an object reference to null means:",
    options: {
      A: "Memory is freed immediately",
      B: "Object may become eligible for GC",
      C: "Object is deleted instantly",
      D: "Heap is cleared"
    },
    answer: "B",
    explanation: "Removing the reference marks the object as eligible for future GC sweeping."
  },
  {
    id: "lec8_q116",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "GC Generations",
    qNum: 116,
    question: ".NET Garbage Collection uses:",
    options: {
      A: "One generation only",
      B: "Generations",
      C: "Manual deletion only",
      D: "CPU scheduling"
    },
    answer: "B",
    explanation: ".NET implements an episodic generational garbage collector (Gen 0, Gen 1, Gen 2)."
  },
  {
    id: "lec8_q117",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Generation 0",
    qNum: 117,
    question: "Generation 0 contains:",
    options: {
      A: "Long-lived objects",
      B: "Short-lived objects",
      C: "Database objects",
      D: "Threads"
    },
    answer: "B",
    explanation: "Freshly allocated, short-lived temporary objects."
  },
  {
    id: "lec8_q118",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Generation 1",
    qNum: 118,
    question: "Generation 1 contains objects that:",
    options: {
      A: "Survived Gen 0",
      B: "Are newly created only",
      C: "Are unmanaged",
      D: "Were deleted"
    },
    answer: "A",
    explanation: "Acts as a buffer for objects surviving Gen 0 collections."
  },
  {
    id: "lec8_q119",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Generation 2",
    qNum: 119,
    question: "Generation 2 contains:",
    options: {
      A: "Temporary objects",
      B: "Long-lived objects",
      C: "Local variables only",
      D: "CPU tasks"
    },
    answer: "B",
    explanation: "Long-lived objects (static singletons, cache stores, app domain objects)."
  },
  {
    id: "lec8_q120",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Generational Hypothesis",
    qNum: 120,
    question: "The idea behind generational GC is:",
    options: {
      A: "Most objects die young",
      B: "All objects live forever",
      C: "Objects never get collected",
      D: "Memory is always manual"
    },
    answer: "A",
    explanation: "The weak generational hypothesis: the majority of software objects have very short lifespans."
  },
  {
    id: "lec8_q121",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Managed Resources",
    qNum: 121,
    question: "Managed resources are controlled by:",
    options: {
      A: "Operating System only",
      B: ".NET Garbage Collector",
      C: "User manually",
      D: "Database"
    },
    answer: "B",
    explanation: "The CLR and GC oversee all managed heap allocations."
  },
  {
    id: "lec8_q122",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Unmanaged Resources",
    qNum: 122,
    question: "Which is an unmanaged resource?",
    options: {
      A: "String",
      B: "Array",
      C: "File handle",
      D: "List"
    },
    answer: "C",
    explanation: "File handles, socket pointers, and database connections are unmanaged OS handles."
  },
  {
    id: "lec8_q123",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Unmanaged Cleanup",
    qNum: 123,
    question: "Unmanaged resources often require:",
    options: {
      A: "Explicit cleanup",
      B: "No cleanup",
      C: "Garbage Collector only",
      D: "Thread creation"
    },
    answer: "A",
    explanation: "The GC does not know how to close OS handles; explicit disposal is required."
  },
  {
    id: "lec8_q124",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "IDisposable",
    qNum: 124,
    question: "IDisposable is used for:",
    options: {
      A: "Deterministic cleanup of resources",
      B: "Creating threads",
      C: "Managing APIs",
      D: "Encrypting data"
    },
    answer: "A",
    explanation: "IDisposable provides deterministic, prompt release of unmanaged resources."
  },
  {
    id: "lec8_q125",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Using Statement",
    qNum: 125,
    question: "The using statement automatically calls:",
    options: {
      A: "Start()",
      B: "Dispose()",
      C: "Run()",
      D: "Lock()"
    },
    answer: "B",
    explanation: "'using' generates a try-finally block that automatically calls Dispose() upon exit."
  },
  {
    id: "lec8_q126",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Dispose Requirement",
    qNum: 126,
    question: "Which resource commonly needs Dispose()?",
    options: {
      A: "SqlConnection",
      B: "int variable",
      C: "Boolean value",
      D: "Local string only"
    },
    answer: "A",
    explanation: "SqlConnection holds active network socket pools that must be disposed."
  },
  {
    id: "lec8_q127",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Memory Leaks",
    qNum: 127,
    question: "A Memory Leak happens when:",
    options: {
      A: "Memory is no longer useful but cannot be reclaimed",
      B: "CPU stops working",
      C: "A thread finishes",
      D: "A task completes"
    },
    answer: "A",
    explanation: "Unreferenced objects remain anchored to lingering roots (static collections), preventing GC collection."
  },
  {
    id: "lec8_q128",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Memory Leak Causes",
    qNum: 128,
    question: "A common cause of memory leaks is:",
    options: {
      A: "Static collections growing indefinitely",
      B: "Using await",
      C: "Using int variables",
      D: "Calling methods"
    },
    answer: "A",
    explanation: "Appending objects to static lists or dictionaries without clearing them."
  },
  {
    id: "lec8_q129",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Memory Leak Causes",
    qNum: 129,
    question: "Caching without limits can cause:",
    options: {
      A: "Memory leak",
      B: "Faster GC always",
      C: "No memory usage",
      D: "Thread creation"
    },
    answer: "A",
    explanation: "Unbounded in-memory caches eventually cause OutOfMemoryException crashes."
  },
  {
    id: "lec8_q130",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Memory Leak Causes",
    qNum: 130,
    question: "A static list that continuously stores objects causes:",
    options: {
      A: "Memory leak",
      B: "Better performance always",
      C: "Automatic deletion",
      D: "Less memory usage"
    },
    answer: "A",
    explanation: "Static variables are never garbage collected during the process lifetime."
  },
  {
    id: "lec8_q131",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Unmanaged Cleanup",
    qNum: 131,
    question: "The correct way to clean unmanaged resources is using:",
    options: {
      A: "IDisposable and using",
      B: "Thread.Sleep",
      C: "Task.Run",
      D: "Parallel.For"
    },
    answer: "A",
    explanation: "Implement IDisposable and wrap consumers in using blocks."
  },
  {
    id: "lec8_q132",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "GC Mechanics",
    qNum: 132,
    question: "Which statement is correct?",
    options: {
      A: "GC immediately frees memory when reference becomes null",
      B: "GC collects objects that are no longer reachable",
      C: "Heap contains only local variables",
      D: "Stack stores all objects"
    },
    answer: "B",
    explanation: "GC periodically runs tracing passes to collect unreachable objects."
  },
  {
    id: "lec8_q133",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Dashboard API Case Study",
    qNum: 133,
    question: "In the Web API dashboard example, the endpoint is:",
    options: {
      A: "POST /users",
      B: "GET /dashboard",
      C: "DELETE /dashboard",
      D: "PUT /dashboard"
    },
    answer: "B",
    explanation: "GET /dashboard."
  },
  {
    id: "lec8_q134",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Dashboard API Case Study",
    qNum: 134,
    question: "The dashboard needs data from:",
    options: {
      A: "User only",
      B: "Orders only",
      C: "User, Orders, Payments, Notifications",
      D: "Database only"
    },
    answer: "C",
    explanation: "It aggregates four distinct services: User, Orders, Payments, and Notifications."
  },
  {
    id: "lec8_q135",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Dashboard API Case Study",
    qNum: 135,
    question: "The bad implementation loads dashboard data using:",
    options: {
      A: "Task.WhenAll",
      B: "Sequential awaits",
      C: "Parallel.For",
      D: "ThreadPool"
    },
    answer: "B",
    explanation: "Awaiting each call sequentially: await GetUser(); await GetOrders()..."
  },
  {
    id: "lec8_q136",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Dashboard API Case Study",
    qNum: 136,
    question: "In the bad dashboard implementation, if each operation takes 1 second, total time is approximately:",
    options: {
      A: "1 second",
      B: "2 seconds",
      C: "4 seconds",
      D: "10 seconds"
    },
    answer: "C",
    explanation: "4 operations × 1 second each sequentially = 4 seconds total."
  },
  {
    id: "lec8_q137",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Dashboard API Case Study",
    qNum: 137,
    question: "The better dashboard implementation uses:",
    options: {
      A: "Thread.Sleep",
      B: "Task.WhenAll",
      C: "lock",
      D: "Manual threads"
    },
    answer: "B",
    explanation: "Task.WhenAll executes all four calls concurrently."
  },
  {
    id: "lec8_q138",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Dashboard API Case Study",
    qNum: 138,
    question: "Using Task.WhenAll in the dashboard example reduces time because:",
    options: {
      A: "Operations run concurrently",
      B: "Database is removed",
      C: "Memory is deleted",
      D: "Threads are stopped"
    },
    answer: "A",
    explanation: "All I/O requests execute in parallel across the network."
  },
  {
    id: "lec8_q139",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Dashboard API Case Study",
    qNum: 139,
    question: "The improved dashboard execution time is approximately:",
    options: {
      A: "4 seconds",
      B: "3 seconds",
      C: "2 seconds",
      D: "1 second"
    },
    answer: "D",
    explanation: "Running four 1-second operations concurrently completes in ~1 second."
  },
  {
    id: "lec8_q140",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Mistake 1 in Lecture",
    qNum: 140,
    question: "Mistake 1 in the lecture is:",
    options: {
      A: "Using Task.WhenAll",
      B: "Using Task.Run(() => DatabaseCall()) unnecessarily",
      C: "Using await",
      D: "Using ThreadPool"
    },
    answer: "B",
    explanation: "Unnecessarily wrapping native async I/O inside Task.Run."
  },
  {
    id: "lec8_q141",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Mistake 1 in Lecture",
    qNum: 141,
    question: "Task.Run(() => DatabaseCall()) is not always better because:",
    options: {
      A: "It may add unnecessary overhead",
      B: "It removes the database",
      C: "It prevents execution",
      D: "It deletes threads"
    },
    answer: "A",
    explanation: "It wastes a thread pool thread to merely wait on an I/O completion port."
  },
  {
    id: "lec8_q142",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Mistake 1 in Lecture",
    qNum: 142,
    question: "For asynchronous database calls, prefer:",
    options: {
      A: "Task.Run always",
      B: "Native async methods with await",
      C: "Manual Thread creation",
      D: "Thread.Sleep"
    },
    answer: "B",
    explanation: "Use EF Core native methods: await context.Users.ToListAsync()."
  },
  {
    id: "lec8_q143",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Mistake 2 in Lecture",
    qNum: 143,
    question: "Mistake 2 is using:",
    options: {
      A: "await",
      B: ".Result and .Wait()",
      C: "Task.WhenAll",
      D: "ThreadPool"
    },
    answer: "B",
    explanation: "Sync-over-async blocking via .Result and .Wait()."
  },
  {
    id: "lec8_q144",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Mistake 2 in Lecture",
    qNum: 144,
    question: "Using .Result and .Wait() can:",
    options: {
      A: "Block threads and potentially cause deadlocks",
      B: "Improve scalability always",
      C: "Replace async/await",
      D: "Remove memory leaks"
    },
    answer: "A",
    explanation: "Sync-over-async causes thread starvation and synchronization context deadlocks."
  },
  {
    id: "lec8_q145",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Mistake 2 in Lecture",
    qNum: 145,
    question: "The preferred alternative to .Result is:",
    options: {
      A: "Thread.Sleep()",
      B: "await",
      C: "lock",
      D: "new Thread()"
    },
    answer: "B",
    explanation: "Always asynchronously await the task instead."
  },
  {
    id: "lec8_q146",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Mistake 3 in Lecture",
    qNum: 146,
    question: "Mistake 3 is:",
    options: {
      A: "Using shared variables without synchronization",
      B: "Using Task.WhenAll",
      C: "Using GC",
      D: "Using IDisposable"
    },
    answer: "A",
    explanation: "Mutating shared variables from multiple threads without locks or thread-safe constructs."
  },
  {
    id: "lec8_q147",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Mistake 3 in Lecture",
    qNum: 147,
    question: "Shared variables without synchronization are dangerous because:",
    options: {
      A: "It is always atomic",
      B: "Multiple threads may modify shared data",
      C: "It creates a new object",
      D: "It releases memory"
    },
    answer: "B",
    explanation: "Concurrent unsynchronized writes lead to race conditions and corrupt memory."
  },
  {
    id: "lec8_q148",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Mistake 4 in Lecture",
    qNum: 148,
    question: "Mistake 4 is:",
    options: {
      A: "Creating a new Thread for every operation",
      B: "Using ThreadPool",
      C: "Using async/await",
      D: "Using Task"
    },
    answer: "A",
    explanation: "Manual 'new Thread()' instantiation for every incoming request."
  },
  {
    id: "lec8_q149",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Mistake 4 in Lecture",
    qNum: 149,
    question: "Instead of creating many Threads, prefer:",
    options: {
      A: "Task, ThreadPool, async/await",
      B: "Manual locks everywhere",
      C: "Blocking calls",
      D: "Static variables"
    },
    answer: "A",
    explanation: "Harness Task, async/await, and the ThreadPool."
  },
  {
    id: "lec8_q150",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Memory Profiling",
    qNum: 150,
    question: "For memory performance, the lecture says:",
    options: {
      A: "Guess the problem",
      B: "Measure using tools",
      C: "Ignore memory usage",
      D: "Delete GC"
    },
    answer: "B",
    explanation: "Never guess; measure and profile using diagnostic tools."
  },
  {
    id: "lec8_q151",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Visual Studio Tools",
    qNum: 151,
    question: "Visual Studio Diagnostic Tools can show:",
    options: {
      A: "CPU Usage and Memory Usage",
      B: "Only database tables",
      C: "Only HTTP requests",
      D: "Only source code"
    },
    answer: "A",
    explanation: "Real-time graphs of CPU percentage, GC allocations, and process memory."
  },
  {
    id: "lec8_q152",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Memory Snapshot",
    qNum: 152,
    question: "To take a memory snapshot, use:",
    options: {
      A: "Diagnostic Tools",
      B: "Thread.Sleep",
      C: "Task.WhenAny",
      D: "lock"
    },
    answer: "A",
    explanation: "Memory profiler in Diagnostic Tools captures heap snapshots to identify leaks."
  },
  {
    id: "lec8_q153",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "dotnet-counters",
    qNum: 153,
    question: "dotnet-counters is used for:",
    options: {
      A: "Monitoring runtime counters",
      B: "Creating APIs",
      C: "Writing code",
      D: "Compiling projects"
    },
    answer: "A",
    explanation: "Live command-line monitoring of runtime performance metrics (CPU, GC heap size, thread count)."
  },
  {
    id: "lec8_q154",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "dotnet-counters",
    qNum: 154,
    question: "The command used with dotnet-counters includes:",
    options: {
      A: "monitor --process-id",
      B: "delete --memory",
      C: "create --thread",
      D: "run --api"
    },
    answer: "A",
    explanation: "dotnet-counters monitor --process-id <PID>."
  },
  {
    id: "lec8_q155",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "dotnet-trace",
    qNum: 155,
    question: "dotnet-trace is used for:",
    options: {
      A: "Collecting tracing information",
      B: "Creating database tables",
      C: "Encrypting passwords",
      D: "Running HTTP requests"
    },
    answer: "A",
    explanation: "Cross-platform sampling profiler for collecting CPU stacks and performance traces."
  },
  {
    id: "lec8_q156",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "dotnet-dump",
    qNum: 156,
    question: "dotnet-dump is used to:",
    options: {
      A: "Collect and analyze memory dumps",
      B: "Create threads",
      C: "Replace GC",
      D: "Send API requests"
    },
    answer: "A",
    explanation: "Captures and analyzes post-mortem crash dumps without native debuggers."
  },
  {
    id: "lec8_q157",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "GC Metrics",
    qNum: 157,
    question: "GC metrics help investigate:",
    options: {
      A: "Garbage Collection and memory performance",
      B: "HTTP methods",
      C: "API endpoints",
      D: "User interfaces"
    },
    answer: "A",
    explanation: "Investigates allocation rates, pause times, and generational collection frequency."
  },
  {
    id: "lec8_q158",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Performance Methodology",
    qNum: 158,
    question: "Which combination is recommended for modern .NET performance?",
    options: {
      A: "Measure, profile, and analyze",
      B: "Guess and optimize randomly",
      C: "Use maximum threads always",
      D: "Disable GC"
    },
    answer: "A",
    explanation: "Scientific performance engineering: Measure baseline, profile bottlenecks, and analyze metrics."
  },
  {
    id: "lec8_q159",
    lectureId: 8,
    lectureTitle: "Lecture 8: Async, Concurrency, Multithreading & Memory Management",
    lectureTitleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    topic: "Lecture Summary",
    qNum: 159,
    question: "The main topics covered in the lecture are:",
    options: {
      A: "Async, Concurrency, Multithreading, Memory Management",
      B: "Databases only",
      C: "Web APIs only",
      D: "UI Design only"
    },
    answer: "A",
    explanation: "Lecture 8 comprehensively covers Asynchronous programming, Concurrency, Multithreading, and Memory Management."
  }
];
