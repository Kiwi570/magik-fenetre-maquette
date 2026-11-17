# Rapport d’audit

Projet : `magik-fenetre-maquette` · 17/11/2026 14:47:05 · 6 min · 5 page(s) · audit standard (étapes : fichiers, mesures, bords, parcours)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261117-134118-standard-partiel` · version ?v=1
- Échecs : **1**
- À regarder : **8**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (55), balayage (4), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (5), liens et boutons (5), liens profonds (12), liens vers la page en cours (4), changements de hauteur (4), parcours du projet (1)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261117-130047-rapide | rapide | toutes | toutes | 246 | 14 | 1 | échecs |
| 20261117-132252-standard | standard | toutes | toutes | 31 | 17 | 2 | échecs |
| **20261117-134118-standard-partiel** (celle-ci) | standard | toutes | fichiers, mesures, bords, parcours | 1 | 8 | 0 | échecs |

## Échecs

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/contact` — section#debut > div.conteneur > p.contact-actions:nth-of-type(4) > a.bouton:nth-of-type(1) « Appeler » _(320×568 normal, 320×568 sansJs)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (5)

- **section sans visuel** — `/contact` — section#debut « Contact · Hauts-de-France Une panne ? Appelez. 06  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#zone « Zone d'intervention Toute la région Hauts-de-Franc » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/depannages` — section#autres « Et toutes les autres menuiseries Les trois pannes  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/depannages` — section#faq « Questions fréquentes Avant d'appeler Ma baie vitré » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **section sans visuel** — `/reparer-plutot-que-remplacer` — section#bilan « Concrètement Ce qu'on garde, ce qu'on change. On g » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### texte de contenu sous 13 px (ordinateur) (1)

- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.fpe__carton:nth-of-type(2) > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 5 · MENUISERIE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (8.5 %), voir comparaisons/rechargement-*.png _(1366×768)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 48 min de travail pour 75 min de budget, 18 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 13 min pour 5 prévues.
- Audit standard : étapes lourdes sur /, /contact, /depannages, /reparer-plutot-que-remplacer.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Bords de l’écran : 223 images d’intro, 10 de voile et 95 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/contact --seulement=fichiers,mesures
```
