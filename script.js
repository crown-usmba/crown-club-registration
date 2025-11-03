// بيانات الترجمة
const translations = {
    ar: {
        "club-name": "نادي CROWN",
        "club-description": "للأنشطة الاقتصادية والاجتماعية والإنسانية والرياضية",
        "follow-us": "تابعنا على الإنستغرام",
        "personal-info": "المعلومات الشخصية",
        "first-name": "الاسم الأول",
        "first-name-error": "يرجى إدخال الاسم الأول",
        "last-name": "الاسم الأخير",
        "last-name-error": "يرجى إدخال الاسم الأخير",
        "cin": "رقم بطاقة التعريف الوطنية (CIN)",
        "cin-error": "يرجى إدخال رقم بطاقة التعريف الوطنية",
        "massar": "رقم مسار",
        "massar-error": "يرجى إدخال رقم مسار صحيح",
        "email": "البريد الإلكتروني الجامعي",
        "email-error": "يرجى إدخال بريد إلكتروني جامعي صحيح",
        "phone": "رقم الهاتف",
        "phone-error": "يرجى إدخال رقم هاتف صحيح",
        "major": "التخصص",
        "major-error": "يرجى إدخال تخصصك",
        "year": "سنة الدراسة",
        "select-year": "اختر السنة",
        "first-year": "سنة أولى",
        "second-year": "سنة ثانية",
        "third-year": "سنة ثالثة",
        "fourth-year": "سنة رابعة",
        "graduate": "دراسات عليا",
        "year-error": "يرجى اختيار سنة الدراسة",
        "interests": "اهتمامات النادي",
        "activities-label": "اختر مجالات الأنشطة التي تهمك",
        "economic-activities": "الأنشطة الاقتصادية",
        "social-activities": "الأنشطة الاجتماعية",
        "human-activities": "الأنشطة الإنسانية",
        "sport-activities": "الأنشطة الرياضية",
        "activities-error": "يرجى اختيار مجال نشاط واحد على الأقل",
        "sport-options-title": "اختر الرياضة التي تفضل",
        "volleyball": "الكرة الطائرة",
        "basketball": "كرة السلة",
        "sport-error": "يرجى اختيار رياضة واحدة",
        "interest": "ما الذي يثير اهتمامك في نادينا؟",
        "interest-error": "يرجى إخبارنا بما يثير اهتمامك في نادينا",
        "experience": "الخبرة السابقة (إن وجدت)",
        "additional-info": "معلومات إضافية",
        "availability": "متى تكون متاحاً عادةً للاجتماعات؟",
        "weekday-mornings": "صباح أيام الأسبوع",
        "weekday-afternoons": "بعد ظهر أيام الأسبوع",
        "weekday-evenings": "مساء أيام الأسبوع",
        "weekends": "عطلات نهاية الأسبوع",
        "availability-error": "يرجى اختيار مدى توافرك",
        "hear-about": "كيف سمعت عنا؟",
        "select-option": "اختر خياراً",
        "friend": "صديق",
        "professor": "أستاذ",
        "social-media": "وسائل التواصل الاجتماعي",
        "poster": "ملصق/نشرة",
        "university-website": "موقع الجامعة",
        "club-fair": "معرض الأندية",
        "other": "آخر",
        "mailing-list": "أرغب في تلقي تحديثات النادي عبر البريد الإلكتروني",
        "whatsapp-updates": "أرغب في تلقي تحديثات النادي عبر واتساب",
        "agree": "أوافق على شروط وأحكام النادي",
        "agree-error": "يجب الموافقة على الشروط والأحكام",
        "submit": "تقديم التسجيل",
        "success-title": "شكراً لتسجيلك!",
        "success-message": "لقد استلمنا طلبك وسنتواصل معك قريباً بمزيد من المعلومات."
    },
    fr: {
        // ... French translations
    },
    en: {
        // ... English translations
    }
};

// التحقق من معلمة URL
const urlParams = new URLSearchParams(window.location.search);
const isAdminMode = urlParams.has('admin');

if (isAdminMode) {
    // عرض شاشة تسجيل الدخول للمشرف
    document.getElementById('adminLogin').style.display = 'flex';
    document.getElementById('mainContainer').style.display = 'none';
} else {
    // إخفاء شاشة تسجيل الدخول وعرض النموذج العادي
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('mainContainer').style.display = 'block';
}

// التحقق من كلمة مرور المشرف
document.getElementById('loginBtn').addEventListener('click', function() {
    const password = document.getElementById('adminPassword').value;
    const errorElement = document.getElementById('loginError');
    
    if (password === 'USMBA.crown') {
        // كلمة المرور صحيحة، عرض النموذج
        document.getElementById('adminLogin').style.display = 'none';
        document.getElementById('mainContainer').style.display = 'block';
    } else {
        // كلمة المرور خاطئة، عرض رسالة الخطأ
        errorElement.style.display = 'block';
    }
});

// السماح بالضغط على Enter في حقل كلمة المرور
document.getElementById('adminPassword').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('loginBtn').click();
    }
});

// باقي كود JavaScript الخاص بالنموذج والتحقق
document.addEventListener('DOMContentLoaded', function() {
    // تبديل اللغة
    const langButtons = document.querySelectorAll('.lang-btn');
    let currentLang = 'ar';
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
            
            // تحديث حالة الأزرار
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    function switchLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // تحديث النصوص
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        
        // تحديث العناصر بدون data-translate (تحديد يدوي)
        if (translations[lang]) {
            document.querySelector('h1').textContent = translations[lang]['club-name'];
            document.querySelector('.header p').textContent = translations[lang]['club-description'];
            document.querySelector('.instagram-link').innerHTML = `<i class="fab fa-instagram"></i> ${translations[lang]['follow-us']}`;
        }
    }
    
    // عرض/إخفاء خيارات الرياضة
    const sportCheckbox = document.querySelector('input[value="sport"]');
    const sportOptions = document.getElementById('sportOptions');
    
    sportCheckbox.addEventListener('change', function() {
        sportOptions.style.display = this.checked ? 'block' : 'none';
        if (!this.checked) {
            const sportRadios = document.querySelectorAll('input[name="sport"]');
            sportRadios.forEach(radio => radio.checked = false);
        }
    });
    
    // التحقق من النموذج
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // النموذج صالح، عرض رسالة النجاح
            document.getElementById('successTitle').textContent = translations[currentLang]['success-title'];
            document.getElementById('successMessage').textContent = translations[currentLang]['success-message'];
            document.getElementById('successModal').style.display = 'flex';
        }
    });
    
    // إغلاق نافذة النجاح
    document.getElementById('closeSuccess').addEventListener('click', function() {
        document.getElementById('successModal').style.display = 'none';
        document.getElementById('registrationForm').reset();
        sportOptions.style.display = 'none';
    });
    
    function validateForm() {
        let isValid = true;
        
        // إعادة تعيين رسائل الخطأ
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.textContent = '');
        
        // التحقق من الحقول المطلوبة
        const requiredFields = [
            { id: 'firstName', errorId: 'firstNameError', key: 'first-name-error' },
            { id: 'lastName', errorId: 'lastNameError', key: 'last-name-error' },
            { id: 'cin', errorId: 'cinError', key: 'cin-error' },
            { id: 'massar', errorId: 'massarError', key: 'massar-error' },
            { id: 'email', errorId: 'emailError', key: 'email-error' },
            { id: 'phone', errorId: 'phoneError', key: 'phone-error' },
            { id: 'major', errorId: 'majorError', key: 'major-error' },
            { id: 'year', errorId: 'yearError', key: 'year-error' },
            { id: 'interest', errorId: 'interestError', key: 'interest-error' },
            { id: 'hear-about', errorId: 'hearAboutError', key: 'select-option' }
        ];
        
        requiredFields.forEach(field => {
            const element = document.getElementById(field.id);
            if (!element.value.trim()) {
                document.getElementById(field.errorId).textContent = translations[currentLang][field.key];
                isValid = false;
            }
        });
        
        // التحقق من اهتمامات النادي
        const interests = document.querySelectorAll('input[name="interests"]:checked');
        if (interests.length === 0) {
            document.getElementById('activitiesError').textContent = translations[currentLang]['activities-error'];
            isValid = false;
        }
        
        // التحقق من الرياضة إذا كانت مختارة
        if (sportCheckbox.checked) {
            const sportSelected = document.querySelector('input[name="sport"]:checked');
            if (!sportSelected) {
                document.getElementById('sportError').textContent = translations[currentLang]['sport-error'];
                isValid = false;
            }
        }
        
        // التحقق من التوفر
        const availability = document.querySelectorAll('input[name="availability"]:checked');
        if (availability.length === 0) {
            document.getElementById('availabilityError').textContent = translations[currentLang]['availability-error'];
            isValid = false;
        }
        
        // التحقق من الموافقة على الشروط
        if (!document.getElementById('agree').checked) {
            document.getElementById('agreeError').textContent = translations[currentLang]['agree-error'];
            isValid = false;
        }
        
        return isValid;
    }
});
