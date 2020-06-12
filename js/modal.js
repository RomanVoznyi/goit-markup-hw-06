(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-open-modal]"),
    closeModalBtn: document.querySelector("[data-close-mod-btn]"),
    closeModalLink: document.querySelector("[data-close-mod-link]"),
    backdrop: document.querySelector("[data-backdrop]"),
  };

  // ---- Open and close Modal ------

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.closeModalLink.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.backdrop.classList.toggle("visibility-hidden");
  }

  // ----- Display date to console ------
  document.querySelector(".js-modal").addEventListener("submit", (e) => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`)
    );

    e.currentTarget.reset();
  });
})();
