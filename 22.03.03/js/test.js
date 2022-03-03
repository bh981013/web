
//is Empty 함수 구현
function practice1(){
    function isEmpty(object){
        return Boolean(Object.keys(object).length);
    }
    let schedule = {};
    console.log(isEmpty(schedule));
    schedule["8:30"] = "get up";
console.log(isEmpty(schedule));
}

function practice2(){
    let a = 1
    user = {
        name : "myName",
        "getName": "otherName"
    }
    console.log(user.name);
    console.log(user["getName"]);
}
practice2();