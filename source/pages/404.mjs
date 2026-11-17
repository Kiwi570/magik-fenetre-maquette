/* Page 404 : « Cette page est coincée », avec la mascotte. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="introuvable" id="debut">
  <div class="conteneur introuvable-grille">
    <div>
      <p class="introuvable-code" aria-hidden="true">404</p>
      <h1 class="introuvable-titre"><span class="hero-ligne-masque"><span class="hero-ligne">${c.t('introuvable.titre1')}</span></span> <span class="hero-ligne-masque"><span class="hero-ligne hero-ligne--accent">${c.t('introuvable.titre2')}</span></span></h1>
      <p data-anime="gsap" class="introuvable-texte">${c.t('introuvable.texte')}</p>
      <p data-anime="gsap" data-info-cle>${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}</p>
    </div>
    <figure class="introuvable-mascotte" data-iris-centre data-effet="mascotte">
      <img src="/assets/images/mascotte-480.webp" srcset="/assets/images/mascotte-240.webp 240w, /assets/images/mascotte-480.webp 480w" sizes="(max-width: 760px) 60vw, 380px" width="480" height="549" alt="${c.s('introuvable.alt')}" fetchpriority="high" loading="eager" decoding="async">
    </figure>
  </div>
</section>
`;
