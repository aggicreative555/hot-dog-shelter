import { adminNav } from "../ui/components/nav/adminNav";
import { userNav } from "../ui/components/nav/userNav";
import { load } from "./authGuard";

export function navToggler() {
    const isLoggedIn = load('accessToken');
    const header = document.getElementById('header');

    if (isLoggedIn) {
        const loggedinNav = adminNav();
        header.appendChild(loggedinNav);
    } else {
        const notLoggedNav = userNav();
        header.appendChild(notLoggedNav);
    }
}