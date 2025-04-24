import { load } from "../../../utilities/authGuard";
import { setLogoutListener } from "../../global/logout";

export function adminNav() {
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
  petsIcon.classList.add = "w-fit";
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

  const createIcon = document.createElement("img");
  createIcon.src = "/icon/custom-arrow-icon.svg";
  createIcon.classList.add = "w-fit";
  createIcon.alt = "Arrow icon";
  const createLink = document.createElement("a");
  createLink.setAttribute("aria-label", "Create a Post");
  createLink.href = "/pets/create/";
  createLink.classList.add(
    "px-8",
    "py-3",
    "transition-all",
    "hover:underline",
    "flex",
    "justify-center",
    "gap-2",
    "flex-row",
    "body-text",
  );
  createLink.textContent = "create";
  createLink.appendChild(createIcon);

  const userIconContainer = document.createElement("div");
  userIconContainer.classList.add(
    "relative",
    "group",
    "border-[5px]",
    "border-primary-fur100",
    "w-12",
    "h-16",
    "rounded-[100%]",
    "overflow-hidden",
    "mx-4",
  );
  userIconContainer.title = "Go to my profile";
  const rawUser = load("user");
  const user = typeof rawUser === "string" ? JSON.parse(rawUser) : rawUser;
  const {
    avatar: { url: avatarUrl = "", alt: avatarAlt = "User avatar" } = {},
  } = user;
  const userIconImage = document.createElement("img");
  userIconImage.src = avatarUrl;
  userIconImage.alt = avatarAlt || "User avatar";
  userIconImage.setAttribute("aria-label", "User's avatar");
  userIconImage.classList.add("cursor-pointer", "object-cover", "h-full");

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
    "items-center",
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

  const mobileUserIconContainer = document.createElement("div");
  mobileUserIconContainer.classList.add(
    "relative",
    "group",
    "border-[5px]",
    "border-primary-fur100",
    "w-20",
    "h-28",
    "rounded-[100%]",
    "overflow-hidden",
    "mx-4",
  );
  mobileUserIconContainer.title = "Go to my profile";
  const mobileUserIconImage = document.createElement("img");
  mobileUserIconImage.src = avatarUrl;
  mobileUserIconImage.alt = avatarAlt || "User avatar";
  mobileUserIconImage.setAttribute("aria-label", "User's avatar");
  mobileUserIconImage.classList.add(
    "cursor-pointer",
    "object-cover",
    "h-full",
    "w-full",
  );
  const username = load("userName");
  const usernameText = document.createElement("p");
  usernameText.innerHTML = `${username}`;

  mobileUserIconContainer.appendChild(mobileUserIconImage, usernameText);

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

  const mobileCreate = document.createElement("li");
  mobileCreate.classList.add(
    "text-center",
    "px-6",
    "text-center",
    "flex",
    "justify-center",
    "flex-row-reverse",
    "align-middle",
    "px-6",
  );
  const mobileCreateLink = document.createElement("a");
  mobileCreateLink.setAttribute("aria-label", "Create a Post");
  mobileCreateLink.href = "/pets/create/";
  mobileCreateLink.textContent = "Create";
  mobileCreateLink.classList.add(
    "text-2xl",
    "inline-block",
    "align-middle",
    "my-7",
    "px-2",
    "hover:underline",
  );

  const mobilePetsIcon = document.createElement("img");
  mobilePetsIcon.src = "/icon/custom-arrow-icon.svg";
  mobilePetsIcon.classList.add = "w-fit";
  mobilePetsIcon.alt = "Arrow icon";

  const mobileCreateIcon = document.createElement("img");
  mobileCreateIcon.src = "/icon/custom-arrow-icon.svg";
  mobileCreateIcon.classList.add = "w-fit";
  mobileCreateIcon.alt = "Arrow icon";

  mobilePets.append(mobilePetsIcon);
  mobileCreate.append(mobileCreateIcon);

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

  pcNav.append(petsLink, createLink, userIconContainer);
  userIconContainer.appendChild(userIconImage, username);
  mobilePets.appendChild(mobilePetsLink);
  mobileCreate.appendChild(mobileCreateLink);
  itemContainer.append(mobileUserIconContainer, mobilePets, mobileCreate);
  footer.append(termsOfUse, privacyPolicy);
  menuBox.append(itemContainer, footer);
  mobileNav.append(menuButton, menuBox);
  headerContainer.append(logoContainer, pcNav, mobileNav);

  return headerContainer;
}
