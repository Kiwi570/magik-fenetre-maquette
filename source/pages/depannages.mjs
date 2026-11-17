/* Dépannages : grand titre puis bandeau de pièces sur l'établi ; une rangée par panne avec sa pièce dessinée
   qui s'anime au défilement ; toutes les autres menuiseries ; questions fréquentes ; appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { appel } from '../gabarits/commun.mjs';
import { piece } from '../gabarits/dessins.mjs';

export const page = { cle: 'depannages', fichier: 'depannages', imagePartage: 'grok/depannages-ouverture-1280.webp' };

export default (c) => html`
<section class="tete-geante" id="debut">
  <div class="conteneur">
    <p class="surtitre" data-anime>${c.t('depannages.surtitre')}</p>
    <h1 class="titre-geant" data-anime="lettres">${c.t('depannages.titre')}</h1>
    <div class="tete-geante-bas">
      <p class="tete-geante-texte" data-anime>${c.t('depannages.texte')}</p>
      <p class="tete-geante-actions" data-anime data-info-cle>
        ${c.lien('contact', { ancre: 'demande', classe: 'bouton', texte: c.t('commun.actionEntete'), attrs: 'data-action-principale' })}
        <a class="lien-tel" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
      </p>
    </div>
  </div>
  <div class="bandeau-etabli" data-iris-centre>
    ${c.media({ nom: 'grok/depannages-ouverture', alt: c.s('depannages.bandeauAlt'), cadrage: '62% 80%', cadrageMobile: '60% 60%', priorite: true, classe: 'bandeau-media', sizes: '100vw', attrs: 'data-anime="rideau"' })}
  </div>
</section>

${c.donnees.pannes.map((p, i) => html`<section class="rangee${i % 2 ? ' rangee--inverse' : ''}" id="${p.cle}">
  <div class="conteneur rangee-grille">
    <div class="rangee-dessin" data-effet="pieces" data-piece="${p.cle}" aria-hidden="true">
      <span class="rangee-num">0${i + 1}</span>
      ${brut(piece(p.cle, 320))}
    </div>
    <div class="rangee-texte">
      <p class="surtitre" data-anime>${p.materiau}</p>
      <h2 data-anime="lignes">${p.titre}</h2>
      <p class="rangee-cause" data-anime>${p.cause}</p>
      <h3 class="rangee-sous" data-anime>${c.t('depannages.symptomes')}</h3>
      <ul class="rangee-liste" data-anime="cascade">${p.symptomes.map((s) => html`<li>${s}</li>`)}</ul>
      <p class="rangee-action" data-anime><strong>${c.t('depannages.ceQuOnFait')}</strong> ${p.action}</p>
      <p data-anime>${c.lien('contact', { ancre: 'demande', params: 'panne=' + p.cle, classe: 'bouton', texte: html`${p.bouton}` })}</p>
    </div>
  </div>
</section>`)}

<section class="autres" id="autres">
  <div class="conteneur autres-grille">
    <div>
      <h2 data-anime="lignes">${c.t('depannages.autres.titre')}</h2>
      <p data-anime>${c.t('depannages.autres.texte')}</p>
      <p data-anime>${c.lien('contact', { ancre: 'demande', params: 'panne=autre', classe: 'bouton bouton--clair', texte: c.t('depannages.autres.lien') })}</p>
    </div>
    <ul class="autres-types" data-anime="cascade">${c.donnees.listes.types.map((t) => html`<li>${t}</li>`)}</ul>
  </div>
</section>

<section class="faq" id="faq">
  <div class="conteneur faq-grille">
    <div class="faq-tete">
      <p class="surtitre" data-anime>${c.t('depannages.faq.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('depannages.faq.titre')}</h2>
      ${c.media({ nom: 'intervention', alt: c.s('contact.photo.legende'), cadrage: '50% 55%', classe: 'faq-media', sizes: '(max-width: 760px) 92vw, 30vw', attrs: 'data-anime="rideau"' })}
    </div>
    <div class="faq-liste" data-anime="cascade">
      ${c.donnees.faq.map((f) => html`<details class="faq-item"><summary>${f.q}</summary><p>${f.r}</p></details>`)}
    </div>
  </div>
</section>

${appel(c)}
`;
