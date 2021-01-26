const container = document.getElementsByClassName("container")[0];
const preview = document.getElementsByClassName("preview")[0];
const thumbs = document.querySelectorAll(".thumb");

container.addEventListener("click", function (el) {
    if (el.target.classList.contains("thumb")) {
        preview.src = el.target.src
        preview.classList.toggle("fadeIn");

        setTimeout(function () {
            preview.classList.remove("fadeIn");
        }, 500);

        thumbs.forEach(function (thumb) {
            thumb.className = "thumb";
        });

        el.target.classList.add("thumb-active");
    }
});