let btn = document.getElementById('btn')
let set = document.getElementById('set')

btn.addEventListener('click',function(){
    let weight = document.getElementById('weight-input').value
    let height = document.getElementById('height-input').value
    let finalbmi = (weight /(height * height) * 10000)
    document.getElementById('bmi-output').value = finalbmi
  
})
//reset button //
document.getElementById('set')
.addEventListener('click',useData)
function useData(){
  document.getElementById('weight-input').value = ''
}
document.getElementById('set')
.addEventListener('click',wetData)
function wetData(){
  document.getElementById('height-input').value = ''
}

document.getElementById('set')
.addEventListener('click',seeData)
function seeData(){
  document.getElementById('bmi-output').value = ''
}