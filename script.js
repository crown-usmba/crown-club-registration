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
        "success-message": "لقد استلمنا طلبك وسنتواصل معك قريباً بمزيد من المعلومات.",
        "error-title": "خطأ في الإرسال",
        "error-message": "حدث خطأ أثناء إرسال البيانات. يرجى المحاولة مرة أخرى."
    },
    fr: {
        // French translations would go here
    },
    en: {
        // English translations would go here
    }
};

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
    }
    
    // عرض/إخفاء خيارات الرياضة
    const sportCheckbox = document.querySelector('input[value="sport"]');
    const sportOptions = document.getElementById('sportOptions');
    
    if (sportCheckbox) {
        sportCheckbox.addEventListener('change', function() {
            sportOptions.style.display = this.checked ? 'block' : 'none';
            if (!this.checked) {
                const sportRadios = document.querySelectorAll('input[name="sport"]');
                sportRadios.forEach(radio => radio.checked = false);
            }
        });
    }
    
    // التحقق من النموذج وإرساله
    document.getElementById('registrationForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // عرض رسالة تحميل
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'جاري الإرسال...';
            submitBtn.disabled = true;
            
            try {
                // إرسال النموذج إلى Formspree
                const formData = new FormData(this);
                
                const response = await fetch(this.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    // النموذج صالح، عرض رسالة النجاح
                    document.getElementById('successTitle').textContent = translations[currentLang]['success-title'];
                    document.getElementById('successMessage').textContent = translations[currentLang]['success-message'];
                    document.getElementById('successModal').style.display = 'flex';
                    
                    // إعادة تعيين النموذج
                    this.reset();
                    if (sportOptions) {
                        sportOptions.style.display = 'none';
                    }
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                // في حالة الخطأ، عرض رسالة خطأ
                document.getElementById('successTitle').textContent = translations[currentLang]['error-title'];
                document.getElementById('successMessage').textContent = translations[currentLang]['error-message'];
                document.getElementById('successModal').style.display = 'flex';
            } finally {
                // استعادة حالة الزر
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        }
    });
    
    // إغلاق نافذة النجاح
    document.getElementById('closeSuccess').addEventListener('click', function() {
        document.getElementById('successModal').style.display = 'none';
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
            { id: 'interest', errorId: 'interestError', key: 'interest-error' }
        ];
        
        requiredFields.forEach(field => {
            const element = document.getElementById(field.id);
            if (!element || !element.value.trim()) {
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
        if (sportCheckbox && sportCheckbox.checked) {
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
