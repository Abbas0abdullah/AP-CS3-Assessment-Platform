// Master Question Bank Aggregator
import { lec1Questions } from './questions-lec1.js';
import { lec2Questions } from './questions-lec2.js';
import { lec3Questions } from './questions-lec3.js';
import { lec4Questions } from './questions-lec4.js';
import { lec5Questions } from './questions-lec5.js';
import { lec7Questions } from './questions-lec7.js';
import { lec8Questions } from './questions-lec8.js';
import { lec9Questions } from './questions-lec9.js';

export const LECTURES_META = [
  {
    id: 1,
    key: "lec1",
    code: "Lec 1",
    title: ".NET Platform, OOP Foundations & SOLID Principles",
    titleAr: "المحاضرة 1: بيئة .NET، أساسيات الكينونية ومبادئ SOLID",
    description: "تغطية كاملة لـ CLR، Garbage Collection، الأمان التيبوغرافي، ومبادئ SOLID الخمسة مع أمثلة الكود.",
    count: lec1Questions.length,
    instructor: "Dr. Baidaa Laalaa & Eng. Abdulmalik Hassan Alhaj",
    tags: ["SOLID", ".NET", "OOP", "CLR", "C#"],
    badgeColor: "#3b82f6"
  },
  {
    id: 2,
    key: "lec2",
    code: "Lec 2",
    title: "Software Design Patterns & Creational (Singleton & Factory)",
    titleAr: "المحاضرة 2: أنماط التصميم والإنشائية: Singleton & Factory Method",
    description: "مشاكل التصميم السيء، تاريخ Gang of Four (23 نمط)، تصنيفات الأنماط، ونمطي Singleton و Factory.",
    count: lec2Questions.length,
    instructor: "Dr. Baidaa Laalaa & Eng. Abdulmalik Hassan Alhaj",
    tags: ["Creational", "Singleton", "Factory", "GoF"],
    badgeColor: "#8b5cf6"
  },
  {
    id: 3,
    key: "lec3",
    code: "Lec 3",
    title: "Structural Patterns (Adapter, Facade, Proxy, Decorator)",
    titleAr: "المحاضرة 3: أنماط التصميم الهيكلية: المحول، الواجهة، البروكسي، والمزخرف",
    description: "علاقات UML، والأنماط الهيكلية الأربعة مع التشبيهات الواقعية وتطبيقات الدفع والمراسلة ومحرر النصوص.",
    count: lec3Questions.length,
    instructor: "Dr. Baidaa Laalaa & Eng. Abdulmalik Hassan Alhaj",
    tags: ["Structural", "Adapter", "Facade", "Proxy", "Decorator", "UML"],
    badgeColor: "#ec4899"
  },
  {
    id: 4,
    key: "lec4",
    code: "Lec 4",
    title: "Behavioral Patterns (Strategy & Observer) & Pattern Matrix",
    titleAr: "المحاضرة 4: أنماط التصميم السلوكية: Strategy & Observer ومصفوفة المقارنة",
    description: "تبديل الخوارزميات ديناميكياً، نظام الإشعارات واحد إلى متعدد، مقارنة شاملة بين الأنماط وربطها بـ SOLID.",
    count: lec4Questions.length,
    instructor: "Dr. Baidaa Laalaa & Eng. Abdulmalik Hassan Alhaj",
    tags: ["Behavioral", "Strategy", "Observer", "SOLID Mapping"],
    badgeColor: "#f59e0b"
  },
  {
    id: 5,
    key: "lec5",
    code: "Lec 5+6",
    title: "Software Architecture, Clean Architecture & ASP.NET Core",
    titleAr: "المحاضرة 5+6: معمارية البرمجيات، المعمارية النظيفة وبيئة ASP.NET Core",
    description: "المعمارية متعددة الطبقات مقابل المعمارية النظيفة، Domain، Use Cases، DTOs، Repository، وحقن التبعيات DI.",
    count: lec5Questions.length,
    instructor: "Dr. Baidaa Laalaa & Eng. Abdulmalik Hassan Alhaj",
    tags: ["Clean Architecture", "Domain Layer", "DTO", "Repository", "ASP.NET Core", "DI"],
    badgeColor: "#f43f5e"
  },
  {
    id: 7,
    key: "lec7",
    code: "Lec 7",
    title: "Web APIs, REST, SOAP, GraphQL, gRPC & API Security",
    titleAr: "المحاضرة 7: واجهات برمجة التطبيقات Web APIs وأمانها (JWT, OAuth, REST, gRPC)",
    description: "تصنيفات الـ API، بروتوكولات REST vs SOAP vs GraphQL vs gRPC، أكواد HTTP، أمان الـ API عبر JWT و OAuth 2.0، وأدوات Swagger و Postman واختبارات الوحدات والتكامل.",
    count: lec7Questions.length,
    instructor: "Dr. Baidaa Laalaa & Eng. Abdulmalik Hassan Alhaj",
    tags: ["Web APIs", "REST", "SOAP", "GraphQL", "gRPC", "JWT", "OAuth 2.0", "Swagger"],
    badgeColor: "#06b6d4"
  },
  {
    id: 8,
    key: "lec8",
    code: "Lec 8",
    title: "Asynchronous Programming, Concurrency, Multithreading & Memory Management",
    titleAr: "المحاضرة 8: البرمجة غير المتزامنة والتوازي وإدارة الذاكرة في .NET",
    description: "التنفيذ المتزامن وغير المتزامن، عمليات I/O مقابل CPU-Bound، فئات Task و ThreadPool، ظاهرة السباق والأقفال lock و Interlocked، وذاكرة Stack/Heap ودورة Garbage Collector والأجيال ومراقبة الأداء.",
    count: lec8Questions.length,
    instructor: "Dr. Baidaa Laalaa & Eng. Abdulmalik Hassan Alhaj",
    tags: ["Async/Await", "Tasks", "Concurrency", "ThreadPool", "Race Condition", "Locks", "Garbage Collector", "Memory"],
    badgeColor: "#a855f7"
  },
  {
    id: 9,
    key: "lec9",
    code: "Lec 9",
    title: "Microservices, Webhooks, AI Engineering & RAG Systems",
    titleAr: "المحاضرة 9: الخدمات المصغرة Microservices والويب هوك وهندسة الذكاء الاصطناعي و RAG",
    description: "المعمارية الأحادية مقابل الخدمات المصغرة، وسيط الرسائل Message Brokers (RabbitMQ/Kafka)، أنظمة Webhooks، استرجاع المعرفة المعزز RAG، قواعد بيانات المتجهات pgvector، واستراتيجيات الصمود Retry و Circuit Breaker.",
    count: lec9Questions.length,
    instructor: "Dr. Baidaa Laalaa & Eng. Abdulmalik Hassan Alhaj",
    tags: ["Microservices", "Webhooks", "RAG", "LLM", "Vector DB", "RabbitMQ", "Kafka", "Resilience"],
    badgeColor: "#10b981"
  }
];

export const ALL_QUESTIONS = [
  ...lec1Questions,
  ...lec2Questions,
  ...lec3Questions,
  ...lec4Questions,
  ...lec5Questions,
  ...lec7Questions,
  ...lec8Questions,
  ...lec9Questions
];

export const TOTAL_QUESTIONS_COUNT = ALL_QUESTIONS.length;
console.log(`Loaded ${TOTAL_QUESTIONS_COUNT} questions across ${LECTURES_META.length} lectures.`);

