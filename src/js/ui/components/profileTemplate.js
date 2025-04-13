import { load } from "../../utilities/authGuard";

export function profileTemplate() {
  const container = document.getElementById("profileContainer");

  const storedUser = load("user");
  const profile = JSON.parse(storedUser);

  const avatar = document.createElement("img");
  avatar.classList.add("w-full", "md:aspect-4/3");
  avatar.src = profile.avatar.url;

  container.prepend(avatar);

  const content = document.createElement("div");

  const name = document.createElement("h3");
  name.textContent = profile.name || "Anonymous";

  const bio = document.createElement("p");
  bio.textContent =
    profile.bio || `Hi, my name is ${profile.name} and I am a pet lover who...`;

  const email = document.createElement("p");
  email.textContent = profile.email || "email@email.com";

  content.appendChild(name);
  content.appendChild(bio);
  content.appendChild(email);
  container.appendChild(content);
}
