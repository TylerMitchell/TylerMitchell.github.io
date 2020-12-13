function getProjectData(){
    //I will put up a backend so each of my projects can register themselves with my portfolio backend. 
    //Then I'll pull the data down and add the project link to my page. Never mess with this again unless I just want to pretty it up.
    //But for now...
    return [
        {
            imageSrc: "./assets/DateMixUp.png",
            imageCaption: "Date  MixUp",
            name: "Date Mixup",
            contextText: {
                normal: "A video speed dating app for meeting people face to face in a fun and safe way!"
            },
            tags: ["HTML", "CSS", "Javascript", "MaterialUI", "Postgres", "React", "Express", "NodeJS", "Sequelize", "PERN", "WebRTC", "WebSockets"],
            link: "https://date-mixup.herokuapp.com/",
            githubLink: "https://github.com/TylerMitchell/date_mixup_client",
            linksDisabled: false,
            underConstruction: false
        },
        {
            imageSrc: "./assets/Personary.png",
            imageCaption: "Personary",
            name: "Personary",
            contextText: {
                normal: "An app built for creating and managing Persona's that could be used by Authors or Marketing Companies."
            },
            tags: ["HTML", "CSS", "Javascript", "Bootstrap", "Postgres", "React", "Express", "NodeJS", "Sequelize", "PERN"],
            link: "https://personary-client.herokuapp.com/",
            githubLink: "https://github.com/TylerMitchell/BlueBadgeProjectGroup3ClientSide",
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
            tags: ["HTML", "CSS", "Javascript", "Bootstrap", "D3js", "Scryfall", "API"],
            link: "https://tylermitchell.github.io/Commander_Deck_Builder/",
            githubLink: "https://github.com/TylerMitchell/Commander_Deck_Builder",
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
            imageSrc: "./assets/ImageVisualizationPrediction.png",
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

window.mobileAndTabletCheck = function() {
let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

if(!window.mobileAndTabletCheck){ document.querySelector("#darkModeButton").style.display = "none"; }

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

class BorderRenderer{
    constructor(){

    }

    trianglePattern = (canvas, height, bottomColor) => {
        canvas.width = window.innerWidth;
        canvas.height = height;
        let ctx = canvas.getContext('2d');

        ctx.fillStyle = bottomColor;
        let stampW = height*2;
        let halfStampW = stampW/2;
        for( let i = 0; i< canvas.width/stampW; i++ ){
            ctx.beginPath();
            let startX = stampW*i;
            let endX = stampW*i +halfStampW;
            ctx.moveTo(startX, 0);
            ctx.lineTo(endX, halfStampW);
            ctx.lineTo(startX, halfStampW);
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(startX + stampW, 0);
            ctx.lineTo(startX + halfStampW, halfStampW);
            ctx.lineTo(startX + stampW, stampW);
            ctx.fill();
        }
    }

    squarePattern = (canvas, height, bottomColor) => {
        canvas.width = window.innerWidth;
        canvas.height = height;
        let ctx = canvas.getContext('2d');

        ctx.fillStyle = bottomColor;
        let w = canvas.width;
        let h = canvas.height;
        for(let i=0; i < (w/h); i++){
            ctx.fillRect(h*2*i, 0, h, h);
        }
    }

    circlePattern = (canvas, height, circleColor, spacing) => {
        canvas.width = window.innerWidth;
        canvas.height = 30;
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = circleColor;
        let w = canvas.width;
        let halfH = height/2;
        let halfS = spacing/2;
        for(let i=0; i < w/height; i++){
            ctx.beginPath();
            ctx.arc( halfH + height*i, halfH, halfH-halfS, 0, Math.PI*2);
            ctx.fill();
        }
    }
}

let renderer = new BorderRenderer();
renderer.squarePattern( document.getElementById("aboutProjectsBorder"), 30, "#FDCF00");
renderer.trianglePattern( document.getElementById("projectsContactBorder"), 30, "green");
renderer.circlePattern( document.getElementById("contactFooterBorder"), 30, "#41C4DC", 14);