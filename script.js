let datetxt = "4 June";
let datatxtletter =
  "My love. You are a very special girl. I always silently thank you for coming into my life. Today, I wish you all the best, lots of health, and lots of joy. I always hope we will celebrate many more birthdays like this together. Happy birthday to you.💕";
let titleLetter = "To you";
let charArrDate = datetxt.split("");
let charArrDateLetter = datatxtletter.split("");
let charArrTitle = titleLetter.split("");
let currentIndex = 0;
let currentIndexLetter = 0;
let currentIndexTitle = 0;
let date__of__birth = document.querySelector(".date__of__birth span");
let text__letter = document.querySelector(".text__letter p");
setTimeout(function () {
  timeDatetxt = setInterval(function () {
    if (currentIndex < charArrDate.length) {
      date__of__birth.textContent += charArrDate[currentIndex];
      currentIndex++;
    } else {
      let i = document.createElement("i");
      i.className = "fa-solid fa-star";
      document.querySelector(".date__of__birth").prepend(i);
      document.querySelector(".date__of__birth").appendChild(i.cloneNode(true));
      clearInterval(timeDatetxt);
    }
  }, 100);
}, 12000);

var intervalContent;
var intervalTitle;
$("#btn__letter").on("click", function () {
  $(".box__letter").slideDown();
  setTimeout(function () {
    $(".letter__border").slideDown();
  }, 1000);
  setTimeout(function () {
    intervalTitle = setInterval(function () {
      if (currentIndexTitle < charArrTitle.length) {
        document.querySelector(".title__letter").textContent +=
          charArrTitle[currentIndexTitle];
        let i = document.createElement("i");
        i.className = "fa-solid fa-heart";
        document.querySelector(".title__letter").appendChild(i);
        currentIndexTitle++;
      } else {
        clearInterval(intervalTitle);
      }
    }, 100);
  }, 2000);
  setTimeout(function () {
    document.querySelector("#heart__letter").classList.add("animationOp");
    document.querySelector(".love__img").classList.add("animationOp");
    document.querySelector("#mewmew").classList.add("animationOp");
  }, 2800);
  setTimeout(function () {
    document.querySelectorAll(".heart").forEach((item) => {
      item.classList.add("animation");
    });
  }, 3500);
  setTimeout(function () {
    intervalContent = setInterval(function () {
      if (currentIndexLetter < charArrDateLetter.length) {
        text__letter.textContent += charArrDateLetter[currentIndexLetter];
        currentIndexLetter++;
      } else {
        clearInterval(intervalContent);
      }
    }, 50);
  }, 6000);
});
$(".close").on("click", function () {
  clearInterval(intervalContent);
  document.querySelector(".title__letter").textContent = "";
  text__letter.textContent = "";
  currentIndexLetter = 0;
  currentIndexTitle = 0;
  document.querySelector("#heart__letter").classList.remove("animationOp");
  document.querySelector(".love__img").classList.remove("animationOp");
  document.querySelector("#mewmew").classList.remove("animationOp");
  document.querySelectorAll(".heart").forEach((item) => {
    item.classList.remove("animation");
  });
  $(".box__letter").slideUp();
  $(".letter__border").slideUp();
});

let mailBox = document.querySelector(".mail");
let boxmail = document.querySelector(".boxMail");
var close = document.querySelector(".fa-xmark");
mailBox.onclick = function () {
  mailBox.classList.toggle("active");
  boxmail.classList.add("active");
};

close.addEventListener("click", function () {
  boxmail.classList.remove("active");
});

// Slider

const media = {
  video: [
    "./adom/video_1.MP4",
    "./adom/video_2.MP4",
    "./adom/video_3.MP4",
    "./adom/video_4.MP4",
    "./adom/video_5.MP4",
    "./adom/video_6.MP4",
  ],
  image: [
    "./adom/image_1.jpg",
    "./adom/image_2.jpg",
    "./adom/image_3.jpg",
    "./adom/image_4.jpg",
    "./adom/image_5.jpg",
    "./adom/image_6.jpg",
  ],
};

let type = "video";
let index = 0;

const modal = document.getElementById("modal");
const viewer = document.getElementById("viewer");
const backIcon = document.querySelector(".back-icon");

/* =========================
   OPEN MEDIA
========================= */
function openMedia(mediaType, i) {
  type = mediaType;
  index = i;

  modal.classList.add("active");
  loadMedia();
}

/* =========================
   LOAD MEDIA + PLACEHOLDER
========================= */
function loadMedia() {
  viewer.innerHTML = "";

  const src = media[type][index];

  // ================= VIDEO =================
  if (type === "video") {
    const loader = document.createElement("div");
    loader.className = "loading";
    loader.textContent = "Loading video...";
    viewer.appendChild(loader);

    const video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;

    video.onloadeddata = () => {
      loader.remove();
      viewer.appendChild(video);
    };

    video.onerror = () => {
      loader.textContent = "Failed to load video";
    };
  }

  // ================= IMAGE =================
  else {
    const loader = document.createElement("div");
    loader.className = "loading";
    loader.textContent = "Loading image...";
    viewer.appendChild(loader);

    const img = document.createElement("img");
    img.src = src;

    img.onload = () => {
      loader.remove();
      viewer.appendChild(img);
    };

    img.onerror = () => {
      loader.textContent = "Failed to load image";
    };
  }
}

/* =========================
   NEXT
========================= */
function next() {
  index = (index + 1) % media[type].length;
  loadMedia();
}

/* =========================
   PREV
========================= */
function prev() {
  index = (index - 1 + media[type].length) % media[type].length;
  loadMedia();
}

/* =========================
   CLOSE MODAL
========================= */
function closeModal() {
  modal.classList.remove("active");
  viewer.innerHTML = "";
}

/* =========================
   CLICK OUTSIDE CLOSE
========================= */
window.addEventListener("click", function (e) {
  if (e.target === modal) closeModal();
});

/* =========================
   BACK ICON CLOSE
========================= */
backIcon.onclick = closeModal;

/* =========================
   ESC KEY CLOSE
========================= */
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});
