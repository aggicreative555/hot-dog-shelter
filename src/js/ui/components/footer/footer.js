import { load } from "../../../utilities/authGuard";

export function footerNav() {
  const isLoggedIn = load("accessToken");

  const footerContainer = document.createElement("div");
  footerContainer.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "px-6",
    "py-3",
    "text-blue",
  );

  const itemContainer = document.createElement("div");
  itemContainer.classList.add("flex", "gap-3", "justify-center");

  const home = document.createElement("a");
  home.classList.add("flex", "justify-center");
  home.href = "/";
  home.setAttribute("aria-label", "View home page");
  home.innerHTML = "Home";

  const pets = document.createElement("a");
  pets.classList.add("flex", "justify-center");
  pets.href = "/pets/";
  pets.setAttribute("aria-label", "See pets for adoption");
  pets.innerHTML = "Pets";

  const create = document.createElement("a");
  create.classList.add("flex", "justify-center");
  create.href = "/pets/create/";
  create.setAttribute("aria-label", "Create post");
  create.innerHTML = "Create post";

  const profile = document.createElement("a");
  create.classList.add("flex", "justify-center");
  profile.href = "/profile/";
  profile.setAttribute("aria-label", "View profile page");
  profile.innerHTML = "My Profile";

  const footer = document.createElement("div");
  footer.classList.add(
    "text-xs",
    "text-black",
    "flex",
    "justify-center",
    "gap-6",
  );

  const termsOfUse = document.createElement("a");
  termsOfUse.textContent = "Terms of Use";
  const privacyPolicy = document.createElement("a");
  privacyPolicy.textContent = "Privacy Policy";

  footer.appendChild(termsOfUse, privacyPolicy);
  itemContainer.append(home, pets, create, profile, footer);
  footerContainer.appendChild(itemContainer, footer);

  if (isLoggedIn) {
    create.style.visibility = "visible";
    profile.style.visibility = "visible";
    pets.style.visibility = "visible";
    home.style.visibility = "visible";
  } else {
    pets.style.visibility = "visible";
    home.style.visibility = "visible";
    create.style.visibility = "hidden";
    profile.style.visibility = "hidden";
  }

  return footerContainer;
}
