function initializeGrid(length) {
  for(let i = 0; i < length; i++) {
    for(let j = 0; j < length; j++) {
      $("<div>", {class: "cell"}).appendTo("#sketch");
    }
  }
  let cw = $(".cell").width();
  $(".cell").css({'height':cw+'px'})
}

function clearGrid() {
  $(".cell").each(function() {
    $(this).removeClass("pressed");
  });
}

$(document).ready(function() {
  let htmlStyles = window.getComputedStyle(document.querySelector("html"));
  let gridLength = parseInt(htmlStyles.getPropertyValue("--gridLength"));

  initializeGrid(gridLength);


  $("div").on("mouseover", ".cell", (function() {
    $(this).addClass("pressed");
  }));

  $("#clear").click(function() {
    clearGrid();
  });

  $("#resize").click(function() {
    let length = prompt("Enter a new length for your Etch-A-Sketch.")
    while(length <= 0 || length >= 50) {
      length = prompt("Please enter a value between 1 and 49")
    }
    document.documentElement.style.setProperty("--gridLength", length);

    $(".cell").remove();
    gridLength = length;
    initializeGrid(gridLength);
    clearGrid();
  });
});
