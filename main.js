document.addEventListener("DOMContentLoaded", function () {
  const basketButtons = document.querySelectorAll(".modal-footer .btn-primary");

  basketButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const modalElement = button.closest(".modal");
      if (modalElement) {
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
          modalInstance.hide();
        }
      }
    });
  });
});