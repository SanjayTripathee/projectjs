let todolist=[{
    name:'Make meal',
    duedate:'2024-10-13'
},{
     name:'Eat it',
    duedate:'2024-10-13'
}]

render();

function render(){
 
let todolisthtml = '';

//we are using .forEach loop instead of for loop ok...

todolist.forEach((todoobject,index)=>{
    // let name = todoobject.name
    // let duedate = todoobject.duedate
    //shortcut of above both  comment
   let {name,duedate}=todoobject;


    let html = `
   <div> ${name}</div>
   <div>${duedate}</div>
    <button class="delete jsdeletebutton"> Delete</button>
    `;
    
    todolisthtml += html;
});
/*
 for( i=0;i<todolist.length;i++){
    let todoobject = todolist[i];
    // let name = todoobject.name
    // let duedate = todoobject.duedate
    //shortcut of above both  comment
   let {name,duedate}=todoobject;


    let html = `
  <div> ${name}</div>
   <div>${duedate}</div>
    <button onclick="
    todolist.splice(${i},1);
    render();
    " class="delete"> Delete
    </button>
    `;
    
    todolisthtml += html;
}
*/

document.querySelector('.jstodolist').innerHTML = todolisthtml;

//add delete button to all
document.querySelectorAll('.jsdeletebutton').forEach((deletebutton,index)=>{
  deletebutton.addEventListener('click', ()=>{
    console.log(index);
    todolist.splice(index,1);
    render();
  });
});

}



//addeventlistner for add button and remobe onclick attribute
document.querySelector('.jsaddbutton').addEventListener('click',()=>{
    addtodo();
});




function addtodo (){
    let inputelement = document.querySelector('.jsinput');
   let name = inputelement.value;

   let dueelement = document.querySelector('.jsduedate');
   let duedate = dueelement.value;

   todolist.push({
    // name:name,
    // duedate:duedate
      name,
      duedate
   });
   inputelement.value = '';


   render();

}