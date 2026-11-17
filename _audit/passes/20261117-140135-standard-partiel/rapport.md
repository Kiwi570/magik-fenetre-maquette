# Rapport d’audit

Projet : `magik-fenetre-maquette` · 17/11/2026 15:05:50 · 4 min · 5 page(s) · audit standard (étapes : films, mouvement, ecran)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261117-140135-standard-partiel` · version ?v=1
- Échecs : **0**
- À regarder : **1**
- Non lancé : **0**
- Contrôles passés : films d’ouverture (8), films de transition (8), tient dans l’écran (5), films des épinglages (1), mouvement (8), effets du plan (7), souris immobile (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261117-130047-rapide | rapide | toutes | toutes | 246 | 14 | 1 | échecs |
| 20261117-132252-standard | standard | toutes | toutes | 31 | 17 | 2 | échecs |
| 20261117-134118-standard-partiel | standard | toutes | fichiers, mesures, bords, parcours | 1 | 8 | 0 | échecs |
| 20261117-134849-standard-cible-partiel | standard | /,/contact | fichiers, mesures | 0 | 2 | 0 | complet |
| 20261117-135131-complet-partiel | complet | toutes | mesures, ecran | 3 | 4 | 0 | échecs |
| 20261117-135717-complet-cible-partiel | complet | /,/contact,/reparer-plutot-que-remplacer | fichiers, mesures | 0 | 3 | 0 | complet |
| **20261117-140135-standard-partiel** (celle-ci) | standard | toutes | films, mouvement, ecran | 0 | 1 | 0 | complet |

## Échecs

Aucun.

## À regarder

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 66 ms (différence 22 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

## Non lancé

Tout a été lancé.


## Repères

- Audit standard : étapes lourdes sur /, /contact, /depannages, /reparer-plutot-que-remplacer.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2533 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2578 ms depuis le premier octet
- Ouverture /depannages (1366×768) : 2184 ms depuis le premier octet
- Ouverture /reparer-plutot-que-remplacer (1366×768) : 2257 ms depuis le premier octet
- Ouverture / (390×844) : 2502 ms depuis le premier octet
- Ouverture /contact (390×844) : 2542 ms depuis le premier octet
- Ouverture /depannages (390×844) : 2158 ms depuis le premier octet
- Ouverture /reparer-plutot-que-remplacer (390×844) : 2236 ms depuis le premier octet
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /depannages : aucune section épinglée ou plein écran.
- Tient dans l'écran /reparer-plutot-que-remplacer : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
