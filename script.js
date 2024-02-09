new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 4,
});

document.addEventListener("DOMContentLoaded", () => {
  const videos = [
    824804225, 824804225, 824804225, 824804225, 824804225, 824804225, 824804225,
    824804225,
  ];

  const slider = document.querySelector(".swiper-wrapper");
  const popup = document.getElementById("video-popup");
  const frame = document.getElementById("video-frame");
  const pagination = document.getElementById("pagination");

  videos.forEach((id, index) => {
    const slideWrapper = document.createElement("div");
    slideWrapper.classList.add("swiper-slide");
    const videoElement = document.createElement("img");
    videoElement.classList.add("video");
    videoElement.style.backgroundImage = `url(https://vumbnail.com/${id}.jpg)`;
    videoElement.addEventListener("click", () => showVideo(id, index));
    slider.appendChild(slideWrapper);
    slideWrapper.appendChild(videoElement);
    const page = document.createElement("span");
    page.textContent = index + 1;
    page.addEventListener("click", () => showVideo(id, index));
    pagination.appendChild(page);
    page.style.marginLeft = "4px";
    popup.style.display = "none";
  });

  function showVideo(id, index) {
    frame.src = `https://player.vimeo.com/video/${id}?autoplay=1`;
    popup.style.display = "flex";
    highlightPagination(index);
  }
  function closeModal() {
    popup.style.display = "none";
    frame.src = "";
  }
  function highlightPagination(index) {
    [...pagination.children].forEach((child, idx) => {
      child.style.color = idx === index ? "red" : "white";
    });
  }
  window.addEventListener("click", function (e) {
    const popup = document.getElementById("video-popup");
    if (e.target === popup) {
      closeModal();
    }
  });
});
