function openModal(imageSrc) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-image");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}


document.addEventListener("DOMContentLoaded", function () {
    const highlightButtons = document.querySelectorAll('.highlights-button');
    
    highlightButtons.forEach(button => {
        button.addEventListener('click', function () {
            this.classList.toggle('active');
            const highlightsContent = this.nextElementSibling;
            if (this.classList.contains('active')) {
                highlightsContent.style.maxHeight = highlightsContent.scrollHeight + 'px';
            } else {
                highlightsContent.style.maxHeight = '0';
            }
        });
    });

const dropdownLinks = document.querySelectorAll('.dropdown-content a');
dropdownLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

const projectThumbnails = document.querySelectorAll('.project-thumbnail img');
    projectThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            openModal(this.src);
        });
    });

const modal = document.getElementById("modal");
    modal.addEventListener('click', function (event) {
        if (event.target !== document.getElementById("modal-image")) {
            closeModal();
        }
    });
});