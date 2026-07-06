import { type ReactNode, useState } from "react";

const SERIF = "'EB Garamond', Georgia, 'Times New Roman', serif";
const SANS = "'DM Sans', system-ui, sans-serif";

// ─── Themes ─────────────────────────────────────────────────────────────────

const DARK_T = {
  pageBg: "#0c0a07",
  headerBg: "linear-gradient(180deg, #0f0d09 0%, #0c0a07 100%)",
  headerBorder: "rgba(201,163,72,0.12)",
  topBarBg: "rgba(12,10,7,0.95)",
  topBarBorder: "rgba(201,163,72,0.08)",
  sectionBg: "rgba(20,16,10,0.55)",
  sectionBorder: "rgba(201,163,72,0.10)",
  sectionHighlightBg: "rgba(60,40,8,0.25)",
  sectionHighlightBorder: "rgba(201,163,72,0.28)",
  noteBg: "rgba(18,15,10,0.7)",
  noteBorder: "rgba(201,163,72,0.10)",
  noteTitle: "rgba(240,232,213,0.75)",
  noteCardBg: "rgba(255,255,255,0.02)",
  noteCardBorder: "rgba(201,163,72,0.08)",
  noteLabel: "#8a7a60",
  noteBody: "#5a5040",
  divider: "rgba(201,163,72,0.08)",
  gold: "#c9a348",
  goldDim: "rgba(201,163,72,0.5)",
  goldFaint: "rgba(201,163,72,0.15)",
  fg: "#f0e8d5",
  fgName: "#f0e8d5",
  fgNameSol: "#f5e0a0",
  fgAlt: "rgba(201,163,72,0.55)",
  fgOcc: "rgba(201,163,72,0.7)",
  fgDate: "#9a8c70",
  fgPlace: "#6a5e48",
  fgNote: "#5a5040",
  fgMuted: "#4a4030",
  fgGenTitle: "rgba(240,232,213,0.85)",
  fgPeriod: "#5a5040",
  fgLegend: "#4a4030",
  fgLabelMain: "rgba(201,163,72,0.5)",
  fgLabelSib: "#4a4030",
  connector: "rgba(201,163,72,0.20)",
  connectorText: "rgba(201,163,72,0.35)",
  toggleBg: "rgba(201,163,72,0.1)",
  toggleBorder: "rgba(201,163,72,0.3)",
  toggleFg: "rgba(201,163,72,0.75)",
  langActiveBg: "rgba(201,163,72,0.18)",
  langActiveBorder: "rgba(201,163,72,0.45)",
  langActiveFg: "#c9a348",
  langInactiveBg: "transparent",
  langInactiveBorder: "rgba(201,163,72,0.12)",
  langInactiveFg: "rgba(201,163,72,0.4)",
  warnBg: "rgba(201,163,72,0.04)",
  warnBorder: "rgba(201,163,72,0.10)",
  warnText: "rgba(201,163,72,0.6)",
  warnIcon: "rgba(201,163,72,0.4)",
  warnStrong: "rgba(201,163,72,0.75)",
  infoMarriageBg: "rgba(80,40,10,0.25)",
  infoMarriageBorder: "rgba(201,163,72,0.20)",
  cardBgMain: "rgba(201,163,72,0.05)",
  cardBdMain: "rgba(201,163,72,0.30)",
  cardBgSol: "rgba(201,163,72,0.10)",
  cardBdSol: "rgba(201,163,72,0.65)",
  cardBgPlain: "rgba(255,255,255,0.025)",
  cardBdPlain: "rgba(255,255,255,0.07)",
  genCircle: "rgba(201,163,72,0.35)",
  genNum: "#c9a348",
  descentBg: "rgba(20,16,10,0.8)",
  descentBorder: "rgba(201,163,72,0.15)",
  descentHL: "#c9a348",
  descentSub: "#8a7a60",
  descentPath: "rgba(201,163,72,0.06)",
  descentPathBorder: "rgba(201,163,72,0.15)",
  footerBorder: "rgba(201,163,72,0.08)",
  footerText: "#3a3020",
  eyebrow: "rgba(201,163,72,0.5)",
  subtitle: "#7a6840",
  docRowBorder: "rgba(255,255,255,0.04)",
  germanBg: "#0e1e3a",
  germanText: "#93b4d8",
  germanBorder: "rgba(100,150,210,0.35)",
  solBadgeBg: "rgba(120,80,10,0.9)",
  solBadgeText: "#f5e0a0",
  solBadgeBorder: "rgba(201,163,72,0.5)",
  shadow: "0 0 32px rgba(201,163,72,0.08)",
};

const LIGHT_T = {
  pageBg: "#f5f0e8",
  headerBg: "linear-gradient(180deg, #ede8de 0%, #f5f0e8 100%)",
  headerBorder: "rgba(140,100,20,0.15)",
  topBarBg: "rgba(237,232,222,0.97)",
  topBarBorder: "rgba(140,100,20,0.12)",
  sectionBg: "rgba(255,253,248,0.85)",
  sectionBorder: "rgba(140,100,20,0.12)",
  sectionHighlightBg: "rgba(180,135,30,0.05)",
  sectionHighlightBorder: "rgba(140,100,20,0.28)",
  noteBg: "rgba(255,253,248,0.95)",
  noteBorder: "rgba(140,100,20,0.12)",
  noteTitle: "#1a1410",
  noteCardBg: "rgba(180,135,30,0.03)",
  noteCardBorder: "rgba(140,100,20,0.10)",
  noteLabel: "#5a4020",
  noteBody: "#7a6040",
  divider: "rgba(140,100,20,0.10)",
  gold: "#8a6818",
  goldDim: "rgba(120,88,20,0.55)",
  goldFaint: "rgba(120,88,20,0.15)",
  fg: "#1a1410",
  fgName: "#1a1410",
  fgNameSol: "#5a3500",
  fgAlt: "rgba(100,70,10,0.65)",
  fgOcc: "rgba(100,70,10,0.80)",
  fgDate: "#5a4520",
  fgPlace: "#7a6040",
  fgNote: "#8a7050",
  fgMuted: "#9a8060",
  fgGenTitle: "#1a1410",
  fgPeriod: "#8a7050",
  fgLegend: "#7a6040",
  fgLabelMain: "rgba(100,70,10,0.60)",
  fgLabelSib: "#8a7050",
  connector: "rgba(140,100,20,0.25)",
  connectorText: "rgba(100,70,10,0.40)",
  toggleBg: "rgba(140,100,20,0.08)",
  toggleBorder: "rgba(140,100,20,0.28)",
  toggleFg: "rgba(80,55,10,0.80)",
  langActiveBg: "rgba(140,100,20,0.14)",
  langActiveBorder: "rgba(140,100,20,0.45)",
  langActiveFg: "#6a4e10",
  langInactiveBg: "transparent",
  langInactiveBorder: "rgba(140,100,20,0.15)",
  langInactiveFg: "rgba(100,70,10,0.4)",
  warnBg: "rgba(180,135,30,0.06)",
  warnBorder: "rgba(140,100,20,0.15)",
  warnText: "rgba(100,70,10,0.70)",
  warnIcon: "rgba(100,70,10,0.50)",
  warnStrong: "rgba(80,55,10,0.80)",
  infoMarriageBg: "rgba(180,140,40,0.08)",
  infoMarriageBorder: "rgba(140,100,20,0.22)",
  cardBgMain: "rgba(180,135,30,0.04)",
  cardBdMain: "rgba(140,100,20,0.35)",
  cardBgSol: "rgba(180,135,30,0.08)",
  cardBdSol: "rgba(140,100,20,0.60)",
  cardBgPlain: "rgba(0,0,0,0.02)",
  cardBdPlain: "rgba(0,0,0,0.07)",
  genCircle: "rgba(120,88,20,0.40)",
  genNum: "#8a6818",
  descentBg: "rgba(255,253,248,0.95)",
  descentBorder: "rgba(140,100,20,0.18)",
  descentHL: "#8a6818",
  descentSub: "#6a5030",
  descentPath: "rgba(140,100,20,0.06)",
  descentPathBorder: "rgba(140,100,20,0.18)",
  footerBorder: "rgba(140,100,20,0.12)",
  footerText: "#a08060",
  eyebrow: "rgba(100,70,10,0.55)",
  subtitle: "#6a5030",
  docRowBorder: "rgba(0,0,0,0.05)",
  germanBg: "#1a3060",
  germanText: "#90b8e8",
  germanBorder: "rgba(80,120,200,0.40)",
  solBadgeBg: "rgba(140,90,5,0.85)",
  solBadgeText: "#fff0cc",
  solBadgeBorder: "rgba(160,110,10,0.60)",
  shadow: "0 0 24px rgba(140,100,20,0.08)",
};

type Theme = typeof DARK_T;

// ─── Translations ────────────────────────────────────────────────────────────

const TR = {
  es: {
    topLabel: "Expediente Genealógico · Línea Paterna",
    mainTitle: "Familia Weber",
    subtitle: "Árbol Genealógico · Cinco Generaciones · 1882 – 1989",
    descPre: "Descendencia documentada de",
    descPost: "— Línea directa desde Saarbrücken, Alemania (1882) hasta Pachuca, Hidalgo, México (1989). Expediente para solicitud de nacionalidad alemana por descendencia.",
    lightMode: "Modo claro",
    darkMode: "Modo oscuro",
    legendBorn: "Nacimiento",
    legendDied: "Defunción",
    legendCause: "Causa",
    legendMarriage: "Matrimonio",
    legendDirectLine: "Línea directa",
    legendPlace: "Lugar",
    legendMale: "Masculino",
    legendFemale: "Femenino",
    germanCitizen: "Ciudadano alemán",
    applicant: "Solicitante",
    altNamePrefix: "También:",
    inferredMarriage: "Sin acta de matrimonio",
    inferredMarriageDetail: "Matrimonio acreditado por documentos:",
    inferredDoc2: "Doc. 2 · Def. 1925: registrado «casado»",
    inferredDoc11: "Doc. 11 · Nac. Rodolfo (1912): «casado c/ Marina Ortiz»",
    inferredDoc12: "Doc. 12 · Nac. Esperanza (1918): «casado c/ Marina/María Ortiz»",
    inferredDoc3note: "Doc. 3 · Nac. Willi Adolfo (1910): situación matrimonial no clara",
    connectorSon: "hijo",
    connectorChildren: "hijos",
    connectorDaughter: "hija",
    gen1Title: "Antecesores Alemanes · Bisabuelos del inmigrante",
    gen1Period: "c. mediados del siglo XIX",
    gen1Location: "Saarbrücken, Alemania",
    gen2Title: "Inmigrante Alemán · Bisabuelo de la Solicitante",
    gen2Period: "n. 1882 · fallecido 1925",
    gen2Location: "Saarbrücken → Pachuca, Hidalgo",
    gen3Title: "Primera Generación en México · Abuelos de la Solicitante",
    gen3Period: "1910 — 1919",
    gen3Location: "Ciudad de México",
    gen4Title: "Segunda Generación en México · Padres de la Solicitante",
    gen4Period: "c. 1949 — 1951",
    gen4Location: "Pachuca de Soto, Hidalgo",
    gen5Title: "Solicitante — Quinta Generación en la Línea Weber",
    gen5Period: "n. 1989",
    gen5Location: "Pachuca, Hidalgo, México",
    labelDirect3: "Línea directa — Abuelo paterno de la solicitante",
    labelSib3: "Hermanos (hijos de la misma pareja Weber-Ortiz)",
    labelDirect4: "Línea directa — Padre de la solicitante",
    labelMaternal4: "Padres de Laura Nohemí (línea materna de la solicitante)",
    labelSolicLabel: "Solicitante de nacionalidad alemana por descendencia",
    notesTitle: "Notas y Aclaraciones Documentales",
    docsTitle: "Documentos Fuente — 12 Actas",
    footerText: "Árbol Genealógico · Familia Weber · Expediente Lluvia Weber Fernández · 12 documentos · 1882–1989",
    marriageMat: "mat.",
    warnVariantsTitle: "Variantes documentadas del nombre:",
    warnVariantsBody: "Adolph Willy Weber · Pablo Adolph Willy Weber · Adolfo Pablo von Weber · Adolf Willy Weber · Willy Adolfo Weber · Guillermo Weber — Todos corresponden al mismo individuo. Acta alemana (1882) y acta de defunción mexicana (Pachuca, 1925) confirman su identidad. Sin naturalización mexicana documentada.",
    warnSignifTitle: "Significado histórico del Doc. 2:",
    warnSignifBody: "Falleció el 31 mayo 1925 en Pachuca de Soto a los 43 años, por lesiones en la Mina «San Rafael». El acta confirma: originario de Saarbrücken, casado, ingeniero, hijo de Adolph Weber y Maria Georgy — coincide exactamente con el acta alemana de 1882. Falleció como ciudadano alemán sin naturalización mexicana. Pachuca, misma ciudad donde su hijo Guillermo Weber Ortiz contraería matrimonio y formaría su familia años después.",
    notes: [
      {
        title: "Variantes del nombre del ancestro alemán",
        body: "Adolph Willy Weber aparece en documentos mexicanos como: Adolph Willy Weber, Pablo Adolph Willy Weber, Adolfo Pablo von Weber, Adolf Willy Weber, Willy Adolfo Weber y Guillermo Weber. Su identidad queda confirmada tanto por el acta alemana de nacimiento (Saarbrücken, 1882) como por el acta de defunción mexicana (Pachuca, 1925), que coinciden en sus datos de filiación: hijo de Adolph Weber y Maria Georgy.",
      },
      {
        title: "Acta de defunción del ancestro alemán (Doc. 2)",
        body: "Pablo Adolph Willy Weber falleció el 31 de mayo de 1925 en Pachuca de Soto, Hidalgo, a los 43 años, por lesiones en la Mina «San Rafael». Era originario de Saarbrücken, Alemania, casado, ingeniero. Este documento es clave para acreditar que falleció como ciudadano alemán, sin naturalización mexicana documentada.",
      },
      {
        title: "Matrimonio de Adolph Willy Weber y Marina/María Ortiz",
        body: "No se ha localizado acta de matrimonio entre Adolph Willy Weber y Marina/María Ortiz. Sin embargo, el vínculo matrimonial queda acreditado indirectamente en tres documentos: el acta de nacimiento de Rodolfo Manuel (1912) lo registra como «casado con Marina/María Ortiz»; el acta de nacimiento de Esperanza María (1918) igualmente; y el propio acta de defunción del alemán (1925) lo señala como «casado». El acta de nacimiento de Willi Adolfo (1910) no aclara con precisión la situación matrimonial.",
      },
      {
        title: "Identidad de Willi Adolfo → Guillermo Weber Ortiz",
        body: "El niño registrado en 1910 como Willi Adolfo von Weber y Ortiz (Doc. 3) es la misma persona que en 1942 contrajo matrimonio como Guillermo Weber Ortiz (Doc. 4). La edad en el acta de matrimonio es compatible con nacimiento en 1910. Tenía ~14 años cuando falleció su padre en Pachuca (1925).",
      },
    ],
    docs: [
      { num: 1, text: "Acta de nacimiento alemana de Adolph Willy Weber", detail: "16 dic 1882 · Saarbrücken / St. Johann, Alemania · Padres: Adolph Weber y Maria Georgy" },
      { num: 2, text: "Acta de defunción de Pablo Adolph Willy Weber ★", detail: "31 mayo 1925 · Pachuca de Soto, Hidalgo, México · Mina «San Rafael» · 43 años · Ing. alemán · Sin naturalización mexicana" },
      { num: 3, text: "Acta de nacimiento de Willi Adolfo von Weber y Ortiz", detail: "29 sep 1910 · Ciudad de México · Padre: Adolfo Pablo von Weber (Saarbrücken, Alemania)" },
      { num: 4, text: "Acta de matrimonio de Guillermo Weber Ortiz con Guadalupe Frías Islas", detail: "1942 · Pachuca de Soto, Hidalgo" },
      { num: 5, text: "Acta de defunción de Guillermo Weber Ortiz", detail: "Mayo 1967 · Edad compatible con nacimiento en 1910" },
      { num: 6, text: "Acta antigua/certificada de nacimiento de Guillermo Cándido Weber Frías", detail: "5 nov 1951 · Pachuca de Soto, Hidalgo · Abuelos paternos: Guillermo Weber y Marina Ortiz" },
      { num: 7, text: "Acta de matrimonio de Guillermo Cándido Weber Frías con Laura Nohemí Fernández Jaime", detail: "19 ago 1987 · Pachuca, Hidalgo · Filiación con Guillermo Weber Ortiz y Guadalupe Frías Islas" },
      { num: 8, text: "Acta moderna de nacimiento de Guillermo Cándido Weber Frías", detail: "Emitida 2021 · Confirma nombre, fecha y filiación paterna" },
      { num: 9, text: "Acta de defunción de Guillermo Cándido Weber Frías", detail: "20 ene 2021 · Pachuca de Soto, Hidalgo · Causa: COVID-19" },
      { num: 10, text: "Acta de nacimiento de Lluvia Weber Fernández", detail: "27 nov 1989 · Pachuca, Hidalgo · Abuelo paterno: Guillermo Weber Ortiz (finado)" },
      { num: 11, text: "Acta de nacimiento de Rodolfo Manuel Weber Ortiz", detail: "c. jul 1912 · Ciudad de México · Hermano de Guillermo Weber Ortiz · Padre «casado con Marina/María Ortiz»" },
      { num: 12, text: "Acta de nacimiento de Esperanza María Weber Ortiz", detail: "c. dic 1918 · Ciudad de México · Hermana · Padre: ing. minero Willy Adolfo Weber, Saarbrücken, «casado con Marina/María Ortiz»" },
    ],
  },
  de: {
    topLabel: "Genealogischer Akt · Väterliche Linie",
    mainTitle: "Familie Weber",
    subtitle: "Stammbaum · Fünf Generationen · 1882 – 1989",
    descPre: "Dokumentierte Abstammung von",
    descPost: "— Direkte Linie von Saarbrücken, Deutschland (1882) bis Pachuca, Hidalgo, Mexiko (1989). Akte für Antrag auf deutsche Staatsangehörigkeit durch Abstammung.",
    lightMode: "Heller Modus",
    darkMode: "Dunkler Modus",
    legendBorn: "Geburt",
    legendDied: "Tod",
    legendCause: "Todesursache",
    legendMarriage: "Heirat",
    legendDirectLine: "Direkte Linie",
    legendPlace: "Ort",
    legendMale: "Männlich",
    legendFemale: "Weiblich",
    germanCitizen: "Deutscher Staatsbürger",
    applicant: "Antragstellerin",
    altNamePrefix: "Auch bekannt als:",
    inferredMarriage: "Keine Heiratsurkunde gefunden",
    inferredMarriageDetail: "Ehe belegt durch folgende Dokumente:",
    inferredDoc2: "Dok. 2 · Sterbeurk. 1925: «verheiratet» eingetragen",
    inferredDoc11: "Dok. 11 · Geb. Rodolfo (1912): «verheiratet mit Marina Ortiz»",
    inferredDoc12: "Dok. 12 · Geb. Esperanza (1918): «verheiratet mit Marina/María Ortiz»",
    inferredDoc3note: "Dok. 3 · Geb. Willi Adolfo (1910): Familienstand unklar",
    connectorSon: "Sohn",
    connectorChildren: "Kinder",
    connectorDaughter: "Tochter",
    gen1Title: "Deutsche Vorfahren · Urgroßeltern des Einwanderers",
    gen1Period: "ca. Mitte 19. Jahrhundert",
    gen1Location: "Saarbrücken, Deutschland",
    gen2Title: "Deutscher Einwanderer · Urgroßvater der Antragstellerin",
    gen2Period: "geb. 1882 · gest. 1925",
    gen2Location: "Saarbrücken → Pachuca, Hidalgo",
    gen3Title: "Erste Generation in Mexiko · Großeltern der Antragstellerin",
    gen3Period: "1910 — 1919",
    gen3Location: "Mexiko-Stadt",
    gen4Title: "Zweite Generation in Mexiko · Eltern der Antragstellerin",
    gen4Period: "ca. 1949 — 1951",
    gen4Location: "Pachuca de Soto, Hidalgo",
    gen5Title: "Antragstellerin — Fünfte Generation der Weber-Linie",
    gen5Period: "geb. 1989",
    gen5Location: "Pachuca, Hidalgo, Mexiko",
    labelDirect3: "Direkte Linie — Großvater väterlicherseits der Antragstellerin",
    labelSib3: "Geschwister (Kinder desselben Elternpaares Weber-Ortiz)",
    labelDirect4: "Direkte Linie — Vater der Antragstellerin",
    labelMaternal4: "Eltern von Laura Nohemí (mütterliche Linie der Antragstellerin)",
    labelSolicLabel: "Antragstellerin auf deutsche Staatsangehörigkeit durch Abstammung",
    notesTitle: "Hinweise und Dokumentarische Klarstellungen",
    docsTitle: "Quelldokumente — 12 Urkunden",
    footerText: "Stammbaum · Familie Weber · Akte Lluvia Weber Fernández · 12 Dokumente · 1882–1989",
    marriageMat: "Heirat",
    warnVariantsTitle: "Dokumentierte Namensvarianten:",
    warnVariantsBody: "Adolph Willy Weber erscheint in mexikanischen Dokumenten als: Adolph Willy Weber, Pablo Adolph Willy Weber, Adolfo Pablo von Weber, Adolf Willy Weber, Willy Adolfo Weber und Guillermo Weber — alle bezeichnen dieselbe Person. Die deutsche Geburtsurkunde (1882) und die mexikanische Sterbeurkunde (Pachuca, 1925) bestätigen seine Identität. Keine mexikanische Einbürgerung dokumentiert.",
    warnSignifTitle: "Historische Bedeutung von Dok. 2:",
    warnSignifBody: "Er starb am 31. Mai 1925 in Pachuca de Soto, 43 Jahre alt, an Verletzungen in der Mine «San Rafael». Die Urkunde bestätigt: aus Saarbrücken, verheiratet, Ingenieur, Sohn von Adolph Weber und Maria Georgy — stimmt exakt mit der deutschen Geburtsurkunde von 1882 überein. Er starb als deutscher Staatsbürger ohne mexikanische Einbürgerung. Pachuca — dieselbe Stadt, in der sein Sohn Guillermo Weber Ortiz später heiratete und seine Familie gründete.",
    notes: [
      {
        title: "Namensvarianten des deutschen Vorfahren",
        body: "Adolph Willy Weber erscheint in mexikanischen Dokumenten in verschiedenen Versionen. Seine Identität wird durch die deutsche Geburtsurkunde (Saarbrücken, 1882) und die mexikanische Sterbeurkunde (Pachuca, 1925) bestätigt, die in den Abstammungsdaten übereinstimmen: Sohn von Adolph Weber und Maria Georgy.",
      },
      {
        title: "Sterbeurkunde des deutschen Vorfahren (Dok. 2)",
        body: "Pablo Adolph Willy Weber starb am 31. Mai 1925 in Pachuca de Soto, Hidalgo, 43 Jahre alt, durch Verletzungen in der Mine «San Rafael». Er war aus Saarbrücken, Deutschland, verheiratet, Ingenieur. Dieses Dokument belegt, dass er als deutscher Staatsbürger starb, ohne mexikanische Einbürgerung.",
      },
      {
        title: "Ehe von Adolph Willy Weber und Marina/María Ortiz",
        body: "Es wurde keine Heiratsurkunde zwischen Adolph Willy Weber und Marina/María Ortiz gefunden. Die Ehe wird jedoch indirekt durch drei Dokumente belegt: die Geburtsurkunde von Rodolfo Manuel (1912) trägt ihn als «verheiratet mit Marina/María Ortiz» ein; ebenso die Geburtsurkunde von Esperanza María (1918); und die eigene Sterbeurkunde des Deutschen (1925) nennt ihn «verheiratet». Die Geburtsurkunde von Willi Adolfo (1910) klärt den Familienstand nicht eindeutig.",
      },
      {
        title: "Identität: Willi Adolfo → Guillermo Weber Ortiz",
        body: "Das 1910 als Willi Adolfo von Weber y Ortiz eingetragene Kind (Dok. 3) ist dieselbe Person, die 1942 als Guillermo Weber Ortiz heiratete (Dok. 4). Das Alter im Heiratsdokument stimmt mit Geburt 1910 überein. Er war ca. 14 Jahre alt, als sein Vater 1925 in Pachuca starb.",
      },
    ],
    docs: [
      { num: 1, text: "Deutsche Geburtsurkunde von Adolph Willy Weber", detail: "16. Dez. 1882 · Saarbrücken / St. Johann, Deutschland · Eltern: Adolph Weber und Maria Georgy" },
      { num: 2, text: "Sterbeurkunde von Pablo Adolph Willy Weber ★", detail: "31. Mai 1925 · Pachuca de Soto, Hidalgo, Mexiko · Mine «San Rafael» · 43 Jahre · Deutscher Ingenieur · Keine Einbürgerung" },
      { num: 3, text: "Geburtsurkunde von Willi Adolfo von Weber y Ortiz", detail: "29. Sept. 1910 · Mexiko-Stadt · Vater: Adolfo Pablo von Weber (Saarbrücken, Deutschland)" },
      { num: 4, text: "Heiratsurkunde: Guillermo Weber Ortiz mit Guadalupe Frías Islas", detail: "1942 · Pachuca de Soto, Hidalgo" },
      { num: 5, text: "Sterbeurkunde von Guillermo Weber Ortiz", detail: "Mai 1967 · Alter vereinbar mit Geburt 1910" },
      { num: 6, text: "Alte/zertifizierte Geburtsurkunde von Guillermo Cándido Weber Frías", detail: "5. Nov. 1951 · Pachuca de Soto, Hidalgo · Großeltern väterl.: Guillermo Weber und Marina Ortiz" },
      { num: 7, text: "Heiratsurkunde: Guillermo Cándido Weber Frías mit Laura Nohemí Fernández Jaime", detail: "19. Aug. 1987 · Pachuca, Hidalgo · Abstammung von Guillermo Weber Ortiz und Guadalupe Frías Islas" },
      { num: 8, text: "Neuere Geburtsurkunde von Guillermo Cándido Weber Frías", detail: "Ausgestellt 2021 · Bestätigt Name, Geburtsdatum und väterliche Abstammung" },
      { num: 9, text: "Sterbeurkunde von Guillermo Cándido Weber Frías", detail: "20. Jan. 2021 · Pachuca de Soto, Hidalgo · Todesursache: COVID-19" },
      { num: 10, text: "Geburtsurkunde von Lluvia Weber Fernández", detail: "27. Nov. 1989 · Pachuca, Hidalgo · Großvater väterlicherseits: Guillermo Weber Ortiz (verstorben)" },
      { num: 11, text: "Geburtsurkunde von Rodolfo Manuel Weber Ortiz", detail: "ca. Jul. 1912 · Mexiko-Stadt · Bruder von Guillermo Weber Ortiz · Vater «verheiratet mit Marina/María Ortiz»" },
      { num: 12, text: "Geburtsurkunde von Esperanza María Weber Ortiz", detail: "ca. Dez. 1918 · Mexiko-Stadt · Schwester · Vater: Bergbauingenieur Willy Adolfo Weber, Saarbrücken, «verheiratet mit Marina/María Ortiz»" },
    ],
  },
};

type Lang = "es" | "de";

// ─── Types ──────────────────────────────────────────────────────────────────

interface Person {
  id: string;
  name: string;
  altName?: string;
  born?: string;
  birthPlace?: string;
  died?: string;
  deathPlace?: string;
  deathCause?: string;
  notesEs?: string[];
  notesde?: string[];
  isGerman?: boolean;
  isMainLine?: boolean;
  isSolicitante?: boolean;
  gender: "m" | "f";
  occupationEs?: string;
  occupationDe?: string;
}

// ─── Family Data ─────────────────────────────────────────────────────────────

const adolphWeberSr: Person = {
  id: "adolf-sr", name: "Adolf Weber", gender: "m",
  birthPlace: "Saarbrücken, Alemania / Deutschland",
  notesEs: ["Padre del inmigrante alemán", "Confirmado en acta alemana (1882) y actas mexicanas"],
  notesde: ["Vater des deutschen Einwanderers", "Belegt in deutscher Urkunde (1882) und mexikanischen Akten"],
};
const mariaGeorgy: Person = {
  id: "maria-georgy", name: "Maria Georgy", gender: "f",
  birthPlace: "Saarbrücken, Alemania / Deutschland",
  notesEs: ["Madre del inmigrante alemán", "Confirmada en acta alemana (1882) y actas mexicanas"],
  notesde: ["Mutter des deutschen Einwanderers", "Belegt in deutscher Urkunde (1882) und mexikanischen Akten"],
};
const adolphWillyWeber: Person = {
  id: "adolph-willy",
  name: "Adolph Willy Weber",
  altName: "Pablo Adolph Willy Weber · Adolfo Pablo von Weber · Adolf Willy Weber · Willy Adolfo Weber · Guillermo Weber",
  gender: "m",
  born: "16 de diciembre de 1882 / 16. Dezember 1882",
  birthPlace: "Saarbrücken / St. Johann, Alemania",
  died: "31 de mayo de 1925 / 31. Mai 1925",
  deathPlace: "Pachuca de Soto, Hidalgo, México",
  deathCause: "Lesiones en Mina «San Rafael» / Verletzungen in Mine «San Rafael»",
  occupationEs: "Ingeniero Minero",
  occupationDe: "Bergbauingenieur",
  isGerman: true,
  isMainLine: true,
  notesEs: [
    "43 años al morir — consistente con n. 1882",
    "Falleció en Pachuca, donde su hijo más tarde estableció su familia",
    "Sin naturalización mexicana documentada",
  ],
  notesde: [
    "43 Jahre alt beim Tod — vereinbar mit Geb. 1882",
    "Starb in Pachuca, wo sein Sohn später seine Familie gründete",
    "Keine mexikanische Einbürgerung dokumentiert",
  ],
};
const marinaOrtiz: Person = {
  id: "marina-ortiz", name: "Marina / María Ortiz", gender: "f",
  birthPlace: "Zacatlán, Puebla, México",
  isMainLine: true,
  notesEs: [
    "Nombre varía: Marina Ortiz / María Ortiz en distintos documentos",
    "Error en acta de defunción del hijo: «Emma Ortiz Tinoco» — descartado",
  ],
  notesde: [
    "Name variiert: Marina Ortiz / María Ortiz in verschiedenen Dokumenten",
    "Fehler in Sterbeurkunde des Sohnes: «Emma Ortiz Tinoco» — verworfen",
  ],
};
const guillermoWeberOrtiz: Person = {
  id: "guillermo-weber-ortiz",
  name: "Guillermo Weber Ortiz",
  altName: "Willi Adolfo von Weber y Ortiz (nombre al nacer / Geburtsname)",
  gender: "m",
  born: "29 de septiembre de 1910 / 29. September 1910",
  birthPlace: "Ciudad de México / Mexiko-Stadt",
  died: "Mayo de 1967 / Mai 1967",
  deathPlace: "México, D.F.",
  isMainLine: true,
  notesEs: ["~14 años cuando falleció su padre en Pachuca (1925)", "Adoptó el nombre Guillermo Weber Ortiz en México"],
  notesde: ["~14 Jahre alt als sein Vater in Pachuca starb (1925)", "Nahm den Namen Guillermo Weber Ortiz in Mexiko an"],
};
const guadalupeFriasIslas: Person = {
  id: "guadalupe-frias", name: "Guadalupe Frías Islas", gender: "f",
  birthPlace: "México",
  isMainLine: true,
  notesEs: ["Padres: Marciano Frías y Domiciana Soto"],
  notesde: ["Eltern: Marciano Frías und Domiciana Soto"],
};
const rodolfoManuel: Person = {
  id: "rodolfo-manuel", name: "Rodolfo Manuel Weber Ortiz", gender: "m",
  born: "c. 21 jul. 1912 / ca. 21. Jul. 1912",
  birthPlace: "Ciudad de México / Mexiko-Stadt",
  notesEs: ["Hermano de Guillermo Weber Ortiz", "Doc. 11: padre registrado como «casado con Marina/María Ortiz»"],
  notesde: ["Bruder von Guillermo Weber Ortiz", "Dok. 11: Vater als «verheiratet mit Marina/María Ortiz» eingetragen"],
};
const esperanzaMaria: Person = {
  id: "esperanza-maria", name: "Esperanza María Weber Ortiz", gender: "f",
  born: "c. 17–18 dic. 1918 / ca. 17.–18. Dez. 1918",
  birthPlace: "Ciudad de México / Mexiko-Stadt",
  notesEs: ["Hermana de Guillermo Weber Ortiz", "Doc. 12: padre registrado como «casado con Marina/María Ortiz»"],
  notesde: ["Schwester von Guillermo Weber Ortiz", "Dok. 12: Vater als «verheiratet mit Marina/María Ortiz» eingetragen"],
};
const guillermoCandido: Person = {
  id: "guillermo-candido", name: "Guillermo Cándido Weber Frías", gender: "m",
  born: "5 de noviembre de 1951 / 5. November 1951",
  birthPlace: "Pachuca de Soto, Hidalgo",
  died: "20 de enero de 2021 / 20. Januar 2021",
  deathPlace: "Pachuca de Soto, Hidalgo",
  deathCause: "COVID-19",
  isMainLine: true,
};
const lauraNohemi: Person = {
  id: "laura-nohemi", name: "Laura Nohemí Fernández Jaime", gender: "f",
  born: "c. 1961",
  birthPlace: "Mexicali, Baja California",
  isMainLine: true,
  notesEs: ["Padres: Rubén Fernández González y Eva Jaime Tapia"],
  notesde: ["Eltern: Rubén Fernández González und Eva Jaime Tapia"],
};
const rubenFernandez: Person = {
  id: "ruben-fernandez", name: "Rubén Fernández González", gender: "m",
  notesEs: ["Abuelo materno de Lluvia Weber Fernández"],
  notesde: ["Großvater mütterlicherseits von Lluvia Weber Fernández"],
};
const evaJaimeTapia: Person = {
  id: "eva-jaime", name: "Eva Jaime Tapia", gender: "f",
  born: "c. 1927",
  notesEs: ["Abuela materna de Lluvia", "Testigo en matrimonio (1987), 60 años"],
  notesde: ["Großmutter mütterlicherseits von Lluvia", "Trauzeugin (1987), 60 Jahre"],
};
const lluviaWeberFernandez: Person = {
  id: "lluvia", name: "Lluvia Weber Fernández", gender: "f",
  born: "27 de noviembre de 1989 / 27. November 1989",
  birthPlace: "Pachuca, Hidalgo, México",
  isSolicitante: true,
  isMainLine: true,
  notesEs: ["Solicitante de nacionalidad alemana por descendencia (línea paterna Weber)"],
  notesde: ["Antragstellerin auf deutsche Staatsangehörigkeit durch Abstammung (väterliche Weber-Linie)"],
};

// ─── UI Components ───────────────────────────────────────────────────────────

function PersonCard({ person, size = "normal", t, lang }: { person: Person; size?: "normal" | "small"; t: Theme; lang: Lang }) {
  const sm = size === "small";
  const notes = lang === "de" ? person.notesde : person.notesEs;
  const occupation = lang === "de" ? person.occupationDe : person.occupationEs;
  const tr = TR[lang];

  return (
    <div style={{
      position: "relative", borderRadius: "10px",
      padding: sm ? "10px 13px" : "15px 17px",
      minWidth: sm ? "145px" : "185px", maxWidth: sm ? "200px" : "248px", flexShrink: 0,
      background: person.isSolicitante ? t.cardBgSol : person.isMainLine ? t.cardBgMain : t.cardBgPlain,
      border: person.isSolicitante ? `2px solid ${t.cardBdSol}` : person.isMainLine ? `1px solid ${t.cardBdMain}` : `1px solid ${t.cardBdPlain}`,
      boxShadow: person.isSolicitante ? t.shadow : "none",
    }}>
      {person.isGerman && (
        <div style={{ position: "absolute", top: "-12px", left: "12px", zIndex: 10 }}>
          <span style={{ fontSize: "9px", background: t.germanBg, color: t.germanText, padding: "2px 8px", borderRadius: "99px", border: `1px solid ${t.germanBorder}`, whiteSpace: "nowrap", fontFamily: SANS }}>
            🇩🇪 {tr.germanCitizen}
          </span>
        </div>
      )}
      {person.isSolicitante && (
        <div style={{ position: "absolute", top: "-12px", right: "12px", zIndex: 10 }}>
          <span style={{ fontSize: "9px", background: t.solBadgeBg, color: t.solBadgeText, padding: "2px 8px", borderRadius: "99px", border: `1px solid ${t.solBadgeBorder}`, whiteSpace: "nowrap", fontFamily: SANS }}>
            ★ {tr.applicant}
          </span>
        </div>
      )}

      <div style={{ display: "flex", alignItems: "flex-start", gap: "5px", marginBottom: "5px" }}>
        <span style={{ fontSize: "11px", marginTop: "2px", flexShrink: 0, color: person.gender === "f" ? "rgba(240,140,140,0.5)" : "rgba(120,160,220,0.5)" }}>
          {person.gender === "f" ? "♀" : "♂"}
        </span>
        <h3 style={{ fontFamily: SERIF, fontSize: sm ? "13px" : "14.5px", fontWeight: 600, lineHeight: 1.3, color: person.isSolicitante ? t.fgNameSol : t.fgName, margin: 0 }}>
          {person.name}
        </h3>
      </div>

      {person.altName && (
        <p style={{ fontSize: "9px", color: t.fgAlt, fontStyle: "italic", marginBottom: "7px", lineHeight: 1.45, fontFamily: SANS }}>
          {tr.altNamePrefix} {person.altName}
        </p>
      )}
      {occupation && (
        <p style={{ fontSize: "9px", color: t.fgOcc, fontWeight: 500, letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "7px", fontFamily: SANS }}>
          {occupation}
        </p>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
        {person.born && (
          <div style={{ display: "flex", alignItems: "flex-start", gap: "5px", fontSize: "10px" }}>
            <span style={{ color: t.goldDim, flexShrink: 0, marginTop: "1px" }}>●</span>
            <span style={{ color: t.fgDate, fontFamily: SANS }}>{person.born}</span>
          </div>
        )}
        {person.birthPlace && (
          <div style={{ display: "flex", alignItems: "flex-start", gap: "5px", fontSize: "10px", paddingLeft: "14px" }}>
            <span style={{ color: t.fgMuted, flexShrink: 0 }}>⌖</span>
            <span style={{ color: t.fgPlace, fontFamily: SANS }}>{person.birthPlace}</span>
          </div>
        )}
        {person.died && (
          <div style={{ display: "flex", alignItems: "flex-start", gap: "5px", fontSize: "10px" }}>
            <span style={{ color: t.fgMuted, flexShrink: 0, marginTop: "1px" }}>†</span>
            <span style={{ color: t.fgPlace, fontFamily: SANS }}>{person.died}</span>
          </div>
        )}
        {person.deathPlace && (
          <div style={{ display: "flex", alignItems: "flex-start", gap: "5px", fontSize: "10px", paddingLeft: "14px" }}>
            <span style={{ color: t.fgMuted, flexShrink: 0 }}>⌖</span>
            <span style={{ color: t.fgPlace, fontFamily: SANS }}>{person.deathPlace}</span>
          </div>
        )}
        {person.deathCause && (
          <div style={{ display: "flex", alignItems: "flex-start", gap: "5px", fontSize: "10px", paddingLeft: "14px" }}>
            <span style={{ color: t.fgMuted, flexShrink: 0 }}>↳</span>
            <span style={{ color: t.fgNote, fontFamily: SANS, fontStyle: "italic" }}>{person.deathCause}</span>
          </div>
        )}
        {notes?.map((note, i) => (
          <p key={i} style={{ fontSize: "9px", color: t.fgNote, fontStyle: "italic", marginTop: "2px", lineHeight: 1.45, fontFamily: SANS }}>
            {note}
          </p>
        ))}
      </div>
    </div>
  );
}

function MarriageTag({ date, place, t, lang }: { date?: string; place?: string; t: Theme; lang: Lang }) {
  const tr = TR[lang];
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "8px 10px", flexShrink: 0, gap: "2px" }}>
      <span style={{ color: t.goldDim, fontSize: "17px", lineHeight: 1 }}>♥</span>
      {date && <span style={{ fontSize: "9px", color: t.goldDim, fontWeight: 500, fontFamily: SANS, textAlign: "center" }}>{tr.marriageMat} {date}</span>}
      {place && <span style={{ fontSize: "9px", color: t.fgMuted, fontFamily: SANS, textAlign: "center", lineHeight: 1.3 }}>{place}</span>}
    </div>
  );
}

// Special marriage tag for couples without a marriage certificate
function InferredMarriageTag({ t, lang }: { t: Theme; lang: Lang }) {
  const tr = TR[lang];
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start",
      padding: "10px 10px", flexShrink: 0, gap: "4px", maxWidth: "170px",
    }}>
      <span style={{ color: t.goldDim, fontSize: "17px", lineHeight: 1 }}>♥</span>
      <div style={{
        padding: "7px 10px", borderRadius: "8px", textAlign: "center",
        background: t.infoMarriageBg, border: `1px solid ${t.infoMarriageBorder}`,
      }}>
        <p style={{ fontSize: "9px", color: t.gold, fontWeight: 600, margin: "0 0 5px", fontFamily: SANS, letterSpacing: "0.03em" }}>
          {tr.inferredMarriage}
        </p>
        <p style={{ fontSize: "8px", color: t.fgNote, margin: "0 0 4px", fontFamily: SANS, lineHeight: 1.35, fontStyle: "italic" }}>
          {tr.inferredMarriageDetail}
        </p>
        {[tr.inferredDoc2, tr.inferredDoc11, tr.inferredDoc12].map((line, i) => (
          <p key={i} style={{ fontSize: "8px", color: t.fgPlace, margin: "2px 0 0", fontFamily: SANS, lineHeight: 1.3 }}>
            ✓ {line}
          </p>
        ))}
        <p style={{ fontSize: "8px", color: t.fgMuted, margin: "3px 0 0", fontFamily: SANS, lineHeight: 1.3, fontStyle: "italic" }}>
          ⚠ {tr.inferredDoc3note}
        </p>
      </div>
    </div>
  );
}

function VerticalConnector({ label, t }: { label: string; t: Theme }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "4px 0" }}>
      <div style={{ width: "1px", height: "28px", background: t.connector }} />
      <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "4px 0" }}>
        <div style={{ width: "36px", height: "1px", background: `linear-gradient(to right, transparent, ${t.connector})` }} />
        <span style={{ fontSize: "9px", color: t.connectorText, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: SANS }}>{label}</span>
        <div style={{ width: "36px", height: "1px", background: `linear-gradient(to left, transparent, ${t.connector})` }} />
      </div>
      <div style={{ width: "1px", height: "28px", background: t.connector }} />
    </div>
  );
}

function GenHeader({ roman, title, period, location, t }: { roman: string; title: string; period?: string; location?: string; t: Theme }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "22px" }}>
      <div style={{ flexShrink: 0, width: "36px", height: "36px", borderRadius: "50%", border: `1px solid ${t.genCircle}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: SERIF, fontSize: "12px", color: t.genNum, lineHeight: 1 }}>{roman}</span>
      </div>
      <div>
        <h2 style={{ fontFamily: SERIF, fontSize: "16px", fontWeight: 600, color: t.fgGenTitle, margin: 0, lineHeight: 1.3 }}>{title}</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "3px" }}>
          {period && <span style={{ fontSize: "10px", color: t.fgPeriod, fontFamily: SANS }}>{period}</span>}
          {location && <span style={{ fontSize: "10px", color: t.fgMuted, fontFamily: SANS }}>· {location}</span>}
        </div>
      </div>
      <div style={{ flex: 1, height: "1px", background: `linear-gradient(to right, ${t.connector}, transparent)` }} />
    </div>
  );
}

function SectionLabel({ children, highlight, t }: { children: ReactNode; highlight?: boolean; t: Theme }) {
  return (
    <div style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: highlight ? t.fgLabelMain : t.fgLabelSib, marginBottom: "12px", display: "flex", alignItems: "center", gap: "6px", fontFamily: SANS }}>
      {highlight && <span style={{ color: t.gold }}>★</span>}
      {children}
    </div>
  );
}

function GenSection({ children, highlight, t }: { children: ReactNode; highlight?: boolean; t: Theme }) {
  return (
    <section style={{ borderRadius: "12px", padding: "24px", background: highlight ? t.sectionHighlightBg : t.sectionBg, border: highlight ? `2px solid ${t.sectionHighlightBorder}` : `1px solid ${t.sectionBorder}`, boxShadow: highlight ? t.shadow : "none" }}>
      {children}
    </section>
  );
}

function CtrlBtn({ onClick, children, t }: { onClick: () => void; children: ReactNode; t: Theme }) {
  return (
    <button onClick={onClick} style={{ display: "flex", alignItems: "center", gap: "5px", padding: "5px 12px", borderRadius: "99px", background: t.toggleBg, border: `1px solid ${t.toggleBorder}`, color: t.toggleFg, fontSize: "11px", cursor: "pointer", fontFamily: SANS, fontWeight: 500 }}>
      {children}
    </button>
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────

export default function App() {
  const [dark, setDark] = useState(false);
  const [lang, setLang] = useState<Lang>("es");
  const t = dark ? DARK_T : LIGHT_T;
  const tr = TR[lang];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: t.pageBg, color: t.fg, fontFamily: SANS }}>

      {/* ══ TOP BAR ══════════════════════════════════════════════════════════ */}
      <div style={{ background: t.topBarBg, borderBottom: `1px solid ${t.topBarBorder}`, padding: "8px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px", position: "sticky", top: 0, zIndex: 100 }}>

        {/* Language switcher */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          {(["es", "de"] as Lang[]).map((l) => (
            <button key={l} onClick={() => setLang(l)} style={{
              display: "flex", alignItems: "center", gap: "5px", padding: "4px 11px",
              borderRadius: "99px", cursor: "pointer", fontFamily: SANS, fontSize: "11px", fontWeight: 500,
              background: lang === l ? t.langActiveBg : t.langInactiveBg,
              border: `1px solid ${lang === l ? t.langActiveBorder : t.langInactiveBorder}`,
              color: lang === l ? t.langActiveFg : t.langInactiveFg,
            }}>
              {l === "es" ? "🇲🇽 Español" : "🇩🇪 Deutsch"}
            </button>
          ))}
        </div>

        {/* Right controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <CtrlBtn onClick={() => setDark((d) => !d)} t={t}>
            {dark ? "☀" : "☽"} {dark ? tr.lightMode : tr.darkMode}
          </CtrlBtn>
        </div>
      </div>

      {/* ══ HEADER ═══════════════════════════════════════════════════════════ */}
      <header style={{ borderBottom: `1px solid ${t.headerBorder}`, background: t.headerBg }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "40px 24px 34px", textAlign: "center" }}>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginBottom: "16px" }}>
            <div style={{ width: "56px", height: "1px", background: `linear-gradient(to right, transparent, ${t.goldDim})` }} />
            <span style={{ fontSize: "9px", letterSpacing: "0.4em", textTransform: "uppercase", color: t.eyebrow, fontFamily: SANS }}>{tr.topLabel}</span>
            <div style={{ width: "56px", height: "1px", background: `linear-gradient(to left, transparent, ${t.goldDim})` }} />
          </div>

          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.1rem, 6vw, 3.4rem)", fontWeight: 700, color: t.fgName, letterSpacing: "0.03em", margin: "0 0 6px", lineHeight: 1.1 }}>
            {tr.mainTitle}
          </h1>
          <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: t.goldDim, margin: "0 0 16px", fontFamily: SANS }}>
            {tr.subtitle}
          </p>
          <p style={{ fontSize: "13px", color: t.subtitle, maxWidth: "560px", margin: "0 auto 20px", lineHeight: 1.7, fontFamily: SANS }}>
            {tr.descPre} <strong style={{ color: t.fgNote }}>Lluvia Weber Fernández</strong> {tr.descPost}
          </p>

          {/* Descent path */}
          <div style={{ display: "inline-flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "8px", padding: "9px 18px", borderRadius: "99px", background: t.descentPath, border: `1px solid ${t.descentPathBorder}`, fontSize: "11px", fontFamily: SANS }}>
            <span style={{ color: t.descentHL }}>Adolph Willy Weber</span>
            <span style={{ color: t.fgMuted }}>→</span>
            <span style={{ color: t.descentSub }}>Guillermo Weber Ortiz</span>
            <span style={{ color: t.fgMuted }}>→</span>
            <span style={{ color: t.descentSub }}>Guillermo Cándido Weber Frías</span>
            <span style={{ color: t.fgMuted }}>→</span>
            <span style={{ color: t.descentHL }}>Lluvia Weber Fernández</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "24px" }}>
            <div style={{ width: "70px", height: "1px", background: `linear-gradient(to right, transparent, ${t.goldFaint})` }} />
            <span style={{ color: t.goldFaint, fontSize: "10px" }}>⬥</span>
            <div style={{ width: "70px", height: "1px", background: `linear-gradient(to left, transparent, ${t.goldFaint})` }} />
          </div>
        </div>
      </header>

      {/* ══ LEGEND ═══════════════════════════════════════════════════════════ */}
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "10px 24px", borderBottom: `1px solid ${t.divider}` }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center", fontSize: "10px", color: t.fgLegend, fontFamily: SANS }}>
          <span><span style={{ color: t.goldDim }}>●</span> {tr.legendBorn}</span>
          <span><span style={{ color: t.fgMuted }}>†</span> {tr.legendDied}</span>
          <span><span style={{ color: t.fgMuted }}>↳</span> {tr.legendCause}</span>
          <span><span style={{ color: t.goldDim }}>♥</span> {tr.legendMarriage}</span>
          <span><span style={{ color: t.gold }}>★</span> {tr.legendDirectLine}</span>
          <span><span>⌖</span> {tr.legendPlace}</span>
          <span>🇩🇪 {tr.germanCitizen}</span>
          <span><span style={{ color: "rgba(120,160,220,0.6)" }}>♂</span> {tr.legendMale} / <span style={{ color: "rgba(240,140,140,0.6)" }}>♀</span> {tr.legendFemale}</span>
        </div>
      </div>

      {/* ══ TREE ══════════════════════════════════════════════════════════════ */}
      <main style={{ maxWidth: "960px", margin: "0 auto", padding: "28px 16px" }}>

        {/* GEN I */}
        <GenSection t={t}>
          <GenHeader roman="I" title={tr.gen1Title} period={tr.gen1Period} location={tr.gen1Location} t={t} />
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
            <PersonCard person={adolphWeberSr} t={t} lang={lang} />
            <MarriageTag t={t} lang={lang} />
            <PersonCard person={mariaGeorgy} t={t} lang={lang} />
          </div>
        </GenSection>

        <VerticalConnector label={tr.connectorSon} t={t} />

        {/* GEN II */}
        <GenSection t={t}>
          <GenHeader roman="II" title={tr.gen2Title} period={tr.gen2Period} location={tr.gen2Location} t={t} />

          <div style={{ marginBottom: "14px", padding: "10px 14px", borderRadius: "8px", fontSize: "10px", color: t.warnText, background: t.warnBg, border: `1px solid ${t.warnBorder}`, display: "flex", alignItems: "flex-start", gap: "8px", lineHeight: 1.6, fontFamily: SANS }}>
            <span style={{ flexShrink: 0, color: t.warnIcon, marginTop: "1px" }}>⚠</span>
            <span><strong style={{ color: t.warnStrong }}>{tr.warnVariantsTitle}</strong> {tr.warnVariantsBody}</span>
          </div>

          <div style={{ marginBottom: "18px", padding: "9px 13px", borderRadius: "8px", fontSize: "10px", color: t.warnText, background: t.warnBg, border: `1px solid ${t.warnBorder}`, display: "flex", alignItems: "flex-start", gap: "8px", lineHeight: 1.6, fontFamily: SANS }}>
            <span style={{ flexShrink: 0, color: t.gold, marginTop: "1px", fontSize: "11px" }}>ℹ</span>
            <span><strong style={{ color: t.warnStrong }}>{tr.warnSignifTitle}</strong> {tr.warnSignifBody}</span>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start" }}>
            <PersonCard person={adolphWillyWeber} t={t} lang={lang} />
            <InferredMarriageTag t={t} lang={lang} />
            <PersonCard person={marinaOrtiz} t={t} lang={lang} />
          </div>
        </GenSection>

        <VerticalConnector label={tr.connectorChildren} t={t} />

        {/* GEN III */}
        <GenSection t={t}>
          <GenHeader roman="III" title={tr.gen3Title} period={tr.gen3Period} location={tr.gen3Location} t={t} />
          <div className="gen3-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "0 24px", alignItems: "start" }}>
            <div>
              <SectionLabel highlight t={t}>{tr.labelDirect3}</SectionLabel>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }}>
                <PersonCard person={guillermoWeberOrtiz} t={t} lang={lang} />
                <MarriageTag date="1942" place="Pachuca de Soto, Hidalgo" t={t} lang={lang} />
                <PersonCard person={guadalupeFriasIslas} t={t} lang={lang} />
              </div>
            </div>
            <div style={{ width: "1px", alignSelf: "stretch", background: t.divider, margin: "24px 0" }} />
            <div>
              <SectionLabel t={t}>{tr.labelSib3}</SectionLabel>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "flex-start" }}>
                <PersonCard person={rodolfoManuel} t={t} lang={lang} />
                <PersonCard person={esperanzaMaria} t={t} lang={lang} />
              </div>
            </div>
          </div>
        </GenSection>

        <VerticalConnector label={tr.connectorChildren} t={t} />

        {/* GEN IV */}
        <GenSection t={t}>
          <GenHeader roman="IV" title={tr.gen4Title} period={tr.gen4Period} location={tr.gen4Location} t={t} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <SectionLabel highlight t={t}>{tr.labelDirect4}</SectionLabel>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                <PersonCard person={guillermoCandido} t={t} lang={lang} />
                <MarriageTag date="19 ago 1987" place="Pachuca, Hidalgo" t={t} lang={lang} />
                <PersonCard person={lauraNohemi} t={t} lang={lang} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <SectionLabel t={t}>{tr.labelMaternal4}</SectionLabel>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                <PersonCard person={rubenFernandez} size="small" t={t} lang={lang} />
                <MarriageTag t={t} lang={lang} />
                <PersonCard person={evaJaimeTapia} size="small" t={t} lang={lang} />
              </div>
            </div>
          </div>
        </GenSection>

        <VerticalConnector label={tr.connectorDaughter} t={t} />

        {/* GEN V */}
        <GenSection highlight t={t}>
          <GenHeader roman="V" title={tr.gen5Title} period={tr.gen5Period} location={tr.gen5Location} t={t} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "10px", color: t.connectorText, fontFamily: SANS }}>
              <div style={{ width: "60px", height: "1px", background: `linear-gradient(to left, ${t.connector}, transparent)` }} />
              {tr.labelSolicLabel}
              <div style={{ width: "60px", height: "1px", background: `linear-gradient(to right, ${t.connector}, transparent)` }} />
            </div>
            <PersonCard person={lluviaWeberFernandez} t={t} lang={lang} />
          </div>
        </GenSection>
      </main>

      {/* ══ NOTES ═════════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "0 16px 24px" }}>
        <div style={{ borderRadius: "12px", padding: "24px", background: t.noteBg, border: `1px solid ${t.noteBorder}` }}>
          <h3 style={{ fontFamily: SERIF, fontSize: "18px", fontWeight: 600, color: t.noteTitle, marginBottom: "18px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ color: t.goldDim, fontSize: "14px" }}>⬥</span>
            {tr.notesTitle}
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
            {tr.notes.map((note, i) => (
              <div key={i} style={{ padding: "13px 15px", borderRadius: "8px", background: t.noteCardBg, border: `1px solid ${t.noteCardBorder}` }}>
                <strong style={{ display: "block", fontSize: "11px", color: t.noteLabel, marginBottom: "6px", fontFamily: SANS }}>{note.title}</strong>
                <p style={{ fontSize: "10px", color: t.noteBody, lineHeight: 1.7, margin: 0, fontFamily: SANS }}>{note.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DOCUMENTS ════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "0 16px 48px" }}>
        <div style={{ borderRadius: "12px", padding: "24px", background: t.noteBg, border: `1px solid ${t.noteBorder}` }}>
          <h3 style={{ fontFamily: SERIF, fontSize: "18px", fontWeight: 600, color: t.noteTitle, marginBottom: "18px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ color: t.goldDim, fontSize: "14px" }}>⬥</span>
            {tr.docsTitle}
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 0 }}>
            {tr.docs.map((doc) => (
              <div key={doc.num} style={{ display: "flex", alignItems: "flex-start", gap: "12px", borderBottom: `1px solid ${t.docRowBorder}`, background: doc.num === 2 ? t.warnBg : "transparent", borderRadius: doc.num === 2 ? "6px" : 0, padding: doc.num === 2 ? "10px 8px" : "10px 0" }}>
                <div style={{ flexShrink: 0, width: "22px", height: "22px", borderRadius: "50%", border: `1px solid ${doc.num === 2 ? t.gold : t.goldFaint}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", color: doc.num === 2 ? t.gold : t.goldDim, fontFamily: SANS }}>
                  {doc.num}
                </div>
                <div>
                  <p style={{ fontSize: "11px", color: doc.num === 2 ? t.warnStrong : t.noteLabel, margin: "0 0 2px", fontWeight: 500, fontFamily: SANS }}>{doc.text}</p>
                  <p style={{ fontSize: "10px", color: t.noteBody, margin: 0, lineHeight: 1.5, fontFamily: SANS }}>{doc.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOOTER ════════════════════════════════════════════════════════════ */}
      <footer style={{ borderTop: `1px solid ${t.footerBorder}`, padding: "20px 16px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "8px" }}>
          <div style={{ width: "36px", height: "1px", background: `linear-gradient(to right, transparent, ${t.goldFaint})` }} />
          <span style={{ color: t.goldFaint, fontSize: "10px" }}>⬥</span>
          <div style={{ width: "36px", height: "1px", background: `linear-gradient(to left, transparent, ${t.goldFaint})` }} />
        </div>
        <p style={{ fontSize: "9px", color: t.footerText, letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: SANS }}>{tr.footerText}</p>
      </footer>

      <style>{`
        @media (max-width: 680px) {
          .gen3-grid, .gen4-grid { grid-template-columns: 1fr !important; }
          .gen3-grid > div:nth-child(2), .gen4-grid > div:nth-child(2) { display: none !important; }
        }
      `}</style>
    </div>
  );
}
