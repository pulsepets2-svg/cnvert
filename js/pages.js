// Page Loading Functions

// Load Home Page
function loadHomePage() {
    const content = `
        <!-- Hero Section -->
        <section class="hero-section">
            <div class="video-controls">
                <button class="btn" id="playPauseBtn" onclick="toggleVideo()">
                    <i class="bi bi-pause-fill"></i>
                </button>
                <button class="btn" id="muteBtn" onclick="toggleMute()">
                    <i class="bi bi-volume-mute-fill"></i>
                </button>
            </div>
            
            <video id="heroVideo" autoplay muted loop class="position-absolute w-100 h-100" style="object-fit: cover; top: 0; left: 0; z-index: -1;">
                <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4">
            </video>
            
            <div class="container text-center text-white">
                <div class="hero-content">
                    <div class="mb-4">
                        <span class="badge bg-light text-primary fs-5 px-4 py-2 mb-3">
                            <span data-en="641 MW Total Capacity" data-ar="641 ميجاواط إجمالي القدرة">641 MW Total Capacity</span>
                        </span>
                    </div>
                    <h1 class="display-1 fw-bold mb-4 fade-in-up">
                        <span data-en="Powering Jordan's Future" data-ar="تشغيل مستقبل الأردن">Powering Jordan's Future</span>
                    </h1>
                    <p class="lead mb-5 fade-in-up">
                        <span data-en="Reliable and efficient energy generation for a sustainable tomorrow" data-ar="توليد طاقة موثوق وفعال لغد مستدام">
                            Reliable and efficient energy generation for a sustainable tomorrow
                        </span>
                    </p>
                    <div class="fade-in-up">
                        <button class="btn btn-primary btn-lg me-3" onclick="navigateTo('business')">
                            <span data-en="Our Business" data-ar="أعمالنا">Our Business</span>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="scroll-indicator">
                <div class="border border-white rounded-pill p-2" style="width: 30px; height: 50px;">
                    <div class="bg-white rounded-pill" style="width: 4px; height: 15px; margin: 0 auto; animation: bounce 2s infinite;"></div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="section bg-light">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="stats-card fade-in-up">
                            <div class="icon-circle">
                                <i class="bi bi-lightning-charge"></i>
                            </div>
                            <div class="stats-number">641</div>
                            <div class="stats-label">
                                <span data-en="MW Total Capacity" data-ar="ميجاواط إجمالي القدرة">MW Total Capacity</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="stats-card fade-in-up">
                            <div class="icon-circle">
                                <i class="bi bi-building"></i>
                            </div>
                            <div class="stats-number">8%</div>
                            <div class="stats-label">
                                <span data-en="of Jordan's Electricity" data-ar="من كهرباء الأردن">of Jordan's Electricity</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="stats-card fade-in-up">
                            <div class="icon-circle">
                                <i class="bi bi-people"></i>
                            </div>
                            <div class="stats-number">2</div>
                            <div class="stats-label">
                                <span data-en="Power Plants" data-ar="محطات الطاقة">Power Plants</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="stats-card fade-in-up">
                            <div class="icon-circle">
                                <i class="bi bi-award"></i>
                            </div>
                            <div class="stats-number">10+</div>
                            <div class="stats-label">
                                <span data-en="Years Operating" data-ar="سنوات التشغيل">Years Operating</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row align-items-center">
                    <div class="col-lg-6 mb-5">
                        <div class="fade-in-up">
                            <span class="badge bg-primary-custom text-white mb-3">
                                <span data-en="WHO WE ARE" data-ar="من نحن">WHO WE ARE</span>
                            </span>
                            <h2 class="section-title text-start">
                                <span data-en="About Nibras Jordan" data-ar="حول نبراس الأردن">About Nibras Jordan</span>
                            </h2>
                            <p class="lead mb-4">
                                <span data-en="Nibras Jordan is a leading independent power producer, playing a pivotal role in supplying over 8% of Jordan's electricity." 
                                      data-ar="نبراس الأردن هي منتج مستقل رائد للطاقة، تلعب دوراً محورياً في توفير أكثر من 8% من كهرباء الأردن.">
                                    Nibras Jordan is a leading independent power producer, playing a pivotal role in supplying over 8% of Jordan's electricity.
                                </span>
                            </p>
                            <p class="mb-4">
                                <span data-en="Our portfolio includes the Amman East Power Plant (400 MW) and Levant Power Plant (241 MW), delivering reliable baseload and peaking capacity." 
                                      data-ar="تشمل محفظتنا محطة عمان الشرقية للطاقة (400 ميجاواط) ومحطة بلاد الشام للطاقة (241 ميجاواط)، مما يوفر قدرة أساسية وذروة موثوقة.">
                                    Our portfolio includes the Amman East Power Plant (400 MW) and Levant Power Plant (241 MW), delivering reliable baseload and peaking capacity.
                                </span>
                            </p>
                            <button class="btn btn-primary btn-lg" onclick="navigateTo('about')">
                                <span data-en="Learn More" data-ar="اعرف المزيد">Learn More</span>
                                <i class="bi bi-arrow-right ms-2"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card border-0 shadow-lg fade-in-up">
                            <div class="card-body p-5">
                                <span class="badge bg-primary-custom text-white mb-3">
                                    <span data-en="OUR OPERATIONS" data-ar="عملياتنا">OUR OPERATIONS</span>
                                </span>
                                <h3 class="card-title">
                                    <span data-en="Our Operations" data-ar="عملياتنا">Our Operations</span>
                                </h3>
                                <p class="card-text">
                                    <span data-en="Together, these facilities contribute to energy security and economic growth. Our operations are supported by international partnerships and a commitment to high environmental standards." 
                                          data-ar="معاً، تساهم هذه المرافق في أمن الطاقة والنمو الاقتصادي. عملياتنا مدعومة بشراكات دولية والتزام بمعايير بيئية عالية.">
                                        Together, these facilities contribute to energy security and economic growth. Our operations are supported by international partnerships and a commitment to high environmental standards.
                                    </span>
                                </p>
                                <ul class="list-unstyled">
                                    <li class="mb-2">
                                        <i class="bi bi-check-circle text-primary me-2"></i>
                                        <span data-en="Strong international partnerships" data-ar="شراكات دولية قوية">Strong international partnerships</span>
                                    </li>
                                    <li class="mb-2">
                                        <i class="bi bi-check-circle text-primary me-2"></i>
                                        <span data-en="High environmental standards" data-ar="معايير بيئية عالية">High environmental standards</span>
                                    </li>
                                    <li class="mb-2">
                                        <i class="bi bi-check-circle text-primary me-2"></i>
                                        <span data-en="Advanced technologies" data-ar="تقنيات متقدمة">Advanced technologies</span>
                                    </li>
                                </ul>
                                <button class="btn btn-outline-primary" onclick="navigateTo('business')">
                                    <span data-en="Learn More" data-ar="اعرف المزيد">Learn More</span>
                                    <i class="bi bi-arrow-right ms-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Business Section -->
        <section id="business" class="section">
            <div class="container">
                <div class="text-center mb-5">
                    <span class="badge bg-primary-custom text-white mb-3">
                        <i class="bi bi-building me-2"></i>
                        <span data-en="Our Business" data-ar="أعمالنا">Our Business</span>
                    </span>
                    <h2 class="section-title">
                        <span data-en="Our Project Portfolio" data-ar="محفظة مشاريعنا">Our Project Portfolio</span>
                    </h2>
                    <p class="section-subtitle">
                        <span data-en="Our investments drive the development of essential energy infrastructure, combining advanced technology with disciplined operations." 
                              data-ar="استثماراتنا تدفع تطوير البنية التحتية الأساسية للطاقة، مما يجمع بين التكنولوجيا المتقدمة والعمليات المنضبطة.">
                            Our investments drive the development of essential energy infrastructure, combining advanced technology with disciplined operations.
                        </span>
                    </p>
                </div>
                
                <div class="row">
                    <div class="col-lg-6 mb-4">
                        <div class="card h-100 hover-lift fade-in-up">
                            <img src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                                 class="card-img-top" alt="Amman East Power Plant">
                            <div class="card-body">
                                <div class="d-flex justify-content-between mb-3">
                                    <span class="badge bg-primary">400 MW</span>
                                    <span class="badge bg-secondary">$300M</span>
                                </div>
                                <h5 class="card-title">
                                    <span data-en="Amman East Power Plant (IPP1)" data-ar="محطة عمان الشرقية للطاقة">Amman East Power Plant (IPP1)</span>
                                </h5>
                                <p class="card-text">
                                    <span data-en="A 400 MW combined cycle gas plant—Jordan's first Independent Power Producer—commissioned with a USD 300 million investment." 
                                          data-ar="محطة غاز دورة مركبة بقدرة 400 ميجاواط - أول منتج مستقل للطاقة في الأردن - تم تشغيلها باستثمار 300 مليون دولار أمريكي.">
                                        A 400 MW combined cycle gas plant—Jordan's first Independent Power Producer—commissioned with a USD 300 million investment.
                                    </span>
                                </p>
                                <button class="btn btn-outline-primary" onclick="navigateTo('business-aes-jordan-ipp1')">
                                    <span data-en="Learn More" data-ar="اقرأ المزيد">Learn More</span>
                                    <i class="bi bi-arrow-right ms-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-6 mb-4">
                        <div class="card h-100 hover-lift fade-in-up">
                            <img src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                                 class="card-img-top" alt="Levant Power Plant">
                            <div class="card-body">
                                <div class="d-flex justify-content-between mb-3">
                                    <span class="badge bg-primary">241 MW</span>
                                    <span class="badge bg-secondary">$360M</span>
                                </div>
                                <h5 class="card-title">
                                    <span data-en="Levant Power Plant (IPP4)" data-ar="محطة بلاد الشام للطاقة">Levant Power Plant (IPP4)</span>
                                </h5>
                                <p class="card-text">
                                    <span data-en="241 MW tri-fuel peaking plant offering flexible operations to stabilize the national grid." 
                                          data-ar="محطة ذروة ثلاثية الوقود بقدرة 241 ميجاواط توفر عمليات مرنة لاستقرار الشبكة الوطنية.">
                                        241 MW tri-fuel peaking plant offering flexible operations to stabilize the national grid.
                                    </span>
                                </p>
                                <button class="btn btn-outline-primary" onclick="navigateTo('business-aes-levant-ipp4')">
                                    <span data-en="Learn More" data-ar="اقرأ المزيد">Learn More</span>
                                    <i class="bi bi-arrow-right ms-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="text-center mt-5">
                    <div class="card bg-gradient-secondary text-white">
                        <div class="card-body p-5">
                            <h3 class="card-title">
                                <span data-en="Discover More About Our Projects" data-ar="اكتشف المزيد عن مشاريعنا">Discover More About Our Projects</span>
                            </h3>
                            <p class="card-text mb-4">
                                <span data-en="Learn how our projects contribute to energy security and economic growth in Jordan" 
                                      data-ar="تعرف على كيفية مساهمة مشاريعنا في تعزيز أمن الطاقة والنمو الاقتصادي في الأردن">
                                    Learn how our projects contribute to energy security and economic growth in Jordan
                                </span>
                            </p>
                            <button class="btn btn-light btn-lg" onclick="navigateTo('business')">
                                <span data-en="View All Projects" data-ar="عرض جميع المشاريع">View All Projects</span>
                                <i class="bi bi-arrow-right ms-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- News Section -->
        <section id="news" class="section">
            <div class="container">
                <div class="text-center mb-5">
                    <h2 class="section-title">
                        <span data-en="Latest News & Media" data-ar="آخر الأخبار والإعلام">Latest News & Media</span>
                    </h2>
                    <p class="section-subtitle">
                        <span data-en="Stay informed about milestones, operational achievements, and sustainability initiatives in Jordan" 
                              data-ar="ابق على اطلاع بالمعالم والإنجازات التشغيلية ومبادرات الاستدامة في الأردن">
                            Stay informed about milestones, operational achievements, and sustainability initiatives in Jordan
                        </span>
                    </p>
                </div>
                
                <div class="row" id="newsContainer">
                    <!-- News articles will be loaded here -->
                </div>
                
                <div class="text-center mt-5">
                    <button class="btn btn-primary btn-lg" onclick="navigateTo('news')">
                        <span data-en="View All News" data-ar="جميع الأخبار">View All News</span>
                        <i class="bi bi-arrow-right ms-2"></i>
                    </button>
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('mainContent').innerHTML = content;
    loadNewsPreview();
    initializePageAnimations();
    updateTextElements();
}

// Load About Page
function loadAboutPage() {
    const breadcrumbItems = [
        { en: 'Home', ar: 'الرئيسية', page: 'home' },
        { en: 'About Us', ar: 'من نحن', page: 'about' }
    ];
    
    const content = `
        ${createHeroSection(
            getText('About Us', 'من نحن'),
            getText('We are committed to pioneering the energy of the future on a global scale', 'نحن ملتزمون بريادة طاقة المستقبل على نطاق عالمي'),
            'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
            breadcrumbItems
        )}
        
        <section class="section">
            <div class="container">
                <div class="row align-items-center mb-5">
                    <div class="col-lg-6 mb-4">
                        <h2 class="display-4 fw-bold mb-4">
                            <span data-en="AES Jordan Businesses Overview" data-ar="نظرة عامة على أعمال AES الأردن">AES Jordan Businesses Overview</span>
                        </h2>
                        <p class="lead">
                            <span data-en="AES Jordan PSC is a 400 megawatt (MW) dual fuel natural gas- and oil-fired power plant located east of Amman. The plant was the first Independent Power Producer (IPP) to start power generation operations in order to support the economic development of the country." 
                                  data-ar="شركة AES الأردن هي محطة طاقة بقدرة 400 ميجاواط تعمل بالوقود المزدوج (الغاز الطبيعي والنفط) تقع شرق عمان. كانت المحطة أول منتج مستقل للطاقة (IPP) يبدأ عمليات توليد الطاقة لدعم التنمية الاقتصادية للبلاد.">
                                AES Jordan PSC is a 400 megawatt (MW) dual fuel natural gas- and oil-fired power plant located east of Amman. The plant was the first Independent Power Producer (IPP) to start power generation operations in order to support the economic development of the country.
                            </span>
                        </p>
                    </div>
                    <div class="col-lg-6">
                        <img src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                             class="img-fluid rounded shadow-lg" alt="Power Plant">
                    </div>
                </div>
                
                <!-- Navigation Links -->
                <div class="row mt-5">
                    <div class="col-md-6 mb-3">
                        <button class="btn btn-primary w-100" onclick="navigateTo('about-mission-vision-values')">
                            <span data-en="Mission, Vision & Values" data-ar="المهمة والرؤية والقيم">Mission, Vision & Values</span>
                            <i class="bi bi-arrow-right ms-2"></i>
                        </button>
                    </div>
                    <div class="col-md-6 mb-3">
                        <button class="btn btn-outline-primary w-100" onclick="navigateTo('about-leadership')">
                            <span data-en="Our Leadership" data-ar="قيادتنا">Our Leadership</span>
                            <i class="bi bi-arrow-right ms-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('mainContent').innerHTML = content;
    initializePageAnimations();
    updateTextElements();
}

// Load Business Page
function loadBusinessPage() {
    const breadcrumbItems = [
        { en: 'Home', ar: 'الرئيسية', page: 'home' },
        { en: 'Our Business', ar: 'أعمالنا', page: 'business' }
    ];
    
    const content = `
        ${createHeroSection(
            getText('Our Business', 'أعمالنا'),
            getText('We are committed to pioneering the energy of the future on a global scale', 'نحن ملتزمون بريادة طاقة المستقبل على نطاق عالمي'),
            'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
            breadcrumbItems
        )}
        
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mb-4">
                        <div class="card h-100 hover-lift">
                            <img src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                                 class="card-img-top" alt="Amman East Power Plant">
                            <div class="card-body">
                                <h5 class="card-title">
                                    <span data-en="Amman East Power Plant (IPP1)" data-ar="محطة عمان الشرقية للطاقة">Amman East Power Plant (IPP1)</span>
                                </h5>
                                <p class="card-text">
                                    <span data-en="400 MW combined cycle gas plant - Jordan's first Independent Power Producer" 
                                          data-ar="محطة غاز دورة مركبة بقدرة 400 ميجاواط - أول منتج مستقل للطاقة في الأردن">
                                        400 MW combined cycle gas plant - Jordan's first Independent Power Producer
                                    </span>
                                </p>
                                <button class="btn btn-primary" onclick="navigateTo('business-aes-jordan-ipp1')">
                                    <span data-en="Learn More" data-ar="اقرأ المزيد">Learn More</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 mb-4">
                        <div class="card h-100 hover-lift">
                            <img src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                                 class="card-img-top" alt="Levant Power Plant">
                            <div class="card-body">
                                <h5 class="card-title">
                                    <span data-en="Levant Power Plant (IPP4)" data-ar="محطة بلاد الشام للطاقة">Levant Power Plant (IPP4)</span>
                                </h5>
                                <p class="card-text">
                                    <span data-en="241 MW tri-fuel peaking plant for grid stabilization" 
                                          data-ar="محطة ذروة ثلاثية الوقود بقدرة 241 ميجاواط لاستقرار الشبكة">
                                        241 MW tri-fuel peaking plant for grid stabilization
                                    </span>
                                </p>
                                <button class="btn btn-primary" onclick="navigateTo('business-aes-levant-ipp4')">
                                    <span data-en="Learn More" data-ar="اقرأ المزيد">Learn More</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 mb-4">
                        <div class="card h-100 hover-lift">
                            <img src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                                 class="card-img-top" alt="AM Solar">
                            <div class="card-body">
                                <h5 class="card-title">
                                    <span data-en="AM Solar" data-ar="AM الطاقة الشمسية">AM Solar</span>
                                </h5>
                                <p class="card-text">
                                    <span data-en="Solar energy project - Clean and renewable energy for the future" 
                                          data-ar="مشروع الطاقة الشمسية - طاقة نظيفة ومتجددة للمستقبل">
                                        Solar energy project - Clean and renewable energy for the future
                                    </span>
                                </p>
                                <button class="btn btn-primary" onclick="navigateTo('business-am-solar')">
                                    <span data-en="Learn More" data-ar="اقرأ المزيد">Learn More</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('mainContent').innerHTML = content;
    initializePageAnimations();
    updateTextElements();
}

// Load Careers Page
function loadCareersPage() {
    const breadcrumbItems = [
        { en: 'Home', ar: 'الرئيسية', page: 'home' },
        { en: 'Careers', ar: 'الوظائف', page: 'careers' }
    ];
    
    const content = `
        ${createHeroSection(
            getText('Careers', 'الوظائف'),
            getText('We are committed to pioneering the energy of the future on a global scale', 'نحن ملتزمون بريادة طاقة المستقبل على نطاق عالمي'),
            'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
            breadcrumbItems
        )}
        
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <h2 class="display-4 fw-bold mb-4">
                            <span data-en="Energise your career" data-ar="انطلق بمسيرتك المهنية">Energise your career</span>
                        </h2>
                        <p class="lead">
                            <span data-en="Our workforce of 170 people is committed to operational excellence and meeting the world's changing power needs. Our people share a common goal of providing affordable, sustainable energy to the community in which we operate." 
                                  data-ar="قوتنا العاملة المكونة من 170 شخصاً ملتزمة بالتميز التشغيلي وتلبية احتياجات الطاقة المتغيرة في العالم. يتشارك موظفونا هدفاً مشتركاً في توفير طاقة مستدامة وبأسعار معقولة للمجتمع الذي نعمل فيه.">
                                Our workforce of 170 people is committed to operational excellence and meeting the world's changing power needs. Our people share a common goal of providing affordable, sustainable energy to the community in which we operate.
                            </span>
                        </p>
                    </div>
                </div>
                
                <!-- Job Openings -->
                <div class="row mt-5" id="jobOpeningsContainer">
                    <!-- Job listings will be loaded here -->
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('mainContent').innerHTML = content;
    loadJobOpenings();
    initializePageAnimations();
    updateTextElements();
}

// Load News Page
function loadNewsPage() {
    const breadcrumbItems = [
        { en: 'Home', ar: 'الرئيسية', page: 'home' },
        { en: 'News', ar: 'الأخبار', page: 'news' }
    ];
    
    const content = `
        ${createHeroSection(
            getText('News', 'الأخبار'),
            getText('We are committed to pioneering the energy of the future on a global scale', 'نحن ملتزمون بريادة طاقة المستقبل على نطاق عالمي'),
            'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
            breadcrumbItems
        )}
        
        <section class="section">
            <div class="container">
                <div class="row" id="allNewsContainer">
                    <!-- All news articles will be loaded here -->
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('mainContent').innerHTML = content;
    loadAllNews();
    initializePageAnimations();
    updateTextElements();
}

// Load Contact Page
function loadContactPage() {
    const breadcrumbItems = [
        { en: 'Home', ar: 'الرئيسية', page: 'home' },
        { en: 'Contact Us', ar: 'اتصل بنا', page: 'contact' }
    ];
    
    const content = `
        ${createHeroSection(
            getText('Contact Us', 'اتصل بنا'),
            getText('We are committed to pioneering the energy of the future on a global scale', 'نحن ملتزمون بريادة طاقة المستقبل على نطاق عالمي'),
            'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
            breadcrumbItems
        )}
        
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 mb-5">
                        <h2 class="display-5 fw-bold mb-4">
                            <span data-en="Send Us a Message" data-ar="أرسل لنا رسالة">Send Us a Message</span>
                        </h2>
                        <form id="contactForm" onsubmit="submitContactForm(event)">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="name" class="form-label">
                                        <span data-en="Full Name" data-ar="الاسم الكامل">Full Name</span> *
                                    </label>
                                    <input type="text" class="form-control" id="name" required>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="email" class="form-label">
                                        <span data-en="Email Address" data-ar="البريد الإلكتروني">Email Address</span> *
                                    </label>
                                    <input type="email" class="form-control" id="email" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="phone" class="form-label">
                                        <span data-en="Phone Number" data-ar="رقم الهاتف">Phone Number</span>
                                    </label>
                                    <input type="tel" class="form-control" id="phone">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="subject" class="form-label">
                                        <span data-en="Department" data-ar="القسم">Department</span> *
                                    </label>
                                    <select class="form-select" id="subject" required>
                                        <option value="">
                                            <span data-en="Select Department" data-ar="اختر القسم">Select Department</span>
                                        </option>
                                        <option value="general">
                                            <span data-en="General Inquiry" data-ar="استفسار عام">General Inquiry</span>
                                        </option>
                                        <option value="business">
                                            <span data-en="Business Development" data-ar="تطوير الأعمال">Business Development</span>
                                        </option>
                                        <option value="careers">
                                            <span data-en="Careers" data-ar="الوظائف">Careers</span>
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">
                                    <span data-en="Message" data-ar="الرسالة">Message</span> *
                                </label>
                                <textarea class="form-control" id="message" rows="6" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary btn-lg w-100">
                                <i class="bi bi-send me-2"></i>
                                <span data-en="Send Message" data-ar="إرسال الرسالة">Send Message</span>
                            </button>
                        </form>
                    </div>
                    
                    <div class="col-lg-6">
                        <h2 class="display-5 fw-bold mb-4">
                            <span data-en="Contact Information" data-ar="معلومات الاتصال">Contact Information</span>
                        </h2>
                        
                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <div class="card h-100 text-center">
                                    <div class="card-body">
                                        <div class="icon-circle">
                                            <i class="bi bi-geo-alt"></i>
                                        </div>
                                        <h5>
                                            <span data-en="Head Office" data-ar="المكتب الرئيسي">Head Office</span>
                                        </h5>
                                        <p class="mb-0">
                                            <span data-en="Amman, Jordan" data-ar="عمان، الأردن">Amman, Jordan</span><br>
                                            P.O. Box 123456
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6 mb-4">
                                <div class="card h-100 text-center">
                                    <div class="card-body">
                                        <div class="icon-circle">
                                            <i class="bi bi-telephone"></i>
                                        </div>
                                        <h5>
                                            <span data-en="Phone Numbers" data-ar="أرقام الهاتف">Phone Numbers</span>
                                        </h5>
                                        <p class="mb-0">
                                            +962 6 123 4567<br>
                                            +962 6 123 4568
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6 mb-4">
                                <div class="card h-100 text-center">
                                    <div class="card-body">
                                        <div class="icon-circle">
                                            <i class="bi bi-envelope"></i>
                                        </div>
                                        <h5>
                                            <span data-en="Email Addresses" data-ar="عناوين البريد الإلكتروني">Email Addresses</span>
                                        </h5>
                                        <p class="mb-0">
                                            info@nibraspower.com<br>
                                            contact@nibraspower.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6 mb-4">
                                <div class="card h-100 text-center">
                                    <div class="card-body">
                                        <div class="icon-circle">
                                            <i class="bi bi-clock"></i>
                                        </div>
                                        <h5>
                                            <span data-en="Business Hours" data-ar="ساعات العمل">Business Hours</span>
                                        </h5>
                                        <p class="mb-0">
                                            <span data-en="Sunday - Thursday: 8:00 AM - 5:00 PM" data-ar="الأحد - الخميس: 8:00 ص - 5:00 م">Sunday - Thursday: 8:00 AM - 5:00 PM</span><br>
                                            <span data-en="Friday - Saturday: Closed" data-ar="الجمعة - السبت: مغلق">Friday - Saturday: Closed</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('mainContent').innerHTML = content;
    initializePageAnimations();
    updateTextElements();
}

// Load Search Page
function loadSearchPage() {
    const breadcrumbItems = [
        { en: 'Home', ar: 'الرئيسية', page: 'home' },
        { en: 'Search', ar: 'البحث', page: 'search' }
    ];
    
    const content = `
        <div class="search-container">
            <div class="container">
                ${createBreadcrumb(breadcrumbItems)}
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h1 class="h2 mb-0">
                        <span data-en="Search" data-ar="البحث">Search</span>
                    </h1>
                    <button class="btn btn-outline-secondary" onclick="navigateTo('home')">
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
                
                <div class="position-relative">
                    <i class="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                    <input type="text" class="form-control form-control-lg ps-5" id="searchInput" 
                           placeholder="${getText('Search the website...', 'ابحث في الموقع...')}" 
                           oninput="performSearch(this.value)">
                </div>
            </div>
        </div>
        
        <section class="section">
            <div class="container">
                <div id="searchResults">
                    <div class="text-center py-5">
                        <i class="bi bi-search display-1 text-muted"></i>
                        <h3 class="mt-3">
                            <span data-en="Start searching" data-ar="ابدأ البحث">Start searching</span>
                        </h3>
                        <p class="text-muted">
                            <span data-en="Enter a word or phrase to search the website" data-ar="أدخل كلمة أو عبارة للبحث في الموقع">
                                Enter a word or phrase to search the website
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('mainContent').innerHTML = content;
    document.getElementById('searchInput').focus();
    initializePageAnimations();
    updateTextElements();
}

// Load news preview for home page
function loadNewsPreview() {
    const container = document.getElementById('newsContainer');
    if (!container) return;
    
    const previewArticles = newsArticles.slice(0, 4);
    
    container.innerHTML = previewArticles.map(article => `
        <div class="col-lg-3 col-md-6 mb-4">
            <div class="card news-card h-100 fade-in-up">
                <img src="${article.image}" class="card-img-top" alt="${getLocalizedText(article.title)}">
                <div class="card-body">
                    <div class="d-flex align-items-center mb-2">
                        <i class="bi bi-calendar3 text-primary me-2"></i>
                        <small class="text-muted">${formatDateLocalized(article.date)}</small>
                    </div>
                    <h5 class="card-title">${getLocalizedText(article.title)}</h5>
                    <p class="card-text">${getLocalizedText(article.excerpt)}</p>
                    <button class="btn btn-outline-primary btn-sm" onclick="readNewsArticle(${article.id})">
                        <span data-en="Read More" data-ar="اقرأ المزيد">Read More</span>
                        <i class="bi bi-arrow-right ms-1"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Load all news
function loadAllNews() {
    const container = document.getElementById('allNewsContainer');
    if (!container) return;
    
    container.innerHTML = newsArticles.map(article => `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="card news-card h-100 fade-in-up">
                <img src="${article.image}" class="card-img-top" alt="${getLocalizedText(article.title)}">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        <div class="d-flex align-items-center">
                            <i class="bi bi-calendar3 text-primary me-2"></i>
                            <small class="text-muted">${formatDateLocalized(article.date)}</small>
                        </div>
                        <span class="badge bg-primary">${article.category}</span>
                    </div>
                    <h5 class="card-title">${getLocalizedText(article.title)}</h5>
                    <p class="card-text">${getLocalizedText(article.excerpt)}</p>
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center text-muted small">
                            <i class="bi bi-eye me-1"></i>
                            <span class="me-3">${article.views}</span>
                            <i class="bi bi-share me-1"></i>
                            <span>${article.shares}</span>
                        </div>
                        <button class="btn btn-outline-primary btn-sm" onclick="readNewsArticle(${article.id})">
                            <span data-en="Read More" data-ar="اقرأ المزيد">Read More</span>
                            <i class="bi bi-arrow-right ms-1"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Load job openings
function loadJobOpenings() {
    const container = document.getElementById('jobOpeningsContainer');
    if (!container) return;
    
    if (jobOpenings.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <h3 class="text-muted">
                    <span data-en="No jobs currently available" data-ar="لا توجد وظائف متاحة حالياً">No jobs currently available</span>
                </h3>
            </div>
        `;
        return;
    }
    
    container.innerHTML = jobOpenings.map(job => `
        <div class="col-lg-6 mb-4">
            <div class="job-card">
                <div class="d-flex justify-content-between align-items-start mb-3">
                    <div>
                        <h5 class="mb-1">${getLocalizedText(job.title)}</h5>
                        <span class="badge bg-primary">${job.department}</span>
                    </div>
                    <button class="btn btn-primary" onclick="applyForJob(${job.id})">
                        <span data-en="Apply Now" data-ar="تقدم الآن">Apply Now</span>
                        <i class="bi bi-arrow-right ms-1"></i>
                    </button>
                </div>
                
                <div class="row text-muted small mb-3">
                    <div class="col-6">
                        <i class="bi bi-geo-alt me-1"></i>
                        ${getLocalizedText(job.location)}
                    </div>
                    <div class="col-6">
                        <i class="bi bi-clock me-1"></i>
                        ${getLocalizedText(job.type)}
                    </div>
                    <div class="col-6">
                        <i class="bi bi-people me-1"></i>
                        ${getLocalizedText(job.experience)}
                    </div>
                    <div class="col-6">
                        <i class="bi bi-currency-dollar me-1"></i>
                        ${getLocalizedText(job.salary)}
                    </div>
                </div>
                
                <p class="mb-3">${getLocalizedText(job.description)}</p>
                
                <div>
                    <h6>
                        <span data-en="Requirements:" data-ar="المتطلبات:">Requirements:</span>
                    </h6>
                    <ul class="list-unstyled">
                        ${job.requirements.map(req => `
                            <li class="mb-1">
                                <i class="bi bi-check-circle text-primary me-2"></i>
                                ${getLocalizedText(req)}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `).join('');
}

// Video control functions
function toggleVideo() {
    const video = document.getElementById('heroVideo');
    const btn = document.getElementById('playPauseBtn');
    
    if (video.paused) {
        video.play();
        btn.innerHTML = '<i class="bi bi-pause-fill"></i>';
    } else {
        video.pause();
        btn.innerHTML = '<i class="bi bi-play-fill"></i>';
    }
}

function toggleMute() {
    const video = document.getElementById('heroVideo');
    const btn = document.getElementById('muteBtn');
    
    video.muted = !video.muted;
    btn.innerHTML = video.muted ? '<i class="bi bi-volume-mute-fill"></i>' : '<i class="bi bi-volume-up-fill"></i>';
}

// Contact form submission
function submitContactForm(event) {
    event.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Simulate form submission
    alert(getText('Thank you for your message! We will get back to you soon.', 'شكراً لرسالتك! سنتواصل معك قريباً.'));
    
    // Reset form
    document.getElementById('contactForm').reset();
}

// Apply for job function
function applyForJob(jobId) {
    // In a real application, this would navigate to a job application form
    alert(getText(`Applying for job ID: ${jobId}`, `التقدم للوظيفة رقم: ${jobId}`));
}

// Read news article function
function readNewsArticle(articleId) {
    // In a real application, this would navigate to the full article
    const article = newsArticles.find(a => a.id === articleId);
    if (article) {
        alert(getText(`Reading: ${article.title.en}`, `قراءة: ${article.title.ar}`));
    }
}

// Search functionality
function performSearch(query) {
    const resultsContainer = document.getElementById('searchResults');
    
    if (!query.trim()) {
        resultsContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-search display-1 text-muted"></i>
                <h3 class="mt-3">
                    <span data-en="Start searching" data-ar="ابدأ البحث">Start searching</span>
                </h3>
                <p class="text-muted">
                    <span data-en="Enter a word or phrase to search the website" data-ar="أدخل كلمة أو عبارة للبحث في الموقع">
                        Enter a word or phrase to search the website
                    </span>
                </p>
            </div>
        `;
        return;
    }
    
    // Simulate search results
    const mockResults = [
        {
            title: { en: 'About Us', ar: 'من نحن' },
            description: { en: 'Learn about Nibras Jordan, our history, and commitment to excellence', ar: 'تعرف على نبراس الأردن وتاريخنا والتزامنا بالتميز' },
            page: 'about'
        },
        {
            title: { en: 'Our Business', ar: 'أعمالنا' },
            description: { en: 'Discover our power generation projects and business operations', ar: 'اكتشف مشاريع توليد الطاقة وعملياتنا التجارية' },
            page: 'business'
        }
    ];
    
    resultsContainer.innerHTML = `
        <p class="text-muted mb-4">
            <span data-en="${mockResults.length} results for '${query}'" data-ar="${mockResults.length} نتيجة لـ '${query}'">
                ${mockResults.length} results for "${query}"
            </span>
        </p>
        
        ${mockResults.map(result => `
            <div class="search-result" onclick="navigateTo('${result.page}')">
                <h5 class="mb-2">${getLocalizedText(result.title)}</h5>
                <p class="text-muted mb-0">${getLocalizedText(result.description)}</p>
            </div>
        `).join('')}
    `;
    
    updateTextElements();
}

// Placeholder functions for other pages
function loadSustainabilityMainPage() {
    const breadcrumbItems = [
        { en: 'Home', ar: 'الرئيسية', page: 'home' },
        { en: 'Sustainability', ar: 'الاستدامة', page: 'sustainability-main' }
    ];
    
    const content = `
        ${createHeroSection(
            getText('Sustainability', 'الاستدامة'),
            getText('As a leading sustainable power company, our diverse mix of generation sources provides us the strength and flexibility to adapt to local and regional market needs', 'كشركة طاقة مستدامة رائدة، يوفر مزيجنا المتنوع من مصادر التوليد القوة والمرونة للتكيف مع احتياجات السوق المحلية والإقليمية'),
            'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
            breadcrumbItems
        )}
        
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center">
                        <h2 class="display-4 fw-bold mb-4">
                            <span data-en="More Than Just Providing Power" data-ar="أكثر من مجرد توفير الطاقة">More Than Just Providing Power</span>
                        </h2>
                        <p class="lead">
                            <span data-en="We believe that our businesses do much more than just provide power. Improving lives and making a lasting difference in the communities in which our businesses operate has always been part of our values and mission." 
                                  data-ar="نؤمن أن أعمالنا تفعل أكثر بكثير من مجرد توفير الطاقة. تحسين الحياة وإحداث فرق دائم في المجتمعات التي تعمل فيها أعمالنا كان دائماً جزءاً من قيمنا ومهمتنا.">
                                We believe that our businesses do much more than just provide power. Improving lives and making a lasting difference in the communities in which our businesses operate has always been part of our values and mission.
                            </span>
                        </p>
                    </div>
                </div>
                
                <!-- Sustainability Areas -->
                <div class="row mt-5">
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card h-100 hover-lift text-center" onclick="navigateTo('sustainability-safety')">
                            <div class="card-body">
                                <div class="icon-circle">
                                    <i class="bi bi-shield-check"></i>
                                </div>
                                <h5 class="card-title">
                                    <span data-en="Safety First" data-ar="السلامة أولاً">Safety First</span>
                                </h5>
                                <p class="card-text">
                                    <span data-en="Prioritizing safety for our people, contractors, and communities" 
                                          data-ar="إعطاء الأولوية للسلامة لموظفينا ومقاولينا ومجتمعاتنا">
                                        Prioritizing safety for our people, contractors, and communities
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card h-100 hover-lift text-center" onclick="navigateTo('sustainability-environment')">
                            <div class="card-body">
                                <div class="icon-circle">
                                    <i class="bi bi-tree"></i>
                                </div>
                                <h5 class="card-title">
                                    <span data-en="Environmental Protection" data-ar="حماية البيئة">Environmental Protection</span>
                                </h5>
                                <p class="card-text">
                                    <span data-en="Protecting the environment through sustainable practices" 
                                          data-ar="حماية البيئة من خلال الممارسات المستدامة">
                                        Protecting the environment through sustainable practices
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="card h-100 hover-lift text-center" onclick="navigateTo('sustainability-social')">
                            <div class="card-body">
                                <div class="icon-circle">
                                    <i class="bi bi-people"></i>
                                </div>
                                <h5 class="card-title">
                                    <span data-en="Social Responsibility" data-ar="المسؤولية الاجتماعية">Social Responsibility</span>
                                </h5>
                                <p class="card-text">
                                    <span data-en="Contributing to community development and social welfare" 
                                          data-ar="المساهمة في التنمية المجتمعية والرفاه الاجتماعي">
                                        Contributing to community development and social welfare
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('mainContent').innerHTML = content;
    initializePageAnimations();
    updateTextElements();
}

// Placeholder functions for other pages (simplified versions)
function loadMissionVisionValuesPage() {
    const breadcrumbItems = [
        { en: 'Home', ar: 'الرئيسية', page: 'home' },
        { en: 'About Us', ar: 'من نحن', page: 'about' },
        { en: 'Mission, Vision & Values', ar: 'المهمة والرؤية والقيم', page: 'about-mission-vision-values' }
    ];
    
    const content = `
        ${createHeroSection(
            getText('Our Mission, Vision & Values', 'مهمتنا ورؤيتنا وقيمنا'),
            getText('We are committed to pioneering the energy of the future on a global scale', 'نحن ملتزمون بريادة طاقة المستقبل على نطاق عالمي'),
            'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
            breadcrumbItems
        )}
        
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center">
                        <h2 class="display-4 fw-bold mb-4">
                            <span data-en="Our Mission" data-ar="مهمتنا">Our Mission</span>
                        </h2>
                        <p class="lead">
                            <span data-en="Improving lives and making a lasting difference in the communities in which our business operates is a core part of our values and mission." 
                                  data-ar="تحسين الحياة وإحداث فرق دائم في المجتمعات التي نعمل فيها هو جزء أساسي من قيمنا ومهمتنا.">
                                Improving lives and making a lasting difference in the communities in which our business operates is a core part of our values and mission.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('mainContent').innerHTML = content;
    initializePageAnimations();
    updateTextElements();
}

// Add similar placeholder functions for other pages
function loadOwnershipPage() { loadPlaceholderPage('Ownership', 'الملكية'); }
function loadLeadershipPage() { loadPlaceholderPage('Our Leadership', 'قيادتنا'); }
function loadEthicsCompliancePage() { loadPlaceholderPage('Ethics and Compliance', 'الأخلاق والامتثال'); }
function loadAwardsRecognitionsPage() { loadPlaceholderPage('Awards and Recognitions', 'الجوائز والتقديرات'); }
function loadSafetyFirstPage() { loadPlaceholderPage('Safety First', 'السلامة أولاً'); }
function loadEnvironmentalProtectionPage() { loadPlaceholderPage('Environmental Protection', 'حماية البيئة'); }
function loadSocialResponsibilityPage() { loadPlaceholderPage('Social Responsibility', 'المسؤولية الاجتماعية'); }
function loadStakeholderRelationsPage() { loadPlaceholderPage('Stakeholder Relations', 'علاقات أصحاب المصلحة'); }
function loadAssetManagementPage() { loadPlaceholderPage('Asset Management', 'إدارة الأصول'); }
function loadSupplyChainManagementPage() { loadPlaceholderPage('Supply Chain Management', 'إدارة سلسلة التوريد'); }
function loadAESJordanIPP1Page() { loadPlaceholderPage('AES Jordan PSC (IPP1)', 'شركة AES الأردن (IPP1)'); }
function loadAESLevantIPP4Page() { loadPlaceholderPage('AES Levant Holdings BV (IPP4)', 'شركة AES بلاد الشام (IPP4)'); }
function loadAMSolarPage() { loadPlaceholderPage('AM Solar', 'AM الطاقة الشمسية'); }

// Generic placeholder page loader
function loadPlaceholderPage(titleEn, titleAr) {
    const content = `
        ${createHeroSection(
            getText(titleEn, titleAr),
            getText('We are committed to pioneering the energy of the future on a global scale', 'نحن ملتزمون بريادة طاقة المستقبل على نطاق عالمي'),
            'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
        )}
        
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center">
                        <h2 class="display-4 fw-bold mb-4">${getText(titleEn, titleAr)}</h2>
                        <p class="lead">
                            <span data-en="This page is under development. Please check back soon for more information." 
                                  data-ar="هذه الصفحة قيد التطوير. يرجى المراجعة قريباً للحصول على مزيد من المعلومات.">
                                This page is under development. Please check back soon for more information.
                            </span>
                        </p>
                        <button class="btn btn-primary" onclick="navigateTo('home')">
                            <span data-en="Back to Home" data-ar="العودة للرئيسية">Back to Home</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('mainContent').innerHTML = content;
    initializePageAnimations();
    updateTextElements();
}