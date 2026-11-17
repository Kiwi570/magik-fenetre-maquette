/* Effets propres à Magik Fenêtre (direction « La coulisse »). Le socle gère l'ouverture, le voile (forme « coulisse »,
   voile.js), l'en-tête, le menu, les mesures et la bibliothèque d'effets posés par attributs dans les pages.
   Effets du plan (data-effet) : coulisse (intro, vitre de l'accueil), pieces (roulette, crémone, poignée au défilement),
   eclate (module vue-eclatee), diagnostic (schéma cliquable), mascotte (appel final et 404), carte (Hauts-de-France),
   numero (numéro du contact). */
import { demarrer, quand } from './socle/index.js?v=1';

const gsap = window.gsap;
const ST = window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const page = document.body && $('main') ? ($('.hero') ? 'accueil' : $('.tete-geante') ? 'depannages' : $('.reparer-tete') ? 'reparer' : $('.contact-tete') ? 'contact' : $('.introuvable') ? '404' : '') : '';

/* ---------- Modules de la bibliothèque ---------- */
const modules = [];
function chargerModules() {
  const eclate = $('[data-module="vue-eclatee"]');
  if (eclate) modules.push(import('./modules/vue-eclatee.js?v=1').then((m) => m.init(eclate, { ecart: 70, longueur: 1.6, recomposer: true })));
  const fpe = $('[data-module="formulaire-par-etapes"]');
  if (fpe) {
    preremplir(fpe);
    modules.push(import('./modules/formulaire-par-etapes.js?v=1').then((m) => {
      const r = m.init(fpe, { sujet: 'Panne de menuiserie' });
      fpe.addEventListener('formulaire:envoye', () => { const fin = $('.fpe__fin', fpe); if (fin) setTimeout(() => fin.scrollIntoView({ block: 'center' }), 60); });
      return r;
    }));
  }
  Promise.all(modules).then(() => { if (ST) { ST.sort(); ST.refresh(); } }).catch((e) => console.error('[magik] modules', e));
}

/* Formulaire prérempli par l'adresse : ?panne=roulettes|cremone|poignee|autre (boutons « Demander pour ma baie »…). */
function preremplir(form) {
  const p = new URLSearchParams(location.search).get('panne');
  if (!p) return;
  const r = form.querySelector(`input[name="panne"][value="${CSS.escape(p)}"]`);
  if (r) r.checked = true;
  const menuiserie = { roulettes: 'baie', cremone: 'fenetre', poignee: 'fenetre' }[p];
  const m = menuiserie && form.querySelector(`input[name="menuiserie"][value="${menuiserie}"]`);
  if (m) m.checked = true;
}

/* ---------- Pièces qui bougent au défilement (cartes, rangées, raisons) ---------- */
function pieces() {
  if (!gsap || !ST) return;
  for (const bloc of $$('[data-effet="pieces"]')) {
    const st = { trigger: bloc, start: 'top 95%', end: 'bottom 5%', scrub: 0.6 };
    const tl = gsap.timeline({ scrollTrigger: st });
    $$('.piece--roulettes .rot', bloc).forEach((g) => { gsap.set(g, { svgOrigin: '40 40' }); tl.fromTo(g, { rotation: -200 }, { rotation: 200, ease: 'none', duration: 1 }, 0); });
    $$('.piece--cremone .cames', bloc).forEach((g) => tl.fromTo(g, { y: -7 }, { y: 7, ease: 'sine.inOut', duration: 1 }, 0));
    $$('.piece--poignee .levier', bloc).forEach((g) => { gsap.set(g, { svgOrigin: '40 26' }); tl.fromTo(g, { rotation: 0 }, { rotation: -90, ease: 'power1.inOut', duration: 1 }, 0); });
    /* Le bloc lui-même glisse un peu, comme sur son rail : c'est ce que l'audit voit bouger. */
    tl.fromTo(bloc, { x: -10 }, { x: 10, ease: 'none', duration: 1 }, 0);
  }
}

/* ---------- Vitre de l'accueil : le vantail continue de coulisser au défilement ---------- */
function vitre() {
  const v = $('.hero-vitre');
  if (!v || !gsap || !ST) return;
  gsap.timeline({ scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.5 } })
    .fromTo(v, { xPercent: 0 }, { xPercent: -78, ease: 'none', immediateRender: false });
}

/* ---------- Diagnostic : la pièce choisie bouge, la bonne réponse s'affiche ---------- */
function diagnostic() {
  const bloc = $('[data-diagnostic]');
  if (!bloc || !gsap) return;
  const svg = $('.schema', bloc);
  const boutons = $$('[data-choix]', bloc);
  const reponses = $$('[data-reponse]', bloc);
  const mobile = $('.vantail-mobile', svg);
  if (svg) { gsap.set($$('.s-roulette', svg), { transformOrigin: '50% 50%' }); gsap.set($('.s-levier', svg), { svgOrigin: '264 245' }); }
  const jouer = (cle) => {
    $$('.est-actif', svg).forEach((e) => e.classList.remove('est-actif'));
    const part = $(`[data-schema="${cle}"]`, svg);
    if (part) part.classList.add('est-actif');
    if (cle === 'roulettes' && mobile) {
      gsap.timeline({ overwrite: 'auto' })
        .to(mobile, { x: -84, duration: 0.7, ease: 'power2.inOut' })
        .to($$('.s-roulette', mobile), { rotation: -300, duration: 0.7, ease: 'power2.inOut' }, 0)
        .to(mobile, { x: 0, duration: 0.8, ease: 'back.out(1.6)' }, 0.85)
        .to($$('.s-roulette', mobile), { rotation: 0, duration: 0.8, ease: 'back.out(1.6)' }, 0.85);
    } else if (cle === 'cremone') {
      gsap.timeline().to($('.s-cames', svg), { y: -16, duration: 0.45, ease: 'power2.inOut' }).to($('.s-cames', svg), { y: 0, duration: 0.6, ease: 'back.out(2)' });
    } else if (cle === 'poignee') {
      gsap.timeline().to($('.s-levier', svg), { rotation: 90, duration: 0.5, ease: 'power2.inOut' }).to($('.s-levier', svg), { rotation: 0, duration: 0.7, ease: 'back.out(1.8)' }, '+=0.25');
    }
  };
  const choisir = (cle, anime = true) => {
    boutons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.choix === cle)));
    reponses.forEach((r) => { r.hidden = r.dataset.reponse !== cle; });
    const visible = $(`[data-reponse="${cle}"]`, bloc);
    if (visible && anime) gsap.fromTo(visible, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: 'power3.out', clearProps: 'transform,opacity' });
    if (anime) jouer(cle);
  };
  boutons.forEach((b) => b.addEventListener('click', () => choisir(b.dataset.choix)));
  /* Démonstration à l'arrivée dans l'écran : la baie coulisse une fois sur ses roulettes. */
  if (ST) ST.create({ trigger: svg, start: 'top 70%', once: true, onEnter: () => jouer('roulettes') });
}

/* ---------- Mascotte : elle monte du bas comme un vantail qu'on soulève ---------- */
function mascotte() {
  if (!gsap || !ST) return;
  for (const m of $$('.appel-mascotte[data-effet="mascotte"]')) {
    gsap.fromTo(m, { yPercent: 38, rotation: -4 }, { yPercent: 0, rotation: 0, ease: 'none', scrollTrigger: { trigger: m.closest('section'), start: 'top 90%', end: 'top 25%', scrub: 0.6 } });
  }
  const m404 = $('.introuvable-mascotte');
  if (m404) gsap.to(m404, { y: -10, rotation: 1.5, duration: 1.6, ease: 'sine.inOut', yoyo: true, repeat: 5 });
}

/* ---------- Carte : départements qui s'allument quand elle est tracée ---------- */
function carte() {
  const fig = $('.zone-carte');
  if (!fig || !ST) return;
  ST.create({ trigger: fig, start: 'top 70%', once: true, onEnter: () => fig.classList.add('est-allumee') });
  /* Survol d'un département dans la liste : il s'allume sur la carte. */
  $$('.zone-liste [data-dep]').forEach((li) => {
    const p = $(`.zone-dep[data-dep="${li.dataset.dep}"]`, fig);
    li.addEventListener('pointerenter', () => p && p.classList.add('est-survol'));
    li.addEventListener('pointerleave', () => p && p.classList.remove('est-survol'));
  });
}

/* ---------- Numéro du contact : il dérive doucement au défilement ---------- */
function numero() {
  const a = $('[data-effet="numero"]');
  if (!a || !gsap || !ST) return;
  gsap.fromTo(a, { x: 0 }, { x: () => -Math.min(80, innerWidth * 0.05), ease: 'none', immediateRender: false, scrollTrigger: { trigger: '.contact-tete', start: 'top top', end: 'bottom top', scrub: 0.5, invalidateOnRefresh: true } });
}

/* ---------- Ouverture de chaque page ---------- */
function entree(tl, t0) {
  const sel = (s) => $$(s).length ? s : null;
  if (page === 'accueil') {
    tl.fromTo('.hero-ligne', { yPercent: 115, y: 0 }, { yPercent: 0, y: 0, duration: 0.8, stagger: 0.12, ease: 'power4.out' }, t0)
      .fromTo('.hero-surtitre, .hero-intro, .hero-actions, .hero-info', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.08 }, t0 + 0.15)
      .fromTo('.hero-vitre', { xPercent: 84 }, { xPercent: 0, duration: 0.9, ease: 'back.out(1.3)' }, t0 - 0.1);
  } else if (page === 'reparer') {
    tl.fromTo('.reparer-tete [data-anime="gsap"]', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.08 }, t0)
      .call(() => rature(), null, t0 + 0.2);
  } else if (page === 'contact') {
    tl.fromTo('.contact-paire > span', { yPercent: 110, y: 0 }, { yPercent: 0, y: 0, duration: 0.7, stagger: 0.09, ease: 'back.out(1.4)' }, t0)
      .fromTo('.contact-tete [data-anime="gsap"]', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.08 }, t0 + 0.1);
  } else if (page === '404') {
    tl.fromTo('.hero-ligne', { yPercent: 115, y: 0 }, { yPercent: 0, y: 0, duration: 0.8, stagger: 0.12, ease: 'power4.out' }, t0)
      .fromTo('.introuvable [data-anime="gsap"]', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.08 }, t0 + 0.2);
  }
  return sel;
}

let ratureFaite = false;
function rature() {
  if (ratureFaite) return; ratureFaite = true;
  const h = $('[data-module="rature-au-stylo"]');
  if (h) import('./modules/rature-au-stylo.js?v=1').then((m) => m.init(h, { declencheur: 'apparition', delai: 0, duree: 0.8 })).catch(() => {});
}

demarrer({
  preparer() {
    chargerModules();
    pieces();
    vitre();
    diagnostic();
    mascotte();
    carte();
    numero();
  },
  /* Intro (environ 2,2 s) : le reflet balaie la baie, le vantail droit coulisse sur le gauche avec un rebond de roulette
     (la page apparaît à droite), puis les deux vantaux partent à gauche ; le titre arrive pendant ce temps. */
  jouer() {
    if (!gsap) return null;
    const panneau = $('[data-ouverture]');
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('[data-ouverture] .vantail-reflet', { xPercent: -45 }, { xPercent: 45, duration: 0.9, ease: 'power2.inOut' }, 0.05)
      .fromTo('.ouverture-centre', { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35 }, 0)
      .to('.ouverture-centre', { y: -8, opacity: 0, duration: 0.25, ease: 'power2.in' }, 0.72)
      .set(panneau, { backgroundColor: 'transparent', clipPath: 'inset(0% 0% 0% 0%)' }, 0.8)
      .to('[data-ouverture] .vantail--d', { xPercent: -97, duration: 0.6, ease: 'back.out(1.5)' }, 0.8)
      .to(panneau, { clipPath: 'inset(0% 48.5% 0% 0%)', duration: 0.6, ease: 'back.out(1.5)' }, 0.8)
      .to('[data-ouverture] .vantail--g', { xPercent: -100, duration: 0.55, ease: 'power3.in' }, 1.45)
      .to('[data-ouverture] .vantail--d', { xPercent: -200, duration: 0.55, ease: 'power3.in' }, 1.45)
      .to(panneau, { clipPath: 'inset(0% 100% 0% 0%)', duration: 0.55, ease: 'power3.in' }, 1.45);
    entree(tl, 1.35);
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    gsap.set('.hero-ligne, .contact-paire > span, .hero-vitre', { clearProps: 'transform' });
    gsap.set('[data-anime="gsap"]', { clearProps: 'transform,opacity' });
    rature();
  },
  arrivee() {
    if (!gsap) return;
    entree(gsap.timeline({ defaults: { ease: 'power3.out' } }), 0.12);
  },
});

/* Calcul lourd éventuel après l'ouverture seulement. */
quand('pret', () => { if (ST) ST.refresh(); });
