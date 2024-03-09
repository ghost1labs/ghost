const image = document.getElementById("myImage");
image.crossOrigin = "anonymous";

image.addEventListener("load", function () {
  image.oncontextmenu = function () {
    return false;
  };
});