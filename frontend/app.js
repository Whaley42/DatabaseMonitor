import router from "./services/router.js";

window.app={
    router,
};

window.addEventListener("DOMContentLoaded", () => {
    app.router.init();
    console.log("Hello")
})