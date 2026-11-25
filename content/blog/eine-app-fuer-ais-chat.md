---
title: "Eine App für AIS.chat"
date: 2026-11-24
draft: false
description: "AIS.chat läuft im Browser. Was passiert, wenn man daneben ein eigenes, natives Programm stellt, das dieselben Konten nutzt? Ein Experiment über das, was ein Client lokal leisten kann – und über die Grenzen, die ein Webdienst ohne Schnittstelle für seine Nutzerinnen und Nutzer setzt."
summary: "In drei Tagen ist mit KI-Agenten ein nativer Client für AIS.chat entstanden: AIS.ChatCraft. Der Beitrag zeigt, was ein solcher Client auf dem eigenen Rechner zusätzlich kann – durchsuchbarer Verlauf, Dokumente, Arbeitsblätter und H5P-Quiz, Word-, PDF-, Excel- und Kalender-Export, Freigaben mit Vertrauensprüfung, Schülernamen, die das Gerät gar nicht erst verlassen –, und benennt die Grenzen: keine Schnittstelle für Lehrkräfte, keine Werkzeugaufrufe, Token-Punkte und die Frage, was das Gerät verlassen darf."
tags: ["KI", "AIS", "AIS.chat", "Schule", "Datenschutz", "Agentic AI", "Open Source"]
translationKey: "an-app-for-ais-chat"
heroImage: "/img/blog/eine-app-fuer-ais-chat/hero-eine-app-fuer-ais-chat.png"
heroAlt: "Flache isometrische Vektor-Illustration in Marineblau, Eisblau und Weiß mit roten Akzentpunkten: Links ein aufgeklappter Laptop, auf dessen Bildschirm gestapelte Dokumentkarten, ein Whiteboard mit Haftnotizen und einer Mindmap sowie ein kleines Schild liegen. In der Mitte eine durchsichtige Filterscheibe, durch die kleine Datenkarten wandern; einige bekommen vorher ein leeres Etikett als Platzhalter, rote Punkte markieren die Prüfstellen. Rechts eine große Wolke aus gestapelten Serverblöcken, mit dem Laptop nur über ein dünnes Bündel feiner Linien verbunden. Am unteren Rand blasse Schulgebäude und ein Knotennetz."
---

> These: Ein Chat im Browser ist ein guter Anfang. Die interessanteren Dinge passieren aber vor dem Senden und nach der Antwort – und dafür braucht es einen Ort auf dem eigenen Rechner.

Eine Lehrkraft bereitet am Donnerstagabend den Elternabend vor. Sie nutzt AIS.chat, weil ihr Land es bereitstellt und weil es datenschutzrechtlich geklärt ist. Die Einladung soll AIS.chat freundlich formulieren. In ihrem Entwurf stehen aber die Namen der Elternvertreterinnen und ein Satz über einen Schüler, der nach den Ferien die Klasse wechselt. Die Nutzungsbedingungen sind eindeutig: keine personenbezogenen Daten. Also nimmt sie jeden Namen von Hand heraus. Und die Vorlage vom letzten Jahr liegt als `.doc` auf dem Schulrechner. Die nimmt AIS.chat nicht an.

Das sind keine Fehler von AIS.chat. Ein Webdienst sieht nur, was im Browserfenster ankommt. Was vorher auf dem Rechner liegt und was nachher mit der Antwort passiert, bleibt ihm verborgen.

Genau dort setzt das Experiment an, über das ich hier schreibe.

## Was ich gebaut habe – und wie

AIS.ChatCraft ist ein natives Programm für AIS.chat und andere KI-Dienste. Es läuft unter Linux, macOS und Windows, ist in Rust geschrieben und hat eine native Oberfläche. Eine Web-Engine kommt nur an einer Stelle zum Einsatz: Interaktive Lern-Apps öffnet das Programm in einem eigenen, abgeschotteten Vorschaufenster. Man meldet sich mit demselben Konto an wie im Web. Der Code liegt offen auf [GitHub](https://github.com/FWU-DE/aiscraft) unter MIT- bzw. Apache-Lizenz.

Wichtig vorab: AIS.ChatCraft ist kein offizielles Werkzeug des AIS.chat-Teams und kein Produkt des FWU, sondern ein Community-Experiment. So steht es auch beim ersten Start im Programm. Es soll zeigen, was möglich ist, damit wir über die richtigen Dinge diskutieren.

Bemerkenswert finde ich weniger das Programm als seine Entstehung. Der erste Commit ist vom 23. November. Drei Tage später stehen rund 64.000 Zeilen Rust, über 440 automatische Tests und eine CI-Pipeline, die auf drei Betriebssystemen baut und testet. 50 Issues sind erledigt. Geschrieben haben den Code im Wesentlichen KI-Agenten, die parallel an GitHub-Issues arbeiten. Meine Rolle: Ziele setzen, Ergebnisse ansehen, Entscheidungen treffen.

Damit das nicht im Blindflug passiert, hat das Projekt sogenannte Quality Gates: Tests, die eine Eigenschaft festhalten, die mir wichtig ist. Einer prüft, dass kein Name aus der Klassenliste in einer Anfrage an den Dienst landet. Ein anderer zählt, wie viele Dateien das Programm beim Start nachlädt. Als die Favoriten fast eine Minute brauchten, kam der Fix zusammen mit so einem Test – jetzt sind es drei Sekunden. Wie sich diese Art zu arbeiten anfühlt, wäre einen eigenen Beitrag wert.

## Lokal heißt: Der Verlauf gehört wieder der Lehrkraft

Im Browser ist der Chatverlauf eine Liste auf einem Server. In AIS.ChatCraft liegt jeder Chat zusätzlich in einer Datenbank auf dem Rechner. Das klingt unspektakulär. Es verändert aber, was man damit tun kann.

- **Suchen.** Eine Volltextsuche über alle Chats, auch über die aus AIS.chat übernommenen. „Was hatte ich im Frühjahr zur Bruchrechnung?“ dauert Sekunden.
- **Ordnen.** Projekte bündeln Chats mit eigenen Anweisungen – etwa „Biologie 7b“ oder „Elternabend“.
- **Erinnern.** Ein Gedächtnis entsteht nur aus den eigenen Worten der Lehrkraft („Merke dir: Ich unterrichte Biologie und Chemie“). Antworten, Webseiten und Dateien können keine Notizen anlegen. Jede Notiz zeigt, woher sie stammt.
- **Weiterarbeiten.** Aus einer Antwort wird mit einem Klick ein Dokument oder ein Whiteboard. Formeln, Diagramme und Mindmaps werden gezeichnet statt als Quelltext angezeigt. Word, PDF, Excel und PowerPoint entstehen direkt im Programm.
- **Unterrichtsmaterial.** Interaktive Arbeitsblätter lassen sich am Rechner lösen und mit Druckvorschau als Arbeits- und Lösungsblatt drucken. H5P-Quiz entstehen als eigene Inhalte und lassen sich als `.h5p` speichern – für Moodle, Mebis oder ByCS. Warum ich H5P trotzdem für eine Übergangstechnologie halte, steht in [„Ist H5P tot?“](/blog/ist-h5p-tot/).
- **Vergleichen.** Nach „Neu erzeugen“ bleibt die alte Antwort erhalten. Man blättert zwischen den Fassungen.

<figure class="jr-contained-figure">
  <img class="jr-contain-image" src="/img/blog/eine-app-fuer-ais-chat/chat-mit-dokument.png" alt="Bildschirmfoto von AIS.ChatCraft: links eine nachtblaue Seitenleiste mit Projekten, Dokumenten und Chats, in der Mitte eine Antwort zur Photosynthese mit nummerierten Schritten, Formel, Tabelle und Codeblock, rechts dieselbe Antwort als bearbeitbares Dokument mit Feld „Mit KI überarbeiten“.">
</figure>

*Aus einer Antwort wird ein Dokument, das man weiter bearbeiten kann. Alle Inhalte im Bild sind Demo-Daten.*

Nichts davon braucht einen neuen Server. Es braucht nur einen Ort, an dem die Daten der Lehrkraft liegen dürfen: ihren Rechner.

## Die spannendsten Funktionen passieren vor dem Senden

Am meisten interessiert mich, was ein Client tun kann, *bevor* eine Nachricht AIS.chat erreicht. Denn hier entscheidet sich, welche Daten das Gerät verlassen.

Das deutlichste Beispiel ist Pseudonymisierung. Die Nutzungsbedingungen von AIS.chat verlangen, keine personenbezogenen Daten einzugeben. In Bayern heißt es ausdrücklich: keine Namen, Adressen oder Leistungsdaten. Im Alltag hängt diese Regel allein an der Aufmerksamkeit der Lehrkraft. Ein Client kann ihr dabei helfen.

In AIS.ChatCraft heißt die Funktion „Namen schützen“. Die Lehrkraft liest einmal ihre Klassenliste ein, als CSV, Excel-Tabelle oder Kontaktdatei. Vor dem Senden ersetzt das Programm Namen durch Platzhalter: Aus „Lea Müller“ wird „[S1] [N1]“, aus „Leas“ wird „[S1]s“. E-Mail-Adressen, Telefonnummern, IBANs, Geburtsdaten und Adressen erkennt es an festen Mustern, die IBAN sogar an ihrer Prüfsumme. Über dem Eingabefeld steht genau der Text, der rausgeht. Wo das Programm unsicher ist – „Mark“ kann ein Name sein oder ein Wort –, ersetzt es trotzdem. Im Zweifel soll nichts rausgehen. Ein Klick lässt den Treffer stehen.

<figure class="jr-contained-figure">
  <img class="jr-contain-image" src="/img/blog/eine-app-fuer-ais-chat/namen-schuetzen-vorschau.png" alt="Bildschirmfoto von AIS.ChatCraft: Über dem Eingabefeld zeigt eine Vorschau „Geht so raus – 7 Angaben ersetzt“. Im Text stehen Platzhalter wie [S1] [N1], [Geburtsdatum 1] und [E-Mail 1], darunter Chips wie „Lea als [S1]“ und „lea.mueller@example.org als [E-Mail 1]“. Im Eingabefeld steht der Originaltext mit den erfundenen Namen.">
</figure>

*Was AIS.chat bekommt, steht über dem Eingabefeld. Die Namen sind erfunden.*

AIS.chat sieht keinen echten Namen, auch nicht in seinem eigenen Verlauf. Kommt die Antwort zurück, setzt das Programm die Namen lokal wieder ein – beim Anzeigen, Kopieren und Exportieren. Die Zuordnung „[S1] = Lea“ bleibt auf dem Rechner. Das Muster ist nicht neu. Microsofts [Presidio](https://github.com/data-privacy-stack/presidio) erkennt personenbezogene Daten, [LLM Guard](https://github.com/protectai/llm-guard) und [PasteGuard](https://github.com/sgasser/pasteguard) ersetzen sie und übersetzen zurück. Neu ist, es dorthin zu legen, wo Lehrkräfte ohnehin arbeiten.

Die Grenzen sind klar: Spitznamen, Tippfehler und Namen in Bildern oder eingescannten PDFs erkennt das Programm nicht. Eine lokale Namenserkennung für Namen, die in keiner Liste stehen, ist als nächster Schritt geplant ([Issue #73](https://github.com/FWU-DE/aiscraft/issues/73)).

Zwei Dinge gehören dazu, sonst wird aus dem Sicherheitsnetz ein Missverständnis. Pseudonymisierte Daten bleiben im Sinne der DSGVO personenbezogen – die Funktion ist eine zusätzliche Sicherung, kein Freibrief. Und sie macht AIS.chat nicht zu einem Werkzeug für Zeugnisse oder Noten. Die Nutzungsbedingungen schließen die Benotung ausdrücklich aus. Daran ändert kein Client etwas.

Weitere Beispiele aus derselben Kategorie:

- **Dateien umwandeln.** AIS.chat nimmt `.docx`, `.pdf` oder `.xlsx` an, aber kein `.doc`, kein `.ppt` und keine HEIC-Fotos vom iPhone. Ein Client kann sie lokal umwandeln und das Ergebnis hochladen.
- **Weniger schicken.** Nur die Seiten 3 bis 7 eines PDFs, nur ein Tabellenblatt. Das spart Token-Punkte.
- **Metadaten entfernen.** Fotos von der Klassenfahrt tragen oft GPS-Daten. Die müssen nicht mitgehen.

Keine dieser Funktionen verlangt etwas von AIS.chat. Sie passieren auf dem Rechner, und die Lehrkraft sieht vor dem Senden, was rausgeht.

## Die erste Grenze: Für Lehrkräfte gibt es keine Schnittstelle

Jetzt zu den Grenzen. Die wichtigste zuerst.

Für Lehrkräfte hat AIS.chat keine Schnittstelle. Der Client spricht deshalb mit denselben internen Endpunkten, die auch die Web-Oberfläche nutzt. Technisch sind das die „Server Actions“ einer Next.js-Anwendung. Ihre Kennungen liest das Programm aus den JavaScript-Dateien der Website. Angemeldet ist es über das Sitzungs-Cookie, das nach acht Stunden abläuft.

Dabei gibt es im offenen Quellcode von AIS.chat durchaus eine API. Sie spricht das verbreitete OpenAI-Format, mit Chat, Modellliste, Bildern und Verbrauch. Aber ihre Schlüssel gehören zu Projekten und werden von Administratoren vergeben, nicht von Lehrkräften. Und Werkzeugaufrufe kennt sie nicht. Was ihr für einen vollwertigen Client fehlt, habe ich in [Issue #70](https://github.com/FWU-DE/aiscraft/issues/70) aufgeschrieben: Werkzeugaufrufe, strukturierte Ausgaben, eine Anmeldung pro Lehrkraft über VIDIS mit einer Laufzeit, die auch einen Zeitplan am frühen Morgen übersteht, und Abrechnung über die eigenen Token-Punkte.

Das funktioniert. Es ist aber fragil. Jede Änderung an AIS.chat kann den Client brechen. Deshalb steht in den Projektregeln, den Client mindestens einmal pro Woche mit dem [öffentlichen Quellcode von AIS.chat](https://github.com/FWU-DE/ais-chat) abzugleichen. Dass dieser Quellcode offen liegt, macht das Experiment überhaupt erst seriös möglich.

Die Nutzungsbedingungen von AIS.chat sagen zu Programmen von Dritten übrigens nichts – weder erlaubt noch verboten. Sie sagen aber zweierlei: AIS.chat steht „ausschließlich für die eigene Verwendung“ zur Verfügung. Und „übermäßige oder missbräuchliche Nutzung“ kann zur Sperrung führen. Ein Client, der etwa nach Zeitplan automatisch Anfragen schickt, muss sich daran messen lassen.

Für mich ist das die eigentliche Erkenntnis: Ein Dienst, der eine dokumentierte Schnittstelle anbietet, lädt zu genau solchen Ergänzungen ein. Ein Dienst ohne sie lässt nur Nachbauten zu, die bei jedem Update wackeln. Das ist dieselbe Frage nach den „Türen“, die ich im [Beitrag über Agenten](/blog/drei-tueren-fuer-agenten/) gestellt habe – nur diesmal für einen Client statt für einen Agenten.

## Die zweite Grenze: AIS.chat ruft keine Werkzeuge auf

Moderne KI-Assistenten rufen Werkzeuge auf. Claude liest eine Datei, durchsucht einen Kalender oder legt ein Dokument an. AIS.chat hat eigene Werkzeuge auf dem Server – Websuche, Diagramme, Bilderzeugung. Werkzeuge des Clients kann es nicht aufrufen.

Mein erster Gedanke war eine Umgehung: Man erklärt dem Modell im Prompt, dass es Aktionen anfordern darf. Der Client führt sie aus und schickt das Ergebnis zurück. Ich habe das prüfen lassen und mich dagegen entschieden. Jede Runde kostet Token-Punkte. Die Modelle halten das Format nicht zuverlässig ein und erfinden im Zweifel Ergebnisse. Und was der Client zurückschickt, steht im Verlauf, als hätte es die Lehrkraft geschrieben.

Was dagegen gut funktioniert, ist ein Ausgabeformat. Der Client beschreibt im Prompt kurz, wie etwa ein Arbeitsblatt oder ein H5P-Quiz aussieht. Das Modell antwortet in *einer* Runde mit einem markierten Block, der Client macht daraus ein bearbeitbares Objekt. Keine Schleife, keine Rückgabe, kein Mehraufwand. Auf diesem Weg entstehen in AIS.ChatCraft die Diagramme, Lern-Apps, Arbeitsblätter, H5P-Quiz, Whiteboards und Kalenderdateien aus AIS.chat. Die Formatbeschreibung steht im Chat eingeklappt unter der Frage, damit der Verlauf lesbar bleibt.

## Die dritte Grenze: Lokal ist nicht automatisch privat

Ein lokales Programm klingt nach Datenschutz. Das stimmt nur zum Teil.

Was an AIS.chat geht, verarbeitet AIS.chat – zu dessen Regeln. Verantwortlich im Sinne der DSGVO ist laut Datenschutzerklärung die Schule. Das FWU betreibt das System als Auftragsverarbeiter. Ein Client kann weniger schicken, aber nicht weniger verantworten.

Und er bringt eigene Fragen mit. Chats als Datei auf dem eigenen Rechner zu speichern, sieht AIS.chat selbst vor – es gibt dafür einen Export. Eine lokale Datenbank ist im Kern dasselbe, nur dauerhaft und durchsuchbar. Damit gelten für sie die Regeln der Schule für Dienst- und Privatgeräte. Was passiert, wenn derselbe Client auch an Claude oder einen anderen Anbieter schickt? Dann gelten dort andere Verträge, und die Entscheidung liegt bei der Lehrkraft und ihrer Schule. AIS.ChatCraft legt Zugangsdaten deshalb in den Schlüsselbund des Betriebssystems, nie in die Datenbank. Und jede Aktion, die etwas verändert, braucht ein ausdrückliches Ja.

Eine Pflicht aus den Nutzungsbedingungen kann ein Client sogar leichter machen: Ausgaben, die weiterverwendet werden, müssen als KI-generiert gekennzeichnet werden, der Prompt soll mit angegeben werden. AIS.ChatCraft schreibt deshalb beim Speichern automatisch „Erstellt mit KI (AIS.chat, Modell …), Datum“ unter Word, PDF, Excel, Arbeitsblätter, H5P und Kalenderdateien – auf Wunsch mit dem Prompt.

Ehrlich gesagt ist das der Teil, bei dem ich am meisten Diskussion erwarte und auch brauche. Ein Client verschiebt Verantwortung von einem betriebenen Dienst auf ein Gerät. Für eine einzelne Lehrkraft kann das ein Gewinn sein. Für eine Schule mit verwalteten Geräten sieht die Rechnung anders aus.

## Ein Rundgang: Was das Programm heute kann

Bisher ging es um Ideen. Hier der Stand vom 25. November, Funktion für Funktion. Alles läuft mit AIS.chat, wo nichts anderes steht. Einiges geht nur mit Diensten, die Werkzeuge kennen – Claude oder ein OpenAI-kompatibler Server. Das sage ich jeweils dazu.

### Ankommen und chatten

- **Startseite.** Ohne offenen Chat zeigt das Programm eine Startseite: Eingabefeld oben, darunter Vorschläge wie „Stundenentwurf“ oder „Elternbrief“, die zuletzt bearbeiteten Dinge, Favoriten, anstehende Zeitpläne und das verbleibende Kontingent an Token-Punkten.
- **Assistenten und Lernszenarien.** „Entdecken“ zeigt alles, was AIS.chat anbietet – eigene, an der Schule geteilte und offizielle Einträge. Ein Stern macht einen Eintrag zum Favoriten. Der gilt auch im Browser.
- **Mehrere Dienste.** Neben AIS.chat lassen sich Claude, OpenAI oder ein Modell auf dem eigenen Rechner (Ollama, LM Studio) eintragen. Das Modell wechselt man mitten im Chat.
- **Fassungen.** Bearbeiten und „Neu erzeugen“ überschreiben nichts. Mit ‹ 1/2 › blättert man zwischen den Antworten.
- **Nachdenken.** Modelle, die vor der Antwort nachdenken, zeigen eine Zusammenfassung davon zugeklappt über der Antwort. Bei AIS.chat stehen dort die Analyseschritte.
- **Antwortstil.** Pro Chat: Normal, Knapp, Erklärend, Formell – oder ein eigener Stil nach einem Beispieltext, etwa dem letzten Elternbrief. Übernommen wird nur der Ton, nicht der Inhalt.
- **Vorübergehender Chat.** Ein Chat, der nur im Arbeitsspeicher liegt. Er erscheint in keiner Liste, keiner Suche und keinem Gedächtnis. Schließt man ihn, ist er weg. Bei AIS.chat selbst steht er trotzdem im Verlauf – das sagt das Programm auch.
- **Schnelleingabe.** Ein Tastenkürzel des Desktops ruft `aiscraft --quick` auf. Das Fenster kommt mit einem leeren Chat nach vorn, auf Wunsch mit einem Bildschirmfoto als Anhang. Das Programm liest dafür keine Tasten mit.
- **Diktieren und Vorlesen.** Gesprochenes landet als Text im Eingabefeld (dafür braucht es einen Dienst mit Spracherkennung). Antworten liest AIS.chat auf Wunsch vor.

### Mit Antworten weiterarbeiten

- **Speichern als.** Jede Antwort geht mit einem Klick als Word, PDF oder Markdown auf die Festplatte. Excel nimmt die Tabellen der Antwort, eine pro Blatt, und Zahlen bleiben Zahlen.
- **Termine.** Stehen Daten in der Antwort – als Kalenderblock oder als Tabelle mit Datum –, speichert das Programm sie als `.ics`-Datei für Outlook, Thunderbird oder das iPad.
- **Lesbarkeit.** Unter jeder Antwort auf Wunsch: Wortzahl, Flesch-Wert, LIX, etwa welche Klassenstufe und welche Sätze zu lang sind. Gerechnet wird auf dem Rechner. Für Differenzierung und Leichte Sprache ist das ein schneller Blick, ob der Text passt.
- **Dokumente und Whiteboards.** Aus einer Antwort wird ein bearbeitbares Dokument oder ein Whiteboard. „Mit KI überarbeiten“ legt eine neue Fassung an, die alte bleibt. Aus einer Gliederung wird eine Mindmap.
- **Whiteboards direkt aus AIS.chat.** „Erstellen › Whiteboard“ bittet um eine Mindmap, einen Cluster, einen Ablauf oder eine Zeitleiste. AIS.chat liefert die Inhalte, das Programm ordnet sie an.
- **Formeln und Diagramme** erscheinen gezeichnet statt als Quelltext.
- **Links prüfen.** Ein Klick fragt jede Adresse in einer Antwort einmal an und streicht tote Links durch. Erfundene Quellen fallen so schneller auf.
- **Belege.** Mit Claude gehen angehängte Dateien als Dokumente mit. Die Antwort nennt dann, welche Stelle welche Aussage belegt. Ein Klick zeigt die Stelle in der Datei.
- **Gemeinsam bearbeiten.** Dokumente und Whiteboards lassen sich live mit Kolleginnen und Kollegen teilen, über einen Server, den etwa der Schulträger betreibt. Ohne Server bleibt alles lokal.

### Unterrichtsmaterial

- **Arbeitsblätter** mit neun Aufgabentypen: Auswahl, richtig oder falsch, Lückentext, Zuordnen, Reihenfolge, kurze Antwort, Zahl mit Toleranz, freier Text und Info-Text. Man löst sie am Rechner, prüft sie und druckt sie als Arbeits- und Lösungsblatt, mit Druckvorschau. Punkte lassen sich abschalten, global und pro Blatt.
- **Lern-Apps** sind kleine interaktive Programme in einer einzigen HTML-Datei, etwa ein Bruch-Trainer. Sie laufen in einem abgeschotteten Fenster, das keine Verbindung nach außen erlaubt. Gespeichert laufen sie offline in jedem Browser.
- **H5P-Quiz** entstehen als eigene Inhalte und gehen als `.h5p`-Datei in Moodle, Mebis oder ByCS. Vorhandene `.h5p`-Dateien lassen sich öffnen und bearbeiten.

### Ordnen, suchen, erinnern

- **Suche.** Strg+F sucht im offenen Chat und springt von Treffer zu Treffer. Die Suche über alle Chats findet zuerst Titel, dann Inhalte.
- **Projekte** bündeln Chats mit gemeinsamen Anweisungen.
- **Gedächtnis.** Notizen entstehen nur aus den eigenen Worten („Merke dir: …“). Jede Notiz zeigt, woher sie stammt.
- **Erinnern.** Passende Ausschnitte früherer Chats gehen auf Wunsch als Kontext mit. Unter der Nachricht steht, was mitging.
- **Quellen pro Chat.** Ein Menü legt fest, was ein Chat nutzen darf: Gedächtnis, Projektanweisungen, frühere Chats, Websuche, Konnektoren. Chats mit Claude erreichen AIS.chat nicht ungefragt.

### Dateien vorbereiten

- **Umwandeln.** `.doc`, `.xls`, `.ppt`, RTF, E-Books, E-Mails und iPhone-Fotos wandelt das Programm vor dem Hochladen in Formate um, die AIS.chat annimmt.
- **Teilweise senden.** „Nur Seiten 3–7“, „Nur Blatt Noten“, „Nur Folien 2–5“ – auf dem Anhang eingetragen.
- **Metadaten entfernen.** Standort und Kameradaten bleiben auf dem Gerät.

### Schützen und kontrollieren

- **Namen schützen** – siehe oben.
- **KI-Kennzeichnung.** Was man aus einer AIS.chat-Antwort speichert, trägt den Hinweis „Erstellt mit KI“, wie es die Nutzungsbedingungen verlangen. Kopieren bleibt unverändert. Ein Rechtsklick bietet „Mit Kennzeichnung kopieren“.
- **Verbrauch.** Token-Punkte von AIS.chat, Tokens pro Dienst und Monat, bei Claude die Kosten, dazu eine Monatsgrenze, ab der das Programm vor dem Senden nachfragt.
- **Tresor.** Zugangsdaten für Konnektoren setzt das Programm selbst ein. Das Modell sieht nur Platzhalter.

### Werkzeuge und Automatisierung (mit Claude oder OpenAI-kompatiblen Diensten)

- **Konnektoren** sind MCP-Server, etwa für den Obsidian-Tresor oder lokale Dateien. Modelle rufen ihre Werkzeuge auf.
- **Freigaben und Vertrauensprüfung.** Was nur liest, läuft direkt. Alles andere läuft nur, wenn man darum gebeten hat. Sonst fragt das Programm – mit genau den Angaben, die ausgeführt würden, Empfänger und Datum fett. Eine Bitte deckt alle Schritte, die sie braucht. Eine Freigabe läuft nie zweimal, auch nicht nach einem Absturz.
- **Eigene Regeln.** „Termine immer eintragen“ erlaubt, „Nie Mails an Eltern senden“ verbietet. Verbote gewinnen immer.
- **Aktionsprotokoll.** Jede Aktion steht mit Ziel und Begründung in einem Protokoll: „Nur lesen“, „Deine Bitte“ mit den eigenen Worten, „Deine Regel“ oder „Deine Freigabe“. Es lässt sich als Tabelle exportieren.
- **Zeitpläne und Aufgaben.** Ein Auftrag läuft wiederkehrend, etwa werktags um sieben. Aufgaben laufen im Hintergrund, während man weiterchattet. Beides führt nie etwas aus, das eine Freigabe braucht.
- **Dateien vom Modell.** Excel mit Formeln, PowerPoint mit Sprechernotizen, Word und PDF – ohne dass das Programm Code des Modells ausführt.

### Aussehen

Drei Looks: „Modern“, „Glas“ und „Omarchy“, das die Farben des Desktops übernimmt. Dazu hell, dunkel oder wie das System. Beim ersten Start fragt das Programm danach – und weist darauf hin, dass es ein Community-Experiment ist.

Die Liste ist lang. Und gerade das zeigt für mich die eigentliche Pointe: Fast nichts davon braucht etwas Neues von AIS.chat. Es braucht nur einen Ort auf dem Rechner der Lehrkraft.

## Was ich daraus mitnehme

Wenn ich das für mich zusammenfasse: Ein eigener Client für AIS.chat ist möglich, und er kann Lehrkräften Dinge abnehmen, die ein Browserfenster nicht leisten kann. Die wertvollsten davon passieren vor dem Senden – Namen ersetzen, Dateien umwandeln, weniger verschicken. Sie helfen, die Regeln von AIS.chat einzuhalten. Sie verschieben sie nicht.

Die Grenzen liegen nicht im Client. Sie liegen in der Schnittstelle. Solange AIS.chat Lehrkräften keine dokumentierte Schnittstelle öffnet, bleibt jeder Client ein Nachbau mit Verfallsdatum. Die spannendere Frage ist deshalb nicht, ob man so eine App bauen kann. Sie lautet: Welche Tür sollte AIS.chat selbst öffnen, damit solche Ergänzungen sicher und dauerhaft möglich werden?

Wer mitdiskutieren oder mitbauen will: Das [Projekt ist offen](https://github.com/FWU-DE/aiscraft/blob/main/CONTRIBUTING.md), Ideen und Fehlerberichte sind als Issues willkommen.

<p class="jr-transparency-note"><strong>Transparenz:</strong> Die Zahlen zum Projekt habe ich am 25. November 2026 im Repository nachgezählt. Die Bildschirmfotos zeigen Demo-Daten mit erfundenen Namen. KI hat beim Entwerfen und Strukturieren dieses Beitrags geholfen. Verantwortung und Freigabe liegen bei mir.</p>
