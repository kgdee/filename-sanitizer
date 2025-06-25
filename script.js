const textInput = document.querySelector(".text-input");
const messageEl = document.querySelector(".message")

function sanitize() {
  const text = textInput.value
  if (!text) return

  let sanitized = text
    .replace(/[<>:"/\\|?*\x00-\x1F]/g, " ")
    .trim()
    .replace(/\s+/g, " ");

  messageEl.innerHTML = `Filename sanitized and copied!<br/> <span>${sanitized}</span>`;

  navigator.clipboard.writeText(sanitized);
}

document.addEventListener("keydown", function(event) {
  if (event.key === " ") {
    event.preventDefault()
    sanitize()
  }
})