Date.prototype.text = function(c = 0) {
    return new Date(this.getTime() - this.getTimezoneOffset() * 60000).toISOString().replace(/-/g, '').substr(c, 8 - c);
};

let d = {
    "k": 10,
    "q": 11,
}

let c = {
    "a": 1,
    "b": 2,
    "c": 3,
    "o": d
}


let { a: l, o: { qs } = {} } = c


let date = new Date();

console.log(new Date(date.getTime()).toISOString().replace(/-/g, ''))
console.log(date.text())

let aa = [
    "서울특별시>강남구"


    , "서울특별시>강동구"


    , "서울특별시>강북구"


    , "서울특별시>강서구"


    , "서울특별시>관악구"


    , "서울특별시>광진구"


    , "서울특별시>구로구"


    , "서울특별시>금천구"


    , "서울특별시>노원구"


    , "서울특별시>도봉구"


    ,
    "서울특별시>동대문구"


    ,
    "서울특별시>동작구"


    ,
    "서울특별시>마포구"


    ,
    "서울특별시>서대문구"


    ,
    "서울특별시>서초구"


    ,
    "서울특별시>성동구"


    ,
    "서울특별시>성북구"


    ,
    "서울특별시>송파구"


    ,
    "서울특별시>양천구"


    ,
    "서울특별시>영등포구"


    ,
    "서울특별시>용산구"


    ,
    "서울특별시>은평구"


    ,
    "서울특별시>종로구"


    ,
    "서울특별시>중구"

    ,
    "서울특별시>중랑구"


    , "경기도>고양시"


    , "경기도>과천시"


    , "경기도>광명시"


    , "경기도>구리시"


    , "경기도>남양주시"


    , "경기도>부천시"


    , "경기도>성남시"


    , "경기도>시흥시"


    , "경기도>수원시"


    , "경기도>안산시"


    , "경기도>안양시"


    , "경기도>용인시"


    , "경기도>양주시"


    , "경기도>의정부시"


    , "경기도>파주시"


    , "경기도>의왕시"


    , "경기도>화성시"


    , "경기도>포천시"


    , "경기도>이천시"
]
let N = [...new Set(...aa.map(place => place.split(">")))].join("/")
    //console.log(...new Set(...aa.map(place => place.split(">"))))
console.log(new Set(...aa.map(place => place.split(">"))))
console.log(new Set(...[
    [
        [1, 2],
        [1, 3]
    ],
    [
        [4, 5],
        [6, 7]
    ]
]))