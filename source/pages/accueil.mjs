/* Accueil de Magik Fenêtre (direction « La coulisse »).
   Ouverture : titre, appel, photo de baie sous un vantail de verre qui coulisse ; trois pannes ; vue éclatée (module) ;
   diagnostic sur schéma ; façade qui s'ouvre en plein écran ; carte des Hauts-de-France ; appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { readFileSync } from 'node:fs';
import { appel, ICONE_TEL } from '../gabarits/commun.mjs';
import { piece, schemaDiagnostic } from '../gabarits/dessins.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'grok/accueil-ouverture-1280.webp' };

const ECLATE = readFileSync(new URL('../gabarits/eclate-svg.txt', import.meta.url), 'utf8');
const PIECES_ECLATE = [['1', 'poignee', 'Poignée'], ['2', 'ouvrant', 'Ouvrant'], ['3', 'cremone', 'Crémone'], ['4', 'vitrage', 'Vitrage'], ['5', 'dormant', 'Dormant']];

export default (c) => {
  const pannes = c.donnees.pannes;
  const carte = c.donnees.carte;
  return html`
<section class="hero" id="debut">
  <div class="hero-texte">
    <p class="surtitre hero-surtitre" data-anime="gsap" data-info-cle>${c.t('accueil.hero.surtitre')}</p>
    <h1 class="hero-titre"><span class="hero-ligne-masque"><span class="hero-ligne">${c.t('accueil.hero.titre1')}</span></span> <span class="hero-ligne-masque"><span class="hero-ligne hero-ligne--accent">${c.t('accueil.hero.titre2')}</span></span></h1>
    <p class="hero-intro masque-ecran-tres-bas" data-anime="gsap">${c.t('accueil.hero.texte')}</p>
    <p class="hero-actions" data-anime="gsap">
      <a class="bouton" href="tel:${c.site.contact.telephoneLien}" data-action-principale data-survol="magnetique">${brut(ICONE_TEL)}${c.t('accueil.hero.appeler')}</a>
      ${c.lien('contact', { ancre: 'demande', classe: 'bouton bouton--contour', texte: c.t('accueil.hero.decrire') })}
    </p>
    <p class="hero-info masque-ecran-tres-bas" data-anime="gsap"><span class="pastille-rail" aria-hidden="true"></span>${c.t('accueil.hero.info')}</p>
  </div>
  <div class="hero-baie" data-iris-centre>
    ${c.media({ nom: 'grok/accueil-ouverture', alt: c.s('accueil.hero_alt'), cadrage: '50% 60%', priorite: true, classe: 'hero-media', sizes: '(max-width: 760px) 92vw, 46vw' })}
    <div class="hero-vitre" data-effet="coulisse" data-boucle-css aria-hidden="true"><span class="vantail-reflet"></span><span class="vantail-poignee"></span></div>
    <span class="hero-rail" aria-hidden="true"></span>
  </div>
</section>

<section class="pannes" id="pannes">
  <div class="conteneur">
    <div class="section-tete">
      <p class="surtitre" data-anime>${c.t('accueil.pannes.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.pannes.titre')}</h2>
      <p class="section-intro" data-anime>${c.t('accueil.pannes.intro')}</p>
    </div>
    <ul class="pannes-grille" data-anime="cascade">
      ${pannes.map((p) => html`<li class="panne-carte" data-survol="incline" data-survol-force="4">
        ${c.media({ nom: p.image, alt: p.alt, classe: 'panne-media', sizes: '(max-width: 760px) 92vw, 30vw', attrs: 'data-fx="zoom"' })}
        <div class="panne-piece" data-effet="pieces" data-piece="${p.cle}" aria-hidden="true">${brut(piece(p.cle))}</div>
        <div class="panne-texte">
          <p class="panne-materiau">${p.materiau}</p>
          <h3>${p.titre}</h3>
          <p>${p.symptome}</p>
          ${c.lien('depannages', { ancre: p.cle, classe: 'lien-fleche', texte: c.t('accueil.pannes.voir') })}
        </div>
      </li>`)}
      <li class="panne-carte panne-carte--autres">
        <div class="panne-texte">
          <h3>${c.t('accueil.pannes.autresTitre')}</h3>
          <p>${c.t('accueil.pannes.autresTexte')}</p>
          ${c.lien('contact', { ancre: 'demande', params: 'panne=autre', classe: 'bouton bouton--contour', texte: c.t('accueil.pannes.autresLien') })}
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="vec eclate" id="reparer" data-module="vue-eclatee" data-epingle aria-labelledby="vec-titre">
  <div class="vec__cadre socle-cadre">
    <div class="vec__tete" data-tient>
      <p class="surtitre">${c.t('accueil.eclate.surtitre')}</p>
      <h2 class="vec__titre" id="vec-titre">${c.t('accueil.eclate.titre')}</h2>
      <p class="vec__intro masque-ecran-bas">${c.t('accueil.eclate.intro')}</p>
    </div>
    <div class="vec__scene">
      <div class="vec__plan" data-tient>
        ${brut(ECLATE)}
        <p class="vec__mention">${c.t('commun.schema')}</p>
      </div>
    </div>
    <div class="vec__pieces" data-tient>
      <p class="vec__liste-titre surtitre" id="vec-liste">${c.t('accueil.eclate.listeTitre')}</p>
      <ol class="vec__liste" aria-labelledby="vec-liste">
        ${PIECES_ECLATE.map(([n, cle, nom]) => html`<li><button type="button" class="vec__legende${cle === 'cremone' ? ' vec__legende--usee' : ''}" data-piece="${n}" aria-pressed="false"><span class="vec__num">0${n}</span><span class="vec__nom">${nom}</span><span class="vec__statut">${c.s('accueil.eclate.' + cle).replace(/^[^:]*:\s*/, '')}</span></button></li>`)}
      </ol>
      <p class="eclate-lien masque-ecran-bas">${c.lien('reparer', { classe: 'lien-fleche', texte: c.t('accueil.eclate.lien') })}</p>
    </div>
  </div>
</section>

<section class="diagnostic" id="diagnostic" data-diagnostic>
  <div class="conteneur diagnostic-grille">
    <div class="diagnostic-tete">
      <p class="surtitre" data-anime>${c.t('accueil.diagnostic.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.diagnostic.titre')}</h2>
      <p data-anime>${c.t('accueil.diagnostic.intro')}</p>
    </div>
    <div class="diagnostic-schema">
      ${brut(schemaDiagnostic())}
      ${[['cremone', 34.2, 26], ['poignee', 34.7, 54.5], ['roulettes', 79, 88.5]].map(([cle, x, y], i) => html`<button type="button" class="diag-point" data-choix="${cle}" style="--x:${x}%;--y:${y}%" aria-pressed="${i === 2 ? 'true' : 'false'}" aria-label="${pannes.find((p) => p.cle === cle).court}" data-superpose><span aria-hidden="true">${i + 1}</span></button>`)}
      <p class="diagnostic-legende" aria-hidden="true"><span>${c.t('accueil.diagnostic.fenetre')}</span><span>${c.t('accueil.diagnostic.baie')}</span></p>
      <p class="diagnostic-mention">${c.t('commun.schema')}</p>
    </div>
    <div class="diagnostic-panneau">
      <div class="diagnostic-choix" role="group" aria-label="${c.s('accueil.diagnostic.titre')}">
        ${['cremone', 'poignee', 'roulettes'].map((cle, i) => pannes.find((p) => p.cle === cle)).map((p, i) => html`<button type="button" class="puce" data-choix="${p.cle}" aria-pressed="${p.cle === 'roulettes' ? 'true' : 'false'}"><span class="puce-num" aria-hidden="true">${i + 1}</span>${p.court}</button>`)}
        <button type="button" class="puce" data-choix="autre" aria-pressed="false">${c.t('accueil.diagnostic.autre')}</button>
      </div>
      <div class="diagnostic-reponses" aria-live="polite">
        ${pannes.map((p) => html`<article class="diagnostic-reponse" data-reponse="${p.cle}"${p.cle === 'roulettes' ? '' : brut(' hidden')}>
          <h3>${p.symptome}</h3>
          <p><strong>${c.t('accueil.diagnostic.souvent')}</strong> ${p.cause}</p>
          <p><strong>${c.t('accueil.diagnostic.solution')}</strong> ${p.action}</p>
          ${c.lien('contact', { ancre: 'demande', params: 'panne=' + p.cle, classe: 'bouton', texte: html`${p.bouton}` })}
        </article>`)}
        <article class="diagnostic-reponse" data-reponse="autre" hidden>
          <h3>${c.t('accueil.diagnostic.autreSymptome')}</h3>
          <p><strong>${c.t('accueil.diagnostic.souvent')}</strong> ${c.t('accueil.diagnostic.autreCause')}</p>
          <p><strong>${c.t('accueil.diagnostic.solution')}</strong> ${c.t('accueil.diagnostic.autreAction')}</p>
          ${c.lien('contact', { ancre: 'demande', params: 'panne=autre', classe: 'bouton', texte: c.t('accueil.diagnostic.autreBouton') })}
        </article>
      </div>
    </div>
  </div>
</section>

<section class="facade" id="facade" data-fx="plein-ecran" data-fx-depart="inset(27% 31% 27% 31% round 24px)" aria-labelledby="facade-titre">
  <div data-collant class="facade-cadre">
    <h2 class="visuellement-cache" id="facade-titre">${c.t('accueil.facade.titre')}</h2>
    <p class="facade-mot facade-mot--g" data-fx-ecarte="g" aria-hidden="true">${c.t('accueil.facade.gauche')}</p>
    ${c.media({ nom: 'grok/facade', alt: c.s('accueil.facade.alt'), cadrage: '50% 55%', classe: 'facade-media', sizes: '100vw' })}
    <p class="facade-mot facade-mot--d" data-fx-ecarte="d" aria-hidden="true">${c.t('accueil.facade.droite')}</p>
    <p class="facade-legende" data-fx-apres>${c.t('accueil.facade.legende')}</p>
  </div>
</section>

<section class="zone" id="zone">
  <div class="conteneur zone-grille">
    <div class="zone-texte">
      <p class="surtitre" data-anime>${c.t('accueil.zone.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.zone.titre')}</h2>
      <p data-anime>${c.t('accueil.zone.texte')}</p>
      <ul class="zone-liste" data-anime="cascade">
        ${carte.departements.map((d) => html`<li data-dep="${d.code}"><span class="zone-code">${d.code}</span>${d.nom}</li>`)}
      </ul>
    </div>
    <figure class="zone-carte" data-visuel>
      <svg viewBox="0 0 ${carte.largeur} ${carte.hauteur}" role="img" aria-label="${c.s('accueil.zone.mention')} : ${carte.departements.map((d) => d.nom).join(', ')}" data-fx="trace" data-effet="carte">
        ${carte.departements.map((d) => html`<path class="zone-dep" data-dep="${d.code}" data-fx-trait d="${d.d}"/>`)}
        ${carte.departements.map((d) => html`<text class="zone-num" x="${d.cx}" y="${d.cy}" text-anchor="middle" dominant-baseline="middle">${d.code}</text>`)}
      </svg>
      <figcaption class="zone-mention">${c.t('accueil.zone.mention')}</figcaption>
    </figure>
  </div>
</section>

${appel(c)}
`;
};
