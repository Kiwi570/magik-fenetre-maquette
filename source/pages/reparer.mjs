/* Réparer plutôt que remplacer : photo à gauche, titre à droite où « Remplacer » se fait rayer et « Réparer » s'écrit ;
   deux raisons ; ce qu'on garde et ce qu'on change ; bandeau jardin ; appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { appel } from '../gabarits/commun.mjs';
import { piece } from '../gabarits/dessins.mjs';

export const page = { cle: 'reparer', fichier: 'reparer-plutot-que-remplacer', imagePartage: 'grok/reparer-ouverture-1280.webp' };

const MUR = `<svg class="raison-mur" viewBox="0 0 240 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true" data-fx="trace">
  <g class="mur-briques">${Array.from({ length: 8 }, (_, r) => Array.from({ length: 7 }, (_, k) => `<rect x="${(k * 36 - (r % 2) * 18).toFixed(0)}" y="${r * 20}" width="34" height="18" rx="1.5"/>`).join('')).join('')}</g>
  <rect x="78" y="22" width="84" height="116" rx="3" class="mur-trou"/>
  <rect x="84" y="28" width="72" height="104" rx="2" class="mur-fenetre" data-fx-trait/>
  <line x1="120" y1="28" x2="120" y2="132" class="mur-fenetre" data-fx-trait/>
  <rect x="113" y="74" width="4" height="14" rx="2" class="mur-poignee"/>
</svg>`;

export default (c) => html`
<section class="reparer-tete" id="debut">
  <div class="reparer-photo" data-iris-centre>
    ${c.media({ nom: 'grok/reparer-ouverture', alt: c.s('reparer.alt'), cadrage: '50% 50%', priorite: true, classe: 'reparer-media', sizes: '(max-width: 760px) 92vw, 40vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
  </div>
  <div class="reparer-texte">
    <p class="surtitre" data-anime="gsap">${c.t('reparer.surtitre')}</p>
    <h1 class="reparer-titre" data-module="rature-au-stylo"><span class="rst rst--cote"><del aria-hidden="true">${c.t('reparer.barre')}</del> <ins>${c.t('reparer.ecrit')}</ins></span> <span class="reparer-suite">${c.t('reparer.suite')}</span></h1>
    <p class="reparer-intro" data-anime="gsap">${c.t('reparer.texte')}</p>
    <p class="reparer-actions" data-anime="gsap" data-info-cle>
      ${c.lien('contact', { ancre: 'demande', classe: 'bouton', texte: c.t('commun.actionEntete'), attrs: 'data-action-principale' })}
      <a class="lien-tel" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
    </p>
  </div>
</section>

<section class="raisons" id="raisons">
  <div class="conteneur">
    <div class="section-tete">
      <p class="surtitre" data-anime>${c.t('reparer.raisons.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('reparer.raisons.titre')}</h2>
    </div>
    <div class="raisons-grille" data-anime="cascade">
      <article class="raison">
        <div class="raison-visuel raison-visuel--pieces" data-effet="pieces" data-piece="trio" aria-hidden="true">${brut(piece('roulettes', 96))}${brut(piece('cremone', 96))}${brut(piece('poignee', 96))}</div>
        <h3>${c.t('reparer.raisons.eco.titre')}</h3>
        <p>${c.t('reparer.raisons.eco.texte')}</p>
      </article>
      <article class="raison">
        <div class="raison-visuel" data-visuel>${brut(MUR)}</div>
        <h3>${c.t('reparer.raisons.ecolo.titre')}</h3>
        <p>${c.t('reparer.raisons.ecolo.texte')}</p>
      </article>
    </div>
  </div>
</section>

<section class="bilan" id="bilan">
  <div class="conteneur">
    <div class="section-tete">
      <p class="surtitre" data-anime>${c.t('reparer.bilan.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('reparer.bilan.titre')}</h2>
    </div>
    <div class="bilan-grille">
      <div class="bilan-col bilan-col--garde">
        <h3 data-anime>${c.t('reparer.bilan.garde')}</h3>
        <ul data-anime="cascade">${c.donnees.listes.garde.map((x) => html`<li>${x}</li>`)}</ul>
      </div>
      <div class="bilan-col bilan-col--change">
        <h3 data-anime>${c.t('reparer.bilan.change')}</h3>
        <ul data-anime="cascade">${c.donnees.listes.change.map((x) => html`<li>${x}</li>`)}</ul>
      </div>
    </div>
  </div>
</section>

<section class="jardin" id="jardin">
  ${c.media({ nom: 'grok/reparer-jardin', alt: c.s('reparer.jardin.alt'), cadrage: '60% 50%', classe: 'jardin-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="10"' })}
  <div class="conteneur jardin-cadre">
    <div class="jardin-carte">
      <h2 data-anime="lignes">${c.t('reparer.jardin.titre')}</h2>
      <p data-anime>${c.t('reparer.jardin.texte')}</p>
    </div>
  </div>
</section>

${appel(c)}
`;
