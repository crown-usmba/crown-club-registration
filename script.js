// Create animated background particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size and position
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 15;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Form Management
let currentStep = 1;
const totalSteps = 3;

// Initialize the form when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    initializeForm();
    setupEventListeners();
});

function initializeForm() {
    // Show first step
    showStep(currentStep);
    updateProgressBar();
    
    // Set up form validation and navigation
    setupFormNavigation();
    setupInteractiveElements();
}

function setupEventListeners() {
    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });

    // Modal close
    document.getElementById('closeModal').addEventListener('click', closeModal);
}

function setupFormNavigation() {
    // Next buttons
    document.querySelectorAll('.btn-next').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const nextStep = parseInt(this.getAttribute('data-next'));
            navigateToStep(nextStep);
        });
    });

    // Previous buttons
    document.querySelectorAll('.btn-prev').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const prevStep = parseInt(this.getAttribute('data-prev'));
            navigateToStep(prevStep);
        });
    });

    // Form submission
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        submitForm();
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

            // Show/hide sport options based on sport interest
            if (checkbox.value === 'sport') {
                const sportSection = document.getElementById('sportSection');
                sportSection.style.display = checkbox.checked ? 'block' : 'none';
                
                // Clear sport selection when hiding
                if (!checkbox.checked) {
                    document.querySelectorAll('input[name="sport"]').forEach(radio => {
                        radio.checked = false;
                    });
                    document.querySelectorAll('.sport-card').forEach(card => {
                        card.classList.remove('selected');
                    });
                }
            }
        });
    });

    // Sport options
    document.querySelectorAll('.sport-option').forEach(option => {
        option.addEventListener('click', function() {
            const radio = this.querySelector('input[type="radio"]');
            radio.checked = true;
            
            // Update visual state
            document.querySelectorAll('.sport-card').forEach(card => {
                card.classList.remove('selected');
            });
            this.querySelector('.sport-card').classList.add('selected');
        });
    });

    // Availability options
    document.querySelectorAll('.availability-option').forEach(option => {
        option.addEventListener('click', function() {
            const checkbox = this.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
            
            if (checkbox.checked) {
                this.querySelector('.availability-card').classList.add('selected');
            } else {
                this.querySelector('.availability-card').classList.remove('selected');
            }
        });
    });

    // Preference options
    document.querySelectorAll('.preference-option').forEach(option => {
        option.addEventListener('click', function() {
            const checkbox = this.querySelector('input[type="checkbox"]');
            checkbox.checked = !checkbox.checked;
            
            if (checkbox.checked) {
                this.querySelector('.preference-card').classList.add('selected');
            } else {
                this.querySelector('.preference-card').classList.remove('selected');
            }
        });
    });

    // Agreement option
    document.querySelector('.agreement-option').addEventListener('click', function() {
        const checkbox = this.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked;
        
        if (checkbox.checked) {
            this.querySelector('.agreement-card').classList.add('selected');
        } else {
            this.querySelector('.agreement-card').classList.remove('selected');
        }
    });
}

function navigateToStep(step) {
    if (step > currentStep) {
        // Moving forward - validate current step first
        if (!validateCurrentStep()) {
            return;
        }
    }
    
    currentStep = step;
    showStep(currentStep);
    updateProgressBar();
    
    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
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
    document.querySelectorAll('.step').forEach((step, index) => {
        const stepNumber = index + 1;
        if (stepNumber <= currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
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
                document.getElementById('interestsError').textContent = 'يرجى اختيار مجال نشاط واحد على الأقل';
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

async function submitForm() {
    if (!validateCurrentStep()) {
        return;
    }

    const submitBtn = document.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<span>جاري الإرسال...</span><i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;

    try {
        // Collect form data
        const formData = new FormData(document.getElementById('registrationForm'));
        
        // Add additional data
        formData.append('_subject', 'CROWN Club Registration Form');
        formData.append('_language', 'ar');
        
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
            resetForm();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        showErrorModal();
        console.error('Form submission error:', error);
    } finally {
        // Restore button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

function resetForm() {
    // Reset to first step
    currentStep = 1;
    showStep(currentStep);
    updateProgressBar();
    
    // Reset all visual states
    document.querySelectorAll('.interest-card, .sport-card, .availability-card, .preference-card, .agreement-card').forEach(element => {
        element.classList.remove('selected');
    });
    
    // Hide sport section
    document.getElementById('sportSection').style.display = 'none';
    
    // Clear all checkboxes and radios
    document.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(input => {
        input.checked = false;
    });
}

function showSuccessModal() {
    const modal = document.getElementById('successModal');
    const title = document.getElementById('modalTitle');
    const message = document.getElementById('modalMessage');
    
    if (title) title.textContent = 'مرحباً في عائلة CROWN!';
    if (message) message.textContent = 'تم استلام طلبك بنجاح وسنتواصل معك قريباً للترحيب بك رسمياً في النادي';
    
    if (modal) {
        modal.style.display = 'flex';
    }
}

function showErrorModal() {
    const modal = document.getElementById('successModal');
    const title = document.getElementById('modalTitle');
    const message = document.getElementById('modalMessage');
    
    if (title) title.textContent = 'خطأ في الإرسال';
    if (message) message.textContent = 'حدث خطأ أثناء إرسال البيانات. يرجى المحاولة مرة أخرى.';
    
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function switchLanguage(lang) {
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
    
    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Here you would typically update all text content
    // For demonstration, we'll just log the language change
    console.log('Language switched to:', lang);
    
    // In a real implementation, you would have translation objects
    // and update all text content dynamically
}

// Add input validation for real-time feedback
document.addEventListener('input', function(e) {
    if (e.target.matches('input[required], textarea[required], select[required]')) {
        const errorElement = document.getElementById(e.target.id + 'Error');
        if (errorElement && e.target.value.trim()) {
            errorElement.textContent = '';
            e.target.style.borderColor = '';
        }
    }
});
