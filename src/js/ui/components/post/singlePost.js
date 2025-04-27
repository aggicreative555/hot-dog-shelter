export function singlePost(post) {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add(
    "post-item",
    "text-primary-mayo100",
    "bg-brown-800",
    "capitalize",
    "border-solid",
    "border-primary-fur100",
    "border-2",
    "h-fit",
    "w-fit",
    "flex",
    "flex-col",
    "outline",
    "outline-[3px]",
    "outline-offset-[8px]",
    "outline-primary-fur100",
    "max-w-[480px]",
    "min-h-[739px]",
    "group",
    "hover:font-medium",
    "hover:outline-[9px]",
    "hover:bg-brown-900",
    "hover:text-brown-300",
    "focus:font-medium",
    "focus:outline-[9px]",
    "transition-all",
    "duration-150",
    "ease-in-out",
  );
  mainContainer.dataset.id = `${post.id}`;

  const pictureFrame = document.createElement("div");
  pictureFrame.classList.add(
    "relative",
    "w-full",
    "max-w-xl",
    "mx-auto",
    "overflow-hidden",
    "h-[430px]",
  );
  const pic = document.createElement("img");
  pic.classList.add("w-full", "h-full", "object-cover", "block");
  const placeholderImage =
    "https://unsplash.com/photos/grayscale-photo-of-man-and-dog-VvSY-fOx6pw";
  if (!post.image?.url || post.image.url.includes("example.com")) {
    pic.src = placeholderImage;
  } else {
    pic.src = post.image.url;
  }
  pic.classList.add("w-fill", "h-auto", "object-cover", "mx-auto", "block");
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
    "opacity-30",
    "pointer-events-none",
    "group-hover:opacity-0",
  );
  pictureFrame.appendChild(pic);
  pictureFrame.appendChild(overlay);

  const mainContent = document.createElement("div");
  mainContent.classList.add(
    "focus:border-brown-200",
    "focus:border-2",
    "pb-8",
    "pt-4",
    "px-5",
  );

  const titleContent = document.createElement("div");
  titleContent.classList.add(
    "flex",
    "flex-row",
    "justify-between",
    "w-full",
    "md:flex-col-reverse",
    "md:items-center",
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
    "md:text-center",
    "text-left",
    "h-fit",
    "group-hover:bg-brown-400",
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

  titleContent.append(title, speciesContainer);

  const attributeContainer = document.createElement("div");
  attributeContainer.classList.add(
    "flex",
    "flex-wrap",
    "w-full",
    "py-4",
    "gap-4",
    "px-3",
    "md:justify-center",
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

  attributeContainer.append(location, adoptionStatus, gender, age, breed);
  mainContent.append(titleContent, attributeContainer);
  mainContainer.append(pictureFrame, mainContent);

  return mainContainer;
}
