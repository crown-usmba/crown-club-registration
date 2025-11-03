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
        "club-name": "Club CROWN",
        "club-description": "Pour les activités économiques, sociales, humanitaires et sportives",
        "follow-us": "Suivez-nous sur Instagram",
        "personal-info": "Informations personnelles",
        "first-name": "Prénom",
        "first-name-error": "Veuillez saisir votre prénom",
        "last-name": "Nom",
        "last-name-error": "Veuillez saisir votre nom",
        "cin": "Numéro de carte d'identité nationale (CIN)",
        "cin-error": "Veuillez saisir votre numéro CIN",
        "massar": "Numéro Massar",
        "massar-error": "Veuillez saisir un numéro Massar valide",
        "email": "E-mail universitaire",
        "email-error": "Veuillez saisir une adresse e-mail universitaire valide",
        "phone": "Numéro de téléphone",
        "phone-error": "Veuillez saisir un numéro de téléphone valide",
        "major": "Spécialité",
        "major-error": "Veuillez saisir votre spécialité",
        "year": "Année d'étude",
        "select-year": "Choisir l'année",
        "first-year": "Première année",
        "second-year": "Deuxième année",
        "third-year": "Troisième année",
        "fourth-year": "Quatrième année",
        "graduate": "Études supérieures",
        "year-error": "Veuillez choisir votre année d'étude",
        "interests": "Intérêts du club",
        "activities-label": "Choisissez les domaines d'activité qui vous intéressent",
        "economic-activities": "Activités économiques",
        "social-activities": "Activités sociales",
        "human-activities": "Activités humanitaires",
        "sport-activities": "Activités sportives",
        "activities-error": "Veuillez choisir au moins un domaine d'activité",
        "sport-options-title": "Choisissez votre sport préféré",
        "volleyball": "Volley-ball",
        "basketball": "Basket-ball",
        "sport-error": "Veuillez choisir un sport",
        "interest": "Qu'est-ce qui vous intéresse dans notre club?",
        "interest-error": "Veuillez nous dire ce qui vous intéresse dans notre club",
        "experience": "Expérience préalable (le cas échéant)",
        "additional-info": "Informations supplémentaires",
        "availability": "Quand êtes-vous généralement disponible pour les réunions?",
        "weekday-mornings": "Matin en semaine",
        "weekday-afternoons": "Après-midi en semaine",
        "weekday-evenings": "Soir en semaine",
        "weekends": "Week-ends",
        "availability-error": "Veuillez choisir votre disponibilité",
        "hear-about": "Comment avez-vous entendu parler de nous?",
        "select-option": "Choisir une option",
        "friend": "Ami",
        "professor": "Professeur",
        "social-media": "Réseaux sociaux",
        "poster": "Affiche/ brochure",
        "university-website": "Site web de l'université",
        "club-fair": "Forum des clubs",
        "other": "Autre",
        "mailing-list": "Je souhaite recevoir les mises à jour du club par e-mail",
        "whatsapp-updates": "Je souhaite recevoir les mises à jour du club par WhatsApp",
        "agree": "J'accepte les termes et conditions du club",
        "agree-error": "Vous devez accepter les termes et conditions",
        "submit": "Soumettre l'inscription",
        "success-title": "Merci pour votre inscription!",
        "success-message": "Nous avons reçu votre demande et nous vous contacterons bientôt avec plus d'informations."
    },
    en: {
        "club-name": "CROWN Club",
        "club-description": "For economic, social, humanitarian and sports activities",
        "follow-us": "Follow us on Instagram",
        "personal-info": "Personal Information",
        "first-name": "First Name",
        "first-name-error": "Please enter your first name",
        "last-name": "Last Name",
        "last-name-error": "Please enter your last name",
        "cin": "National ID Card Number (CIN)",
        "cin-error": "Please enter your CIN number",
        "massar": "Massar Number",
        "massar-error": "Please enter a valid Massar number",
        "email": "University Email",
        "email-error": "Please enter a valid university email",
        "phone": "Phone Number",
        "phone-error": "Please enter a valid phone number",
        "major": "Major",
        "major-error": "Please enter your major",
        "year": "Study Year",
        "select-year": "Select Year",
        "first-year": "First Year",
        "second-year": "Second Year",
        "third-year": "Third Year",
        "fourth-year": "Fourth Year",
        "graduate": "Graduate Studies",
        "year-error": "Please select your study year",
        "interests": "Club Interests",
        "activities-label": "Choose activity areas that interest you",
        "economic-activities": "Economic Activities",
        "social-activities": "Social Activities",
        "human-activities": "Humanitarian Activities",
        "sport-activities": "Sports Activities",
        "activities-error": "Please choose at least one activity area",
        "sport-options-title": "Choose your preferred sport",
        "volleyball": "Volleyball",
        "basketball": "Basketball",
        "sport-error": "Please choose a sport",
        "interest": "What interests you about our club?",
        "interest-error": "Please tell us what interests you about our club",
        "experience": "Previous Experience (if any)",
        "additional-info": "Additional Information",
        "availability": "When are you usually available for meetings?",
        "weekday-mornings": "Weekday Mornings",
        "weekday-afternoons": "Weekday Afternoons",
        "weekday-evenings": "Weekday Evenings",
        "weekends": "Weekends",
        "availability-error": "Please choose your availability",
        "hear-about": "How did you hear about us?",
        "select-option": "Select an option",
        "friend": "Friend",
        "professor": "Professor",
        "social-media": "Social Media",
        "poster": "Poster/Flyer",
        "university-website": "University Website",
        "club-fair": "Club Fair",
        "other": "Other",
        "mailing-list": "I want to receive club updates via email",
        "whatsapp-updates": "I want to receive club updates via WhatsApp",
        "agree": "I agree to the club's terms and conditions",
        "agree-error": "You must agree to the terms and conditions",
        "submit": "Submit Registration",
        "success-title": "Thank you for registering!",
        "success-message": "We have received your application and will contact you soon with more information."
    }
};

document.addEventListener('DOMContentLoaded', function() {
    let currentLang = 'ar';
    
    // Initialize the language on page load
    switchLanguage(currentLang);
    
    // تبديل اللغة
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
            
            // تحديث حالة الأزرار
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            currentLang = lang;
        });
    });
    
    function switchLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // تحديث جميع النصوص مع data-translate
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // تحديث عناصر خاصة
        updateSpecialElements(lang);
    }
    
    function updateSpecialElements(lang) {
        // تحديث عناصر قد تحتاج معالجة خاصة
        const titleElement = document.querySelector('title');
        if (titleElement && translations[lang] && translations[lang]['club-name']) {
            titleElement.textContent = translations[lang]['club-name'] + ' - Registration Form';
        }
    }
    
    // عرض/إخفاء خيارات الرياضة
    const sportCheckbox = document.querySelector('input[value="sport"]');
    const sportOptions = document.getElementById('sportOptions');
    
    if (sportCheckbox && sportOptions) {
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
            submitBtn.textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 
                                  currentLang === 'fr' ? 'Envoi en cours...' : 'Sending...';
            submitBtn.disabled = true;
            
            try {
                // إرسال البيانات إلى Formspree
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
                    showSuccessMessage();
                    
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
                showErrorMessage();
            } finally {
                // استعادة حالة الزر
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        }
    });
    
    function showSuccessMessage() {
        document.getElementById('successTitle').textContent = translations[currentLang]['success-title'];
        document.getElementById('successMessage').textContent = translations[currentLang]['success-message'];
        document.getElementById('successModal').style.display = 'flex';
    }
    
    function showErrorMessage() {
        document.getElementById('successTitle').textContent = translations[currentLang]['error-title'];
        document.getElementById('successMessage').textContent = translations[currentLang]['error-message'];
        document.getElementById('successModal').style.display = 'flex';
    }
    
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
            { id: 'interest', errorId: 'interestError', key: 'interest-error' },
            { id: 'hear-about', errorId: 'hearAboutError', key: 'select-option' }
        ];
        
        requiredFields.forEach(field => {
            const element = document.getElementById(field.id);
            if (!element || !element.value.trim()) {
                const errorElement = document.getElementById(field.errorId);
                if (errorElement) {
                    errorElement.textContent = translations[currentLang][field.key];
                }
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
