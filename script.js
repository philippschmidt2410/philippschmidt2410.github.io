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
    wipFigCaption: "Direct exposure to Chinese import competition across EU-15 regions (NUTS-2), 2001–2007, in thousand euros of additional Chinese imports per worker. Grey: no data. The very high values for Ireland reflect its concentration in office and computing machinery.",
    wipFigSource: "Own calculations based on Eurostat Structural Business Statistics and WITS/UN Comtrade.",
    wipFigAlt: "Map of EU-15 regions shaded by exposure to Chinese imports between 2001 and 2007, with the highest values in Ireland and in import-competing regions of Germany, northern Italy and Portugal.",
    dpFigCaption: "Predicted probability of employment by years since arrival, asylum seekers compared with other migrants, with 95% confidence intervals (EU-LFS 2021).",
    dpFigSource: "Lange, McNamara and Schmidt (2024), ZEW Discussion Paper No. 24-073.",
    dpFigAlt: "Line chart: the predicted employment probability of asylum seekers stays below that of other migrants at every duration of stay.",
    reportFigCaption: "Gap in job quality between migrants and natives by country of residence, 2019, for recent arrivals (green) and earlier arrivals (blue), in quartiles. Hatched: no observations.",
    reportFigSource: "Lange et al. (2024), WeLaR Deliverable D5.5, European Commission.",
    reportFigAlt: "Map of Europe with a two-colour scale showing the migrant–native job-quality gap for recent and earlier arrivals in each country in 2019.",
    lastUpdated: "Last updated 20 November 2026"
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
    wipFigCaption: "Direkte Betroffenheit von chinesischer Importkonkurrenz in den Regionen der EU-15 (NUTS-2), 2001–2007, in Tausend Euro zusätzlicher Importe aus China je Beschäftigtem. Grau: keine Daten. Die sehr hohen Werte für Irland gehen auf die Konzentration auf Büromaschinen und Datenverarbeitungsgeräte zurück.",
    wipFigSource: "Eigene Berechnungen auf Basis der Eurostat-Strukturstatistik und WITS/UN Comtrade.",
    wipFigAlt: "Karte der EU-15-Regionen, eingefärbt nach ihrer Betroffenheit von Importen aus China zwischen 2001 und 2007, mit den höchsten Werten in Irland sowie in importkonkurrierenden Regionen Deutschlands, Norditaliens und Portugals.",
    dpFigCaption: "Vorhergesagte Beschäftigungswahrscheinlichkeit nach Jahren seit der Ankunft, Asylsuchende im Vergleich zu anderen Migranten, mit 95-%-Konfidenzintervallen (EU-LFS 2021).",
    dpFigSource: "Lange, McNamara und Schmidt (2024), ZEW Discussion Paper Nr. 24-073.",
    dpFigAlt: "Liniendiagramm: Die vorhergesagte Beschäftigungswahrscheinlichkeit von Asylsuchenden liegt bei jeder Aufenthaltsdauer unter der anderer Migranten.",
    reportFigCaption: "Abstand in der Jobqualität zwischen Migranten und Einheimischen nach Wohnsitzland, 2019, für kürzlich Zugewanderte (grün) und früher Zugewanderte (blau), in Quartilen. Schraffiert: keine Beobachtungen.",
    reportFigSource: "Lange et al. (2024), WeLaR-Deliverable D5.5, Europäische Kommission.",
    reportFigAlt: "Europakarte mit zweifarbiger Skala, die den Abstand in der Jobqualität zwischen Migranten und Einheimischen für kürzlich und früher Zugewanderte je Land im Jahr 2019 zeigt.",
    lastUpdated: "Zuletzt aktualisiert am 20. November 2026"
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

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.dataset.i18nAlt;
    if (translations[current][key]) element.setAttribute("alt", translations[current][key]);
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
