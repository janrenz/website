---
name: janrenz-schreibstil
description: Jans persönlicher Schreibstil für Blogbeiträge in diesem Repo. IMMER anwenden, wenn ein Beitrag unter content/blog/ neu entworfen, überarbeitet oder redigiert wird (deutsche und englische Fassung) — auch wenn der Nutzer nur "schreib einen Blogpost über X" oder "überarbeite den Artikel" sagt, ohne den Stil explizit zu erwähnen.
---

# Jans Schreibstil für Blogbeiträge

Abgeleitet aus den bestehenden Beiträgen in `content/blog/` (u. a. „Offenheit braucht ein
Betriebssystem“, „Verloren im Modellschungel“, „Ist H5P tot?“, „Von der Plattform ins
Klassenzimmer“) und aus der Einleitung von Jans Dissertation „Nutzerzentrierte Konzepte und
Lösungen zum Optimieren digital gestützten Lernens in Schule und Arbeitsleben“ (Uni Potsdam,
2020). Die Dissertation ist akademisch-formal geschrieben — dieser Skill übernimmt nicht ihr
Register (kein Passiv, kein Nominalstil), sondern die Denk- und Argumentationsstruktur dahinter
und überträgt sie in die persönliche, direkte Stimme der Blogbeiträge.

## Grundhaltung

- Erste Person, persönlich und direkt: „Ich glaube“, „Für mich“, „Mein Fazit“, „Was mir an X
  gefällt“. Keine unpersönliche Wir-Marketing-Stimme, kein Blackbox-Passiv.
- Pointiert, aber nicht dogmatisch. Eine klare These wird vertreten, Gegenargumente werden
  ernst genommen, nicht weggewischt.
- Menschen vor Kennzahlen: Nutzen für Lernende, Lehrkräfte, Nutzerinnen und Nutzer geht vor
  reinen KPI- oder Kostenargumenten. Das ist eine inhaltliche Konstante seit der Dissertation
  (dort explizit: „statt ökonomischen Messgrößen und KPIs die Lernenden und ihre
  Lernerfahrungen im Vordergrund“) und zieht sich bis in die aktuellen Beiträge (z. B.
  „Kostenkontrolle … darf nie zur Produktentscheidung durch die Hintertür werden“).
- Technische Präzision mit erklärtem Warum: Fachbegriffe werden nicht vorausgesetzt, sondern
  kurz eingeführt und an ihrer praktischen Konsequenz festgemacht — nicht an der Definition
  allein.

## Satzbau: kurz vor komplex

Das ist die häufigste Abweichung, die korrigiert werden muss. Rohentwürfe (auch von Claude)
neigen zu langen, klammerreichen Schachtelsätzen. Jans eigener Stil ist deutlich kürzer:

- Ein Gedanke pro Satz. Lange Sätze mit drei oder mehr Nebensätzen/Einschüben auftrennen.
- Kurze Sätze gezielt für Wirkung einsetzen, auch Fragmente: „Das wäre keine Offenheit. Das
  wäre Überforderung.“ / „Schnell. Präzise. Kreativ.“ / „Auf dem Tablet. Auf dem Laptop. […]
  Im Klassenraum.“
- Rhetorische Volte: „Die Frage lautet also nicht: X. Die spannendere Frage lautet: Y.“ /
  „Die ehrliche Antwort lautet: …“
- Sätze dürfen mit „Denn“, „Aber“, „Und“ beginnen, wenn das den Gedankengang klarer macht.
- Gedankenstriche für Einschübe statt verschachtelter Nebensätze mit Kommas.

**Vorher/Nachher-Beispiel** (aus einer echten Überarbeitung in diesem Repo):

> Vorher: „Anfang des Jahres habe ich … einen Beitrag … beigesteuert – über unsere Arbeit am
> Adaptiven Intelligenten System (AIS), der Lern- und Lehrumgebung, die das FWU im Auftrag der
> Länder für allgemeinbildende Schulen betreibt.“
>
> Nachher: „Anfang des Jahres habe ich … einen Beitrag … beigesteuert. Es ging um unsere Arbeit
> am Adaptiven Intelligenten System (AIS) – der Lern- und Lehrumgebung, die das FWU im Auftrag
> der Länder für allgemeinbildende Schulen betreibt.“

Faustregel beim Redigieren: Wenn ein Satz mehr als zwei Kommas *und* einen Gedankenstrich
*und* einen Doppelpunkt enthält, ist er zu lang — aufteilen.

## Struktur eines Beitrags

1. **Frontmatter**: `title`, `date`, `description`, `summary`, `tags`, `translationKey`,
   `heroImage`, `heroAlt`. Deutsche (`*.md`) und englische (`*.en.md`) Fassung teilen sich den
   `translationKey`.
2. **Einstieg**: entweder ein `> These: …`-Zitatblock mit der Kernthese in ein bis zwei Sätzen,
   oder eine kursive Ein-Satz-Einordnung („*Ein persönlicher Beitrag zur Frage, …*“).
3. **Erster Absatz**: konkretes, greifbares Bild oder Problem — kein abstrakter Einstieg.
4. **H2-Überschriften als Thesen, nicht als Themen**: „Warum ‚Betriebssystem‘ besser passt als
   ‚Plattform‘“ statt „Terminologie“. Jede Überschrift transportiert bereits eine Aussage.
5. **Funnel pro Abschnitt** (Muster aus der Dissertation, übertragen auf Blog-Länge): breiter
   Kontext → konkreter Beleg/Zahl/Beispiel mit Quelle → persönliche Einordnung → Konsequenz
   für die These des Beitrags. Behauptungen möglichst an einem konkreten Fall, einer Zahl oder
   einem benannten Test/Beispiel festmachen statt vage zu bleiben.
6. **Abschluss**: kurze Zusammenfassung aus der Ich-Perspektive, die zur einleitenden These
   zurückführt („Wenn ich das für mich zusammenfasse: …“).

## Vermeiden

- Marketing-Sprech, leere Superlative, Buzzword-Ketten ohne Substanz.
- Lange, klammerreiche Schachtelsätze (siehe oben).
- Passiv- oder Nominalstil der akademischen Dissertations-Sprache eins zu eins übernehmen
  („es wird untersucht, wie …“) — im Blog stattdessen aktiv und persönlich: „Ich untersuche …“
  oder direkter noch die Konsequenz benennen.
- Behauptungen ohne Beleg oder Beispiel stehen lassen.
- Technikthemen ohne Rückbindung an die Menschen, die sie am Ende betreffen.

## Anwendung

Bei jedem neuen Entwurf oder jeder Überarbeitung eines Beitrags unter `content/blog/`:
gegen diese Checkliste lesen, lange Sätze auftrennen, prüfen ob jede Behauptung einen
konkreten Beleg hat, und sicherstellen, dass die Perspektive der Nutzenden/Lernenden nicht
hinter der reinen Technik- oder Kostenlogik verschwindet.
