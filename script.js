(function() {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileCategoriesBtn = document.getElementById("mobile-categories-btn");
  const cancelMenuModal = document.getElementById("cancel-menu-modal");
  const cancelCategoryModal = document.getElementById("cancel-category-modal");
  const menuModal = document.getElementById("menu-modal");
  const categoriesModal = document.getElementById("categories-modal");

  mobileMenuBtn.addEventListener("click", () => {
    menuModal.style.display = "block";
  });

  cancelMenuModal.addEventListener("click", () => {
    menuModal.style.display = "none";
  });

  mobileCategoriesBtn.addEventListener("click", () => {
    categoriesModal.style.display = "block";
  });

  cancelCategoryModal.addEventListener("click", () => {
    categoriesModal.style.display = "none";
  });
})();
