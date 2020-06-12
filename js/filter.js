(() => {
  document.querySelector(".js-filter").addEventListener("input", (e) => {

    if (e.target.id == "filt-all") {
      resetClass();
    }
    if (e.target.id == "filt-web") {
      resetClass();
      document
        .querySelectorAll(".project-list > li:not(.type-web)")
        .forEach((el) => { el.classList.toggle("is-hidden"); });
    }
    if (e.target.id == "filt-widg") {
      resetClass();
      document
        .querySelectorAll(".project-list > li:not(.type-widg)")
        .forEach((el) => { el.classList.toggle("is-hidden"); });
    }
    if (e.target.id == "filt-design") {
      resetClass();
      document
        .querySelectorAll(".project-list > li:not(.type-design)")
        .forEach((el) => { el.classList.toggle("is-hidden"); });
    }
    if (e.target.id == "filt-mark") {
      resetClass();
      document
        .querySelectorAll(".project-list > li:not(.type-mark)")
        .forEach((el) => { el.classList.toggle("is-hidden"); });
    }

    function resetClass() {
      document
        .querySelectorAll(".project-list > .is-hidden")
        .forEach((el) => { el.classList.toggle("is-hidden") });
    }
  });
})();
