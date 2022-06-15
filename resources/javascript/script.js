function openMenu() {
    document.getElementById('menubar').style.height = "100%"
}

function closeMenu() {
    document.getElementById('menubar').style.height = "0%"
}

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

//mixitup

var mixer = mixitup('.grid-portfolio-container');