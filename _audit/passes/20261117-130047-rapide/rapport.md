# Rapport d’audit

Projet : `magik-fenetre-maquette` · 17/11/2026 14:06:05 · 5 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison

## Résumé

- Statut : **246 échec(s)**
- Passe : `20261117-130047-rapide` · version ?v=1
- Échecs : **246**
- À regarder : **14**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (2), mesures (6), films d’ouverture (2), films de transition (2), bords de l’écran (1), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (12), liens vers la page en cours (1), changements de hauteur (1), tient dans l’écran (2), films des épinglages (1), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (7), souris immobile (2), vitesse (1), captures (1)

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

## Échecs

### image de partage (4)

- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `depannages.html` — fichier introuvable : /assets/partage/depannages-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `reparer-plutot-que-remplacer.html` — fichier introuvable : /assets/partage/reparer-fr.jpg

### langues (209)

- **langues** — texte manquant en en : commun.slogan
- **langues** — texte manquant en en : commun.zone
- **langues** — texte manquant en en : commun.mentions
- **langues** — texte manquant en en : commun.confidentialite
- **langues** — texte manquant en en : commun.schema
- **langues** — texte manquant en en : commun.appel.surtitre
- **langues** — texte manquant en en : commun.appel.titre1
- **langues** — texte manquant en en : commun.appel.titre2
- **langues** — texte manquant en en : commun.appel.texte
- **langues** — texte manquant en en : commun.appel.decrire
- **langues** — texte manquant en en : commun.appel.mascotte
- **langues** — texte manquant en en : pages.depannages.titre
- **langues** — texte manquant en en : pages.depannages.description
- **langues** — texte manquant en en : pages.depannages.nav
- **langues** — texte manquant en en : pages.depannages.partageAlt
- **langues** — texte manquant en en : pages.depannages.accroche
- **langues** — texte manquant en en : pages.reparer.titre
- **langues** — texte manquant en en : pages.reparer.description
- **langues** — texte manquant en en : pages.reparer.nav
- **langues** — texte manquant en en : pages.reparer.partageAlt
- **langues** — texte manquant en en : pages.reparer.accroche
- **langues** — texte manquant en en : pages.contact.titre
- **langues** — texte manquant en en : pages.contact.description
- **langues** — texte manquant en en : pages.contact.nav
- **langues** — texte manquant en en : pages.contact.partageAlt
- **langues** — texte manquant en en : pages.contact.accroche
- **langues** — texte manquant en en : accueil.hero.surtitre
- **langues** — texte manquant en en : accueil.hero.appeler
- **langues** — texte manquant en en : accueil.hero.decrire
- **langues** — texte manquant en en : accueil.pannes.surtitre
- **langues** — texte manquant en en : accueil.pannes.titre
- **langues** — texte manquant en en : accueil.pannes.intro
- **langues** — texte manquant en en : accueil.pannes.voir
- **langues** — texte manquant en en : accueil.pannes.autresTitre
- **langues** — texte manquant en en : accueil.pannes.autresTexte
- **langues** — texte manquant en en : accueil.pannes.autresLien
- **langues** — texte manquant en en : accueil.eclate.surtitre
- **langues** — texte manquant en en : accueil.eclate.titre
- **langues** — texte manquant en en : accueil.eclate.intro
- **langues** — texte manquant en en : accueil.eclate.listeTitre
- … et 169 autres (rapport.json)

### zone tactile sous 44 px (1)

- **zone tactile sous 44 px** — `/` — div.conteneur.appel-grille > div.appel-texte > p.appel-numero:nth-of-type(2) > a « 06 27 58 58 06 » — 283 × 42 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/` — div.conteneur.diagnostic-grille > div.diagnostic-schema:nth-of-type(2) > p.diagnostic-legende:nth-of-type(1) > span:nth-of-type(2) « Baie coulissante » — avec section#diagnostic > div.conteneur.diagnostic-grille > div.diagnostic-schema:nth-of-type(2) > p.diagnostic-mention:nth-of-type(2) « Schéma illustratif » _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/` — section#facade > div.facade-cadre > p.facade-mot.facade-mot--g:nth-of-type(1) « On garde » — avec section#facade > div.facade-cadre > p.facade-mot.facade-mot--d:nth-of-type(2) « la fenêtre. » _(320×568 sansJs)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-info:nth-of-type(4) « PVC et aluminium · toute la région » _(320×568 sansJs)_

### bords de l’écran : bande d’une autre couleur le long du bord gauche pendant l’intro (1)

- **bords de l’écran : bande d’une autre couleur le long du bord gauche pendant l’intro** — `/` — bande en rgb(22, 41, 74) à côté de l’intro en rgb(216, 225, 233), sur 52 image(s) sur 130 (films/bords-intro-1366.png) _(1366×768 barre de défilement classique (15 px))_

### bords de l’écran : bande d’une autre couleur le long du bord gauche pendant le voile (2)

- **bords de l’écran : bande d’une autre couleur le long du bord gauche pendant le voile** — `/` — bande en rgb(246, 241, 237) à côté du voile en rgb(143, 155, 172), sur 12 image(s) sur 73 (films/bords-voile-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord gauche pendant le voile** — `/depannages` — bande en rgb(22, 41, 74) à côté du voile en rgb(223, 231, 238), sur 25 image(s) sur 73 (films/bords-voile-1366.png) _(1366×768 barre de défilement classique (15 px))_

### bords de l’écran : bande d’une autre couleur le long du bord droit pendant le voile (2)

- **bords de l’écran : bande d’une autre couleur le long du bord droit pendant le voile** — `/` — bande d’environ 15 px en rgb(219, 228, 235) à côté du voile en rgb(125, 140, 159), sur 6 image(s) sur 73 (films/bords-voile-1366.png) _(1366×768 barre de défilement classique (15 px))_
- **bords de l’écran : bande d’une autre couleur le long du bord droit pendant le voile** — `/depannages` — bande d’environ 15 px en rgb(219, 228, 235) à côté du voile en rgb(22, 41, 75), sur 4 image(s) sur 73 (films/bords-voile-1366.png) _(1366×768 barre de défilement classique (15 px))_

### ne tient pas dans l’écran (24)

- **ne tient pas dans l’écran** — `/` — div.vec__cadre.socle-cadre > div.vec__pieces:nth-of-type(3) > ol.vec__liste > li:nth-of-type(4) « 04 Vitrage il reste » — coupé en bas de 17 px (à 4 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.vec__pieces:nth-of-type(3) > ol.vec__liste > li:nth-of-type(4) > button.vec__legende « 04 Vitrage il reste » — coupé en bas de 17 px (à 4 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.vec__cadre.socle-cadre > div.vec__pieces:nth-of-type(3) > ol.vec__liste > li:nth-of-type(5) « 05 Dormant il reste » — coupé en bas de 74 px (à 4 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.vec__pieces:nth-of-type(3) > ol.vec__liste > li:nth-of-type(5) > button.vec__legende « 05 Dormant il reste » — coupé en bas de 74 px (à 4 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — section#reparer > div.vec__cadre.socle-cadre > div.vec__pieces:nth-of-type(3) > p.eclate-lien:nth-of-type(2) « Pourquoi réparer » — coupé en bas de 136 px (à 4 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.vec__cadre.socle-cadre > div.vec__pieces:nth-of-type(3) > p.eclate-lien:nth-of-type(2) > a.lien-fleche « Pourquoi réparer » — coupé en bas de 136 px (à 4 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.vec__cadre.socle-cadre > div.vec__pieces:nth-of-type(3) > ol.vec__liste > li:nth-of-type(4) « 04 Vitrage il reste » — coupé en bas de 17 px (à 50 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.vec__pieces:nth-of-type(3) > ol.vec__liste > li:nth-of-type(4) > button.vec__legende.est-vue « 04 Vitrage il reste » — coupé en bas de 17 px (à 50 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.vec__cadre.socle-cadre > div.vec__pieces:nth-of-type(3) > ol.vec__liste > li:nth-of-type(5) « 05 Dormant il reste » — coupé en bas de 74 px (à 50 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.vec__pieces:nth-of-type(3) > ol.vec__liste > li:nth-of-type(5) > button.vec__legende.est-vue « 05 Dormant il reste » — coupé en bas de 74 px (à 50 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — section#reparer > div.vec__cadre.socle-cadre > div.vec__pieces:nth-of-type(3) > p.eclate-lien:nth-of-type(2) « Pourquoi réparer » — coupé en bas de 136 px (à 50 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.vec__cadre.socle-cadre > div.vec__pieces:nth-of-type(3) > p.eclate-lien:nth-of-type(2) > a.lien-fleche « Pourquoi réparer » — coupé en bas de 136 px (à 50 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.vec__cadre.socle-cadre > div.vec__pieces:nth-of-type(3) > ol.vec__liste > li:nth-of-type(4) « 04 Vitrage il reste » — coupé en bas de 17 px (à 96 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.vec__pieces:nth-of-type(3) > ol.vec__liste > li:nth-of-type(4) > button.vec__legende « 04 Vitrage il reste » — coupé en bas de 17 px (à 96 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.vec__cadre.socle-cadre > div.vec__pieces:nth-of-type(3) > ol.vec__liste > li:nth-of-type(5) « 05 Dormant il reste » — coupé en bas de 74 px (à 96 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.vec__pieces:nth-of-type(3) > ol.vec__liste > li:nth-of-type(5) > button.vec__legende « 05 Dormant il reste » — coupé en bas de 74 px (à 96 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — section#reparer > div.vec__cadre.socle-cadre > div.vec__pieces:nth-of-type(3) > p.eclate-lien:nth-of-type(2) « Pourquoi réparer » — coupé en bas de 136 px (à 96 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.vec__cadre.socle-cadre > div.vec__pieces:nth-of-type(3) > p.eclate-lien:nth-of-type(2) > a.lien-fleche « Pourquoi réparer » — coupé en bas de 136 px (à 96 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — section#reparer > div.vec__cadre.socle-cadre > div.vec__pieces:nth-of-type(3) > p.eclate-lien:nth-of-type(2) « Pourquoi réparer » — coupé en bas de 19 px (à 4 % de la scène) _(1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.vec__cadre.socle-cadre > div.vec__pieces:nth-of-type(3) > p.eclate-lien:nth-of-type(2) > a.lien-fleche « Pourquoi réparer » — coupé en bas de 19 px (à 4 % de la scène) _(1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — section#reparer > div.vec__cadre.socle-cadre > div.vec__pieces:nth-of-type(3) > p.eclate-lien:nth-of-type(2) « Pourquoi réparer » — coupé en bas de 19 px (à 50 % de la scène) _(1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.vec__cadre.socle-cadre > div.vec__pieces:nth-of-type(3) > p.eclate-lien:nth-of-type(2) > a.lien-fleche « Pourquoi réparer » — coupé en bas de 19 px (à 50 % de la scène) _(1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — section#reparer > div.vec__cadre.socle-cadre > div.vec__pieces:nth-of-type(3) > p.eclate-lien:nth-of-type(2) « Pourquoi réparer » — coupé en bas de 19 px (à 96 % de la scène) _(1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.vec__cadre.socle-cadre > div.vec__pieces:nth-of-type(3) > p.eclate-lien:nth-of-type(2) > a.lien-fleche « Pourquoi réparer » — coupé en bas de 19 px (à 96 % de la scène) _(1366×768 épinglé)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

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

### texte de contenu sous 13 px (ordinateur) (6)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.hero-baie:nth-of-type(2) > figure.media.hero-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.pannes-grille.fx-fini > li.panne-carte:nth-of-type(1) > figure.media.panne-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.pannes-grille.fx-fini > li.panne-carte:nth-of-type(2) > figure.media.panne-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ul.pannes-grille.fx-fini > li.panne-carte:nth-of-type(3) > figure.media.panne-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.vec__cadre.socle-cadre > div.vec__scene:nth-of-type(2) > div.vec__plan > p.vec__mention « Schéma illustratif » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#facade > div.facade-cadre > figure.media.facade-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/` — écran différent à la même position après rechargement (7.2 %), voir comparaisons/rechargement-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 2 étape(s) notée(s), 10 min de travail pour 30 min de budget, 1 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2473 ms depuis le premier octet
- Ouverture / (390×844) : 2518 ms depuis le premier octet
- Bords de l’écran : 130 images d’intro, 73 de voile et 18 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 431, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Vitesse / : 0.45 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,bords,ecran
```
