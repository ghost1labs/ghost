
function setFooterPosition() {
  const footer = document.getElementById("footer");
  const html = document.documentElement;
  const body = document.body;

  const htmlHeight = Math.max(html.scrollHeight, html.offsetHeight, body.scrollHeight, body.offsetHeight);

  if (htmlHeight > window.innerHeight) {
    footer.style.position = "relative";
  } else {
    footer.style.position = "absolute";
    footer.style.bottom = "0";
  }
}

window.addEventListener("resize", setFooterPosition);
window.addEventListener("load", setFooterPosition);

