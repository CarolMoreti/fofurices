// popup-compra.js
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup-compra");
  const btnFechar = document.getElementById("popup-fechar");
  const btnCancelar = document.getElementById("popup-cancelar");
  const btnConfirmar = document.getElementById("popup-confirmar");
  const feedback = document.getElementById("popup-feedback");

  // Função para abrir o pop-up
  window.abrirPopupCompra = function () {
    popup.style.display = "flex";
    feedback.textContent = "";
  };

  // Fechar pop-up
  const fecharPopup = () => (popup.style.display = "none");
  btnFechar.onclick = fecharPopup;
  btnCancelar.onclick = fecharPopup;

  // Confirmar compra
  btnConfirmar.onclick = () => {
    feedback.textContent = "Compra confirmada! 🎀 Obrigada por escolher a Fofurices 💕";
    feedback.style.color = "#6b3c2a";
    setTimeout(() => {
      fecharPopup();
      // aqui você pode limpar o carrinho:
      localStorage.setItem("fofurices_cart_v1", "[]");
      // e redirecionar de volta pra página inicial
      window.location.href = "index.html";
    }, 2000);
  };
});
