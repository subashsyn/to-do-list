textDOM = document.querySelector("#task")
listDOM = document.querySelector("#list")

function addFunc(){
    
    if (textDOM.value != Boolean(textDOM.value.trim())){
        const liDOM = document.createElement("li")
        const removeButon = document.createElement('button')
        const doneButton = document.createElement('button')
        doneButton.innerHTML = "✔"
        doneButton.classList.add("mx-2")
        removeButon.id = "remove"
        removeButon.style = "float:right;"
        removeButon.classList.add("btn-secondary")
        removeButon.innerHTML = '<i class="fa-solid fa-xmark">x</i>';
        
        removeButon.onclick = removeFunc = () => {
            liDOM.remove()
        }
        liDOM.id = "element"
        liDOM.innerHTML = textDOM.value
        listDOM.append(liDOM)
        liDOM.appendChild(removeButon) 
       
        liDOM.onclick = doneFunc = () => {
            if (liDOM.classList.contains("bg-primary")){
                liDOM.classList.remove("bg-primary")
                liDOM.style = "color: black;"
                doneButton.remove()
                
            }
            
                else{
                    
                
                liDOM.classList.add("bg-success")
                liDOM.classList.add("border")

                liDOM.appendChild(doneButton)
                
                liDOM.style = "text-decoration: line-through;"
                liDOM.appendChild(a)
                
                }
            
        }
    }
    else{
        alert("dfbfnghmjgfd ");
        
    }
    textDOM.value = ""
    localStorage.add(liDOM.value)

}