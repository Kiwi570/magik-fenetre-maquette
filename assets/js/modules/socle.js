/* Pont entre les modules de la bibliothèque (pret()) et le socle du projet : GSAP et ScrollTrigger sont déjà chargés
   par les pages (vendor/, scripts defer exécutés avant site.js), le défilement adouci et les mesures sont ceux du socle
   du projet. Pas de mode calme. */
const html = document.documentElement;
let attente = 0;
export const socle = {
  gsap: null, ScrollTrigger: null, SplitText: null,
  get calme() { return false; },
  get souris() { return matchMedia('(hover: hover) and (pointer: fine)').matches; },
  get telephone() { return innerWidth < 700; },
  webgl() { return false; },
  rafraichir() { cancelAnimationFrame(attente); attente = requestAnimationFrame(() => socle.ScrollTrigger?.refresh()); },
  mesurer() {},
};
export async function pret() {
  const g = window.gsap || null;
  socle.gsap = g;
  if (g && window.ScrollTrigger) { g.registerPlugin(window.ScrollTrigger); socle.ScrollTrigger = window.ScrollTrigger; }
  if (g && window.SplitText) { g.registerPlugin(window.SplitText); socle.SplitText = window.SplitText; }
  return socle;
}
export { html };
