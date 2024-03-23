var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// })

let watchList = $('.watchList')
console.log({watchList});

function onChooseImage(index){
  console.log(watchList[index].src); 
  $('#watchZoom').attr("src",watchList[index].src)
}