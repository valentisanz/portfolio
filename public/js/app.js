let dotsCounter = 0
let knowledgeCount = 0

function setMyActualAge() {
  var birthMonth = 09
  var birthDay = 14
  var birthYear = 1999

  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var currentMonth = currentDate.getMonth();
  var currentDay = currentDate.getDate();
  var calculatedAge = currentYear - birthYear;

  if (currentMonth < birthMonth - 1) {
    calculatedAge--;
  }
  if (birthMonth - 1 == currentMonth && currentDay < birthDay) {
    calculatedAge--;
  }

  document.getElementById("age")
    .innerHTML += `${calculatedAge} years old`;
  setTimeout(ageEffect, 1000);

}
setMyActualAge()

function ageEffect() {
  if (dotsCounter == 3) {
    var str = document.getElementById("age").innerHTML
    var res = str.substr(0, str.length - 3)
    document.getElementById("age").innerHTML = res
    dotsCounter = -1
  } else {
    document.getElementById("age").innerHTML += `.`
  }
  setTimeout(ageEffect, 750);
  dotsCounter++
}


function showKnowledges() {
  const knowledges = ['Java', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'NodeJS', 'express', 'Python', 'Angular', 'React', 'Dart', 'Flutter', ]
  const arrLength = knowledges.length

  document.getElementById("knowledges").innerHTML = `${knowledges[knowledgeCount]}`
  knowledgeCount++
  setTimeout(showKnowledges, 1000);

}
setTimeout(showKnowledges, 1000);