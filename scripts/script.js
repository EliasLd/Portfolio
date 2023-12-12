// -------------- Copie du texte -------------- //


function CopierText() {
var TextACopier = document.getElementById("TextACopier");
var tmp = document.createElement("input");
tmp.value = TextACopier.innerText;
document.body.appendChild(tmp);
tmp.select();
tmp.setSelectionRange(0, 99999);

document.execCommand("copy");
document.body.removeChild(tmp);
}

function Copie(){
    btnCopie.addEventListener("click", () =>{

        CopierText()
        
        piedDePage.appendChild(p)
        p.style.opacity = 1
        
    
        setTimeout(function(){
            p.style.opacity = 0
            setTimeout(function() {
                piedDePage.removeChild(p)
                }, 1000)
        }, 1000)
    })
}

// ---------------------------------------- //

const ratio = .4       //ratio de l'affichage
const options = {
    root:null,
    rootMargin : '0px',
    threshold : ratio     //détection à 10% de l'affichage
}

const intersection = function (entrées, observer) {
    entrées.forEach(function (entry) {
        if(entry.intersectionRatio > ratio){      //l'élément visible
            entry.target.classList.add("reveal-visible")
        }
        else{
            entry.target.classList.remove("reveal-visible")
        }
    })
}

const observer = new IntersectionObserver(intersection, options)
document.querySelectorAll(".reveal").forEach(function (t){
    observer.observe(t)
})