let typed = new Typed('.typed', {
    stringsElement: '#cadenasJob',
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
});

function home() {
    let divs_section = document.getElementsByClassName("div-section");
    for (let i=0; i < divs_section.length; i++){
        divs_section[i].style.display = "none";
    }

    let div_home = document.getElementById("home");
    div_home.style.display = "block";
}

function about() {
    let divs_section = document.getElementsByClassName("div-section");
    for (let i=0; i < divs_section.length; i++){
        divs_section[i].style.display = "none";
    }

    let div_about = document.getElementById("about");
    div_about.style.display = "flex";
    div_about.classList.add("flex-column");
    div_about.classList.add("justify-content-center");
    div_about.classList.add("align-items-center");
}

function skills() {
    let divs_section = document.getElementsByClassName("div-section");
    for (let i=0; i < divs_section.length; i++){
        divs_section[i].style.display = "none";
    }

    let div_skills = document.getElementById("skills");
    div_skills.style.display = "flex";
    div_skills.classList.add("flex-column");
    div_skills.classList.add("justify-content-center");
    div_skills.classList.add("align-items-center");
}
