
let health = 100

let damageTaken = 10
let currentImg = 1





function defense(id) {
  if (id === 'defense1' && damageTaken === 10) {
    damageTaken = (damageTaken - 5)
  }
  if (id === 'defense2' && damageTaken === 10) {
    damageTaken = (damageTaken - 6)
  }
  if (id === 'defense3' && damageTaken === 10) {
    damageTaken = (damageTaken - 7)
  }
  if (id === 'stop') {
    damageTaken = 10
    console.log("block");
  }

}



function attack(id) {
  if (id === 'attack1') {
    health = health - (damageTaken - 3)
  }
  if (id === 'attack2') {
    health = health - (damageTaken)
  }
  if (id === 'attack3') {
    health = health - (damageTaken + 3)
  }
  draw()
  changeImage()
}



function changeImage() {
  if (health >= 80) {
    currentImg = 2
  } else if (health >= 60) {
    currentImg = 3
  } else if (health >= 40) {
    currentImg = 4
  } else if (health >= 20) {
    currentImg = 5
  } else { currentImg = 6 }
}


function draw() {
  document.getElementById('stickGuy').src = `./Assets/stickdude${currentImg}.png`
  document.getElementById('currentHealth').innerText = health.toString()
}
