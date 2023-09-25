const map = document.getElementById("map-container");

const navigationPlusButton = document.getElementById("npb");
const navigationMinusButton = document.getElementById("nmb");
const navigationResetButton = document.getElementById("nrb");

const markersContainer = document.getElementById("markers-container");

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
    description:
      "Семьдесят девятый день войны. Понедельник. Когда я возвращался со службы, на отрей день войны началась бомбежка Ленинграда. Впереди, пожалуй, предстоит много еще таких тревожных ночей. Чашу испытаний нужно будет выпить до дна, трудную чашу.",
    imageSrc: "./assets/images/knyazev/knyazev1.jpg",
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
    imageSrc: "./assets/images/luknitskiy/luknitskiy1.jpg",
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
    imageSrc: "./assets/images/polzikovaRubets/polzikovaRubets1.jpg",
    marker: polzikovaRubetsMarkerSrc,
  },
  {
    x: 7,
    y: 33,
    person: "polzikovaRubets",
    date: "october1941",
    description:
      "ый день редстоит много еще таких тревожных ночей. Чашу испытаний нужно будет выпить до дна, трудную чашу.",
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
    description:
      "Семьдесят девятый ой Невы — чло только череоста пк, на семьдесят девятый день войны началась бомбежка Ленинграда. Впереди, пожалуй, предстоит много еще таких тревожных ночей. Чашу испытаний нужно будет выпить до дна, трудную чашу.",
    imageSrc: "./assets/images/chekrizov/chekrizov1.jpg",
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
    description: "ыежнойспытаний нужно будет выпить до дна, трудную чашу.",
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

const infoContainer = document.getElementById("info-container");

let selectedPerson = null;
let selectedDate = null;

const increaseMapSize = () => {
  const currentWidth = parseFloat(map.style.width) || 100;
  map.style.width = currentWidth + 20 + "%";

  const duration = 500;
  const startY = window.scrollY;
  const startX = window.scrollX;
  const startTime = performance.now();

  const scrollStep = (timestamp) => {
    const progress = Math.min((timestamp - startTime) / duration, 1);
    window.scrollTo(startX + startX * 0.1, startY + startY * 0.1);
    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    }
  };

  requestAnimationFrame(scrollStep);
};

const decreaseMapSize = () => {
  const currentWidth = parseFloat(map.style.width) || 100;
  if (currentWidth !== 100) {
    map.style.width = currentWidth - 20 + "%";

    const duration = 500;
    const startY = window.scrollY;
    const startX = window.scrollX;
    const startTime = performance.now();

    const scrollStep = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      window.scrollTo(startX - startX * 0.1, startY - startY * 0.1);
      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  }
};

const resetMapSize = () => {
  map.style.width = "100%";
};

navigationPlusButton.addEventListener("click", increaseMapSize);
navigationMinusButton.addEventListener("click", decreaseMapSize);
navigationResetButton.addEventListener("click", resetMapSize);

const showInfo = (description, x, y, imageSrc) => {
  const info = document.createElement("div");
  infoContainer.appendChild(info);
  info.innerHTML = description;
  info.classList.add("marker-info");
  if (x <= 100 / 3) {
    info.style.left = x + "%";
  } else if (x > 100 / 3 && x < 100 / (3 / 2)) {
    info.style.left =
      x - ((info.offsetWidth / infoContainer.offsetWidth) * 100) / 2 + "%";
  } else {
    info.style.left =
      x - (info.offsetWidth / infoContainer.offsetWidth) * 100 + "%";
  }
  info.style.top = y + 0.2 + "%";

  if (imageSrc) {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = "Info Image";
    img.style.width = "100%";
    img.style.paddingTop = "5px";
    info.appendChild(img);
  }
};

const hideInfo = () => {
  while (infoContainer.firstChild) {
    infoContainer.removeChild(infoContainer.firstChild);
  }
};

const createMarker = (x, y, markerSrc, description, imageSrc) => {
  const marker = document.createElement("img");
  marker.classList.add("marker");
  marker.style.left = x + "%";
  marker.style.top = y + "%";
  marker.src = markerSrc;

  marker.addEventListener("mouseenter", () => {
    showInfo(description, x, y, imageSrc);
  });

  marker.addEventListener("mouseleave", () => {
    hideInfo();
  });

  markersContainer.appendChild(marker);
};

personsMarkers.forEach((marker) => {
  createMarker(
    marker.x,
    marker.y,
    marker.marker,
    marker.description,
    marker.imageSrc
  );
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
  let selectOption;
  id === "closeButtonPersons"
    ? document.getElementById("closeButtonPersons")
    : document.getElementById("closeButtonDates");
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
      ? (item.classList.add("active"), (selectedPerson = item.id))
      : item.classList.remove("active");
  });
};

const onSelectDate = (id) => {
  const allDatesItems = document.querySelectorAll("#selectOptionDates li");
  allDatesItems.forEach((item) => {
    item.id === id
      ? (item.classList.add("active"), (selectedDate = item.id))
      : item.classList.remove("active");
  });
};

const removeAllMarkers = () => {
  const markers = document.querySelectorAll(".marker");
  markers.forEach((marker) => {
    markersContainer.removeChild(marker);
  });
};

const onClickClearButton = () => {
  const allPersonsItems = document.querySelectorAll("#selectOptionPersons li");
  const allDatesItems = document.querySelectorAll("#selectOptionDates li");
  allPersonsItems.forEach((item) => item.classList.remove("active"));
  allDatesItems.forEach((item) => item.classList.remove("active"));
  document.getElementById("toggleButtonPersons").innerHTML = "Выбрать человека";
  document.getElementById("toggleButtonDates").innerHTML = "Выбрать месяц";
  selectedPerson = null;
  selectedDate = null;

  removeAllMarkers();

  personsMarkers.forEach((marker) => {
    createMarker(
      marker.x,
      marker.y,
      marker.marker,
      marker.description,
      marker.imageSrc
    );
  });
};

const onClickSearchButton = () => {
  if (selectedPerson && selectedDate) {
    removeAllMarkers();
    personsMarkers.filter((marker) => {
      if (marker.person === selectedPerson && marker.date === selectedDate) {
        createMarker(
          marker.x,
          marker.y,
          marker.marker,
          marker.description,
          marker.imageSrc
        );
      }
    });
  } else if (selectedPerson) {
    removeAllMarkers();
    personsMarkers.filter((marker) => {
      if (marker.person === selectedPerson) {
        createMarker(
          marker.x,
          marker.y,
          marker.marker,
          marker.description,
          marker.imageSrc
        );
      }
    });
  } else if (selectedDate) {
    removeAllMarkers();
    personsMarkers.filter((marker) => {
      if (marker.date === selectedDate) {
        createMarker(
          marker.x,
          marker.y,
          marker.marker,
          marker.description,
          marker.imageSrc
        );
      }
    });
  }
};
