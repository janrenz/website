---
title: "Drei Türen für Agenten"
date: 2026-09-09
draft: true
description: "Wenn eine Lehrkraft eine Recherche an einen KI-Assistenten delegiert, greift nicht sie auf das Portal zu, sondern Software in ihrem Auftrag. Der Beitrag geht der Frage nach, welche Zugangswege eine Web-Anwendung dafür überhaupt anbietet – und was es kostet, wenn sie keinen anbietet."
summary: "Automatisierte Zugriffe machen inzwischen die Mehrheit des HTML-Traffics aus, und ein wachsender Teil davon entsteht, während ein Mensch auf eine Antwort wartet. Der Beitrag unterscheidet drei Zugangswege für solche Agenten – eine Werkzeugschnittstelle über MCP, ein maschinenlesbares Ausgabeformat und die Bedienoberfläche selbst –, prüft am Portal mundo.schule, welche davon tatsächlich existieren, diskutiert, wann eine klassische API die bessere Wahl bleibt als ein MCP-Server, und schließt mit einer Checkliste zum Selbstprüfen."
tags: ["KI", "MCP", "Agentic AI", "Web", "Barrierefreiheit", "Metadaten", "OER", "Infrastruktur"]
translationKey: "three-doors-for-agents"
heroImage: "/img/blog/drei-tueren-fuer-agenten/hero-drei-tueren-fuer-agenten.png"
heroAlt: "Flache Vektor-Illustration in Marineblau, Eisblau und Weiß mit roten Akzentpunkten: Die Wand eines Gebäudes als geschichtete isometrische Platten, darin drei unterschiedliche Eingänge. Links ein gerahmtes Portal, in das ein dichtes Feld kleiner Bedien-Kärtchen über feine Linien mit roten Knotenpunkten einläuft. In der Mitte ein waagerechter Schlitz, durch den ein Stapel dünner transparenter Dokumentkarten gleitet. Rechts eine rahmenlose dunkle Öffnung, auf die von unten ein wirres, dicht verknotetes Liniengeflecht zuläuft. Am unteren Rand blasse Gebäudesilhouetten und ein Knotennetz."
---

> These: Die Frage ist nicht, ob eine KI meine Website lesen kann. Die Frage ist, durch welche Tür ein Agent in meine Anwendung kommt – und ob ich diese Tür ausgesucht habe.

Eine Lehrkraft sagt am Sonntagabend zu ihrem Assistenten: „Finde mir drei Arbeitsblätter zur Photosynthese für die siebte Klasse, frei lizenziert, und leg sie in meine Sammlung."

Ab hier passiert eines von drei Dingen. Der Agent ruft ein Werkzeug auf, das mein Portal für genau diesen Zweck anbietet. Oder er holt sich eine maschinenlesbare Fassung meiner Inhalte und arbeitet damit. Oder er übernimmt einen Browser, sucht das Suchfeld auf dem Bildschirm, tippt, scrollt, klickt – so wie ein Mensch, nur ungeduldiger.

Das sind drei Türen. Die dritte steht immer offen. Sie ist gleichzeitig die langsamste, die teuerste und die einzige, bei der ich nicht kontrollieren kann, was der Agent am Ende tut. Und genau sie ist bei fast allen Anwendungen, die ich kenne, die einzige, die es gibt.

## Rendering ist ein Übergangsproblem. Handlungsfähigkeit ist keines

Als ich anfing, mir das anzusehen, habe ich zuerst das Naheliegende geprüft: Steht der Inhalt im HTML? Bei mundo.schule liefert die Detailseite eines konkreten Arbeitsblatts 751 Bytes und ein leeres `<div id="app">`. Die Seite baut ihre Inhalte erst im Browser zusammen.

Diesen Befund halte ich inzwischen für den weniger interessanten. Denn er löst sich gerade von selbst. Googles KI-Antworten erben das Rendering von Googlebot, Microsoft Copilot das von Bing. Computer-Use-Agenten fahren ohnehin einen echten Browser mit echter JavaScript-Engine – für die ist eine Single-Page-App kein Hindernis, sondern Normalzustand. Und auf der Auslieferungsebene wandern passende Formate in die CDNs. Wer heute darauf wettet, dass Agenten dauerhaft kein JavaScript ausführen können, wettet gegen die Infrastruktur.

Was sich nicht von selbst löst, ist die andere Frage: Was kann ein Agent in meiner Anwendung eigentlich *tun*? Rendering ist eine Frage der Auslieferung. Handlungsfähigkeit ist eine Frage des Designs. Die erste kaufe ich mir irgendwann bei einem Anbieter. Die zweite muss ich selbst entscheiden.

Deshalb sortiere ich das Thema nach Türen.

## Die Mehrheit der Zugriffe ist keine Person mehr

Bevor ich die Türen einzeln aufmache, lohnt der Blick auf die Größenordnung. Sie entscheidet nämlich, wie teuer die falsche Tür ist.

<figure class="jr-chart">
<div class="jr-chart-panel">
<p class="jr-chart-panel-title">Anteil am HTML-Traffic weltweit (Juni 2026)</p>
<svg class="jr-chart-svg" viewBox="0 0 480 64" role="img" aria-labelledby="jrc-t1 jrc-d1" preserveAspectRatio="xMidYMid meet">
<title id="jrc-t1">Anteil am HTML-Traffic weltweit, Juni 2026</title>
<desc id="jrc-d1">Automatisierte Zugriffe 57,5 Prozent, menschliche Zugriffe 42,5 Prozent.</desc>
<text x="24" y="17" font-size="12" fill="var(--jr-chart-ink-2)">Menschen <tspan font-weight="700" fill="var(--jr-chart-ink)">42,5 %</tspan></text>
<text x="456" y="17" font-size="12" text-anchor="end" fill="var(--jr-chart-ink-2)">Automatisiert <tspan font-weight="700" fill="var(--jr-chart-ink)">57,5 %</tspan></text>
<path d="M28,28 H206.6 V56 H28 A4,4 0 0 1 24,52 V32 A4,4 0 0 1 28,28 Z" fill="var(--jr-chart-neutral)"><title>Menschen: 42,5 %</title></path>
<path d="M208.6,28 H452 A4,4 0 0 1 456,32 V52 A4,4 0 0 1 452,56 H208.6 Z" fill="var(--jr-chart-accent)"><title>Automatisiert: 57,5 %</title></path>
</svg>
<ul class="jr-chart-legend">
<li><span class="jr-chart-swatch" style="background:var(--jr-chart-neutral)"></span>Menschen</li>
<li><span class="jr-chart-swatch" style="background:var(--jr-chart-accent)"></span>Automatisiert: Crawler, Bots, Agenten</li>
</ul>
</div>
<div class="jr-chart-panel">
<p class="jr-chart-panel-title">Anfragen von KI-Agenten im Auftrag von Menschen</p>
<svg class="jr-chart-svg" viewBox="0 0 480 96" role="img" aria-labelledby="jrc-t2 jrc-d2" preserveAspectRatio="xMidYMid meet">
<title id="jrc-t2">Anfragen von KI-Agenten im DataDome-Netz (Milliarden)</title>
<desc id="jrc-d2">Erstes Quartal 2026: 12,3 Milliarden Anfragen. Zweites Quartal 2026: 17,7 Milliarden.</desc>
<defs><marker id="jrc-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,1 L7,4 L0,7 Z" fill="var(--jr-chart-axis)" /></marker></defs>
<line x1="298" y1="44" x2="395" y2="44" stroke="var(--jr-chart-axis)" stroke-width="2" marker-end="url(#jrc-arrow)" />
<circle cx="290" cy="44" r="6" fill="var(--jr-chart-accent-soft)" stroke="var(--jr-chart-surface)" stroke-width="2"><title>Q1 2026: 12,3 Mrd.</title></circle>
<circle cx="406" cy="44" r="6" fill="var(--jr-chart-accent)" stroke="var(--jr-chart-surface)" stroke-width="2"><title>Q2 2026: 17,7 Mrd.</title></circle>
<text x="290" y="27" font-size="12" font-weight="700" text-anchor="middle" fill="var(--jr-chart-ink)">12,3 Mrd.</text>
<text x="406" y="27" font-size="12" font-weight="700" text-anchor="middle" fill="var(--jr-chart-ink)">17,7 Mrd.</text>
<text x="290" y="67" font-size="11" text-anchor="middle" fill="var(--jr-chart-ink-2)">Q1 2026</text>
<text x="406" y="67" font-size="11" text-anchor="middle" fill="var(--jr-chart-ink-2)">Q2 2026</text>
<line x1="24" y1="81" x2="456" y2="81" stroke="var(--jr-chart-rule)" stroke-width="1" />
<path d="M24,81 V85 M240,81 V85 M456,81 V85" stroke="var(--jr-chart-rule)" stroke-width="1" />
<text x="24" y="94" font-size="10" fill="var(--jr-chart-muted)">0</text>
<text x="240" y="94" font-size="10" text-anchor="middle" fill="var(--jr-chart-muted)">10 Mrd.</text>
<text x="456" y="94" font-size="10" text-anchor="end" fill="var(--jr-chart-muted)">20 Mrd.</text>
</svg>
</div>
<table>
<thead><tr><th>Kennzahl</th><th>Wert</th></tr></thead>
<tbody>
<tr><td>Automatisierter Anteil am HTML-Traffic (Juni 2026)</td><td>57,5 %</td></tr>
<tr><td>Menschlicher Anteil am HTML-Traffic (Juni 2026)</td><td>42,5 %</td></tr>
<tr><td>Anfragen von KI-Agenten, Q1 2026</td><td>12,3 Mrd.</td></tr>
<tr><td>Anfragen von KI-Agenten, Q2 2026</td><td>17,7 Mrd.</td></tr>
<tr><td>davon aus agentischen Browsern (April 2026)</td><td>ca. 74 %</td></tr>
</tbody>
</table>
<figcaption>Quellen: Cloudflare Radar für den Anteil am HTML-Traffic (Juni 2026); DataDome für das Volumen der Agenten-Anfragen (Q1 und Q2 2026); HUMAN Security für den Anteil agentischer Browser (April 2026). Cloudflare sieht rund ein Fünftel des Webs; die Volumenzahlen beschreiben ein einzelnes Anbieternetz.</figcaption>
</figure>

Cloudflare Radar zählt Anfang Juni 2026 erstmals mehr automatisierte als menschliche Zugriffe auf HTML-Seiten: 57,5 Prozent gegen 42,5 Prozent. Cloudflare-Chef Matthew Prince hat diesen Übertritt am 3. Juni 2026 öffentlich gemacht – deutlich früher, als er selbst vorhergesagt hatte. Getrieben wird er nicht von klassischen Suchmaschinen. HUMAN Security beziffert das Wachstum agentischer Zugriffe im Jahresvergleich auf rund 7.851 Prozent.

Zwei Einschränkungen gehören dazu, sonst wird aus der Zahl eine Behauptung. Sie beschreibt HTML-Anfragen bei einem Anbieter, der etwa ein Fünftel des Webs sieht – nicht meine Website und nicht dein Portal. Und „automatisiert" ist ein Sammelbegriff: Trainings-Crawler, Retrieval-Bots und Agenten im Auftrag von Menschen stecken gemeinsam darin.

Für diesen Beitrag ist aber eine andere Zahl die wichtigere. Nicht, wie viele Maschinen Inhalte für ein Training einsammeln, sondern wie viele zugreifen, während ein Mensch auf die Antwort wartet. Cloudflare trennt genau das seit Juli 2026 in drei Zwecke: Search, Agent, Training. DataDome hat im zweiten Quartal 2026 17,7 Milliarden Anfragen von KI-Agenten gezählt, 45 Prozent mehr als im Quartal davor, seit Jahresbeginn über 30 Milliarden.

Der Weg, den diese Zugriffe nehmen, ist dann der eigentliche Befund. Fast drei Viertel des agentischen Verkehrs kamen im April 2026 von agentischen Browsern. Im Juni führte Comet mit 47,1 Prozent, die Claude-Erweiterung für Chrome folgte mit 24 Prozent. Diese Zugriffe klopfen nicht an eine Schnittstelle. Sie fahren eine Oberfläche. Tür 3 ist heute nicht die Ausnahme, sondern der Normalfall.

Dass parallel Trainings-Crawler unterwegs sind, bleibt eine eigene und durchaus wichtige Frage – im Mai 2026 dienten 51,8 Prozent der KI-Crawler-Anfragen dem Training, nur 9,3 Prozent der Suche. Wie meine Inhalte in einen Modellkorpus kommen, entscheidet sich dort. Für die Frage, welche Tür ich baue, ist es aber nicht die entscheidende Zahl.

Für die Türen heißt das etwas Konkretes. Wenn die Mehrheit der Anfragen von Maschinen kommt, ist Tür 3 nicht nur die schlechteste Tür. Sie ist auch die teuerste Rechnung, und zwar auf beiden Seiten. Ein Agent, der meine Oberfläche durchklickt, verbraucht ein Vielfaches an Bandbreite, Rechenzeit und Modell-Tokens für dasselbe Ergebnis, das ein Werkzeugaufruf in einer einzigen Anfrage liefert. Wer Tür 1 und 2 nicht baut, subventioniert die ineffizienteste Form seiner eigenen Nutzung.

## Tür 1: MCP – die Tür, die ich selbst baue und kontrolliere

Das Model Context Protocol beschreibt Fähigkeiten einer Anwendung als Werkzeuge: mit Namen, mit typisierten Parametern, mit beschriebenen Rückgabewerten. Ein Agent muss nicht raten, wie meine Suche funktioniert. Er liest, dass es `suche_medien` gibt, welche Filter erlaubt sind und was zurückkommt.

Der Unterschied zu allem anderen ist Kontrolle. Bei einem Werkzeugaufruf weiß ich, wer was mit welchen Parametern getan hat. Ich kann es versionieren, protokollieren, mit Rechten belegen und abschalten. Und es kostet einen Bruchteil an Token: ein Aufruf mit strukturierter Antwort statt dreißig Screenshots.

Wichtig ist inzwischen auch, dass ein Agent diese Tür allein findet. Für die Anmeldung setzt MCP auf OAuth 2.1, und ein Server veröffentlicht seine Metadaten nach RFC 9728 unter `/.well-known/oauth-protected-resource`; der Client findet von dort den zugehörigen Autorisierungsserver. Für die Beschreibung des Servers selbst etabliert sich eine „Server Card" unter `/.well-known/mcp` – noch keine verabschiedete Norm, aber die Richtung ist klar: Ein Agent soll eine Anwendung finden und sich anmelden können, ohne dass ein Mensch vorher eine Konfigurationsdatei ausfüllt.

Man muss diesen Server nicht immer von Hand schreiben. Microsofts NLWeb geht den Weg über die Daten, die eine Website schon veröffentlicht – schema.org-Auszeichnung, RSS – und stellt daraus `/ask`- und `/mcp`-Endpunkte bereit. Jede NLWeb-Instanz kann als MCP-Server auftreten. Wer strukturierte Daten hat, ist damit näher an einer Agenten-Schnittstelle, als er denkt.

Bei MUNDO ist der maschinenlesbare Unterbau längst da. Hinter dem Portal liegt die dokumentierte SODIX-GraphQL-API v3. Mein eigener Crawler hat dort am 24. August 2026 gezählt: 140.175 aktive Metadatensätze, 215.868 insgesamt, dazu 1.985 Quellen, 972 Herausgeber und 21 Vokabularlisten. Das ist kein Datenproblem. Ein MCP-Server wäre hier eine dünne Schicht auf etwas, das bereits existiert – kein neues Backend.

Und das ist keine Gedankenübung mehr: Für MUNDO existiert intern bereits ein Proof of Concept für einen MCP-Server – nicht öffentlich, aber gebaut. Er belegt genau den Punkt, um den es hier geht – wenn die API darunter steht, ist die Werkzeugschicht eine überschaubare Arbeit. Die offene Frage ist nicht mehr, ob das geht. Die offene Frage ist, welche Werkzeuge in die Liste gehören und wer sie mit welchen Rechten aufrufen darf.

Drei Werkzeuge würden reichen, um den Sonntagabend-Auftrag von oben zu erfüllen:

| Werkzeug | Aufgabe |
| --- | --- |
| `suche_medien` | Fach, Jahrgangsstufe, Lizenz, Medientyp, Freitext – strukturierte Trefferliste mit IDs |
| `hole_datensatz` | vollständige Metadaten zu einer ID, inklusive Lizenz und Bezugsquelle |
| `lege_in_sammlung` | ein Material in die Sammlung der angemeldeten Person legen |

Und hier ist der Teil, der oft übersehen wird: Diese Liste ist eine Produktentscheidung, keine technische. Ich spiegele nicht meine API eins zu eins nach außen. Ich beschreibe die Aufgaben, die ich unterstützen will – und lasse weg, was ich nicht durch einen Agenten erledigt haben möchte. Ein Werkzeug, das ich nicht anbiete, ist die klarste Grenze, die ich ziehen kann. Deutlicher als jede Nutzungsbedingung.

## Kritisch gefragt: Wozu MCP, wenn es eine API gibt?

Diese Frage muss man aushalten, sonst wird MCP zum Selbstzweck.

Der ehrliche Ausgangspunkt: MCP ist keine bessere API. Es ist ein anderer Vertriebsweg für dieselben Fähigkeiten. Eine API beantwortet die Frage, wie ich etwas aufrufe. MCP beantwortet die Frage, woher ein fremdes Modell weiß, dass es das aufrufen darf – und wie es das im Namen einer bestimmten Person tut. Das sind zwei verschiedene Probleme.

Für die erste Variante gibt es ein laufendes Beispiel. AIS.chat, der KI-Chat des FWU für Schulen, nutzt die MUNDO-Schnittstelle heute direkt. Keinen MCP-Server. Und das ist richtig so. Beide Seiten liegen beim selben Betreiber. Der weiß vorher, welche Abfragen gebraucht werden, kann die Trefferdarstellung didaktisch gestalten, Fehler genau behandeln und Latenz wie Kosten kontrollieren. Kein Modell muss erst raten, welches Werkzeug passt. Eine vorintegrierte API ist in dieser Konstellation schneller, günstiger und vorhersagbarer als jeder Werkzeugaufruf.

Dazu kommen die Kosten von MCP, die in der Begeisterung gern untergehen. Werkzeugbeschreibungen belegen Kontext, und zwar bei jedem Aufruf. Ein Modell wählt manchmal das falsche Werkzeug oder füllt Parameter halb geraten – ein Nichtdeterminismus, den eine festverdrahtete Integration nicht hat. Werkzeuge, die Text aus fremden Quellen zurückgeben, sind eine Angriffsfläche für Prompt Injection. Versionierung ist unangenehm, weil ich nicht weiß, welche Clients meine Werkzeugnamen schon gelernt haben. Und ehrlich: Viele MCP-Server sind am Ende eine dünnere, schlechter dokumentierte Hülle um eine API, die es schon gab.

Der Fall, in dem MCP trotzdem gewinnt, ist ein anderer – und für ein öffentliches Portal der wichtigere. Ich kann nicht mit jedem Assistenten vorintegrieren, den eine Lehrkraft benutzt. Ich weiß nicht, ob sie ChatGPT, Claude, Copilot oder das Werkzeug ihres Schulträgers öffnet. Für jeden dieser Clients eine eigene Integration zu bauen, skaliert nicht. Sie alle auf mein Webfrontend zu verweisen, ist Tür 3. MCP ist die Antwort auf „ich kenne meine Aufrufer nicht" – zusammen mit einer delegierten Anmeldung pro Person, die eine API mit einem Servertoken so nicht liefert.

Für mich fällt das deshalb nicht auf eine Entscheidung zusammen, sondern auf eine Aufteilung. Dieselbe Fachlogik, zwei Auslieferungen. Eine API für die Integrationen, die ich selbst baue und verantworte. Ein MCP-Server für die Agenten, die ich nie kennenlerne. AIS.chat ist das Beispiel für das erste, der interne MUNDO-PoC ein Anfang für das zweite. Wer nur das erste hat, ist gut integriert und bleibt für alles andere unerreichbar. Wer nur das zweite hat, verschenkt Qualität dort, wo er sie kontrollieren könnte.

## Tür 2: Derselbe Inhalt, weniger Verpackung

Die zweite Tür ist die günstigste und wird am seltensten gebaut: dieselbe Adresse, ein anderes Format.

Ein Agent, der meine Detailseite abruft, will nicht meine Navigation, meinen Cookie-Hinweis, mein Tracking und 400 Kilobyte CSS. Er will den Datensatz. Genau dafür gibt es HTTP-Inhaltsverhandlung. Fragt ein Client mit `Accept: text/markdown`, bekommt er Markdown; fragt ein Browser, bekommt er die Seite. Gleiche URL, unterschiedliche Repräsentation.

Cloudflare liefert es als zonenweite Funktion für Agenten aus, Vercel dokumentiert das Muster für Next.js, und Coding-Agenten wie Claude Code senden den Header von sich aus. Die Auswertungen, die ich gefunden habe, sprechen von bis zu 80 Prozent weniger Tokens für denselben Inhalt.

Der Tokenpreis ist dabei nur die halbe Begründung. Die andere ist Zuverlässigkeit. Wer 400 Kilobyte Layout mitschickt, lädt zum Missverstehen ein – ein Agent, der zwischen Cookie-Banner und Filterleiste die Lizenzangabe suchen muss, findet manchmal die falsche. Ein sauberer Datensatz lässt sich nicht falsch lesen.

Zwei Hinweise dazu, die ich für wichtig halte.

Erstens: gleiche URL, kein Parallel-Universum. Ein zweiter Satz Seiten unter `.md` erzeugt Dubletten, und davor haben Google und Bing ausdrücklich gewarnt. Inhaltsverhandlung bedeutet: eine Adresse, mehrere Repräsentationen.

Zweitens: Bei Bildungsressourcen ist die strukturierte Fassung nicht optional, sondern Standard. Das Allgemeine Metadatenprofil für Bildungsressourcen (AMB) der DINI-AG KIM, Fassung 2023-10-19, baut auf schema.org und den LRMI-Erweiterungen auf. Die Spezifikation verlangt, dass ein Metadatensatz als JSON-LD interpretierbar ist, und benennt die Auslieferung ausdrücklich: eingebettet per `<script type="application/ld+json">` oder als eigene Ressource mit `Content-Type: application/ld+json`. Wer AMB spezifikationskonform ausliefert, hat Tür 2 für seine Datensätze schon halb gebaut – und braucht dafür kein KI-Argument, nur ein Metadaten-Argument.

Und `llms.txt`? Die halte ich für überschätzt. Eine Ahrefs-Auswertung von 137.000 Websites fand, dass 97 Prozent der vorhandenen Dateien nie abgerufen werden. Kein großer Anbieter hat sich verpflichtet, sie als Signal zu nutzen; Googles Gary Illyes hat abgesagt, John Mueller verglich sie mit dem entwerteten Keywords-Meta-Tag und nannte sie eine „vorübergehende Krücke, um Tokens zu sparen". Genau als Krücke funktioniert sie aber: als Inhaltsverzeichnis für einen Agenten, der schon vor meiner Tür steht. Für Entwicklerdokumentation sinnvoll. Als Sichtbarkeitshebel nicht.

## Tür 3: Computer Use – meine Oberfläche ist eine Schnittstelle, ob ich will oder nicht

Wenn ich Tür 1 und 2 nicht baue, nimmt der Agent Tür 3. Er startet einen Browser und benutzt meine Anwendung wie ein Mensch. Das funktioniert immer. Es ist nur teuer, langsam und für mich unbeobachtbar.

Wie ein Agent dabei „sieht", ist derzeit gespalten, und das ist praktisch relevant. OpenAIs Computer-Using Agent arbeitet primär mit Screenshots. Microsofts Playwright MCP übergibt dem Modell stattdessen einen Auszug aus dem Accessibility-Baum – kompakter Text mit Rolle und Name pro Element. ChatGPT Atlas nutzt laut OpenAIs eigener Publisher-FAQ ARIA-Rollen und -Namen, also dieselben Auszeichnungen, von denen Screenreader leben, mit dem ausdrücklichen Rat, die Seite zugänglicher zu machen. Die stärkeren Agenten kombinieren beides.

Das heißt: Der Accessibility-Baum ist keine Nebenspur für eine Minderheit mehr. Er ist eine Maschinenschnittstelle. Ein Icon-Button ohne zugänglichen Namen ist ein Knopf, den ein Agent nicht benennen kann – und den er entsprechend unzuverlässig drückt.

Was Agenten an Oberflächen tatsächlich scheitern lässt, ist ziemlich konkret:

- **Overlays und verschachtelte Dialoge.** Wenn der Auszug die Stapelreihenfolge nicht korrekt abbildet, klickt der Agent auf Elemente im Hintergrund, während ein Dialog offen ist.
- **Winzige Klickziele.** Für 24-Pixel-Knöpfe muss ein bildbasierter Agent sein Raster so fein legen, dass die Beschriftungen die Oberfläche verdecken. Er rät dann über Positionen statt über Elemente.
- **Nur-Hover-Menüs und reines Drag-and-Drop.** Beides hat für einen Agenten keinen Ersatzweg.
- **Endloses Scrollen.** Kein Ende, keine Seitenzahl, kein Zustand, auf den man zurückkommt.
- **Zustand nur im Client.** Was ich nicht verlinken kann, kann ein Agent nicht wieder aufrufen und nicht zitieren.
- **Fehlermeldungen nur als Toast.** Ein Hinweis, der nach drei Sekunden verschwindet, ist für einen Agenten nie passiert.

MUNDO steht hier gemischt da, und der gute Teil gehört dazugesagt: Die Adressen sind sauber. Ein Datensatz liegt unter `/details/<id>`, eine Suche unter `/suche?q=...`, für Ergebnislisten existiert eine Seitenzahl in der Route. Zustand ist verlinkbar – das ist mehr, als viele Anwendungen bieten. Im ausgelieferten Frontend-Bundle finde ich dagegen vier `aria-label`, kein `tabindex` und kein `<form>`-Element. Das ist ein Hinweis, kein Urteil; belastbar prüfen ließe sich das nur im laufenden Accessibility-Baum. Aber die Richtung ist deutlich.

Und damit zu der Pointe, die mir an diesem ganzen Thema am besten gefällt: Tür 3 zu verbessern heißt, Barrierefreiheit zu verbessern. Semantische Elemente, echte Formulare, zugängliche Namen, Tastaturbedienbarkeit, Fehler als Text, Zustand in der URL – das ist dieselbe Liste, die seit fünfzehn Jahren in jedem Accessibility-Audit steht. Ein Computer-Use-Agent ist im Grunde ein Screenreader-Nutzer mit weniger Geduld und einem Budget.

Wer diese Arbeit für Menschen macht, bekommt die Agenten geschenkt. Nicht umgekehrt. Und in dieser Reihenfolge würde ich sie auch begründen.

## Agenten brauchen Identität, nicht nur Zugang

Der schwierige Teil kommt, sobald ein Agent nicht mehr liest, sondern handelt. Dann geht es nicht um Crawler-Regeln, sondern um Stellvertretung: Wer hat wem was erlaubt, wie lange, und wie nehme ich es zurück?

Der Mechanismus dafür steht bereit – OAuth 2.1, geschützte Ressourcen nach RFC 9728, eng geschnittene Berechtigungen, widerrufbare Token. Die Politik dahinter steht nicht bereit. Die muss jeder Betreiber selbst formulieren.

Was ich dabei für die wichtigste Unterscheidung halte: Ein Trainings-Crawler, ein Retrieval-Bot und ein Agent, der im Auftrag einer angemeldeten Person handelt, sind drei verschiedene Dinge. Wer alle drei mit einer Zeile in der `robots.txt` aussperrt, sperrt seine eigenen Nutzenden aus. Bei frei lizenzierten Bildungsmedien wird das doppelt absurd: Sichtbarkeit ist dort der Zweck der Veranstaltung, nicht das Risiko.

Für MUNDO wäre die Grenze schnell beschrieben. Ein Agent im Auftrag einer Lehrkraft soll suchen, Datensätze holen, in eine Sammlung legen, in ein LMS exportieren. Er soll kein Material in die redaktionelle Prüfschlange einstellen. Diese Grenze schreibe ich nicht in eine Richtlinie. Ich schreibe sie in die Werkzeugliste.

## Checkliste: Welche Türen habe ich gebaut?

### Grundlage – gibt es überhaupt eine maschinenlesbare Fassung?

- [ ] Existiert zu jedem inhaltlich relevanten Objekt eine stabile, verlinkbare Adresse?
- [ ] Gibt es zu diesem Objekt eine Repräsentation, die ohne Browser auswertbar ist (JSON, Markdown, JSON-LD)?
- [ ] Antwortet der Server auf unbekannte Adressen mit `404` statt mit `200` plus App-Hülle?
- [ ] Hat jede Seite einen eigenen, aussagekräftigen `<title>`?

### Tür 1 – Werkzeuge (MCP)

- [ ] Ist entschieden, welche Aufgaben ein Agent erledigen darf – und welche ausdrücklich nicht?
- [ ] Sind die Werkzeuge nach Aufgaben benannt, nicht als Spiegel der internen API?
- [ ] Haben Parameter und Rückgaben ein Schema und eine verständliche Beschreibung?
- [ ] Anmeldung über OAuth 2.1, Metadaten nach RFC 9728 unter `/.well-known/oauth-protected-resource`?
- [ ] Berechtigungen eng geschnitten, Token widerrufbar, Aufrufe protokolliert?
- [ ] Für inhaltslastige Portale: NLWeb als Abkürzung geprüft, statt einen Server von Hand zu schreiben?
- [ ] Ist getrennt, welche Aufrufer ich vorintegriere (API) und welche unbekannt bleiben (MCP)?
- [ ] Schreibende Werkzeuge idempotent oder mit Bestätigungsschritt?

### Tür 2 – Ausgabeformate

- [ ] Liefert dieselbe URL bei `Accept: text/markdown` eine schlanke Textfassung?
- [ ] Inhaltsverhandlung statt zweitem Satz Seiten unter `.md` (keine Dubletten)?
- [ ] Ein `application/ld+json`-Block pro Inhaltsseite mit passendem schema.org-Typ?
- [ ] Bei Bildungsressourcen: AMB-konformes JSON-LD mit Lizenz, Fach, Bildungsstufe, Zielgruppe?
- [ ] Lizenz maschinenlesbar, nicht nur als Grafik oder Fußzeilentext?
- [ ] Falls eine öffentliche API existiert: dokumentiert und auffindbar (OpenAPI verlinkt)?
- [ ] `llms.txt` nur, wenn es Entwicklerdokumentation gibt – und nicht als Ersatz für das Übrige?

### Tür 3 – Oberfläche (Computer Use)

- [ ] Hat jedes interaktive Element einen zugänglichen Namen (auch Icon-Buttons)?
- [ ] Semantische Landmarks und saubere Überschriftenhierarchie?
- [ ] Echte `<form>`-Elemente mit `label`, `name`, `autocomplete`?
- [ ] Alles per Tastatur bedienbar – keine Nur-Hover- und Nur-Drag-Wege?
- [ ] Klickziele groß genug, um in einem Screenshot eindeutig zu sein?
- [ ] Dialoge mit korrekter Stapelreihenfolge und Fokusfalle, die auch wieder freigibt?
- [ ] Fehler und Ergebnisse als Text im Dokument, nicht nur als verschwindender Toast?
- [ ] Ergebnislisten mit Seitenzahlen statt endlosem Scrollen?
- [ ] Filter- und Suchzustand in der URL?

### Identität und Governance

- [ ] Trainings-Crawler, Retrieval-Bots und stellvertretend handelnde Agenten getrennt behandelt?
- [ ] Bei offen lizenzierten Inhalten bewusst geöffnet statt reflexhaft gesperrt?
- [ ] Rate Limits, die Missbrauch bremsen und legitime Stellvertretung nicht?
- [ ] Agentenzugriffe im Logging von menschlichen unterscheidbar – um Wirkung messen zu können?
- [ ] Nach jedem Release stichprobenartig geprüft, ob Werkzeuge und Formate noch antworten?

## Fazit

Wenn ich das für mich zusammenfasse: Eine Web-Anwendung wird durch eine dieser drei Türen benutzt werden. Diese Entscheidung trifft nicht ihr Betreiber. Die treffen die Menschen, die Aufgaben delegieren, und ihre Agenten.

Zu entscheiden ist nur, welche Türen es gibt. Tür 3 muss niemand bauen, sie ist einfach da. Tür 2 ist billig und wird trotzdem übersehen. Tür 1 ist die einzige, bei der vorher feststeht, was in der Anwendung passieren darf – und deshalb die einzige, die ein Betreiber wirklich wollen sollte.

MUNDO ist dafür ein gutes Beispiel, weil dort weder Daten noch Standards fehlen. 140.175 aktive Datensätze liegen hinter einer dokumentierten API, das Metadatenprofil verlangt JSON-LD ohnehin, die Adressen sind sauber, und intern existiert ein Proof of Concept für einen MCP-Server. Was fehlt, ist die Entscheidung, welche Aufgaben ein Agent im Auftrag einer Lehrkraft erledigen darf. Das ist keine Rendering-Frage. Das ist eine Produktfrage.

Und das gilt weit über Bildungsmedien hinaus. Wenn schon heute die Mehrheit der Zugriffe automatisiert ist, dann sind LLMs und Bots keine Randerscheinung mehr und kein Missbrauchsfall. Sie sind die wichtigste Zielgruppe künftiger Web-Anwendungen. Eine Zielgruppe baut man nicht aus Versehen mit. Man baut ihr einen Zugang, der für sie gedacht ist.

> LLMs und Bots sind die wichtigste Zielgruppe künftiger Web-Anwendungen. Sie verdienen Zugangswege, die für sie gebaut sind – nicht den Notausgang, den unsere Oberflächen zufällig offen lassen.

<p class="jr-transparency-note"><strong>Transparenz:</strong> Die technischen Befunde zu mundo.schule habe ich am 9. September 2026 selbst geprüft; die Bestandszahlen stammen aus meinem eigenen SODIX-Crawler, gemessen am 24. August 2026. KI kam für Entwurf und Strukturierung unterstützend zum Einsatz. Verantwortung und Freigabe liegen bei mir.</p>
