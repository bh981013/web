'use strict';
let assert = require('assert');
//key 가 중복시에 value값 확인
function p1() {
    let s = {
        n: "1",
        n: "2",
        "a": "3"
    };
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
}

// string to array, array to string 변환
function p4(){
    console.log(Array.from("hello"));
    console.log(Array.from("hello").toString());
}

// 객체 복사
function p5(){
    let obj = {a:1, b:1};
    let obj2 = {...obj};
    console.log(obj == obj2);
    console.log(JSON.stringify(obj) == JSON.stringify(obj2));
    console.log(obj)
    console.log(obj.toString())
}

//메모리 최적화
function p6(){
    function f() {
        let value = Math.random();
      
        function g() {
          debugger; // Uncaught ReferenceError: value is not defined가 출력됩니다.
        }
      
        return g;
      }
      
      let g = f();
      g();
}

// 메모리 최적화 2
function p7(){
    let value = "이름이 같은 다른 변수";

    function f() {
    let value = "가장 가까운 변수";

    function g() {
        debugger; // 콘솔에 alert(value);를 입력하면 '이름이 같은 다른 변수'가 출력됩니다.
        console.log("debug done");
    }

    return g;
    }

    let g = f();
    g();
}

//같은 이름을 가진 두 함수를 선언할때 일어나는 일
function p8(){
    function a(){
        console.log("a");
    }
    a = function(){
        console.log("b");
    }
    a()
}

function p9(){
    let worker = {
        slow(min, max){
            console.log("slow 호출");
            return min + max;
        }
    };

    function cacheingDecorator(func, hash){
        let cache=new Map();
        
        return function(){
            console.log(`args: ${Array.from(arguments)}`)
            let key = hash(arguments);
            if(cache.has(key)){
                return cache.get(key);
            }
            let result = func.call(this, ...arguments);

            cache.set(key, result);
            return result;
        }
    }

    function hash(args){
        return args[0] + ',' + args[1];
    }

    worker.slow = cacheingDecorator(worker.slow, hash);
    console.log(worker.slow(3, 5));
    console.log("다시호출 " + worker.slow(3, 5));
}


function p10(){
    function f(){
        return Array.from(arguments).join();
    }
    console.log(f(1,2))
}

// decorator 패턴 구현 연습-> 함수를 리턴하는 함수를 이해하기 어렵다....
function p11(){
    function spy(func) {
        let cache =[]
        return function a(...args){ 
          a.calls=cache
          cache.push(args);
          return func.apply(this, args);
        }
      }

      function work(a, b) {
        console.log( a + b ); // work is an arbitrary function or method
      }
      
      work = spy(work);
      console.log(work.calls)
      //assert.deepEqual(work.calls, []);
      work(1, 2); // 3
      assert.deepEqual(work.calls, [
        [1, 2]
      ]);
      work(3, 4); // 9
      assert.deepEqual(work.calls, [ [ 1, 2 ], [ 3, 4 ] ]);
      console.log(work.calls);
      console.log([ [ 1, 2 ], [ 3, 4 ] ])
      for (let args of work.calls) {
        console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
      }
}

function p11_2(){
    
    function spy(func) {
         function a(...args){ 
          a.calls.push(args);
          return func.apply(this, args);
        }
        a.calls = [];
        return a;
      }

      function work(a, b) {
        console.log( a + b ); // work is an arbitrary function or method
      }
      
      work = spy(work);
      work(1, 2); // 3
      work(3, 4); // 9
      assert.deepEqual(work.calls, [ [ 1, 2 ], [ 3, 4 ] ]);
      console.log(work.calls);
      console.log([ [ 1, 2 ], [ 3, 4 ] ])
      for (let args of work.calls) {
        console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
      }
}

p11()