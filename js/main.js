// Global Variables
let currentPage = 'home';
let isArabic = false;
let newsArticles = [];
let jobOpenings = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadHomePage();
    setupEventListeners();
    updateCurrentYear();
});

// Initialize application
function initializeApp() {
    // Initialize news articles
    newsArticles = [
        {
            id: 1,
            category: 'company',
            featured: true,
            image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
            date: '2024-01-15',
            title: { 
                en: 'Nibras Jordan Celebrates 10 Years of Reliable Power Generation',
                ar: 'نبراس الأردن تحتفل بـ 10 سنوات من توليد الطاقة الموثوق'
            },
            excerpt: { 
                en: 'Amman East and Levant Power Plants continue to provide over 8% of Jordan\'s electricity with exceptional reliability.',
                ar: 'محطتا عمان الشرقية وبلاد الشام للطاقة تواصلان توفير أكثر من 8% من كهرباء الأردن بموثوقية استثنائية.'
            },
            content: {
                en: 'Nibras Jordan proudly celebrates a decade of reliable power generation, having consistently supplied over 8% of Jordan\'s electricity needs since 2009...',
                ar: 'تحتفل نبراس الأردن بفخر بعقد من توليد الطاقة الموثوق، حيث وفرت باستمرار أكثر من 8% من احتياجات الأردن من الكهرباء منذ عام 2009...'
            },
            views: 1250,
            shares: 45
        },
        {
            id: 2,
            category: 'performance',
            featured: false,
            image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
            date: '2024-01-10',
            title: { 
                en: 'Nibras Jordan Achieves Record Performance in 2023',
                ar: 'نبراس الأردن تحقق أداءً قياسياً في 2023'
            },
            excerpt: { 
                en: '641 MW combined capacity delivers consistent, efficient power generation exceeding operational targets.',
                ar: 'القدرة المجمعة البالغة 641 ميجاواط توفر توليد طاقة ثابت وفعال يتجاوز الأهداف التشغيلية.'
            },
            content: {
                en: 'Nibras Jordan concluded 2023 with record-breaking performance across all operational metrics...',
                ar: 'اختتمت نبراس الأردن عام 2023 بأداء قياسي عبر جميع المقاييس التشغيلية...'
            },
            views: 890,
            shares: 32
        }
    ];

    // Initialize job openings
    jobOpenings = [
        {
            id: 1,
            title: { en: "Senior Electrical Engineer", ar: "مهندس كهرباء أول" },
            department: "Engineering",
            location: { en: "Amman, Jordan", ar: "عمان، الأردن" },
            type: { en: "Full-time", ar: "دوام كامل" },
            experience: { en: "5+ years", ar: "5+ سنوات" },
            salary: { en: "Competitive", ar: "راتب تنافسي" },
            description: {
                en: "We are seeking a Senior Electrical Engineer to join our dynamic team...",
                ar: "نحن نبحث عن مهندس كهرباء أول للانضمام إلى فريقنا الديناميكي..."
            },
            requirements: [
                { en: "Bachelor's degree in Electrical Engineering", ar: "درجة البكالوريوس في الهندسة الكهربائية" },
                { en: "Minimum 5 years of experience in power generation", ar: "خبرة لا تقل عن 5 سنوات في توليد الطاقة" }
            ]
        }
    ];
}

// Setup event listeners
function setupEventListeners() {
    // Language toggle
    document.getElementById('languageToggle').addEventListener('click', toggleLanguage);
    
    // Search toggle
    document.getElementById('searchToggle').addEventListener('click', toggleSearch);
    
    // Scroll event for header
    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer for animations
    setupIntersectionObserver();
}

// Handle scroll events
function handleScroll() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Setup intersection observer for animations
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Observe all elements with fade-in-up class
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
}

// Navigation function
function navigateTo(page, params = {}) {
    currentPage = page;
    
    // Handle anchor links for home page sections
    if (page.startsWith('#')) {
        if (currentPage !== 'home') {
            loadHomePage();
            setTimeout(() => {
                const element = document.querySelector(page);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.querySelector(page);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        return;
    }
    
    // Load the appropriate page
    switch (page) {
        case 'home':
            loadHomePage();
            break;
        case 'about':
            loadAboutPage();
            break;
        case 'business':
            loadBusinessPage();
            break;
        case 'careers':
            loadCareersPage();
            break;
        case 'news':
            loadNewsPage();
            break;
        case 'contact':
            loadContactPage();
            break;
        case 'search':
            loadSearchPage();
            break;
        case 'sustainability-main':
            loadSustainabilityMainPage();
            break;
        case 'about-mission-vision-values':
            loadMissionVisionValuesPage();
            break;
        case 'about-ownership':
            loadOwnershipPage();
            break;
        case 'about-leadership':
            loadLeadershipPage();
            break;
        case 'about-ethics-compliance':
            loadEthicsCompliancePage();
            break;
        case 'about-awards-recognitions':
            loadAwardsRecognitionsPage();
            break;
        case 'sustainability-safety':
            loadSafetyFirstPage();
            break;
        case 'sustainability-environment':
            loadEnvironmentalProtectionPage();
            break;
        case 'sustainability-social':
            loadSocialResponsibilityPage();
            break;
        case 'sustainability-stakeholder':
            loadStakeholderRelationsPage();
            break;
        case 'sustainability-assets':
            loadAssetManagementPage();
            break;
        case 'sustainability-supply':
            loadSupplyChainManagementPage();
            break;
        case 'business-aes-jordan-ipp1':
            loadAESJordanIPP1Page();
            break;
        case 'business-aes-levant-ipp4':
            loadAESLevantIPP4Page();
            break;
        case 'business-am-solar':
            loadAMSolarPage();
            break;
        default:
            loadHomePage();
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Update page content animation
    const mainContent = document.getElementById('mainContent');
    mainContent.classList.remove('loaded');
    setTimeout(() => {
        mainContent.classList.add('loaded');
    }, 50);
}

// Toggle search functionality
function toggleSearch() {
    if (currentPage === 'search') {
        navigateTo('home');
    } else {
        navigateTo('search');
    }
}

// Update current year in footer
function updateCurrentYear() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}

// Format date function
function formatDate(dateString) {
    const date = new Date(dateString);
    return isArabic 
        ? date.toLocaleDateString('ar-QA')
        : date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

// Utility function to get text content based on language
function getText(enText, arText) {
    return isArabic ? arText : enText;
}

// Utility function to create breadcrumb
function createBreadcrumb(items) {
    return `
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb breadcrumb-custom">
                ${items.map((item, index) => {
                    if (index === items.length - 1) {
                        return `<li class="breadcrumb-item active">${getText(item.en, item.ar)}</li>`;
                    } else {
                        return `<li class="breadcrumb-item">
                            <a href="#" onclick="navigateTo('${item.page}')">${getText(item.en, item.ar)}</a>
                        </li>`;
                    }
                }).join('')}
            </ol>
        </nav>
    `;
}

// Utility function to create hero section
function createHeroSection(title, subtitle, backgroundImage, breadcrumbItems = []) {
    return `
        <section class="hero-section" style="background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgroundImage}');">
            <div class="container">
                ${breadcrumbItems.length > 0 ? createBreadcrumb(breadcrumbItems) : ''}
                <div class="hero-content">
                    <h1 class="fade-in-up">${title}</h1>
                    <p class="fade-in-up">${subtitle}</p>
                </div>
            </div>
        </section>
    `;
}

// Initialize page content animations
function initializePageAnimations() {
    // Re-setup intersection observer for new content
    setupIntersectionObserver();
    
    // Add page content class for transition
    const mainContent = document.getElementById('mainContent');
    mainContent.classList.add('page-content');
    
    // Trigger animation
    setTimeout(() => {
        mainContent.classList.add('loaded');
    }, 100);
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
});

// Performance monitoring
window.addEventListener('load', function() {
    console.log('Page loaded in:', performance.now(), 'ms');
});