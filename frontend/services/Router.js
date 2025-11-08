import { routes } from "./Routes.js";

const router = {
    init: () => {
        console.log("In the router");
        document.querySelectorAll("a.navlink").forEach(
            a => {
                a.addEventListener("click", function (e) {
                    e.preventDefault();
                    const href = a.getAttribute("href");
                    router.go(href);
                });
            }
        );

        window.addEventListener("popstate", () => {
            router.go(location.pathname, false);
        });

        router.go(location.pathname + location.search);

    },
    go: (route, addToHistory=true) => {
        if(addToHistory){
            history.pushState(null, "", route);
        }

        const routePath = route.includes("?") ? route.split("?")[0] : route;
        let pageElement = null;
        for(const r of routes){
            if(typeof r.path === "string" && r.path === routePath){
                console.log("found path")
                pageElement = new r.component();
                break;
            }

        }

        if(pageElement == null){
            pageElement = document.createElement("h1");
            pageElement.textContent = "Page Not Found";
        }

        document.querySelector(".content").innerHTML = "";
        document.querySelector(".content").appendChild(pageElement);
    }
}


export default router