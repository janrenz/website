# AGENTS.md

Hinweise für KI-Agenten (z. B. Claude Code), die an diesem Repository arbeiten.

## Projekt

Persönlicher Blog von Jan Renz, gebaut mit [Hugo](https://gohugo.io/) und dem Theme
[Congo](https://github.com/jpanther/congo). Deployment erfolgt automatisch über
`.github/workflows/hugo.yml` nach GitHub Pages, sobald auf `master` gepusht wird.
Live-URL: https://janrenz.de

Blogbeiträge liegen unter `content/blog/`, jeweils als deutsche (`*.md`) und
englische (`*.en.md`) Version mit gemeinsamem `translationKey` im Frontmatter.

## Social-Media-Veröffentlichung neuer Blogbeiträge

Wenn ein neuer Blogbeitrag unter `content/blog/` hinzugefügt (oder ein bestehender
Entwurf veröffentlicht) wird, soll der Agent passende Ankündigungstexte für
**LinkedIn** und **Bluesky** entwerfen. Es gibt in diesem Repo keine API-Anbindung
oder Secrets für Social-Media-Plattformen — der Agent postet nicht automatisch,
sondern erstellt die Texte als Vorschlag, den der Nutzer manuell (oder über ein
eigenes Tool) veröffentlicht.

**Bluesky-Account:** `eurosky`

### Inhalt ableiten

Für den Ankündigungstext werden aus dem Frontmatter des Beitrags verwendet:
- `title` – Kernaussage/Aufhänger
- `summary` bzw. `description` – Kurzfassung des Inhalts
- `tags` – als Grundlage für Hashtags
- Permalink: `https://janrenz.de/blog/<slug>/` (deutsche Version) bzw.
  `https://janrenz.de/en/blog/<slug>/` (englische Version)

### LinkedIn

- Ton: sachlich-persönlich, wie in den Beiträgen selbst (kein Marketing-Sprech).
- Länge: ca. 3–6 Zeilen Fließtext, danach Leerzeile, dann der Link zum Beitrag.
- 1–3 thematisch passende Hashtags am Ende (z. B. aus den `tags` des Beitrags),
  keine Hashtag-Wüste.
- Eine kurze Frage oder These zum Einstieg funktioniert gut, um Diskussion
  anzuregen.
- Emojis sparsam bis gar nicht einsetzen.

### Bluesky (Account: eurosky)

- Zeichenlimit beachten (300 Zeichen inkl. Link).
- Kompakter, direkter Ton als bei LinkedIn.
- Link zum Beitrag immer mit anhängen (zählt bei Bluesky als ca. 23 Zeichen,
  unabhängig von der tatsächlichen Länge).
- Höchstens 1–2 Hashtags, nur wenn sie wirklich präzise passen.
- Bei Bedarf als kurzer Thread (2–3 Posts), wenn eine Kernaussage mehr Kontext
  braucht als in einen Post passt.

### Ablauf für den Agenten

1. Neuen bzw. geänderten Blogbeitrag identifizieren (Frontmatter lesen).
2. Je einen Textvorschlag für LinkedIn und für Bluesky erstellen (deutsche
   Sprachversion des Beitrags als Basis, sofern vorhanden).
3. Beide Texte dem Nutzer im Chat zur Freigabe vorlegen, inklusive Link.
4. Nach Freigabe: Texte unverändert übernehmen bzw. auf Wunsch anpassen. Der
   Agent veröffentlicht nicht selbstständig, sondern übergibt die fertigen
   Texte zur manuellen Veröffentlichung.
