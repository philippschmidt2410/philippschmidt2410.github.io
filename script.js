const translations = {
  en: {
    role: "PhD Student in Economics, LMU Munich",
    lead: "I study how trade and technology shocks travel through labour markets, using shift-share designs and worker-level administrative data.",
    bio: "I am a PhD student at the Munich Graduate School of Economics, LMU Munich, supervised by Monika Schnitzer and Carsten Eckel. Before starting my PhD, I completed a double master’s degree at the University of Mannheim and the Toulouse School of Economics and worked as a research assistant at ZEW, GESIS and the University of Mannheim.",
    research: "Research",
    contact: "Contact",
    workInProgress: "Work in Progress",
    discussionPapers: "Discussion Papers",
    policyReports: "Policy Reports",
    thesisMeta: "Master’s thesis, Toulouse School of Economics, 2026. Supervisor: Paul Diegert, PhD.",
    readPaper: "Read paper",
    viewReport: "View report",
    lastUpdated: "Last updated November 2026"
  },
  de: {
    role: "Promotionsstudent in Volkswirtschaftslehre, LMU München",
    lead: "Ich untersuche, wie sich Handels- und Technologieschocks über Arbeitsmärkte verbreiten, mithilfe von Shift-Share-Designs und administrativen Daten auf Arbeitnehmerinnen- und Arbeitnehmerebene.",
    bio: "Ich bin Promotionsstudent an der Munich Graduate School of Economics der LMU München und werde von Monika Schnitzer und Carsten Eckel betreut. Vor meinem Promotionsstudium habe ich einen Doppelmaster an der Universität Mannheim und der Toulouse School of Economics absolviert und als wissenschaftliche Hilfskraft am ZEW, bei GESIS und an der Universität Mannheim gearbeitet.",
    research: "Forschung",
    contact: "Kontakt",
    workInProgress: "In Arbeit",
    discussionPapers: "Diskussionspapiere",
    policyReports: "Politikberichte",
    thesisMeta: "Masterarbeit, Toulouse School of Economics, 2026. Betreuung: Paul Diegert, PhD.",
    readPaper: "Paper lesen",
    viewReport: "Bericht ansehen",
    lastUpdated: "Zuletzt aktualisiert im November 2026"
  }
};

const toggle = document.querySelector(".language-toggle");
const supportedLanguages = ["en", "de"];

function setLanguage(language) {
  const current = supportedLanguages.includes(language) ? language : "en";
  document.documentElement.lang = current;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[current][key]) element.textContent = translations[current][key];
  });

  document.querySelectorAll("p.abstract[lang]").forEach((element) => {
    element.hidden = element.lang !== current;
  });

  toggle.setAttribute("aria-label", current === "en" ? "Switch to German" : "Zu Englisch wechseln");
  toggle.querySelector("span[lang='en']").hidden = current !== "en";
  toggle.querySelector("span[lang='de']").hidden = current !== "de";
  localStorage.setItem("preferred-language", current);
}

toggle.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "en" ? "de" : "en");
});

setLanguage(localStorage.getItem("preferred-language") || "en");
