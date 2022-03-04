
// is Empty 함수 구현 연습
function practice1(){
    function isEmpty(object){
        return Boolean(Object.keys(object).length);
    }
    let schedule = {};
    console.log(isEmpty(schedule));
    schedule["8:30"] = "get up";
    console.log(isEmpty(schedule));
}


// js 객체에서 value를 얻는 법
function practice2(){
    
    user = {
        name : "myName",
        "getName": "otherName"
    }
    console.log(user.name);
    console.log(user[name]);
}

// 두가지 방법의 차이 비교1
function practice3(){
    let bag = {
        a: 1,
        b: 2,
    };
    //b = a;
    console.log(b);
    console.log(bag[b]);
}

// 두가지 방법의 차이 비교2
function practice4(){
    user = {
        name : "myName",
        "getName": "otherName"
    }
    str = "getName";
    console.log(user.name);
    console.log(user["getName"]);
    console.log(user.str);  //user 갹채애 str 변수가 존재하지 않으므로, undefined 출력
    console.log(user[str]); //user외부에 str 변수가 "getName"으로 존재하므로, otherName 출력
}
practice4();