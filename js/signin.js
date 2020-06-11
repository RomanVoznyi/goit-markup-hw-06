(() => {
  const newLocal = ".js-signin";
  // ----- Display date to console ------
  document.querySelector(newLocal).addEventListener("submit", (e) => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`)
    );

    e.currentTarget.reset();
  });
})();
