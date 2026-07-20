 
  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("toggleAccounts");
    const submenu = document.getElementById("accountSubmenu");

    toggle.addEventListener("click", function () {
      submenu.classList.toggle("show");
    });

    // Optional: Click outside to close
    document.addEventListener("click", function (e) {
      if (!toggle.contains(e.target) && !submenu.contains(e.target)) {
        submenu.classList.remove("show");
      }
    });
  }); 
  

$('.toggle_btns').click(function(e) {
    $('.admin_siderbarr').toggleClass('showw'); 
 }); 

 $('.flag-lists_in a').click(function(e) {
    $('.flag-lists_in').removeClass('active');
    $(this).parent().addClass('active');
 }); 

 