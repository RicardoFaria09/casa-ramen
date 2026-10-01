import { useEffect, useState } from "react";

// Componente reutilizavel: mostra uma imagem pequena (miniatura) que, ao
// ser clicada, abre numa janela pop-up maior. E usado tanto no DishCard
// (imagens dos pratos) como na galeria da Home - extra sugerido na
// proposta, que pede que a imagem ampliada apareca "como uma janela
// pop-up" e que "todas as imagens devem ter o mesmo tamanho". Por isso a
// imagem ampliada usa sempre a mesma classe CSS ("image-popup-enlarged"),
// com tamanho fixo, seja qual for o tamanho da miniatura de origem.
//
// Props:
// - src / alt: imagem a mostrar (miniatura e versao ampliada sao a mesma
//   imagem, so muda o tamanho via CSS).
// - thumbClassName: classe CSS da miniatura, para cada sitio onde o
//   componente e usado (DishCard ou galeria) manter o seu proprio layout.
function ImagePopup({ src, alt, thumbClassName }) {
  const [open, setOpen] = useState(false);

  // Fecha o pop-up com a tecla Escape, como e habito em janelas
  // modais/dialogs. So ouvimos a tecla enquanto o pop-up estiver aberto.
  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      {/* <button> em vez de <img> com onClick, para a miniatura continuar
          acessivel por teclado (Tab + Enter) e ler bem em leitores de ecra. */}
      <button
        type="button"
        className="image-popup-trigger"
        onClick={() => setOpen(true)}
        aria-label={`Ampliar imagem: ${alt}`}
      >
        <img className={thumbClassName} src={src} alt={alt} />
      </button>

      {open && (
        // O overlay cobre o ecra todo. Clicar em qualquer ponto dele
        // (incluindo a propria imagem ou o botao "Fechar") fecha o
        // pop-up - mantem a interacao simples, sem precisar de distinguir
        // cliques dentro/fora da imagem.
        <div
          className="image-popup-overlay"
          role="dialog"
          aria-label={alt}
          onClick={() => setOpen(false)}
        >
          <img className="image-popup-enlarged" src={src} alt={alt} />

          <button type="button" className="image-popup-close">
            Fechar
          </button>
        </div>
      )}
    </>
  );
}

export default ImagePopup;
