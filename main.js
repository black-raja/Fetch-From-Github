let userInput = document.querySelector(".get-repos input")//user input text
let getButton = document.querySelector(".get-button")
let showData = document.querySelector(".show-data")
let table = document.querySelector("#table-body")
let curruntid = 1
console.log(showData)
getButton.addEventListener("click", function () {
  getData()
})

function getData() {
  if (userInput.value === "") {
    showData.innerHTML = "No user Input"
  } else {
    fetch(`https://api.github.com/users/${userInput.value}/repos`)
      .then((response) => response.json())
      .then((data) => data.forEach(ele => {
        let newRow = document.createElement("tr");
        // Create new cells
        let idCell = document.createElement("td");
        idCell.innerHTML = curruntid++
        let nameCell = document.createElement("td");
        let newAtag = document.createElement("a")
        newAtag.setAttribute("href", ele.html_url)
        newAtag.setAttribute("target", "_blank")
        newAtag.setAttribute("data-hover", "Click Here To Open Link")
        newAtag.className = "hovertext"
        newAtag.textContent = ele.name
        nameCell.appendChild(newAtag)
        let startsCell = document.createElement("td");
        startsCell.innerHTML = ele.stargazers_count
        let watchersCell = document.createElement("td");
        watchersCell.innerHTML = ele.watchers_count
        newRow.appendChild(idCell)
        newRow.appendChild(nameCell)
        newRow.appendChild(startsCell)
        newRow.appendChild(watchersCell)
        table.appendChild(newRow)
      }));

  }
}
