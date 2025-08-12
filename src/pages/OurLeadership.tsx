import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight, Users } from 'lucide-react';
import LeaderDetailModal from '../components/LeaderDetailModal';

interface OurLeadershipProps {
  isArabic: boolean;
  onNavigate?: (page: string) => void;
}

const OurLeadership: React.FC<OurLeadershipProps> = ({ isArabic, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLeader, setCurrentLeader] = useState<any>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const leaders = [
    {
      id: 1,
      name: 'Feras Hammad',
      position: { 
        en: 'O&M Director for Amman East Power Plant', 
        ar: 'مدير التشغيل والصيانة لمحطة عمان الشرقية للطاقة' 
      },
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: { 
        en: 'Feras brings extensive experience in operations and maintenance management, ensuring optimal performance and reliability across our power generation facilities. He oversees the day-to-day operations of the Amman East Power Plant, maintaining the highest standards of safety and efficiency.',
        ar: 'يجلب فراس خبرة واسعة في إدارة التشغيل والصيانة، مما يضمن الأداء الأمثل والموثوقية عبر منشآت توليد الطاقة لدينا. يشرف على العمليات اليومية لمحطة عمان الشرقية للطاقة، مع الحفاظ على أعلى معايير السلامة والكفاءة.'
      },
      expertise: [
        { en: 'Operations Management', ar: 'إدارة العمليات' },
        { en: 'Maintenance Strategy', ar: 'استراتيجية الصيانة' },
        { en: 'Performance Optimization', ar: 'تحسين الأداء' },
        { en: 'Safety Management', ar: 'إدارة السلامة' }
      ],
      experience: '15+ years',
      education: { en: 'MSc Mechanical Engineering', ar: 'ماجستير الهندسة الميكانيكية' }
    },
    {
      id: 2,
      name: 'Peter Kuijs',
      position: { 
        en: 'Managing Director/CEO of Jordan Businesses', 
        ar: 'المدير العام/الرئيس التنفيذي للأعمال الأردنية' 
      },
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: { 
        en: 'Peter leads AES Jordan with a strategic vision for sustainable energy development, driving operational excellence and stakeholder value creation. Under his leadership, AES Jordan has maintained its position as a reliable energy provider while expanding its commitment to environmental sustainability.',
        ar: 'يقود بيتر AES الأردن برؤية استراتيجية لتطوير الطاقة المستدامة، مما يدفع التميز التشغيلي وخلق قيمة لأصحاب المصلحة. تحت قيادته، حافظت AES الأردن على موقعها كمزود طاقة موثوق مع توسيع التزامها بالاستدامة البيئية.'
      },
      expertise: [
        { en: 'Strategic Leadership', ar: 'القيادة الاستراتيجية' },
        { en: 'Energy Markets', ar: 'أسواق الطاقة' },
        { en: 'Stakeholder Management', ar: 'إدارة أصحاب المصلحة' },
        { en: 'Business Development', ar: 'تطوير الأعمال' }
      ],
      experience: '20+ years',
      education: { en: 'MBA Business Administration', ar: 'ماجستير إدارة الأعمال' }
    },
    {
      id: 3,
      name: 'Khaled Salameh',
      position: { 
        en: 'O&M Director for AES Levant Power Plant', 
        ar: 'مدير التشغيل والصيانة لمحطة AES بلاد الشام للطاقة' 
      },
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: { 
        en: 'Khaled oversees operations and maintenance for our Levant Power Plant, ensuring efficient tri-fuel operations and grid stability support. His expertise in managing complex power generation systems has been instrumental in maintaining the plant\'s exceptional reliability record.',
        ar: 'يشرف خالد على التشغيل والصيانة لمحطة بلاد الشام للطاقة، مما يضمن عمليات الوقود الثلاثي الفعالة ودعم استقرار الشبكة. خبرته في إدارة أنظمة توليد الطاقة المعقدة كانت أساسية في الحفاظ على سجل الموثوقية الاستثنائي للمحطة.'
      },
      expertise: [
        { en: 'Tri-Fuel Operations', ar: 'عمليات الوقود الثلاثي' },
        { en: 'Grid Management', ar: 'إدارة الشبكة' },
        { en: 'Technical Excellence', ar: 'التميز التقني' },
        { en: 'Plant Optimization', ar: 'تحسين المحطة' }
      ],
      experience: '18+ years',
      education: { en: 'BSc Electrical Engineering', ar: 'بكالوريوس الهندسة الكهربائية' }
    }
  ];

  const handleReadMore = (leaderId: number) => {
    const leader = leaders.find(l => l.id === leaderId);
    if (leader) {
      setCurrentLeader(leader);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentLeader(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-cover bg-center bg-no-repeat text-white overflow-hidden" style={{ backgroundImage: "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center text-white text-opacity-90 mb-8 text-sm relative z-10">
            <button 
              onClick={() => onNavigate?.('home')}
              className="hover:text-white transition-colors duration-200 font-medium"
            >
              {isArabic ? 'الرئيسية' : 'Home'}
            </button>
            <ChevronRight className="w-4 h-4 mx-2" />
            <button 
              onClick={() => onNavigate?.('about')}
              className="hover:text-white transition-colors duration-200 font-medium"
            >
              {isArabic ? 'من نحن' : 'About Us'}
            </button>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white font-medium">
              {isArabic ? 'قيادتنا' : 'Our Leadership'}
            </span>
          </div>

          <div className="text-center max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {isArabic ? 'قيادتنا' : 'Our Leadership'}
            </h1>
            <p className="text-xl lg:text-2xl leading-relaxed text-white">
              {isArabic 
                ? 'فريق قيادة متمرس يقود نبراس الأردن نحو التميز التشغيلي والنمو المستدام'
                : 'Experienced leadership team driving Nibras Jordan towards operational excellence and sustainable growth'
              }
            </p>
          </div>
        </div>
      </section>

      {/* CEO Speech Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - CEO Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                    alt="Peter Kuijs - CEO"
                    className="w-full h-96 lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#005670]/20 to-transparent"></div>
                </div>
                
                {/* CEO Info Card */}
              </div>
              
              {/* Right Column - Speech Content */}
              <div>
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-[#005670] rounded-full"></div>
                    <blockquote className="pl-6 text-lg text-gray-700 leading-relaxed italic">
                      <div className="font-bold text-[#005670] mb-4 not-italic">
                        {isArabic ? 'بيتر كويس' : 'Peter Kuijs'}
                      </div>
                      {isArabic
                        ? '"في نبراس الأردن، نؤمن بأن قوة الفريق تكمن في تنوع خبراته والتزامه المشترك بالتميز. فريق قيادتنا يجمع بين عقود من الخبرة في قطاع الطاقة مع رؤية مستقبلية لتطوير حلول طاقة مستدامة ومبتكرة."'
                        : '"At Nibras Jordan, we believe that the strength of our team lies in the diversity of our expertise and our shared commitment to excellence. Our leadership team combines decades of energy sector experience with a forward-thinking vision for developing sustainable and innovative energy solutions."'
                      }
                    </blockquote>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {isArabic
                      ? 'نحن نقود بالقدوة، ونضع السلامة والنزاهة في المقدمة، ونسعى باستمرار لتحقيق أعلى معايير الأداء التشغيلي. التزامنا بالمجتمعات التي نخدمها والبيئة التي نعمل فيها يوجه كل قرار نتخذه.'
                      : 'We lead by example, putting safety and integrity first, and continuously striving for the highest standards of operational performance. Our commitment to the communities we serve and the environment we operate in guides every decision we make.'
                    }
                  </p>
                  
                  <div className="pt-4">
                    <div className="text-[#005670] font-semibold">
                      Peter Kuijs
                    </div>
                    <div className="text-gray-600 text-sm">
                      {isArabic ? 'المدير العام/الرئيس التنفيذي' : 'Managing Director/CEO'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Cards */}
      <section ref={sectionRef} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div
                key={leader.id}
                className={`bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Leader Photo - Full Width */}
                <div className="relative">
                  <div className="w-full h-64 overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                {/* Separator Line */}
                <div className="border-b border-gray-200"></div>
                
                {/* Content Section */}
                <div className="p-8">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-[#231f20] mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-8">
                      {isArabic ? leader.position.ar : leader.position.en}
                    </p>
                    
                    {/* Read More Button */}
                    <button
                      onClick={() => handleReadMore(leader.id)}
                      className="bg-[#005670] hover:bg-[#004558] text-white px-8 py-3 rounded text-sm font-medium transition-all duration-200 transform hover:scale-105"
                    >
                      {isArabic ? 'اقرأ المزيد' : 'Read more'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#005670] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              {isArabic ? 'انضم إلى فريقنا' : 'Join Our Team'}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              {isArabic
                ? 'كن جزءاً من فريق قيادي يشكل مستقبل الطاقة في الأردن'
                : 'Be part of a leadership team that\'s shaping the future of energy in Jordan'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => onNavigate?.('careers')}
                className="inline-flex items-center bg-white text-[#005670] hover:bg-gray-100 px-6 py-3 rounded font-semibold transition-all duration-300 transform hover:scale-105"
              >
                {isArabic ? 'الفرص المتاحة' : 'View Opportunities'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              
              <button 
                onClick={() => onNavigate?.('contact')}
                className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-[#005670] px-6 py-3 rounded font-semibold transition-all duration-300 transform hover:scale-105"
              >
                {isArabic ? 'تواصل معنا' : 'Contact Us'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Leader Detail Modal */}
      <LeaderDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        leaderData={currentLeader}
        isArabic={isArabic}
      />
    </div>
  );
};

export default OurLeadership;