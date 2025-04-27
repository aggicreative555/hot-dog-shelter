import { navToggler } from "../../utilities/navToggler";
import { signUpCard } from "../../ui/components/post/signUpCard";
import { readPosts } from "../../api/post/read";
import { buttonBase } from "../../ui/components/buttons/buttonTemplate";
import { renderMultiplePosts } from "../../ui/post/renderPost";
import { setupPostClickNavigation } from "../../ui/post/renderPost";
import { carousel } from "../../ui/global/carousel";

async function initializeHome() {
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");
  if (header && footer) {
    navToggler();
  } else {
    console.error("No #footer or #header element located in the DOM");
  }

  carousel("carousel", 5000);

  const container = document.getElementById("postListSection");
  if (container) {
    const posts = await readPosts({
      limit: 3,
      page: 8,
      sort: "created",
      sortOrder: "desc",
      active: true,
    });
    renderMultiplePosts(posts);
    setupPostClickNavigation();
    container.append(
      buttonBase({
        type: "secondary",
        label: "See All Pets",
        href: "/pets/",
      }),
    );
  } else {
    console.error("Container #postsContainer not found in DOM");
  }

  signUpCard();
}

initializeHome();
