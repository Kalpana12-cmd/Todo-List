let arr =[{
    name:'',
    dueDate :''
},
    {
        name:'',
        dueDate:''
    }];
fun1();
function fun1(){
let htmlElement = '';
arr.forEach((todoObject,index)=>{ 
//for(let i=0;i <arr.length ;i++ ){
  //  let todoObject = arr[index];
    const {name,dueDate} = todoObject;
    const html = ` 
   <div> ${name} </div>
   <div> ${dueDate} </div>
    <button class="delete-todo-button js-delete-button">Delete</button> 
      `;
      
    htmlElement += html;
     
});

document.querySelector('.container')
.innerHTML = htmlElement;

document.querySelectorAll('.js-delete-button').forEach((deleteButton,index) => {
    deleteButton.addEventListener('click',()=>{
        arr.splice(index,1);
        fun1();
    });
});
}
    document.querySelector('.js-add-button').addEventListener('click',()=>{
        content();  
    });
 function content(){
     const bar = document.querySelector('.js-bar');     
    const name = bar.value;
    const dateInputElement = document.querySelector('.calender');
    const dueDate = dateInputElement.value;
    if( name ===  "" || dueDate === ""){
        alert("Please enter a valid task and date.")
        return;
    }
    arr.push({
        name,
        dueDate
    });
    
    bar.value = '';
    fun1();
  }
   
