
console.log(document.getElementById("uList"));


document.getElementById("btnAddTask").addEventListener("click", addTask);
let taskList=[];

function addTask() {
    let txtTask = document.getElementById("txtTask").value;
    taskList.push(`<li class="list-group-item">
                       <input class="form-check-input me-1" type="checkbox" value="" id="${txtTask}">
                       <label class="form-check-label stretched-link" for="${txtTask}">${txtTask}</label>
                     </li>`);

    loadTasks();
    clearTxt();
    console.log(taskList);

    console.log(document.getElementById(txtTask));
    
    
}


function loadTasks(){
    
    let listBody="";
    
    taskList.forEach(task=>{
        listBody+=task;
    });
    
    document.getElementById("uList").innerHTML=listBody;


}


function clearTxt(){
    document.getElementById("txtTask").value = '';
}