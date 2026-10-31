/**
 * JurisAI Official Brand Asset Generator
 * Generates vector SVGs and ultra-high-definition PNGs for:
 * 1. Horizontal Logo (Light, Dark, 4K Ultra-HD)
 * 2. Vertical Logo (Light, Dark, 4K Ultra-HD)
 * 3. Icon-Only Mark (Light, Dark, 4K Ultra-HD)
 * 4. Favicons & App Icons (SVG, ICO, 16px, 32px, 48px, 64px, 180px, 512px)
 * 5. Updates Next.js app icons in src/app/icon.svg and public/
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Official Brand Palette
const NAVY = '#1A365D';
const GOLD = '#B79058';
const WHITE = '#FFFFFF';
const DARK_BG = '#16202C';
const SUBTITLE_DARK = '#CBD5E1';

/**
 * Mathematically drawn Scales of Justice + AI Neural Circuit Mark.
 * Coordinate space: 1024x1024.
 * Center: (511.5, 497.5). Bounding box: [184, 839] x [209, 786].
 */
function getIconPaths(color = GOLD) {
  return `
  <!-- Base Pedestal (Tiered Circuit Ledge) -->
  <g fill="none" stroke="${color}" stroke-linecap="round" stroke-linejoin="round">
    <!-- Top tier bar & slopes -->
    <path d="M 406,708.5 L 617,708.5" stroke-width="19" stroke-linecap="square" />
    <path d="M 406,708.5 L 354,741.5" stroke-width="19" stroke-linecap="square" />
    <path d="M 617,708.5 L 669,741.5" stroke-width="19" stroke-linecap="square" />

    <!-- Middle tier bar with circuit jog gap on right -->
    <path d="M 354,741.5 L 596,741.5" stroke-width="19" stroke-linecap="square" />
    <path d="M 622,741.5 L 669,741.5" stroke-width="19" stroke-linecap="square" />
    <path d="M 354,741.5 L 348,775" stroke-width="19" stroke-linecap="square" />
    <path d="M 669,741.5 L 675,775" stroke-width="19" stroke-linecap="square" />

    <!-- Bottom tier rounded bar -->
    <path d="M 352,775 L 671,775" stroke-width="19" stroke-linecap="round" />

    <!-- Lower Stem Traces -->
    <!-- Trace 1 (Left): Ring pad (443, 533) -> 45° jog to (468, 558) -> vertical to base -->
    <path d="M 451,541 L 468,558 L 468,700" stroke-width="19" stroke-linecap="square" stroke-linejoin="round" />

    <!-- Trace 2 (Center-Left): from (511.5, 575) down to (511.5, 608) -> 45° jog to (494, 626) -> vertical to base -->
    <path d="M 511.5,575 L 511.5,608 L 494,626 L 494,700" stroke-width="19" stroke-linecap="square" stroke-linejoin="round" />

    <!-- Trace 3 (Center-Right): from (532, 626) vertical to base -->
    <path d="M 532,626 L 532,700" stroke-width="19" stroke-linecap="square" />

    <!-- Trace 4 (Right): Ring pad (562, 581) vertical to base -->
    <path d="M 562,597 L 562,700" stroke-width="19" stroke-linecap="square" />

    <!-- Upper Central Stem (stops with intentional air-gap above floating diamond) -->
    <line x1="511.5" y1="256" x2="511.5" y2="352" stroke-width="19" stroke-linecap="square" />

    <!-- Upper-Left Circuitry -->
    <line x1="461" y1="298" x2="456" y2="368" stroke-width="19" stroke-linecap="square" />
    <path d="M 445,287 L 405,287 L 375,317 L 358,317" stroke-width="19" stroke-linecap="square" stroke-linejoin="round" />
    <line x1="375" y1="317" x2="405" y2="347" stroke-width="19" stroke-linecap="square" />
    <line x1="324" y1="347" x2="405" y2="347" stroke-width="19" stroke-linecap="square" />

    <!-- Upper-Right Circuitry -->
    <line x1="562" y1="298" x2="562" y2="414" stroke-width="19" stroke-linecap="square" />
    <path d="M 578,287 L 618,287 L 648,317 L 665,317" stroke-width="19" stroke-linecap="square" stroke-linejoin="round" />
    <line x1="648" y1="317" x2="618" y2="347" stroke-width="19" stroke-linecap="square" />
    <line x1="618" y1="347" x2="699" y2="347" stroke-width="19" stroke-linecap="square" />

    <!-- Scale Pans Cords -->
    <path d="M 299,374 L 218,548 M 299,374 L 380,548" stroke-width="19" stroke-linecap="round" />
    <path d="M 724,374 L 643,548 M 724,374 L 805,548" stroke-width="19" stroke-linecap="round" />

    <!-- Left Scale Dish -->
    <line x1="184" y1="578" x2="414" y2="578" stroke-width="19" stroke-linecap="square" />
    <path d="M 184,578 L 299,642 L 414,578" stroke-width="19" stroke-linejoin="miter" stroke-miterlimit="4" stroke-linecap="square" />

    <!-- Right Scale Dish -->
    <line x1="609" y1="578" x2="839" y2="578" stroke-width="19" stroke-linecap="square" />
    <path d="M 609,578 L 724,642 L 839,578" stroke-width="19" stroke-linejoin="miter" stroke-miterlimit="4" stroke-linecap="square" />
  </g>

  <!-- Circuit Ring Terminals / Pads (Hollow) -->
  <g fill="none" stroke="${color}">
    <!-- Top terminal -->
    <circle cx="511.5" cy="229" r="20" stroke-width="14" />
    <!-- Left pan hook -->
    <circle cx="299" cy="348" r="20" stroke-width="14" />
    <!-- Right pan hook -->
    <circle cx="724" cy="348" r="20" stroke-width="14" />

    <!-- Upper branch pads -->
    <circle cx="461" cy="287" r="15" stroke-width="10" />
    <circle cx="456" cy="382" r="15" stroke-width="10" />
    <circle cx="346" cy="317" r="15" stroke-width="10" />
    <circle cx="562" cy="287" r="15" stroke-width="10" />
    <circle cx="677" cy="317" r="15" stroke-width="10" />

    <!-- Lower stem pads -->
    <circle cx="443" cy="533" r="15" stroke-width="10" />
    <circle cx="562" cy="581" r="15" stroke-width="10" />
  </g>

  <!-- Central Floating AI Neural Graph (Solid Discs & Links) -->
  <g>
    <!-- Outer Diamond Edges -->
    <path d="M 511.5,386 L 590,463.5 L 511.5,541 L 433,463.5 Z" fill="none" stroke="${color}" stroke-width="20" stroke-linejoin="miter" stroke-miterlimit="4" />
    <!-- Cross Links -->
    <line x1="433" y1="463.5" x2="590" y2="463.5" stroke="${color}" stroke-width="20" />
    <line x1="511.5" y1="386" x2="511.5" y2="541" stroke="${color}" stroke-width="20" />

    <!-- 5 Solid AI Nodes -->
    <circle cx="511.5" cy="463.5" r="23" fill="${color}" />
    <circle cx="511.5" cy="386" r="22" fill="${color}" />
    <circle cx="511.5" cy="541" r="22" fill="${color}" />
    <circle cx="433" cy="463.5" r="22" fill="${color}" />
    <circle cx="590" cy="463.5" r="22" fill="${color}" />
  </g>
  `;
}

// 1. Icon Only Mark SVG
function getIconOnlySVG({ color = GOLD, bg = null } = {}) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">
  ${bg ? `<rect width="1024" height="1024" fill="${bg}"/>` : ''}
  <g id="jurisai-icon-mark">
    ${getIconPaths(color)}
  </g>
</svg>`;
}

// 2. Circular App Icon SVG (Brand Guide: Gold circle with white mark)
function getCircleAppIconSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">
  <circle cx="512" cy="512" r="512" fill="${GOLD}" />
  <g transform="translate(102.4, 102.4) scale(0.8)">
    ${getIconPaths(WHITE)}
  </g>
</svg>`;
}

// 3. Horizontal Master Logo SVG
function getHorizontalLogoSVG(isDark = false) {
  const textColor1 = isDark ? WHITE : NAVY;
  const textColor2 = GOLD;
  const subColor = isDark ? SUBTITLE_DARK : NAVY;
  const iconColor = GOLD;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1060 436" width="1060" height="436">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&amp;display=swap');
      .brand-title {
        font-family: 'Montserrat', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        font-weight: 700;
        font-size: 145px;
      }
      .brand-subtitle {
        font-family: 'Montserrat', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        font-weight: 600;
        font-size: 27px;
        letter-spacing: 2.15px;
      }
    </style>
  </defs>
  ${isDark ? `<rect width="1060" height="436" fill="${DARK_BG}"/>` : ''}
  
  <!-- Scale Icon Mark -->
  <g transform="translate(60, 48) scale(0.589) translate(-184, -209)">
    ${getIconPaths(iconColor)}
  </g>

  <!-- Typography (Justified Alignment) -->
  <text x="498" y="244" class="brand-title">
    <tspan fill="${textColor1}">Juris</tspan><tspan fill="${textColor2}">AI</tspan>
  </text>
  <text x="500" y="294" class="brand-subtitle" fill="${subColor}">
    INTELLIGENT CASE PROCESSING
  </text>
</svg>`;
}

// 4. Vertical / Stacked Logo SVG
function getVerticalLogoSVG(isDark = false) {
  const textColor1 = isDark ? WHITE : NAVY;
  const textColor2 = GOLD;
  const subColor = isDark ? SUBTITLE_DARK : NAVY;
  const iconColor = GOLD;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 864" width="800" height="864">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&amp;display=swap');
      .brand-title-vert {
        font-family: 'Montserrat', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        font-weight: 700;
        font-size: 130px;
        text-anchor: middle;
      }
      .brand-subtitle-vert {
        font-family: 'Montserrat', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        font-weight: 600;
        font-size: 24px;
        letter-spacing: 2px;
        text-anchor: middle;
      }
    </style>
  </defs>
  ${isDark ? `<rect width="800" height="864" fill="${DARK_BG}"/>` : ''}

  <!-- Icon Centered -->
  <g transform="translate(400, 55) translate(-511.5, -209)">
    ${getIconPaths(iconColor)}
  </g>

  <!-- Typography Centered -->
  <text x="400" y="760" class="brand-title-vert">
    <tspan fill="${textColor1}">Juris</tspan><tspan fill="${textColor2}">AI</tspan>
  </text>
  <text x="400" y="815" class="brand-subtitle-vert" fill="${subColor}">
    INTELLIGENT CASE PROCESSING
  </text>
</svg>`;
}

/**
 * Creates multi-size Windows .ico container
 */
function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6 + count * 16;
  let totalSize = headerSize;
  for (const b of pngBuffers) totalSize += b.data.length;

  const out = Buffer.alloc(totalSize);
  out.writeUInt16LE(0, 0);
  out.writeUInt16LE(1, 2);
  out.writeUInt16LE(count, 4);

  let currentOffset = headerSize;
  for (let i = 0; i < count; i++) {
    const { width, height, data } = pngBuffers[i];
    const entryOffset = 6 + i * 16;
    out.writeUInt8(width >= 256 ? 0 : width, entryOffset);
    out.writeUInt8(height >= 256 ? 0 : height, entryOffset + 1);
    out.writeUInt8(0, entryOffset + 2);
    out.writeUInt8(0, entryOffset + 3);
    out.writeUInt16LE(1, entryOffset + 4);
    out.writeUInt16LE(32, entryOffset + 6);
    out.writeUInt32LE(data.length, entryOffset + 8);
    out.writeUInt32LE(currentOffset, entryOffset + 12);

    data.copy(out, currentOffset);
    currentOffset += data.length;
  }
  return out;
}

async function buildAllBrandAssets() {
  const brandDir = 'E:/JurisAI/public/brand';
  if (!fs.existsSync(brandDir)) fs.mkdirSync(brandDir, { recursive: true });

  console.log('Rendering JurisAI Master Brand Assets...');

  // ================= 1. ICON ONLY MARKS =================
  const iconLightSvg = getIconOnlySVG({ color: GOLD });
  fs.writeFileSync(path.join(brandDir, 'jurisai-icon-mark.svg'), iconLightSvg);
  await sharp(Buffer.from(iconLightSvg)).png().toFile(path.join(brandDir, 'jurisai-icon-mark.png'));
  await sharp(Buffer.from(iconLightSvg)).resize(2048, 2048).png().toFile(path.join(brandDir, 'jurisai-icon-mark-hd.png'));
  await sharp(Buffer.from(iconLightSvg)).resize(4096, 4096).png().toFile(path.join(brandDir, 'jurisai-icon-mark-4k.png'));

  const iconDarkSvg = getIconOnlySVG({ color: GOLD, bg: DARK_BG });
  fs.writeFileSync(path.join(brandDir, 'jurisai-icon-mark-dark.svg'), iconDarkSvg);
  await sharp(Buffer.from(iconDarkSvg)).png().toFile(path.join(brandDir, 'jurisai-icon-mark-dark.png'));
  await sharp(Buffer.from(iconDarkSvg)).resize(2048, 2048).png().toFile(path.join(brandDir, 'jurisai-icon-mark-dark-hd.png'));

  // App Icon Circle
  const circleSvg = getCircleAppIconSVG();
  fs.writeFileSync(path.join(brandDir, 'jurisai-app-icon-circle.svg'), circleSvg);
  await sharp(Buffer.from(circleSvg)).resize(512, 512).png().toFile(path.join(brandDir, 'jurisai-app-icon-circle.png'));

  // Favicons
  await sharp(Buffer.from(circleSvg)).resize(180, 180).png().toFile(path.join(brandDir, 'apple-touch-icon.png'));
  await sharp(Buffer.from(circleSvg)).resize(64, 64).png().toFile(path.join(brandDir, 'favicon-64x64.png'));
  await sharp(Buffer.from(circleSvg)).resize(32, 32).png().toFile(path.join(brandDir, 'favicon-32x32.png'));
  await sharp(Buffer.from(circleSvg)).resize(16, 16).png().toFile(path.join(brandDir, 'favicon-16x16.png'));

  // Multi-resolution ICO
  const icoBuffers = [];
  for (const s of [16, 32, 48]) {
    const data = await sharp(Buffer.from(circleSvg)).resize(s, s).png().toBuffer();
    icoBuffers.push({ width: s, height: s, data });
  }
  const icoData = createIco(icoBuffers);
  fs.writeFileSync(path.join(brandDir, 'favicon.ico'), icoData);
  fs.writeFileSync('E:/JurisAI/public/favicon.ico', icoData);

  // ================= 2. HORIZONTAL LOGO =================
  const horizLightSvg = getHorizontalLogoSVG(false);
  fs.writeFileSync(path.join(brandDir, 'jurisai-logo-horizontal.svg'), horizLightSvg);
  await sharp(Buffer.from(horizLightSvg)).png().toFile(path.join(brandDir, 'jurisai-logo-horizontal.png'));
  await sharp(Buffer.from(horizLightSvg)).resize(2120, 872).png().toFile(path.join(brandDir, 'jurisai-logo-horizontal-hd.png'));
  await sharp(Buffer.from(horizLightSvg)).resize(4240, 1744).png().toFile(path.join(brandDir, 'jurisai-logo-horizontal-4k.png'));

  const horizDarkSvg = getHorizontalLogoSVG(true);
  fs.writeFileSync(path.join(brandDir, 'jurisai-logo-horizontal-dark.svg'), horizDarkSvg);
  await sharp(Buffer.from(horizDarkSvg)).png().toFile(path.join(brandDir, 'jurisai-logo-horizontal-dark.png'));
  await sharp(Buffer.from(horizDarkSvg)).resize(2120, 872).png().toFile(path.join(brandDir, 'jurisai-logo-horizontal-dark-hd.png'));
  await sharp(Buffer.from(horizDarkSvg)).resize(4240, 1744).png().toFile(path.join(brandDir, 'jurisai-logo-horizontal-dark-4k.png'));

  // ================= 3. VERTICAL LOGO =================
  const vertLightSvg = getVerticalLogoSVG(false);
  fs.writeFileSync(path.join(brandDir, 'jurisai-logo-vertical.svg'), vertLightSvg);
  await sharp(Buffer.from(vertLightSvg)).png().toFile(path.join(brandDir, 'jurisai-logo-vertical.png'));
  await sharp(Buffer.from(vertLightSvg)).resize(1600, 1728).png().toFile(path.join(brandDir, 'jurisai-logo-vertical-hd.png'));
  await sharp(Buffer.from(vertLightSvg)).resize(3200, 3456).png().toFile(path.join(brandDir, 'jurisai-logo-vertical-4k.png'));

  const vertDarkSvg = getVerticalLogoSVG(true);
  fs.writeFileSync(path.join(brandDir, 'jurisai-logo-vertical-dark.svg'), vertDarkSvg);
  await sharp(Buffer.from(vertDarkSvg)).png().toFile(path.join(brandDir, 'jurisai-logo-vertical-dark.png'));
  await sharp(Buffer.from(vertDarkSvg)).resize(1600, 1728).png().toFile(path.join(brandDir, 'jurisai-logo-vertical-dark-hd.png'));

  // ================= 4. NEXT.JS APP ICONS =================
  const nextAppIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="32" height="32">
  <g id="jurisai-icon">
    ${getIconPaths(GOLD)}
  </g>
</svg>`;
  fs.writeFileSync('E:/JurisAI/src/app/icon.svg', nextAppIconSvg);

  // Copy app-touch-icon, favicons to public root
  fs.copyFileSync(path.join(brandDir, 'apple-touch-icon.png'), 'E:/JurisAI/public/apple-touch-icon.png');
  fs.copyFileSync(path.join(brandDir, 'favicon-32x32.png'), 'E:/JurisAI/public/favicon-32x32.png');
  fs.copyFileSync(path.join(brandDir, 'favicon-16x16.png'), 'E:/JurisAI/public/favicon-16x16.png');

  console.log('Finished generating all JurisAI master brand assets!');
}

buildAllBrandAssets();

