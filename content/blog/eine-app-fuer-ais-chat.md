---
title: "Eine App für AIS.chat"
date: 2026-11-24
draft: false
description: "AIS.chat läuft im Browser. Was passiert, wenn man daneben ein eigenes, natives Programm stellt, das dieselben Konten nutzt? Ein Experiment über das, was ein Client lokal leisten kann – und über die Grenzen, die ein Webdienst ohne Schnittstelle für seine Nutzerinnen und Nutzer setzt."
summary: "In zwei Tagen ist mit KI-Agenten ein nativer Client für AIS.chat entstanden: AIS.ChatCraft. Der Beitrag zeigt, was ein solcher Client auf dem eigenen Rechner zusätzlich kann – durchsuchbarer Verlauf, Dokumente, Arbeitsblätter und H5P-Quiz, Word- und PDF-Export, Schülernamen, die das Gerät gar nicht erst verlassen –, und benennt die Grenzen: keine Schnittstelle für Lehrkräfte, keine Werkzeugaufrufe, Token-Punkte und die Frage, was das Gerät verlassen darf."
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

Bemerkenswert finde ich weniger das Programm als seine Entstehung. Der erste Commit ist vom 23. November. Zwei Tage später stehen rund 57.000 Zeilen Rust, über 120 Befehle, 363 automatische Tests und eine CI-Pipeline, die auf drei Betriebssystemen baut und testet. Über 30 Issues sind erledigt. Geschrieben haben den Code im Wesentlichen KI-Agenten, die parallel an GitHub-Issues arbeiten. Meine Rolle: Ziele setzen, Ergebnisse ansehen, Entscheidungen treffen.

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

Was dagegen gut funktioniert, ist ein Ausgabeformat. Der Client beschreibt im Prompt kurz, wie etwa ein Arbeitsblatt oder ein H5P-Quiz aussieht. Das Modell antwortet in *einer* Runde mit einem markierten Block, der Client macht daraus ein bearbeitbares Objekt. Keine Schleife, keine Rückgabe, kein Mehraufwand. Auf diesem Weg entstehen in AIS.ChatCraft die Diagramme, Lern-Apps, Arbeitsblätter und H5P-Quiz aus AIS.chat. Die Formatbeschreibung steht im Chat eingeklappt unter der Frage, damit der Verlauf lesbar bleibt.

## Die dritte Grenze: Lokal ist nicht automatisch privat

Ein lokales Programm klingt nach Datenschutz. Das stimmt nur zum Teil.

Was an AIS.chat geht, verarbeitet AIS.chat – zu dessen Regeln. Verantwortlich im Sinne der DSGVO ist laut Datenschutzerklärung die Schule. Das FWU betreibt das System als Auftragsverarbeiter. Ein Client kann weniger schicken, aber nicht weniger verantworten.

Und er bringt eigene Fragen mit. Chats als Datei auf dem eigenen Rechner zu speichern, sieht AIS.chat selbst vor – es gibt dafür einen Export. Eine lokale Datenbank ist im Kern dasselbe, nur dauerhaft und durchsuchbar. Damit gelten für sie die Regeln der Schule für Dienst- und Privatgeräte. Was passiert, wenn derselbe Client auch an Claude oder einen anderen Anbieter schickt? Dann gelten dort andere Verträge, und die Entscheidung liegt bei der Lehrkraft und ihrer Schule. AIS.ChatCraft legt Zugangsdaten deshalb in den Schlüsselbund des Betriebssystems, nie in die Datenbank. Und jede Aktion, die etwas verändert, braucht ein ausdrückliches Ja.

Eine Pflicht aus den Nutzungsbedingungen kann ein Client sogar leichter machen: Ausgaben, die weiterverwendet werden, müssen als KI-generiert gekennzeichnet werden, der Prompt soll mit angegeben werden. Beim Export nach Word oder PDF kann das Programm beides automatisch mitschreiben.

Ehrlich gesagt ist das der Teil, bei dem ich am meisten Diskussion erwarte und auch brauche. Ein Client verschiebt Verantwortung von einem betriebenen Dienst auf ein Gerät. Für eine einzelne Lehrkraft kann das ein Gewinn sein. Für eine Schule mit verwalteten Geräten sieht die Rechnung anders aus.

## Was ich daraus mitnehme

Wenn ich das für mich zusammenfasse: Ein eigener Client für AIS.chat ist möglich, und er kann Lehrkräften Dinge abnehmen, die ein Browserfenster nicht leisten kann. Die wertvollsten davon passieren vor dem Senden – Namen ersetzen, Dateien umwandeln, weniger verschicken. Sie helfen, die Regeln von AIS.chat einzuhalten. Sie verschieben sie nicht.

Die Grenzen liegen nicht im Client. Sie liegen in der Schnittstelle. Solange AIS.chat Lehrkräften keine dokumentierte Schnittstelle öffnet, bleibt jeder Client ein Nachbau mit Verfallsdatum. Die spannendere Frage ist deshalb nicht, ob man so eine App bauen kann. Sie lautet: Welche Tür sollte AIS.chat selbst öffnen, damit solche Ergänzungen sicher und dauerhaft möglich werden?

Wer mitdiskutieren oder mitbauen will: Das [Projekt ist offen](https://github.com/FWU-DE/aiscraft/blob/main/CONTRIBUTING.md), Ideen und Fehlerberichte sind als Issues willkommen.

<p class="jr-transparency-note"><strong>Transparenz:</strong> Die Zahlen zum Projekt habe ich am 24. November 2026 im Repository nachgezählt. Die Bildschirmfotos zeigen Demo-Daten mit erfundenen Namen. KI hat beim Entwerfen und Strukturieren dieses Beitrags geholfen. Verantwortung und Freigabe liegen bei mir.</p>
