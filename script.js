let section = document.querySelector("section"),
  icons = document.querySelector(".icons")

icons.onclick = () => {
  section.classList.toggle("dark")
}

//Criando uma função e a chamando a cada segundo

setInterval(() => {
  let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds()

  let d
  d = hour < 12 ? "AM" : "PM" //Se a hora for menor que 12, seu valor será AM senão seu valor será PM.
  hour = hour > 12 ? hour - 12 : hour //Se o valor da hora for maior que 12, então 12 será subtraido.(Ao fazer isso, obteremos o valor até 12, não 13,14 ou 24)
  hour = hour == 0 ? (hour = 12) : hour //Se o valor da hora dor 0, seu valor será 12.

  //Adicionando 0 a frente de todo o valor se eles forem menores que 10

  hour = hour < 10 ? "0" + hour : hour
  min = min < 10 ? "0" + min : min
  sec = sec < 10 ? "0" + sec : sec

  document.querySelector(".hour_num").innerText = hour

  document.querySelector(".min_num").innerText = min

  document.querySelector(".sec_num").innerText = sec

  document.querySelector(".am_pm").innerText = d
}, 1000) // 1000 milisecundos = 1s
