const input = document.querySelector(".input");

function sanitize() {
  let sanitized = input.value.replace(/[<>:"/\\|?*]/g, "").replace(/\./g, " ");
  document.querySelector(".output").innerHTML = `Filename sanitized and copied!<br/> ${sanitized}`;

  navigator.clipboard.writeText(sanitized);
}
