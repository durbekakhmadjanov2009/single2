// Tarjimalar obyekti
const translations = {
    uz: {
        title: "CV tayyorlash – bir necha soniyada!",
        subtitle: "Hech qanday dizayn kerak emas – shunchaki to‘ldiring!",
        enterDetails: "Ma'lumotlarni Kiriting",
        successMessage: "CV muvaffaqiyatli yaratildi!",
        errorMessage: "Iltimos, barcha majburiy maydonlarni to'ldiring!",
        fullName: "To'liq Ism *",
        jobTitle: "Lavozim *",
        summary: "Qisqacha ma'lumot",
        photo: "Profil rasmi (ixtiyoriy)",
        next: "Keyingi",
        back: "Orqaga",
        position: "Avval ishlagan lavozimingiz *",
        company: "Korxona *",
        date: "Sana *",
        description: "Tavsif",
        add: "Qo'shish",
        degree: "Ta'lim darajasi *",
        institution: "O'quv muassasasi *",
        descriptionOptional: "Tavsif (ixtiyoriy)",
        professionalSkills: "Professional ko'nikmalar *",
        languages: "Biladigan tillar",
        beginner: "Boshlang'ich",
        intermediate: "O'rta",
        advanced: "Yuqori",
        expert: "Expert",
        native: "Ona tili",
        email: "Elektron pochta *",
        phone: "Telefon raqam *",
        address: "Manzil",
        templates: "Preset Dizaynlar",
        professional: "Professional",
        modern: "Modern",
        classic: "Classic",
        creative: "Creative",
        minimalist: "Minimalist",
        textSettings: "Matn Sozlamalari",
        fontType: "Shrift Turi",
        fontSize: "Shrift O'lchami (px)",
        fontColor: "Matn Rangi",
        backgroundSettings: "Fon Sozlamalari",
        backgroundColor: "Umumiy Fon",
        headerBackground: "Header Foni",
        preview: "Ko'rish",
        cvPreview: "CV Ko'rinishi",
        downloadPdf: "PDF Yuklab Olish",
        downloadJpg: "JPG Yuklab Olish",
        downloadPng: "PNG Yuklab Olish",
        experience: "Tajriba",
        education: "Ta'lim",
        contact: "Aloqa",
        errorModal: "Modal oynani ochishda xato yuz berdi!",
        errorLibrary: "PDF yoki rasm yaratish uchun kutubxonalar yuklanmadi!",
        errorStorage: "Ma'lumotlarni saqlashda xato yuz berdi!"
    },
    en: {
        title: "Create a CV – in seconds!",
        subtitle: "No design skills needed – just fill in!",
        enterDetails: "Enter Your Details",
        successMessage: "CV successfully created!",
        errorMessage: "Please fill in all required fields!",
        fullName: "Full Name *",
        jobTitle: "Job Title *",
        summary: "Summary",
        photo: "Profile Photo (optional)",
        next: "Next",
        back: "Back",
        position: "Position *",
        company: "Company *",
        date: "Date *",
        description: "Description",
        add: "Add",
        degree: "Degree *",
        institution: "Institution *",
        descriptionOptional: "Description (optional)",
        professionalSkills: "Professional Skills *",
        languages: "Languages",
        beginner: "Beginner",
        intermediate: "Intermediate",
        advanced: "Advanced",
        expert: "Expert",
        native: "Native",
        email: "Email *",
        phone: "Phone Number *",
        address: "Address",
        templates: "Preset Templates",
        professional: "Professional",
        modern: "Modern",
        classic: "Classic",
        creative: "Creative",
        minimalist: "Minimalist",
        textSettings: "Text Settings",
        fontType: "Font Type",
        fontSize: "Font Size (px)",
        fontColor: "Text Color",
        backgroundSettings: "Background Settings",
        backgroundColor: "General Background",
        headerBackground: "Header Background",
        preview: "Preview",
        cvPreview: "CV Preview",
        downloadPdf: "Download PDF",
        downloadJpg: "Download JPG",
        downloadPng: "Download PNG",
        experience: "Experience",
        education: "Education",
        contact: "Contact",
        errorModal: "Error opening modal window!",
        errorLibrary: "Libraries for PDF or image creation not loaded!",
        errorStorage: "Error saving data!"
    },
    ru: {
        title: "Создайте резюме – за секунды!",
        subtitle: "Дизайнерские навыки не требуются – просто заполните!",
        enterDetails: "Введите ваши данные",
        successMessage: "Резюме успешно создано!",
        errorMessage: "Пожалуйста, заполните все обязательные поля!",
        fullName: "Полное имя *",
        jobTitle: "Должность *",
        summary: "Краткая информация",
        photo: "Фото профиля (необязательно)",
        next: "Далее",
        back: "Назад",
        position: "Должность *",
        company: "Компания *",
        date: "Дата *",
        description: "Описание",
        add: "Добавить",
        degree: "Степень *",
        institution: "Учебное заведение *",
        descriptionOptional: "Описание (необязательно)",
        professionalSkills: "Профессиональные навыки *",
        languages: "Языки",
        beginner: "Начальный",
        intermediate: "Средний",
        advanced: "Продвинутый",
        expert: "Эксперт",
        native: "Родной",
        email: "Электронная почта *",
        phone: "Номер телефона *",
        address: "Адрес",
        templates: "Предустановленные шаблоны",
        professional: "Профессиональный",
        modern: "Современный",
        classic: "Классический",
        creative: "Креативный",
        minimalist: "Минималистичный",
        textSettings: "Настройки текста",
        fontType: "Тип шрифта",
        fontSize: "Размер шрифта (px)",
        fontColor: "Цвет текста",
        backgroundSettings: "Настройки фона",
        backgroundColor: "Общий фон",
        headerBackground: "Фон заголовка",
        preview: "Предпросмотр",
        cvPreview: "Предпросмотр резюме",
        downloadPdf: "Скачать PDF",
        downloadJpg: "Скачать JPG",
        downloadPng: "Скачать PNG",
        experience: "Опыт",
        education: "Образование",
        contact: "Контакты",
        errorModal: "Ошибка при открытии модального окна!",
        errorLibrary: "Библиотеки для создания PDF или изображения не загружены!",
        errorStorage: "Ошибка при сохранении данных!"
    }
};

// Global o‘zgaruvchilar
let sectionOrder = ['summary', 'experience', 'education', 'skills', 'languages', 'contact'];
let customization = {
    fontFamily: 'Inter',
    fontSize: 12,
    fontColor: '#000000',
    bgColor: '#ffffff',
    headerBgColor: '#2563eb',
    template: 'professional'
};
let expCounter = 1;
let eduCounter = 1;
let skillCounter = 1;
let langCounter = 1;
let isDarkMode = false;
let currentLanguage = 'uz';

// Debounce funksiyasi
const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

// Ma'lumotlarni saqlash
const saveFormData = () => {
    try {
        const formData = {
            fullName: document.getElementById('fullName')?.value || '',
            jobTitle: document.getElementById('jobTitle')?.value || '',
            summary: document.getElementById('summary')?.value || '',
            photo: document.getElementById('cv-photo-preview')?.src || '',
            email: document.getElementById('contact-email')?.value || '',
            phone: document.getElementById('contact-phone')?.value || '',
            address: document.getElementById('contact-address')?.value || '',
            experiences: Array.from(document.querySelectorAll('.experience-item')).map(item => ({
                id: item.dataset.id,
                position: item.querySelector('.exp-position')?.value || '',
                company: item.querySelector('.exp-company')?.value || '',
                date: item.querySelector('.exp-date')?.value || '',
                description: item.querySelector('.exp-description')?.value || ''
            })),
            educations: Array.from(document.querySelectorAll('.education-item')).map(item => ({
                id: item.dataset.id,
                degree: item.querySelector('.edu-degree')?.value || '',
                institution: item.querySelector('.edu-institution')?.value || '',
                date: item.querySelector('.edu-date')?.value || '',
                description: item.querySelector('.edu-description')?.value || ''
            })),
            skills: Array.from(document.querySelectorAll('.skill-item')).map(item => ({
                id: item.dataset.id,
                name: item.querySelector('.skill-name')?.value || '',
                level: item.querySelector('.skill-level')?.value || 'beginner'
            })),
            languages: Array.from(document.querySelectorAll('.language-item')).map(item => ({
                id: item.dataset.id,
                name: item.querySelector('.lang-name')?.value || '',
                level: item.querySelector('.lang-level')?.value || 'beginner'
            })),
            sectionOrder,
            customization,
            isDarkMode,
            currentLanguage
        };
        localStorage.setItem('cvFormData', JSON.stringify(formData));
    } catch (error) {
        console.error('LocalStorage xatosi:', error);
        alert(translations[currentLanguage].errorStorage);
    }
};

// Ma'lumotlarni yuklash
const loadFormData = () => {
    try {
        const formData = JSON.parse(localStorage.getItem('cvFormData'));
        if (!formData) {
            applyPreset('professional');
            saveFormData();
            updatePreview();
            return;
        }

        document.getElementById('fullName').value = formData.fullName;
        document.getElementById('jobTitle').value = formData.jobTitle;
        document.getElementById('summary').value = formData.summary;
        if (formData.photo) {
            document.getElementById('cv-photo-preview').src = formData.photo;
            document.getElementById('cv-photo-preview').style.display = 'block';
        }
        document.getElementById('contact-email').value = formData.email;
        document.getElementById('contact-phone').value = formData.phone;
        document.getElementById('contact-address').value = formData.address;

        const experienceFields = document.getElementById('experience-fields');
        experienceFields.innerHTML = '';
        formData.experiences.forEach(exp => {
            const newExperience = document.createElement('div');
            newExperience.className = 'experience-item mb-4';
            newExperience.dataset.id = exp.id;
            newExperience.innerHTML = `
                <div class="mb-3"><label class="form-label" data-i18n="position">${translations[currentLanguage].position}</label><input type="text" class="exp-position form-control" value="${exp.position}" placeholder="Masalan: Dasturchi" required></div>
                <div class="mb-3"><label class="form-label" data-i18n="company">${translations[currentLanguage].company}</label><input type="text" class="exp-company form-control" value="${exp.company}" placeholder="Korxona nomi" required></div>
                <div class="mb-3"><label class="form-label" data-i18n="date">${translations[currentLanguage].date}</label><input type="text" class="exp-date form-control" value="${exp.date}" placeholder="Masalan: 2020 - 2023" required></div>
                <div class="mb-3"><label class="form-label" data-i18n="description">${translations[currentLanguage].description}</label><textarea class="exp-description form-control" placeholder="Ish tajribangiz haqida...">${exp.description}</textarea></div>
                <button class="btn btn-danger btn-sm remove-experience"><i class="fas fa-times"></i></button>
            `;
            experienceFields.appendChild(newExperience);
            expCounter = Math.max(expCounter, parseInt(exp.id.split('-')[1]) + 1);
        });

        const educationFields = document.getElementById('education-fields');
        educationFields.innerHTML = '';
        formData.educations.forEach(edu => {
            const newEducation = document.createElement('div');
            newEducation.className = 'education-item mb-4';
            newEducation.dataset.id = edu.id;
            newEducation.innerHTML = `
                <div class="mb-3"><label class="form-label" data-i18n="degree">${translations[currentLanguage].degree}</label><input type="text" class="edu-degree form-control" value="${edu.degree}" placeholder="Masalan: Bakalavr" required></div>
                <div class="mb-3"><label class="form-label" data-i18n="institution">${translations[currentLanguage].institution}</label><input type="text" class="edu-institution form-control" value="${edu.institution}" placeholder="Universitet nomi" required></div>
                <div class="mb-3"><label class="form-label" data-i18n="date">${translations[currentLanguage].date}</label><input type="text" class="edu-date form-control" value="${edu.date}" placeholder="Masalan: 2016 - 2020" required></div>
                <div class="mb-3"><label class="form-label" data-i18n="descriptionOptional">${translations[currentLanguage].descriptionOptional}</label><textarea class="edu-description form-control" placeholder="Qo'shimcha ma'lumotlar...">${edu.description}</textarea></div>
                <button class="btn btn-danger btn-sm remove-education"><i class="fas fa-times"></i></button>
            `;
            educationFields.appendChild(newEducation);
            eduCounter = Math.max(eduCounter, parseInt(edu.id.split('-')[1]) + 1);
        });

        const skillFields = document.getElementById('skill-fields');
        skillFields.innerHTML = '';
        formData.skills.forEach(skill => {
            const newSkill = document.createElement('div');
            newSkill.className = 'skill-item flex gap-3 mb-3 items-center';
            newSkill.dataset.id = skill.id;
            newSkill.innerHTML = `
                <input type="text" class="skill-name form-control flex-1" value="${skill.name}" placeholder="Ko'nikma nomi" required>
                <select class="skill-level form-select w-1/3">
                    <option value="beginner" ${skill.level === 'beginner' ? 'selected' : ''} data-i18n="beginner">${translations[currentLanguage].beginner}</option>
                    <option value="intermediate" ${skill.level === 'intermediate' ? 'selected' : ''} data-i18n="intermediate">${translations[currentLanguage].intermediate}</option>
                    <option value="advanced" ${skill.level === 'advanced' ? 'selected' : ''} data-i18n="advanced">${translations[currentLanguage].advanced}</option>
                    <option value="expert" ${skill.level === 'expert' ? 'selected' : ''} data-i18n="expert">${translations[currentLanguage].expert}</option>
                </select>
                <button class="btn btn-danger btn-sm remove-skill"><i class="fas fa-times"></i></button>
            `;
            skillFields.appendChild(newSkill);
            skillCounter = Math.max(skillCounter, parseInt(skill.id.split('-')[1]) + 1);
        });

        const languageFields = document.getElementById('language-fields');
        languageFields.innerHTML = '';
        formData.languages.forEach(lang => {
            const newLanguage = document.createElement('div');
            newLanguage.className = 'language-item flex gap-3 mb-3 items-center';
            newLanguage.dataset.id = lang.id;
            newLanguage.innerHTML = `
                <input type="text" class="lang-name form-control flex-1" value="${lang.name}" placeholder="Til nomi">
                <select class="lang-level form-select w-1/3">
                    <option value="beginner" ${lang.level === 'beginner' ? 'selected' : ''} data-i18n="beginner">${translations[currentLanguage].beginner}</option>
                    <option value="intermediate" ${lang.level === 'intermediate' ? 'selected' : ''} data-i18n="intermediate">${translations[currentLanguage].intermediate}</option>
                    <option value="advanced" ${lang.level === 'advanced' ? 'selected' : ''} data-i18n="advanced">${translations[currentLanguage].advanced}</option>
                    <option value="native" ${lang.level === 'native' ? 'selected' : ''} data-i18n="native">${translations[currentLanguage].native}</option>
                </select>
                <button class="btn btn-danger btn-sm remove-language"><i class="fas fa-times"></i></button>
            `;
            languageFields.appendChild(newLanguage);
            langCounter = Math.max(langCounter, parseInt(lang.id.split('-')[1]) + 1);
        });

        sectionOrder = formData.sectionOrder || sectionOrder;
        customization = formData.customization || customization;
        isDarkMode = formData.isDarkMode || false;
        currentLanguage = formData.currentLanguage || 'uz';

        document.getElementById('languageSelect').value = currentLanguage;
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.getElementById('toggleDarkMode').innerHTML = '<i class="fas fa-sun"></i>';
        }

        document.getElementById('font-family').value = customization.fontFamily;
        document.getElementById('font-size').value = customization.fontSize;
        document.getElementById('font-color').value = customization.fontColor;
        document.getElementById('bg-color').value = customization.bgColor;
        document.getElementById('header-bg-color').value = customization.headerBgColor;

        applyCustomizations();
        updateSectionOrder();
        updatePreview();
        updateLanguage();
    } catch (error) {
        console.error('Ma\'lumotlarni yuklashda xato:', error);
        applyPreset('professional');
        saveFormData();
        updatePreview();
    }
};

// Tilni yangilash
const updateLanguage = () => {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[currentLanguage][key] || element.textContent || '';
    });
    document.querySelectorAll('select option[data-i18n]').forEach(option => {
        const key = option.getAttribute('data-i18n');
        option.textContent = translations[currentLanguage][key] || option.textContent || '';
    });
    document.documentElement.lang = currentLanguage;
    saveFormData();
    updatePreview();
};

// CV ko‘rinishini yangilash
const updatePreview = () => {
    const fullName = document.getElementById('fullName')?.value.trim() || translations[currentLanguage].fullName.replace(' *', '');
    const jobTitle = document.getElementById('jobTitle')?.value.trim() || translations[currentLanguage].jobTitle.replace(' *', '');
    const summary = document.getElementById('summary')?.value.trim() || translations[currentLanguage].summary;
    const email = document.getElementById('contact-email')?.value.trim() || 'email@example.com';
    const phone = document.getElementById('contact-phone')?.value.trim() || '+998901234567';
    const address = document.getElementById('contact-address')?.value.trim() || translations[currentLanguage].address;

    document.querySelector('.cv-name').textContent = fullName;
    document.querySelector('.cv-title').textContent = jobTitle;
    document.getElementById('cv-summary').textContent = summary;
    document.getElementById('cv-email').textContent = email;
    document.getElementById('cv-phone').textContent = phone;
    document.getElementById('cv-address').textContent = address;

    const cvPhotoPreview = document.getElementById('cv-photo-preview');
    if (cvPhotoPreview.src && cvPhotoPreview.src !== '') {
        cvPhotoPreview.style.display = 'block';
    }

    const cvExperience = document.getElementById('cv-experience');
    cvExperience.innerHTML = '';
    const experienceItems = document.querySelectorAll('.experience-item');
    if (experienceItems.length === 0) {
        cvExperience.innerHTML = `<p>${translations[currentLanguage].experience} haqida ma'lumot kiritilmagan</p>`;
    } else {
        experienceItems.forEach(item => {
            const position = item.querySelector('.exp-position')?.value.trim() || translations[currentLanguage].position.replace(' *', '');
            const company = item.querySelector('.exp-company')?.value.trim() || translations[currentLanguage].company.replace(' *', '');
            const date = item.querySelector('.exp-date')?.value.trim() || translations[currentLanguage].date.replace(' *', '');
            const description = item.querySelector('.exp-description')?.value.trim() || '';
            if (position || company || date) {
                cvExperience.innerHTML += `
                    <div class="mb-3">
                        <div class="font-semibold">${position}</div>
                        <div class="text-gray-600">${company}</div>
                        <div class="text-blue-600 text-sm">${date}</div>
                        ${description ? `<p class="text-sm">${description}</p>` : ''}
                    </div>
                `;
            }
        });
    }

    const cvEducation = document.getElementById('cv-education');
    cvEducation.innerHTML = '';
    const educationItems = document.querySelectorAll('.education-item');
    if (educationItems.length === 0) {
        cvEducation.innerHTML = `<p>${translations[currentLanguage].education} haqida ma'lumot kiritilmagan</p>`;
    } else {
        educationItems.forEach(item => {
            const degree = item.querySelector('.edu-degree')?.value.trim() || translations[currentLanguage].degree.replace(' *', '');
            const institution = item.querySelector('.edu-institution')?.value.trim() || translations[currentLanguage].institution.replace(' *', '');
            const date = item.querySelector('.edu-date')?.value.trim() || translations[currentLanguage].date.replace(' *', '');
            const description = item.querySelector('.edu-description')?.value.trim() || '';
            if (degree || institution || date) {
                cvEducation.innerHTML += `
                    <div class="mb-3">
                        <div class="font-semibold">${degree}</div>
                        <div class="text-gray-600">${institution}</div>
                        <div class="text-blue-600 text-sm">${date}</div>
                        ${description ? `<p class="text-sm">${description}</p>` : ''}
                    </div>
                `;
            }
        });
    }

    const cvSkills = document.getElementById('cv-skills');
    cvSkills.innerHTML = '';
    const skillItems = document.querySelectorAll('.skill-item');
    if (skillItems.length === 0) {
        cvSkills.innerHTML = `<p>${translations[currentLanguage].professionalSkills} haqida ma'lumot kiritilmagan</p>`;
    } else {
        skillItems.forEach(item => {
            const name = item.querySelector('.skill-name')?.value.trim();
            const level = item.querySelector('.skill-level')?.value || 'beginner';
            if (name) {
                let levelPercent = 0;
                switch (level) {
                    case 'beginner': levelPercent = 25; break;
                    case 'intermediate': levelPercent = 50; break;
                    case 'advanced': levelPercent = 75; break;
                    case 'expert': levelPercent = 100; break;
                }
                cvSkills.innerHTML += `
                    <div class="mb-3">
                        <div class="flex justify-between mb-1">
                            <span>${name}</span>
                            <span>${levelPercent}%</span>
                        </div>
                        <div class="bg-gray-200 rounded-full h-2">
                            <div class="bg-blue-500 h-2 rounded-full" style="width: ${levelPercent}%"></div>
                        </div>
                    </div>
                `;
            }
        });
    }

    const cvLanguages = document.getElementById('cv-languages');
    cvLanguages.innerHTML = '';
    const languageItems = document.querySelectorAll('.language-item');
    if (languageItems.length === 0) {
        cvLanguages.innerHTML = `<p>${translations[currentLanguage].languages} haqida ma'lumot kiritilmagan</p>`;
    } else {
        languageItems.forEach(item => {
            const name = item.querySelector('.lang-name')?.value.trim();
            const level = item.querySelector('.lang-level')?.value;
            if (name) {
                let levelText = translations[currentLanguage][level] || level;
                cvLanguages.innerHTML += `
                    <div class="mb-2">
                        <span class="font-semibold">${name}</span>
                        <span class="text-gray-600"> ${levelText}</span>
                    </div>
                `;
            }
        });
    }
};

// Debounced yangilash
const debouncedUpdatePreview = debounce(updatePreview, 300);

// CV dizaynini sozlash
const applyCustomizations = () => {
    const cvPreview = document.getElementById('cv-preview');
    cvPreview.className = `cv-template mx-auto ${customization.template}`;
    cvPreview.style.backgroundColor = customization.bgColor;
    cvPreview.style.fontFamily = customization.fontFamily;
    cvPreview.style.fontSize = `${customization.fontSize}px`;
    cvPreview.style.color = customization.fontColor;

    const header = document.querySelector('.cv-header');
    header.style.background = customization.headerBgColor;
    header.classList.remove('bg-blue-600', 'bg-gray-800', 'bg-gradient-to-r', 'from-purple-500', 'to-pink-600', 'bg-blue-900');

    const body = document.querySelector('.cv-body');
    body.style.backgroundColor = customization.bgColor;

    const sectionTitles = document.querySelectorAll('.cv-section-title');
    sectionTitles.forEach(title => {
        title.style.color = customization.headerBgColor;
        title.style.borderBottomColor = customization.headerBgColor;
    });
};

// Preset dizaynlar
const applyPreset = (preset) => {
    if (preset === 'professional') {
        customization = { fontFamily: 'Inter', fontSize: 12, fontColor: '#000000', bgColor: '#ffffff', headerBgColor: '#2563eb', template: 'professional' };
    } else if (preset === 'modern') {
        customization = { fontFamily: 'Roboto', fontSize: 11, fontColor: '#1f2937', bgColor: '#f1f5f9', headerBgColor: '#3b82f6', template: 'modern' };
    } else if (preset === 'classic') {
        customization = { fontFamily: 'Times New Roman', fontSize: 12, fontColor: '#000000', bgColor: '#ffffff', headerBgColor: '#1e3a8a', template: 'classic' };
    } else if (preset === 'creative') {
        customization = { fontFamily: 'Arial', fontSize: 12, fontColor: '#1f2937', bgColor: '#fefcbf', headerBgColor: '#ec4899', template: 'creative' };
    } else if (preset === 'minimalist') {
        customization = { fontFamily: 'Inter', fontSize: 11, fontColor: '#333333', bgColor: '#f9fafb', headerBgColor: '#6b7280', template: 'minimalist' };
    }

    document.getElementById('font-family').value = customization.fontFamily;
    document.getElementById('font-size').value = customization.fontSize;
    document.getElementById('font-color').value = customization.fontColor;
    document.getElementById('bg-color').value = customization.bgColor;
    document.getElementById('header-bg-color').value = customization.headerBgColor;

    applyCustomizations();
    saveFormData();
    updatePreview();
};

// Bo‘limlar tartibini yangilash
const updateSectionOrder = () => {
    const cvLeft = document.querySelector('.cv-left');
    const cvRight = document.querySelector('.cv-right');
    if (!cvLeft || !cvRight) return;

    const sectionElements = {};
    sectionOrder.forEach(section => {
        const sectionEl = document.querySelector(`[data-section="${section}"]`);
        if (sectionEl) sectionElements[section] = sectionEl;
    });

    cvLeft.innerHTML = '';
    cvRight.innerHTML = '';

    sectionOrder.forEach(section => {
        const sectionEl = sectionElements[section];
        if (sectionEl) {
            if (['summary', 'experience', 'education'].includes(section) && customization.template !== 'classic') {
                cvLeft.appendChild(sectionEl);
            } else {
                cvRight.appendChild(sectionEl);
            }
        }
    });

    updatePreview();
};

// Faylni yuklab olish
const triggerDownload = (dataUrl, fileName, type) => {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

// CV ni yuklab olish (PDF, JPG, PNG)
const downloadCv = async (format) => {
    if (!validateAllFields()) {
        showErrorAlert();
        return;
    }

    const pdfLoader = document.getElementById('pdfLoader');
    pdfLoader.style.display = 'block';

    const fullName = document.getElementById('fullName')?.value.trim() || 'CV';
    const cvPreview = document.getElementById('cv-preview');
    if (!cvPreview) {
        alert(translations[currentLanguage].errorMessage);
        pdfLoader.style.display = 'none';
        return;
    }

    const fileName = `${fullName.replace(/\s+/g, '_')}_CV`;

    try {
        if (!window.html2canvas || !window.jspdf) {
            throw new Error('html2canvas yoki jsPDF yuklanmagan');
        }

        // A4 o'lchamlariga moslashtirish
        cvPreview.style.width = '595px';
        cvPreview.style.minHeight = '842px';

        const canvas = await window.html2canvas(cvPreview, {
            scale: 2,
            useCORS: true,
            backgroundColor: customization.bgColor
        });
        const imgData = canvas.toDataURL('image/png');

        if (format === 'pdf') {
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            const pdfWidth = 210; // A4 kengligi (mm)
            const pdfHeight = 297; // A4 balandligi (mm)
            const imgProps = pdf.getImageProperties(imgData);
            const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, Math.min(imgHeight, pdfHeight));
            heightLeft -= pdfHeight;

            while (heightLeft > 0) {
                pdf.addPage();
                position = -heightLeft;
                pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
                heightLeft -= pdfHeight;
            }

            pdf.save(`${fileName}.pdf`);
        } else if (format === 'jpg') {
            triggerDownload(canvas.toDataURL('image/jpeg', 0.95), `${fileName}.jpg`, 'image/jpeg');
        } else if (format === 'png') {
            triggerDownload(imgData, `${fileName}.png`, 'image/png');
        }
    } catch (error) {
        console.error('Faylni yuklab olishda xato:', error);
        alert(translations[currentLanguage].errorLibrary);
    } finally {
        pdfLoader.style.display = 'none';
    }
};

// Validatsiya funksiyalari
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone) => /^\+998\d{9}$/.test(phone);
const validateDate = (date) => date.trim().length > 0;

const validateFields = (sectionId) => {
    let isValid = true;
    const section = document.getElementById(sectionId);
    if (!section) return false;
    const inputs = section.querySelectorAll('[required]');
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('border-danger');
            isValid = false;
        } else {
            input.classList.remove('border-danger');
            if (input.id === 'contact-email' && !validateEmail(input.value)) {
                input.classList.add('border-danger');
                isValid = false;
            } else if (input.id === 'contact-phone' && !validatePhone(input.value)) {
                input.classList.add('border-danger');
                isValid = false;
            } else if ((input.classList.contains('exp-date') || input.classList.contains('edu-date')) && !validateDate(input.value)) {
                input.classList.add('border-danger');
                isValid = false;
            }
        }
    });
    return isValid;
};

const validateAllFields = () => {
    return ['basic-section', 'experience-section', 'education-section', 'skills-section'].every(sectionId => validateFields(sectionId));
};

// Xato xabari
const showErrorAlert = () => {
    const errorAlert = document.getElementById('errorAlert');
    errorAlert.classList.remove('d-none');
    setTimeout(() => errorAlert.classList.add('d-none'), 3000);
};

// CV ni ko‘rsatish
const showPreview = () => {
    if (!validateAllFields()) {
        showErrorAlert();
        return;
    }

    updatePreview();
    applyCustomizations();

    const modalElement = document.getElementById('cvPreviewModal');
    try {
        const modal = new window.bootstrap.Modal(modalElement, { backdrop: 'static', keyboard: true });
        modal.show();
    } catch (error) {
        console.error('Modal ochishda xato:', error);
        alert(translations[currentLanguage].errorModal);
    }
};

// Navigatsiya
const navigateToSection = (sectionId) => {
    document.querySelectorAll('.form-section').forEach(section => section.classList.add('d-none'));
    document.getElementById(sectionId).classList.remove('d-none');
};

// Hodisa tinglovchilari
const setupNavigationListeners = () => {
    document.getElementById('nextToExperience').addEventListener('click', () => {
        if (validateFields('basic-section')) navigateToSection('experience-section');
        else showErrorAlert();
    });
    document.getElementById('backToBasic').addEventListener('click', () => navigateToSection('basic-section'));
    document.getElementById('nextToEducation').addEventListener('click', () => {
        if (validateFields('experience-section')) navigateToSection('education-section');
        else showErrorAlert();
    });
    document.getElementById('backToExperience').addEventListener('click', () => navigateToSection('experience-section'));
    document.getElementById('nextToSkills').addEventListener('click', () => {
        if (validateFields('education-section')) navigateToSection('skills-section');
        else showErrorAlert();
    });
    document.getElementById('backToEducation').addEventListener('click', () => navigateToSection('education-section'));
    document.getElementById('nextToCustomize').addEventListener('click', () => {
        if (validateFields('skills-section')) navigateToSection('customize-section');
        else showErrorAlert();
    });
    document.getElementById('backToSkills').addEventListener('click', () => navigateToSection('skills-section'));
    document.getElementById('previewCv').addEventListener('click', showPreview);
};

const setupDynamicFieldListeners = () => {
    document.getElementById('add-experience').addEventListener('click', () => {
        const experienceFields = document.getElementById('experience-fields');
        const newExperience = document.createElement('div');
        newExperience.className = 'experience-item mb-4';
        newExperience.dataset.id = `exp-${expCounter++}`;
        newExperience.innerHTML = `
            <div class="mb-3"><label class="form-label" data-i18n="position">${translations[currentLanguage].position}</label><input type="text" class="exp-position form-control" placeholder="Masalan: Dasturchi" required></div>
            <div class="mb-3"><label class="form-label" data-i18n="company">${translations[currentLanguage].company}</label><input type="text" class="exp-company form-control" placeholder="Korxona nomi" required></div>
            <div class="mb-3"><label class="form-label" data-i18n="date">${translations[currentLanguage].date}</label><input type="text" class="exp-date form-control" placeholder="Masalan: 2020 - 2023" required></div>
            <div class="mb-3"><label class="form-label" data-i18n="description">${translations[currentLanguage].description}</label><textarea class="exp-description form-control" placeholder="Ish tajribangiz haqida..."></textarea></div>
            <button class="btn btn-danger btn-sm remove-experience"><i class="fas fa-times"></i></button>
        `;
        experienceFields.appendChild(newExperience);
        newExperience.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', saveFormData);
            input.addEventListener('input', debouncedUpdatePreview);
        });
        updateLanguage();
    });

    document.getElementById('add-education').addEventListener('click', () => {
        const educationFields = document.getElementById('education-fields');
        const newEducation = document.createElement('div');
        newEducation.className = 'education-item mb-4';
        newEducation.dataset.id = `edu-${eduCounter++}`;
        newEducation.innerHTML = `
            <div class="mb-3"><label class="form-label" data-i18n="degree">${translations[currentLanguage].degree}</label><input type="text" class="edu-degree form-control" placeholder="Masalan: Bakalavr" required></div>
            <div class="mb-3"><label class="form-label" data-i18n="institution">${translations[currentLanguage].institution}</label><input type="text" class="edu-institution form-control" placeholder="Universitet nomi" required></div>
            <div class="mb-3"><label class="form-label" data-i18n="date">${translations[currentLanguage].date}</label><input type="text" class="edu-date form-control" placeholder="Masalan: 2016 - 2020" required></div>
            <div class="mb-3"><label class="form-label" data-i18n="descriptionOptional">${translations[currentLanguage].descriptionOptional}</label><textarea class="edu-description form-control" placeholder="Qo'shimcha ma'lumotlar..."></textarea></div>
            <button class="btn btn-danger btn-sm remove-education"><i class="fas fa-times"></i></button>
        `;
        educationFields.appendChild(newEducation);
        newEducation.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', saveFormData);
            input.addEventListener('input', debouncedUpdatePreview);
        });
        updateLanguage();
    });

    document.getElementById('add-skill').addEventListener('click', () => {
        const skillFields = document.getElementById('skill-fields');
        const newSkill = document.createElement('div');
        newSkill.className = 'skill-item flex gap-3 mb-3 items-center';
        newSkill.dataset.id = `skill-${skillCounter++}`;
        newSkill.innerHTML = `
            <input type="text" class="skill-name form-control flex-1" placeholder="Ko'nikma nomi" required>
            <select class="skill-level form-select w-1/3">
                <option value="beginner" data-i18n="beginner">${translations[currentLanguage].beginner}</option>
                <option value="intermediate" data-i18n="intermediate">${translations[currentLanguage].intermediate}</option>
                <option value="advanced" data-i18n="advanced">${translations[currentLanguage].advanced}</option>
                <option value="expert" data-i18n="expert">${translations[currentLanguage].expert}</option>
            </select>
            <button class="btn btn-danger btn-sm remove-skill"><i class="fas fa-times"></i></button>
        `;
        skillFields.appendChild(newSkill);
        newSkill.querySelectorAll('input, select').forEach(input => {
            input.addEventListener('input', saveFormData);
            input.addEventListener('input', debouncedUpdatePreview);
        });
        updateLanguage();
    });

    document.getElementById('add-language').addEventListener('click', () => {
        const languageFields = document.getElementById('language-fields');
        const newLanguage = document.createElement('div');
        newLanguage.className = 'language-item flex gap-3 mb-3 items-center';
        newLanguage.dataset.id = `lang-${langCounter++}`;
        newLanguage.innerHTML = `
            <input type="text" class="lang-name form-control flex-1" placeholder="Til nomi">
            <select class="lang-level form-select w-1/3">
                <option value="beginner" data-i18n="beginner">${translations[currentLanguage].beginner}</option>
                <option value="intermediate" data-i18n="intermediate">${translations[currentLanguage].intermediate}</option>
                <option value="advanced" data-i18n="advanced">${translations[currentLanguage].advanced}</option>
                <option value="native" data-i18n="native">${translations[currentLanguage].native}</option>
            </select>
            <button class="btn btn-danger btn-sm remove-language"><i class="fas fa-times"></i></button>
        `;
        languageFields.appendChild(newLanguage);
        newLanguage.querySelectorAll('input, select').forEach(input => {
            input.addEventListener('input', saveFormData);
            input.addEventListener('input', debouncedUpdatePreview);
        });
        updateLanguage();
    });

    // Dinamik o'chirish tugmalari
    document.addEventListener('click', (e) => {
        if (e.target.closest('.remove-experience')) {
            e.target.closest('.experience-item').remove();
            saveFormData();
            updatePreview();
        } else if (e.target.closest('.remove-education')) {
            e.target.closest('.education-item').remove();
            saveFormData();
            updatePreview();
        } else if (e.target.closest('.remove-skill')) {
            e.target.closest('.skill-item').remove();
            saveFormData();
            updatePreview();
        } else if (e.target.closest('.remove-language')) {
            e.target.closest('.language-item').remove();
            saveFormData();
            updatePreview();
        }
    });
};

// Hodisa tinglovchilari
const setupEventListeners = () => {
    document.getElementById('languageSelect').addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        updateLanguage();
    });

    document.getElementById('toggleDarkMode').addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode', isDarkMode);
        document.getElementById('toggleDarkMode').innerHTML = `<i class="fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}"></i>`;
        saveFormData();
        updatePreview();
    });

    document.getElementById('font-family').addEventListener('change', (e) => {
        customization.fontFamily = e.target.value;
        applyCustomizations();
        saveFormData();
        updatePreview();
    });

    document.getElementById('font-size').addEventListener('input', (e) => {
        customization.fontSize = Math.min(14, Math.max(8, parseInt(e.target.value)));
        applyCustomizations();
        saveFormData();
        updatePreview();
    });

    document.getElementById('font-color').addEventListener('input', (e) => {
        customization.fontColor = e.target.value;
        applyCustomizations();
        saveFormData();
        updatePreview();
    });

    document.getElementById('bg-color').addEventListener('input', (e) => {
        customization.bgColor = e.target.value;
        applyCustomizations();
        saveFormData();
        updatePreview();
    });

    document.getElementById('header-bg-color').addEventListener('input', (e) => {
        customization.headerBgColor = e.target.value;
        applyCustomizations();
        saveFormData();
        updatePreview();
    });

    document.getElementById('photo').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
            const reader = new FileReader();
            reader.onload = (event) => {
                document.getElementById('cv-photo-preview').src = event.target.result;
                document.getElementById('cv-photo-preview').style.display = 'block';
                saveFormData();
                updatePreview();
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('downloadPdfModal').addEventListener('click', () => downloadCv('pdf'));
    document.getElementById('downloadJpgModal').addEventListener('click', () => downloadCv('jpg'));
    document.getElementById('downloadPngModal').addEventListener('click', () => downloadCv('png'));

    document.querySelectorAll('.preset-option').forEach(option => {
        option.addEventListener('click', () => {
            applyPreset(option.dataset.preset);
        });
    });

    // Formadagi barcha input va textarea maydonlari uchun hodisa tinglovchilari
    document.querySelectorAll('input, textarea, select').forEach(input => {
        input.addEventListener('input', saveFormData);
        input.addEventListener('input', debouncedUpdatePreview);
    });

    setupNavigationListeners();
    setupDynamicFieldListeners();
};

// Dastlabki ishga tushirish
document.addEventListener('DOMContentLoaded', () => {
    loadFormData();
    setupEventListeners();
});