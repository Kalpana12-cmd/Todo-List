let arr =[{
    name:'movie',
    dueDate :'12-04-2025'
},
    {
        name:'wash dinner',
        dueDate:'12-06-2025'
    }];
fun1();
function fun1(){
let htmlElement = '';
for(let i=0;i <arr.length ;i++ ){
    const todoObject = arr[i];
    const {name} = todoObject;
    const {dueDate} = todoObject;
    const html = ` 
   <div> ${name} </div>
   <div> ${dueDate} </div>
    <button class="delete-todo-button" onclick="
    arr.splice(${i},1);
    fun1();
    ">Delete</button> 
      `;
      
    htmlElement += html;
    const div = document.querySelector('.container')
    .innerHTML = htmlElement;
}
 
}
 function content(){
     const bar = document.querySelector('.js-bar');     
    const name = bar.value;
    const dateInputElement = document.querySelector('.calender');
    const dueDate = dateInputElement.value;
    arr.push({
        name,
        dueDate
    });
    
    bar.value = '';
    fun1();
  }
