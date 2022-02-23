console.log('Jour 2')

// var plat1 = 'Ceeb'
// var plat2 = 'Maafe'
// var plat3 = 'Domodaa'
// var plat4 = 'Suluxu'

var plats = ['Ceeb', 'Maafe', 'Domodaa', 'Suluxu']
// var plats = new Array('Ceeb', 'Maafe', 'Domodaa', 'Suluxu')
// plats.sort()
// longeur: plat.length

// ajout a la fin
// plats.push('Mbaxal')
// ajout au debut
// plats.unshift('Mbaxalu Saalum')
// supprimer le dernier element
// plats.pop()
// supprimer le premier leement
// plats.shift()
// plats.splice(0, 1, 'Suppu Kanja')

// Objects
var menuDuJour = {
  entree: 'Jus Local',
  platDuJour: 'Maafe',
  boisson: 'Thé',
  prix: 5000,
}

var menuDelaSemaine = [
  {
    entree: 'Jus Bissaap',
    platDuJour: 'Maafe',
    boisson: 'Thé',
    prix: 5000,
  },
  {
    entree: 'Geerté caaf',
    platDuJour: 'Ceeb',
    boisson: 'Thé',
    prix: 5000,
  },
  {
    entree: 'Jus Bouye',
    platDuJour: 'Mbaxal',
    boisson: 'Thé',
    prix: 5000,
  },
]

// les boucles en JS

/*

while
do ... while
for
for ... in
for ... of

*/
// while
// var nombre = 1
// while (nombre <= 3) {
//   console.log(nombre)
//   nombre++
// }
// do while
// do {
//   console.log(nombre)
//   nombre++
// } while (nombre <= 3)

// boucle for
// for (var nombre = 1; nombre <= 5; nombre++) {
//   console.log(nombre)
// }

// boucle for in
var menuDuJour = {
  entree: 'Jus Local',
  platDuJour: 'Maafe',
  boisson: 'Thé',
  prix: 5000,
}
var plats = ['Ceeb', 'Maafe', 'Domodaa', 'Suluxu']

// for (element in plats) {
//   console.log(element, plats[element])
// }

// boucle for of
for (element of plats) {
  console.log(element)
}
