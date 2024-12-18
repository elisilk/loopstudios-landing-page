const primaryNavToggle = document.querySelector(
  '[aria-controls="primary-nav"]'
);

primaryNavToggle.addEventListener("click", () => {
  const navOpened = primaryNavToggle.getAttribute("aria-expanded");
  if (navOpened === "false") {
    primaryNavToggle.setAttribute("aria-expanded", "true");
  } else {
    primaryNavToggle.setAttribute("aria-expanded", "false");
  }
});

/* watches for changes in the currentSrc of the img element 
https://cloudfour.com/thinks/responsive-images-101-part-2-img-required/ */

const imgIdToWatch = "image-interactive";
const imgClassToWatch = "responsive-img";

/* imgEl = document.getElementById(imgIdToWatch); */
const imgEl = document.getElementsByClassName(imgClassToWatch)[1];

const imgsToWatch = document.getElementsByClassName(imgClassToWatch);

/* imgsToWatch.forEach((img) => {}); */

(function () {
  var currentSrc, oldSrc;
  var showPicSrc = function () {
    oldSrc = currentSrc;
    currentSrc = imgEl.currentSrc || imgEl.src;

    if (typeof oldSrc === "undefined" || oldSrc !== currentSrc) {
      /* document.getElementById("logger").innerHTML = currentSrc; */
      console.log(new URL(currentSrc).pathname);
    }
  };

  // You may wish to debounce resize if you have performance concerns
  window.addEventListener("resize", showPicSrc);
  window.addEventListener("load", showPicSrc);
})(window);
