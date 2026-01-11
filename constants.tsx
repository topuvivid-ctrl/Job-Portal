
import React from 'react';
import { Translation, Job, Company } from './types';

export const TRANSLATIONS: Translation = {
  hero_title: {
    en: "Find Your Dream Job in Bangladesh",
    bn: "বাংলাদেশে আপনার স্বপ্নের চাকরি খুঁজুন"
  },
  hero_subtitle: {
    en: "Connecting top talent with the best companies in the country.",
    bn: "দেশের সেরা কোম্পানিগুলোর সাথে সেরা প্রতিভাদের সংযোগ স্থাপন করছি।"
  },
  search_placeholder: {
    en: "Job title, keywords, or company",
    bn: "চাকরির নাম, কীওয়ার্ড বা কোম্পানি"
  },
  search_location: {
    en: "Location",
    bn: "অবস্থান"
  },
  search_category: {
    en: "Category",
    bn: "বিভাগ"
  },
  find_jobs: {
    en: "Find Jobs",
    bn: "চাকরি খুঁজুন"
  },
  latest_jobs: {
    en: "Latest Job Openings",
    bn: "সাম্প্রতিক চাকরির সুযোগ"
  },
  featured_categories: {
    en: "Featured Categories",
    bn: "জনপ্রিয় বিভাগসমূহ"
  },
  apply_now: {
    en: "Apply Now",
    bn: "আবেদন করুন"
  },
  view_details: {
    en: "View Details",
    bn: "বিস্তারিত দেখুন"
  },
  how_it_works: {
    en: "How It Works",
    bn: "কিভাবে কাজ করে"
  },
  for_job_seekers: {
    en: "For Job Seekers",
    bn: "চাকরিপ্রার্থীদের জন্য"
  },
  for_employers: {
    en: "For Employers",
    bn: "নিয়োগকারীদের জন্য"
  },
  post_job: {
    en: "Post a Job",
    bn: "চাকরি পোস্ট করুন"
  },
  login: {
    en: "Login",
    bn: "লগইন"
  },
  register: {
    en: "Register",
    bn: "রেজিস্ট্রেশন"
  },
  variation_label: {
    en: "Layout Variation",
    bn: "লেআউট পরিবর্তন"
  }
};

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: { en: "Senior Software Engineer", bn: "সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার" },
    company: "Pathao",
    logo: "https://picsum.photos/seed/pathao/200/200",
    location: { en: "Dhaka", bn: "ঢাকা" },
    salary: { en: "80,000 - 120,000 BDT", bn: "৮০,০০০ - ১২০,০০০ টাকা" },
    deadline: { en: "Oct 25, 2023", bn: "২৫ অক্টোবর, ২০২৩" },
    category: "IT",
    type: { en: "Full-time", bn: "ফুল-টাইম" },
    description: {
      en: "We are looking for an experienced Software Engineer to join our dynamic team at Pathao. You will be responsible for building scalable systems.",
      bn: "আমরা পাঠাও-তে আমাদের ডায়নামিক টিমে যোগদানের জন্য একজন অভিজ্ঞ সফটওয়্যার ইঞ্জিনিয়ার খুঁজছি। আপনি স্কেলেবল সিস্টেম তৈরির জন্য দায়ী থাকবেন।"
    },
    responsibilities: {
      en: ["Develop high-quality software design", "Identify, prioritize and execute tasks", "Automate tasks through appropriate tools"],
      bn: ["উচ্চমানের সফটওয়্যার ডিজাইন তৈরি করা", "কাজ চিহ্নিত করা এবং অগ্রাধিকার দেওয়া", "উপযুক্ত টুলের মাধ্যমে কাজগুলো অটোমেট করা"]
    },
    requirements: {
      en: ["5+ years of experience in Node.js", "Strong problem-solving skills", "B.Sc in Computer Science"],
      bn: ["Node.js-এ ৫ বছরের অভিজ্ঞতা", "শক্তিশালী সমস্যা সমাধানের দক্ষতা", "কম্পিউটার সায়েন্সে বিএসসি ডিগ্রি"]
    },
    postedAt: "2 days ago"
  },
  {
    id: '2',
    title: { en: "Relationship Manager", bn: "রিলেশনশিপ ম্যানেজার" },
    company: "BRAC Bank",
    logo: "https://picsum.photos/seed/brac/200/200",
    location: { en: "Chittagong", bn: "চট্টগ্রাম" },
    salary: { en: "50,000 - 70,000 BDT", bn: "৫০,০০০ - ৭০,০০০ টাকা" },
    deadline: { en: "Oct 28, 2023", bn: "২৮ অক্টোবর, ২০২৩" },
    category: "Banking",
    type: { en: "Full-time", bn: "ফুল-টাইম" },
    description: {
      en: "BRAC Bank is seeking a Relationship Manager to handle corporate accounts and build lasting client relationships.",
      bn: "ব্র্যাক ব্যাংক কর্পোরেট অ্যাকাউন্ট পরিচালনা এবং ক্লায়েন্টদের সাথে দীর্ঘস্থায়ী সম্পর্ক তৈরির জন্য একজন রিলেশনশিপ ম্যানেজার খুঁজছে।"
    },
    responsibilities: {
      en: ["Maintain client records", "Cross-sell banking products", "Meet monthly targets"],
      bn: ["ক্লায়েন্ট রেকর্ড বজায় রাখা", "ব্যাংকিং প্রোডাক্ট বিক্রয় করা", "মাসিক লক্ষ্য পূরণ করা"]
    },
    requirements: {
      en: ["MBA in Finance or Marketing", "Excellent communication skills", "3 years of banking experience"],
      bn: ["ফাইন্যান্স বা মার্কেটিং-এ এমবিএ", "চমৎকার যোগাযোগ দক্ষতা", "৩ বছরের ব্যাংকিং অভিজ্ঞতা"]
    },
    postedAt: "5 hours ago"
  },
  {
    id: '3',
    title: { en: "Project Coordinator", bn: "প্রজেক্ট কো-অর্ডিনেটর" },
    company: "UNDP Bangladesh",
    logo: "https://picsum.photos/seed/undp/200/200",
    location: { en: "Dhaka", bn: "ঢাকা" },
    salary: { en: "Negotiable", bn: "আলোচনা সাপেক্ষে" },
    deadline: { en: "Nov 05, 2023", bn: "০৫ নভেম্বর, ২০২৩" },
    category: "NGO",
    type: { en: "Contract", bn: "চুক্তিভিত্তিক" },
    description: {
      en: "Join UNDP to lead social impact projects in rural Bangladesh.",
      bn: "গ্রামীণ বাংলাদেশে সামাজিক প্রভাব বিস্তারকারী প্রজেক্টগুলো পরিচালনার জন্য ইউএনডিপি-তে যোগ দিন।"
    },
    responsibilities: {
      en: ["Project monitoring", "Field visits", "Reporting to donors"],
      bn: ["প্রজেক্ট মনিটরিং", "মাঠ পর্যায়ে পরিদর্শন", "দাতাদের কাছে রিপোর্ট প্রদান"]
    },
    requirements: {
      en: ["Masters in Social Science", "Willingness to travel", "Grant writing experience"],
      bn: ["সমাজবিজ্ঞানে মাস্টার্স", "ভ্রমণে ইচ্ছুক", "অনুদান লেখার অভিজ্ঞতা"]
    },
    postedAt: "1 day ago"
  },
  {
    id: '4',
    title: { en: "Fashion Designer", bn: "ফ্যাশন ডিজাইনার" },
    company: "Ha-Meem Group",
    logo: "https://picsum.photos/seed/hameem/200/200",
    location: { en: "Gazipur", bn: "গাজীপুর" },
    salary: { en: "40,000 - 60,000 BDT", bn: "৪০,০০০ - ৬০,০০০ টাকা" },
    deadline: { en: "Oct 30, 2023", bn: "৩০ অক্টোবর, ২০২৩" },
    category: "Garments",
    type: { en: "Full-time", bn: "ফুল-টাইম" },
    description: {
      en: "A leading RMG group looking for creative designers for their export units.",
      bn: "একটি শীর্ষস্থানীয় আরএমজি গ্রুপ তাদের রপ্তানি ইউনিটের জন্য সৃজনশীল ডিজাইনার খুঁজছে।"
    },
    responsibilities: {
      en: ["Creating new sketches", "Market research", "Fabric selection"],
      bn: ["নতুন স্কেচ তৈরি করা", "বাজার গবেষণা", "কাপড় নির্বাচন"]
    },
    requirements: {
      en: ["Graduate from BUFT/Shanto Mariam", "Portfolio of designs", "Knowledge of trends"],
      bn: ["বিইউএফটি/শান্ত মারিয়াম থেকে স্নাতক", "ডিজাইন পোর্টফোলিও", "ট্রেন্ড সম্পর্কে জ্ঞান"]
    },
    postedAt: "Today"
  }
];

export const FEATURED_COMPANIES: Company[] = [
  { name: "Grameenphone", logo: "https://picsum.photos/seed/gp/100/100", industry: "Telecom" },
  { name: "Beximco", logo: "https://picsum.photos/seed/beximco/100/100", industry: "Pharma" },
  { name: "Walton", logo: "https://picsum.photos/seed/walton/100/100", industry: "Electronics" },
  { name: "Daraz", logo: "https://picsum.photos/seed/daraz/100/100", industry: "E-commerce" },
  { name: "Pran-RFL", logo: "https://picsum.photos/seed/pran/100/100", industry: "FMCG" }
];
