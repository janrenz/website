---
title: "KI‑gestützte Content‑Produktion: Gesprochen denken, in Code produzieren"
date: 2026-08-13
description: "Ein Experiment: frei gesprochenes Video → Transkript → KI erzeugt HTML‑Mini‑Filme mit Hyperframes → Videoexport. Die bewusste Entscheidung: Video als Ausgabeformat, Code/HTML als Produktionsformat."
summary: "Vom alten Slide‑plus‑Speaker‑Workflow zum Produktionskern in Code: Ideen frei sprechen, transkribieren, strukturieren, mit Hyperframes generieren und als Video ausspielen."
tags: ["Content-Produktion", "KI", "Video", "Workflow", "Hyperframes"]
translationKey: "ki-content-production"
heroImage: "/img/blog/ki-content-production/hero-ki-content-abstract.svg"
heroAlt: "Abstrakte Illustration: Idee wird zu strukturiertem Code – ruhige, geometrische Formen ohne Prozessgrafik"
---

> These: Video lohnt sich als universelles Ausgabeformat – nicht zwingend als Produktionsformat. Produziert wird in Text und Code, ausgespielt wird als Video.

## Ausgangspunkt: Slide‑plus‑Speaker war gut – und teuer

Am HPI haben wir jahrelang Slide‑plus‑Speaker‑Produktionen gebaut. Saubere Foliensätze. Studioaufnahmen. Postproduktion. Qualitätskontrolle. Das Ergebnis war professionell – aber schwerfällig.

Dieses Experiment geht den umgekehrten Weg. Ich spreche frei in die Kamera. Aus der Aufnahme wird ein Transkript, aus dem Transkript strukturierte Abschnitte – kleine HTML‑„Mini‑Filme“, gebaut mit Hyperframes. Am Ende steht wieder ein Video: exportiert aus dem Code, nicht geschnitten im NLE (klassisches Videoschnittprogramm).

{{< video src="/video/hyperslide-demo.mp4" poster="/images/video-posters/hyperslide-demo/poster.webp" label="Hyperframes‑Demo" >}}

## Warum Code/HTML das bessere Produktionsformat ist

Code ist änderbar, ohne dass ich neu drehen muss. Beim Schreiben dieses Beitrags wollte ich eine Formulierung im Video korrigieren. Ich musste nicht neu drehen – ich habe den Text im Code geändert und das Video neu exportiert.

Code ist außerdem diff‑freundlich. Ich kann Änderungen nachvollziehen, reviewen, automatisieren – so, wie ich es aus der Softwareentwicklung kenne, nicht wie aus der Videobearbeitung.

Und Code trägt Barrierearmut schon im Format. Semantik, Alternativtexte, responsive Layouts entstehen nicht nachträglich, sondern sind im Output angelegt. Für Lernende, die auf Screenreader oder Untertitel angewiesen sind, ist das kein Nice‑to‑have. Es entscheidet, ob sie den Inhalt überhaupt nutzen können.

Das heißt nicht, dass NLEs verschwinden. Für einzelne, hochwertige Produktionen bleibt klassische Videobearbeitung sinnvoll. Aber für wiederkehrende Erklär‑, Produkt‑ oder Lerninhalte ist Code/HTML als Produktionskern oft effizienter. Das Video bleibt die universelle Ausspielung.

## Hyperframes: Ein Open‑Source‑Baustein, kein Monolith

Hyperframes ist ein Open‑Source‑Tool. Es beschreibt Abschnitte als Code und erzeugt daraus präsentationsfähige HTML‑Artefakte. Für dieses Experiment nutze ich es nicht als fertiges Endsystem, sondern als einen Baustein in einer Pipeline: Transkript, strukturierte Abschnitte, generierte Mini‑Filme, Videoexport.

Mit MCP‑fähigen Werkzeugen ließen sich Teile davon künftig automatisieren – Abschnitte vorschlagen, Layouts wählen, Assets prüfen. Das ist heute noch Zukunftsmusik. Ich will nicht mehr behaupten, als das aktuelle Setup tatsächlich hergibt.

## Video oder Code im Zentrum – meine Antwort: Code

Video als Produktionsformat hat echte Stärken: Performance, Bildbearbeitung, Timing im Millisekundentakt. Seine Schwäche zeigt sich bei Korrekturen, bei Varianten, bei Versionierung.

Code/HTML als Produktionsformat dreht dieses Verhältnis um. Seine Stärke liegt in Struktur, Varianten, Review und Automatisierung. Video wird darin zum Export – robust, universell, plattformkompatibel.

Für dieses Experiment setze ich deshalb bewusst auf Code/HTML als Produktionsformat. Video bleibt die Ausgabe, nicht der Ausgangspunkt.

## Transparenz und Grenzen

Zwei Dinge gehören zur Transparenz dieses Experiments. Das eingebettete Video ist deutschsprachig; auf der englischen Fassung dieses Beitrags ist das klar gekennzeichnet. Und: KI kam für Entwurf, Glättung und Strukturierung unterstützend zum Einsatz. Verantwortung und Freigabe liegen bei mir.

Wenn ich das für mich zusammenfasse: Video bleibt für mich das richtige Ausgabeformat – aber nicht mehr der Ort, an dem ich produziere. Produziert wird in Code. Exportiert wird als Video. Für wiederkehrende Formate ist das für mich der praktikablere Weg.
