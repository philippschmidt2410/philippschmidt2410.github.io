# Task: add one figure to each research entry on philippschmidt2410.github.io

## 1. Files

Copy the four PNGs from this package into the repository folder `images/`:

| File | Size (px) | Use |
|---|---|---|
| `images/thesis-import-exposure-map.png` | 1329 × 1294 | Work in progress (master's thesis), **main figure** |
| `images/thesis-germany-vs-rest.png` | 1740 × 930 | Optional, see section 4 |
| `images/zew-employment-time-since-arrival.png` | 885 × 631 | ZEW Discussion Paper 24-073 |
| `images/welar-job-quality-map-2019.png` | 760 × 750 | WeLaR Policy Report D5.5 |

Do not rename, recompress or recolour the images.

## 2. Markup and layout

Place each figure inside its research entry, directly below the description text and above the link. Use this structure:

```html
<figure class="research-figure">
  <a href="images/FILE.png" target="_blank" rel="noopener">
    <img src="images/FILE.png" alt="ALT TEXT" width="W" height="H" loading="lazy">
  </a>
  <figcaption>
    <span data-i18n="KEY_caption">CAPTION</span>
    <span class="figure-source" data-i18n="KEY_source">SOURCE</span>
  </figcaption>
</figure>
```

CSS, in keeping with the plain design (no shadows, no rounded corners, no hover effects beyond the cursor):

```css
.research-figure { margin: 1rem 0 1.25rem; }
.research-figure img { display: block; width: 100%; height: auto; max-width: 560px; border: 1px solid #e3e6ea; }
.research-figure.map img { max-width: 440px; }   /* the two maps are square */
.research-figure figcaption { margin-top: .4rem; font-size: .85rem; line-height: 1.45; color: #5a6470; max-width: 560px; }
.research-figure .figure-source { display: block; margin-top: .15rem; font-size: .8rem; }
.research-figure a { cursor: zoom-in; }
```

Add `class="research-figure map"` to the two map figures. Clicking an image opens the full-resolution file in a new tab, so small legends stay readable. Set `width`/`height` attributes to the pixel sizes in the table above to avoid layout shift.

Add every caption, source line and alt text below to `script.js` under the given keys, English and German. Alt text is set in English in the HTML; if the language toggle switches attributes, add the German alt text as well.

## 3. Content per entry

### Work in progress: "One Shock, Two Europes"

File: `images/thesis-import-exposure-map.png` (map, use class `research-figure map`)

- Key: `wipFig`
- **Caption (EN):** Direct exposure to Chinese import competition across EU-15 regions (NUTS-2), 2001–2007, in thousand euros of additional Chinese imports per worker. Grey: no data. The very high values for Ireland reflect its concentration in office and computing machinery.
- **Caption (DE):** Direkte Betroffenheit von chinesischer Importkonkurrenz in den Regionen der EU-15 (NUTS-2), 2001–2007, in Tausend Euro zusätzlicher Importe aus China je Beschäftigtem. Grau: keine Daten. Die sehr hohen Werte für Irland gehen auf die Konzentration auf Büromaschinen und Datenverarbeitungsgeräte zurück.
- **Source (EN):** Own calculations based on Eurostat Structural Business Statistics and WITS/UN Comtrade.
- **Source (DE):** Eigene Berechnungen auf Basis der Eurostat-Strukturstatistik und WITS/UN Comtrade.
- **Alt (EN):** Map of EU-15 regions shaded by exposure to Chinese imports between 2001 and 2007, with the highest values in Ireland and in import-competing regions of Germany, northern Italy and Portugal.
- **Alt (DE):** Karte der EU-15-Regionen, eingefärbt nach ihrer Betroffenheit von Importen aus China zwischen 2001 und 2007, mit den höchsten Werten in Irland sowie in importkonkurrierenden Regionen Deutschlands, Norditaliens und Portugals.

### Discussion paper: "Labor Market Integration of Asylum Seekers in Europe"

File: `images/zew-employment-time-since-arrival.png`

- Key: `dpFig`
- **Description (EN):** Using the EU Labour Force Survey, we document how asylum seekers are integrating into labour markets across Europe and compare them with natives and economic migrants. Their employment rates are on average about 10 percentage points below those of natives, and the jobs they hold are of lower quality. Self-reported barriers to employment point to institutional hurdles as a main cause.
- **Description (DE):** Auf Basis der Europäischen Arbeitskräfteerhebung beschreiben wir, wie sich Asylsuchende in Europa in den Arbeitsmarkt integrieren, im Vergleich zu Einheimischen und Arbeitsmigranten. Ihre Beschäftigungsquote liegt im Durchschnitt rund zehn Prozentpunkte unter der von Einheimischen, und ihre Stellen sind von geringerer Qualität. Die selbst berichteten Hürden bei der Jobsuche deuten vor allem auf institutionelle Ursachen hin.
- **Caption (EN):** Predicted probability of employment by years since arrival, asylum seekers compared with other migrants, with 95% confidence intervals (EU-LFS 2021).
- **Caption (DE):** Vorhergesagte Beschäftigungswahrscheinlichkeit nach Jahren seit der Ankunft, Asylsuchende im Vergleich zu anderen Migranten, mit 95-%-Konfidenzintervallen (EU-LFS 2021).
- **Source (EN):** Lange, McNamara and Schmidt (2024), ZEW Discussion Paper No. 24-073.
- **Source (DE):** Lange, McNamara und Schmidt (2024), ZEW Discussion Paper Nr. 24-073.
- **Alt (EN):** Line chart: the predicted employment probability of asylum seekers stays below that of other migrants at every duration of stay.
- **Alt (DE):** Liniendiagramm: Die vorhergesagte Beschäftigungswahrscheinlichkeit von Asylsuchenden liegt bei jeder Aufenthaltsdauer unter der anderer Migranten.

### Policy report: "Migration and Integration in European Labour Markets"

File: `images/welar-job-quality-map-2019.png` (map, use class `research-figure map`)

- Key: `reportFig`
- **Description (EN):** This report for the Horizon Europe project WeLaR examines how migrants fare in European labour markets, covering employment, income, job quality, skill mismatch and the use of welfare benefits. It draws on EU Labour Force Survey microdata for the EU, Norway, Iceland, Switzerland and the UK, and adds administrative evidence from Germany on the wage effects of the 2004 EU enlargement.
- **Description (DE):** Der Bericht für das Horizon-Europe-Projekt WeLaR untersucht, wie sich Migrantinnen und Migranten auf europäischen Arbeitsmärkten behaupten, mit Blick auf Beschäftigung, Einkommen, Jobqualität, Qualifikationspassung und Sozialleistungsbezug. Grundlage sind Mikrodaten der Europäischen Arbeitskräfteerhebung für die EU, Norwegen, Island, die Schweiz und das Vereinigte Königreich, ergänzt um administrative Daten aus Deutschland zu den Lohneffekten der EU-Osterweiterung 2004.
- **Caption (EN):** Gap in job quality between migrants and natives by country of residence, 2019, for recent arrivals (green) and earlier arrivals (blue), in quartiles. Hatched: no observations.
- **Caption (DE):** Abstand in der Jobqualität zwischen Migranten und Einheimischen nach Wohnsitzland, 2019, für kürzlich Zugewanderte (grün) und früher Zugewanderte (blau), in Quartilen. Schraffiert: keine Beobachtungen.
- **Source (EN):** Lange et al. (2024), WeLaR Deliverable D5.5, European Commission.
- **Source (DE):** Lange et al. (2024), WeLaR-Deliverable D5.5, Europäische Kommission.
- **Alt (EN):** Map of Europe with a two-colour scale showing the migrant–native job-quality gap for recent and earlier arrivals in each country in 2019.
- **Alt (DE):** Europakarte mit zweifarbiger Skala, die den Abstand in der Jobqualität zwischen Migranten und Einheimischen für kürzlich und früher Zugewanderte je Land im Jahr 2019 zeigt.

## 4. Optional second thesis figure

Only if Philipp asks for it: `images/thesis-germany-vs-rest.png` can replace or follow the map in the thesis entry (plain `research-figure`, not `map`).

- **Caption (EN):** Manufacturing employment per working-age person, Germany compared with the rest of the EU-15 (2001 = 100). Solid lines: 1999–2007 estimation window; shaded: financial crisis and statistical classification break.
- **Caption (DE):** Industriebeschäftigung je Person im erwerbsfähigen Alter, Deutschland im Vergleich zur übrigen EU-15 (2001 = 100). Durchgezogene Linien: Schätzzeitraum 1999–2007; schattiert: Finanzkrise und Bruch der Wirtschaftszweigklassifikation.
- **Source (EN/DE):** Eurostat Structural Business Statistics; own calculations. / Eurostat-Strukturstatistik; eigene Berechnungen.
- **Alt (EN):** Line chart: manufacturing employment in Germany rises between 2001 and 2007 while it falls in the rest of the EU-15.
- **Alt (DE):** Liniendiagramm: Die Industriebeschäftigung steigt in Deutschland zwischen 2001 und 2007, während sie in der übrigen EU-15 sinkt.

## 5. Check before committing

- All four images load on the live page and open full size on click.
- Captions and sources switch correctly with the DE/EN toggle; no empty strings.
- On a 375px-wide screen the figures span the text column without horizontal scrolling.
- Update the "last updated" date in one place only.
