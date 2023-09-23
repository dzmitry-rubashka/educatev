const map = document.getElementById("map-container");

const navigationPlusButton = document.getElementById("npb");
const navigationMinusButton = document.getElementById("nmb");
const navigationResetButton = document.getElementById("nrb");

const increaseMapSize = () => {
  const currentWidth = parseFloat(map.style.width) || 100;
  map.style.width = currentWidth + 20 + "%";
};

const decreaseMapSize = () => {
  const currentWidth = parseFloat(map.style.width) || 100;
  if (currentWidth !== 100) {
    map.style.width = currentWidth - 20 + "%";
  }
};

const resetMapSize = () => {
  map.style.width = "100%";
};

navigationPlusButton.addEventListener("click", increaseMapSize);
navigationMinusButton.addEventListener("click", decreaseMapSize);
navigationResetButton.addEventListener("click", resetMapSize);

const markersContainer = document.getElementById("markers-container");

const createMarker = (x, y, imageSrc) => {
  const marker = document.createElement("img");
  marker.classList.add("marker");
  marker.style.left = x + "%";
  marker.style.top = y + "%";
  marker.src = imageSrc;
  markersContainer.appendChild(marker);
};

const knyazevMarkerSrc = "./assets/icons/marker-icon-green.png";
const luknitskiyMarkerSrc = "./assets/icons/marker-icon-orange.png";
const polzikovaRubetsMarkerSrc = "./assets/icons/marker-icon-violet.png";
const chekrizovMarkerSrc = "./assets/icons/marker-icon-red.png";

const personsMarkers = [
  {
    x: 25.6,
    y: 25.73,
    person: "knyazev",
    date: "september1941",
    description: "description1",
    marker: knyazevMarkerSrc,
  },
  {
    x: 34,
    y: 24,
    person: "knyazev",
    date: "october1941",
    description: "description2",
    marker: knyazevMarkerSrc,
  },
  {
    x: 36,
    y: 36,
    person: "knyazev",
    date: "november1941",
    description: "description3",
    marker: knyazevMarkerSrc,
  },
  {
    x: 33.55,
    y: 33.55,
    person: "knyazev",
    date: "december1941",
    description: "description4",
    marker: knyazevMarkerSrc,
  },
  {
    x: 27,
    y: 23,
    person: "luknitskiy",
    date: "september1941",
    description: "description5",
    marker: luknitskiyMarkerSrc,
  },
  {
    x: 23,
    y: 33,
    person: "luknitskiy",
    date: "october1941",
    description: "description6",
    marker: luknitskiyMarkerSrc,
  },
  {
    x: 31,
    y: 31,
    person: "luknitskiy",
    date: "november1941",
    description: "description7",
    marker: luknitskiyMarkerSrc,
  },
  {
    x: 34,
    y: 34,
    person: "luknitskiy",
    date: "december1941",
    description: "description8",
    marker: luknitskiyMarkerSrc,
  },
  {
    x: 35,
    y: 40,
    person: "polzikovaRubets",
    date: "september1941",
    description: "description9",
    marker: polzikovaRubetsMarkerSrc,
  },
  {
    x: 7,
    y: 33,
    person: "polzikovaRubets",
    date: "october1941",
    description: "description10",
    marker: polzikovaRubetsMarkerSrc,
  },
  {
    x: 7,
    y: 23,
    person: "polzikovaRubets",
    date: "november1941",
    description: "description11",
    marker: polzikovaRubetsMarkerSrc,
  },
  {
    x: 15,
    y: 42,
    person: "polzikovaRubets",
    date: "december1941",
    description: "description12",
    marker: polzikovaRubetsMarkerSrc,
  },
  {
    x: 40,
    y: 40,
    person: "chekrizov",
    date: "september1941",
    description: "description13",
    marker: chekrizovMarkerSrc,
  },
  {
    x: 59,
    y: 33,
    person: "chekrizov",
    date: "october1941",
    description: "description14",
    marker: chekrizovMarkerSrc,
  },
  {
    x: 78,
    y: 34,
    person: "chekrizov",
    date: "november1941",
    description: "description15",
    marker: chekrizovMarkerSrc,
  },
  {
    x: 69.8,
    y: 27,
    person: "chekrizov",
    date: "december1941",
    description: "description16",
    marker: chekrizovMarkerSrc,
  },
];

personsMarkers.forEach((marker) => {
  createMarker(marker.x, marker.y, marker.marker);
});

const onClickToggleButton = (id) => {
  let selectOption;
  id === "toggleButtonPersons"
    ? (selectOption = document.getElementById("selectOptionPersons"))
    : (selectOption = document.getElementById("selectOptionDates"));
  const isListDisplayed = selectOption.style.display === "block";
  isListDisplayed
    ? (selectOption.style.display = "none")
    : (selectOption.style.display = "block");
};

const toggleButtonPersons = document.getElementById("toggleButtonPersons");
const toggleButtonDates = document.getElementById("toggleButtonDates");

const selectOptionsPersons = document.querySelectorAll(
  "#selectOptionPersons li"
);
const selectOptionsDates = document.querySelectorAll("#selectOptionDates li");

selectOptionsPersons.forEach((option) => {
  option.addEventListener("click", () => {
    toggleButtonPersons.textContent = option.textContent;
  });
});

selectOptionsDates.forEach((option) => {
  option.addEventListener("click", () => {
    toggleButtonDates.textContent = option.textContent;
  });
});

const onClickCloseButton = (id) => {
  let closeButton;
  let selectOption;
  id === "closeButtonPersons"
    ? (closeButton = document.getElementById("closeButtonPersons"))
    : (closeButton = document.getElementById("closeButtonDates"));
  id === "closeButtonDates"
    ? (selectOption = document.getElementById("selectOptionDates"))
    : (selectOption = document.getElementById("selectOptionPersons"));
  const isListDisplayed = selectOption.style.display === "block";
  isListDisplayed ? (selectOption.style.display = "none") : null;
};

const onSelectPerson = (id) => {
  const allPersonsItems = document.querySelectorAll("#selectOptionPersons li");
  allPersonsItems.forEach((item) => {
    item.id === id
      ? item.classList.add("active")
      : item.classList.remove("active");
  });
};

const onSelectDate = (id) => {
  const allDatesItems = document.querySelectorAll("#selectOptionDates li");
  allDatesItems.forEach((item) => {
    item.id === id
      ? item.classList.add("active")
      : item.classList.remove("active");
  });
};

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
