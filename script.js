const translations = {
  en: {
    navResearch: 'Research',
    navTeaching: 'Teaching',
    navCv: 'CV',
    navContact: 'Contact',
    eyebrow: 'Economics · Trade · Labour markets',
    intro: 'PhD student in Economics at the Munich Graduate School of Economics, LMU Munich.',
    introDetail: 'I study how trade and technology shocks travel through labour markets, using shift-share designs and worker-level administrative data.',
    exploreResearch: 'Explore research',
    getInTouch: 'Get in touch',
    photoNote: 'Profile photo coming soon',
    publicationTag: 'DISCUSSION PAPER',
    reportTag: 'POLICY REPORT',
    readPaper: 'Read paper ↗',
    viewReport: 'View report ↗',
    researchTitle: 'Research',
    researchIntro: 'My work is empirical, in international trade, labour economics and applied econometrics.',
    experienceTitle: 'Research experience',
    projectsTitle: 'Projects',
    projectsText: 'Master thesis and group-project repositories will be linked here once their URLs are added.',
    teachingTitle: 'Teaching',
    teachingText: 'Teaching materials and experience will be added here. My research-assistant work has included updating lecture slides and course materials in international macroeconomics.',
    teachingNote: 'Please check back for courses, tutorials and teaching resources.',
    cvTitle: 'CV & Education',
    currentPosition: 'Current position',
    supervisors: 'Supervisors: Prof. Dr. Monika Schnitzer and Prof. Dr. Carsten Eckel',
    educationTitle: 'Education',
    cvPlaceholder: 'Download CV',
    cvDownload: 'Download CV (PDF)',
    otherExperience: 'Policy & professional experience',
    contactTitle: 'Contact',
    contactText: 'I am glad to hear from researchers, students and policy professionals working on related questions.',
    footerNote: 'Munich, Germany · Last updated October 2026',
    wipTag: 'WORK IN PROGRESS',
    wipAbstract: 'I estimate the effect of Chinese import competition on manufacturing employment across EU-15 regions, using a shift-share instrument in the Borusyak–Hull–Jaravel framework with exposure-robust inference. The aggregate effect is close to zero, but it conceals a sharp divergence between German regions and the rest of the EU-15.',
    wipNote: 'Master\'s thesis, Toulouse School of Economics, 2026. Supervisor: Paul Diegert, PhD.'
  },
  de: {
    navResearch: 'Forschung',
    navTeaching: 'Lehre',
    navCv: 'Lebenslauf',
    navContact: 'Kontakt',
    eyebrow: 'Ökonomie · Handel · Arbeitsmärkte',
    intro: 'Doktorand der Volkswirtschaftslehre an der Munich Graduate School of Economics, LMU München.',
    introDetail: 'Ich untersuche, wie Handels- und Technologieschocks über Arbeitsmärkte wirken, mit Shift-Share-Designs und administrativen Individualdaten.',
    exploreResearch: 'Forschung ansehen',
    getInTouch: 'Kontakt aufnehmen',
    photoNote: 'Profilfoto folgt',
    publicationTag: 'DISKUSSIONSPAPIER',
    reportTag: 'POLITIKBERICHT',
    readPaper: 'Paper lesen ↗',
    viewReport: 'Bericht ansehen ↗',
    researchTitle: 'Forschung',
    researchIntro: 'Meine Arbeit ist empirisch und liegt in internationalem Handel, Arbeitsökonomie und angewandter Ökonometrie.',
    experienceTitle: 'Forschungserfahrung',
    projectsTitle: 'Projekte',
    projectsText: 'Die Repositorien meiner Masterarbeit und Gruppenprojekte werden hier ergänzt, sobald die URLs vorliegen.',
    teachingTitle: 'Lehre',
    teachingText: 'Lehrmaterialien und Lehrerfahrung werden hier ergänzt. Im Rahmen meiner Tätigkeit als wissenschaftlicher Mitarbeiter habe ich Vorlesungsfolien und Kursmaterialien für internationale Makroökonomie aktualisiert.',
    teachingNote: 'Weitere Informationen zu Kursen, Tutorien und Lehrmaterialien folgen.',
    cvTitle: 'Lebenslauf & Ausbildung',
    currentPosition: 'Aktuelle Position',
    supervisors: 'Betreuer: Prof. Dr. Monika Schnitzer und Prof. Dr. Carsten Eckel',
    educationTitle: 'Ausbildung',
    cvPlaceholder: 'Lebenslauf herunterladen',
    cvDownload: 'Lebenslauf herunterladen (PDF)',
    otherExperience: 'Politische & berufliche Erfahrung',
    contactTitle: 'Kontakt',
    contactText: 'Ich freue mich über Nachrichten von Forschenden, Studierenden und Fachleuten aus Politik und Praxis, die zu verwandten Fragen arbeiten.',
    footerNote: 'München, Deutschland · Letzte Aktualisierung Oktober 2026',
    wipTag: 'IN ARBEIT',
    wipAbstract: 'Ich schätze den Effekt chinesischer Importkonkurrenz auf die Beschäftigung im Verarbeitenden Gewerbe in EU-15-Regionen mittels eines Shift-Share-Instruments im Borusyak–Hull–Jaravel-Rahmen mit exposure-robuster Inferenz. Der gesamtwirtschaftliche Effekt ist nahe null, verdeckt aber eine starke Divergenz zwischen deutschen Regionen und dem Rest der EU-15.',
    wipNote: 'Masterarbeit, Toulouse School of Economics, 2026. Betreuer: Paul Diegert, PhD.'
  }
};

let lang = localStorage.getItem('site-language') || 'en';

function renderLanguage() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  document.getElementById('language-toggle').textContent = lang === 'en' ? 'DE' : 'EN';
  document
    .getElementById('language-toggle')
    .setAttribute('aria-label', lang === 'en' ? 'Auf Deutsch wechseln' : 'Switch to English');
}

document.getElementById('language-toggle').addEventListener('click', () => {
  lang = lang === 'en' ? 'de' : 'en';
  localStorage.setItem('site-language', lang);
  renderLanguage();
});

renderLanguage();
