var map=document.querySelector(".map-link"),mapPopup=document.querySelector(".modal-map"),writeUsPopup=document.querySelector(".modal-write-us");if(mapPopup&&writeUsPopup){var mapPopupClose=mapPopup.querySelector(".modal-close");map.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-show")}),mapPopupClose.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-show")});var writeUs=document.querySelector(".write-us-link"),writeUsPopupClose=writeUsPopup.querySelector(".modal-close"),form=writeUsPopup.querySelector("form"),userName=writeUsPopup.querySelector("input[name=user-name]"),userEmail=writeUsPopup.querySelector("input[name=user-mail]"),userMessage=writeUsPopup.querySelector("textarea"),isStorageSupport=!0,storage="";try{storageName=localStorage.getItem("userName"),storageEmail=localStorage.getItem("userEmail")}catch(e){isStorageSupport=!1}writeUs.addEventListener("click",function(e){e.preventDefault(),writeUsPopup.classList.add("modal-show"),storageName?(userName.value=storageName,userEmail.focus(),storageEmail&&(userEmail.value=storageEmail,userMessage.focus())):userName.focus()}),writeUsPopupClose.addEventListener("click",function(e){e.preventDefault(),writeUsPopup.classList.remove("modal-show"),writeUsPopup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){userName.value&&userEmail.value&&userMessage.value?isStorageSupport&&(localStorage.setItem("userName",userName.value),localStorage.setItem("userEmail",userEmail.value)):(e.preventDefault(),writeUsPopup.classList.remove("modal-error"),writeUsPopup.offsetWidth=writeUsPopup.offsetWidth,writeUsPopup.classList.add("modal-error"))})}for(var basket=document.querySelectorAll(".buy"),basketPopup=document.querySelector(".modal-basket"),basketPopupClose=basketPopup.querySelector(".modal-close"),i=0;i<basket.length;i++){var currentItem=basket[i];currentItem.addEventListener("click",function(e){e.preventDefault(),basketPopup.classList.add("modal-show")})}basketPopupClose.addEventListener("click",function(e){e.preventDefault(),basketPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),mapPopup&&mapPopup.classList.contains("modal-show")?mapPopup.classList.remove("modal-show"):writeUsPopup&&writeUsPopup.classList.contains("modal-show")?(writeUsPopup.classList.remove("modal-show"),writeUsPopup.classList.remove("modal-error")):basketPopup.classList.contains("modal-show")&&basketPopup.classList.remove("modal-show"))});