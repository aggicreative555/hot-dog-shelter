import { load } from "../../../utilities/authGuard";

export function footerNav() {
  const isLoggedIn = load("accessToken");

  const footerContainer = document.createElement("div");
  footerContainer.classList.add(
    "mb-18",
    "overflow-y-auto",
    "max-h-screen",
    "flex",
    "flex-col",
    "justify-start",
    "align-middle",
    "px-6",
    "py-3",
    "w-screen",
    "bg-brown-800",
    "text-primary-mayo100",
  );

  const logoContainer = document.createElement("a");
  logoContainer.href = "/";
  logoContainer.setAttribute("aria-label", "View home page");
  logoContainer.classList.add(
    "flex",
    "align-middle",
    "justify-center",
    "py-2",
    "z-10",
    "cursor-pointer",
  );
  const logoImage = document.createElement("img");
  logoImage.src = "/logo/logo-full-invert-footer.svg";
  logoImage.alt = "Hot-dog shelter logo";
  logoContainer.appendChild(logoImage);

  const itemContainer = document.createElement("div");
  itemContainer.classList.add(
    "flex",
    "flex-col",
    "gap-3",
    "items-center",
    "justify-center",
    "h-fit",
  );

  const petsIcon = document.createElement("img");
  petsIcon.src = "/icon/arrow-invert-xl.svg";
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
    "text-h5",
  );
  petsLink.textContent = "Pets";
  petsLink.appendChild(petsIcon);

  const createIcon = document.createElement("img");
  createIcon.src = "/icon/arrow-invert-xl.svg";
  createIcon.classList.add = "w-fit";
  createIcon.alt = "Arrow icon";
  const createLink = document.createElement("a");
  createLink.setAttribute("aria-label", "Create a Post");
  createLink.href = "/pets/create/";
  createLink.classList.add(
    "px-8",
    "py-3",
    "hover:underline",
    "flex",
    "gap-2",
    "w-fit",
    "text-h5",
  );
  createLink.textContent = "Create";
  createLink.appendChild(createIcon);

  const footer = document.createElement("div");
  footer.classList.add(
    "flex",
    "flex-col",
    "my-10",
    "justify-start",
    "items-center",
    "gap-3",
    "text-primary-mayo100",
    "h-fit",
  );

  const copyRight = document.createElement("p");
  copyRight.classList.add("text-caption");
  copyRight.textContent = "©2025 Hot Dog Shelter. All rights reserved.";

  const termsPrivacyContainer = document.createElement("div");
  const termsOfUse = document.createElement("a");
  termsOfUse.textContent = "Terms of Use";
  termsOfUse.classList.add("text-body", "px-2", "hover:underline");
  const privacyPolicy = document.createElement("a");
  privacyPolicy.classList.add("text-body", "px-2", "hover:underline");
  privacyPolicy.textContent = "Privacy Policy";

  termsPrivacyContainer.append(termsOfUse, privacyPolicy);
  footerContainer.append(logoContainer, itemContainer, footer);
  itemContainer.append(petsLink, createLink);
  footer.append(termsPrivacyContainer, copyRight);

  if (isLoggedIn) {
    createLink.style.visibility = "visible";
    petsLink.style.visibility = "visible";
  } else {
    petsLink.style.visibility = "visible";
    createLink.style.visibility = "hidden";
  }

  return footerContainer;
}
