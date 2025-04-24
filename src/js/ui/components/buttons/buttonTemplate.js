export function buttonBase({ type = "primary", label = "Click", href }) {
  const tag = href ? "a" : "button";
  const el = document.createElement(tag);
  if (href) el.href = href;

  el.className = `
      btn-base
      ${type === "primary" ? "btn-primary" : ""}
      ${type === "secondary" ? "btn-secondary" : ""}
      ${type === "display" ? "text-6xl tracking-wide uppercase font-display" : ""}
    `;

  el.textContent = label;
  return el;
}
