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

