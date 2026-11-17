# Rapport d’audit

Projet : `magik-fenetre-maquette` · 17/11/2026 14:56:48 · 5 min · 5 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **3 échec(s)**
- Passe : `20261117-135131-complet-partiel` · version ?v=1
- Échecs : **3**
- À regarder : **4**
- Non lancé : **0**
- Contrôles passés : mesures (195), balayage (4), tient dans l’écran (8), films des épinglages (1)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261117-130047-rapide | rapide | toutes | toutes | 246 | 14 | 1 | échecs |
| 20261117-132252-standard | standard | toutes | toutes | 31 | 17 | 2 | échecs |
| 20261117-134118-standard-partiel | standard | toutes | fichiers, mesures, bords, parcours | 1 | 8 | 0 | échecs |
| 20261117-134849-standard-cible-partiel | standard | /,/contact | fichiers, mesures | 0 | 2 | 0 | complet |
| **20261117-135131-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 3 | 4 | 0 | échecs |

## Échecs

### texte coupé (1)

- **texte coupé** — `/contact` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(4) > span.fpe__nom:nth-of-type(2) « Coordonnées » — le contenu dépasse de son cadre _(1280×720 normal, 1280×720 sansWebgl)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/reparer-plutot-que-remplacer` — section#debut > div.reparer-texte:nth-of-type(2) > p.reparer-actions:nth-of-type(3) > a.bouton:nth-of-type(1) « Décrire ma panne » _(1000×560 sansJs)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/reparer-plutot-que-remplacer` — section#debut > div.reparer-texte:nth-of-type(2) > p.reparer-actions:nth-of-type(3) « Décrire ma panne 06 27 58 58 06 » _(1000×560 sansJs)_

## À regarder

### section sans visuel (4)

- **section sans visuel** — `/contact` — section#debut « Contact · Hauts-de-France Une panne ? Appelez. 06  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/depannages` — section#autres « Et toutes les autres menuiseries Les trois pannes  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/depannages` — section#faq « Questions fréquentes Avant d'appeler Ma baie vitré » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 320×568 sansJs, 375×667 sansJs, 390×844 sansJs, +3)_
- **section sans visuel** — `/reparer-plutot-que-remplacer` — section#bilan « Concrètement Ce qu'on garde, ce qu'on change. On g » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /depannages : aucune section épinglée ou plein écran.
- Tient dans l'écran /reparer-plutot-que-remplacer : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/contact,/reparer-plutot-que-remplacer --seulement=fichiers,mesures
```
