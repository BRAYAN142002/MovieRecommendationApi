$(document).ready(function () {
  // Lógica para el carrusel
  $(".carrusel").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $("#btnUsuario").on("click", function () {
    $("#formularioUsuario").toggle();
  });
  $("#btnCerrar").on("click", function () {
    $("#formularioUsuario").hide();
  });
  $("#btnGuardar").on("click", function () {
    // Aquí puedes agregar la lógica para guardar el nombre
    alert("Nombre guardado: " + $("#nombre").val());
  });
});
