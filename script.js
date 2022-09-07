function addMe(){
    let dispesa = document.querySelector("input[name='cadastro-dispesa']").value;
    let valor = document.querySelector("input[name='cadastro-valor']").value;
    let dataPagamento = document.querySelector("input[name='cadastro-data']").value;

    let newListValue = document.createElement("li");
    newListValue.innerText = "A " + dispesa + " no valor de R$" + valor + " foi paga nesta data " + dataPagamento;
    

    // elemento para a remoção
    let removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.innerText = "Remover";
    removeButton.setAttribute("onclick", "removeDispesa(this)")

    newListValue.appendChild(removeButton)

    document.getElementById("dispesas-list").appendChild(newListValue)
} 

function removeDispesa(button){
    let liToRemove = button.parentNode
    document.getElementById("dispesas-list").removeChild(liToRemove)
}


