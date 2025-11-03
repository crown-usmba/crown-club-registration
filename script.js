// Form Management
let currentStep = 1;
const totalSteps = 3;

document.addEventListener('DOMContentLoaded', function() {
    initializeForm();
    setupScrollHandling();
    setupLanguageSwitcher();
});

function initializeForm() {
    setupStepNavigation();
    setupInteractiveElements();
    updateProgressBar();
    
    // Hide sport options initially
    document.getElementById('sportOptions').style.display = 'none';
    
    // Show first step
    showStep(currentStep);
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
    const form = document.getElementById('registrationForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit();
        });
    }
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
                        errorElement.textContent = 'هذا الحقل مطلوب';
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
                document.getElementById('activitiesError').textContent = 'يرجى اختيار مجال نشاط واحد على الأقل';
                isValid = false;
            }

            // Validate sport if sport interest is selected
            const sportInterest = document.querySelector('input[value="sport"]:checked');
            if (sportInterest) {
                const selectedSport = document.querySelector('input[name="sport"]:checked');
                if (!selectedSport) {
                    document.getElementById('sportError').textContent = 'يرجى اختيار رياضة واحدة';
                    isValid = false;
                }
            }

            // Validate interest text
            const interestText = document.getElementById('interest');
            if (!interestText || !interestText.value.trim()) {
                document.getElementById('interestError').textContent = 'يرجى إخبارنا بما يثير اهتمامك في نادينا';
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
                document.getElementById('availabilityError').textContent = 'يرجى اختيار مدى توافرك';
                isValid = false;
            }

            // Validate agreement
            const agreement = document.getElementById('agree');
            if (!agreement || !agreement.checked) {
                document.getElementById('agreeError').textContent = 'يجب الموافقة على الشروط والأحكام';
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
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    // Update HTML direction and language
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Here you would typically update all text content based on language
    // For now, we'll just show an alert to demonstrate it's working
    console.log('Language changed to:', lang);
}

async function handleFormSubmit() {
    if (validateCurrentStep()) {
        const submitBtn = document.querySelector('.btn-submit');
        const originalHTML = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<span>جاري الإرسال...</span><i class="fas fa-spinner fa-spin"></i>';
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
    if (modal) {
        modal.style.display = 'flex';
    }
}

function showErrorModal() {
    const modal = document.getElementById('successModal');
    const title = document.getElementById('successTitle');
    const message = document.getElementById('successMessage');
    
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
