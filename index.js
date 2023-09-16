// const map = L.map("map").setView([59.937511, 30.308611], 11.5);

// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 19,
//   attribution: "© OpenStreetMap",
// }).addTo(map);

// const knyazevMarker = new L.Icon({
//   iconUrl: "assets/icons/marker-icon-green.png",
//   iconSize: [20, 33],
//   iconAnchor: [12, 33],
// });

// const luknitskiyMarker = new L.Icon({
//   iconUrl: "assets/icons/marker-icon-orange.png",
//   iconSize: [20, 33],
//   iconAnchor: [12, 33],
// });

// const polzikovaRubetsMarker = new L.Icon({
//   iconUrl: "assets/icons/marker-icon-violet.png",
//   iconSize: [20, 33],
//   iconAnchor: [12, 33],
// });

// const chekrizovMarker = new L.Icon({
//   iconUrl: "assets/icons/marker-icon-red.png",
//   iconSize: [20, 33],
//   iconAnchor: [12, 33],
// });

// const knyazevLayer = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_08_09_1941",
//         person: "knyazev",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.288869, 59.935545],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_09_09_1941",
//         person: "knyazev",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.312691, 59.956819],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_10_09_1941",
//         person: "knyazev",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.30049, 59.922057],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_11_09_1941",
//         person: "knyazev",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.289883, 59.937431],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_13_09_1941",
//         person: "knyazev",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.299036, 59.922853],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_14_09_1941",
//         person: "knyazev",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.304684, 59.942155],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_16_09_1941",
//         person: "knyazev",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.295493, 59.938235],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_17_18_09_1941",
//         person: "knyazev",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.296664, 59.938573],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_19_09_1941",
//         person: "knyazev",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.301376, 59.935596],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_20_09_1941",
//         person: "knyazev",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.396582, 59.946266],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_22_09_1941",
//         person: "knyazev",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.259058, 59.880699],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_24_09_1941",
//         person: "knyazev",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.258268, 59.927653],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_26_09_1941",
//         person: "knyazev",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.302198, 59.936396],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_27_09_1941",
//         person: "knyazev",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.264116, 59.799558],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_28_09_1941",
//         person: "knyazev",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.308585, 59.937499],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_29_09_1941",
//         person: "knyazev",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.299231, 59.939526],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_30_09_1941",
//         person: "knyazev",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.297616, 59.938845],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_01_10_1941",
//         person: "knyazev",
//         date: "october1941",
//       },
//       geometry: {
//         coordinates: [30.306137, 59.934072],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_02_10_1941",
//         person: "knyazev",
//         date: "october1941",
//       },
//       geometry: {
//         coordinates: [30.314864, 59.936354],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_05_10_1941",
//         person: "knyazev",
//         date: "october1941",
//       },
//       geometry: {
//         coordinates: [30.373655, 59.933815],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_07_08_10_1941",
//         person: "knyazev",
//         date: "october1941",
//       },
//       geometry: {
//         coordinates: [30.269653, 59.929398],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_13_10_1941",
//         person: "knyazev",
//         date: "october1941",
//       },
//       geometry: {
//         coordinates: [30.290591, 59.937632],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_15_10_1941",
//         person: "knyazev",
//         date: "october1941",
//       },
//       geometry: {
//         coordinates: [30.307365, 59.944295],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_17_10_1941",
//         person: "knyazev",
//         date: "october1941",
//       },
//       geometry: {
//         coordinates: [30.310392, 59.955105],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_18_10_1941",
//         person: "knyazev",
//         date: "october1941",
//       },
//       geometry: {
//         coordinates: [30.348075, 59.911198],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_24_10_1941",
//         person: "knyazev",
//         date: "october1941",
//       },
//       geometry: {
//         coordinates: [30.30481, 59.930715],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_27_10_1941",
//         person: "knyazev",
//         date: "october1941",
//       },
//       geometry: {
//         coordinates: [30.290312, 59.934053],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_28_10_1941",
//         person: "knyazev",
//         date: "october1941",
//       },
//       geometry: {
//         coordinates: [30.299588, 59.937823],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_29_10_1941",
//         person: "knyazev",
//         date: "october1941",
//       },
//       geometry: {
//         coordinates: [30.292066, 59.931908],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_30_10_1941",
//         person: "knyazev",
//         date: "october1941",
//       },
//       geometry: {
//         coordinates: [30.305018, 59.938208],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_08_11_1941",
//         person: "knyazev",
//         date: "november1941",
//       },
//       geometry: {
//         coordinates: [30.292501, 59.938427],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_09_11_1941",
//         person: "knyazev",
//         date: "november1941",
//       },
//       geometry: {
//         coordinates: [30.295545, 59.939526],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Knyazev_10_11_1941",
//         person: "knyazev",
//         date: "november1941",
//       },
//       geometry: {
//         coordinates: [30.298612, 59.952102],
//         type: "Point",
//       },
//     },
//   ],
// };

// const luknitskiyLayer = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_08_09_1941",
//         person: "luknitskiy",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.339479, 59.908982],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_10_09_1941",
//         person: "luknitskiy",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.348752, 59.946566],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_19_09_1941",
//         person: "luknitskiy",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.327355, 59.948887],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_27_09_1941",
//         person: "luknitskiy",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.314132, 59.965733],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_28_09_1941",
//         person: "luknitskiy",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.326823, 59.937875],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_29_09_1941",
//         person: "luknitskiy",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.337221, 59.938586],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_08_10_1941",
//         person: "luknitskiy",
//         date: "october1941",
//       },
//       geometry: {
//         coordinates: [30.296186, 59.933444],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_09_10_1941",
//         person: "luknitskiy",
//         date: "october1941",
//       },
//       geometry: {
//         coordinates: [30.306078, 59.931965],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_29_10_1941",
//         person: "luknitskiy",
//         date: "october1941",
//       },
//       geometry: {
//         coordinates: [30.328682, 59.946168],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_31_10_1941",
//         person: "luknitskiy",
//         date: "october1941",
//       },
//       geometry: {
//         coordinates: [30.304939, 59.934203],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_$$_11_1941",
//         person: "luknitskiy",
//         date: "november1941",
//       },
//       geometry: {
//         coordinates: [30.322113, 59.942871],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_08_11_1941",
//         person: "luknitskiy",
//         date: "november1941",
//       },
//       geometry: {
//         coordinates: [30.356436, 59.955737],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_10_11_1941",
//         person: "luknitskiy",
//         date: "november1941",
//       },
//       geometry: {
//         coordinates: [30.328145, 59.929189],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_12_11_1941",
//         person: "luknitskiy",
//         date: "november1941",
//       },
//       geometry: {
//         coordinates: [30.343209, 59.933208],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_14_11_1941",
//         person: "luknitskiy",
//         date: "november1941",
//       },
//       geometry: {
//         coordinates: [30.294766, 59.987134],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_15_11_1941",
//         person: "luknitskiy",
//         date: "november1941",
//       },
//       geometry: {
//         coordinates: [30.312848, 59.955701],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_18_11_1941",
//         person: "luknitskiy",
//         date: "november1941",
//       },
//       geometry: {
//         coordinates: [30.319239, 59.964932],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_11_12_1941",
//         person: "luknitskiy",
//         date: "december1941",
//       },
//       geometry: {
//         coordinates: [30.298694, 59.961237],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_12_12_1941",
//         person: "luknitskiy",
//         date: "december1941",
//       },
//       geometry: {
//         coordinates: [30.331631, 59.937266],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_29_12_1941",
//         person: "luknitskiy",
//         date: "december1941",
//       },
//       geometry: {
//         coordinates: [30.299759, 59.963388],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_06_01_1942",
//         person: "luknitskiy",
//         date: "january1942",
//       },
//       geometry: {
//         coordinates: [30.301431, 59.963093],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_08_01_1942",
//         person: "luknitskiy",
//         date: "january1942",
//       },
//       geometry: {
//         coordinates: [30.301236, 59.967417],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_10_01_1942",
//         person: "luknitskiy",
//         date: "january1942",
//       },
//       geometry: {
//         coordinates: [30.300043, 59.963277],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_13_01_1942",
//         person: "luknitskiy",
//         date: "january1942",
//       },
//       geometry: {
//         coordinates: [30.311861, 59.965844],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_15_01_1942",
//         person: "luknitskiy",
//         date: "january1942",
//       },
//       geometry: {
//         coordinates: [30.321582, 59.943389],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_17_01_1942",
//         person: "luknitskiy",
//         date: "january1942",
//       },
//       geometry: {
//         coordinates: [30.258423, 59.882168],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_18_01_1942",
//         person: "luknitskiy",
//         date: "january1942",
//       },
//       geometry: {
//         coordinates: [30.300295, 59.963177],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_26_01_1942",
//         person: "luknitskiy",
//         date: "january1942",
//       },
//       geometry: {
//         coordinates: [30.296867, 59.948465],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_27_01_1942",
//         person: "luknitskiy",
//         date: "january1942",
//       },
//       geometry: {
//         coordinates: [30.299592, 59.963442],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Luknitskiy_31_01_1942",
//         person: "luknitskiy",
//         date: "january1942",
//       },
//       geometry: {
//         coordinates: [30.296342, 59.959606],
//         type: "Point",
//       },
//     },
//   ],
// };

// const polzikovaRubetsLayer = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       properties: {
//         description: "Polzikova-Rubets_11_09_1941",
//         person: "polzikovaRubets",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.343006, 59.934871],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Polzikova-Rubets_14_09_1941",
//         person: "polzikovaRubets",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.32514, 59.935506],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Polzikova-Rubets_18_09_1941",
//         person: "polzikovaRubets",
//         date: "september1941",
//       },
//       geometry: {
//         coordinates: [30.300401, 59.923201],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Polzikova-Rubets_15_10_1941",
//         person: "polzikovaRubets",
//         date: "october1941",
//       },
//       geometry: {
//         coordinates: [30.314607, 59.939825],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Polzikova-Rubets_20_10_1941",
//         person: "polzikovaRubets",
//         date: "october1941",
//       },
//       geometry: {
//         coordinates: [30.307578, 59.935224],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Polzikova-Rubets_29_10_1941",
//         person: "polzikovaRubets",
//         date: "october1941",
//       },
//       geometry: {
//         coordinates: [30.307371, 59.934831],
//         type: "Point",
//       },
//     },
//   ],
// };

// const chekrizovLayer = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       properties: {
//         description: "Chekrizov_26_10_1941",
//         person: "chekrizov",
//         date: "october1941",
//       },
//       geometry: {
//         coordinates: [30.286386, 59.921503],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Chekrizov_21_11_1941",
//         person: "chekrizov",
//         date: "november1941",
//       },
//       geometry: {
//         coordinates: [30.276639, 59.916392],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Chekrizov_05_12_1941",
//         person: "chekrizov",
//         date: "december1941",
//       },
//       geometry: {
//         coordinates: [30.275287, 59.916296],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Chekrizov_23_12_1941",
//         person: "chekrizov",
//         date: "december1941",
//       },
//       geometry: {
//         coordinates: [30.273911, 59.903864],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Chekrizov_31_12_1941",
//         person: "chekrizov",
//         date: "december1941",
//       },
//       geometry: {
//         coordinates: [30.275381, 59.916988],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Chekrizov_07_01_1942",
//         person: "chekrizov",
//         date: "january1942",
//       },
//       geometry: {
//         coordinates: [30.272648, 59.916375],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Chekrizov_12_01_1942",
//         person: "chekrizov",
//         date: "january1942",
//       },
//       geometry: {
//         coordinates: [30.396577, 59.945508],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Chekrizov_15_01_1942",
//         person: "chekrizov",
//         date: "january1942",
//       },
//       geometry: {
//         coordinates: [30.332327, 59.934191],
//         type: "Point",
//       },
//     },
//     {
//       type: "Feature",
//       properties: {
//         description: "Chekrizov_25_01_1942",
//         person: "chekrizov",
//         date: "january1942",
//       },
//       geometry: {
//         coordinates: [30.269463, 59.915917],
//         type: "Point",
//       },
//     },
//   ],
// };

// const personsLayers = [
//   { layer: knyazevLayer, marker: knyazevMarker },
//   { layer: luknitskiyLayer, marker: luknitskiyMarker },
//   { layer: polzikovaRubetsLayer, marker: polzikovaRubetsMarker },
//   { layer: chekrizovLayer, marker: chekrizovMarker },
// ];

// personsLayers.forEach((person) => {
//   new L.GeoJSON(person.layer, {
//     pointToLayer: (feature, latlng) => {
//       return L.marker(latlng, { icon: person.marker }).bindPopup(
//         feature.properties.description
//       );
//     },
//   }).addTo(map);
// });

// const onClickToggleButton = (id) => {
//   let selectOption;
//   id === "toggleButtonPersons"
//     ? (selectOption = document.getElementById("selectOptionPersons"))
//     : (selectOption = document.getElementById("selectOptionDates"));
//   const isListDisplayed = selectOption.style.display === "block";
//   isListDisplayed
//     ? (selectOption.style.display = "none")
//     : (selectOption.style.display = "block");
// };

// const toggleButtonPersons = document.getElementById("toggleButtonPersons");
// const toggleButtonDates = document.getElementById("toggleButtonDates");

// const selectOptionsPersons = document.querySelectorAll(
//   "#selectOptionPersons li"
// );
// const selectOptionsDates = document.querySelectorAll("#selectOptionDates li");

// selectOptionsPersons.forEach((option) => {
//   option.addEventListener("click", () => {
//     toggleButtonPersons.textContent = option.textContent;
//   });
// });

// selectOptionsDates.forEach((option) => {
//   option.addEventListener("click", () => {
//     toggleButtonDates.textContent = option.textContent;
//   });
// });

// const onClickCloseButton = (id) => {
//   let closeButton;
//   let selectOption;
//   id === "closeButtonPersons"
//     ? (closeButton = document.getElementById("closeButtonPersons"))
//     : (closeButton = document.getElementById("closeButtonDates"));
//   id === "closeButtonDates"
//     ? (selectOption = document.getElementById("selectOptionDates"))
//     : (selectOption = document.getElementById("selectOptionPersons"));
//   const isListDisplayed = selectOption.style.display === "block";
//   isListDisplayed ? (selectOption.style.display = "none") : null;
// };

// const onSelectPerson = (id) => {
//   const allPersonsItems = document.querySelectorAll("#selectOptionPersons li");
//   allPersonsItems.forEach((item) => {
//     item.id === id
//       ? item.classList.add("active")
//       : item.classList.remove("active");
//   });
// };

// const onSelectDate = (id) => {
//   const allDatesItems = document.querySelectorAll("#selectOptionDates li");
//   allDatesItems.forEach((item) => {
//     item.id === id
//       ? item.classList.add("active")
//       : item.classList.remove("active");
//   });
// };

// const onClickClearButton = () => {
//   const allPersonsItems = document.querySelectorAll("#selectOptionPersons li");
//   const allDatesItems = document.querySelectorAll("#selectOptionDates li");
//   allPersonsItems.forEach((item) => item.classList.remove("active"));
//   allDatesItems.forEach((item) => item.classList.remove("active"));
//   map.eachLayer((layer) => {
//     !layer._url ? map.removeLayer(layer) : null;
//   });
//   document.getElementById("toggleButtonPersons").innerHTML = "Выбрать человека";
//   document.getElementById("toggleButtonDates").innerHTML = "Выбрать месяц";
//   personsLayers.forEach((person) => {
//     new L.GeoJSON(person.layer, {
//       pointToLayer: (feature, latlng) => {
//         return L.marker(latlng, { icon: person.marker }).bindPopup(
//           feature.properties.description
//         );
//       },
//     }).addTo(map);
//   });
// };

// const onClickSearchButton = () => {
//   let person = null;
//   let date = null;
//   const allPersonsItems = document.querySelectorAll("#selectOptionPersons li");
//   const allDatesItems = document.querySelectorAll("#selectOptionDates li");
//   allPersonsItems.forEach((item) => {
//     item.className === "active" ? (person = item.id) : null;
//   });
//   allDatesItems.forEach((item) => {
//     item.className === "active" ? (date = item.id) : null;
//   });
//   person === null && date === null
//     ? null
//     : person === null
//     ? (map.eachLayer((layer) => {
//         !layer._url ? map.removeLayer(layer) : null;
//       }),
//       personsLayers
//         .map((personLayer) => ({
//           layer: personLayer.layer.features.filter(
//             (item) => item.properties.date === date
//           ),
//           marker: personLayer.marker,
//         }))
//         .forEach((person) => {
//           new L.GeoJSON(person.layer, {
//             pointToLayer: (feature, latlng) =>
//               L.marker(latlng, { icon: person.marker }).bindPopup(
//                 feature.properties.description
//               ),
//           }).addTo(map);
//         }))
//     : null;
//   const addLayerToMap = (layer, marker, date) => {
//     map.eachLayer((layer) => {
//       !layer._url ? map.removeLayer(layer) : null;
//     });
//     const filteredLayer =
//       date === null
//         ? layer
//         : layer.features.filter((item) => item.properties.date === date);
//     new L.GeoJSON(filteredLayer, {
//       pointToLayer: (feature, latlng) => {
//         return L.marker(latlng, { icon: marker }).bindPopup(
//           feature.properties.description
//         );
//       },
//     }).addTo(map);
//   };
//   person === "knyazev"
//     ? addLayerToMap(knyazevLayer, knyazevMarker, date)
//     : person === "luknitskiy"
//     ? addLayerToMap(luknitskiyLayer, luknitskiyMarker, date)
//     : person === "polzikovaRubets"
//     ? addLayerToMap(polzikovaRubetsLayer, polzikovaRubetsMarker, date)
//     : person === "chekrizov"
//     ? addLayerToMap(chekrizovLayer, chekrizovMarker, date)
//     : null;
// };


const map = document.getElementById("map-container");

const plusButton = document.getElementById("nbp");
const minusButton = document.getElementById("nbm");
const resetButton = document.getElementById("nbr");

// Function to increase map size
function increaseMapSize() {
  const currentWidth = parseFloat(map.style.width) || 100;
  map.style.width = currentWidth + 10 + "%";
}

// Function to decrease map size
function decreaseMapSize() {
  const currentWidth = parseFloat(map.style.width) || 100;
  if (currentWidth !== 100) {
    map.style.width = currentWidth - 10 + "%";
  }
}

// Function to reset map size to 100%
function resetMapSize() {
  map.style.width = "100%";
}

// Event listeners for the buttons
plusButton.addEventListener("click", increaseMapSize);
minusButton.addEventListener("click", decreaseMapSize);
resetButton.addEventListener("click", resetMapSize);
//
document.addEventListener("DOMContentLoaded", function () {
  const labelsContainer = document.getElementById("labels-container");

  // Функция для создания метки
  function createLabel(x, y) {
    const label = document.createElement("div");
    label.classList.add("label");
    label.style.left = x + "%";
    label.style.top = y + "%";

    labelsContainer.appendChild(label);
  }

  // Пример добавления меток
  createLabel(5, 10);
  createLabel(5, 50);

  // Добавьте сколько угодно меток
});
