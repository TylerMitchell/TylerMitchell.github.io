function getProjectData(){
    //I will put up a backend so each of my projects can register themselves with my portfolio backend. 
    //Then I'll pull the data down and add the project link to my page. Never mess with this again unless I just want to pretty it up.
    //But for now...
    return [
        {
            imageSrc: "./assets/imageVisualizationPrediction.png",
            imageCaption: "Image Prediction App",
            name: "Detect Concepts from Images",
            contextText: {
                normal: "You can choose an image and see what ClarifAI's ML models can recognize and associated probabilities!"
            },
            tags: ["HTML", "CSS", "Javascript", "D3js", "ClarifAI", "API"],
            link: "https://image-prediction-visualization.web.app/",
            githubLink: "https://github.com/TylerMitchell/Image_Prediction_Tool",
            linksDisabled: false,
            underConstruction: false
        },
        {
            imageSrc: "./assets/CommanderDeckBuilder.png",
            imageCaption: "MTG Commander Deck Builder",
            name: "MTG Commander Deck Builder",
            contextText: {
                normal: "This is a tool to help you build and optimize your Commander Decks."
            },
            tags: ["HTML", "CSS", "Javascript", "D3js", "Scryfall", "API"],
            link: "https://tylermitchell.github.io/Commander_Deck_Builder/",
            githubLink: "https://github.com/TylerMitchell/Commander_Deck_Builder",
            linksDisabled: false,
            underConstruction: false
        },
        {
            imageSrc: "./assets/FakeHulu.png",
            imageCaption: "Fake Hulu Static Layout Project",
            name: "Fake Hulu Static Layout Project",
            contextText: {
                normal: "I copied Hulu to push my CSS skills"
            },
            tags: ["HTML", "CSS"],
            link: "https://tylermitchell.github.io/staticLayout/",
            githubLink: "https://github.com/TylerMitchell/staticLayout",
            linksDisabled: false,
            underConstruction: false
        },
        {
            imageSrc: "./assets/NewYorkTimesSearch.png",
            imageCaption: "New York Times Headline Search",
            name: "New York Times Headline Search",
            contextText: {
                normal: "This app allows you to search New York Times Headlines. I like the color Green..."
            },
            tags: ["HTML", "CSS", "Javascript", "New York Times", "API"],
            link: "https://tylermitchell.github.io/NewsSearchApp/index.html",
            githubLink: "https://github.com/TylerMitchell/NewsSearchApp",
            linksDisabled: false,
            underConstruction: false
        },
        {
            imageSrc: "./assets/CSSCreature.png",
            imageCaption: "CSS Creature",
            name: "CSS Creature Doodle",
            contextText: {
                normal: "I made a weird Creature thing!"
            },
            tags: ["HTML", "CSS", "Javascript"],
            link: "https://codepen.io/TylerMitchellIsAwesome/pen/eYZMozY",
            githubLink: "https://github.com/TylerMitchell/NewsSearchApp",
            linksDisabled: false,
            underConstruction: false
        },
        {
            imageSrc: "./assets/ShootShipsAndDontDie.png",
            imageCaption: "Shoot Ships and Don't Die",
            name: "Shoot Ships and Don't Die",
            contextText: {
                normal: "Shoot at ships and don't get shot. Pickup powerups to improve your rate of fire or health."
            },
            tags: ["Javascript", "Canvas"],
            link: "https://tylermitchell.github.io/ShootShipsAndDontDie/",
            githubLink: "https://github.com/TylerMitchell/ShootShipsAndDontDie",
            linksDisabled: false,
            underConstruction: false
        },
        {
            imageSrc: "./assets/BlueBadge.png",
            imageCaption: "Blue Badge TBA",
            name: "Blue Badge TBA",
            contextText: {
                normal: "Placeholder for what I will make in Blue badge"
            },
            tags: ["HTML", "CSS", "Javascript"],
            link: "",
            githubLink: "",
            linksDisabled: true,
            underConstruction: true
        },
        {
            imageSrc: "./assets/RedBadge.png",
            imageCaption: "Red Badge TBA",
            name: "Red Badge TBA",
            contextText: {
                normal: "Placeholder for what I will make in Red badge"
            },
            tags: ["HTML", "CSS", "Javascript"],
            link: "",
            githubLink: "",
            linksDisabled: true,
            underConstruction: true
        }
    ];
}

let tagLists = { ALL: [] };

function addProjectsToPage(projects){
    let container = document.querySelector("#cardContainer");
    let template = document.querySelector("#projectCard");

    let listContainer = document.querySelector("#jumpListContainer");
    function addTag(t){
        let item = document.querySelector("#jumpItem").content.cloneNode(true);
        let s = item.querySelector("span");
        s.innerText = t;
        listContainer.appendChild(item);
        s.addEventListener('click', (e) => {
            let addNodes = tagLists[e.target.innerText];
            let removeNodes = Object.values(cardContainer.children);
            removeNodes.forEach( (n) => {
                n.classList.add("fadeOut");
                setTimeout(() => {
                    n.style.display = "none";
                    addNodes.forEach( (a) => {
                        a.style.display ="block";
                        container.appendChild(a);
                        a.classList.remove("fadeOut")
                    });
                }, 500);
            });
            
            console.log(addNodes);
        });
    }
    addTag("ALL");

    projects.forEach( (project) => {
        let clone = template.content.cloneNode(true);
        clone.querySelector("img").src = project.imageSrc;
        clone.querySelector(".card-title").innerText = project.name;
        let links = clone.querySelectorAll("a");
        links[0].href = project.link;
        links[1].href = project.githubLink;
        clone.querySelector(".tagNames").innerText = project.tags.join(", ");
        clone.querySelector("p").innerText = project.contextText.normal;
        container.appendChild( clone );

        tagLists.ALL.push(container.lastElementChild);
        for(let i = 0; i < project.tags.length; i++){
            if( !tagLists.hasOwnProperty(project.tags[i]) ){
                tagLists[project.tags[i]] = [];
                addTag(project.tags[i]);
            }
            tagLists[project.tags[i]].push(container.lastElementChild);
        }
    });
}

addProjectsToPage( getProjectData() );

let darkModeActive = false;
document.querySelector("#navigation").classList.add("myNav");
function myListener(e){
    light.style.top = (e.pageY - 2000) + "px";
    light.style.left = (e.pageX - 2000) + "px";
};

document.querySelector("#darkModeButton").addEventListener('click', (e) => {
    let light = document.querySelector("#light");
    let n = document.querySelector("#navigation");
    darkModeActive = !darkModeActive;
    if(darkModeActive){
        document.addEventListener('mousemove', myListener)
        light.style.display = "block";
        document.querySelector("#mainNav").style.visibility = "hidden";
        n.classList.add("hideNavBg");
        n.classList.remove("myNav");
        e.target.innerText = "Exit Dark Mode";
    } else {
        document.removeEventListener('mousemove', myListener, false)
        light.style.display = "none";
        n.classList.remove("hideNavBg");
        n.classList.add("myNav");
        document.querySelector("#mainNav").style.visibility = "visible";
        e.target.innerText = "Try the New Dark Mode!";
    }
});