import { shareButton } from "../../global/shareButton";

export function postIdCard(post) {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add(
    "h-full",
    "w-full",
    "container",
    "flex",
    "flex-col",
    "lg:flex-row",
    "focus:font-medium",
    "focus:outline-[9px]",
    "transition-all",
    "duration-150",
    "ease-in-out",
    "items-center",
    "lg:items-start",
    "justify-center",
    "justify-between",
    "z-10",
  );

  mainContainer.dataset.id = `${post.id}`;

  const pictureFrame = document.createElement("div");
  pictureFrame.classList.add(
    "relative",
    "overflow-hidden",
    "border-8",
    "border-brown-800",
    "mb-6",
    "mx-2",
    "w-full",
    "max-w-[620px]",
    "lg:border-[24px]",
    "lg:my-0",
    "lg:w-auto",
    "lg:h-full",
    "lg:min-h-[611px]",
    "lg:w-[992px]",
  );

  const pic = document.createElement("img");
  const placeholderImage =
    "https://unsplash.com/photos/grayscale-photo-of-man-and-dog-VvSY-fOx6pw";
  if (!post.image?.url || post.image.url.includes("example.com")) {
    pic.src = placeholderImage;
  } else {
    pic.src = post.image.url;
  }
  pic.classList.add(
    "w-full",
    "h-full",
    "object-cover",
    "lg:min-h-[611px]",
    "lg:max-h-[611px]",
  );
  pic.alt = `${post.image.alt || "Image of pet"}`;
  pic.setAttribute("aria-label", `${post.image.alt}`);
  const overlay = document.createElement("div");
  overlay.classList.add(
    "absolute",
    "top-0",
    "left-0",
    "w-full",
    "h-full",
    "bg-brown-800",
    "opacity-0",
    "pointer-events-none",
    "hover:opacity-30",
  );

  const shareContainer = document.createElement("div");
  shareContainer.classList.add("absolute", "top-4", "right-4");
  shareContainer.appendChild(shareButton());
  pictureFrame.appendChild(pic);
  pictureFrame.appendChild(shareContainer);
  pictureFrame.appendChild(overlay);

  const mainContent = document.createElement("div");
  mainContent.classList.add(
    "flex",
    "flex-col",
    "px-6",
    "md:justify-between",
    "h-full",
    "lg:gap-6",
  );

  const titleContent = document.createElement("div");
  titleContent.classList.add(
    "flex",
    "flex-col",
    "justify-between",
    "w-full",
    "items-center",
    "border-solid",
    "border-primary-fur100",
    "border-2",
    "outline",
    "outline-[3px]",
    "outline-offset-[8px]",
    "outline-primary-fur100",
    "focus:font-medium",
    "focus:outline-[9px]",
    "bg-brown-800",
    "text-primary-mayo100",
  );
  const title = document.createElement("p");
  title.classList.add("h1-nigara");
  title.textContent = `${post.name}`;
  const speciesContainer = document.createElement("div");
  speciesContainer.classList.add(
    "py-2",
    "px-6",
    "my-4",
    "bg-primary-mayo100",
    "flex",
    "align-middle",
    "justify-middle",
    "text-primary-brown-800",
    "text-center",
    "text-left",
    "h-fit",
    "w-fit",
  );
  const species = document.createElement("p");
  species.classList.add(
    "text-caption",
    "capitalize",
    "font-medium",
    "text-brown-800",
    "text-center",
    "h-fit",
  );
  species.textContent = `${post.species}`;
  speciesContainer.appendChild(species);

  const description = document.createElement("p");
  description.classList.add("body-text", "py-4", "mb-6");
  description.textContent = post.description?.trim()
    ? post.description
    : "My pet needs an owner who’s loving.";
  const attributeContainer = document.createElement("div");
  attributeContainer.classList.add(
    "flex",
    "flex-wrap",
    "w-full",
    "py-4",
    "gap-4",
    "px-3",
    "justify-center",
    "capitalize",
  );

  const location = document.createElement("p");
  location.classList.add("px-2");
  location.innerHTML = `<i class="fa-solid fa-house mr-2", 'text-caption', 'font-medium', 'normal-case'></i>${post.location}`;

  const adoptionStatus = document.createElement("p");
  adoptionStatus.classList.add("px-2");
  adoptionStatus.innerHTML = `<i class="fa-solid fa-paw mr-2", 'text-caption', 'font-medium', 'normal-case'></i>${post.adoptionStatus}`;

  const gender = document.createElement("p");
  gender.classList.add("px-2");
  gender.innerHTML = `<i class="fa-solid fa-venus-mars mr-2", 'text-caption', 'font-medium', 'normal-case'></i>${post.gender}`;

  const age = document.createElement("p");
  age.classList.add("px-2");
  age.innerHTML = `<i class="fa-solid fa-baby-carriage mr-2", 'text-caption', 'font-medium', 'normal-case'></i>${post.age} years`;

  const breed = document.createElement("p");
  breed.classList.add("px-2");
  breed.innerHTML = `<i class="fa-solid fa-fingerprint mr-2", 'text-caption', 'font-medium', 'normal-case'></i>${post.breed}`;
  titleContent.append(title, speciesContainer, description, attributeContainer);

  const userDetailsContainer = document.createElement("div");
  userDetailsContainer.classList.add(
    "text-primary-fur100",
    "border-solid",
    "border-primary-fur100",
    "border-2",
    "flex",
    "flex-row",
    "justify-between",
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
  );
  const userDetailsContent = document.createElement("div");
  userDetailsContent.classList.add(
    "border-solid",
    "border-2",
    "h-fill",
    "border-primary-fur100",
    "px-6",
    "flex",
    "flex-col",
    "bg-primary-mayo100",
  );

  const userTitle = document.createElement("p");
  userTitle.classList.add("h4");
  userTitle.textContent = "owner details:";
  const username = document.createElement("p");
  username.classList.add(
    "text-body",
    "font-manrope",
    "font-italic",
    "font-semibold",
  );
  username.textContent = `${post.owner.name}`;
  const userEmail = document.createElement("p");
  userEmail.classList.add("caption", "text-brown-500");
  userEmail.textContent = `${post.owner.email}`;
  const userBio = document.createElement("p");
  userBio.classList.add("caption", "text-brown-800");
  userBio.textContent = post.owner.bio?.trim()
    ? post.owner.bio
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
  userAvatar.src = `${post.owner.avatar.url}`;
  userAvatar.alt = `${post.owner.avatar.alt || "Image of pet"}`;
  userAvatar.setAttribute("aria-label", `${post.owner.avatar.alt}`);

  userIconContainer.appendChild(userAvatar);
  userDetailsContent.append(userTitle, username, userEmail, userBio);
  userDetailsContainer.append(userDetailsContent, userIconContainer);

  attributeContainer.append(location, adoptionStatus, gender, age, breed);
  mainContent.append(titleContent, userDetailsContainer);
  mainContainer.append(pictureFrame, mainContent);

  return mainContainer;
}
