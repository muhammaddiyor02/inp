var inpB = document.querySelector('.inp1')
var inpI = document.querySelector('.inp2')
var btn = document.querySelector('#btn')
var list = document.querySelector('.lis')


btn.addEventListener('click', function(e){
e.preventDefault();

var arr = ['olma','behi','nok','tarvuz','qovun','uzum','anor','gilos'];  
var inp = inpI.value

for( i = 0; i < arr.length; i++ ){
  console.log(i); 

  if(inpB.value == 'div'&& arr[i] == inp){
    var div = document.createElement('div')
    div.textContent = arr[i]
    list.appendChild(div)
    inpB.value = ''
    inpI.value = ''
  }
  if(inpB.value == 'mark'&& arr[i] == inp){
    var mark = document.createElement('mark')
    mark.textContent = arr[i]
    list.appendChild(mark)
    inpB.value = ''
    inpI.value = ''
  }
  if(inpB.value == 'h1'&& arr[i] == inp){
    var tit = document.createElement('h1')
    tit.textContent = arr[i]
    list.appendChild(tit)
    inpB.value = ''
    inpI.value = ''
  }
  if(inpB.value == 'p'&& arr[i] == inp){
    var text = document.createElement('p')
    text.textContent = arr[i]
    list.appendChild(text)
    inpB.value = ''
    inpI.value = ''
  }
  if(inpB.value == 'li'&& arr[i] == inp){
    var li = document.createElement('li')
    li.textContent = arr[i]
    list.appendChild(li)
    inpB.value = ''
    inpI.value = ''
  }
  if(inpB.value == 'span'&& arr[i] == inp){
    var sp = document.createElement('span')
    sp.textContent = arr[i]
    list.appendChild(sp)
    inpB.value = ''
    inpI.value = ''
  }
  if(inpB.value == 'img'&& arr[i] == inp){
    var im = document.createElement('img')
   var imgg =  im.src = ''
    im.textContent = imgg
    list.appendChild(im)
    inpB.value = ''
    inpI.value = ''
  }
 

}

})
