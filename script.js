// Dropdown Toggle for Mobile

document.addEventListener("DOMContentLoaded", () => {
  // 1. LINE DROPDOWN (Our Doctors, Treatments)
  document.querySelectorAll(".dropdown > a").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parent = link.parentElement;

        // Close other open dropdowns
        document.querySelectorAll(".dropdown.active").forEach((dropdown) => {
          if (dropdown !== parent) {
            dropdown.classList.remove("active");
          }
        });

        parent.classList.toggle("active");
      }
    });
  });

  // 2. LINE DROPDOWN (Dermatology, Facial Treatments, vb.)
  document.querySelectorAll(".dropdown-nested > a").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parent = link.parentElement;

        // Close other open submenus at the same level
        const siblings = parent.parentElement.querySelectorAll(
          ".dropdown-nested.active"
        );
        siblings.forEach((sibling) => {
          if (sibling !== parent) {
            sibling.classList.remove("active");
          }
        });

        parent.classList.toggle("active");
      }
    });
  });

  // Close all menus when clicked outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest("nav")) {
      document
        .querySelectorAll(".dropdown.active, .dropdown-nested.active")
        .forEach((item) => {
          item.classList.remove("active");
        });
    }
  });
});
