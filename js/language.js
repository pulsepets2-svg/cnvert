// Language Management System

// Toggle language function
function toggleLanguage() {
    isArabic = !isArabic;
    updateLanguageDisplay();
    updatePageContent();
}

// Update language display
function updateLanguageDisplay() {
    const html = document.documentElement;
    const languageText = document.getElementById('languageText');
    
    if (isArabic) {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        languageText.textContent = 'English';
        document.body.classList.add('rtl');
    } else {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        languageText.textContent = 'العربية';
        document.body.classList.remove('rtl');
    }
    
    // Update all text elements with data attributes
    updateTextElements();
}

// Update all text elements based on current language
function updateTextElements() {
    const elements = document.querySelectorAll('[data-en][data-ar]');
    elements.forEach(element => {
        const enText = element.getAttribute('data-en');
        const arText = element.getAttribute('data-ar');
        element.textContent = isArabic ? arText : enText;
    });
}

// Update page content when language changes
function updatePageContent() {
    // Reload current page with new language
    switch (currentPage) {
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
}

// Get localized text
function getLocalizedText(textObj) {
    if (typeof textObj === 'string') return textObj;
    return isArabic ? textObj.ar : textObj.en;
}

// Format numbers for Arabic
function formatNumber(number) {
    if (isArabic) {
        // Convert to Arabic numerals
        const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        return number.toString().replace(/\d/g, (digit) => arabicNumerals[parseInt(digit)]);
    }
    return number.toString();
}

// Format date for current language
function formatDateLocalized(dateString) {
    const date = new Date(dateString);
    if (isArabic) {
        return date.toLocaleDateString('ar-QA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } else {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}

// Initialize language on page load
function initializeLanguage() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('nibras-language');
    if (savedLanguage === 'ar') {
        isArabic = true;
        updateLanguageDisplay();
    }
}

// Save language preference
function saveLanguagePreference() {
    localStorage.setItem('nibras-language', isArabic ? 'ar' : 'en');
}

// Update language toggle when language changes
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    
    // Listen for language toggle clicks
    document.getElementById('languageToggle').addEventListener('click', function() {
        toggleLanguage();
        saveLanguagePreference();
    });
});