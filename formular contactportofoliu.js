/*-    modal contact formular */
 const modal = document.getElementById("contactModal");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.querySelector(".close-button44");

  openBtn.onclick1 = () => {
    modal.style.display = "block";
  }

  closeBtn.onclick1 = () => {
    modal.style.display = "none";
  }

  window.onclick1 = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
