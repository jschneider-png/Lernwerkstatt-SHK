// HEIZUNGSTECHNIK KLASSE 12 – ZENTRALE KURSPFLEGE
// Diese Datei in GitHub bearbeiten (Stift -> Commit changes).
// Nur die Texte zwischen den Anfuehrungszeichen aendern. Keine Schuelerdaten eintragen.
// Leere Links werden NICHT als kaputte Buttons angezeigt.
window.LEHRKRAFT = {
  // Material pro Blockwoche. Links zu eigenen PDFs oder zu ByCS hier eintragen.
  KURS_LINKS: {
    1: { mebis: "", arbeitsblaetter: "", videos: "", zusatzmaterial: "", drive: "" },
    2: { mebis: "", arbeitsblaetter: "", videos: "", zusatzmaterial: "", drive: "" },
    3: { mebis: "", arbeitsblaetter: "", videos: "", zusatzmaterial: "", drive: "" },
    4: { mebis: "", arbeitsblaetter: "", videos: "", zusatzmaterial: "", drive: "" },
    5: { mebis: "", arbeitsblaetter: "", videos: "", zusatzmaterial: "", drive: "" },
    6: { mebis: "", arbeitsblaetter: "", videos: "", zusatzmaterial: "", drive: "" },
    7: { mebis: "", arbeitsblaetter: "", videos: "", zusatzmaterial: "", drive: "" },
    8: { mebis: "", arbeitsblaetter: "", videos: "", zusatzmaterial: "", drive: "" },
    9: { mebis: "", arbeitsblaetter: "", videos: "", zusatzmaterial: "", drive: "" },
    10: { mebis: "", arbeitsblaetter: "", videos: "", zusatzmaterial: "", drive: "" },
    11: { mebis: "", arbeitsblaetter: "", videos: "", zusatzmaterial: "", drive: "" },
    12: { mebis: "", arbeitsblaetter: "", videos: "", zusatzmaterial: "", drive: "" },
  },
  // Materialbuttons fuer JEDE STUNDE: Arbeitsblaetter und Zusatzmaterial.
  // Beispiel BW 1 / Stunde 2: 2: { arbeitsblaetter: "https://...", zusatzmaterial: "https://..." }
  // Bei leerem Link wird der Button als "Link folgt" dargestellt.
  STUNDEN_MATERIAL: {
    1: { 1: { arbeitsblaetter: "", zusatzmaterial: "" }, 2: { arbeitsblaetter: "", zusatzmaterial: "" }, 3: { arbeitsblaetter: "", zusatzmaterial: "" }, 4: { arbeitsblaetter: "https://lernplattform.bycs.de/mod/resource/view.php?id=104083598", zusatzmaterial: "" } },
    2: { 1: { arbeitsblaetter: "", zusatzmaterial: "" }, 2: { arbeitsblaetter: "https://lernplattform.bycs.de/mod/resource/view.php?id=104083319", uebung: "https://lernplattform.bycs.de/mod/resource/view.php?id=104084210", zusatzmaterial: "bw2-s2-tafelbild-jahresheizoelbedarf.html" }, 3: { arbeitsblaetter: "", zusatzmaterial: "" }, 4: { arbeitsblaetter: "", zusatzmaterial: "" } },
    3: { 1: { arbeitsblaetter: "", zusatzmaterial: "" }, 2: { arbeitsblaetter: "", zusatzmaterial: "" }, 3: { arbeitsblaetter: "", zusatzmaterial: "" }, 4: { arbeitsblaetter: "", zusatzmaterial: "" } },
    4: { 1: { arbeitsblaetter: "", zusatzmaterial: "" }, 2: { arbeitsblaetter: "", zusatzmaterial: "" }, 3: { arbeitsblaetter: "", zusatzmaterial: "" }, 4: { arbeitsblaetter: "", zusatzmaterial: "" } },
    5: { 1: { arbeitsblaetter: "", zusatzmaterial: "" }, 2: { arbeitsblaetter: "", zusatzmaterial: "" }, 3: { arbeitsblaetter: "", zusatzmaterial: "" }, 4: { arbeitsblaetter: "", zusatzmaterial: "" } },
    6: { 1: { arbeitsblaetter: "", zusatzmaterial: "" }, 2: { arbeitsblaetter: "", zusatzmaterial: "" }, 3: { arbeitsblaetter: "", zusatzmaterial: "" }, 4: { arbeitsblaetter: "", zusatzmaterial: "" } },
    7: { 1: { arbeitsblaetter: "", zusatzmaterial: "" }, 2: { arbeitsblaetter: "", zusatzmaterial: "" }, 3: { arbeitsblaetter: "", zusatzmaterial: "" }, 4: { arbeitsblaetter: "", zusatzmaterial: "" } },
    8: { 1: { arbeitsblaetter: "", zusatzmaterial: "" }, 2: { arbeitsblaetter: "", zusatzmaterial: "" }, 3: { arbeitsblaetter: "", zusatzmaterial: "" }, 4: { arbeitsblaetter: "", zusatzmaterial: "" } },
    9: { 1: { arbeitsblaetter: "", zusatzmaterial: "" }, 2: { arbeitsblaetter: "", zusatzmaterial: "" }, 3: { arbeitsblaetter: "", zusatzmaterial: "" }, 4: { arbeitsblaetter: "", zusatzmaterial: "" } },
    10: { 1: { arbeitsblaetter: "", zusatzmaterial: "" }, 2: { arbeitsblaetter: "", zusatzmaterial: "" }, 3: { arbeitsblaetter: "", zusatzmaterial: "" }, 4: { arbeitsblaetter: "", zusatzmaterial: "" } },
    11: { 1: { arbeitsblaetter: "", zusatzmaterial: "" }, 2: { arbeitsblaetter: "", zusatzmaterial: "" }, 3: { arbeitsblaetter: "", zusatzmaterial: "" }, 4: { arbeitsblaetter: "", zusatzmaterial: "" } },
    12: { 1: { arbeitsblaetter: "", zusatzmaterial: "" }, 2: { arbeitsblaetter: "", zusatzmaterial: "" }, 3: { arbeitsblaetter: "", zusatzmaterial: "" }, 4: { arbeitsblaetter: "", zusatzmaterial: "" } },
  },
  // Einzelne Stunden: Direktlink zu ByCS, PDF, Videosammlung usw.
  STUNDEN_LINKS: {
    1: { stunde1: "", stunde2: "", stunde3: "", stunde4: "" },
    2: { stunde1: "", stunde2: "", stunde3: "", stunde4: "" },
    3: { stunde1: "", stunde2: "", stunde3: "", stunde4: "" },
    4: { stunde1: "", stunde2: "", stunde3: "", stunde4: "" },
    5: { stunde1: "", stunde2: "", stunde3: "", stunde4: "" },
    6: { stunde1: "", stunde2: "", stunde3: "", stunde4: "" },
    7: { stunde1: "", stunde2: "", stunde3: "", stunde4: "" },
    8: { stunde1: "", stunde2: "", stunde3: "", stunde4: "" },
    9: { stunde1: "", stunde2: "", stunde3: "", stunde4: "" },
    10: { stunde1: "", stunde2: "", stunde3: "", stunde4: "" },
    11: { stunde1: "", stunde2: "", stunde3: "", stunde4: "" },
    12: { stunde1: "", stunde2: "", stunde3: "", stunde4: "" },
  },
  // Eigene Unterrichtsergaenzungen: Stundenzaehlung 1 bis 4.
  // Beispiel: 1: { 2: { text: "Neuer Arbeitsauftrag", tipp: "Bei der Messung beachten ...", bild: "materialien/foto.jpg" } }
  ZUSATZINHALTE: {
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},
    10: {},
    11: {},
    12: {},
  },
  // OPTIONAL: Leitfragen und Stundenueberschriften ohne HTML-Aenderung anpassen.
  // Beispiel: 1: { problem: "Leitfrage Blockwoche 1", stunden: { 2: "Neue Ueberschrift" } }
  BLOCKWOCHEN: {},
  // OPTIONAL: Lerninhalte einzelner Stunden gezielt anpassen.
  // Beispiel: 1: { 1: { question: "Neue Leitfrage", practice: "Neuer Praxisauftrag" } }
  LERNEINHEITEN: {}
};
