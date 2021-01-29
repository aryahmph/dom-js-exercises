// Image Feed Click
const mainImg = document.getElementById('main-img');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const feedImgs = ["photo", "photo-1", "photo-2"];
let feedImgsCount = 0;
checkImg();


const container = document.querySelector(".container");

container.addEventListener("click", function (el) {
    if (el.target.id == "next" || el.target.id == "prev") {
        // Next or Prev Button
        if (el.target.id == "next") {
            if (feedImgsCount != feedImgs.length - 1) {
                feedImgsCount++;
                changeImg();
            }
            checkImg();
        } else {
            if (el.target.style.opacity != 0) {
                feedImgsCount--;
                changeImg();
            }
            checkImg();
        }
    } else if (el.target.id == "close") {
        el.target.parentElement.parentElement.style.display = 'none';
    } else if (el.target.classList.contains("suka")) {
        el.target.classList.toggle('red-love');
    }
});

container.addEventListener('submit', function (el) {
    if (el.target.id == "comment") {
        el.preventDefault();
        const commentInput = document.getElementById('commentInput');

        const ul = document.querySelector(".feed-comment");

        const li = document.createElement('li');
        li.className = 'feed-comment-user';

        const divTxt = document.createElement('div');
        divTxt.className = "feed-comment-user-txt";

        const divFtr = document.createElement('div');
        divFtr.innerHTML = "<p class='suka'>Suka</p> <p>Balas</p>"
        divFtr.className = "feed-comment-user-features";

        const span = document.createElement('span');
        span.textContent = "aryahmph";

        const p = document.createElement('p');
        p.appendChild(span)
        p.appendChild(document.createTextNode(commentInput.value));

        divTxt.appendChild(p);

        li.appendChild(divTxt);
        li.appendChild(divFtr);

        ul.appendChild(li);
        commentInput.value = "";
    }
});




function checkImg() {
    if (feedImgsCount == 0) {
        prev.style.opacity = '0';
    } else {
        prev.style.opacity = '1';
    }

    if (feedImgsCount == feedImgs.length - 1) {
        next.style.opacity = '0';
    } else {
        next.style.opacity = '1';
    }
}

function changeImg() {
    mainImg.src = "img/feed/" + feedImgs[feedImgsCount] + ".jpg";
}