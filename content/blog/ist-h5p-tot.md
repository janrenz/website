---
title: "Ist H5P tot?"
date: 2026-07-09
description: "Ein öffentlicher Entwurf zur Frage, warum interaktive Lerninhalte künftig eher semantische Aufgabenformate, KI-gestützte Authoring- und Portierungs-Skills, Renderer und optionale Tutor-Anbindungen brauchen als ein monolithisches Autorentool."
summary: "H5P war wichtig, um Interaktivität in Lernplattformen zu bringen. Der nächste Schritt könnte aber eine entkoppelte Architektur aus semantischen Aufgabenformaten, KI-gestützten Authoring- und Portierungs-Skills, Renderer-Bibliotheken und optionaler KI-/Tutor-Anbindung sein."
tags: ["Bildungsmedien", "Interoperabilität", "H5P", "KI", "Lerninfrastruktur"]
translationKey: "is-h5p-dead"
heroImage: "/img/blog/ist-h5p-tot/hero-open-package-no-text.png"
heroAlt: "Abstrakte redaktionelle Illustration eines geöffneten digitalen Lernpakets, das sich in modulare Schichten, Karten und Verbindungslinien für semantische Aufgaben, Skills und Renderer auflöst."
---

> These: H5P ist nicht deshalb überholt, weil niemand mehr interaktive Aufgaben braucht. Im Gegenteil: Interaktive, adaptive und KI-gestützte Lernaufgaben werden wichtiger. Überholt ist eher die Vorstellung, dass diese Aufgaben als manuell zusammengeklickte Tool-Pakete entstehen müssen.

H5P war eine gute Antwort auf ein reales Problem: Wie bekommen wir interaktive Lerninhalte in Lernplattformen, ohne für jede Aufgabe eine eigene Anwendung zu entwickeln? Multiple Choice, Drag and Drop, Lückentexte, interaktive Videos, kleine Branching-Szenarien — all das ließ sich mit H5P vergleichsweise niedrigschwellig erstellen und in Moodle, WordPress und andere Systeme einbetten.

Aber die Produktionsbedingungen haben sich grundlegend geändert. KI kann Aufgaben entwerfen, Varianten erzeugen, Feedback formulieren, Medien erstellen und Inhalte auf unterschiedliche Zielgruppen zuschneiden. Gleichzeitig brauchen Bildungsmedien einen höheren Grad an Standardisierung, Qualitätssicherung, Barrierefreiheit, Nachnutzbarkeit und technischer Anschlussfähigkeit. Genau an dieser Stelle wirkt H5P wie eine Übergangstechnologie.

Die Frage lautet also nicht: Wie verbessern wir H5P? Die spannendere Frage lautet: Ist H5P tot? Und was bleibt übrig, wenn man H5P in seine eigentlichen Funktionen zerlegt?

## H5P bündelt Dinge, die künftig getrennt werden sollten

H5P verbindet in einem Paket, was künftig besser getrennt werden sollte: Inhaltsmodell, Autorenoberfläche, Interaktionslogik, Laufzeitdarstellung, Exportformat und eine begrenzte Form von Auswertung und Feedback.

Diese Bündelung war praktisch, solange die Alternative individuelle Softwareentwicklung war. Sie wird aber problematisch, sobald Lerninhalte stärker dynamisiert, automatisiert, qualitätsgesichert und plattformübergreifend ausgespielt werden sollen.

Denn dann möchte man nicht jede Aufgabe in einem Formular zusammenklicken. Man möchte Aufgaben semantisch beschreiben, automatisch prüfen, ihre Erstellung, Prüfung und Portierung durch KI-Skills standardisieren und professionalisieren — und sie anschließend über standardisierte Komponenten ausspielen.

Kurz gesagt:

> Nicht die Multiple-Choice-Aufgabe verschwindet. Es verschwindet die Notwendigkeit, sie als H5P-Formular zu bauen.

## Was stattdessen gebraucht wird

Aus meiner Sicht braucht es künftig vor allem drei Ebenen: ein semantisches Austauschformat, Renderer- und Komponentenbibliotheken für die Ausspielung sowie einen optionalen Runtime Wrapper für KI-, Tutor- und Analytics-Anbindungen. KI-Skills unterstützen und ermöglichen: Sie helfen beim Authoring, beim Erzeugen der passenden semantischen Beschreibung, bei der Prüfung und bei der Portierung von Inhalten.

## Ebene 1: Semantisches Austauschformat

Die erste Ebene beschreibt nicht, wie eine Aufgabe in einem bestimmten Tool aussieht. Sie beschreibt Inhalte.

Ein solches Format beschreibt Lernziel, Kompetenzbezug, Zielgruppe, Aufgabentyp, Aufgabenstellung, Material, Antwortlogik, Feedback, typische Fehlkonzepte, Hilfen, Schwierigkeitsgrad, Variantenregeln, Metadaten, Lizenz, Barrierefreiheit sowie Analytics- und Tutor-Anschlusspunkte.

Das Format ist nicht H5P-spezifisch. Es kann in JSON, YAML oder einem bestehenden Standardprofil beschrieben werden. Naheliegende Bezugspunkte liegen im 1EdTech-/IMS-Umfeld, etwa QTI für Aufgaben- und Testinteroperabilität. Für Lernressourcen-Metadaten kommen außerdem schema.org beziehungsweise LRMI infrage, für Lernaktivitäten xAPI oder Caliper. Entscheidend ist aber nicht ein einzelner Standardname, sondern die Architekturidee: Die Semantik muss portabel und interoperabel sein.

Ein einfacher Ausschnitt könnte so aussehen:

<details class="jr-code-details">
  <summary>Beispiel für ein semantisches Aufgabenobjekt anzeigen</summary>
  <pre><code class="language-ts">export const sampleTask = {
  id: &quot;task-h5p-semantic-format-001&quot;,
  schema: &quot;qx.task.v0&quot;,
  taskType: &quot;multiple-choice&quot;,
  title: &quot;Was ersetzt H5P in einem modernen Produktionsmodell?&quot;,
  stem: &quot;Welche Bausteine sind in der These wichtiger als ein einzelnes Autorentool wie H5P?&quot;,
  learningObjective:
    &quot;Lernende unterscheiden zwischen Austauschformat, KI-gestützter Authoring-/Portierungshilfe und Rendering-Bibliothek.&quot;,
  choices: [
    {
      id: &quot;a&quot;,
      text: &quot;Ein semantisches Austauschformat für Aufgaben, Medien, Feedback und Metadaten.&quot;,
      correct: true,
      feedback: &quot;Genau: Die Semantik muss portabel sein, nicht an ein konkretes Tool gebunden.&quot;
    },
    {
      id: &quot;b&quot;,
      text: &quot;KI-Skills für Authoring, Prüfung und Portierung, die passende Semantik und Ausspielung vorbereiten.&quot;,
      correct: true,
      feedback: &quot;Richtig: KI-Skills unterstützen vor der Ausspielung — sie sind nicht Teil der Browser-Aufgabe.&quot;
    },
    {
      id: &quot;c&quot;,
      text: &quot;Eine Renderer- oder Komponentenbibliothek, die Aufgaben konsistent ausspielt.&quot;,
      correct: true,
      feedback: &quot;Richtig: Die Oberfläche wird wiederverwendbar und testbar, statt pro Aufgabe geklickt.&quot;
    },
    {
      id: &quot;d&quot;,
      text: &quot;Möglichst viele manuell gepflegte Varianten derselben H5P-Aufgabe.&quot;,
      correct: false,
      feedback: &quot;Eher nicht: Genau diese manuelle Variantenpflege ist das Problem, das dynamische Formate vermeiden sollen.&quot;
    }
  ],
  metadata: {
    subject: &quot;Digitale Bildungsinfrastruktur&quot;,
    targetGroup: &quot;Bildungsmedien, OER, EdTech, Verwaltung&quot;,
    estimatedMinutes: 3,
    license: &quot;CC BY 4.0&quot;,
    source: &quot;Blog-Prototyp: Ist H5P tot?&quot;
  },
  accessibility: {
    plainLanguage:
      &quot;Die Aufgabe fragt, welche Teile man braucht, wenn Lernaufgaben nicht mehr fest in H5P gebaut werden.&quot;,
    ariaLabel: &quot;Multiple-Choice-Aufgabe zum Ersatz von H5P durch semantische Formate, KI-Skills und Renderer&quot;
  }
};</code></pre>
</details>

Das Entscheidende daran: Diese Aufgabe ist noch keine H5P-Aufgabe. Sie ist auch noch keine React-Komponente. Sie ist zunächst eine semantisch beschriebene Lerninteraktion.

## Begleitschicht: KI-Skills für Authoring, Prüfung und Portierung

H5P denkt in Content Types: Multiple Choice, Drag and Drop, Interactive Video, Branching Scenario und so weiter. Ein moderneres Modell sollte nicht einfach „Content Types“ durch Frontend-Komponenten ersetzen. KI-Skills unterstützen die Arbeit rund um die Aufgabe. Sie helfen dabei, die passende semantische Beschreibung zu erzeugen, vorhandene Bibliotheken und Komponenten zu kennen und bei der Erstellung von Code zu berücksichtigen, Lücken zu erkennen und bei Bedarf Erweiterungen vorzuschlagen.

Man kann diese seitliche Skill-Schicht in vier Rollen denken:

### 1. Produktions- und Autor:innen-Skills

Diese KI-Skills helfen bei der Erstellung von Aufgaben. Sie kennen didaktische Muster, Fachlogiken, Zielgruppen, Schwierigkeitsgrade und typische Fehler bei der Aufgabenkonstruktion. 

Sie können aus einem Fachtext Aufgabenideen ableiten, plausible Distraktoren formulieren, Feedback lernförderlich schreiben, Varianten nach Lernziel oder Kompetenzstufe erzeugen und dabei Sprache, Niveau, Barrierefreiheit, Quellen, Lizenzen und Metadaten mitprüfen.

Diese Skills laufen im Produktionsprozess, also bevor die Aufgabe veröffentlicht wird. Sie ersetzen nicht die Redaktion, sondern machen redaktionelle Arbeit schneller, konsistenter und prüfbarer.

### 2. Portierungs- und Adapter-Skills

Diese Skills kennen bestehende Formate, Standards und Zielsysteme. Sie wissen zum Beispiel, wie ein Aufgabenobjekt in ein QTI-Profil, ein JSON-basiertes QX-Profil, eine xAPI-/Caliper-Eventstruktur oder eine LMS-kompatible Übergabe übersetzt werden kann. Sie machen aus der Aufgabe aber nicht selbst die Laufzeit. Sie bereiten die Portierung vor und prüfen, was für das Zielsystem fehlt.

Sie beantworten Fragen wie: Welche Felder braucht dieses Format? Welche Metadaten fehlen? Welche QTI-Struktur passt zur Aufgabe? Welche Analytics-Events sollten erzeugt werden? Und welche Informationen müssen für LTI, cmi5 oder ein anderes Zielsystem ergänzt werden?

Hier liegt ein wichtiger Unterschied zu H5P: Nicht das Autorentool ist der Standard, sondern die Transformierbarkeit zwischen semantischen Formaten, Plattformen und Laufzeiten.

### 3. Bibliotheks- und Erweiterungs-Skills

Diese Skills laufen nicht als React-Code im Browser. Sie helfen beim Authoring und bei der Portierung zu entscheiden, welche vorhandenen Aufgaben- und Medienbibliotheken, Renderer, Interaktionstypen und Best Practices für eine bestimmte Aufgabe passen — und wo eine bestehende Bibliothek nicht reicht.

Ein solcher Skill weiß zum Beispiel, welche React- oder Web-Component-Bibliothek eine Multiple-Choice-Aufgabe ausspielen kann, welche Video-Interaktionsbibliothek Timecodes, Sprungmarken oder Overlays unterstützt, welche Renderer barrierearm genug sind und welche Ereignisse für Tutor, Analytics oder Learning Record Store vorbereitet werden sollten. Wenn keine vorhandene Komponente passt, kann er auch ein Erweiterungsbriefing erzeugen: Welche Komponente fehlt? Welche Props, Events, Accessibility-Anforderungen und Tests müsste sie haben?

Diese Skills sind KI-gestützte Vermittler neben der eigentlichen technischen Pipeline: zwischen fachlicher Intention, semantischem Aufgabenformat, vorhandenen Bibliotheken, didaktischen Best Practices und konkreter Zielumgebung.

### 4. Qualitätssicherungs- und Policy-Skills

Diese Skills prüfen, ob eine Aufgabe fachlich, didaktisch, technisch, rechtlich und barrierearm genug ist. Sie laufen vor allem vor der Veröffentlichung oder bei der Portierung in ein Zielsystem; optional können sie auch Policy-Regeln für spätere KI- oder Tutor-Funktionen vorbereiten.

Sie könnten etwa prüfen, ob eine Aufgabe eindeutig lösbar ist, ob Distraktoren plausibel, aber nicht irreführend sind, ob Feedback wirklich zum Fehler passt, ob Verständnis statt bloßes Wiedererkennen gefördert wird, ob Barrierefreiheit und Lizenzfragen geklärt sind und welche KI- oder Tutor-Funktionen für diese Aufgabe überhaupt erlaubt sein sollen.

Damit entsteht ein hoher Standardisierungs- und Qualitätssicherungsgrad, ohne die Dynamik der Ausspielung zu verlieren.

### Beispiel: technische Adapterlogik im Prototyp

Im kleinen Prototyp ist diese Idee noch stark vereinfacht. Dort gibt es nur eine technische Adapterlogik, die aus der semantischen Beschreibung ein renderbares Multiple-Choice-Modell macht:

<details class="jr-code-details">
  <summary>Mini-Beispiel für die technische Adapterlogik anzeigen</summary>
  <pre><code class="language-ts">const renderableTask = qxMultipleChoiceAdapter(sampleTask);</code></pre>
</details>

Dieser `qxMultipleChoiceAdapter` ist kein Skill im KI-Sinne, sondern technische Adapterlogik. Er erzeugt Renderer-Typ, normalisierte Optionen, Bewertungsfunktion, Feedbacklogik, QA-Warnungen und die erwartete Lösung. Die eigentlichen KI-Skills würden vorher oder bei der Portierung helfen: beim Entwerfen, Prüfen, Übersetzen in Zielformate und beim Auswählen passender Bibliotheken.

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

Wichtig ist: Solche Komponenten müssen nicht flach nebeneinander stehen. Sie können verschachtelt sein. Eine Lernseite kann zum Beispiel einen Layout-Renderer enthalten, darin ein Video-Renderer, darin wiederum Timecode-Overlays, Multiple-Choice-Checks oder Reflexionskarten. Die semantische Beschreibung muss deshalb nicht nur einzelne Aufgaben kennen, sondern auch Kompositionen: Welche Komponente enthält welche andere Komponente, welche Events werden nach außen gegeben und welche Teile bleiben austauschbar?

Im Prototyp ist das eine einfache React-Komponente:

<details class="jr-code-details">
  <summary>Mini-Beispiel für die Renderer-Einbettung anzeigen</summary>
  <pre><code class="language-tsx">&lt;MultipleChoiceTask task={renderableTask} /&gt;</code></pre>
</details>

Sie rendert Checkboxen, einen Prüfen-Button, Score und Feedback. Die Komponente muss aber nicht wissen, aus welcher Quelle die Aufgabe stammt. Sie könnte dieselbe Struktur aus einem Autorensystem, einem KI-Workflow, einem QTI-Import oder einer Content-API erhalten.

## Ebene 4: Optionale Laufzeit-KI und Tutor-Anbindung

Der nächste Schritt geht über klassische H5P-Logik hinaus. Aufgaben sollten nicht nur statische Interaktionen sein. Sie sollten zur Laufzeit ihren Zustand exponieren können — aber nur dort, wo die Umgebung diese Funktion auch unterstützt.

Das Prinzip lautet: progressive Erweiterung.

Eine Aufgabe oder Inhaltstyp braucht also einen stabilen Kern, der überall funktioniert: anzeigen, Eingaben erfassen, Antworten prüfen, Feedback geben und ein Ergebnis lokal oder an ein LMS zurückmelden.

Darüber können optionale Erweiterungen liegen: Tutor-State, adaptive Hinweise, KI-Erklärungen, Fehlkonzeptdiagnose, Analytics-Events oder personalisierte Varianten.

In einem adaptiven System kann die Aufgabe ihren Zustand an einen Tutor geben und kontextsensitive Unterstützung erhalten. In Moodle oder einem einfachen LMS-Embed läuft dieselbe Aufgabe dagegen mit weniger Funktion: Anzeige, Bearbeitung, Feedback, Score. Die KI-Anbindung ist dann nicht Voraussetzung, sondern Zusatzfähigkeit.

Ein Tutor-System braucht dafür Informationen darüber, welche Optionen ausgewählt wurden, welche Fehlkonzepte erkennbar sind, wie viele Versuche es gab, welche Hilfen genutzt wurden, wie sicher die Antwort wirkt und welche Intervention als nächstes sinnvoll wäre.

Dafür braucht die Aufgabe einen Wrapper. Dieser Wrapper vermittelt zwischen Aufgabe, Zielumgebung, KI-Dienst und Tutor-System. Er muss aber graceful degradation unterstützen: Wenn kein Tutor, keine KI oder kein Analytics-Endpunkt vorhanden ist, bleibt die Kernaufgabe trotzdem nutzbar.

Er sammelt den State der Aufgabe, exponiert ihn kontrolliert nach außen, veröffentlicht Events, nimmt Tutor-Kontext an, spielt KI-Hinweise oder adaptive Hilfen ein und setzt Datenschutz-, Policy-, Logging- und Analytics-Regeln durch.

Wichtig ist: Die Aufgabe wird dadurch nicht beliebig oder unkontrolliert. Im Gegenteil. Der Wrapper kann Standards erzwingen: Welche Daten dürfen an die KI? Welche Daten bleiben lokal? Welche Prompts sind erlaubt? Welche Antworttypen darf die KI zurückgeben? Wann muss redaktionell freigegeben werden? Und wann darf der Tutor nur Hinweise, aber keine Lösung geben?

So entsteht Dynamik, ohne die Qualitätssicherung aufzugeben.

## Schema: Wie die Ebenen zusammenspielen

<figure class="jr-contained-figure jr-schema-figure">
  <img class="jr-contain-image" src="/img/blog/ist-h5p-tot/schema.svg" alt="Schema: Semantisches Aufgabenformat, KI-Skills, Runtime Wrapper und Renderer">
</figure>

Die zugrunde liegende Grafik zeigt die geplante Schichtung: Semantik, Renderer, optionaler Runtime Wrapper sowie eine seitlich stehende KI-Skill-Schicht für Authoring, Prüfung, Portierung und Bibliothekserweiterung.

Kurz gelesen:

- Die Semantik beschreibt die Aufgabe.
- KI-Skills helfen seitlich beim Authoring, bei der Prüfung, bei der Portierung und beim Erweiterungsbriefing für fehlende Komponenten.
- Renderer spielen die semantische Aufgabe aus.
- Der Runtime Wrapper verbindet Aufgabe, State, KI und Tutor, sofern die Zielumgebung diese Erweiterungen unterstützt.
- Ohne KI-/Tutor-Anbindung läuft die Aufgabe mit reduziertem Funktionsumfang weiter, etwa in Moodle oder einem einfachen LMS-Embed.
- Analytics und Review fließen zurück in Redaktion und Qualitätssicherung.

## Eingebetteter Prototyp

Die folgende Mini-Aufgabe zeigt die These im Artikel selbst. Sie ist eine kleine, eingebettete Demo: semantische Aufgabe, einfache technische Adapterlogik, standardisierte Darstellung. In einer vollständigen Architektur würden KI-Skills vorher beim Authoring, bei der Prüfung und bei der Portierung helfen; derselbe Kern könnte in Moodle mit reduziertem Funktionsumfang laufen oder in einem adaptiven System zusätzlichen Tutor-State exponieren.

Der Code zum Prototyp liegt öffentlich auf GitHub: [janrenz/h5p-ist-tot-prototype](https://github.com/janrenz/h5p-ist-tot-prototype).

<div class="jr-qx-demo" data-qx-demo>
  <div class="jr-qx-demo__meta">Demo · semantische Aufgabe → Adapterlogik → Renderer</div>
  <h3>Was ersetzt H5P in einem modernen Produktionsmodell?</h3>
  <p>Welche Bausteine sind in der These wichtiger als ein einzelnes Autorentool wie H5P?</p>
  <label><input type="checkbox" value="a"> Ein semantisches Austauschformat für Aufgaben, Medien, Feedback und Metadaten.</label>
  <label><input type="checkbox" value="b"> KI-Skills für Authoring, Prüfung und Portierung, die passende Semantik und Ausspielung vorbereiten.</label>
  <label><input type="checkbox" value="c"> Eine Renderer- oder Komponentenbibliothek, die Aufgaben konsistent ausspielt.</label>
  <label><input type="checkbox" value="d"> Möglichst viele manuell gepflegte Varianten derselben H5P-Aufgabe.</label>
  <button type="button">Prüfen</button>
  <div class="jr-qx-demo__result" aria-live="polite"></div>
</div>

<script>
(function () {
  document.querySelectorAll('[data-qx-demo]').forEach(function (demo) {
    var button = demo.querySelector('button');
    var result = demo.querySelector('.jr-qx-demo__result');
    var feedback = {
      a: 'Genau: Die Semantik muss portabel sein, nicht an ein konkretes Tool gebunden.',
      b: 'Richtig: KI-Skills unterstützen vor der Ausspielung — sie sind nicht Teil der Browser-Aufgabe.',
      c: 'Richtig: Die Oberfläche wird wiederverwendbar und testbar, statt pro Aufgabe geklickt.',
      d: 'Eher nicht: Genau diese manuelle Variantenpflege ist das Problem.'
    };
    button.addEventListener('click', function () {
      var selected = Array.from(demo.querySelectorAll('input:checked')).map(function (input) { return input.value; });
      var correct = ['a', 'b', 'c'];
      var isCorrect = correct.every(function (id) { return selected.includes(id); }) && selected.every(function (id) { return correct.includes(id); });
      var score = Math.max(0, Math.round((selected.filter(function (id) { return correct.includes(id); }).length / correct.length - (selected.includes('d') ? 0.25 : 0)) * 100));
      result.className = 'jr-qx-demo__result ' + (isCorrect ? 'is-success' : 'is-partial');
      result.innerHTML = '<strong>' + (isCorrect ? 'Vollständig richtig' : 'Noch nicht vollständig') + '</strong><span>Score: ' + score + '%</span><ul>' + selected.map(function (id) { return '<li>' + feedback[id] + '</li>'; }).join('') + '</ul>';
    });
  });
})();
</script>

## Warum das H5P ersetzt — nicht nur ergänzt

Natürlich könnte man H5P weiterhin im Produktionsprozess nutzen. H5P könnte ein vertrauter Editor bleiben, in dem Autor:innen Aufgaben zusammenstellen, Medien platzieren und Interaktionen grob modellieren. Entscheidend wäre dann aber, was am Ende herausfällt: nicht primär ein H5P-Paket als endgültige Form, sondern ein semantisches Modell, das exportiert, geprüft, portiert und in unterschiedlichen Laufzeiten ausgespielt werden kann.

Das wäre eine andere Rolle für H5P. Nicht mehr Zielsystem und zentrale Produktionslogik, sondern ein mögliches Authoring-Frontend für ein offeneres Aufgabenmodell. Wenn H5P dagegen die Form bleibt, in die alle Inhalte gebracht werden müssen, ändert sich am Grundproblem wenig.

Das neue Modell dreht die Perspektive um:

- H5P ist nicht mehr das Zielsystem.
- Die semantische Aufgabe ist das eigentliche Asset.
- KI-Skills unterstützen seitlich Authoring, Prüfung, Portierung und Erweiterung der Komponentenbasis.
- Renderer sind austauschbar.
- KI und Tutor-Systeme greifen über definierte, optionale Schnittstellen zu.
- Wenn diese Schnittstellen fehlen, bleibt die Aufgabe als normale LMS-/Web-Interaktion lauffähig.
- Qualitätssicherung passiert auf Daten-, KI-Skill-, Komponenten- und Laufzeitebene.

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

KI-Skills können Prüfungen erzwingen. Renderer können zentral getestet werden. Tutor-Wrapper können kontrollieren, welche KI-Interaktionen erlaubt sind. Damit entsteht Qualität nicht erst im fertigen Paket, sondern entlang der gesamten Pipeline.

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
- Wie werden KI-Skills versioniert, geprüft und für unterschiedliche Zielsysteme sowie Komponentenbibliotheken dokumentiert?
- Wer prüft die Qualität von KI-generierten Aufgaben?
- Wie werden Datenschutz und KI-Laufzeitinteraktion geregelt?
- Welche Daten darf ein Tutor-System sehen?
- Wie verhindert man, dass adaptive Hilfen zur Black Box werden?
- Wie wird sichergestellt, dass Aufgaben ohne KI-/Tutor-Anbindung weiterhin sinnvoll funktionieren?

Diese Fragen sind aber produktiver als die Frage, ob H5P noch ein paar neue Content Types braucht.

## Fazit

H5P war wichtig, weil es Interaktivität in Lernplattformen gebracht hat. Aber der nächste Schritt besteht darin, Interaktivität wieder aus einzelnen Lernplattform-Tools herauszulösen.

Die Zukunft liegt nicht in noch mehr manuell gepflegten H5P-Paketen. Sie liegt in semantischen Aufgabenformaten, KI-gestützten Authoring-, Prüf- und Portierungs-Skills, wiederverwendbaren Renderer-Bibliotheken und kontrollierten Schnittstellen zu KI- und Tutor-Systemen.

Oder zugespitzt:

> H5P ist nicht tot, weil interaktive Lerninhalte verschwinden. H5P ist tot, wenn seine Hauptfunktion darin besteht, semantisch arme Pakete per Formular zu erzeugen.

Die bessere Alternative ist nicht ein neues Autorentool. Die bessere Alternative ist eine neue Produktions- und Laufzeitarchitektur für interaktive Lerninhalte.
