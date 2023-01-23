let list = document.querySelector("ul");
let entry = document.getElementById("formaAddName");

entry.onsubmit = AjoutPost ;
uploadedImage="";
let display=document.createElement("img");
let image = document.getElementById("img");
    console.log(typeof(image));
    image.addEventListener("change",function(){
      const reader=new FileReader();
      reader.addEventListener("load",()=>{
        uploadedImage=reader.result;
        display=`url(${uploadedImage})`;
      });
      reader.readAsDataURL(this.files[0]);
    });
function AjoutPost(e) {
    e.preventDefault();
    let nom = document.getElementById("nom").value;

    

    let li = document.createElement("li");
    
    let button = document.createElement("button");
    button.addEventListener("click", deleteTodo);
    button.innerText = "Supprimer";


    let img = document.createElement("div");
    
    console.log(image.value);
    
    img.style.backgroundImage=display;
    img.style.width="100px";
    img.style.height="100px";
    li.appendChild(button);
    li.appendChild(document.createTextNode(nom));
    li.appendChild(img);
    list.appendChild(li);
}

function deleteTodo(e) {
        e.target.parentElement.remove();
      }