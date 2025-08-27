const textInput = document.querySelector(".text-input");
const messageEl = document.querySelector(".message");

function sanitize() {
  const text = textInput.value;
  if (!text) return;

  let sanitized = text
    .replace(/[:|]/g, " -")
    .replace(/["']/g, "")
    .replace(/\s*-\s*/g, " - ")
    .replace(/[<>\/\\|?*\x00-\x1F]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  messageEl.innerHTML = `Filename sanitized and copied!<br/> <span>${sanitized}</span>`;

  navigator.clipboard.writeText(sanitized);
}
