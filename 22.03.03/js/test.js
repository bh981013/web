//is Empty 함수 구현
function isEmpty(object){
    return Boolean(Object.keys(object).length);
}
let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));