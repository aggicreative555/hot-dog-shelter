import { buttonBase } from "../buttons/buttonTemplate";

export function signUpCard() {
  const container = document.getElementById("signUpCard");
  const mainContainer = document.createElement("div");
  mainContainer.classList.add(
    "text-primary-mayo100",
    "bg-accent-ketchup100",
    "border-solid",
    "border-primary-fur100",
    "border-2",
    "h-fit",
    "w-full",
    "flex",
    "flex-row",
    "justify-center",
    "my-4",
    "outline",
    "outline-[3px]",
    "outline-offset-[16px]",
    "outline-primary-fur100",
  );

  const insideBorderContainer = document.createElement("div");
  insideBorderContainer.classList.add(
    "border-solid",
    "border-primary-mayo100",
    "border-2",
    "m-4",
    "py-4",
    "w-full",
  );

  const titleContent = document.createElement("h3");
  titleContent.classList.add(
    "flex",
    "flex-col",
    "align-middle",
    "justify-center",
    "w-full",
    "text-center",
    "uppercase",
  );
  const line1 = document.createElement("span");
  line1.textContent = "does your";
  line1.classList.add("text-2xl", "uppercase", "font-academy");
  const line2 = document.createElement("span");
  line2.textContent = "pet";
  line2.classList.add("h2");
  const line3 = document.createElement("span");
  line3.textContent = "need a new";
  line3.classList.add("text-2xl", "uppercase", "font-academy");
  const line4 = document.createElement("span");
  line4.textContent = "home";
  line4.classList.add("h2");
  titleContent.append(line1, line2, line3, line4);

  const isMediumScreen = window.innerWidth >= 768;

  const pictureFrame = document.createElement("div");
  pictureFrame.classList.add(
    "border-solid",
    "border-[5px]",
    "border-primary-mayo100",
    "my-4",
    "w-full",
    "max-w-xl",
    "mx-auto",
    "p-4",
    "m-2",
  );
  const pic = document.createElement("img");
  pic.classList.add("w-full", "h-auto", "object-contain", "mx-auto", "block");
  pic.src = isMediumScreen
    ? "/images/man-with-dog-in-leash-884w.jpg" // larger version
    : "/images/man-with-dog-in-leash-278w.jpg"; // smaller version
  pic.alt = "An old picture of a man and a dog ona leash";
  pic.setAttribute("aria-label", "A man and a dog on a leash");
  pictureFrame.appendChild(pic);

  const darkContainer = document.createElement("div");
  darkContainer.classList.add(
    "m-4",
    "py-4",
    "w-fit",
    "relative",
    "bg-primary-fur100",
    "h-fit",
    "text-center",
    "flex",
    "flex-col",
    "items-center",
    "gap-4",
  );
  const description = document.createElement("p");
  description.classList.add(
    "normal-case",
    "font-academy",
    "text-2xl",
    "text-center",
    "text-primary-mayo100",
    "py-10",
    "w-full",
    "px-8",
    "text-pretty",
  );
  description.textContent =
    "Creating an account will allow you to post about your pet, letting you find your pets most suitable match! Edit your profile and let other owners know about you as an owner, before you decide to adopt.";
  const titleContent2 = document.createElement("h4");
  titleContent2.classList.add(
    "flex",
    "flex-col",
    "align-middle",
    "items-center",
    "w-full",
    "text-center",
    "mb-10",
    "z-10",
  );
  const signUp = document.createElement("span");
  signUp.textContent = "sign up";
  signUp.classList.add("h1-nigara", "uppercase");
  const today = document.createElement("span");
  today.textContent = "today";
  today.classList.add("text-5xl", "font-academy", "uppercase");
  const ctaButton = document.createElement("a");
  ctaButton.classList.add("group", "py-4", "w-fit", "h-fit");
  ctaButton.setAttribute("aria-label", "Register a new user");
  ctaButton.title = "Go to register page";
  const ctaIcon = document.createElement("img");
  ctaIcon.src = "/icon/custom-arrow-icon.svg";
  ctaIcon.classList.add = "w-fit";
  ctaIcon.alt = "Arrow icon";
  const button = buttonBase({ type: "display", label: "Register" });
  button.classList.add("gap-2");
  button.appendChild(ctaIcon);
  ctaButton.appendChild(button);
  titleContent2.append(signUp, today, ctaButton);

  const disclaimer = document.createElement("p");
  disclaimer.classList.add("caption", "w-fit", "h-fit");
  disclaimer.textContent =
    "No additional fee or condition is required to register an account with © Hot Dog Shelter.";

  const bgGraphic = document.createElement("img");
  bgGraphic.src = "/images/exclamation-mark-79w.png";
  bgGraphic.alt = "See-through exclamation mark";
  bgGraphic.classList.add("absolute", "top-1/3", "z-0");
  darkContainer.append(description, titleContent2, disclaimer, bgGraphic);

  insideBorderContainer.append(titleContent, pictureFrame, darkContainer);
  mainContainer.appendChild(insideBorderContainer);

  container.appendChild(mainContainer);
  return container;
}
