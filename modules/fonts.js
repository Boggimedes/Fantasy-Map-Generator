"use strict";

const fonts = [
  {
    family: "Arial",
    websafe: true,
    declared: false
  },
  {
    family: "Times New Roman",
    websafe: true
  },
  {
    family: "Georgia",
    websafe: true
  },
  {
    family: "Lucida Sans Unicode",
    websafe: true
  },
  {
    family: "Courier New",
    websafe: true
  },
  {
    family: "Verdana",
    websafe: true
  },
  {
    family: "Impact",
    websafe: true
  },
  {
    family: "Comic Sans MS",
    websafe: true
  },
  {
    family: "Almendra SC",
    url: "https://fonts.gstatic.com/s/almendrasc/v13/Iure6Yx284eebowr7hbyTaZOrLQ.woff2",
    range: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
  },
  {
    family: "Amatic SC",
    url: "https://fonts.gstatic.com/s/amaticsc/v11/TUZ3zwprpvBS1izr_vOMscGKfrUC.woff2",
    range: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
  },
  {
    family: "Architects Daughter",
    url: "https://fonts.gstatic.com/s/architectsdaughter/v8/RXTgOOQ9AAtaVOHxx0IUBM3t7GjCYufj5TXV5VnA2p8.woff2",
    range: "U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215"
  },
  {
    family: "Bitter",
    url: "https://fonts.gstatic.com/s/bitter/v12/zfs6I-5mjWQ3nxqccMoL2A.woff2",
    range: "U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215"
  },
  {
    family: "Caesar Dressing",
    url: "https://fonts.gstatic.com/s/caesardressing/v6/yYLx0hLa3vawqtwdswbotmK4vrRHdrz7.woff2",
    range: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
  },
  {
    family: "Cinzel",
    url: "https://fonts.gstatic.com/s/cinzel/v7/zOdksD_UUTk1LJF9z4tURA.woff2",
    range: "U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215"
  },
  {
    family: "Dancing Script",
    url: "https://fonts.gstatic.com/s/dancingscript/v9/KGBfwabt0ZRLA5W1ywjowUHdOuSHeh0r6jGTOGdAKHA.woff2",
    range: "U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215"
  },
  {
    family: "Fredericka the Great",
    url: "https://fonts.gstatic.com/s/frederickathegreat/v6/9Bt33CxNwt7aOctW2xjbCstzwVKsIBVV--Sjxbc.woff2",
    range: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
  },
  {
    family: "Gloria Hallelujah",
    url: "https://fonts.gstatic.com/s/gloriahallelujah/v9/CA1k7SlXcY5kvI81M_R28cNDay8z-hHR7F16xrcXsJw.woff2",
    range: "U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215"
  },
  {
    family: "Great Vibes",
    url: "https://fonts.gstatic.com/s/greatvibes/v5/6q1c0ofG6NKsEhAc2eh-3Y4P5ICox8Kq3LLUNMylGO4.woff2",
    range: "U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215"
  },
  {
    family: "IM Fell English",
    url: "https://fonts.gstatic.com/s/imfellenglish/v7/xwIisCqGFi8pff-oa9uSVAkYLEKE0CJQa8tfZYc_plY.woff2",
    range: "U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215"
  },
  {
    family: "Kaushan Script",
    url: "https://fonts.gstatic.com/s/kaushanscript/v6/qx1LSqts-NtiKcLw4N03IEd0sm1ffa_JvZxsF_BEwQk.woff2",
    range: "U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215"
  },
  {
    family: "MedievalSharp",
    url: "https://fonts.gstatic.com/s/medievalsharp/v9/EvOJzAlL3oU5AQl2mP5KdgptMqhwMg.woff2",
    range: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
  },
  {
    family: "Metamorphous",
    url: "https://fonts.gstatic.com/s/metamorphous/v7/Wnz8HA03aAXcC39ZEX5y133EOyqs.woff2",
    range: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
  },
  {
    family: "Montez",
    url: "https://fonts.gstatic.com/s/montez/v8/aq8el3-0osHIcFK6bXAPkw.woff2",
    range: "U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215"
  },
  {
    family: "Nova Script",
    url: "https://fonts.gstatic.com/s/novascript/v10/7Au7p_IpkSWSTWaFWkumvlQKGFw.woff2",
    range: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
  },
  {
    family: "Orbitron",
    url: "https://fonts.gstatic.com/s/orbitron/v9/HmnHiRzvcnQr8CjBje6GQvesZW2xOQ-xsNqO47m55DA.woff2",
    range: "U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215"
  },
  {
    family: "Satisfy",
    url: "https://fonts.gstatic.com/s/satisfy/v8/2OzALGYfHwQjkPYWELy-cw.woff2",
    range: "U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215"
  },
  {
    family: "Shadows Into Light",
    url: "https://fonts.gstatic.com/s/shadowsintolight/v7/clhLqOv7MXn459PTh0gXYFK2TSYBz0eNcHnp4YqE4Ts.woff2",
    range: "U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215"
  },
  {
    family: "Uncial Antiqua",
    url: "https://fonts.gstatic.com/s/uncialantiqua/v5/N0bM2S5WOex4OUbESzoESK-i-MfWQZQ.woff2",
    range: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
  },
  {
    family: "Underdog",
    url: "https://fonts.gstatic.com/s/underdog/v6/CHygV-jCElj7diMroWSlWV8.woff2",
    range: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
  },
  {
    family: "Yellowtail",
    url: "https://fonts.gstatic.com/s/yellowtail/v8/GcIHC9QEwVkrA19LJU1qlPk_vArhqVIZ0nv9q090hN8.woff2",
    range: "U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215"
  }
];

function generateFontFace({family, url, range}) {
  return `@font-face {
  font-family: '${family}';
  src: url('${url}');
  unicode-range: ${range};
}`;
}

function declareFont(font) {
  if (font.declared) return;
  const fontFace = generateFontFace(font);

  const style = document.createElement("style");
  style.appendChild(document.createTextNode(fontFace));
  document.head.appendChild(style);

  font.declared = true;
  addFontOption(font.family);
}

function declareDefaultFonts() {
  const fontsToDeclare = fonts.filter(font => !font.websafe && !font.declared);
  if (!fontsToDeclare.length) return;
  const fontFaceDeclarations = fontsToDeclare.map(font => generateFontFace(font)).join("\n\n");

  const style = document.createElement("style");
  style.appendChild(document.createTextNode(fontFaceDeclarations));
  document.head.appendChild(style);

  fontsToDeclare.forEach(font => {
    font.declared = true;
    addFontOption(font.family);
  });
}

function getUsedFonts(svg) {
  const usedFontFamilies = new Set();

  const labelGroups = svg.querySelectorAll("#labels g");
  for (const labelGroup of labelGroups) {
    const font = labelGroup.getAttribute("font-family");
    if (font) usedFontFamilies.add(font);
  }

  const legend = svg.querySelector("#legend");
  const legendFont = legend?.getAttribute("font-family");
  if (legendFont) usedFontFamilies.add(legendFont);

  const usedFonts = fonts.filter(font => usedFontFamilies.has(font.family));
  return usedFonts;
}

function declareUsedFonts() {
  const fontsInUse = getUsedFonts(svg.node());
  const fontsToDeclare = fontsInUse.filter(font => !font.websafe);

  fontsToDeclare.forEach(font => declareFont(font));
}

function addFontOption(family) {
  const option = document.createElement("option");
  option.value = family;
  option.innerText = family;
  option.style.fontFamily = family;
  document.getElementById("styleSelectFont").add(option);
}

addWebsafeFontOptions(); // execute once on load
function addWebsafeFontOptions() {
  const websafeFonts = fonts.filter(font => font.websafe);
  websafeFonts.forEach(font => addFontOption(font.family));
}

function loadUsedFonts() {
  const fontsInUse = getUsedFonts(svg.node());
  const fontsToLoad = fontsInUse.filter(font => !fonts.includes(font));
  if (fontsToLoad?.length) {
    const url = "https://fonts.googleapis.com/css?family=" + fontsToLoad.join("|");
    addFonts(url);
  }
}

async function addFonts(url) {
  $("head").append('<link rel="stylesheet" type="text/css" href="' + url + '">');
  try {
    const resp = await fetch(url);
    const text = await resp.text();
    let s = document.createElement("style");
    s.innerHTML = text;
    document.head.appendChild(s);
    let styleSheet = Array.prototype.filter.call(document.styleSheets, sS => sS.ownerNode === s)[0];
    let FontRule = rule_1 => {
      let family = rule_1.style.getPropertyValue("font-family");
      let font = family.replace(/['"]+/g, "").replace(/ /g, "+");
      let weight = rule_1.style.getPropertyValue("font-weight");
      if (weight && weight !== "400") font += ":" + weight;
      if (fonts.indexOf(font) == -1) {
        fonts.push(font);
        fetched++;
      }
    };
    let fetched = 0;
    for (let r of styleSheet.cssRules) {
      FontRule(r);
    }
    document.head.removeChild(s);
    return fetched;
  } catch (err) {
    return ERROR && console.error(err);
  }
}

function convertFontToDataURI(url) {
  if (!url) return Promise.resolve();
  return fetch(url)
    .then(resp => resp.text())
    .then(text => {
      const style = document.createElement("style");
      style.innerHTML = text;
      document.head.appendChild(style);

      const styleSheet = document.styleSheets.find(sheet => sheet.ownerNode === style);

      const FontRule = rule => {
        const src = rule.style.getPropertyValue("src");
        const url = src ? src.split("url(")[1].split(")")[0] : "";
        return {rule, src, url: url.substring(url.length - 1, 1)};
      };
      const fontProms = [];

      for (const rule of styleSheet.cssRules) {
        let fR = FontRule(rule);
        if (!fR.url) continue;

        fontProms.push(
          fetch(fR.url)
            .then(resp => resp.blob())
            .then(blob => {
              return new Promise(resolve => {
                let f = new FileReader();
                f.onload = e => resolve(f.result);
                f.readAsDataURL(blob);
              });
            })
            .then(dataURL => fR.rule.cssText.replace(fR.url, dataURL))
        );
      }

      document.head.removeChild(style); // clean up
      return Promise.all(fontProms); // wait for all this has been done
    });
}

function fetchFonts(url) {
  return new Promise((resolve, reject) => {
    if (url === "") return tip("Use a direct link to any @font-face declaration or just font name to fetch from Google Fonts");

    if (url.indexOf("http") === -1) {
      url = url.replace(url.charAt(0), url.charAt(0).toUpperCase()).split(" ").join("+");
      url = "https://fonts.googleapis.com/css?family=" + url;
    }

    addFonts(url).then(fetched => {
      if (fetched === undefined) return tip("Cannot fetch font for this value!", false, "error");
      if (fetched === 0) return tip("Already in the fonts list!", false, "error");

      // addFontOption();
      if (fetched === 1) {
        tip("Font " + fonts[fonts.length - 1] + " is fetched");
      } else if (fetched > 1) {
        tip(fetched + " fonts are added to the list");
      }
      resolve(fetched);
    });
  });
}
