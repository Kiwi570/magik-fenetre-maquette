/* Contact : le numéro en très grand (ses chiffres coulissent en place), la demande par écrit en étapes
   (module formulaire-par-etapes, préremplie par ?panne=), l'exemple de photo, la zone. */
import { html, brut } from '../../outils/gabarit.mjs';
import { ICONE_TEL } from '../gabarits/commun.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'grok/facade-1280.webp' };

const ic = {
  fenetre: '<svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true"><rect x="7" y="4" width="18" height="24" rx="1.5"/><path d="M16 4v24M19 15v4"/></svg>',
  porte: '<svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true"><rect x="8" y="2" width="16" height="28" rx="1.5"/><path d="M8 20h16M20 13v4"/></svg>',
  baie: '<svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true"><rect x="3" y="6" width="26" height="20" rx="1.5"/><path d="M14 6v20M18 6v20M16 14v4"/><path d="M3 27h26"/></svg>',
  autre: '<svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="12"/><path d="M12.5 12.5a3.5 3.5 0 1 1 5 3.2c-1 .5-1.5 1.2-1.5 2.3M16 22v.5"/></svg>',
};

export default (c) => {
  const f = (k) => c.t('contact.form.' + k);
  const chiffres = c.site.contact.telephone.split(' ');
  return html`
<section class="contact-tete" id="debut">
  <div class="conteneur">
    <p class="surtitre" data-anime="gsap">${c.t('contact.surtitre')} · ${c.t('contact.zone')}</p>
    <h1 class="contact-titre"><span class="contact-ligne">${c.t('contact.titre1')}</span> <span class="contact-ligne contact-ligne--accent">${c.t('contact.titre2')}</span></h1>
    <p class="contact-numero" data-iris-centre data-info-cle>
      <a href="tel:${c.site.contact.telephoneLien}" aria-label="${c.s('contact.appeler')} le ${c.site.contact.telephone}" data-effet="numero">${chiffres.map((x) => html`<span class="contact-paire"><span>${x}</span></span> `)}</a>
    </p>
    <p class="contact-texte" data-anime="gsap">${c.t('contact.texte')}</p>
    <p class="contact-actions" data-anime="gsap">
      <a class="bouton" href="tel:${c.site.contact.telephoneLien}" data-action-principale data-survol="magnetique">${brut(ICONE_TEL)}${c.t('contact.appeler')}</a>
      <a class="bouton bouton--contour" href="#demande" data-sans-transition>${c.t('contact.ecrire')}</a>
    </p>
  </div>
</section>

<section class="fpe demande" id="demande" data-module="formulaire-par-etapes" aria-labelledby="fpe-titre">
  <div class="conteneur demande-grille">
    <div class="fpe__tete">
      <p class="surtitre" data-anime>${f('surtitre')}</p>
      <h2 class="fpe__h2" id="fpe-titre" data-anime="lignes">${f('titre')}</h2>
      <p class="fpe__intro" data-anime>${f('intro')}</p>
      <figure class="demande-photo" data-anime>
        ${c.media({ nom: 'intervention', alt: c.s('contact.photo.legende'), cadrage: '50% 55%', classe: 'demande-media', sizes: '(max-width: 760px) 60vw, 22vw' })}
        <figcaption><strong>${c.t('contact.photo.titre')}</strong> ${c.t('contact.photo.texte')}</figcaption>
      </figure>
    </div>
    <div class="fpe__carton" data-anime>
      <form class="fpe__form" action="#" method="post"  novalidate>
        <div class="fpe__progression">
          <ol class="fpe__reperes" aria-label="Progression"></ol>
          <div class="fpe__barre" aria-hidden="true"><span></span></div>
          <p class="fpe__etat" aria-live="polite"></p>
        </div>
        <fieldset class="fpe__etape" data-etape="${c.s('contact.form.etape1')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${f('q1')}</h3></legend>
          <div class="fpe__groupe fpe__cartes" data-libelle="${c.s('contact.form.etape1')}">
            ${[['fenetre', 'fenetre'], ['porte-fenetre', 'porte'], ['baie', 'baie'], ['autre', 'autre']].map(([v, i], k) => html`<label class="fpe__carte"><input type="radio" name="menuiserie" value="${v}"${k === 0 ? brut(' required') : ''}>${brut(ic[i])}<span class="fpe__carte-titre">${f({ fenetre: 'fenetre', 'porte-fenetre': 'porteFenetre', baie: 'baie', autre: 'autre' }[v])}</span></label>`)}
          </div>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="${c.s('contact.form.etape2')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${f('q2')}</h3></legend>
          <fieldset class="fpe__groupe" data-libelle="${c.s('contact.form.panne')}">
            <legend class="fpe__groupe-titre">${f('panne')} <i aria-hidden="true">*</i></legend>
            <div class="fpe__puces">
              ${['roulettes', 'cremone', 'poignee', 'autre'].map((v, k) => html`<label class="fpe__puce"><input type="radio" name="panne" value="${v}"${k === 0 ? brut(' required') : ''}><span class="fpe__choix-texte">${f(v === 'autre' ? 'inconnue' : v)}</span></label>`)}
            </div>
          </fieldset>
          <fieldset class="fpe__groupe" data-libelle="${c.s('contact.form.materiau')}">
            <legend class="fpe__groupe-titre">${f('materiau')} <i aria-hidden="true">*</i></legend>
            <div class="fpe__puces">
              ${['pvc', 'alu', 'nsp'].map((v, k) => html`<label class="fpe__puce"><input type="radio" name="materiau" value="${v}"${k === 0 ? brut(' required') : ''}><span class="fpe__choix-texte">${f(v)}</span></label>`)}
            </div>
          </fieldset>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="${c.s('contact.form.etape3')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${f('q3')}</h3></legend>
          <div class="fpe__champ"><label for="fpe-photo">${f('photo')}</label><input id="fpe-photo" name="photo" type="file" accept="image/*"></div>
          <div class="fpe__champ"><label for="fpe-precisions">${f('precisions')}</label><textarea id="fpe-precisions" name="precisions" rows="4"></textarea></div>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="${c.s('contact.form.etape4')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${f('q4')}</h3></legend>
          <div class="fpe__grille">
            <div class="fpe__champ"><label for="fpe-nom">${f('nom')} <i aria-hidden="true">*</i></label><input id="fpe-nom" name="nom" autocomplete="name" required></div>
            <div class="fpe__champ"><label for="fpe-tel">${f('tel')} <i aria-hidden="true">*</i></label><input id="fpe-tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" pattern="[0-9 +().\\-]{8,20}" required></div>
            <div class="fpe__champ fpe__champ--large"><label for="fpe-commune">${f('commune')} <i aria-hidden="true">*</i></label><input id="fpe-commune" name="commune" autocomplete="address-level2" required></div>
          </div>
          <p class="fpe__aide">${f('donnees')}</p>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="${c.s('contact.form.etape5')}" data-recap>
          <legend class="fpe__legende"><h3 class="fpe__titre">${f('q5')}</h3></legend>
          <div class="fpe__recap"><p>${f('q5')}</p></div>
        </fieldset>
        <div class="fpe__nav">
          <button class="fpe__bouton fpe__bouton--ligne" type="button" data-precedent>${f('precedent')}</button>
          <button class="fpe__bouton" type="button" data-suivant>${f('suivant')}</button>
          <button class="fpe__bouton" type="submit">${f('envoyer')}</button>
        </div>
      </form>
      <div class="fpe__fin" hidden>
        <svg class="fpe__coche" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="28"/><path d="M20 33l8 8 16-17"/></svg>
        <h3>${f('merci')}</h3>
        <p data-resume></p>
        <p>${f('fin')}</p>
        <button class="fpe__bouton fpe__bouton--ligne" type="button" data-recommencer>${f('recommencer')}</button>
      </div>
    </div>
  </div>
</section>

<section class="ou" id="zone">
  <div class="conteneur ou-grille">
    <div>
      <p class="surtitre" data-anime>${c.t('contact.ou.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('contact.ou.titre')}</h2>
      <ul class="ou-liste" data-anime="cascade">${c.donnees.carte.departements.map((d) => html`<li><span class="zone-code">${d.code}</span>${d.nom}</li>`)}</ul>
    </div>
    <figure class="ou-carte zone-carte est-allumee" data-visuel data-anime>
      <svg viewBox="0 0 ${c.donnees.carte.largeur} ${c.donnees.carte.hauteur}" role="img" aria-label="${c.s('accueil.zone.mention')} : ${c.donnees.carte.departements.map((d) => d.nom).join(', ')}">
        ${c.donnees.carte.departements.map((d) => html`<path class="zone-dep" d="${d.d}"/>`)}
        ${c.donnees.carte.departements.map((d) => html`<text class="zone-num" x="${d.cx}" y="${d.cy}" text-anchor="middle" dominant-baseline="middle">${d.code}</text>`)}
      </svg>
    </figure>
  </div>
</section>
`;
};
