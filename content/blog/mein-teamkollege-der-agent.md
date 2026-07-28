---
title: "Mein Teamkollege, der Agent"
date: 2026-07-28
description: "Ein persönlicher Beitrag darüber, warum KI-Agenten heute meist isoliert pro Person und pro Projekt arbeiten – und was es braucht, damit Wissen, Skills und Kontext im Team ankommen statt in Einzelinseln liegen zu bleiben."
summary: "Kaum jemand arbeitet heute noch ohne KI-Unterstützung – aber die Agenten dahinter bleiben oft isolierte Inseln pro Person und pro Projekt. AGENTS.md hilft, projektübergreifendes Wissen zu teilen, doch erst geteilte Skills, geteilter Kontext und Werkzeuge wie Buzz von Block machen aus vielen Einzelagenten ein echtes Team."
tags: ["KI", "Agentic AI", "Teamarbeit", "Infrastruktur", "Tools"]
translationKey: "my-teammate-the-agent"
heroImage: "/img/blog/mein-teamkollege-der-agent/hero-teamkollege-agent.svg"
heroAlt: "Abstrakte Infografik von zwei isolierten Entwickler-Inseln mit jeweils eigenem KI-Agenten, verbunden über eine zentrale Brücke aus geteilten Skills und geteiltem Kontext."
---

*Ein persönlicher Beitrag darüber, warum meine wichtigsten Teamkolleg:innen zunehmend Agenten sind – und warum genau das ein Organisationsproblem ist, kein technisches.*

Auch wenn ein Team noch nicht konsequent „Agentic First" arbeitet, wird heute kaum eine Entwicklerin, ein Entwickler oder ein anderes Teammitglied noch ohne KI-Unterstützung arbeiten. Das Autocomplete im Editor, der Chat für die schnelle Rückfrage, der Agent, der eigenständig einen Pull Request vorbereitet: KI ist längst kein Sonderwerkzeug mehr, sondern Teil des Alltags – ob eine Organisation das strategisch entschieden hat oder nicht.

<aside class="jr-infobox">
  <p class="jr-infobox-label">Kurz erklärt</p>
  <strong class="jr-infobox-title">Was heißt „Agentic First"?</strong>
  <p>Ein Team arbeitet „Agentic First", wenn KI-Agenten nicht nur als gelegentliches Hilfsmittel genutzt werden, sondern von Anfang an als handelnde Beteiligte im Arbeitsprozess mitgedacht werden: Aufgaben werden so formuliert, dokumentiert und strukturiert, dass ein Agent sie eigenständig übernehmen kann – inklusive eigener Zugriffsrechte, eigener Historie und eigener Verantwortlichkeiten, nicht nur als Autovervollständigung für Menschen.</p>
</aside>

Doch genau hier zeigt sich ein Webfehler dieser dezentralen KI-Infrastrukturen: Die Agenten arbeiten isoliert. Jede Person hat ihren eigenen Agenten, ihre eigene Chathistorie, ihre eigenen Einstellungen. Im Idealfall verfügt ein Agent noch über Kontextwissen aus dem konkreten Projekt – etwa in Form einer `AGENTS.md`, die dieses Wissen auch über das Projektrepositorium an andere Entwickler:innen zurückfließen lässt. Doch bleiben projektübergreifende Learnings und Kontext in den Inseln der jeweiligen Entwicklerinnen und Entwickler hängen.

<aside class="jr-infobox">
  <p class="jr-infobox-label">Kurz erklärt</p>
  <strong class="jr-infobox-title">AGENTS.md</strong>
  <p>AGENTS.md ist eine einfache, offene Konvention: eine Markdown-Datei im Wurzelverzeichnis eines Repositoriums, die KI-Agenten projektspezifisches Wissen mitgibt – Build- und Testbefehle, Codestil, Architekturentscheidungen, Dinge, die sich nicht allein aus dem Code erschließen lassen. Anders als eine README richtet sie sich nicht in erster Linie an Menschen, sondern an Agenten – wird aber im selben Repository von allen genutzt, die dort arbeiten. Ursprünglich von OpenAI für Codex vorangetrieben, wird das Format inzwischen von vielen Werkzeugen unterstützt und wurde Ende 2025 an die Agentic AI Foundation unter der Linux Foundation übergeben – ähnlich wie das Model Context Protocol (MCP) von Anthropic oder das Agentenframework Goose von Block.</p>
</aside>

## Wenn Agenten selbst lernen, geht das gemeinsame Wissen verloren

Besonders spürbar wird das Problem, wenn Agenten mit einer Self-Learning-Funktion ausgestattet sind, bei der sie gewonnene Erkenntnisse und Präferenzen dauerhaft speichern: Wie ich Code-Reviews gerne formuliert haben möchte, welche Abkürzungen ein Team nutzt, welche Lösung sich in einem ähnlichen Fall bereits bewährt hat. Genau hier geht Wissen und Synergie verloren, wenn diese Erinnerung nur lokal bei einer Person oder einer einzelnen Werkzeug-Installation liegt. Eine Kollegin löst am Montag ein Problem, ihr Agent merkt sich die Lösung – und am Dienstag löst ein Kollege in einem Nachbarprojekt exakt dasselbe Problem noch einmal, weil sein Agent von der Erkenntnis nichts weiß.

Man kann diesen Effekt abmildern, indem man Agenten anweist, Wissen und Kontext möglichst umfassend in projektspezifischen Dateien wie der AGENTS.md abzulegen, statt es ausschließlich im privaten Gedächtnis des Agenten zu behalten. Das ist ein guter erster Schritt. Aber was ist, wenn ein zweites Projekt mit demselben Techstack arbeitet? Dann sind diese Erkenntnisse dort schlicht nicht vorhanden, weil sie im Repository des ersten Projekts eingesperrt bleiben. Hier braucht es einen Workflow, der solche Informationen aus den Projektdateien oder aus den persönlichen Dateien einzelner Personen extrahiert und zentral zur Verfügung stellt – über einzelne Repositorien und einzelne Personen hinweg.

## Zwei Bausteine, die aus Einzelagenten ein Team machen

Damit aus vielen isolierten Agenten tatsächlich geteiltes Wissen wird, braucht es im Kern zwei unterschiedliche, sich ergänzende Bausteine: **Shared Skills** und **Shared Context**.

**Shared Skills** sind wiederverwendbare, versionierte Fähigkeitspakete: ein gebündeltes Vorgehen, ein Werkzeug, eine Prüfroutine, verpackt so, dass sie nicht neu erfunden, sondern installiert werden können. Statt dass jede Person ihre eigene Sammlung an Prompts, kleinen Skripten und Kniffen anhäuft, lassen sich solche Fähigkeiten heute organisationsweit bereitstellen: Verantwortliche stellen einen kuratierten Marktplatz zusammen, aus dem Teams oder einzelne Gruppen genau die Skills, Agenten und Werkzeuge erhalten, die zu ihrer Arbeit passen – von der Marketingabteilung bis zum Entwicklerteam. Wer selbst eine nützliche Fähigkeit baut, kann sie zusätzlich gezielt mit Kolleginnen und Kollegen teilen, nicht nur top-down verteilen lassen. Entscheidend ist: Eine Skill ist kein Geheimwissen einer einzelnen Person mehr, sondern ein Artefakt, das gepflegt, versioniert und organisationsweit nachgenutzt wird.

**Shared Context** meint dagegen nicht das Können, sondern das Wissen: gespeicherte Fakten, Entscheidungen, Präferenzen und Erfahrungen, auf die mehrere Agenten – unabhängig von Person, Werkzeug oder Projekt – zugreifen können. Technisch entstehen dafür zunehmend eigene Gedächtnisdienste, die über das Model Context Protocol angebunden werden: Ein Agent kann eine Erkenntnis ablegen, ein anderer Agent – vom selben Menschen oder von jemand anderem gestartet, mit demselben oder einem anderen Sprachmodell – kann sie später wiederfinden. Damit wird aus vielen einzelnen, stateless arbeitenden Agenten so etwas wie institutionelles Gedächtnis: Architekturentscheidungen, Konventionen, „das haben wir schon einmal versucht, das hat nicht funktioniert" – verfügbar über Sitzungen, Projekte und Werkzeuggrenzen hinweg, nicht nur im Kopf einer einzelnen Chathistorie.

Beide Bausteine lösen unterschiedliche Hälften desselben Problems. Shared Skills verhindern, dass jede Person dieselbe Fähigkeit neu erfindet. Shared Context verhindert, dass dieselbe Erkenntnis mehrfach neu gewonnen werden muss. Erst zusammen ergeben sie das, was am Anfang gefehlt hat: eine Organisation, die aus den Erfahrungen ihrer Agenten lernt – und nicht nur einzelne Personen, die zufällig denselben Agenten benutzen.

## Wie Organisationen das heute technisch umsetzen

Ganz gleich, welches Werkzeug ein Team einsetzt: Der Weg von „jede Person hat ihre eigene Sammlung an Prompts und Skripten" zu „die Organisation stellt geprüfte Fähigkeiten bereit" folgt inzwischen einem ähnlichen Muster.

Der übliche Ausgangspunkt ist eine marktplatzartige Verwaltungsoberfläche, die von den Administrator:innen der Organisation gepflegt wird – meist im selben Backend, in dem ohnehin schon Nutzerkonten, Gruppen und Berechtigungen verwaltet werden. Dort wird zunächst eine Quelle für Skills und Plugins hinterlegt: häufig ein Git-Repository, ob auf GitHub, GitLab oder selbst gehostet, das die eigentlichen Fähigkeiten als versionierte Pakete enthält – vergleichbar mit einem eigenen kleinen App Store für Agenten. Aus dieser Quelle wählen Verantwortliche aus, welche Skills, Agenten und Anbindungen an externe Werkzeuge bestimmten Gruppen zur Verfügung stehen: Das Entwicklerteam bekommt andere Fähigkeiten als das Marketingteam, eine Abteilung mit besonderem Schutzbedarf bekommt womöglich nur eine eingeschränkte Auswahl.

Zusätzlich zu dieser Top-down-Verteilung gibt es meist einen zweiten, informelleren Weg: Einzelne Personen, die selbst eine nützliche Fähigkeit gebaut haben, können sie gezielt mit Kolleginnen und Kollegen teilen, ohne dass diese gleich organisationsweit ausgerollt werden muss. So entsteht ein Kreislauf: Brauchbare Einzellösungen wandern von der persönlichen Ebene auf die Team-Ebene und von dort, wenn sie sich bewähren, in die offizielle, organisationsweit gepflegte Sammlung.

Ähnliche Mechanismen finden sich inzwischen bei mehreren Anbietern von KI-Entwicklungswerkzeugen, nicht nur bei einem einzelnen Produkt. Das Prinzip bleibt dabei immer dasselbe: Fähigkeiten werden nicht mehr einzeln in jedem Editor oder jeder Chat-Oberfläche neu zusammengeklickt, sondern zentral definiert, mit Berechtigungen versehen, versioniert – und dann in die jeweiligen Werkzeuge der einzelnen Teammitglieder ausgespielt.

Das ist reine Infrastruktur, kein Selbstzweck. Eine Organisation, die diesen Schritt nicht geht, verliert dadurch nicht sofort sichtbar etwas – sie zahlt aber langfristig mit doppelter Arbeit, uneinheitlichen Ergebnissen und Wissen, das mit einzelnen Personen die Organisation verlässt, sobald sie das Team wechseln.

## Ein neuer Ansatz: Buzz von Block

Einen spannenden neuen Ansatz verfolgt das Werkzeug **Buzz** von Block, dem Unternehmen von Jack Dorsey. Buzz vereint Teamkommunikation ähnlich wie in Slack, eine Git-Verwaltung ähnlich wie bei GitHub, und Agenten als sogenannte First-Class Citizens – mit eigenen Identitäten, die an ein menschliches Teammitglied angehängt sind. Statt eines geteilten Bot-Tokens erhält jeder Agent ein eigenes kryptografisches Schlüsselpaar; eine zweite Signatur verknüpft ihn nachvollziehbar mit der Person, die ihn betreibt. Jede Nachricht, jede Code-Review, jeder Workflow-Schritt wird als kryptografisch signiertes Ereignis auf dem dezentralen Nostr-Protokoll abgelegt – nicht als Zeile in einer proprietären Datenbank eines einzelnen Anbieters.

Praktisch bedeutet das: Agenten können in Buzz eigenständig Nachrichten posten, Code reviewen und freigegebene Automatisierungen starten – sichtbar für das ganze Team, mit eigenen Rechten und einer nachvollziehbaren Historie, statt als anonymer Bot im Hintergrund. Das Werkzeug ist bewusst modell- und harness-agnostisch: Teams können Agenten auf Basis von Claude Code, OpenAI Codex oder dem quelloffenen Framework Goose einsetzen, angebunden über das Agent Client Protocol. Der Code steht unter Apache-2.0-Lizenz auf github.com/block/buzz; Teams können Buzz selbst hosten oder eine verwaltete Version nutzen.

Ende Juli 2026 ist Buzz noch sehr früh dran – Version 0.4.21, einzelne Funktionen fehlen noch, und ob sich das Konzept in der Breite durchsetzt, ist offen. Aber die Richtung ist bemerkenswert: Wenn Agenten eine eigene, überprüfbare Identität im selben Kommunikationsraum haben wie Menschen, dann verschwindet die Trennung zwischen „meinem privaten Assistenten" und „unserem Team-Werkzeug". Ein Agent postet dann nicht mehr nur in meinem Chatfenster, sondern sichtbar im Teamkanal – mit Historie, mit Zurechenbarkeit, mit der Möglichkeit, dass andere seine Arbeit einsehen, kommentieren und darauf aufbauen.

## Nicht der Benchmark entscheidet, sondern die Organisation der Zusammenarbeit

Klar ist: Entscheidend ist nicht mehr, ob ein Sprachmodell in einem Benchmark zwei Punkte besser abschneidet als ein anderes. Entscheidend ist die Frage, wie ein Team gemeinsames Arbeiten mit Agenten organisiert: Wo landet das, was ein Agent lernt? Wer sieht, was ein Agent tut? Wie wird aus der Erfahrung einer einzelnen Person geteiltes Wissen einer ganzen Organisation?

AGENTS.md, geteilte Skills, geteilter Kontext und Werkzeuge wie Buzz sind unterschiedliche Antworten auf dieselbe Frage. Keine davon ist für sich allein die Lösung. Aber gemeinsam zeigen sie, wohin die Reise geht: weg vom isolierten persönlichen Assistenten, hin zum Agenten als echtem Teamkollegen – mit eigener Identität, mit geteiltem Gedächtnis, und eingebettet in dieselben Werkzeuge und Gespräche wie seine menschlichen Kolleginnen und Kollegen.
