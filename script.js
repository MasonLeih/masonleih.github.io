function expandFlower(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    var flower = document.getElementById('flower');
    flower.classList.add('expanded');
    setTimeout(function() {
        window.location.href = flower.getAttribute('href');
    }, 3000); // Adjust the timeout based on your animation duration
}
