let timmer;
document.querySelector(".container").addEventListener('click',(event) => {
    if(event.target.className=="btn"){
        let date = new Date();
        let userDate= new Date();
        let usertaskName=document.querySelector(".inputName").value;
        let userInputeTime=document.querySelector(".inputTime").value;
        let userHour=userInputeTime.split(":")[0];
        let userMinute=userInputeTime.split(":")[1];
        userDate.setHours(userHour,userMinute,0);
        
        let difTime=userDate.getTime()-date.getTime()
        console.log(difTime);
        
        if(difTime<0){
            alert("Time Already Passed");
        }
        else{
            timmer=setTimeout(function(event) {
                alert(usertaskName);
                //call for remove element
                
            },Math.abs((userDate.getTime()-date.getTime())));
            //create and add element
            let taskList=document.createElement('div');
            let taskName=document.createElement('div');
            let taskDelete=document.createElement('div');
            document.querySelector(".container").appendChild(taskList).className="taskList";
            taskDelete.appendChild(document.createTextNode("Delete"));
            taskName.appendChild(document.createTextNode(usertaskName));
            taskList.appendChild(taskName).className="taskName"; //add class name to div
            taskList.appendChild(taskDelete).className="deleteTask"; //add class name to div
        }
        }
    //else if was here
    else if(event.target.className=="deleteTask")
        {
            event.target.parentElement.remove();
            clearTimeout(timmer);
        }
    
        
})
