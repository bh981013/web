'use strict';

function p1() {
    // new Promise 를 호출함과 동시에 즉시 executor가 실행됨.
    let promise = new Promise(function(resolve, reject){
        setTimeout(()=> resolve("done"), 5000); //executor
    });

    promise.then(function(result){  // 성공시 실행되는 함수
        alert(result);  
    })
}

function p2(){
    function load(src, cb){
        let script = document.createElement('script');
        script.src = src;

        script.onload = () => cb(script);
        script.onerror = () => cb(new Error(`${src} 를 부르는 와중 오류 발생`));
        document.head.append(script);
    }
    load(`https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js`, a => {
        alert(`${a.src} 로드 됨`);
        alert(_);
    });
}

function p3(){
    function load(src){
        alert("load 실행");
        return new Promise(function(resolve, reject){
            alert("exec 실헹");
            let script = document.createElement('script');
            script.src = src;
            script.onload = () => resolve(script);
            script.onerror = () => reject(new Error("error 발생"));
            alert("종료");
            document.head.append(script);
            
        })
    }
    let p = load(`https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js`);
    p.then(a=>alert(a.src), a => alert(`msg: ${a.message}`));
    p.then(()=>alert("다른놈"));
}

function p4(){
    function loadScript(src) {
        alert("load");
        return new Promise(function(a, b) {
            alert("exec");  
          let script = document.createElement('script');
          script.src = src;
      
          script.onload = () => a(script);
          script.onerror = () => reject(new Error(`${src}를 불러오는 도중에 에러가 발생함`));
      
          document.head.append(script);
          setTimeout(()=> alert("done"), 5000);
        });
      }
    let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

    promise.then(
    script => alert(`${script.src}을 불러왔습니다!`),
    error => alert(`Error: ${error.message}`)
    );

    promise.then(script => alert('또다른 핸들러...'));
}

p4();