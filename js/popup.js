var map = document.querySelector(".map-link");

var mapPopup = document.querySelector(".modal-map");
var mapPopupClose = mapPopup.querySelector(".modal-close");

map.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapPopupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    } else if (writeUsPopup.classList.contains("modal-show")) {
      writeUsPopup.classList.remove("modal-show");
      writeUsPopup.classList.remove("modal-error");
    } else if (basketPopup.classList.contains("modal-show")) {
      basketPopup.classList.remove("modal-show");
    }
  }
});

var writeUs = document.querySelector(".write-us-link");

var writeUsPopup = document.querySelector(".modal-write-us");
var writeUsPopupClose = writeUsPopup.querySelector(".modal-close");

var form = writeUsPopup.querySelector("form");
var userName = writeUsPopup.querySelector("input[name=user-name]");
var userEmail = writeUsPopup.querySelector("input[name=user-mail]");
var userMessage = writeUsPopup.querySelector("textarea");

var isStorageSupport = true;
var storage = "";

try {
  storageName = localStorage.getItem("userName");
  storageEmail = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-show");

  if (storageName) {
    userName.value = storageName;
    userEmail.focus();
    if (storageEmail) {
      userEmail.value = storageEmail;
      userMessage.focus();
    }
  } else {
    userName.focus();
  }
});

writeUsPopupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-show");
  writeUsPopup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userMessage.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-error");
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userEmail", userEmail.value);
    }
  }
});

// Если удалить код 1-84 строк и оставить код, начинающийся с 88 строки, то попап в каталоге заработает

var basket = document.querySelectorAll(".buy");

var basketPopup = document.querySelector(".modal-basket");
var basketPopupClose = basketPopup.querySelector(".modal-close");

for (var i = 0; i < basket.length; i++) {
  var currentItem = basket[i];
  currentItem.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.add("modal-show");
  });
};

/* Работает так же, как и код строчек 93-99. Какой вариант лучше?

basket.forEach(function (entry) {
  entry.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.add("modal-show");
  });
});

*/

basketPopupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  basketPopup.classList.remove("modal-show");
});


















// РЕШЕНИЕ

/*

var map = document.querySelector(".map-link");

var mapPopup = document.querySelector(".modal-map");
var writeUsPopup = document.querySelector(".modal-write-us");

if (mapPopup && writeUsPopup) {
  var mapPopupClose = mapPopup.querySelector(".modal-close");

  map.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapPopupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      } else if (writeUsPopup.classList.contains("modal-show")) {
        writeUsPopup.classList.remove("modal-show");
        writeUsPopup.classList.remove("modal-error");
      } else if (basketPopup.classList.contains("modal-show")) {
        basketPopup.classList.remove("modal-show");
      }
    }
  });

  var writeUs = document.querySelector(".write-us-link");
  var writeUsPopupClose = writeUsPopup.querySelector(".modal-close");

  var form = writeUsPopup.querySelector("form");
  var userName = writeUsPopup.querySelector("input[name=user-name]");
  var userEmail = writeUsPopup.querySelector("input[name=user-mail]");
  var userMessage = writeUsPopup.querySelector("textarea");

  var isStorageSupport = true;
  var storage = "";

  try {
    storageName = localStorage.getItem("userName");
    storageEmail = localStorage.getItem("userEmail");
  } catch (err) {
    isStorageSupport = false;
  }

  writeUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsPopup.classList.add("modal-show");

    if (storageName) {
      userName.value = storageName;
      userEmail.focus();
      if (storageEmail) {
        userEmail.value = storageEmail;
        userMessage.focus();
      }
    } else {
      userName.focus();
    }
  });

  writeUsPopupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-show");
    writeUsPopup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value || !userMessage.value) {
      evt.preventDefault();
      writeUsPopup.classList.remove("modal-error");
      writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
      writeUsPopup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("userName", userName.value);
        localStorage.setItem("userEmail", userEmail.value);
      }
    }
  });
}



// Если удалить код 1-84 строк и оставить код, начинающийся с 88 строки, то попап в каталоге заработает

var basket = document.querySelectorAll(".buy");

var basketPopup = document.querySelector(".modal-basket");

if (basketPopup) {

  var basketPopupClose = basketPopup.querySelector(".modal-close");

  for (var i = 0; i < basket.length; i++) {
    var currentItem = basket[i];
    currentItem.addEventListener("click", function (evt) {
      evt.preventDefault();
      basketPopup.classList.add("modal-show");
    });
  };

  // Работает так же, как и код строчек 93-99. Какой вариант лучше?

  // basket.forEach(function (entry) {
  //   entry.addEventListener("click", function (evt) {
  //     evt.preventDefault();
  //     basketPopup.classList.add("modal-show");
  //   });
  // });

  basketPopupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.remove("modal-show");
  });
}

*/