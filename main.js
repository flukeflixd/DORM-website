document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById("downloadDemo").addEventListener("click", function() {
    const link = document.createElement("a");
    // link.href = "";  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});