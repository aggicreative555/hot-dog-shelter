export function buttonBase({
  type = "primary",
  label = "Click",
  href,
  btnType = "submit",
}) {
  const tag = href ? "a" : "button";
  const el = document.createElement(tag);
  if (href) el.href = href;

  el.type = btnType;

  el.className = `
      btn-base
      ${type === "primary" ? "btn-primary" : ""}
      ${type === "secondary" ? "btn-secondary" : ""}
      ${type === "display" ? "btn-display" : ""}
    `;

  el.textContent = label;
  return el;
}
