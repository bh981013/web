//두 값을 입력받아 함과 곱을 출력하는 함수 작성
function p1(){
    let calculator = {
        read(){
            this.a = Number(prompt("첫번째 값을 입력하시오"));
            this.b = Number(prompt("두번째 값을 입력하시오"));
            // Number 대신 + 를 앞에 붙여도 숫자형으로 쉽게 변환 가능
        },
        sum(){
            return this.a + this.b;
        },
        mul(){
            return this.a * this.b;
        }
    }
    calculator.read();
    console.log(calculator.sum());
    console.log(calculator.mul());
}

//다른 두 함수로 동일 객체 부르기
function p2(){
    function A() { 
        return B;
     }
    function B() { 
        return B;
     }

    let a = new A;
    let b = new B;

    console.log( a == b ); // trues
}

// 생성자 함수 예시 작성
function p3(){
    function Acc(par){
        this.val = par;
        this.read = function(){
            this.val += 3;
            console.log(this.val);
        };
    }

    let a = new Acc(2);
    a.read();
    a.read();

}

function p4(){

    let str = "hi";
    str.test = 5;
    console.log(str.test);
}
p4();