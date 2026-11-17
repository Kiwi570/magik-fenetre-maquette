/* Parcours propres à Magik Fenêtre : diagnostic de l'accueil (chaque choix affiche sa réponse et son lien prérempli),
   formulaire de demande prérempli par ?panne=, formulaire en étapes jusqu'au message de fin (envoi simulé). */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  const { ctx, page } = await contexte({ taille: T('390×844') });
  try {
    /* Diagnostic : un clic sur chaque choix montre une seule réponse, celle du choix, avec son lien vers la demande. */
    await page.goto(BASE + '/', { waitUntil: 'load' });
    await attendrePret(page);
    await page.locator('#diagnostic').scrollIntoViewIfNeeded();
    for (const cle of ['cremone', 'poignee', 'roulettes', 'autre']) {
      await page.locator(`.diagnostic-choix [data-choix="${cle}"]`).click();
      await attendre(250);
      const r = await page.evaluate((cle) => {
        const vis = [...document.querySelectorAll('[data-reponse]')].filter((x) => !x.hidden);
        const lien = vis[0] && vis[0].querySelector('a[href*="/contact"]');
        return { n: vis.length, cle: vis[0] && vis[0].dataset.reponse, lien: lien ? lien.getAttribute('href') : '' };
      }, cle);
      if (r.n !== 1 || r.cle !== cle) R.echec('diagnostic', `choix ${cle} : ${r.n} réponse(s) visible(s) (${r.cle || 'aucune'})`, { page: '/', taille: '390×844' });
      if (!r.lien.includes('panne=' + cle)) R.echec('diagnostic', `choix ${cle} : lien vers la demande sans le bon préremplissage (${r.lien})`, { page: '/', taille: '390×844' });
    }

    /* Demande préremplie : ?panne=roulettes coche Roulettes et Baie coulissante. */
    await page.goto(BASE + '/contact?panne=roulettes#demande', { waitUntil: 'load' });
    await attendrePret(page);
    const pre = await page.evaluate(() => ({
      panne: (document.querySelector('input[name="panne"]:checked') || {}).value,
      menuiserie: (document.querySelector('input[name="menuiserie"]:checked') || {}).value,
    }));
    if (pre.panne !== 'roulettes' || pre.menuiserie !== 'baie') R.echec('demande préremplie', `panne=${pre.panne}, menuiserie=${pre.menuiserie} au lieu de roulettes et baie`, { page: '/contact', taille: '390×844' });

    /* Parcours complet du formulaire jusqu'au message de fin (rien n'est envoyé). */
    const suivant = page.locator('.fpe__nav [data-suivant]');
    await suivant.click(); await attendre(400);
    await page.check('input[name="materiau"][value="pvc"]', { force: true });
    await suivant.click(); await attendre(400);
    await suivant.click(); await attendre(400);
    await page.fill('#fpe-nom', 'Essai Audit');
    await page.fill('#fpe-tel', '06 00 00 00 00');
    await page.fill('#fpe-commune', 'Lille');
    await suivant.click(); await attendre(400);
    await page.locator('.fpe__nav [type="submit"]').click();
    await attendre(700);
    const fin = await page.evaluate(() => { const f = document.querySelector('.fpe__fin'); return f && !f.hidden; });
    if (!fin) R.echec('demande', 'le message de fin ne s’affiche pas après l’envoi simulé', { page: '/contact', taille: '390×844' });
  } finally { await ctx.close(); }
}
