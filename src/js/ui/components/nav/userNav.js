export function userNav() {
  const headerContainer = document.createElement("div");

  headerContainer.classList.add(
    "relative",
    "flex",
    "items-center",
    "flex-row-reverse",
    "justify-between",
    "px-4",
    "h-36",
    "w-screen",
    "bg-primary-mayo100",
    "shadow-[0px_4px_4px_0px_rgba(29,26,25,0.20)]",
    "z-50",
    "bg-primary-mayo100",
  );

  const logoContainer = document.createElement("a");
  logoContainer.href = "/";
  logoContainer.setAttribute("aria-label", "View home page");
  logoContainer.classList.add(
    "absolute",
    "left-1/2",
    "top-1/2",
    "-translate-x-1/2",
    "-translate-y-1/2",
    "py-2",
    "z-10",
    "cursor-pointer",
    "bg-primary-mayo100",
  );
  const logoImage = document.createElement("img");
  logoImage.src = "/logo/logo-nav-desktop.svg";
  logoImage.alt = "Hot-dog shelter logo";
  logoContainer.appendChild(logoImage);

  const pcNav = document.createElement("nav");
  pcNav.classList.add(
    "hidden",
    "lg:flex",
    "self-stretch",
    "justify-end",
    "items-center",
    "gap-4",
    "flex-1",
    "transition-all",
    "duration-150",
  );

  const petsIcon = document.createElement("img");
  petsIcon.src = "/icon/custom-arrow-icon.svg";
  petsIcon.alt = "Arrow icon";
  const petsLink = document.createElement("a");
  petsLink.setAttribute("aria-label", "View pets available for adoption");
  petsLink.href = "/pets/";
  petsLink.classList.add(
    "px-8",
    "py-3",
    "hover:underline",
    "flex",
    "gap-2",
    "w-fit",
    "body-text",
  );
  petsLink.textContent = "Pets";
  petsLink.appendChild(petsIcon);

  const loginIcon = document.createElement("i");
  loginIcon.setAttribute("class", "fa-solid fa-door-open");
  loginIcon.alt = "Door open icon";
  const loginLink = document.createElement("a");
  loginLink.setAttribute("aria-label", "Go to login page");
  loginLink.href = "/auth/login/";
  loginLink.classList.add(
    "px-8",
    "py-3",
    "transition-all",
    "hover:underline",
    "flex",
    "justify-center",
    "gap-2",
    "flex-row-reverse",
    "body-text",
  );
  loginLink.textContent = "Log in";
  loginLink.append(loginIcon);

  const registerIcon = document.createElement("i");
  registerIcon.setAttribute("class", "fa-solid fa-lock-open");
  registerIcon.alt = "Lock open icon";
  const registerLink = document.createElement("a");
  registerLink.setAttribute("aria-label", "Create a user");
  registerLink.href = "/auth/register/";
  registerLink.classList.add(
    "px-8",
    "py-3",
    "transition-all",
    "hover:underline",
    "flex",
    "justify-center",
    "gap-2",
    "flex-row-reverse",
    "body-text",
  );
  registerLink.textContent = "Register";
  registerLink.append(registerIcon);

  const mobileNav = document.createElement("nav");
  mobileNav.classList.add("lg:hidden");
  const menuButton = document.createElement("button");
  menuButton.setAttribute("aria-label", "Open menu");
  menuButton.id = "menu-btn";
  menuButton.title = "Open menu";
  menuButton.classList.add(
    "fa-solid",
    "fa-bars",
    "text-h4",
    "px-8",
    "py-3",
    "transition-all",
    "duration-150",
  );

  const menuBox = document.createElement("ul");
  menuBox.classList.add(
    "invisible",
    "bg-primary-mayo100",
    "fixed",
    "left-1/2",
    "translate-x-[-50%]",
    "-translate-y-full",
    "py-20",
    "list-none",
    "h-screen",
    "w-screen",
    "flex",
    "items-center",
    "my-10",
    "flex-col",
    "gap-6",
    "transform",
    "transition-transform",
    "duration-300",
    "ease-in-out",
    "z-0",
  );

  menuButton.addEventListener("click", () => {
    const isOpen = menuBox.classList.contains("visible");

    if (!isOpen) {
      menuButton.classList.replace("fa-bars", "fa-xmark");
      menuBox.classList.replace("-translate-y-full", "-translate-y-0");
      menuBox.classList.replace("invisible", "visible");
    } else {
      menuButton.classList.replace("fa-xmark", "fa-bars");
      menuBox.classList.replace("-translate-y-0", "-translate-y-full");
      menuBox.classList.replace("visible", "invisible");
    }
  });

  const itemContainer = document.createElement("div");
  itemContainer.classList.add(
    "bg-primary-mayo100",
    "mx-14",
    "py-8",
    "px-14",
    "w-fit",
    "inline-flex",
    "flex-col",
    "gap-6",
    "h-fit",
    "border-[3px]",
    "border-solid",
    "border-primary-fur100",
    "outline",
    "outline-[1px]",
    "outline-offset-[4px]",
    "outline-primary-fur100",
    "z-0",
  );

  const mobilePets = document.createElement("li");
  mobilePets.classList.add(
    "text-center",
    "flex",
    "justify-center",
    "flex-row-reverse",
    "align-middle",
    "px-6",
  );
  const mobilePetsLink = document.createElement("a");
  mobilePetsLink.setAttribute("aria-label", "View pets available for adoption");
  mobilePetsLink.href = "/pets/";
  mobilePetsLink.textContent = "All Pets";
  mobilePetsLink.classList.add(
    "text-2xl",
    "inline-block",
    "align-middle",
    "my-7",
    "px-2",
    "hover:underline",
  );

  const mobileLogin = document.createElement("li");
  mobileLogin.classList.add("text-center", "px-6");
  const mobileLoginLink = document.createElement("a");
  mobileLoginLink.setAttribute("aria-label", "Go to login page");
  mobileLoginLink.href = "/auth/login/";
  mobileLoginLink.textContent = "Login";
  mobileLoginLink.classList.add(
    "text-2xl",
    "inline-block",
    "py-3",
    "px-2",
    "mb-7",
    "hover:underline",
  );

  const mobileRegister = document.createElement("li");
  mobileRegister.classList.add("text-center", "px-6");
  const mobileRegisterLink = document.createElement("a");
  mobileRegisterLink.setAttribute("aria-label", "Create a new user");
  mobileRegisterLink.href = "/auth/register/";
  mobileRegisterLink.textContent = "Register";
  mobileRegisterLink.classList.add(
    "text-2xl",
    "inline-block",
    "py-3",
    "px-2",
    "mb-7",
    "hover:underline",
  );

  const mobilePetsIcon = document.createElement("img");
  mobilePetsIcon.src = "/icon/custom-arrow-icon.svg";
  mobilePetsIcon.classList.add = "w-fit";
  mobilePetsIcon.alt = "Arrow icon";

  const mobileLoginIcon = document.createElement("i");
  mobileLoginIcon.setAttribute("class", "fa-solid fa-door-open");
  mobileLoginIcon.alt = "Door open icon";

  const mobileRegisterIcon = document.createElement("i");
  mobileRegisterIcon.setAttribute("class", "fa-solid fa-lock-open");
  mobileRegisterIcon.alt = "Lock open icon";

  mobilePets.append(mobilePetsIcon);
  mobileLogin.append(mobileLoginIcon);
  mobileRegister.append(mobileRegisterIcon);

  const footer = document.createElement("div");
  footer.classList.add(
    "h-fit-content",
    "p-4",
    "flex",
    "justify-center",
    "gap-6",
    "caption",
    "hover:underline",
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
  mobileNav.append(menuButton, menuBox);
  headerContainer.append(logoContainer, pcNav, mobileNav);

  return headerContainer;
}
