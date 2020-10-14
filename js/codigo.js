$(document).ready(function(){
  $("[data-toggle='tooltip']").tooltip();
  $("[data-toggle='popover']").popover();
  $('.carousel').carousel({
      interval: 2000
  });

    //  inicio funciones boton 1
  $("#myBtn").click(function(){
    $("#myModal").modal("show");
      $('#myBtn').prop('disabled', true);
  });
  $("#btnclose").click(function(){
    $("#myModal").modal("hide");
    $('#myBtn').prop('disabled', false);
  });
  $("#myModal").on('show.bs.modal', function () {
    // alert('El modal se va a mostrar');
    console.log("%cEl modal se va a mostrar", "color: green; font-family:'Comic Sans MS'");
  });
  $("#myModal").on('shown.bs.modal', function () {
    // alert('El modal se mostró');
    console.log("%cEl modal se mostró", "color: green; font-family:'Comic Sans MS'");
    $('#myBtn').removeClass('btn-primary');
    $('#myBtn').addClass('btn-success');
  });
  $("#myModal").on('hide.bs.modal', function () {
    // alert('El modal se va a cerrar');
    console.log("%cEl modal se va a cerrar", "color: green; font-family:'Comic Sans MS'");

  });
  $("#myModal").on('hidden.bs.modal', function () {
    // alert('El modal se cerró');
    console.log("%cEl modal se cerró", "color: green; font-family:'Comic Sans MS'");
    $('#myBtn').removeClass('btn-success');
    $('#myBtn').addClass('btn-primary');
  });
    // inicio funciones boton 1

    // inicio funciones boton 2
  $("#myBtn2").click(function(){
    $("#myModal2").modal("show");
      $('#myBtn2').prop('disabled', true);
  });
  $("#btnclose2").click(function(){
    $("#myModal2").modal("hide");
    $('#myBtn2').prop('disabled', false);
  });
  $("#myModal2").on('show.bs.modal', function () {
    // alert('El modal se va a mostrar');
    console.log("%cEl modal se va a mostrar", "color: green; font-family:'Comic Sans MS'");
  });
  $("#myModal2").on('shown.bs.modal', function () {
    // alert('El modal se mostró');
    console.log("%cEl modal se mostró", "color: green; font-family:'Comic Sans MS'");
    $('#myBtn2').removeClass('btn-primary');
    $('#myBtn2').addClass('btn-success');
  });
  $("#myModal2").on('hide.bs.modal', function () {
    // alert('El modal se va a cerrar');
    console.log("%cEl modal se va a cerrar", "color: green; font-family:'Comic Sans MS'");

  });
  $("#myModal2").on('hidden.bs.modal', function () {
    // alert('El modal se cerró');
    console.log("%cEl modal se cerró", "color: green; font-family:'Comic Sans MS'");
    $('#myBtn2').removeClass('btn-success');
    $('#myBtn2').addClass('btn-primary');
  });
    //  fin funciones boton 2

    //  inicio funciones boton 3
      $("#myBtn3").click(function(){
      $("#myModal3").modal("show");
        $('#myBtn3').prop('disabled', true);
    });
    $("#btnclose3").click(function(){
      $("#myModal3").modal("hide");
      $('#myBtn3').prop('disabled', false);
    });
    $("#myModal3").on('show.bs.modal', function () {
      // alert('El modal se va a mostrar');
      console.log("%cEl modal se va a mostrar", "color: green; font-family:'Comic Sans MS'");
    });
    $("#myModal3").on('shown.bs.modal', function () {
      // alert('El modal se mostró');
      console.log("%cEl modal se mostró", "color: green; font-family:'Comic Sans MS'");
      $('#myBtn3').removeClass('btn-primary');
      $('#myBtn3').addClass('btn-success');
    });
    $("#myModal3").on('hide.bs.modal', function () {
      // alert('El modal se va a cerrar');
      console.log("%cEl modal se va a cerrar", "color: green; font-family:'Comic Sans MS'");

    });
    $("#myModal3").on('hidden.bs.modal', function () {
      // alert('El modal se cerró');
      console.log("%cEl modal se cerró", "color: green; font-family:'Comic Sans MS'");
      $('#myBtn3').removeClass('btn-success');
      $('#myBtn3').addClass('btn-primary');
    });
      //  fin funciones boton 3

      //  inicio funciones boton 4
      $("#myBtn4").click(function(){
      $("#myModal4").modal("show");
        $('#myBtn4').prop('disabled', true);
    });
    $("#btnclose4").click(function(){
      $("#myModal4").modal("hide");
      $('#myBtn4').prop('disabled', false);
    });
    $("#myModal4").on('show.bs.modal', function () {
      // alert('El modal se va a mostrar');
      console.log("%cEl modal se va a mostrar", "color: green; font-family:'Comic Sans MS'");
    });
    $("#myModal4").on('shown.bs.modal', function () {
      // alert('El modal se mostró');
      console.log("%cEl modal se mostró", "color: green; font-family:'Comic Sans MS'");
      $('#myBtn4').removeClass('btn-primary');
      $('#myBtn4').addClass('btn-success');
    });
    $("#myModal4").on('hide.bs.modal', function () {
      // alert('El modal se va a cerrar');
      console.log("%cEl modal se va a cerrar", "color: green; font-family:'Comic Sans MS'");

    });
    $("#myModal4").on('hidden.bs.modal', function () {
      // alert('El modal se cerró');
      console.log("%cEl modal se cerró", "color: green; font-family:'Comic Sans MS'");
      $('#myBtn4').removeClass('btn-success');
      $('#myBtn4').addClass('btn-primary');
    });
      //  fin funciones boton 4

      //  inicio funciones boton 5
      $("#myBtn5").click(function(){
      $("#myModal5").modal("show");
        $('#myBtn5').prop('disabled', true);
    });
    $("#btnclose5").click(function(){
      $("#myModal5").modal("hide");
      $('#myBtn5').prop('disabled', false);
    });
    $("#myModal5").on('show.bs.modal', function () {
      // alert('El modal se va a mostrar');
      console.log("%cEl modal se va a mostrar", "color: green; font-family:'Comic Sans MS'");
    });
    $("#myModal5").on('shown.bs.modal', function () {
      // alert('El modal se mostró');
      console.log("%cEl modal se mostró", "color: green; font-family:'Comic Sans MS'");
      $('#myBtn5').removeClass('btn-primary');
      $('#myBtn5').addClass('btn-success');
    });
    $("#myModal5").on('hide.bs.modal', function () {
      // alert('El modal se va a cerrar');
      console.log("%cEl modal se va a cerrar", "color: green; font-family:'Comic Sans MS'");

    });
    $("#myModal5").on('hidden.bs.modal', function () {
      // alert('El modal se cerró');
      console.log("%cEl modal se cerró", "color: green; font-family:'Comic Sans MS'");
      $('#myBtn5').removeClass('btn-success');
      $('#myBtn5').addClass('btn-primary');
    });
      //  fin funciones boton 5

      //  inicio funciones boton 6
      $("#myBtn6").click(function(){
      $("#myModal6").modal("show");
        $('#myBtn6').prop('disabled', true);
    });
    $("#btnclose6").click(function(){
      $("#myModal6").modal("hide");
      $('#myBtn6').prop('disabled', false);
    });
    $("#myModal6").on('show.bs.modal', function () {
      // alert('El modal se va a mostrar');
      console.log("%cEl modal se va a mostrar", "color: green; font-family:'Comic Sans MS'");
    });
    $("#myModal6").on('shown.bs.modal', function () {
      // alert('El modal se mostró');
      console.log("%cEl modal se mostró", "color: green; font-family:'Comic Sans MS'");
      $('#myBtn6').removeClass('btn-primary');
      $('#myBtn6').addClass('btn-success');
    });
    $("#myModal6").on('hide.bs.modal', function () {
      // alert('El modal se va a cerrar');
      console.log("%cEl modal se va a cerrar", "color: green; font-family:'Comic Sans MS'");

    });
    $("#myModal6").on('hidden.bs.modal', function () {
      // alert('El modal se cerró');
      console.log("%cEl modal se cerró", "color: green; font-family:'Comic Sans MS'");
      $('#myBtn6').removeClass('btn-success');
      $('#myBtn6').addClass('btn-primary');
    });
      //  fin funciones boton 6
});
