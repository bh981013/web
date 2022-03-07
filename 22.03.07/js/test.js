
//key 가 중복시에 value값 확인
function p1(){
    let s = {
        n: "1",
        n: "2",
        "a": "3"
    }
    console.log(s.n);
    console.log(s.a);
}


//JSON 과 객체 간의 변경
function p2(){
    let user = {
        name: "Ryan",
        age: 35,
    }
    console.log(user);
    juser = JSON.stringify(user);
    console.log(juser);
    let user2 = JSON.parse(juser);
    console.log(user2.name);
}


//replacer 활용해 역참조 배제하기
function p3(){
    let room = {
        number: 23
      };
      
      let meetup = {
        title: "Conference",
        occupiedBy: [{name: "John"}, {name: "Alice"}],
        place: room
      };
      
      // 순환 참조
      room.occupiedBy = meetup;
      meetup.self = meetup;
      
    console.log( JSON.stringify(meetup, function replacer(key, value) {
        /* 코드를 작성할 곳 */
        if (key != "" && value == meetup)  return undefined;
        else return value;

      }, 1
      ));
      
      /* 얼럿창엔 아래와 같은 결과가 출력되어야 합니다.
      {
        "title":"Conference",
        "occupiedBy":[{"name":"John"},{"name":"Alice"}],
        "place":{"number":23}
      }
      */
}

p3()