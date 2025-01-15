const userGreeting = document.getElementById("user-greeting");

// Cek apakah nama sudah disimpan di Local Storage
let userName = localStorage.getItem("userName");

// Minta pengguna untuk memasukkan nama panggilan jika belum ada
if (!userName) {
  userName = prompt("Masukan nama panggilan anda:");
  if (userName) {
    localStorage.setItem("userName", userName);
  } else {
    userName = "Pengunjung";
  }
}

// Tampilkan nama di website
userGreeting.textContent = userName;

// Fungsi memvalidasi form
function validateForm() {
  const name = document.forms["message-form"]["full-name"].value;
  const birthDate = document.forms["message-form"]["birth-date"].value;
  const gender = document.forms["message-form"]["gender"].value;
  const messages = document.forms["message-form"]["messages"].value;

  if (name == "" || birthDate == "" || gender == "" || messages == "") {
    alert("Tidak boleh ada yang kosong");
    return false;
  }

  setSenderUI(name, birthDate, gender, messages);

  return false;
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