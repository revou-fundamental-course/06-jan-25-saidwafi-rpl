function validateForm() {
  let nameInput = document.getElementById("name-input").value;

  console.log(nameInput);
  if (nameInput == "") {
    alert("Nama tidak boleh kosong!");
  } else {
    // Result form
    document.getElementById("result-form").innerHTML = nameInput;
  }
}

document.getElementById("submit-btn").addEventListener("click", validateForm);

function setSenderUI(name, birthDate, gender, messages) {
  document.getElementById("sender-full-name").innerHTML = name;
  document.getElementById("sender-birth-date").innerHTML = birthDate;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-messages").innerHTML = messages;
}

let indexBanner = 0;

changeBackground();

function nextBanner() {
    indexBanner = indexBanner + 1;

    changeBackground();
}

// Function Banner Autoslide
function changeBackground() {
    let bannerList = document.getElementsByClassName("banner-image");
    console.log(bannerList.length);

    console.log(indexBanner);
    if (indexBanner > bannerList.length - 1) {
        // Reset indexBanner
        indexBanner = 0;
    }

    // Looping Banner Autoslide
    for (let i = 0; i < bannerList.length; i++) {
        bannerList[i].style.display = "none";
    }

    bannerList[indexBanner].style.display = "block";
}

setInterval(nextBanner, 3000);