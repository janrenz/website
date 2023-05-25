---
title: "Eine Betrachtung der bund.id aus bildungsinfrastruktureller Sicht"
date: 2023-05-25
description: "bund.id und Bildung: Ein Traumpaar?"
summary: "Einordnung der bund.id für den Bildungssektor und Ableitung von mehreren Handlungsfeldern."
tags: ["infrastructure", "bundid"]
---

Mit der Novelle (also der neuen Version) des Online Zugangs Gesetzes (OZG) wird die bund.id als verpflichtendes Onlinezugangskonto inkl. Postfachfunktion eingeführt. So heißt es in den „Eckpunkte für eine moderne und zukunftsgerichtete Verwaltung“ des BMI [(eckpunkte-ozg.pdf](https://www.bmi.bund.de/SharedDocs/gesetzgebungsverfahren/DE/Downloads/kabinettsfassung/eckpunkte-ozg.pdf))

*„Der digitale Identitätsnachweis (elektronischer Personalausweis) ist der Schlüssel zu staatlichen (aber auch privaten) Leistungen und wird über konkrete Anwendungsfälle nutzerfreundlich etabliert.“*

Neu im OZG ist dabei, dass statt verschiedener bundesland-spezifischen Servicekonten nun die bund.id  für alle Verfahren, sei es von Bund, Land oder Kommune angeboten, verpflichtend zum Einsatz kommen soll. Die bund.id hat dabei verschiedene Vertrauensstufen, inkl. einem sog. hohen Vertrauensniveau, welche eine rechtssichere Identitätsfeststellung erlaubt. Hierfür kommt momentan entweder ein Ausweisdokument mit eID-Funktion ("Online-Asuweis") zum Einsatz oder ein aus dem Steuerbereich stammendes Elsterzertifikat. 
Die Handhabung ist dabei noch anspruchsvoll. Zwar benötigt man heute kein extra Lesegerät mehr, um die Daten aus seinem „Online Ausweis“ auszulesen, sondern es reicht ein aktuelles Smartphone mit NFC Lesefunktion. Trotzdem ist der Prozess, vielleicht auch weil er eben noch nicht erlernt ist erklärungsbedürftig. Man muss u.a. eine extra App installieren (siehe bspw. [Antrag stellen - Anleitung (einmalzahlung200.de)](https://www.einmalzahlung200.de/eppsg-de/anleitung-antrag)). Benutzt man Laptop und Smartphone parallel wird es nochmal komplizierter.

Bei der 200 EUR Einmalzahlung für Studierende wurde die bund.id als Loginkonto benutzt und oft auch als zweiter Faktor zur Identitätsfeststellung *(Disclaimer: Ich war bei diesem Projekt für das BMBF als intern beratender Architekt tätig)*. 

Kurzer Recap zur Einmalzahlung: Die Herausforderung von dem Projekt einmahlzahlung200.de war, das von den Berechtigten weder die persönlichen Daten noch die Kontendaten vorlagen. Da es keine Option war 18 Monate zu warten ([Berechnungen zur Zusammenführung von Steuernummer und IBAN - FragDenStaat](https://fragdenstaat.de/anfrage/berechnungen-zur-zusammenfuehrung-von-steuernummer-und-iban/#nachricht-731510)), wurde  mit dem federführenden Bundesland und dem Dienstleister ein mehrstufiges Verfahren entwickelt:

1. Ausbildungsstätten laden verschlüsselte Listen der in ihrer Institution Antragsberechtigten in ein Online-System. 
1. Sie übermitteln dem Antragsberechtigten ein lokal erzeugten Zugangstoken. Dieses Token ermöglicht dem Onlineverfahren temporär auf die verschlüsselten Datenzuzugreifen.
1. Der Antragsberechtigte stellt ein Online-Antrag. Hierbei gibt er die Kontonummer (IBAN) an, auf die der Betrag überwiesen werden soll. Dieser wird automatisch überprüft und im Regelfall automatisch zur Auszahlung angewiesen.
1. Um das Verfahren abzusichern, muss neben dem Zugangstoken die Identität festgestellt werden. Dies erfolgt dann eben über die via bund.id verknüpften Informationen aus dem Online-Ausweis oder dem Elster-Zertifikat. Alternativ konnte hierfür ein zweiter PIN eingesetzt werden, der durch die Ausbildungsstätte erzeugt werden konnte und bei dem die Ausbildungsstätte sicherzustellen hatte, dass der Zugang nur an die berechtigte Person erfolgte. Dies konnte bspw.  per Aushändigung im Sekretariat (gegen Vorlage des Ausweises) oder Verwendung von lokal vorhandenen sicheren Systemen erfolgen.

Das Verfahren war dabei (meines Wissens nach) das erste OZG Verfahren, welches das EfA (EinerFürAlle) Prinzip vollständig umsetzte, da nicht nur das Antragsverfahren, sondern auch die Antragsabwicklung (das sogenannte Fachverfahren) durch das federführende Bundesland bereitgestellt wurde und von allen Bundesländern genutzt wurde.

Immerhin wurde die überarbeite Benutzeroberfläche von bund.id noch rechtezeitig veröffentlich, so dass man optisch aus den 90ern in die Gegenwart geholt wurde.

*Kritisch betrachten muss man übrigens die sich hier einschleichende Praxis mit eigenen Top-Level-Domains zu arbeiten. Während das BSI auf Arbeitsebene empfiehlt, immer mit vertrauenswürden Top-Level-Domains wie bund.de zu arbeiten also etwa: antraege.bildung.bund.de, scheiterte dass hier an dem Fehlen einer solchen Domain die Bund und Länder inkludiert.* 

Stand Ende Mai 2023 wurden über 2.500.000 Anträge (Quelle. Einmalzahlung.de)  über dieses Verfahren erfolgreich ausgezahlt. Das war gleichzeitig ein Booster für die Nutzung der bund.id. Auch wenn die Server der bund.id zum Start des Verfahrens kurz in die Knie gingen (wobei eine solche Infrastruktur ja mit Skalierbarkeit im Core konzipiert werden sollte) hat die Verwendung der bund.id zu dem Herbeiführen einer kritischen Masse an Nutzenden geführt (die vorher noch bei rund 100.000 rumdümpelte, Quelle:  [Personalausweisportal - Startseite - 100.000 Accounts im Nutzerkonto Bund](https://www.personalausweisportal.de/SharedDocs/kurzmeldungen/Webs/PA/DE/2022/02_Nutzerkonto_Bund.html)) 
*(Disclaimer: Auch die Infrastruktur des Antragsverfahre war nicht gut skalierbar, da sowohl die  im Hintergrund eingesetzte Softwarelösung lizenztechnische Limitierungen hatte, auch lief das Verfahren in einem Rechenzentrum des Dienstleisters und nicht in einer noch nicht existierenden sehr gut skalierbaren Verwaltungscloud  ([Deutsche Verwaltungscloud (dataport.de)](https://www.dataport.de/was-wir-bewegen/thema/deutsche-verwaltungscloud/))*

**Handlungsfelder**

**Nutzbarkeit** 

Die bund.id sollte kontinuierlich und nutzendenzentriert weiterentwickelt werden. Das kann bspw. in den vorhandenen Projekten zu Digitalen identitäten am GovLab ([GovLabDE | Zusammenarbeitsplattform der Bundesregierung](https://www.govlab.bund.de/Webs/GovLab/DE/startseite/startseite-node.html)) erfolgen, wichtig ist hier aber m.E. das zwei Dinge verstanden werden:

1) Verwaltungsdigitalisierung muss sich am Standard des Marktes messen lassen. Solange also das Einloggen mit bund.id kompliziertes ist als beispielsweise  das Einloggen per Apple ID wird das nix. Hierbei ist zu pürfen inwiefern auhc eine engere Kooperation mit Betrie
1) Gleichzeitig sind Anforderungen aus die noch aus einer analogen Verwaltungsdenke kommen abzulösen. Hier ist als Beispiel die Schriftformerfordernis zu nennen. Nur mit den passenden Rahmenbedingungen und auch einem geänderten Mindset in der Verwaltung kann Verwaltungsdigitalisierung gelingen. Das gilt auch für die Frage wie Projekte umgesetzt werden (nicht erst Gesetz, dann Implementierung, sondern cross-funktionale interdisziplinäre Teams und ein frühzeitiges Kollaboratives Miteinander mit allen Stakeholdern. Dafür ist auch der massive Aufbau von Digitalkompetenz in den einzelnen Ressorts notwendig.

Es ist zu prüfen wo auch pragmatischer gedacht werden kann. Kann man zum Beispiel die Online-Identifizierung (zusätzlich) nicht über bestehende Infrastrukturen wie Banken machen, bei denen ja schon eine geprüfte Identität vorliegt. So haben es andere Länder erfolgreich gemacht

**Datenschutz und Datensouveränität** müssen zentrale Aufgaben der Weiterentwicklung sein. So müssen Werkzeuge wie Datenschutzcockpits in denen ersichtlich ist wer wann auf welche Daten zugegriffen hat auch für die Breite Masse der Nutzenden verständlich sein. DS-

GVO Funktionen wie Dateneinsicht, Datenänderung und Datenlöschung müssen niedrigschwellig nutzbar sein.

Gleichzeitig sind die verschiedenen **Initiativen konsequent zusammenzuführen**. So beispielsweise die kommende EU-Wallet ([European Digital Identity (europa.eu)](https://commission.europa.eu/strategy-and-policy/priorities-2019-2024/europe-fit-digital-age/european-digital-identity_en), welche auch Identifizierungsfunktionen beinhaltet.

Das gilt aber auch für Projekte wie die den Digitalen Bildungsraum / Nationale Bildungsplattform (NBP)  ([Nationale Bildungsplattform - Produktentwicklung - Digitaler Bildungsraum](https://bildungsraum.de/display/PROD/Nationale+Bildungsplattform)), der mit einer eigenen proprietären Wallet daherkommt. Diese ist zwar deutlich mehr als eine ID-Wallet, sondern versteht sich als  verknüpfendes Element einer Vernetzungsinfrastruktur für Bildung aber das widerspricht nicht einer ganzheitlichen Herangehensweise. Gleiches gilt für die  webbasierte Wallet des Europass ([Europass and European Digital Credentials for Learning | Europass](https://europa.eu/europass/en/europass-and-european-digital-credentials-learning)) in der ich digital verifizierbare Credentials ablegen kann.

Was fehlt, ist ein offener gesellschaftlich verankerter **Diskurs über die grundsätzliche Architekturfragen**. Das gilt zum Beispiel für die Zusammenwirken bzw der Abgrenzung zwischen dezentralen Wallets (On-Device), Web-Wallets und Registern. Welche Vorteile und Risiken bringen zum Beispiel dezentrale Wallets wie die der NBP? 

Grundsätzlich scheint im Moment die EU den Takt (SDG, eIDAS2) anzugeben, dass passiert zwar unter intensiver Beteiligung der Mitgliedsstaaten, aber das Zusammendenken mit den zahlreichen nationalen Initiativen und Schaufensterprojekten scheint eher durch Vernetzung und Beteiligung zu funktionieren, nicht aber durch entsprechende dauerhafte Strukturen. Gerade für den Bildungsbereich braucht es hier neue Strukturen, von bildungslagenspezifischen Standardisierungs hin zu Interoperablen IT-Architekturen die Synergien heben bis hin zu beteiligungsstrukturen für Projekte wie der NBP, wie sie etwa hier () gefordert werden
*(Transparenzdisclaimer: Bis vor kurzem war ich im BMBF als Referent in der hierfür zuständigen Projektgruppe angestellt)*.

Und letztendlich sollte pragmatisch über **neue Use Cases** nachgedacht werden. Wenn wir bspw. jetzt mit der bund.id ein Servicekonto mit Postbox haben, warum erweitert man das nicht um eine Funktion das bspw. Ausbildungsstätten Zeugnisse in diese Eingangs schicken, können bei denen festgelegt ist, das diese über ein bestimmten Zeitraum nicht veränderbar (immutable)  und nicht löschbar sind. Wenn man diese dann noch teilbar macht (das kommt eh in der EU-Wallet, am besten auch mit datensparsamen Verifiable Presentations) hat man nicht nur ein Zusammenführen mit den Wallets, sondern erspart den Ausbildungsstätten das lokale Archivieren dieser Dokumente.


