'use strict';

function p1() {
    function exec(){
        for( let a of Array.from(arguments)){
            console.log(`args:${a}`);
        }
        arguments[0]("2");
    }

    let p= new Promise(exec);
    p.then((a)=>console.log(`s: ${a}`)).catch((a)=>console.log(`${a}, fail`));

}

function p2(){
    console.log("A");

    //
    Promise.resolve() //
        .then(() => {
            //
            console.log("B");
            return Promise.reject();
        }, () => {
            //
            console.log("C");
            //
        }).catch(() => {
            //
            console.log("D");
            return Promise.reject();
            //
        }).then(() => {
            //
            console.log("E");
            //
        }, () => {
            //
            console.log("F");
            //
        })
    //
    
    .finally(()=>console.log("G"));

    // expect: A->G->B->E
}

function p3(){
    async function f() {

        let promise = new Promise((resolve, reject) => {
          setTimeout(() => resolve("완료!"), 1000)
        });
      
        let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)
      
        console.log(result); // "완료!"'
        return 2;
      }
      
      let ret = f()
      ret.then(console.log);
      console.log(ret);

}

p2();
