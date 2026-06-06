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
Studierende müssen während ihres Studiums verschiedene Module, Aufgaben, Prüfungstermine und persönliche Lernziele gleichzeitig organisieren. Oft sind diese Informationen auf mehrere Plattformen wie Kalender, Notiz-Apps oder Lernplattformen verteilt. Dadurch geht schnell der Überblick verloren, Aufgaben werden vergessen oder zu spät begonnen und der organisatorische Aufwand steigt.

TaskStudy soll Studierende dabei unterstützen, ihre studienrelevanten Informationen zentral an einem Ort zu verwalten und den Überblick über anstehende Aufgaben, Lernziele und Prüfungen zu behalten.
- **Problem:** 
Es fehlt häufig ein zentrales System zur Verwaltung von Modulen, To-dos, Lernzielen und Prüfungsterminen. Dies kann zu Unübersichtlichkeit, Prokrastination und zusätzlichem Stress führen.
- **Ziele:** 
  - Übersicht über alle studienrelevanten Aufgaben und Termine schaffen
  - Zeitmanagement und Selbstorganisation verbessern
  - Lernfortschritt durch klare Modul- und Lernzielstruktur unterstützen
  - Stress durch bessere Planung und Transparenz reduzieren
- **Primäre Zielgruppe:** 
Studierende, die mehrere Module, Aufgaben und Prüfungstermine organisieren und ihren Studienalltag strukturierter gestalten möchten.
- **Weitere Stakeholder:** 
  - Dozierende (indirekt durch besser organisierte Studierende)
  - Coaches oder Mentorinnen und Mentoren, die Studierende bei der Studienorganisation unterstützen

## 2. Lösungsidee
TaskStudy ist eine Study-Planner-App, welche die wichtigsten organisatorischen Funktionen des Studienalltags in einer zentralen Anwendung vereint. Nutzerinnen und Nutzer können Module verwalten, Lernziele festlegen, Aufgaben organisieren sowie Prüfungstermine und weitere wichtige Termine erfassen.

Die Startseite bietet einen schnellen Überblick über aktuelle To-dos, den Lernfortschritt sowie bevorstehende Prüfungen und Termine. Dadurch können Studierende ihre Aufgaben priorisieren und ihren Lernfortschritt einfacher verfolgen.
- **Kernfunktionalität:** 
  - Dashboard mit Übersicht über aktuelle To-dos und Prüfungstermine
  - Module erstellen und verwalten
  - Lernziele pro Modul erfassen und als erledigt markieren
  - To-dos erstellen, verwalten und abschliessen
  - Termine und Prüfungstermine verwalten
  - Lernfortschritt pro Modul visualisieren
  - Module als Favoriten markieren
  - Navigation zwischen Startseite, Modulübersicht und Aufgabenbereichen
- **Annahmen [Optional]:**
  - Eine zentrale Plattform verbessert die Übersicht über studienrelevante Informationen.
  - Eine Verknüpfung von Modulen, Lernzielen und Aufgaben unterstützt die Lernorganisation.
  - Eine einfache und übersichtliche Benutzeroberfläche erhöht die Nutzungsbereitschaft.
- **Abgrenzung [Optional]:** 
  - Keine KI-gestützten Lernempfehlungen
  - Keine sozialen oder kollaborativen Funktionen
  - Kein vollständiger Ersatz für Lernplattformen wie Moodle
  - Fokus auf persönliche Studienorganisation und Planung

## 3. Vorgehen & Artefakte
Die Durchführung erfolgt phasenbasiert; dokumentieren Sie die wichtigsten Ergebnisse je Phase.

### 3.1 Understand & Define
- **Zielgruppenverständnis:** 
Als Studentin bin ich selbst Teil der primären Zielgruppe und kenne die Schwierigkeiten aus eigener Erfahrung. Dazu gehören insbesondere das Vergessen von Aufgaben, das Aufschieben von Lernphasen bis kurz vor Prüfungen sowie der Verlust des Überblicks über verschiedene Module und Deadlines.
Die Analyse zeigte folgende zentrale Problemräume:
Zeitmanagement bei mehreren parallelen Modulen,
Fehlende Struktur und Priorisierung beim Lernen,
Stress durch vergessene oder kurzfristig erledigte Aufgaben,
Verteilte Informationen auf unterschiedliche Plattformen wie Moodle, Kalender oder Notiz-Apps

Zusätzlich wurde eine Recherche zu bestehenden Lösungen wie StudySmarter durchgeführt. Dabei zeigte sich, dass viele bestehende Apps zwar umfangreiche Funktionen bieten, jedoch häufig überladen wirken oder Premium-Funktionen voraussetzen. Für viele Studierende besteht daher Bedarf nach einer einfacheren, fokussierten Ergänzung zu Moodle, die primär organisatorische Unterstützung bietet.
- **Wesentliche Erkenntnisse:**
  - Viele Studierende vergessen Aufgaben oder beginnen zu spät mit der Bearbeitung.
  - Moodle dient primär als Lernplattform, bietet jedoch keine zentrale, alltagsnahe Organisationslösung.
  - Bestehende Apps sind oft zu komplex oder enthalten unnötige Zusatzfunktionen.
  - Eine reduzierte, agendaähnliche App mit Fokus auf To-dos, Termine und Module könnte den Studienalltag sinnvoll ergänzen.
### 3.2 Sketch
- **Variantenüberblick:** Im Rahmen der Ideensammlung wurden mehrere Varianten für die Struktur und Funktionen der Anwendung entwickelt. Dabei wurden unterschiedliche Möglichkeiten zur Darstellung von Terminen, Prüfungen und Lernfortschritten untersucht. Einige Varianten setzten auf eine klassische Kalenderansicht, während andere Termine in einer Listenansicht darstellten. Zudem wurden zusätzliche Funktionen wie eine separate Prüfungsübersicht, ein Fokus-Timer, das Hochladen von Dateien sowie die Bewertung von Lernsessions skizziert. Ziel war es, verschiedene Ansätze zu vergleichen und die für Studierende übersichtlichste und nützlichste Lösung auszuwählen.
- **Skizzen:** Im Rahmen der Crazy-8s-Methode wurden mehrere Lösungsansätze für die Anwendung entwickelt. Die einzelnen Skizzen unterscheiden sich vor allem in der Darstellung von Terminen, Prüfungen, Lernfortschritten und zusätzlichen Funktionen.
  - **Startseite:** Übersicht über die heutigen To-dos sowie den Lernfortschritt der einzelnen Module.
  - **Kalenderansicht:** Termine und Aufgaben werden in einer klassischen Kalenderansicht dargestellt, um einen Überblick über die zeitliche Planung zu ermöglichen.
  - **Modulansicht:** Anzeige der To-dos, Herausforderungen und Lernfortschritte eines einzelnen Moduls.
  - **Prüfungsansicht:** Prüfungen werden auf einer separaten Seite dargestellt, damit wichtige Prüfungstermine unabhängig von anderen Terminen sichtbar sind.
  - **Journal-/Dateiansicht:** Möglichkeit, Dateien und Lernunterlagen hochzuladen und zu verwalten.
  - **Fokus-Timer:** Unterstützung konzentrierter Lernphasen durch einen integrierten Timer.
  - **Bewertungsansicht:** Lernsessions können bewertet werden, um den eigenen Lernfortschritt und die Effektivität der Lernzeit zu reflektieren.

![8s](static/images/8s.png)

Während des Skizzierens wurden verschiedene Möglichkeiten zur Darstellung von Terminen getestet. In einer Variante wurden Termine innerhalb einer Kalenderansicht angezeigt. In einer anderen Variante wurden Termine als Liste dargestellt, da wichtige Termine und Prüfungen dadurch schneller erfasst werden können und die Übersichtlichkeit erhöht wird.

Auch die Prüfungen wurden zunächst als eigenständige Seite konzipiert. Im weiteren Verlauf wurde jedoch entschieden, wichtige Prüfungstermine zusätzlich auf der Startseite anzuzeigen, damit diese direkt sichtbar sind und nicht erst über eine separate Ansicht aufgerufen werden müssen.

Anschliessend wurde Feedback eingeholt. Besonders positiv bewertet wurde die Idee einer zentralen Übersicht für Lernfortschritte und Aufgaben. Zudem wurde vorgeschlagen, Lernziele stärker auf der Startseite sichtbar zu machen sowie Filtermöglichkeiten für Prüfungen vorzusehen.


### 3.3 Decide
- **Gewählte Variante & Begründung:** Basierend auf den Skizzen und dem erhaltenen Feedback wurde eine Variante gewählt, die den Fokus auf Übersichtlichkeit und einfache Bedienung legt. Die Startseite wurde so gestaltet, dass die wichtigsten Informationen direkt sichtbar sind. Dazu gehören aktuelle To-dos, Lernfortschritte der Module sowie bevorstehende Prüfungs- und Abgabetermine.

Die Entscheidung fiel auf diese Variante, da sie die wichtigsten Informationen ohne unnötige Komplexität darstellt und Studierende dadurch schneller einen Überblick über ihre Aufgaben erhalten. Zusätzlich ermöglicht die direkte Verlinkung zu den Modulen einen effizienten Zugriff auf Lernziele und Fortschritte.

![Skizze](static/images/Skizze.png)
- **End-to-End-Ablauf:**
  1. Die Nutzerin oder der Nutzer öffnet die Startseite und erhält einen Überblick über aktuelle To-dos, Lernfortschritte sowie bevorstehende Termine und Prüfungen.
  2. Über die Modulübersicht können bestehende Module eingesehen oder neue Module erstellt werden.
  3. Innerhalb eines Moduls können Lernziele verwaltet und als erledigt markiert werden.
  4. Über die Terminübersicht können neue Termine, Prüfungstermine und To-dos erfasst werden.
  5. Alle wichtigen Informationen werden zentral auf der Startseite dargestellt, sodass der aktuelle Lernstand jederzeit sichtbar ist.
- **Mockup:**
https://www.figma.com/proto/FuEVr0Ug7O3wiwPe6l42qx/StudyPlanner?node-id=0-1&t=JeL9XfYHCEZeJTad-1

Auf der Startseite erhält die Nutzerin oder der Nutzer einen schnellen Überblick über aktuelle To-dos, bevorstehende Termine und Prüfungstermine. Zusätzlich werden die vorhandenen Module sowie deren Lernfortschritt angezeigt, sodass die wichtigsten Informationen direkt sichtbar sind.
![Startseite Figma](static/images/Figma_Startseite.png)

Die Modulübersicht zeigt alle erstellten Module an. Von hier aus können bestehende Module ausgewählt oder neue Module hinzugefügt werden.
![Moduluebersicht Figma](static/images/FigmaModulUebersicht.png)

Auf der Modulseite werden die Lernziele und To-Dos eines einzelnen Moduls angezeigt.
![Modulseite Figma](static/images/Figma_ModulSeite.png)

Über diese Seite können neue Module erstellt werden. Dabei muss man den Dozenten und den Namen vom Modul angeben.
![Neues Modul Figma](static/images/Figma_NeuesModul.png)

Die Terminübersicht zeigt alle erfassten Termine, Prüfungstermine und To-Dos an. Dadurch können anstehende Ereignisse einfach eingesehen und erledigt werden.
![Termine Figma](static/images/Figma_Termine.png)

Auf dieser Seite können neue Termine, Prüfungstermine oder To-dos erfasst werden. Die Eingabe erfolgt über ein Formular mit den wichtigsten Informationen zum jeweiligen Eintrag.
![Neuer Termin Figma](static/images/Figma_NeuerTermin.png)

### 3.4 Prototype

#### 3.4.1. Entwurf (Design)
Beschreibt die Gestaltung und Interaktion.
> **Hinweis:** Hier wird der **Prototyp** beschrieben, nicht das **Mockup**.
- **Informationsarchitektur:** Die Anwendung besteht aus drei zentralen Bereichen: Dashboard, Module und Termine. Über die Navigationsleiste können Benutzer zwischen den Bereichen wechseln.

Das Dashboard bietet eine Übersicht über die heutigen To-Dos, den Lernfortschritt der Module sowie anstehende Termine und Prüfungstermine. Im Bereich „Module“ werden alle Module angezeigt. Jedes Modul besitzt eine Detailseite mit Lernzielen und modulbezogenen To-Dos. Im Bereich „Termine“ werden To-Dos, Termine und Prüfungstermine verwaltet.

Die Navigation wurde bewusst einfach gehalten, damit Benutzer schnell zwischen den wichtigsten Funktionen wechseln können.
- **User Interface Design:** _[wichtige Screens: Screenshots mit kurzen Erläuterungen]_
- **Designentscheidungen:** _[zentrale Entscheidungen und Begründungen]_

#### 3.4.2. Umsetzung (Technik)
Fasst die technische Realisierung zusammen.
- **Technologie-Stack:** _[SvelteKit, Bibliotheken falls genutzt]_
- **Tooling:** 
Für die Entwicklung wurden folgende Werkzeuge eingesetzt:
  - Visual Studio Code als Entwicklungsumgebung
  - Git und GitHub zur Versionsverwaltung
  - MongoDB Atlas zur Datenhaltung
  - Netlify für das Deployment
_[IDE/Erweiterungen, lokale/Cloud-Tools]_  
- **Struktur & Komponenten:** _[Seiten, Routen, State/Stores, wichtige Komponenten]_
**Wichtige Seiten:**
- Dashboard (/)
- Modulübersicht (/modules)
- Modulerstellung (/modules/create)
- Moduldetailseite (/modules/[module_id])
- Terminübersicht (/tasks)
- Terminerstellung (/tasks/create)

**Wichtige Komponenten:**
- ModuleCard.svelte zur Darstellung eines Moduls
- TaskList.svelte zur Anzeige und Filterung von Aufgaben und Terminen
- DynamicList.svelte zur Verwaltung von Lernzielen bei der Modulerstellung
- **Daten & Schnittstellen:** Die Daten werden in einer MongoDB-Datenbank gespeichert.

Es existieren zwei zentrale Datentypen:
**Module:**
- Abkürzung
- Name
- Dozent
- Lernziele
- Favorit

**Tasks:**
- Name
- ModulID (Referenz auf ein Modul)
- Typ (To-Do, Termin oder Prüfungstermin)
- Datum
- Fertig-Status

Die Daten werden über serverseitige Funktionen geladen und aktualisiert. Formularaktionen werden verwendet, um neue Datensätze zu erstellen, bestehende Einträge zu bearbeiten oder zu löschen.
- **Deployment:**
Die Anwendung wurde auf Netlify veröffentlicht und ist unter folgender Adresse erreichbar:
https://taskstudy.netlify.app/ 
- **Besondere Entscheidungen:** 
Bei der Planung wurden zusätzliche Funktionen wie ein Dateiupload für Lernunterlagen oder ein integrierter Fokus-Timer (Pomodoro-Timer) in Betracht gezogen. Nach einer Analyse der Projektziele wurde jedoch bewusst auf diese Funktionen verzichtet.

Der Schwerpunkt der Anwendung liegt auf der Organisation des Studiums und nicht auf der direkten Unterstützung des Lernprozesses. Die App soll Studierenden helfen, Module, Lernziele, To-Dos und Termine übersichtlich zu verwalten und den eigenen Lernfortschritt zu verfolgen. Funktionen wie Dateiverwaltung oder Lern-Timer hätten den Fokus der Anwendung erweitert und die Komplexität erhöht, ohne einen wesentlichen Mehrwert für die Kernfunktion der Organisation zu bieten.

Durch diese Entscheidung konnte die Anwendung übersichtlich gehalten und die vorhandenen Funktionen benutzerfreundlich umgesetzt werden.

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

### 4.1 Filterfunktion
- **Beschreibung & Nutzen:** Die Filterfunktion wurde ergänzt, damit User ihre Aufgaben und Termine gezielt filtern können. Gerade bei einer grösseren Anzahl von Terminen verbessert dies die Übersichtlichkeit und erleichtert das Auffinden relevanter Aufgaben. Dadurch wird die Verwaltung der Aufgaben effizienter und die Anwendung benutzerfreundlicher.  
- **Wo umgesetzt:** Die Erweiterung wurde im Frontend umgesetzt. In der Komponente TaskList.svelte wurden zusätzliche Filter-Buttons hinzugefügt, mit denen die angezeigten Aufgaben gefiltert werden können.
- **Referenz:** _[Wo wird die Erweiterung auch noch beschrieben, z.B. Screenshot oder Beschreibung in einem anderen Kapitel]_  
- **Aus Evaluation abgeleitet?:** Ja. Die Erweiterung wurde aufgrund des Feedbacks einer Testperson während der Evaluation umgesetzt. Es wurde angemerkt, dass bei vielen Aufgaben eine Filtermöglichkeit hilfreich wäre, um die Übersicht zu behalten und schneller die gewünschten To-Dos zu finden.

### 4.2 Module favorisieren  
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

