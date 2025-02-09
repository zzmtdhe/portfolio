document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".item img");
    images.forEach(img => {
        img.addEventListener("click", function () {
            alert("你点击了：" + img.alt);
        });
    });
});
