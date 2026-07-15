---
title: "Verloren im Modellschungel"
date: 2026-07-14
draft: false
description: "Warum die Modellwahl zu einer Infrastrukturaufgabe wird: Modelle entwickeln sich rasant, ihre Stärken sind unterschiedlich – und Menschen sollten nicht bei jeder Anfrage selbst ein Modellmenü bedienen müssen."
summary: "Die Auswahl eines KI-Modells entscheidet über Qualität, Kosten, Latenz und Ressourcenverbrauch. Statt Nutzerinnen und Nutzer mit einem ständig wachsenden Modellmenü allein zu lassen, braucht es eine schlanke, transparente Routing-Schicht: Sie ordnet Anfragen ein und wählt innerhalb klarer Regeln das kleinste passende Modell."
tags: ["KI", "Infrastruktur", "Digitale Souveränität", "Governance"]
translationKey: "model-selection-needs-infrastructure"
heroImage: "/img/blog/modellwahl-braucht-infrastruktur/hero-modellschungel-routing.png"
heroAlt: "Abstrakte Editorial-Illustration eines Modell-Dschungels aus unterschiedlichen KI-Komponenten; ein zentraler Routing-Knoten verbindet eine Anfrage mit passenden Bearbeitungswegen."
---

> These: Gute KI-Nutzung heißt nicht, immer das leistungsfähigste Modell aufzurufen. Gute KI-Nutzung heißt, für eine konkrete Aufgabe das kleinste Modell zu wählen, das sie zuverlässig lösen kann – ohne die Nutzerinnen und Nutzer mit dieser Entscheidung allein zu lassen.

Wer heute eine KI-Anwendung öffnet, sieht oft ein Modellmenü. Schnell. Präzise. Kreativ. Reasoning. Mini. Pro. Open. Proprietär. Dazu kommen Kontextfenster, Werkzeugnutzung, Bild- und Audiofähigkeiten, Datenschutzoptionen und Preisstufen. Für Menschen, die sich professionell mit Modellen beschäftigen, kann das sinnvoll sein. Für die meisten anderen ist es eine Zumutung.

Denn die eigentliche Frage lautet selten: *Welches Modell möchte ich verwenden?* Sie lautet: *Kannst du mir helfen, diese Aufgabe gut zu erledigen?*

Genau darin liegt eine Infrastrukturaufgabe. Modellwahl darf nicht zu einer neuen digitalen Kompetenzhürde werden. Sie muss im Hintergrund stattfinden – nachvollziehbar, sparsam und korrigierbar.

## Ein Jahr, das die Modelllandschaft neu sortiert hat

Die Geschwindigkeit der Entwicklung ist inzwischen selbst ein Problem der Orientierung. Innerhalb weniger Monate entstehen neue Modellgenerationen, kleinere und größere Varianten, spezialisierte Reasoning-Modelle, multimodale Modelle und neue offene Gewichte. Was gestern noch als Spitzenmodell galt, ist heute vielleicht ein guter Standard für anspruchsvolle Textarbeit – und morgen nur noch eine von mehreren Optionen.

Das Feld ist dabei nicht einfach eine Rangliste von „schwach“ bis „stark“.

- **Proprietäre Modelle** werden als Dienst betrieben. Sie können sehr leistungsfähig sein und sich schnell weiterentwickeln; zugleich sind Betrieb, Preisgestaltung, Datenverarbeitung und technische Abhängigkeiten an den jeweiligen Anbieter gebunden.
- **Offene Modelle** beziehungsweise Modelle mit offenen Gewichten schaffen andere Spielräume: Sie können in eigenen oder kontrollierten Umgebungen betrieben, angepasst und geprüft werden. Das bedeutet aber nicht automatisch, dass sie für jede Aufgabe die günstigste oder beste Wahl sind. Betrieb, Evaluierung, Sicherheit und Aktualisierung bleiben reale Aufgaben.
- **Modellfamilien** sind selbst keine einzelne Leistungsklasse. Das lässt sich an GPT-5.6 konkret zeigen: Die Reihe ist aktuell in drei Kapazitätsstufen gegliedert. **Luna** ist die effiziente, schnelle Stufe für hohe Anfragevolumina, Klassifikation, Chat und leichte agentische Abläufe. **Terra** bildet die ausgewogene Mitte für alltägliches Coding, Reasoning und mehrschrittige Arbeit. **Sol** ist die leistungsstarke Stufe für komplexe Analyse-, Coding- und Agentenaufgaben. Jede dieser drei Stufen ist zusätzlich als **Pro**-Variante verfügbar. Dabei handelt es sich nach der veröffentlichten Beschreibung nicht um ein völlig anderes Grundmodell, sondern um dieselbe jeweilige Stufe mit einem auf höhere Qualität bei komplexen Aufgaben ausgerichteten Reasoning-Modus. Schon ein einzelner Familienname steht also nicht für *ein* Modell, sondern mindestens für sechs nutzbare Routen – effizient, ausgewogen oder leistungsstark, jeweils im Standard- oder Pro-Modus.

  Die Unterschiede enden nicht bei der Modellstufe. Für alle drei GPT-5.6-Stufen können weitere Parameter beeinflussen, wie eine Anfrage bearbeitet wird: etwa ein Reasoning- beziehungsweise Reasoning-Effort-Modus, eine maximale Antwortlänge, strukturierte Ausgabeformate, der Einsatz von Werkzeugen und die Wahl beziehungsweise Verpflichtung eines bestimmten Werkzeugs. In einer konkreten Routing-Policy würde daher nicht nur „GPT-5.6 Terra“ stehen, sondern zum Beispiel: „Terra, begrenzte Antwortlänge, strukturiertes JSON, mittlerer Reasoning-Aufwand, Recherche-Werkzeug zugelassen“. Auch das Kontextfenster und die multimodalen Eingaben – Text, Bild und Datei – gehören zur technischen Eignung, ersetzen aber keine fachliche Auswahl. Entscheidend ist nicht das Label, sondern die Eignung der vollständig konfigurierten Route für die Aufgabe.
- **Spezialisierte Modelle** können bei bestimmten Formaten besonders sinnvoll sein: etwa bei Sprache, Bild, Code, Übersetzung, Retrieval, Embeddings oder einer eng definierten Klassifikation.

Diese Vielfalt ist ein Fortschritt. Sie verhindert, dass ein einzelnes Modell zum alleinigen Maßstab wird. Aber sie erzeugt auch eine neue Form von Komplexität: Die Modelllandschaft verändert sich schneller, als normale Nutzerinnen und Nutzer sie sinnvoll bewerten können.

Wer soll im Arbeitsalltag entscheiden, ob eine kurze Zusammenfassung ein kleines Modell braucht, ob eine Vertragsanalyse ein stärkeres Modell und zusätzliche Quellenprüfung verlangt oder ob eine sensible Anfrage nur in einer bestimmten Betriebsumgebung verarbeitet werden darf? Wer soll bei jeder neuen Modellversion Preise, Latenz, Qualität, Datenschutz und Umweltwirkung neu abwägen?

Die ehrliche Antwort lautet: Das kann man nicht an jede einzelne Person delegieren.

## Warum die richtige Auswahl wichtig ist

Ein zu kleines Modell kann eine Aufgabe missverstehen, wichtige Einschränkungen übersehen oder aus einem komplexen Material eine zu oberflächliche Antwort machen. Ein zu großes Modell ist aber ebenfalls keine neutrale Sicherheitsentscheidung.

Größere oder aufwendiger arbeitende Modelle können höhere Kosten verursachen, mehr Rechenzeit benötigen und mehr Energie in Anspruch nehmen. Wie hoch der konkrete Ressourcenverbrauch ausfällt, hängt vom Modell, der Hardware, der Auslastung, der Antwortlänge, dem Standort des Rechenzentrums und weiteren Faktoren ab. Gerade deshalb wäre es unseriös, aus einem Modellnamen allein einen exakten ökologischen Fußabdruck abzuleiten. Die Richtung ist trotzdem klar: Rechenaufwand ist nicht kostenlos – weder finanziell noch ökologisch.

Für eine gute Modellwahl müssen mindestens vier Ziele zugleich betrachtet werden:

| Ziel | Leitfrage |
| --- | --- |
| Qualität | Ist die Antwort für diese Aufgabe fachlich und formal zuverlässig genug? |
| Angemessenheit | Nutzt das System nicht mehr Modellkapazität als nötig? |
| Betrieb | Passen Latenz, Verfügbarkeit, Datenverarbeitung und Kosten zum Nutzungskontext? |
| Verantwortung | Sind Datenschutz, Schutzbedarf, Nachvollziehbarkeit und Ressourcenwirkung berücksichtigt? |

Das ist kein Plädoyer für Billig-KI. Es ist ein Plädoyer gegen die Gewohnheit, Unsicherheit immer mit dem größten verfügbaren Modell zu beantworten.

Wenn ein kleines, gut evaluiertes Modell eine Anfrage zuverlässig klassifizieren, eine Sprache erkennen, einen Termin extrahieren oder einen Text in eine klare Struktur bringen kann, wäre es verschwenderisch, dafür automatisch das rechenintensivste Modell einzusetzen. Umgekehrt darf eine anspruchsvolle Aufgabe nicht aus Sparsamkeit auf ein Modell geroutet werden, das ihre Anforderungen nicht erfüllt.

Die richtige Frage lautet also nicht: *Welches Modell ist das beste?* Sondern: *Welches Modell ist unter diesen Bedingungen das passendste?*

## Die Modellentscheidung ist für Menschen zu kontextabhängig

Modellmenüs erwecken den Eindruck, die Entscheidung sei einfach: Man schaut auf ein paar Namen und wählt. In Wahrheit hängt sie von Kontext ab, den ein Menü kaum vermitteln kann.

Eine Anfrage kann zum Beispiel gleichzeitig beinhalten:

- eine einfache sprachliche Umformulierung,
- ein sensibles Dokument,
- die Anforderung, aktuelle Quellen zu prüfen,
- eine gewünschte Antwort in leichter Sprache,
- eine knappe Deadline,
- eine interne Vorgabe zur Datenverarbeitung,
- und den Wunsch nach einer nachvollziehbaren Begründung.

Das geeignete Modell ergibt sich nicht nur aus dem Thema. Es ergibt sich aus Aufgabe, Risiko, Format, benötigten Werkzeugen, Sprache, Schutzbedarf, gewünschter Tiefe und Qualitätsanspruch.

Hinzu kommt: Nutzerinnen und Nutzer kennen ihre Aufgabe, aber nicht zwingend die aktuellen Stärken und Schwächen jeder Modellvariante. Sie sollten ihre Absicht beschreiben können. Das System muss daraus eine gute technische Entscheidung machen.

Das ist vergleichbar mit anderen Infrastrukturen. Niemand erwartet von einer Lehrkraft, vor jedem Videocall ein Routing-Protokoll auszuwählen. Niemand sollte vor einer Textzusammenfassung zuerst ein Benchmark-Archiv lesen müssen. Gute Infrastruktur macht Komplexität nicht unsichtbar, aber sie nimmt den Menschen die falsche Art von Verantwortung ab.

## Ein schlanker Modellklassifizierer als Routing-Schicht

Unser Ansatz wäre deshalb kein weiteres großes Universalmodell vor jedem Prompt. Im Gegenteil: Am Anfang steht ein **kleiner Modellklassifizierer**.

Dieses schlanke Modell oder Regel-KI-Hybrid schaut sich die Anfrage an und ordnet sie ein. Es beantwortet nicht die eigentliche Fachfrage. Es entscheidet zunächst nur, welche Bearbeitungsroute angemessen ist.

Vereinfacht könnte der Ablauf so aussehen:

1. Die Anfrage wird auf **Aufgabentyp** eingeordnet: etwa Zusammenfassung, Übersetzung, Recherche, Code, kreative Konzeption, Extraktion, Bildbeschreibung oder komplexe Analyse.
2. Der Klassifizierer erkennt **Komplexität und Qualitätsbedarf**: Reicht eine direkte, kurze Antwort? Braucht die Aufgabe mehrere Arbeitsschritte, Werkzeugnutzung oder besondere Sorgfalt?
3. Er berücksichtigt **Rahmenbedingungen**: Schutzbedarf, erlaubte Betriebsumgebung, Sprache, gewünschtes Ausgabeformat, Antwortzeit und Kostenbudget.
4. Eine zentrale Routing-Policy ordnet diesen Merkmalen eine passende Modellklasse und Einstellung zu.
5. Das System wählt das **kleinste geeignete Modell**. Nur wenn die Anfrage es erfordert, eskaliert es auf eine stärkere Route.

Das Entscheidende ist: Der Klassifizierer muss nicht das klügste Modell im System sein. Seine Aufgabe ist eng begrenzt. Gerade deshalb kann er klein, schnell und kostengünstig sein. Wo möglich, kann die erste Einordnung zusätzlich durch klare Regeln erfolgen: Sensible Daten dürfen bestimmte Routen nicht verlassen. Eine Anfrage mit aktueller Quellenpflicht benötigt eine Recherche-Route. Eine reine Extraktion muss nicht auf einem teuren Reasoning-Modell landen.

## Was OpenRouter bereits vormacht – und warum das noch nicht genügt

Dienste wie OpenRouter zeigen, dass Modellrouting längst praktisch einsetzbar ist. Der dort angebotene **Auto Router** analysiert einen Prompt und wählt aus einer kuratierten Menge leistungsfähiger Modelle eine passende Route. Nach eigener Dokumentation fließen dabei unter anderem Prompt-Komplexität, Aufgabentyp und Modellfähigkeiten ein. Der Router wird von NotDiamond betrieben; in der Antwort wird ausgewiesen, welches Modell tatsächlich verwendet wurde.

Das löst ein wichtiges Basisproblem: Eine Anwendung muss nicht mehr für jede Anfrage hart auf ein einziges Modell festgelegt werden. Der Modellpool kann eingeschränkt werden, etwa auf bestimmte Anbieter oder Modellfamilien. Außerdem lässt sich ein Kosten-Qualitäts-Korridor konfigurieren. Und OpenRouter trennt die Frage der **Modellwahl** von der Frage, über welchen **Provider-Endpunkt** ein Modell ausgeführt wird: Provider-Routing kann nach Preis, Durchsatz, Latenz oder Datenrichtlinien steuern und bei Ausfällen auf erlaubte Alternativen zurückfallen.

Das ist nützlich und für viele allgemeine Anwendungen ein guter Standard. Auch die Sitzungsbindung ist sinnvoll: Innerhalb einer Unterhaltung kann die gewählte Modell- und Providerroute für eine begrenzte Zeit beibehalten werden. Das schafft konsistentere Antworten und kann Caches besser nutzen.

Für unseren Anwendungsfall reicht ein solches allgemeines Prompt-Routing jedoch nicht aus. Es beantwortet im Kern die Frage: *Welches Modell passt voraussichtlich zu diesem Prompt?* Wir müssen eine weitergehende Frage beantworten: *Welche didaktisch, fachlich, rechtlich und betrieblich zulässige Bearbeitungsroute passt zu dieser konkreten Aufgabe für diese konkreten Lernenden?*

Ein Beispiel: „Erkläre Bruchrechnung“ ist nicht eine einzige Aufgabe. Für eine dritte Klasse kann es um anschauliche Grundvorstellungen mit Pizza- oder Papierstreifen-Modellen gehen. In Klasse sieben kann die Aufgabe das Addieren ungleichnamiger Brüche und typische Fehlvorstellungen betreffen. In der Oberstufe kann dieselbe Formulierung Teil einer formalen Wiederholung oder einer Diagnoseaufgabe sein. Ein allgemeiner Router erkennt möglicherweise, dass eine einfache Erklärung genügt. Er kennt aber nicht automatisch Jahrgangsstufe, Bundesland, Fachcurriculum, Lernziel, vorhandenes Material, Sprachstand, Unterstützungsbedarf, zulässige Hilfetiefe oder die Frage, ob die KI eine Lösung erklären, eine Aufgabe generieren, eine Kompetenz diagnostizieren oder lediglich Feedback formulieren soll.

Genau diese Informationen dürfen nicht allein aus dem Wortlaut eines Prompts erraten werden. Sie müssen – datensparsam und nachvollziehbar – als Kontext verfügbar sein: zum Beispiel aus der gewählten Klassenstufe, dem Fach, einer Kompetenzbeschreibung, dem Aufgabenformat, Rollen- und Rechteinformationen oder bewusst gesetzten pädagogischen Einstellungen. Dieser Kontext kann beim einzelnen Aufruf als strukturierter zusätzlicher Input übergeben werden. Er kann aber auch als kontrollierter Sitzungs- oder Nutzungskontext bestehen bleiben: etwa solange eine Lerngruppe an einer Unterrichtseinheit arbeitet oder eine Lehrkraft eine Aufgabenserie vorbereitet. Die konkrete Frage „Erkläre Bruchrechnung“ wird dann nicht isoliert geroutet, sondern zusammen mit den für die Aufgabe erforderlichen Angaben bewertet. Der Kontext muss dabei nicht in jedem Prompt erneut ausgeschrieben werden; er muss der Routing-Schicht nur eindeutig, aktuell und für Nutzende korrigierbar zur Verfügung stehen. Erst diese Verbindung aus Anfrage **und** strukturiertem Kontext macht aus Modellrouting eine fachlich verantwortbare Auswahl.

## Das Mapping gehört in eine transparente Policy, nicht in einen Bauchgefühl-Algorithmus

Hinter dem Klassifizierer liegt ein gepflegtes Mapping. Es verbindet Aufgabenarten, Komplexitätsstufen und Betriebsanforderungen mit zugelassenen Modellrouten und Einstellungen.

Ein vereinfachtes Beispiel:

| Anfrageprofil | Zusätzlicher Kontext | Geeignete Route | Mögliche Einstellungen |
| --- | --- | --- | --- |
| Kurze Klassifikation, Extraktion, Formatprüfung | keine oder minimale Zusatzdaten | kleines, schnelles Modell oder regelbasierte Verarbeitung | niedrige Antwortlänge, keine Werkzeuge |
| Zusammenfassung eines klar abgegrenzten Textes | Zweck und gewünschte Länge | effizientes Textmodell | begrenzter Kontext, strukturierte Ausgabe |
| Erklärung oder Übung im Bildungskontext | Jahrgangsstufe, Fach, Kompetenzziel, Unterstützungsbedarf | didaktisch evaluierte Text- oder Tutorroute | altersangemessene Sprache, definierte Hilfetiefe, keine unzulässige Lösungsvorgabe |
| Anspruchsvoller Fachentwurf oder komplexe Analyse | Domäne, Qualitätsniveau, gegebenenfalls zugelassene Quellen | leistungsstärkeres Modell | höhere Denkzeit, Quellen- oder Werkzeugroute nach Bedarf |
| Aktuelle Faktenfrage | Aktualitätsanforderung, zugelassene Quellen | Modell plus Recherche-/Quellenroute | Quellen sichtbar machen, Aktualität prüfen |
| Sensible oder besonders geschützte Inhalte | Schutzbedarf, Rollen und zulässige Datenräume | zugelassene, kontrollierte Betriebsumgebung | Datenminimierung, Protokollierung, gegebenenfalls lokale Verarbeitung |
| Bild-, Audio- oder multimodale Aufgabe | Medium, Rechte- und Zweckkontext | spezialisierte multimodale Route | nur erforderliche Medien verarbeiten |

Dieses Mapping ist keine einmalige Konfiguration. Es ist ein Governance-Artefakt. Modelle verändern sich, Preise ändern sich, neue offene Alternativen entstehen, Qualitätsmessungen liefern neue Ergebnisse, rechtliche Anforderungen verschieben sich. Deshalb braucht die Routing-Policy Versionen, Verantwortlichkeiten, regelmäßige Evaluierungen und dokumentierte Änderungen.

## Eskalation als kontrollierter Arbeitsablauf

Die erste Antwort darf kein bewusst zu kleiner Testlauf sein. Der Klassifizierer wählt von Beginn an die kleinste Route, die für die Aufgabe als ausreichend geeignet bewertet wurde. Eine Eskalation ist die Ausnahme: Sie greift, wenn diese Einordnung nicht trägt, sich die Aufgabe verändert oder festgelegte Qualitätskriterien verfehlt werden.

Ein Teil dieser Prüfung kann automatisiert erfolgen. Bei strukturierten Ausgaben lässt sich etwa prüfen, ob das vereinbarte Format gültig ist, ob Pflichtfelder fehlen oder ob verlangte Quellen nachgewiesen sind. Bei didaktischen Aufgaben lassen sich Jahrgangsstufe, Kompetenzziel und zulässige Hilfetiefe gegen die Ausgabe prüfen. Solche Kontrollen benötigen nicht zwingend ein weiteres großes Modell; Regeln, Schema-Prüfungen und kleine spezialisierte Prüfschritte reichen häufig aus.

Nutzende bleiben dennoch Teil des Prozesses. Nach einer Antwort genügt ein kurzer Kontrollpunkt: „Passt das Ergebnis?“ Bei Bedarf kann die Person nicht nur „erneut versuchen“, sondern den Grund benennen: zu oberflächlich, Quellen prüfen, für Klasse 7 erklären, in leichter Sprache formulieren oder anders strukturieren. Die Anwendung übersetzt dieses Feedback in eine konkrete neue Route. Das kann mehr Reasoning-Aufwand bedeuten, eine Recherchefunktion, ein anderes Ausgabeformat, ein fachlich geeigneteres Modell oder erst dann eine leistungsstärkere Modellstufe.

Ein Button wie **„Mit anderer Route erneut versuchen“** ist sinnvoll, wenn er nicht blind das teuerste Modell startet. Er sollte kenntlich machen, was sich ändert: etwa „mit Quellenrecherche“, „mit stärkerer Prüfroute“ oder „für die angegebene Jahrgangsstufe neu formulieren“. Die zweite Fassung bleibt als eigene Version sichtbar; auf Wunsch lässt sich nachvollziehen, welche Route geändert wurde und warum.

In einem Bildungskontext könnte eine Lehrkraft zunächst eine altersangemessene Aufgabenidee erhalten. Ergänzt sie anschließend „Differenzierung für zwei Leistungsniveaus“, ist das kein bloßes Signal für ein größeres Modell. Der Workflow wechselt in eine didaktische Planungsroute, die Kompetenzziel, Jahrgangsstufe, vorhandenes Material und Regeln für Hilfen oder Musterlösungen berücksichtigt.

Das Feedback verbessert zugleich die Routing-Policy. Aggregiert und datensparsam ausgewertet zeigt es, wo die Erstklassifikation zu häufig korrigiert werden muss und wo eine präzisere Kontextangabe wirksamer ist als mehr Modellkapazität. Für folgenreiche Ergebnisse bleibt eine menschliche Freigabe oder fachliche Redaktion die letzte Stufe.

## Qualität darf nicht nur versprochen werden

Ein Modellrouter ist nur dann besser als ein Modellmenü, wenn seine Entscheidungen überprüfbar sind. Dafür braucht es Evaluationen mit realistischen Aufgaben – nicht nur allgemeine Benchmarkwerte.

Zu prüfen wären zum Beispiel:

- Erreicht die gewählte Route die vereinbarte Qualität für typische Aufgaben?
- Wie oft wird unnötig auf ein großes Modell eskaliert?
- Wo wird zu sparsam geroutet und Qualität verloren?
- Welche Routen verursachen welche Latenzen und Kosten?
- Werden Schutzbedarfe und Betriebsregeln zuverlässig eingehalten?
- Können Nutzende nachvollziehen, warum eine bestimmte Route gewählt wurde?

Das Ziel ist keine perfekte Vorhersage. Es geht um eine lernende, kontrollierte Infrastruktur: kleine Aufgaben bleiben klein; komplexe Aufgaben bekommen die nötige Leistung; sensible Inhalte bleiben in zulässigen Grenzen; und Veränderungen in der Modelllandschaft werden nicht erst sichtbar, wenn einzelne Menschen zufällig davon erfahren.

## Die Auswahl ist Teil digitaler Souveränität

Wer Modellwahl nur als Komfortfunktion betrachtet, übersieht ihre politische und infrastrukturelle Dimension. Die Entscheidung, welches Modell für welche Aufgabe eingesetzt wird, beeinflusst Kosten, Abhängigkeiten, Datenflüsse, Energieeinsatz und die Möglichkeit, Alternativen einzusetzen.

Ein guter Router kann deshalb auch offene und proprietäre Modelle sinnvoll kombinieren. Er muss nicht ideologisch so tun, als sei eine Kategorie immer überlegen. Aber er sollte transparent machen, warum eine Route gewählt wurde, welche Anforderungen sie erfüllt und welche Alternativen es gibt.

Für öffentliche und bildungsbezogene Infrastrukturen ist das besonders wichtig. Hier darf die Antwort auf Modellvielfalt nicht sein, dass jede Schule, jede Behörde oder jede Lehrkraft ihr eigenes Experiment mit Modelllisten, Verträgen und Datenwegen machen muss. Nötig sind gemeinsame, überprüfbare Auswahlregeln und eine Infrastruktur, die diese Regeln praktisch umsetzt.

Die spannendste KI-Oberfläche der nächsten Jahre könnte deshalb erstaunlich unspektakulär aussehen: kein Cockpit voller Modellnamen, sondern ein gutes Eingabefeld. Dahinter arbeitet eine Routing-Schicht, die Qualität nicht mit Verschwendung verwechselt und Souveränität nicht mit manueller Überforderung.

> Nicht jede Anfrage braucht das größte Modell. Aber jede Anfrage verdient eine passende, verantwortbare und nachvollziehbare Entscheidung.

## Offene Fragen für die weitere Ausarbeitung

Dieser Entwurf beschreibt bewusst einen Ansatz, keine fertige Referenzarchitektur. Für die nächste Fassung wären insbesondere diese Fragen zu klären:

1. Welche Aufgabenklassen und Qualitätskriterien sollen in einer ersten Routing-Policy abgedeckt werden?
2. Welche Daten- und Schutzbedarfsklassen schließen bestimmte Anbieter oder Betriebsformen aus?
3. Wie wird Qualität je Aufgabenklasse gemessen und wie häufig wird das Mapping aktualisiert?
4. Welche Informationen über die gewählte Route sollen Nutzerinnen und Nutzer standardmäßig sehen – und welche nur auf Nachfrage?
5. Wie kann ein solches Routing offen dokumentiert, evaluiert und zwischen Institutionen nachnutzbar gemacht werden?
