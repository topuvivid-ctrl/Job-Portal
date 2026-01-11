
import React, { useState, useMemo } from 'react';
import { Language, Job, LayoutVariation } from './types';
import { TRANSLATIONS, MOCK_JOBS, FEATURED_COMPANIES } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JobCard from './components/JobCard';
import JobDetails from './components/JobDetails';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [layout, setLayout] = useState<LayoutVariation>('modern');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const t = (key: string) => TRANSLATIONS[key][language];

  const filteredJobs = useMemo(() => {
    return MOCK_JOBS.filter(job => 
      job.title.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const categories = [
    { id: 'IT', name: { en: 'IT & Software', bn: 'আইটি এবং সফটওয়্যার' }, icon: '💻', count: 420 },
    { id: 'Banking', name: { en: 'Banking & Finance', bn: 'ব্যাংকিং এবং ফাইন্যান্স' }, icon: '🏦', count: 185 },
    { id: 'NGO', name: { en: 'NGO & Dev', bn: 'এনজিও এবং উন্নয়ন' }, icon: '🤝', count: 95 },
    { id: 'Garments', name: { en: 'Garments & Textile', bn: 'গার্মেন্টস এবং টেক্সটাইল' }, icon: '🧵', count: 640 },
    { id: 'Education', name: { en: 'Education', bn: 'শিক্ষা' }, icon: '🎓', count: 120 },
    { id: 'Marketing', name: { en: 'Marketing', bn: 'মার্কেটিং' }, icon: '📢', count: 210 },
  ];

  if (selectedJob) {
    return (
      <div className={`min-h-screen flex flex-col ${language === 'bn' ? 'font-bengali' : ''}`}>
        <Navbar 
          language={language} 
          setLanguage={setLanguage} 
          layout={layout} 
          setLayout={setLayout} 
          onLoginClick={() => alert('Login coming soon!')}
        />
        <main className="flex-grow bg-gray-50">
          <JobDetails job={selectedJob} language={language} onBack={() => setSelectedJob(null)} />
        </main>
        <Footer language={language} />
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col ${language === 'bn' ? 'font-bengali' : ''}`}>
      <Navbar 
        language={language} 
        setLanguage={setLanguage} 
        layout={layout} 
        setLayout={setLayout} 
        onLoginClick={() => alert('Login coming soon!')}
      />
      
      <main className="flex-grow">
        <Hero language={language} layout={layout} />

        {/* Featured Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">{t('featured_categories')}</h2>
            <p className="text-gray-500 mb-12">Browse jobs by popular industries in Bangladesh</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map(cat => (
                <div key={cat.id} className="group p-6 rounded-2xl border border-gray-100 hover:border-emerald-500 hover:shadow-lg transition-all cursor-pointer">
                  <div className="text-3xl mb-3 group-hover:scale-125 transition-transform">{cat.icon}</div>
                  <h4 className="font-bold text-sm text-gray-900 mb-1">{cat.name[language]}</h4>
                  <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">{cat.count} Jobs</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Jobs Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-blue-900">{t('latest_jobs')}</h2>
                <p className="text-gray-500">Updated every 5 minutes</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-white border px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">Filter</button>
                <button className="bg-white border px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">Sort By</button>
              </div>
            </div>

            <div className={`grid gap-6 ${
              layout === 'compact' ? 'grid-cols-1' : 
              layout === 'visual' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 
              'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}>
              {filteredJobs.map(job => (
                <JobCard 
                  key={job.id} 
                  job={job} 
                  language={language} 
                  layout={layout} 
                  onClick={setSelectedJob}
                />
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl font-bold text-center mb-16">{t('how_it_works')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {[
                { title: { en: 'Create Account', bn: 'অ্যাকাউন্ট তৈরি করুন' }, icon: '👤', desc: { en: 'Build your profile and upload your resume.', bn: 'আপনার প্রোফাইল তৈরি করুন এবং রেজুমে আপলোড করুন।' } },
                { title: { en: 'Search & Apply', bn: 'খুঁজুন ও আবেদন করুন' }, icon: '🔍', desc: { en: 'Find jobs that match your skills and apply.', bn: 'আপনার দক্ষতার সাথে মেলে এমন চাকরি খুঁজুন এবং আবেদন করুন।' } },
                { title: { en: 'Get Hired', bn: 'চাকরি পান' }, icon: '🎉', desc: { en: 'Interview with top companies and get the job.', bn: 'সেরা কোম্পানিগুলোতে ইন্টারভিউ দিন এবং চাকরি পান।' } }
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 backdrop-blur-sm border border-white/20">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title[language]}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{step.desc[language]}</p>
                  {i < 2 && <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-12 h-px bg-blue-500/50"></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Companies */}
        <section className="py-16 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-lg font-bold text-gray-400 uppercase tracking-widest mb-10">Top Employers</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
              {FEATURED_COMPANIES.map(comp => (
                <div key={comp.name} className="grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100 cursor-pointer">
                  <img src={comp.logo} alt={comp.name} title={comp.name} className="h-12 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Employer Teaser */}
        <section className="py-20 bg-emerald-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">{t('for_employers')}</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {language === 'en' 
                    ? "Hire the best talent in Bangladesh. Our platform gives you access to thousands of qualified professionals ready to join your company."
                    : "বাংলাদেশের সেরা প্রতিভা নিয়োগ করুন। আমাদের প্ল্যাটফর্ম আপনাকে হাজার হাজার যোগ্য পেশাদারের কাছে পৌঁছে দেয় যারা আপনার কোম্পানিতে যোগ দিতে প্রস্তুত।"}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-blue-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg active:scale-95">
                    {t('post_job')}
                  </button>
                  <button className="border-2 border-emerald-500 text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-all">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="flex-shrink-0 w-64 h-64 bg-emerald-100 rounded-3xl flex items-center justify-center relative">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-900 rounded-2xl flex items-center justify-center text-white text-3xl shadow-xl">
                  🚀
                </div>
                <div className="text-6xl">🏢</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer language={language} />
    </div>
  );
};

export default App;
