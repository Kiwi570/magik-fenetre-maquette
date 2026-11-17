/* Dessins SVG du projet : pièces des pannes (roulette, crémone, poignée) et schéma du diagnostic.
   Les groupes animés portent une classe (.rot, .cames, .levier, .vantail-mobile) lue par assets/js/site.js. */

export function piece(cle, taille = 80) {
  const t = taille;
  if (cle === 'roulettes') {
    const rayons = Array.from({ length: 6 }, (_, i) => {
      const a = (i * Math.PI) / 3;
      return `<line x1="${(40 + Math.cos(a) * 9).toFixed(1)}" y1="${(40 + Math.sin(a) * 9).toFixed(1)}" x2="${(40 + Math.cos(a) * 22).toFixed(1)}" y2="${(40 + Math.sin(a) * 22).toFixed(1)}"/>`;
    }).join('');
    return `<svg viewBox="0 0 80 80" width="${t}" height="${t}" class="piece piece--roulettes"><rect x="6" y="62" width="68" height="6" rx="3" class="p-rail"/><g class="rot"><circle cx="40" cy="40" r="27" class="p-pneu"/><circle cx="40" cy="40" r="22" class="p-jante"/><g class="p-rayons">${rayons}</g><circle cx="40" cy="40" r="7" class="p-moyeu"/><circle cx="40" cy="40" r="2.6" class="p-axe"/><circle cx="40" cy="18.5" r="2.4" class="p-repere"/></g></svg>`;
  }
  if (cle === 'cremone') {
    return `<svg viewBox="0 0 80 80" width="${t}" height="${t}" class="piece piece--cremone"><rect x="33" y="6" width="14" height="68" rx="4" class="p-tetiere"/><g class="cames"><rect x="29" y="12" width="22" height="9" rx="4.5" class="p-came"/><rect x="29" y="36" width="22" height="9" rx="4.5" class="p-came"/><rect x="29" y="60" width="22" height="9" rx="4.5" class="p-came"/></g><circle cx="40" cy="40.5" r="2.2" class="p-axe"/></svg>`;
  }
  return `<svg viewBox="0 0 80 80" width="${t}" height="${t}" class="piece piece--poignee"><rect x="30" y="12" width="20" height="44" rx="10" class="p-rosace"/><circle cx="40" cy="26" r="5" class="p-axe"/><g class="levier"><rect x="35.5" y="22" width="9" height="50" rx="4.5" class="p-levier"/></g><circle cx="40" cy="26" r="3" class="p-moyeu"/></svg>`;
}

export function schemaDiagnostic() {
  const fenetre = `
    <g class="s-fenetre">
      <rect x="40" y="40" width="250" height="380" rx="6" class="s-dormant" data-fx-trait/>
      <rect x="56" y="56" width="218" height="348" rx="3" class="s-ouvrant"/>
      <rect x="74" y="74" width="182" height="312" rx="2" class="s-verre"/>
      <path d="M96 100 L170 100 L120 360" class="s-reflet"/>
      <g class="s-cremone" data-schema="cremone">
        <line x1="263" y1="80" x2="263" y2="380" class="s-tige"/>
        <g class="s-cames"><rect x="257" y="112" width="12" height="18" rx="5"/><rect x="257" y="236" width="12" height="18" rx="5"/><rect x="257" y="330" width="12" height="18" rx="5"/></g>
      </g>
      <g class="s-poignee" data-schema="poignee">
        <rect x="254" y="226" width="20" height="38" rx="8" class="s-rosace"/>
        <g class="s-levier"><rect x="259" y="232" width="10" height="50" rx="5"/></g>
      </g>
    </g>`;
  const baie = `
    <g class="s-baie">
      <rect x="340" y="40" width="380" height="380" rx="6" class="s-dormant" data-fx-trait/>
      <rect x="352" y="400" width="356" height="10" rx="3" class="s-rail"/>
      <g class="s-fixe"><rect x="354" y="54" width="186" height="346" rx="3" class="s-ouvrant"/><rect x="370" y="70" width="154" height="314" rx="2" class="s-verre"/><path d="M390 96 L452 96 L410 350" class="s-reflet"/></g>
      <g class="vantail-mobile" data-schema="roulettes" data-effet="diagnostic">
        <rect x="522" y="54" width="186" height="346" rx="3" class="s-ouvrant s-ouvrant--devant"/>
        <rect x="538" y="70" width="154" height="314" rx="2" class="s-verre"/>
        <path d="M560 96 L622 96 L580 350" class="s-reflet"/>
        <rect x="527" y="206" width="8" height="50" rx="4" class="s-main"/>
        <g class="s-roulette" style="transform-origin:560px 402px"><circle cx="560" cy="402" r="9"/><line x1="560" y1="395" x2="560" y2="409"/></g>
        <g class="s-roulette" style="transform-origin:670px 402px"><circle cx="670" cy="402" r="9"/><line x1="670" y1="395" x2="670" y2="409"/></g>
      </g>
    </g>`;
  return `<svg class="schema" viewBox="0 0 760 460" aria-hidden="true" focusable="false" data-fx="trace">${fenetre}${baie}</svg>`;
}
