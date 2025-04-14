export function userNav() {
  const headerContainer = document.createElement("div");

  headerContainer.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "w-full",
  );

  const logoContainer = document.createElement("a");
  logoContainer.href = "/";
  logoContainer.setAttribute("aria-label", "View home page");
  logoContainer.classList.add("block", "w-1/3", "md:w-[10%]");
  const logoImage = document.createElement("img");
  logoImage.src = "/images/noroff-logo.png";
  logoImage.alt = "Hot-dog shelter logo";
  logoContainer.appendChild(logoImage);

  const pcNav = document.createElement("nav");
  pcNav.classList.add("hidden", "lg:block", "font-semibold", "text-base");

  const petsLink = document.createElement("a");
  petsLink.setAttribute("aria-label", "View pets available for adoption");
  petsLink.href = "/pets/";
  petsLink.classList.add("px-8", "py-3", "hover:underline");
  petsLink.textContent = "Pets";

  const loginLink = document.createElement("a");
  loginLink.setAttribute("aria-label", "Go to login page");
  loginLink.href = "/auth/login/";
  loginLink.classList.add("px-8", "py-3", "hover:underline");
  loginLink.textContent = "Log in";

  const registerLink = document.createElement("a");
  registerLink.setAttribute("aria-label", "Create a user");
  registerLink.href = "/auth/register/";
  registerLink.classList.add("px-8", "py-3", "hover:underline");
  registerLink.textContent = "Register";

  const mobileNav = document.createElement("nav");
  mobileNav.classList.add("lg:hidden");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "menu-btn";
  checkBox.classList.add("menu-btn", "hidden", "peer");
  const checkBoxLabel = document.createElement("label");
  checkBoxLabel.htmlFor = "menu-btn";
  checkBoxLabel.classList.add(
    "inline-block",
    "relative",
    "cursor-pointer",
    "w-12",
    "h-12",
    "flex",
    "justify-center",
    "items-center",
  );

  const menuBox = document.createElement("ul");
  menuBox.classList.add(
    "menu-box",
    "peer-checked:visible",
    "peer-checked:right-0",
    "fixed",
    "top-0",
    "-right-full",
    "invisible",
    "m-0",
    "py-20",
    "list-none",
    "h-full",
    "w-4/5",
    "z-40",
    "flex",
    "flex-col",
    "justify-between",
  );

  const itemContainer = document.createElement("div");
  const mobilePets = document.createElement("li");
  mobilePets.classList.add("text-center");
  const mobilePetsLink = document.createElement("a");
  mobilePetsLink.setAttribute("aria-label", "View pets available for adoption");
  mobilePetsLink.href = "/pets/";
  mobilePetsLink.textContent = "Pets";
  mobilePetsLink.classList.add(
    "menu-item",
    "inline-block",
    "py-3",
    "px-6",
    "font-semibold",
    "text-xl",
    "mb-7",
  );

  const mobileLogin = document.createElement("li");
  mobileLogin.classList.add("text-center");
  const mobileLoginLink = document.createElement("a");
  mobileLoginLink.setAttribute("aria-label", "Go to login page");
  mobileLoginLink.href = "/auth/login/";
  mobileLoginLink.textContent = "Login";
  mobileLoginLink.classList.add(
    "menu-item",
    "inline-block",
    "py-3",
    "px-6",
    "font-semibold",
    "text-xl",
    "mb-7",
  );

  const mobileRegister = document.createElement("li");
  mobileRegister.classList.add("text-center");
  const mobileRegisterLink = document.createElement("a");
  mobileRegisterLink.setAttribute("aria-label", "Create a new user");
  mobileRegisterLink.href = "/auth/register/";
  mobileRegisterLink.textContent = "Register";
  mobileRegisterLink.classList.add(
    "menu-item",
    "inline-block",
    "py-3",
    "px-6",
    "font-semibold",
    "text-xl",
    "mb-7",
  );

  const footer = document.createElement("div");
  footer.classList.add(
    "text-xs",
    "text-black",
    "flex",
    "justify-center",
    "gap-6",
  );
  const termsOfUse = document.createElement("li");
  termsOfUse.textContent = "Terms of Use";
  const privacyPolicy = document.createElement("li");
  privacyPolicy.textContent = "Privacy Policy";

  pcNav.append(petsLink, loginLink, registerLink);
  mobilePets.appendChild(mobilePetsLink);
  mobileLogin.appendChild(mobileLoginLink);
  mobileRegister.appendChild(mobileRegisterLink);
  itemContainer.append(mobilePets, mobileLogin, mobileRegister);
  footer.append(termsOfUse, privacyPolicy);
  menuBox.append(itemContainer, footer);
  mobileNav.append(checkBox, checkBoxLabel, menuBox);
  headerContainer.append(logoContainer, pcNav, mobileNav);

  return headerContainer;
}
