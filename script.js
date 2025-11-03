// Form Management
let currentStep = 1;
const totalSteps = 3;

// Translation dictionary
const translations = {
    ar: {
        step1: "المعلومات الشخصية",
        step2: "اهتمامات النادي", 
        step3: "معلومات إضافية",
        personalInfo: "المعلومات الشخصية",
        clubInterests: "اهتمامات النادي",
        additionalInfo: "معلومات إضافية",
        next: "التالي",
        previous: "السابق",
        submit: "إكمال التسجيل",
        requiredField: "هذا الحقل مطلوب",
        selectActivity: "يرجى اختيار مجال نشاط واحد على الأقل",
        selectSport: "يرجى اختيار رياضة واحدة",
        interestRequired: "يرجى إخبارنا بما يثير اهتمامك في نادينا",
        availabilityRequired: "يرجى اختيار مدى توافرك",
        agreementRequired: "يجب الموافقة على الشروط والأحكام",
        successTitle: "مرحباً في عائلة CROWN!",
        successMessage: "تم استلام طلبك بنجاح وسنتواصل معك قريباً للترحيب بك رسمياً في النادي",
        excellent: "ممتاز!"
    },
    fr: {
        step1: "Informations Personnelles",
        step2: "Intérêts du Club",
        step3: "Informations Supplémentaires",
        personalInfo: "Informations Personnelles",
        clubInterests: "Intérêts du Club", 
        additionalInfo: "Informations Supplémentaires",
        next: "Suivant",
        previous: "Précédent",
        submit: "Terminer l'Inscription",
        requiredField: "Ce champ est obligatoire",
        selectActivity: "Veuillez sélectionner au moins un domaine d'activité",
        selectSport: "Veuillez sélectionner un sport",
        interestRequired: "Veuillez nous dire ce qui vous intéresse dans notre club",
        availabilityRequired: "Veuillez sélectionner votre disponibilité",
        agreementRequired: "Vous devez accepter les termes et conditions",
        successTitle: "Bienvenue dans la famille CROWN!",
        successMessage: "Votre demande a été reçue avec succès et nous vous contacterons bientôt pour vous souhaiter officiellement la bienvenue dans le club",
        excellent: "Excellent!"
    },
    en: {
        step1: "Personal Information", 
        step2: "Club Interests",
        step3: "Additional Information",
        personalInfo: "Personal Information",
        clubInterests: "Club Interests",
        additionalInfo: "Additional Information", 
        next: "Next",
        previous: "Previous",
        submit: "Complete Registration",
        requiredField: "This field is required",
        selectActivity: "Please select at least one activity field",
        selectSport: "Please select a sport",
        interestRequired: "Please tell us what interests you in our club",
        availabilityRequired: "Please select your availability",
        agreementRequired: "You must agree to the terms and conditions",
        successTitle: "Welcome to the CROWN Family!",
        successMessage: "Your application has been received successfully and we will contact you soon to officially welcome you to the club",
        excellent: "Excellent!"
    }
};

let currentLanguage = 'ar';

document.addEventListener('DOMContentLoaded', function() {
    initializeForm();
    setupScrollHandling();
    setupLanguageSwitcher();
    changeLanguage('ar'); // Initialize with Arabic
});

function initializeForm() {
    setupStepNavigation();
    setupInteractiveElements();
    updateProgressBar();
    
    // Hide sport options initially
    document.getElementById('sportOptions').style.display = 'none';
}

function setupScrollHandling() {
    window.addEventListener('scroll', function() {
        const progressBar = document.querySelector('.enhanced-progress');
        if (progressBar) {
            if (window.scrollY > 50) {
                progressBar.style.background = 'rgba(26, 26, 26, 0.98)';
            } else {
                progressBar.style.background = 'rgba(26, 26, 26, 0.95)';
            }
        }
    });
}

function setupStepNavigation() {
    // Next buttons
    document.querySelectorAll('.btn-next').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const nextStep = parseInt(this.getAttribute('data-next'));
            goToNextStep(nextStep);
        });
    });

    // Previous buttons
    document.querySelectorAll('.btn-prev').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const prevStep = parseInt(this.getAttribute('data-prev'));
            goToPrevStep(prevStep);
        });
    });

    // Form submission
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmit();
    });
}

function goToNextStep(nextStep) {
    if (validateCurrentStep()) {
        currentStep = nextStep;
        showStep(currentStep);
        updateProgressBar();
        
        // Scroll to top of form when changing steps
        window.scrollTo({
            top: document.querySelector('.container').offsetTop - 100,
            behavior: 'smooth'
        });
    }
}

function goToPrevStep(prevStep) {
    currentStep = prevStep;
    showStep(currentStep);
    updateProgressBar();
    
    // Scroll to top of form when changing steps
    window.scrollTo({
        top: document.querySelector('.container').offsetTop - 100,
        behavior: 'smooth'
    });
}

function validateCurrentStep() {
    let isValid = true;
    const t = translations[currentLanguage];
    
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
    });

    switch(currentStep) {
        case 1:
            // Validate personal information
            const requiredFields = [
                'firstName', 'lastName', 'cin', 'massar', 
                'email', 'phone', 'major', 'year'
            ];
            
            requiredFields.forEach(field => {
                const element = document.getElementById(field);
                if (!element || !element.value.trim()) {
                    const errorElement = document.getElementById(field + 'Error');
                    if (errorElement) {
                        errorElement.textContent = t.requiredField;
                    }
                    isValid = false;
                    
                    // Add visual error state
                    element.style.borderColor = '#EF4444';
                    element.addEventListener('input', function() {
                        this.style.borderColor = '';
                    }, { once: true });
                }
            });
            break;

        case 2:
            // Validate interests
            const selectedInterests = document.querySelectorAll('input[name="interests"]:checked');
            if (selectedInterests.length === 0) {
                document.getElementById('activitiesError').textContent = t.selectActivity;
                isValid = false;
            }

            // Validate sport if sport interest is selected
            const sportInterest = document.querySelector('input[value="sport"]:checked');
            if (sportInterest) {
                const selectedSport = document.querySelector('input[name="sport"]:checked');
                if (!selectedSport) {
                    document.getElementById('sportError').textContent = t.selectSport;
                    isValid = false;
                }
            }

            // Validate interest text
            const interestText = document.getElementById('interest');
            if (!interestText || !interestText.value.trim()) {
                document.getElementById('interestError').textContent = t.interestRequired;
                isValid = false;
                
                interestText.style.borderColor = '#EF4444';
                interestText.addEventListener('input', function() {
                    this.style.borderColor = '';
                }, { once: true });
            }
            break;

        case 3:
            // Validate availability
            const selectedAvailability = document.querySelectorAll('input[name="availability"]:checked');
            if (selectedAvailability.length === 0) {
                document.getElementById('availabilityError').textContent = t.availabilityRequired;
                isValid = false;
            }

            // Validate agreement
            const agreement = document.getElementById('agree');
            if (!agreement || !agreement.checked) {
                document.getElementById('agreeError').textContent = t.agreementRequired;
                isValid = false;
            }
            break;
    }

    return isValid;
}

function showStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
    });
    
    // Show current step
    const currentStepElement = document.getElementById('step' + stepNumber);
    if (currentStepElement) {
        currentStepElement.classList.add('active');
    }
}

function updateProgressBar() {
    const progress = (currentStep / totalSteps) * 100;
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        progressFill.style.width = progress + '%';
    }
    
    // Update step indicators
    document.querySelectorAll('.progress-step').forEach((step, index) => {
        const stepNumber = index + 1;
        if (stepNumber <= currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

function setupInteractiveElements() {
    // Interest cards
    document.querySelectorAll('.interest-card').forEach(card => {
        card.addEventListener('click', function() {
            const checkbox = this.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
            
            if (checkbox.checked) {
                this.classList.add('selected');
            } else {
                this.classList.remove('selected');
            }

            // Show/hide sport options
            if (checkbox.value === 'sport') {
                const sportOptions = document.getElementById('sportOptions');
                if (sportOptions) {
                    sportOptions.style.display = checkbox.checked ? 'block' : 'none';
                    
                    // Clear sport selection when hiding
                    if (!checkbox.checked) {
                        document.querySelectorAll('input[name="sport"]').forEach(radio => {
                            radio.checked = false;
                        });
                        document.querySelectorAll('.sport-btn').forEach(btn => {
                            btn.classList.remove('selected');
                        });
                    }
                }
            }
        });
    });

    // Sport buttons
    document.querySelectorAll('.sport-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const radio = this.querySelector('input[type="radio"]');
            radio.checked = true;
            
            // Update visual state
            document.querySelectorAll('.sport-btn').forEach(b => {
                b.classList.remove('selected');
            });
            this.classList.add('selected');
        });
    });

    // Availability cards
    document.querySelectorAll('.availability-card').forEach(card => {
        card.addEventListener('click', function() {
            const checkbox = this.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
            
            if (checkbox.checked) {
                this.classList.add('selected');
            } else {
                this.classList.remove('selected');
            }
        });
    });

    // Preference cards
    document.querySelectorAll('.preference-card').forEach(card => {
        card.addEventListener('click', function() {
            const checkbox = this.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
            
            if (checkbox.checked) {
                this.classList.add('selected');
            } else {
                this.classList.remove('selected');
            }
        });
    });

    // Agreement card
    const agreementCard = document.querySelector('.agreement-card');
    if (agreementCard) {
        agreementCard.addEventListener('click', function() {
            const checkbox = document.getElementById('agree');
            if (checkbox) {
                checkbox.checked = !checkbox.checked;
                
                if (checkbox.checked) {
                    this.classList.add('selected');
                } else {
                    this.classList.remove('selected');
                }
            }
        });
    }

    // Success modal close
    const closeSuccess = document.getElementById('closeSuccess');
    if (closeSuccess) {
        closeSuccess.addEventListener('click', closeSuccessModal);
    }
}

function setupLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
}

function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Hide all language content
    document.querySelectorAll('.translation-content').forEach(content => {
        content.style.display = 'none';
    });
    
    // Show selected language content
    const selectedContent = document.querySelector(`.translation-content[data-lang="${lang}"]`);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
    
    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update progress bar labels
    updateProgressLabels();
    
    // Update button texts
    updateButtonTexts();
}

function updateProgressLabels() {
    const t = translations[currentLanguage];
    document.querySelectorAll('.step-label').forEach((label, index) => {
        const stepKey = `step${index + 1}`;
        if (t[stepKey]) {
            label.textContent = t[stepKey];
        }
    });
}

function updateButtonTexts() {
    const t = translations[currentLanguage];
    
    // Update next buttons
    document.querySelectorAll('.btn-next span').forEach(span => {
        span.textContent = t.next;
    });
    
    // Update previous buttons  
    document.querySelectorAll('.btn-prev span').forEach(span => {
        span.textContent = t.previous;
    });
    
    // Update submit button
    const submitBtn = document.querySelector('.btn-submit span');
    if (submitBtn) {
        submitBtn.textContent = t.submit;
    }
    
    // Update success modal
    const successBtn = document.querySelector('.btn-success span');
    if (successBtn) {
        successBtn.textContent = t.excellent;
    }
}

async function handleFormSubmit() {
    if (validateCurrentStep()) {
        const submitBtn = document.querySelector('.btn-submit');
        const originalHTML = submitBtn.innerHTML;
        const t = translations[currentLanguage];
        
        // Show loading state
        submitBtn.innerHTML = `<span>${t.next}...</span><i class="fas fa-spinner fa-spin"></i>`;
        submitBtn.disabled = true;

        try {
            // Collect form data
            const formData = new FormData(document.getElementById('registrationForm'));
            
            // Send to Formspree
            const response = await fetch('https://formspree.io/f/xwpwdpze', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showSuccessModal();
                document.getElementById('registrationForm').reset();
                resetFormState();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            showErrorModal();
        } finally {
            // Restore button state
            submitBtn.innerHTML = originalHTML;
            submitBtn.disabled = false;
        }
    }
}

function resetFormState() {
    // Reset to first step
    currentStep = 1;
    showStep(1);
    updateProgressBar();
    
    // Reset all visual states
    document.querySelectorAll('.interest-card, .sport-btn, .availability-card, .preference-card, .agreement-card').forEach(element => {
        element.classList.remove('selected');
    });
    
    const sportOptions = document.getElementById('sportOptions');
    if (sportOptions) {
        sportOptions.style.display = 'none';
    }
}

function showSuccessModal() {
    const modal = document.getElementById('successModal');
    const title = document.getElementById('successTitle');
    const message = document.getElementById('successMessage');
    const t = translations[currentLanguage];
    
    if (title) title.textContent = t.successTitle;
    if (message) message.textContent = t.successMessage;
    
    if (modal) {
        modal.style.display = 'flex';
    }
}

function showErrorModal() {
    const modal = document.getElementById('successModal');
    const title = document.getElementById('successTitle');
    const message = document.getElementById('successMessage');
    const t = translations[currentLanguage];
    
    if (title) title.textContent = 'خطأ في الإرسال';
    if (message) message.textContent = 'حدث خطأ أثناء إرسال البيانات. يرجى المحاولة مرة أخرى.';
    
    if (modal) modal.style.display = 'flex';
}

function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Add CSS for spinner animation
const style = document.createElement('style');
style.textContent = `
    .fa-spinner {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);
