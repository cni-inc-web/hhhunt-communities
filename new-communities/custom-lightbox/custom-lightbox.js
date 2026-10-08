(function () {
  const box = document.getElementById("globalLightbox");
  if (!box) return;
  const iframe = box.querySelector("iframe");
  
  function embed(url) {
    if (!url) return "";
    // YouTube watch URLs
    if (url.includes("watch?v=")) {
      return "https://www.youtube.com/embed/" +
        new URL(url).searchParams.get("v") + "?autoplay=1&rel=0";
    }
    // YouTube short URLs
    if (url.includes("youtu.be/")) {
      return "https://www.youtube.com/embed/" +
        url.split("/").pop().split("?")[0] + "?autoplay=1&rel=0";
    }
    // Vimeo URLs
    if (url.includes("vimeo.com/")) {
      const videoId = url.split("/").pop().split("?")[0];
      return "https://player.vimeo.com/video/" + videoId + "?autoplay=1";
    }
    // Direct URLs or already embedded
    return url + (url.includes("?") ? "&autoplay=1" : "?autoplay=1");
  }
  
  /* ---------- OPEN (delegated) ---------- */
  document.addEventListener("click", function (e) {
    const trigger = e.target.closest(".lightbox-trigger");
    if (!trigger) return;
    e.preventDefault();
    
    const video = trigger.dataset.video;
    if (!video) return;
    
    // Set src immediately
    iframe.src = embed(video);
    
    // Open lightbox without waiting
    box.classList.add("open");
    document.body.style.overflow = "hidden";
  });
  
  /* ---------- CLOSE ---------- */
  function close() {
    box.classList.remove("open");
    document.body.style.overflow = "";
    // Delay clearing src to avoid flash
    setTimeout(() => {
      iframe.src = "";
    }, 300);
  }
  
  box.querySelector(".lightbox-close")?.addEventListener("click", close);
  box.querySelector(".lightbox-overlay")?.addEventListener("click", close);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") close();
  });
})();