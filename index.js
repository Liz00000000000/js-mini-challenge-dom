/***** Deliverable 1 *****/
const header = document.querySelector("#header")
console.log("Here's your header:", header)

/***** Deliverable 2 *****/
header.style.color = "red"

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

playerDiv = document.querySelector(".player-container")

PLAYERS.forEach(player => {
    playerDiv.innerHTML += `<div class="player" data-number="${player.number}"><h3>
      ${player.name} (<em>${player.nickname}</em>)
    </h3>
    <img src="${player.photo}" alt="${player.name}">
  </div>`
});


const person = document.querySelector(`[data-number="7"]`)

console.log(person)
person.remove()

// const playerOnScreem = document.querySelectorAll(".player")
// const peron = playerOnScreem[data-number='7']

// function removeDiv (person){
//     person.removeChild(person)
// }