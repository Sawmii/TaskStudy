# Projektdokumentation - [TaskStudy]

## Inhaltsverzeichnis

1. [Ausgangslage](#1-ausgangslage)
2. [Lösungsidee](#2-lösungsidee)
3. [Vorgehen & Artefakte](#3-vorgehen--artefakte)
    1. [Understand & Define](#31-understand--define)
    2. [Sketch](#32-sketch)
    3. [Decide](#33-decide)
    4. [Prototype](#34-prototype)
    5. [Validate](#35-validate)
4. [Erweiterungen [Optional]](#4-erweiterungen-optional)
5. [Projektorganisation [Optional]](#5-projektorganisation-optional)
6. [KI-Deklaration](#6-ki-deklaration)
7. [Anhang [Optional]](#7-anhang-optional)

> **Hinweis:** Massgeblich sind die im **Unterricht** und auf **Moodle** kommunizierten Anforderungen.

## 1. Ausgangslage
Studierende stehen im Alltag häufig vor der Herausforderung, mehrere Module, unterschiedliche Deadlines, Prüfungstermine sowie persönliche Lernziele gleichzeitig zu organisieren. Oft sind relevante Informationen auf verschiedene Tools wie Kalender, Notiz-Apps oder Lernplattformen verteilt. Dadurch entsteht schnell Unübersichtlichkeit, Aufgaben werden zu spät begonnen oder vergessen, und Stress sowie Überforderung nehmen zu. Besonders bei mehreren parallelen Verpflichtungen fällt es vielen Studierenden schwer, ihre Zeit realistisch zu planen, Prioritäten zu setzen und den Überblick über anstehende Aufgaben und Prüfungen zu behalten.

TaskStudy adressiert dieses Problem, indem zentrale studienrelevante Informationen an einem Ort gebündelt und übersichtlich dargestellt werden. Ziel ist es, Studierenden eine einfache, klare und benutzerfreundliche Plattform zu bieten, mit der sie ihre Module, To-dos, Termine und Prüfungen effizient organisieren können.
- **Problem:** 
Fehlendes zentrales System für die strukturierte Planung von Modulen, To-dos, Lernzielen und Prüfungsterminen führt zu Unübersichtlichkeit, Prokrastination und Stress.
- **Ziele:** 
Übersicht über alle studienrelevanten Aufgaben und Termine schaffen, 
Zeitmanagement und Selbstorganisation verbessern, 
Lernfortschritt durch klare Modul- und Lernzielstruktur unterstützen, 
Stress durch bessere Planung und Transparenz reduzieren 
- **Primäre Zielgruppe:** 
Studierende mit mehreren Modulen, Deadlines und Prüfungsterminen, die ihre Studienorganisation verbessern möchten  
- **Weitere Stakeholder:** 
Dozierende oder Coaches indirekt, sofern Studierende strukturierter und besser vorbereitet arbeiten


## 2. Lösungsidee
TaskStudy ist eine zentrale Study Planner App, die verschiedene organisatorische Funktionen in einer übersichtlichen Plattform kombiniert. Die Anwendung ermöglicht es Studierenden, Module anzulegen, To-dos und Termine zu verwalten sowie Prüfungstermine im Blick zu behalten. Zusätzlich können Lernziele pro Modul angezeigt werden, um die persönliche Lernstruktur zu verbessern.

Die Startseite bietet einen direkten Überblick über die wichtigsten aktuellen Informationen, insbesondere über die heutigen To-dos sowie bevorstehende Prüfungstermine. Dadurch erhalten Studierende sofort einen klaren Tagesfokus. Über die Modulübersicht können neue Module hinzugefügt und spezifische Lernziele eingesehen werden. Neue To-dos lassen sich jederzeit erstellen, verwalten und nach Erledigung abhaken.
- **Kernfunktionalität:** 
Dashboard / Startseite mit Übersicht über heutige To-dos und Prüfungstermine,
Verwaltung von To-dos (erstellen, anzeigen, erledigen),
Verwaltung von Terminen und Prüfungsterminen,
Module hinzufügen und verwalten,
Lernziele pro Modul anzeigen,
Navigation zwischen Startseite, Modulübersicht und Aufgabenbereichen
- **Annahmen [Optional]:**
Eine zentrale Plattform verbessert Übersicht und reduziert organisatorischen Stress,
Studierende profitieren von einer klaren Verbindung zwischen Modulen, Lernzielen und Aufgaben,
Ein einfacher, fokussierter Aufbau erhöht die Nutzungswahrscheinlichkeit
- **Abgrenzung [Optional]:** 
Keine KI-gestützten Lernempfehlungen
Keine sozialen oder kollaborativen Funktionen
Kein vollständiger Ersatz für Lernplattformen wie Moodle, sondern Fokus auf persönliche Organisation

## 3. Vorgehen & Artefakte
Die Durchführung erfolgt phasenbasiert; dokumentieren Sie die wichtigsten Ergebnisse je Phase.

### 3.1 Understand & Define
- **Zielgruppenverständnis:** 
_(Proto-)Personas_
Als Studentin bin ich selbst Teil der primären Zielgruppe und kenne die Schwierigkeiten aus eigener Erfahrung. Dazu gehören insbesondere das Vergessen von Aufgaben, das Aufschieben von Lernphasen bis kurz vor Prüfungen sowie der Verlust des Überblicks über verschiedene Module und Deadlines.
Die Analyse zeigte folgende zentrale Problemräume:
Zeitmanagement bei mehreren parallelen Modulen,
Fehlende Struktur und Priorisierung beim Lernen,
Stress durch vergessene oder kurzfristig erledigte Aufgaben,
Verteilte Informationen auf unterschiedliche Plattformen wie Moodle, Kalender oder Notiz-Apps

Zusätzlich wurde eine Recherche zu bestehenden Lösungen wie StudySmarter durchgeführt. Dabei zeigte sich, dass viele bestehende Apps zwar umfangreiche Funktionen bieten, jedoch häufig überladen wirken oder Premium-Funktionen voraussetzen. Für viele Studierende besteht daher Bedarf nach einer einfacheren, fokussierten Ergänzung zu Moodle, die primär organisatorische Unterstützung bietet.
- **Wesentliche Erkenntnisse:** _[Stichpunkte]_
Viele Studierende vergessen Aufgaben oder beginnen zu spät mit der Bearbeitung,
Moodle dient primär als Lernplattform, bietet jedoch keine zentrale, alltagsnahe Organisationslösung,
Bestehende Apps sind oft zu komplex oder enthalten unnötige Zusatzfunktionen,
Eine reduzierte, agendaähnliche App mit Fokus auf To-dos, Termine und Module könnte den Studienalltag sinnvoll ergänzen
### 3.2 Sketch
- **Variantenüberblick:** _[kurz]_
- **Skizzen:** _[Mehrere Varianten; Unterschiede kurz dokumentieren.]_

### 3.3 Decide
- **Gewählte Variante & Begründung:** _[Entscheidkriterien nennen]_  
- **End-to-End-Ablauf:**
1. Startseite öffnen: gelangt auf die Startseite und erhält einen Überblick über aktuelle To-Dos, den Fortschritt in den Modulen, bevorstehende Termine sowie alle Prüfungstermine
2. Auf der Modulübersicht können bestehende Module eingesehen oder neue Module erstellt werden. Für jedes Modul werden die zugehörigen Lernziele, To-Dos und der aktuelle Lernfortschritt angezeigt.
3. Termin erstellen: Über die Terminübersicht können Prüfungstermine, Todos und weitere wichtige Termine erfasst werden. Diese werden anschliessend auf der Startseite angezeigt, damit die Nutzerin oder der Nutzer stets den Überblick behält.
- **Mockup:** https://www.figma.com/proto/FuEVr0Ug7O3wiwPe6l42qx/StudyPlanner?node-id=0-1&t=JeL9XfYHCEZeJTad-1 

### 3.4 Prototype

#### 3.4.1. Entwurf (Design)
Beschreibt die Gestaltung und Interaktion.
> **Hinweis:** Hier wird der **Prototyp** beschrieben, nicht das **Mockup**.
- **Informationsarchitektur:** _[z. B. Seiten/Navigation: Konzept, nicht die technische Umsetzung]_
- **User Interface Design:** _[wichtige Screens: Screenshots mit kurzen Erläuterungen]_
- **Designentscheidungen:** _[zentrale Entscheidungen und Begründungen]_

#### 3.4.2. Umsetzung (Technik)
Fasst die technische Realisierung zusammen.
- **Technologie-Stack:** _[SvelteKit, Bibliotheken falls genutzt]_
- **Tooling:** _[IDE/Erweiterungen, lokale/Cloud-Tools; den Einsatz von KI beschreiben Sie im Kapitel **KI-Deklaration**]_  
- **Struktur & Komponenten:** _[Seiten, Routen, State/Stores, wichtige Komponenten]_
- **Daten & Schnittstellen:** _[Wie werden Daten gespeichert, verwaltet, abgerufen?]_
- **Deployment:** 
https://taskstudy.netlify.app/ 
- **Besondere Entscheidungen:** _[z. B. Trade-offs, Vereinfachungen]_  

### 3.5 Validate
- **Bilder der getesteten Version**

Startseite:
![Startseite](static/images/Startseite.png)
Modulübersicht:
![Moduluebersicht](static/images/Module.png)
Modulansichtsseite:
![Modulansichtsseite](static/images/ModulSeite.png)
Neues Modul:
![NeuesModul](static/images/NeuesModul.png)
Terminübersicht:
![TerminUebersicht](static/images/Termine.png)
Neuer Termin:
![NeuerTermin](static/images/NeuerTermin.png)
- **Ziele der Prüfung:** 
Mit dem Usability-Test sollte überprüft werden, ob Studierende die wichtigsten Funktionen der Anwendung intuitiv bedienen können. Insbesondere sollte untersucht werden, ob Module erstellt, Lernziele verwaltet und Prüfungstermine erfasst werden können sowie ob die Navigation innerhalb der Anwendung verständlich ist.
- **Vorgehen:** 
Der Test wurde moderiert durchgeführt. Die Testpersonen bearbeiteten vorgegebene Szenarien selbstständig, während ihre Interaktionen beobachtet wurden. Bei Unklarheiten wurden Rückfragen gestellt und anschliessend qualitative Rückmeldungen eingeholt.  
- **Stichprobe:** 
Getestet wurde mit Mitstudierenden, die potenzielle Nutzerinnen und Nutzer der Anwendung darstellen. Insgesamt nahmen 2 Personen teil; Iljazi Marigona und Pejakovic Kristina.
- **Aufgaben/Szenarien:** 
Szenario 1 – Neues Modul organisieren

Du beginnst ein neues Semester und möchtest deine Vorlesungen übersichtlich organisieren. Dafür möchtest du ein neues Modul hinzufügen und die wichtigsten Lernziele festhalten, damit du während des Semesters den Überblick behältst.

Aufgabe:
Ein neues Modul mit passenden Lernzielen erfassen.

Szenario 2 – Lernfortschritt aktualisieren

Du hast ein wichtiges Lernziel für das Modul „Prototyping“ vollständig bearbeitet und möchtest deinen Fortschritt aktualisieren, damit du sehen kannst, welche Lernziele bereits erreicht wurden.

Aufgabe:
Ein bestehendes Lernziel als erfüllt markieren.

Szenario 3 – Prüfungsvorbereitung planen

Du hast erfahren, wann deine nächste Prüfung stattfindet. Damit du rechtzeitig mit dem Lernen beginnen kannst, möchtest du den Prüfungstermin im entsprechenden Modul festhalten.

Aufgabe:
Einen neuen Prüfungstermin für das Modul „Prototyping“ erfassen.
- **Kennzahlen & Beobachtungen:** 
Positiv:

Das Erstellen eines neuen Moduls wurde von den Testpersonen schnell verstanden und erfolgreich durchgeführt.
Die Grundstruktur der Anwendung wurde als übersichtlich wahrgenommen.


Beobachtete Probleme:

Die Möglichkeit, Lernziele bereits auf der Seite zur Modulerstellung hinzuzufügen, wurde von beiden Testpersonen nicht erkannt.
Nach dem Speichern einer Aktion fehlte eine Rückmeldung (z. B. Erfolgsmeldung oder Weiterleitung), wodurch Unsicherheit entstand, ob die Aktion erfolgreich ausgeführt wurde.

- **Zusammenfassung der Resultate:**
Die zentralen Funktionen konnten grundsätzlich erfolgreich genutzt werden. Besonders das Erstellen neuer Module funktionierte intuitiv und ohne grössere Schwierigkeiten. Verbesserungspotenzial zeigte sich vor allem bei der Sichtbarkeit von Funktionen zum Hinzufügen von Lernzielen sowie beim Nutzerfeedback nach erfolgreichen Aktionen. Zudem wurden zusätzliche Funktionen gewünscht, welche die Organisation der Module weiter verbessern würden.

- **Abgeleitete Verbesserungen:** 

| Priorität | Verbesserung | Begründung |
|-----------|-------------|------------|
| Hoch | Sichtbarkeit der Funktion **„Lernziel hinzufügen“** verbessern | Beide Testpersonen fanden die Funktion nicht sofort und hatten Schwierigkeiten, Lernziele zu erfassen. |
| Hoch | Erfolgsfeedback nach dem Speichern anzeigen | User sollen direkt erkennen können, dass ihre Aktion erfolgreich ausgeführt wurde. |
| Hoch | Filteroption integrieren | Bei einer grösseren Anzahl von Aufgaben und Terminen kann die Übersicht schnell verloren gehen. Eine Filterfunktion erleichtert das Auffinden relevanter Termine und verbessert die Benutzerfreundlichkeit. |
| Mittel | Navigation nach Aktionen optimieren | Die Rückkehr zur vorherigen Ansicht war nicht immer klar ersichtlich und führte zu Unsicherheit. |
| Mittel | Modul löschen ermöglichen | Mehrere Testpersonen erwarteten diese Funktion zur Verwaltung ihrer Module. |
| Niedrig | Module nach Semester sortieren | Verbessert die Übersichtlichkeit bei einer grösseren Anzahl von Modulen. |
| Niedrig | Suchfunktion integrieren | Erleichtert das schnelle Auffinden von Modulen, Lernzielen und Prüfungsterminen. |
| Niedrig | Login-System einführen | Ermöglicht eine personalisierte Nutzung und die dauerhafte Speicherung von Daten. |

## 4. Erweiterungen [Optional]
Dokumentiert Erweiterungen über den Mindestumfang hinaus.
> **Hinweis:** Jede Erweiterung ist separat nach dem folgenden Schema zu beschreiben.

### Filterfunktion
- **Beschreibung & Nutzen:** Die Filterfunktion wurde ergänzt, damit User ihre Aufgaben und Termine gezielt filtern können. Gerade bei einer grösseren Anzahl von Terminen verbessert dies die Übersichtlichkeit und erleichtert das Auffinden relevanter Aufgaben. Dadurch wird die Verwaltung der Aufgaben effizienter und die Anwendung benutzerfreundlicher.  
- **Wo umgesetzt:** Die Erweiterung wurde im Frontend umgesetzt. In der Komponente TaskList.svelte wurden zusätzliche Filter-Buttons hinzugefügt, mit denen die angezeigten Aufgaben gefiltert werden können.
- **Referenz:** _[Wo wird die Erweiterung auch noch beschrieben, z.B. Screenshot oder Beschreibung in einem anderen Kapitel]_  
- **Aus Evaluation abgeleitet?:** Ja. Die Erweiterung wurde aufgrund des Feedbacks einer Testperson während der Evaluation umgesetzt. Es wurde angemerkt, dass bei vielen Aufgaben eine Filtermöglichkeit hilfreich wäre, um die Übersicht zu behalten und schneller die gewünschten To-Dos zu finden.

### Module favorisieren  
- **Beschreibung & Nutzen:** Es wurde die Möglichkeit ergänzt, Module als Favoriten zu markieren. Dadurch können besonders wichtige oder aktuell relevante Module hervorgehoben werden. Diese Erweiterung verbessert die Übersichtlichkeit, da sich während eines mehrjährigen Studiums eine grosse Anzahl von Modulen ansammeln kann. Durch die Favorisierung können häufig verwendete Module schneller gefunden und von weniger relevanten Modulen unterschieden werden.  
- **Wo umgesetzt:** Die Erweiterung wurde im Frontend und in der Datenbank umgesetzt. In der Modulübersicht wurde eine Funktion hinzugefügt, mit der Module als Favorit markiert oder die Markierung wieder entfernt werden können. Der Favoritenstatus wird in der Datenbank gespeichert, damit die Auswahl dauerhaft erhalten bleibt. 
- **Referenz:** _[Wo wird die Erweiterung auch noch beschrieben, z.B. Screenshot oder Beschreibung in einem anderen Kapitel]_  
- **Aus Evaluation abgeleitet?:** Nein. Die Erweiterung entstand aus einer eigenen Beobachtung während der Entwicklung. Da sich über mehrere Semester beziehungsweise Studienjahre viele Module ansammeln können, wurde eine Favoritenfunktion als sinnvolle Möglichkeit zur Verbesserung der Übersichtlichkeit und Benutzerfreundlichkeit implementiert.

### _[4.x Kurzbeschreibung / Titel]_  
- **Beschreibung & Nutzen:** _[Was wurde erweitert? Warum?]_  
- **Wo umgesetzt:** _[Wie und wo wurde es gemacht? Frontend, Backend, Datenbank?]_  
- **Referenz:** _[Wo wird die Erweiterung auch noch beschrieben, z.B. Screenshot oder Beschreibung in einem anderen Kapitel]_  
- **Aus Evaluation abgeleitet?:** _[Wurde diese Erweiterung als Folge eines in der Evaluation identifizierten Issues implementiert?]_  

> Das folgende **Beispiel** wurde bewusst kurz gehalten. Erweiterungen dürfen auch ausführlicher beschrieben werden.

### 4.1 Tabelle nach Kategorien filtern
- **Beschreibung & Nutzen:** Tabelle X kann nach Kategorie gefiltert werden, weil User typischerweise nur an einer bestimmten Kategorie interessiert sind.  
- **Wo umgesetzt:** 
  - **Frontend:** Tabelle mit Dropdown in Datei ...
  - **Backend:** Form Action ... in Datei ...
  - **Datenbank:** MongoDB-Query in Datei ...
- **Referenz:** Screenshot in Kap. x.y
- **Aus Evaluation abgeleitet?:** Ja, Issue x.y

## 5. Projektorganisation [Optional]
Beispiele:
- **Repository & Struktur:** _[Link; kurze Strukturübersicht]_  
- **Issue-Management:** _[Vorgehen kurz beschreiben]_  
- **Commit-Praxis:** _[z. B. sprechende Commits]_

## 6. KI-Deklaration
Die folgende Deklaration ist verpflichtend und beschreibt den Einsatz von KI im Projekt.

### 6.1 KI-Tools
- **Eingesetzte Tools**:
ChatGPT (Plus) 
- **Zweck & Umfang**: _[wie, wofür und in welchem Ausmass wurde KI eingesetzt (z. B. Textentwürfe, Codevorschläge, Tests, Refactoring); welche Teile stammen (ganz/teilweise) aus KI-Unterstützung?]_
ChatGPT wurde während der Entwicklung als Unterstützung bei der Programmierung eingesetzt. Vor allem habe ich die KI für Codevorschläge, die Fehlersuche und bei der Umsetzung einzelner Funktionen verwendet. Die vorgeschlagenen Lösungen konnten jedoch selten direkt übernommen werden und mussten meist angepasst oder erweitert werden, damit sie mit meiner bestehenden Anwendung funktionieren.

Mit Unterstützung von ChatGPT wurden unter anderem folgende Funktionen umgesetzt:

Erfassen und Verwalten von Lernzielen
Korrektur von Fehlern in DynamicList.svelte und Funktion getTasksByModule in db.js
Implementierung der Filterfunktion in TaskList.svelte
Anzeige des Lernfortschritts als Prozentwert mit kreisförmiger Fortschrittsanzeige
Tasks Filterfunktion
Unterstützung bei einzelnen Codeproblemen und Lösungsansätzen während der Entwicklung


Die KI diente dabei hauptsächlich als Hilfsmittel. Der generierte Code wurde von mir überprüft, angepasst und in die bestehende Anwendung integriert.
- **Eigene Leistung (Abgrenzung):** _[was ist eigenständig erarbeitet/überarbeitet worden?]_
Die Konzeption, Umsetzung und Gestaltung der Anwendung erfolgte grösstenteils eigenständig. Dazu gehören insbesondere:

Die Startseite
Die Modul-Übersichtsseiten
Das Formular zum Erstellen neuer Module und Tasks
Die Übersichtsseiten
Die Komponente ModuleCard.svelte
Alle Komponenten im Ordner modules, mit Ausnahme der Funktionen zum erledigen von Lernzielen sowie zum Erstellen neuer Lernziele

### 6.2 Prompt-Vorgehen
_[Überlegungen zu Prompt-Vorgehen, Qualität und Urheberrecht/Quellen. Wie wurde beim Prompting vorgegangen? Zu beschreiben ist die grundlegende Vorgehensweise. Einzelne, konkrete Prompts sollten höchstens als Beispiele aufgeführt werden. ]_
Während der Entwicklung habe ich ChatGPT hauptsächlich genutzt, wenn ich bei einem Problem nicht weiterkam oder eine Funktion umsetzen wollte. Dabei habe ich möglichst genau beschrieben, was ich erreichen möchte, welche Technologien ich verwende und welche Anforderungen die Lösung erfüllen soll.

Wenn die erste Antwort nicht direkt funktioniert hat, habe ich den Prompt ergänzt, Fehlermeldungen eingefügt oder genauer erklärt, wo das Problem liegt. Oft waren mehrere Nachfragen nötig, bis eine passende Lösung gefunden wurde. Die Vorschläge von ChatGPT dienten dabei als Unterstützung und Ausgangspunkt für die weitere Umsetzung.

Den generierten Code habe ich jeweils selbst getestet und an mein Projekt angepasst. Es mussten Änderungen vorgenommen werden, damit die Lösung mit meiner bestehenden Anwendung funktioniert. Dadurch konnte ich die vorgeschlagenen Ansätze besser verstehen und in meine eigene Projektstruktur integrieren.

Bei der Dokumentation und der Umsetzung des Projekts habe ich darauf geachtet, die Inhalte kritisch zu prüfen und nicht ungefiltert zu übernehmen. Die Verantwortung für die fertige Anwendung sowie für alle Anpassungen und Entscheidungen lag bei mir.

### 6.3 Reflexion
_[Nutzen, Grenzen, Risiken/Qualitätssicherung, ...]_

## 7. Anhang [Optional]
Beispiele:
- **Quellen:** _[verwendete Vorlagen/Assets/Modelle; Lizenz/Urheberrecht; ...]_
- **Testskript & Materialien:** _[Link/Datei]_  
- **Rohdaten/Auswertung:** _[Link/Datei]_  

