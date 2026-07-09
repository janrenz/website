---
title: "Ist H5P tot?"
date: 2026-07-09
description: "Ein öffentlicher Entwurf zur Frage, warum interaktive Lerninhalte künftig eher semantische Aufgabenformate, Skills, Renderer und optionale KI-/Tutor-Anbindungen brauchen als ein monolithisches Autorentool."
summary: "H5P war wichtig, um Interaktivität in Lernplattformen zu bringen. Der nächste Schritt könnte aber eine entkoppelte Architektur aus semantischen Aufgabenformaten, Skills, Renderer-Bibliotheken und optionaler KI-/Tutor-Anbindung sein."
tags: ["Bildungsmedien", "Interoperabilität", "H5P", "KI", "Lerninfrastruktur"]
translationKey: "is-h5p-dead"
heroImage: "/img/blog/ist-h5p-tot/hero-runtime-wrapper.png"
heroAlt: "Abstrakte Systemillustration mit einem semantischen Aufgabenkern, umgeben von Skill-, Runtime- und Renderer-Schichten sowie feinen Verbindungen zu KI und Tutor-Systemen."
---

> Arbeitsthese: H5P ist nicht deshalb überholt, weil niemand mehr interaktive Aufgaben braucht. Im Gegenteil: Interaktive, adaptive und KI-gestützte Lernaufgaben werden wichtiger. Überholt ist eher die Vorstellung, dass diese Aufgaben als manuell zusammengeklickte Tool-Pakete entstehen müssen.


<div class="jr-transparency-note">
  <strong>Entwurf:</strong> Dieser Beitrag ist ein öffentlicher Arbeitsstand. Argumentation, Beispiele und Begriffe werden noch redigiert und geschärft.
</div>

H5P war lange eine gute Antwort auf ein reales Problem: Wie bekommen wir interaktive Lerninhalte in Lernplattformen, ohne für jede Aufgabe eine eigene Anwendung zu entwickeln? Multiple Choice, Drag and Drop, Lückentexte, interaktive Videos, kleine Branching-Szenarien — all das ließ sich mit H5P vergleichsweise niedrigschwellig erstellen und in Moodle, WordPress oder andere Systeme einbetten.

Aber die Produktionsbedingungen ändern sich gerade grundlegend. KI kann Aufgaben entwerfen, Varianten erzeugen, Feedback formulieren, Medien vorbereiten und Inhalte auf unterschiedliche Zielgruppen zuschneiden. Gleichzeitig brauchen Bildungsmedien einen höheren Grad an Standardisierung, Qualitätssicherung, Barrierefreiheit, Nachnutzbarkeit und technischer Anschlussfähigkeit. Genau an dieser Stelle wirkt H5P weniger wie die Zukunft — und mehr wie eine Übergangstechnologie.

Die Frage lautet also nicht: Wie verbessern wir H5P?

Die spannendere Frage lautet: Ist H5P tot? Und was bleibt übrig, wenn man H5P in seine eigentlichen Funktionen zerlegt?

## H5P bündelt Dinge, die künftig getrennt werden sollten

H5P verbindet mehrere Ebenen in einem Paket:

- ein Inhaltsmodell,
- eine Autorenoberfläche,
- eine Interaktionslogik,
- eine Laufzeitdarstellung,
- ein Export-/Importformat,
- eine begrenzte Form von Auswertung und Feedback.

Diese Bündelung war praktisch, solange die Alternative individuelle Softwareentwicklung war. Sie wird aber problematisch, sobald Lerninhalte stärker dynamisiert, automatisiert, qualitätsgesichert und plattformübergreifend ausgespielt werden sollen.

Denn dann möchte man nicht jede Aufgabe in einem Formular zusammenklicken. Man möchte Aufgaben semantisch beschreiben, automatisch prüfen, ihre Erstellung durch Skills standardisieren und professionalisieren — und sie anschließend über standardisierte Komponenten ausspielen.

Kurz gesagt:

> Nicht die Multiple-Choice-Aufgabe verschwindet. Es verschwindet die Notwendigkeit, sie als H5P-Formular zu bauen.

## Was stattdessen gebraucht wird

Aus meiner Sicht braucht es künftig vor allem drei Ebenen:

1. ein semantisches Austauschformat,
2. Skills beziehungsweise ausführbare didaktische Logik,
3. Renderer- und Komponentenbibliotheken.

Dazu kommt eine vierte Schicht, die in klassischen H5P-Szenarien kaum vorgesehen ist: eine optionale Laufzeit-Anbindung an KI-Systeme und Tutor-Systeme. Optional ist hier wichtig: Dieselbe Aufgabe muss auch ohne KI lauffähig bleiben — zum Beispiel in Moodle oder einem einfachen LMS-Embed. In adaptiven Systemen kann sie zusätzliche State-, Tutor- und KI-Funktionen nutzen; in einfacheren Umgebungen läuft sie mit reduzierter Funktionalität weiter.

## Ebene 1: Semantisches Austauschformat

Die erste Ebene beschreibt nicht, wie eine Aufgabe in einem bestimmten Tool aussieht. Sie beschreibt, was die Aufgabe didaktisch bedeutet.

Ein solches Format enthält zum Beispiel:

- Lernziel,
- Kompetenzbezug,
- Zielgruppe,
- Aufgabentyp,
- Aufgabenstellung,
- Material oder Stimulus,
- Antwortoptionen,
- richtige Lösungen,
- typische Fehlkonzepte,
- Feedback,
- Hilfen,
- Schwierigkeitsgrad,
- Variantenregeln,
- Metadaten,
- Lizenz,
- Barrierefreiheitsinformationen,
- Analytics- und Tutor-Anschlusspunkte.

Das Format ist nicht H5P-spezifisch. Es kann in JSON, YAML oder einem bestehenden Standardprofil beschrieben werden. Naheliegende Bezugspunkte liegen im OneEdTech-/IMS-Umfeld, etwa QTI für Aufgaben- und Testinteroperabilität. Für Lernressourcen-Metadaten kommen außerdem schema.org beziehungsweise LRMI infrage, für Lernaktivitäten xAPI oder Caliper. Entscheidend ist aber nicht ein einzelner Standardname, sondern die Architekturidee: Die Semantik muss portabel und interoperabel sein.

Ein einfacher Ausschnitt könnte so aussehen:

```ts
export const sampleTask = {
  id: "task-h5p-semantic-format-001",
  schema: "qx.task.v0",
  taskType: "multiple-choice",
  title: "Was ersetzt H5P in einem modernen Produktionsmodell?",
  stem: "Welche Bausteine sind in der These wichtiger als ein einzelnes Autorentool wie H5P?",
  learningObjective:
    "Lernende unterscheiden zwischen Austauschformat, Produktionsskill und Rendering-Bibliothek.",
  choices: [
    {
      id: "a",
      text: "Ein semantisches Austauschformat für Aufgaben, Medien, Feedback und Metadaten.",
      correct: true,
      feedback: "Genau: Die Semantik muss portabel sein, nicht an ein konkretes Tool gebunden."
    },
    {
      id: "b",
      text: "Ein standardisierter Skill, der aus der Semantik eine ausführbare Interaktion macht.",
      correct: true,
      feedback: "Richtig: Der Skill kapselt Didaktik, Bewertung, Feedbacklogik und Qualitätssicherung."
    },
    {
      id: "c",
      text: "Eine Renderer- oder Komponentenbibliothek, die Aufgaben konsistent ausspielt.",
      correct: true,
      feedback: "Richtig: Die Oberfläche wird wiederverwendbar und testbar, statt pro Aufgabe geklickt."
    },
    {
      id: "d",
      text: "Möglichst viele manuell gepflegte Varianten derselben H5P-Aufgabe.",
      correct: false,
      feedback: "Eher nicht: Genau diese manuelle Variantenpflege ist das Problem, das dynamische Formate vermeiden sollen."
    }
  ],
  metadata: {
    subject: "Digitale Bildungsinfrastruktur",
    targetGroup: "Bildungsmedien, OER, EdTech, Verwaltung",
    estimatedMinutes: 3,
    license: "CC BY 4.0",
    source: "Blog-Prototyp: Ist H5P tot?"
  },
  accessibility: {
    plainLanguage:
      "Die Aufgabe fragt, welche Teile man braucht, wenn Lernaufgaben nicht mehr fest in H5P gebaut werden.",
    ariaLabel: "Multiple-Choice-Aufgabe zum Ersatz von H5P durch semantische Formate und Skills"
  }
};
```

Das Entscheidende daran: Diese Aufgabe ist noch keine H5P-Aufgabe. Sie ist auch noch keine React-Komponente. Sie ist zunächst eine semantisch beschriebene Lerninteraktion.

## Ebene 2: Skills — aber differenziert

H5P denkt in Content Types: Multiple Choice, Drag and Drop, Interactive Video, Branching Scenario und so weiter. Ein moderneres Modell sollte nicht einfach „Content Types“ durch „Skills“ ersetzen. Der Skill-Begriff muss differenziert werden.

Es gibt mindestens vier unterschiedliche Skill-Rollen:

### 1. Produktions- und Autor:innen-Skills

Diese Skills helfen bei der Erstellung von Aufgaben. Sie kennen didaktische Muster, Fachlogiken, Zielgruppen, Schwierigkeitsgrade und typische Fehler bei der Aufgabenkonstruktion.

Sie unterstützen zum Beispiel:

- aus einem Fachtext geeignete Aufgabenideen abzuleiten,
- plausible Distraktoren zu formulieren,
- Feedback lernförderlich zu schreiben,
- Aufgaben nach Lernziel oder Kompetenzstufe zu variieren,
- Sprache, Niveau und Barrierefreiheit zu prüfen,
- Quellen, Lizenzen und Metadaten vorzubereiten.

Diese Skills laufen eher im Produktionsprozess, also bevor die Aufgabe veröffentlicht wird. Sie ersetzen nicht die Redaktion, sondern machen redaktionelle Arbeit schneller, konsistenter und prüfbarer.

### 2. Transformations- und Adapter-Skills

Diese Skills kennen bestehende Formate und Standards. Sie wissen zum Beispiel, wie ein Aufgabenobjekt in ein QTI-Profil, ein JSON-basiertes QX-Profil, eine xAPI-/Caliper-Eventstruktur oder eine LMS-kompatible Übergabe übersetzt werden kann.

Sie beantworten Fragen wie:

- Welche Felder braucht dieses Aufgabenformat?
- Welche Metadaten fehlen?
- Welche QTI-Struktur passt zur Aufgabe?
- Welche Analytics-Events sollten erzeugt werden?
- Welche Informationen müssen für LTI, cmi5 oder ein anderes Zielsystem ergänzt werden?

Hier liegt ein wichtiger Unterschied zu H5P: Nicht das Autorentool ist der Standard, sondern die Transformierbarkeit zwischen semantischen Formaten, Plattformen und Laufzeiten.

### 3. Runtime-Skills

Runtime-Skills laufen während der Nutzung. Sie kennen die bereitstehenden Aufgaben- und Medienbibliotheken, die verfügbaren Renderer, die unterstützten Interaktionstypen und die Best Practices für deren Einsatz.

Ein Runtime-Skill weiß zum Beispiel:

- welche React- oder Web-Component-Bibliothek eine Multiple-Choice-Aufgabe ausspielen kann,
- welche Video-Interaktionsbibliothek Timecodes, Sprungmarken oder Overlays unterstützt,
- welche Renderer barrierearm genug für den Zielkontext sind,
- welche Feedbackformen zur aktuellen Aufgabe passen,
- ob eine Aufgabe besser als Choice, Sortierung, Markierung, Dialogkarte oder Video-Checkpoint ausgespielt werden sollte,
- welche Ereignisse an Tutor, Analytics oder Learning Record Store gemeldet werden müssen.

Runtime-Skills sind damit nicht nur „Bewertungsfunktionen“. Sie sind Vermittler zwischen semantischem Aufgabenformat, vorhandenen Bibliotheken, didaktischen Best Practices und konkreter Ausspielung.

### 4. Qualitätssicherungs- und Policy-Skills

Diese Skills prüfen, ob eine Aufgabe fachlich, didaktisch, technisch, rechtlich und barrierearm genug ist. Sie können vor der Veröffentlichung laufen, aber auch zur Laufzeit kontrollieren, welche dynamischen Anpassungen erlaubt sind.

Sie prüfen zum Beispiel:

- Ist die Aufgabe eindeutig lösbar?
- Sind Distraktoren plausibel, aber nicht irreführend?
- Passt das Feedback zum Fehler?
- Wird nur Wissen abgefragt oder wirklich Verständnis gefördert?
- Sind Alt-Texte, Untertitel oder Tastaturbedienung berücksichtigt?
- Sind Lizenz und Quelle dokumentiert?
- Darf für diese Aufgabe eine KI-Hilfe angeboten werden?
- Darf die KI nur Hinweise geben oder auch Lösungsschritte erklären?
- Welche Daten dürfen an Tutor oder KI übergeben werden?

Damit entsteht ein hoher Standardisierungs- und Qualitätssicherungsgrad, ohne die Dynamik der Ausspielung zu verlieren.

### Beispiel: Choice-Skill im Prototyp

Im kleinen Prototyp sieht die ausführbare Schicht noch sehr einfach aus:

```ts
const executableTask = qxChoiceSkill(sampleTask);
```

Dieser `qxChoiceSkill` macht aus der semantischen Beschreibung eine ausführbare Aufgabe. Er erzeugt unter anderem:

- Renderer-Typ,
- Auswahlmodus,
- normalisierte Optionen,
- Bewertungsfunktion,
- Feedbacklogik,
- QA-Warnungen,
- erwartete Lösung.

Für die Blogthese ist aber wichtig: Das ist nur eine Skill-Art. In einer realen Architektur gäbe es zusätzlich Produktions-Skills, Format-/Adapter-Skills, Runtime-Skills und QA-/Policy-Skills.

Damit liegt die eigentliche Intelligenz nicht mehr in einem H5P-Paket. Sie verteilt sich auf testbare, versionierbare Skills, die wissen, welche Formate, Bibliotheken und Qualitätsregeln im jeweiligen Kontext gelten.

## Ebene 3: Renderer- und Aufgabenbibliotheken

Die dritte Ebene ist die Darstellung. Dafür braucht es keine monolithischen Autorentools, sondern standardisierte Bibliotheken:

- React-Komponenten,
- Web Components,
- Video-Interaktionsbibliotheken,
- Quiz-Renderer,
- Simulationskomponenten,
- LMS-Wrapper,
- App-Wrapper.

Diese Renderer bekommen nicht irgendeinen H5P-Export, sondern eine normalisierte Aufgabe. Dadurch können sie zentral entwickelt, getestet, barrierearm gestaltet und plattformübergreifend eingesetzt werden.

Im Prototyp ist das eine einfache React-Komponente:

```tsx
<ChoiceTask task={executableTask} />
```

Sie rendert Checkboxen, einen Prüfen-Button, Score und Feedback. Die Komponente muss aber nicht wissen, aus welcher Quelle die Aufgabe stammt. Sie könnte dieselbe Struktur aus einem Autorensystem, einem KI-Workflow, einem QTI-Import oder einer Content-API erhalten.

## Ebene 4: Optionale Laufzeit-KI und Tutor-Anbindung

Der nächste Schritt geht über klassische H5P-Logik hinaus. Aufgaben sollten nicht nur statische Interaktionen sein. Sie sollten zur Laufzeit ihren Zustand exponieren können — aber nur dort, wo die Umgebung diese Funktion auch unterstützt.

Das Prinzip lautet: progressive Erweiterung statt harter Abhängigkeit.

Eine Aufgabe braucht also einen stabilen Kern, der überall funktioniert:

- Aufgabe anzeigen,
- Eingaben erfassen,
- Antwort prüfen,
- Feedback geben,
- Ergebnis lokal oder an ein LMS zurückmelden.

Darüber können optionale Erweiterungen liegen:

- Tutor-State,
- adaptive Hinweise,
- KI-Erklärungen,
- Fehlkonzeptdiagnose,
- Analytics-Events,
- personalisierte Varianten.

In einem adaptiven System kann die Aufgabe ihren Zustand an einen Tutor geben und kontextsensitive Unterstützung erhalten. In Moodle oder einem einfachen LMS-Embed läuft dieselbe Aufgabe dagegen mit weniger Funktion: Anzeige, Bearbeitung, Feedback, Score. Die KI-Anbindung ist dann nicht Voraussetzung, sondern Zusatzfähigkeit.

Ein Tutor-System braucht zum Beispiel Informationen wie:

- Welche Optionen wurden ausgewählt?
- Welche Fehlkonzepte sind erkennbar?
- Wie viele Versuche gab es?
- Welche Hilfen wurden genutzt?
- Wie sicher wirkt die Antwort?
- Welche Feedbacks wurden bereits gezeigt?
- Welche nächste Intervention ist sinnvoll?

Dafür braucht die Aufgabe einen Wrapper. Dieser Wrapper vermittelt zwischen Aufgabe, Zielumgebung, KI-Dienst und Tutor-System. Er muss aber graceful degradation unterstützen: Wenn kein Tutor, keine KI oder kein Analytics-Endpunkt vorhanden ist, bleibt die Kernaufgabe trotzdem nutzbar.

Er hat mehrere Aufgaben:

- State der Aufgabe sammeln,
- State nach außen exponieren,
- Events veröffentlichen,
- Tutor-Kontext annehmen,
- KI-Hinweise oder adaptive Hilfen einspielen,
- Datenschutz- und Policy-Regeln durchsetzen,
- Logging und Analytics kontrollieren.

Wichtig ist: Die Aufgabe wird dadurch nicht beliebig oder unkontrolliert. Im Gegenteil. Der Wrapper kann Standards erzwingen:

- Welche Daten dürfen an die KI?
- Welche Daten bleiben lokal?
- Welche Prompts sind erlaubt?
- Welche Antworttypen darf die KI zurückgeben?
- Wann muss redaktionell freigegeben werden?
- Wann darf der Tutor nur Hinweise, aber keine Lösung geben?

So entsteht Dynamik, ohne die Qualitätssicherung aufzugeben.

## Schema: Wie die Ebenen zusammenspielen

![Schema: Semantisches Aufgabenformat, Skills, Runtime Wrapper und Renderer](/img/blog/ist-h5p-tot/schema.svg)

Die zugrunde liegende Grafik zeigt die geplante Schichtung: Semantik, Skills, Runtime Wrapper, Renderer sowie optionale KI-/Tutor- und Analytics-Anbindungen.

Kurz gelesen:

- Die Semantik beschreibt die Aufgabe.
- Skills machen sie ausführbar und prüfbar.
- Renderer spielen sie aus.
- Der Runtime Wrapper verbindet Aufgabe, State, KI und Tutor, sofern die Zielumgebung diese Erweiterungen unterstützt.
- Ohne KI-/Tutor-Anbindung läuft die Aufgabe mit reduziertem Funktionsumfang weiter, etwa in Moodle oder einem einfachen LMS-Embed.
- Analytics und Review fließen zurück in Redaktion und Qualitätssicherung.

## Eingebetteter Prototyp

Ein begleitender Prototyp im Arbeitsentwurf zeigt diese Architektur im Kleinen:

```txt
sampleTask.ts        semantisches Austauschformat
qxChoiceSkill.ts     Skill mit QA, Bewertung und Feedbacklogik
ChoiceTask.tsx       React-Renderer
App.tsx              Einbettung der Aufgabe
```


Die Demo-Aufgabe fragt:

> Welche Bausteine sind in der These wichtiger als ein einzelnes Autorentool wie H5P?

Richtige Antworten:

- ein semantisches Austauschformat,
- ein standardisierter Skill,
- eine Renderer- oder Komponentenbibliothek.

Falsche Antwort:

- möglichst viele manuell gepflegte Varianten derselben H5P-Aufgabe.

Damit zeigt die Aufgabe selbst die These des Artikels: Nicht die Interaktion verschwindet, sondern die Art, wie sie produziert und ausgeführt wird.

## Warum das H5P ersetzt — nicht nur ergänzt

Natürlich könnte man versuchen, all das irgendwie in H5P zu integrieren. Man könnte bessere KI-Assistenten für den H5P-Editor bauen, bessere Templates, bessere Imports, bessere Exporte.

Aber das würde am Grundproblem wenig ändern: H5P bliebe die zentrale Form, in die Inhalte gebracht werden müssen.

Das neue Modell dreht die Perspektive um:

- H5P ist nicht mehr das Zielsystem.
- Die semantische Aufgabe ist das eigentliche Asset.
- Skills sind die ausführbare Logik.
- Renderer sind austauschbar.
- KI und Tutor-Systeme greifen über definierte, optionale Schnittstellen zu.
- Wenn diese Schnittstellen fehlen, bleibt die Aufgabe als normale LMS-/Web-Interaktion lauffähig.
- Qualitätssicherung passiert auf Daten-, Skill- und Laufzeitebene.

Damit wird H5P nicht zwingend falsch. Es wird optional. Es könnte ein Exportziel bleiben, aber nicht mehr die zentrale Produktionslogik.

## Vorteile einer solchen Architektur

### 1. Höhere Dynamik

Aufgaben können Varianten bilden, Hilfen anpassen, Feedback differenzieren oder Tutor-Kontext berücksichtigen, ohne dass jede Variante manuell als eigenes Paket gepflegt wird. Diese Dynamik ist aber kein Muss: In einfachen Zielsystemen kann dieselbe Aufgabe als statische oder nur leicht interaktive Übung laufen.

### 2. Bessere Standardisierung

Wenn Aufgaben einem semantischen Schema folgen, lassen sie sich automatisch prüfen:

- Sind Lernziele vorhanden?
- Sind Lizenzen gepflegt?
- Gibt es Feedback?
- Sind Barrierefreiheitsinformationen vorhanden?
- Sind Aufgaben eindeutig lösbar?
- Sind Metadaten vollständig?

### 3. Bessere Qualitätssicherung

Skills können Prüfungen erzwingen. Renderer können zentral getestet werden. Tutor-Wrapper können kontrollieren, welche KI-Interaktionen erlaubt sind. Damit entsteht Qualität nicht erst im fertigen Paket, sondern entlang der gesamten Pipeline.

### 4. Plattformunabhängigkeit

Dieselbe semantische Aufgabe kann in unterschiedlichen Kontexten ausgespielt werden:

- Web,
- LMS,
- App,
- Video,
- Tutor-Chat,
- Prüfungssystem,
- OER-Repository.

### 5. Bessere KI-Integration

KI wird nicht nur als Autor:innen-Assistent genutzt, der Inhalte in ein Formular schreibt. Sie kann in die Produktions- und Laufzeitarchitektur integriert werden — aber als optionale Fähigkeit, nicht als Pflichtbestandteil jeder Aufgabe:

- Generierung vor der Veröffentlichung,
- Prüfung vor der Veröffentlichung,
- adaptive Hilfe während der Bearbeitung,
- Reflexionsfragen nach der Bearbeitung,
- Analyse von Fehlkonzepten,
- Vorschläge für Überarbeitung.

## Was offen bleibt

Diese Architektur löst nicht automatisch alle Probleme. Im Gegenteil: Sie macht einige Fragen sichtbarer, die H5P oft verdeckt.

Offene Fragen sind zum Beispiel:

- Welches semantische Format ist breit genug und trotzdem praktikabel?
- Wie stark kann man auf QTI, OneEdTech, xAPI, Caliper oder LRMI aufsetzen?
- Wo braucht es ein eigenes pragmatisches Profil?
- Wie werden Skills versioniert und zertifiziert?
- Wer prüft die Qualität von KI-generierten Aufgaben?
- Wie werden Datenschutz und KI-Laufzeitinteraktion geregelt?
- Welche Daten darf ein Tutor-System sehen?
- Wie verhindert man, dass adaptive Hilfen zur Black Box werden?
- Wie wird sichergestellt, dass Aufgaben ohne KI-/Tutor-Anbindung weiterhin sinnvoll funktionieren?

Diese Fragen sind aber produktiver als die Frage, ob H5P noch ein paar neue Content Types braucht.

## Vorläufiges Fazit

H5P war wichtig, weil es Interaktivität in Lernplattformen gebracht hat. Aber der nächste Schritt besteht darin, Interaktivität wieder aus einzelnen Lernplattform-Tools herauszulösen.

Die Zukunft liegt nicht in noch mehr manuell gepflegten H5P-Paketen. Sie liegt in semantischen Aufgabenformaten, ausführbaren Skills, wiederverwendbaren Renderer-Bibliotheken und kontrollierten Schnittstellen zu KI- und Tutor-Systemen.

Oder zugespitzt:

> H5P ist nicht tot, weil interaktive Lerninhalte verschwinden. H5P ist tot, wenn seine Hauptfunktion darin besteht, semantisch arme Pakete per Formular zu erzeugen.

Die bessere Alternative ist nicht ein neues Autorentool. Die bessere Alternative ist eine neue Produktions- und Laufzeitarchitektur für interaktive Lerninhalte.
