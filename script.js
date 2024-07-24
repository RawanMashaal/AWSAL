const translation ={
    en:{
        awsal :  'AWSAL',
        home :   'Home' ,
        about:   'About us',
        farmer:  'Farmers',
        customer: 'Customers',
        bisness: 'Bisnesses',
        contact: 'Contact Us',
        english: 'English',
        arabic : 'Arabic',
        clint : 'Clints',
    },
    
    ar:{
        awsal :  'اوصال',
        home :   'الصفحة الرئسية' ,
        about:   'قصتنا',
        farmer:  'فلاحين',
        customer: 'العملاء',
        bisness: 'رواد الاعمال',
        contact: 'تواصل معنا',
        english: 'الانجليزية',
        arabic : 'العربية',
        clint : 'العملاء',
    }
    };



const setlanguage =(language)=>{
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
     const translationKey = element.getAttribute("data-i18n");
     element.textContent = translation[language][translationKey];
    });

    document.dir = language === "ar" ? "rtl" : "ltr" ;
};

const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
  const selectedLanguage = event.target.value;
  setlanguage(selectedLanguage);
  localStorage.setItem("lang", selectedLanguage);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en";
  languageSelector.value = language;
  setlanguage(language);
});




