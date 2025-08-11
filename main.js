const container =document.getElementById('container');
const numberPage =document.getElementById('number_Page');
console.log(numberPage)
if(!localStorage.getItem('apiData')){

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    localStorage.setItem('apiData', JSON.stringify(data));
    console.log('Data saved to localStorage');
  })
  .catch(error => console.error('Error:', error));
}
// بازیابی داده
const savedData = JSON.parse(localStorage.getItem('apiData'));
let page = 1
const item = 3
console.log( savedData);
function slicedArray() {
  const firstIndex = (page*item)-item
  const lastIndex = page*item
  savedDataSlice =savedData.slice(firstIndex,lastIndex)
  savedDataSlice.forEach(item =>
  container.insertAdjacentHTML("beforeend", `
<li>
id : ${item.id} name : ${item.name}
</li>`)
);
}
slicedArray()
const indexPage = Math.ceil(savedData.length / item);
console.log(indexPage)
for (let i = 1; i <= indexPage; i++) {
creatNumber(i)
}
function creatNumber(i) {
  const btnElem = document.createElement('button')
btnElem.innerText = `${i}`
numberPage.appendChild(btnElem);
btnElem.addEventListener('click',function(){
  const btnInnerText = event.target.innerText;
  page = btnInnerText
container.innerHTML = ''
console.log(btnInnerText)
console.log('page',page)
slicedArray()
})
};