import { load } from "../../utilities/authGuard";

export function profileTemplate() {
  const container = document.getElementById("profileContainer");

  const storedUser = load("user");
  const profile = JSON.parse(storedUser);

  const userDetailsContainer = document.createElement("div");
  userDetailsContainer.classList.add(
    "text-primary-fur100",
    "border-solid",
    "border-primary-fur100",
    "border-2",
    "flex",
    "flex-col",
    "justify-between",
    "items-center",
    "gap-6",
    "m-4",
    "px-2",
    "py-2",
    "mt-10",
    "outline",
    "outline-[4px]",
    "outline-offset-[8px]",
    "outline-primary-fur100",
    "focus:font-medium",
    "focus:outline-[9px]",
    "bg-primary-mayo100",
    "w-full",
    "h-auto",
  );
  const userDetailsContent = document.createElement("div");
  userDetailsContent.classList.add(
    "h-fill",
    "px-6",
    "flex",
    "flex-col",
    "text-center",
  );

  const userTitle = document.createElement("p");
  userTitle.classList.add("h3");
  userTitle.textContent = profile.name;
  const userEmail = document.createElement("p");
  userEmail.classList.add("caption", "text-brown-500");
  userEmail.textContent = profile.email;
  const userBio = document.createElement("p");
  userBio.classList.add(
    "body-text",
    "text-brown-800",
    "border-solid",
    "border-2",
    "border-primary-fur100",
    "p-6",
    "my-6",
    "outline",
    "outline-[2px]",
    "outline-offset-[2px]",
    "outline-primary-fur100",
  );
  userBio.textContent = profile.bio?.trim()
    ? profile.bio
    : "Hi, I’m a pet lover who ...";

  const userIconContainer = document.createElement("div");
  userIconContainer.classList.add(
    "relative",
    "group",
    "border-[8px]",
    "border-primary-fur100",
    "w-[115px]",
    "h-[144px]",
    "rounded-[100%]",
    "overflow-hidden",
    "mx-4",
  );

  const userAvatar = document.createElement("img");
  userAvatar.classList.add(
    "w-full",
    "h-full",
    "object-cover",
    "mx-auto",
    "block",
  );
  userAvatar.src = profile.avatar.url;
  userAvatar.alt = profile.avatar.alt || "Image of pet";
  userAvatar.setAttribute("aria-label", `${profile.avatar.alt}`);

  userIconContainer.appendChild(userAvatar);
  userDetailsContainer.append(userIconContainer, userDetailsContent);
  userDetailsContent.append(userTitle, userEmail, userBio);
  container.append(userDetailsContainer);
  return container;
}
