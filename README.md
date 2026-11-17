# Magik Fenêtre · maquette

Maquette de présentation du futur site de Magik Fenêtre (réparation de menuiseries, Hauts-de-France), direction « La coulisse ».
Adresse : https://magik-fenetre-maquette.vercel.app

## Pages
- Accueil `/`
- Dépannages `/depannages`
- Réparer plutôt que remplacer `/reparer-plutot-que-remplacer`
- Contact `/contact`
- Page introuvable `/404`

Pages du site actuel non reprises (liens vides sur magik-fenetre.fr, aucun contenu à reprendre) : Blog, À propos, FAQ (reprise en questions fréquentes sur Dépannages), Auteurs, Équipe, Histoire, Emplois. Disponibles en v2 si le client fournit leur contenu.

## À fournir par le client (à compléter)
- Mentions légales : raison sociale, adresse, SIRET, directeur de la publication.
- Politique de confidentialité (le formulaire de demande y renvoie).
- Hébergeur : Vercel Inc., adresse à vérifier sur vercel.com au moment de la mise en ligne.
- Assurances et qualifications éventuelles (aucune n'est citée sur le site actuel, aucune n'est affichée).
- Crédits : les images marquées « Illustration générée » ont été créées avec Grok ; la mention doit rester sur le site définitif.

Retiré ou remplacé faute d'information :
- Tarifs : aucun prix sur le site actuel. Remplacé par « Cela dépend de la pièce à changer et de la menuiserie » (questions fréquentes).
- Horaires, délais d'intervention, adresse, e-mail : absents du site actuel, non affichés. Le contact passe par le 06 27 58 58 06 et le formulaire (simulé).
- Avis clients, nombre d'interventions, ancienneté : absents, non affichés.
- Photos de réalisations : une seule vraie photo (baie coulissante) ; une page Réalisations est possible quand le client en aura d'autres.
- La capture de crémone du site actuel (site marchand allemand) n'est pas reprise : la crémone est dessinée.

À vérifier avec le client :
- La mascotte porte deux badges « PRO VOLET » (autre marque) : la garder telle quelle, la faire retoucher, ou la remplacer.

## À la mise en ligne définitive
- Retirer `noindex` (balise robots dans `source/gabarits/commun.mjs`, en-tête X-Robots-Tag dans `vercel.json`).
- Brancher le formulaire de demande (il est simulé : rien n'est envoyé) ou le remplacer par un lien e-mail.
- Remplacer « Mentions légales : à compléter » et « Politique de confidentialité : à compléter » du pied de page par les vraies pages.
- Garder la mention « Illustration générée » sur les images créées par IA.
