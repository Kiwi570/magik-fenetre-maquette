# Rapport d’audit

Projet : `magik-fenetre-maquette` · 17/11/2026 14:38:29 · 16 min · 5 page(s) · audit standard

## Résumé

- Statut : **31 échec(s)**
- Passe : `20261117-132252-standard` · version ?v=1
- Échecs : **31**
- À regarder : **17**
- Non lancé : **2**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (55), balayage (4), films d’ouverture (8), films de transition (8), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (5), liens et boutons (5), liens profonds (12), liens vers la page en cours (4), changements de hauteur (4), tient dans l’écran (5), films des épinglages (1), fluidité (8), défilement selon l’appareil (5), mouvement (8), effets du plan (7), souris immobile (5), vitesse (4), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✗ absent | versObjet absent |
| 3. La transition reprend le motif | ✓ présent | voile en coulisse |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261117-130047-rapide | rapide | toutes | toutes | 246 | 14 | 1 | échecs |
| **20261117-132252-standard** (celle-ci) | standard | toutes | toutes | 31 | 17 | 2 | échecs |

## Échecs

### textes qui se chevauchent (16)

- **textes qui se chevauchent** — `/404` — section#debut > div.conteneur.introuvable-grille > div > p.introuvable-code:nth-of-type(1) « 404 » — avec div > h1.introuvable-titre > span.hero-ligne-masque:nth-of-type(1) > span.hero-ligne « Cette page » _(1366×768 normal, 1366×768 sansJs, 1920×1080 normal, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.conteneur > h1.contact-titre > span.contact-ligne.contact-ligne--accent:nth-of-type(2) « Appelez. » — avec p.contact-numero:nth-of-type(2) > a > span.contact-paire:nth-of-type(1) > span « 06 » _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.conteneur > h1.contact-titre > span.contact-ligne.contact-ligne--accent:nth-of-type(2) « Appelez. » — avec p.contact-numero:nth-of-type(2) > a > span.contact-paire:nth-of-type(2) > span « 27 » _(390×844 normal, 320×568 normal, 390×844 sansJs, 1920×1080 normal, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.conteneur > h1.contact-titre > span.contact-ligne.contact-ligne--accent:nth-of-type(2) « Appelez. » — avec p.contact-numero:nth-of-type(2) > a > span.contact-paire:nth-of-type(3) > span « 58 » _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.conteneur > h1.contact-titre > span.contact-ligne:nth-of-type(1) « Une panne ? » — avec p.contact-numero:nth-of-type(2) > a > span.contact-paire:nth-of-type(1) > span « 06 » _(844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.conteneur > h1.contact-titre > span.contact-ligne:nth-of-type(1) « Une panne ? » — avec p.contact-numero:nth-of-type(2) > a > span.contact-paire:nth-of-type(2) > span « 27 » _(844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.conteneur > h1.contact-titre > span.contact-ligne:nth-of-type(1) « Une panne ? » — avec p.contact-numero:nth-of-type(2) > a > span.contact-paire:nth-of-type(3) > span « 58 » _(844×390 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.conteneur > h1.contact-titre > span.contact-ligne.contact-ligne--accent:nth-of-type(2) « Appelez. » — avec p.contact-numero:nth-of-type(2) > a > span.contact-paire:nth-of-type(4) > span « 58 » _(844×390 normal, 768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/contact` — section#debut > div.conteneur > h1.contact-titre > span.contact-ligne.contact-ligne--accent:nth-of-type(2) « Appelez. » — avec p.contact-numero:nth-of-type(2) > a > span.contact-paire:nth-of-type(5) > span « 06 » _(844×390 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/contact` — p.contact-numero:nth-of-type(2) > a > span.contact-paire:nth-of-type(1) > span « 06 » — avec section#debut > div.conteneur > p.contact-texte:nth-of-type(3) « Le plus simple, c'est un appel. Vous pouvez aussi  » _(768×1024 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/contact` — p.contact-numero:nth-of-type(2) > a > span.contact-paire:nth-of-type(2) > span « 27 » — avec section#debut > div.conteneur > p.contact-texte:nth-of-type(3) « Le plus simple, c'est un appel. Vous pouvez aussi  » _(768×1024 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/contact` — p.contact-numero:nth-of-type(2) > a > span.contact-paire:nth-of-type(3) > span « 58 » — avec section#debut > div.conteneur > p.contact-texte:nth-of-type(3) « Le plus simple, c'est un appel. Vous pouvez aussi  » _(768×1024 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/contact` — p.contact-numero:nth-of-type(2) > a > span.contact-paire:nth-of-type(4) > span « 58 » — avec section#debut > div.conteneur > p.contact-texte:nth-of-type(3) « Le plus simple, c'est un appel. Vous pouvez aussi  » _(768×1024 normal, 1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/contact` — p.contact-numero:nth-of-type(2) > a > span.contact-paire:nth-of-type(5) > span « 06 » — avec section#debut > div.conteneur > p.contact-texte:nth-of-type(3) « Le plus simple, c'est un appel. Vous pouvez aussi  » _(768×1024 normal, 1920×1080 normal)_
- **textes qui se chevauchent** — `/depannages` — section#debut > div.conteneur:nth-of-type(1) > p.surtitre « Spécialiste dans la réparation de menuiseries » — avec section#debut > div.conteneur:nth-of-type(1) > h1.titre-geant « Dépannages » _(768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/depannages` — section#debut > div.conteneur:nth-of-type(1) > h1.titre-geant « Dépannages » — avec section#debut > div.conteneur:nth-of-type(1) > div.tete-geante-bas > p.tete-geante-texte:nth-of-type(1) « Fenêtres, portes-fenêtres, baies coulissantes, en  » _(768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### élément recouvert (1)

- **élément recouvert** — `/contact` — section#debut > div.conteneur > h1.contact-titre « Une panne ? Appelez. » — par p.contact-numero:nth-of-type(2) > a > span.contact-paire:nth-of-type(1) > span « 06 » _(1920×1080 normal)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/reparer-plutot-que-remplacer` — section#debut > div.reparer-texte:nth-of-type(2) > p.reparer-actions:nth-of-type(3) « Décrire ma panne 06 27 58 58 06 » _(320×568 normal, 320×568 sansJs)_

### débordement horizontal (1)

- **débordement horizontal** — `/contact` — page large de 911 px — largeurs : 880, 920 px _(balayage 320–1920 normal)_

### bords de l’écran : bande d’une autre couleur le long du bord gauche pendant l’intro (5)

- **bords de l’écran : bande d’une autre couleur le long du bord gauche pendant l’intro** — `/` — bande en rgb(220, 227, 235) à côté de l’intro en rgb(151, 163, 179), sur 16 image(s) sur 133 (films/bords-intro-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord gauche pendant l’intro** — `/contact` — bande en rgb(220, 227, 235) à côté de l’intro en rgb(150, 163, 179), sur 14 image(s) sur 142 (films/bords-intro-contact-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord gauche pendant l’intro** — `/depannages` — bande en rgb(220, 227, 235) à côté de l’intro en rgb(151, 163, 179), sur 12 image(s) sur 117 (films/bords-intro-depannages-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord gauche pendant l’intro** — `/reparer-plutot-que-remplacer` — bande en rgb(220, 227, 235) à côté de l’intro en rgb(150, 163, 179), sur 14 image(s) sur 124 (films/bords-intro-reparer-plutot-que-remplacer-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord gauche pendant l’intro** — `/` — bande en rgb(219, 228, 234) à côté de l’intro en rgb(72, 88, 116), sur 11 image(s) sur 95 (films/bords-intro-1920.png) _(1920×1080 barre de défilement classique (15 px))_

### bords de l’écran : bande d’une autre couleur le long du bord gauche pendant le voile (6)

- **bords de l’écran : bande d’une autre couleur le long du bord gauche pendant le voile** — `/depannages` — bande en rgb(90, 103, 126) à côté du voile en rgb(245, 242, 235), sur 3 image(s) sur 71 (films/bords-voile-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord gauche pendant le voile** — `/depannages` — bande en rgb(90, 103, 126) à côté du voile en rgb(245, 242, 235), sur 4 image(s) sur 74 (films/bords-voile-contact-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord gauche pendant le voile** — `/reparer-plutot-que-remplacer` — bande en rgb(90, 103, 126) à côté du voile en rgb(245, 242, 235), sur 4 image(s) sur 76 (films/bords-voile-depannages-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord gauche pendant le voile** — `/depannages` — bande en rgb(219, 228, 235) à côté du voile en rgb(193, 195, 198), sur 3 image(s) sur 73 (films/bords-voile-reparer-plutot-que-remplacer-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord gauche pendant le voile** — `/` — bande en rgb(221, 226, 238) à côté du voile en rgb(72, 86, 111), sur 2 image(s) sur 58 (films/bords-voile-1920.png) _(1920×1080 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord gauche pendant le voile** — `/depannages` — bande en rgb(87, 104, 127) à côté du voile en rgb(245, 242, 235), sur 2 image(s) sur 58 (films/bords-voile-1920.png) _(1920×1080 barre de défilement classique (15 px))_

### bords de l’écran : bande d’une autre couleur le long du bord droit pendant le voile (1)

- **bords de l’écran : bande d’une autre couleur le long du bord droit pendant le voile** — `/reparer-plutot-que-remplacer` — bande d’environ 14 px en rgb(219, 228, 235) à côté du voile en rgb(55, 72, 102), sur 2 image(s) sur 73 (films/bords-voile-reparer-plutot-que-remplacer-1366.png) _(1366×768 barre de défilement classique (15 px))_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : l’intro ne finit pas sur la page (point 2) (1)

- **grille : l’intro ne finit pas sur la page (point 2)** — versObjet(tl, …) absent de assets/js : l’intro doit finir sur l’objet d’ouverture (socle : import { versObjet } from './socle/index.js')

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/contact` — 358 × 47 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### section sans visuel (5)

- **section sans visuel** — `/contact` — section#debut « Contact · Hauts-de-France Une panne ? Appelez. 06  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#zone « Zone d'intervention Toute la région Hauts-de-Franc » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/depannages` — section#autres « Et toutes les autres menuiseries Les trois pannes  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/depannages` — section#faq « Questions fréquentes Avant d'appeler Ma baie vitré » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **section sans visuel** — `/reparer-plutot-que-remplacer` — section#bilan « Concrètement Ce qu'on garde, ce qu'on change. On g » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### texte de contenu sous 13 px (ordinateur) (1)

- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.fpe__carton:nth-of-type(2) > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 5 · MENUISERIE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 89 ms (différence 22 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### bords de l’écran : bande d’une autre couleur le long du bord gauche pendant le voile (1)

- **bords de l’écran : bande d’une autre couleur le long du bord gauche pendant le voile** — `/reparer-plutot-que-remplacer` — bande en rgb(219, 228, 235) à côté du voile en rgb(40, 58, 89), sur 1 image(s) sur 73 (films/bords-voile-reparer-plutot-que-remplacer-1366.png) _(1366×768 barre de défilement classique (15 px))_

### bords de l’écran : bande d’une autre couleur le long du bord droit pendant le voile (1)

- **bords de l’écran : bande d’une autre couleur le long du bord droit pendant le voile** — `/` — bande d’environ 29 px en rgb(219, 228, 235) à côté du voile en rgb(57, 72, 99), sur 1 image(s) sur 58 (films/bords-voile-1920.png) _(1920×1080 barre de défilement classique (15 px))_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (8.6 %), voir comparaisons/rechargement-*.png _(1366×768)_

## Non lancé

- **parcours:projet** : page.fill: Timeout 30000ms exceeded.
- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 48 min de travail pour 75 min de budget, 18 min d’attente de l’utilisateur.
- Journal : « aperçu de l'accueil en films (attente de la réponse notée à part) » 13 min pour 5 prévues.
- Audit standard : étapes lourdes sur /, /contact, /depannages, /reparer-plutot-que-remplacer.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2523 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2543 ms depuis le premier octet
- Ouverture /depannages (1366×768) : 2173 ms depuis le premier octet
- Ouverture /reparer-plutot-que-remplacer (1366×768) : 2244 ms depuis le premier octet
- Ouverture / (390×844) : 2525 ms depuis le premier octet
- Ouverture /contact (390×844) : 2573 ms depuis le premier octet
- Ouverture /depannages (390×844) : 2192 ms depuis le premier octet
- film de l'ouverture /depannages 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /reparer-plutot-que-remplacer (390×844) : 2264 ms depuis le premier octet
- film de l'ouverture /reparer-plutot-que-remplacer 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 611 images d’intro, 352 de voile et 96 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /depannages : aucune section épinglée ou plein écran.
- Tient dans l'écran /reparer-plutot-que-remplacer : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 386, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 116, tâche la plus longue 0 ms
- Fluidité /depannages 1366×768 (molette) : 0 % d'images lentes sur 240, tâche la plus longue 0 ms
- Fluidité /reparer-plutot-que-remplacer 1366×768 (molette) : 0 % d'images lentes sur 187, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /depannages 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Fluidité /reparer-plutot-que-remplacer 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Vitesse / : 0.45 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.33 s de calcul au chargement (téléphone ralenti).
- Vitesse /depannages : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /reparer-plutot-que-remplacer : 0.40 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,bords,parcours
```
