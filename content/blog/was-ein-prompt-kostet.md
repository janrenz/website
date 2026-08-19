---
title: "Was ein Prompt wirklich kostet"
date: 2026-08-18
draft: true
description: "KI schlechtzureden hilft niemandem. Aber wer sie nutzt, sollte wissen, welche Ressourcen ein Prompt tatsächlich braucht – und wie man Tokens spart, ohne auf KI zu verzichten."
summary: "Jede KI-Anfrage verbraucht Strom, Wasser und Rechenzeit – wie viel, hängt stark von Modell, Anbieter und Nutzung ab. Ein Überblick über die Studienlage, warum Agenten-Workflows besonders viele Tokens verbrauchen, konkrete Wege, Tokens zu sparen, warum Modelle und Anbieter sich deutlich unterscheiden, und wann lokale Modelle mit eigenem Ökostrom die bessere Wahl sind."
tags: ["KI", "Nachhaltigkeit", "Klimaschutz", "Agentic AI", "Infrastruktur", "Digitale Souveränität"]
translationKey: "what-a-prompt-really-costs"
heroImage: "/img/blog/was-ein-prompt-kostet/hero-was-ein-prompt-kostet.png"
heroAlt: "Abstrakte Editorial-Illustration eines Rechenzentrums, aus dessen Kühltürmen Chat-Sprechblasen statt Dampf aufsteigen; im Vordergrund verbindet eine Stromleitung das Rechenzentrum mit einer kleinen Solaranlage."
---

> These: KI schlechtzureden hilft niemandem weiter. Aber wer sie nutzt, sollte wissen, was ein Prompt tatsächlich kostet – und danach handeln.

Ich tippe eine Frage in ein Chatfenster. Zwei Sekunden später steht die Antwort da. Was ich dabei nicht sehe: Irgendwo läuft ein Server-Rack heiß, weil es in diesen zwei Sekunden Milliarden Rechenoperationen durchführt. Die entstehende Wärme muss aktiv abgeführt werden. Der Strom dafür kam aus einem Netz mit einem ganz bestimmten, sehr unterschiedlichen CO2-Fußabdruck. Der Prompt fühlt sich kostenlos an. Er ist es nicht.

Ich will KI hier nicht schlechtreden. Ich nutze sie selbst jeden Tag, beruflich wie privat, und halte sie für eines der nützlichsten Werkzeuge, das ich in den letzten Jahren kennengelernt habe. Aber genau deshalb finde ich: Wer ein Werkzeug täglich nutzt, sollte wissen, was es kostet. Nicht um es seltener zu benutzen. Sondern um es bewusster zu benutzen.

## Warum ein Prompt überhaupt etwas kostet

Ein Sprachmodell schlägt keine Antwort nach. Es berechnet sie – Token für Token. Für jedes einzelne Wort oder Wortstück, das ausgegeben wird, läuft eine vollständige Berechnung durch ein Netz mit oft hunderten Milliarden Parametern. Das passiert auf spezialisierten Chips, die dabei kontinuierlich Strom in Wärme umwandeln. Je länger die Antwort, desto öfter wiederholt sich dieser Vorgang.

<aside class="jr-infobox">
  <p class="jr-infobox-label">Kurz erklärt</p>
  <strong class="jr-infobox-title">Was ist ein Token?</strong>
  <p>Ein Token ist die kleinste Texteinheit, mit der ein Sprachmodell rechnet – oft ein Wortstück, manchmal ein ganzes kurzes Wort. „Klimaschutz" sind zum Beispiel zwei bis drei Tokens, kein einziges. Jeder Eingabetoken wird verarbeitet, jeder Ausgabetoken wird einzeln neu berechnet. Mehr Tokens heißt: mehr Rechenschritte, mehr Energie, mehr Zeit.</p>
</aside>

Dazu kommt die Infrastruktur drumherum: Kühlung, Netzwerk, Redundanz für Ausfälle, Kapazität, die auch dann bereitsteht, wenn sie gerade nicht gebraucht wird. Wie viel zusätzliche Energie ein Rechenzentrum über die reine Rechenleistung hinaus benötigt, wird üblicherweise als PUE-Wert angegeben – Power Usage Effectiveness. Ein PUE von 1,5 bedeutet: Für jede Kilowattstunde, die tatsächlich in den Chips ankommt, wird eine weitere halbe Kilowattstunde für Kühlung und Betrieb fällig. Rechenzentren unterscheiden sich hier erheblich, je nach Alter, Kühltechnik, Klima am Standort und Auslastung.

## Was die Studienlage zeigt – und was nicht

Zahlen zum Energieverbrauch einzelner Modelle klingen oft beeindruckend präzise. Das sind sie selten. Der Verbrauch hängt vom Modell, der Hardware, der Auslastung, der Antwortlänge, dem Rechenzentrumsstandort und der Tageszeit ab. Aus einem einzelnen Modellnamen einen exakten ökologischen Fußabdruck abzuleiten, wäre unseriös. Zwei Untersuchungen zeigen trotzdem, in welche Richtung die Unterschiede gehen.

Sasha Luccioni, Yacine Jernite und Emma Strubell haben 2024 in [„Power Hungry Processing"](https://arxiv.org/abs/2311.16863) 88 KI-Systeme über zehn verschiedene Aufgaben hinweg gemessen. Unter den knapp 30 produktiv eingesetzten Systemen lag der Energieverbrauch pro Anfrage um das 65-Fache auseinander – für vergleichbare Aufgaben. Ihr zentraler Befund: Multifunktionale, generative Modelle verbrauchen oft um Größenordnungen mehr Energie als spezialisierte Systeme, die nur eine einzige Aufgabe lösen – selbst wenn man die Parameterzahl konstant hält. Ein generatives Modell für eine einfache Klassifikationsaufgabe einzusetzen ist, technisch gesprochen, Verschwendung.

Google hat 2025 in [„Measuring the environmental impact of delivering AI at Google Scale"](https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference) erstmals produktionsnahe Messungen veröffentlicht: Ein durchschnittlicher Text-Prompt in der Gemini-App verbraucht median 0,24 Wattstunden, verursacht 0,03 Gramm CO2-Äquivalent und benötigt 0,26 Milliliter Wasser. Bemerkenswert ist weniger die absolute Zahl als die Entwicklung: Innerhalb eines Jahres ist der Energieverbrauch pro Prompt laut Google um das 33-Fache gesunken, der CO2-Ausstoß um das 44-Fache – durch effizientere Software und den gezielten Einkauf sauberer Energie. Das zeigt: Der Fußabdruck einer Anfrage ist keine feste Naturkonstante. Er ist eine Ingenieurs- und Einkaufsentscheidung, die ein Anbieter trifft – oder eben nicht trifft.

## Denken kostet mehr: Reasoning-Modelle und der Preis des Nachdenkens

Ende 2025 hat Hugging Face die zweite Fassung seines [AI Energy Score](https://huggingface.co/blog/sasha/ai-energy-score-v2) veröffentlicht, diesmal mit Fokus auf Reasoning-Modelle – Modelle, die vor der eigentlichen Antwort einen sichtbaren oder unsichtbaren „Denkprozess" durchlaufen. Das Ergebnis: Mit aktiviertem Reasoning verbrauchen dieselben Modelle im Schnitt 30-mal mehr Energie als ohne. Bei einzelnen Modellen liegt der Unterschied zwischen dem 150- und dem 700-Fachen. Der Grund ist simpel: Reasoning-Modelle erzeugen zwischen 300- und 800-mal mehr Ausgabetokens, weil ein Großteil davon in den – meist unsichtbaren – Denkprozess fließt, nicht in die eigentliche Antwort.

Das bestätigt einen Punkt, den ich in einem [früheren Beitrag zur Modellwahl](/blog/modellwahl-braucht-infrastruktur/) schon gemacht habe: Nicht jede Anfrage braucht das leistungsfähigste Modell. Eine einfache Klassifikations- oder Formatierungsaufgabe mit vollem Reasoning-Modus zu bearbeiten, ist ungefähr so, als würde man für eine kurze Strecke einen Lastwagen anlassen, der erst einmal eine halbe Stunde warmläuft, bevor er losfährt.

## Agenten sind noch hungriger

Ich arbeite selbst jeden Tag mit Agenten wie Claude Code – Werkzeugen, die nicht nur eine Antwort liefern, sondern eigenständig Dateien lesen, Befehle ausführen, Ergebnisse prüfen und bei Bedarf einen neuen Anlauf nehmen. Genau darin liegt ein Kostentreiber, der bei einem einzelnen Prompt noch keine Rolle spielt.

Ein Agent arbeitet in einer Schleife: lesen, handeln, das Ergebnis bewerten, weitermachen. Jeder Zwischenschritt – jede gelesene Datei, jede Werkzeugausgabe, jeder Zwischenstand – bleibt im Kontext und wird bei jedem weiteren Schritt erneut mitgeschickt und neu verarbeitet. Ein Auftrag, der sich wie zehn kleine Schritte anfühlt, kann dadurch mehrere hunderttausend Tokens summieren, weil nicht nur der letzte Schritt bezahlt wird, sondern der gesamte bis dahin aufgelaufene Verlauf – bei jedem einzelnen Schritt erneut. Branchenanalysen aus 2026 beziffern den Unterschied zu einer einzelnen Chat-Antwort auf das 10- bis 100-Fache an Tokens für vergleichbare Aufgaben, je nachdem wie viele Werkzeugaufrufe und Korrekturschleifen ein Auftrag durchläuft.

Für mich heißt das: Genau dieselbe Sorgfalt, die ich einem einzelnen Prompt widme, muss ich einem Agenten-Auftrag erst recht widmen. Eine Aufgabe eng zuschneiden statt „schau dir mal das ganze Projekt an". Nicht denselben Test drei Mal laufen lassen, weil man dem Ergebnis nicht traut. Eine Sitzung beenden, wenn das Ziel erreicht ist, statt den Agenten weiter drehen zu lassen. Das ist kein Argument gegen Agenten – ich würde sie nicht täglich benutzen, wenn sie mir nicht enorm viel Zeit sparen würden. Aber die Zeitersparnis für mich ist nicht automatisch eine Ressourcenersparnis insgesamt. Beides gehört zusammengedacht.

## Wie man Tokens spart, ohne auf KI zu verzichten

Tokens zu sparen heißt nicht, KI seltener zu nutzen. Es heißt, sie gezielter zu nutzen. Ein paar Hebel, die im Alltag tatsächlich etwas bringen:

- **Präzise statt weitschweifig formulieren.** Ein klar umrissener Prompt braucht weniger Rückfragen und produziert seltener eine Antwort, die man wieder verwerfen muss.
- **Reasoning nur einschalten, wenn die Aufgabe es braucht.** Für Zusammenfassungen, Umformulierungen oder einfache Extraktion reicht ein Modell ohne oder mit minimalem Denkmodus meist völlig aus.
- **Das kleinste ausreichende Modell wählen**, statt im Zweifel immer das größte zu nehmen. Dazu mehr im erwähnten Beitrag zur Modellwahl.
- **Antwortlänge begrenzen**, wo eine kurze, strukturierte Antwort reicht. Ein knappes JSON-Objekt kostet weniger Tokens als drei Absätze Fließtext mit derselben Information.
- **Kontext wiederverwenden statt jedes Mal neu aufbauen.** Wer in einer laufenden Konversation bleibt, spart gegenüber vielen isolierten Einzelanfragen mit jeweils neu mitgeschicktem Hintergrund.
- **Gezielt nachbessern statt komplett neu generieren.** Eine Antwort, die zu 80 Prozent passt, braucht eine präzise Korrektur – keinen kompletten Neustart des Prompts.
- **Agenten-Aufträge eng zuschneiden.** Eine klar begrenzte Aufgabe statt „schau dir mal alles an" – jede unnötige Werkzeugrunde wird bei jedem weiteren Schritt erneut mitberechnet.

Selbst kleine Gewohnheiten wirken sich messbar aus. Eine Studie aus diesem Jahr hat [den Energieverbrauch eines höflichen „Danke"](https://arxiv.org/abs/2601.22357) an ein Sprachmodell gemessen: Die Antwort darauf verbraucht im Schnitt 0,245 Wattstunden – genug, um eine 5-Watt-LED-Lampe fast drei Minuten leuchten zu lassen. Das ist kein Aufruf zur Unhöflichkeit. Es zeigt nur, dass jeder Austausch – auch ein reflexhafter – tatsächlich etwas kostet, und sei es wenig.

## Anbieter und Modelle sind nicht gleich

Die Google-Zahlen von oben zeigen es bereits: Ein und dieselbe Aufgabe kann bei unterschiedlichen Anbietern einen sehr unterschiedlichen Fußabdruck haben. Drei Faktoren entscheiden dabei mit:

Erstens der **Strommix am Rechenzentrumsstandort**. Ein Rechenzentrum in einer Region mit hohem Kohleanteil im Netz verursacht pro Kilowattstunde deutlich mehr CO2 als eines in einer Region mit hohem Wasserkraft- oder Windanteil – unabhängig davon, wie effizient die Hardware selbst arbeitet.

Zweitens die **Hardware- und Kühleffizienz**. Neuere Beschleuniger-Generationen leisten pro Watt oft deutlich mehr als ihre Vorgänger. Ein moderner, gut ausgelasteter Chip in einem effizient gekühlten Rechenzentrum kann pro Anfrage ein Vielfaches sparsamer sein als dieselbe Aufgabe auf älterer Hardware.

Drittens der **Einkauf von sauberem Strom**. Manche Anbieter kaufen gezielt zertifizierten Ökostrom ein oder investieren direkt in neue erneuerbare Kapazitäten. Das ist der Hebel, an dem sich laut Google ein Großteil der 44-fachen CO2-Reduktion festmachen lässt.

Für Nutzerinnen und Nutzer bedeutet das: Anbieter, die transparent über ihren Fußabdruck berichten und ihn nachweislich senken, verdienen dafür Anerkennung – und einen Vorteil bei der Wahl. Wer solche Zahlen dagegen gar nicht veröffentlicht, macht damit selbst schon eine Aussage.

## Lokale Modelle mit eigenem, regenerativem Strom

Ein Weg, den ich besonders spannend finde: kleinere, offene Modelle lokal betreiben – auf dem eigenen Laptop, einem Homeserver oder kleiner lokaler Infrastruktur. Der Charme liegt nicht allein darin, keine Daten an einen externen Anbieter zu schicken. Der Charme liegt darin, die Stromquelle selbst zu bestimmen.

Wer eine Solaranlage besitzt und mittags Stromüberschüsse hat, die sonst ins Netz eingespeist oder abgeregelt würden, kann genau in diesem Fenster ein lokales Modell laufen lassen. Der Strom wäre sonst kaum oder gar nicht sinnvoll genutzt worden. Anders gesagt: Nicht jede Kilowattstunde ist gleich knapp. Eine Kilowattstunde aus überschüssigem Solarstrom am Mittag hat einen anderen Wert als eine Kilowattstunde aus einem fossil geprägten Netz zur Abendspitze.

Ein Vorbehalt gehört dazu: Consumer-Hardware ist pro Token meist weniger effizient als spezialisierte Rechenzentrums-Beschleuniger. Ein lokales Modell auf normalem Netzstrom ist deshalb nicht automatisch die grünere Wahl – es kommt auf die Herkunft des Stroms an, nicht nur auf den Ort der Berechnung. Der eigentliche Gewinn entsteht erst in der Kombination: lokales Modell plus tatsächlich regenerativer, sonst ungenutzter Strom.

## Exkurs: Der faule Griff zur KI

Eine ehrliche Beobachtung an mir selbst: Manchmal bin ich zu faul für einen einzeiligen Terminalbefehl und lasse stattdessen einen Agenten `git status` ausführen oder eine Datei umbenennen. Der Tippaufwand für den Befehl selbst läge bei drei Sekunden. Der Umweg über die KI kostet einen vollständigen Modellaufruf – Kontext laden, Anfrage verarbeiten, Antwort generieren, Befehl ausführen – für etwas, das genauso schnell direkt getippt gewesen wäre.

Das ist kein Plädoyer gegen KI-Agenten, die eigenständig Aufgaben übernehmen – dafür sind sie gemacht, und bei echten Mehrschritt-Aufgaben lohnt sich das. Es ist eine Erinnerung daran, dass nicht jede Aufgabe eine KI-Aufgabe ist. Manchmal ist die nachhaltigste KI-Entscheidung, gar keine KI zu benutzen – einfach, weil der Mensch selbst schneller und günstiger ist.

## Fazit

Ich glaube nicht, dass die Antwort auf den Ressourcenverbrauch von KI Verzicht heißt. Ich glaube, sie heißt Transparenz. Modelle und Anbieter offenlegen, was ihre Systeme kosten. Nutzerinnen und Nutzer verstehen lassen, wie Tokens, Reasoning-Modi und Antwortlänge zusammenhängen. Und dann bewusst entscheiden: das kleinste passende Modell, den richtigen Moment, im besten Fall den eigenen Solarstrom am Mittag – oder einfach den Terminalbefehl selbst tippen.

> Nicht jeder Prompt muss die Welt kosten. Aber jeder Prompt hat einen Preis – und den sollte man kennen.
