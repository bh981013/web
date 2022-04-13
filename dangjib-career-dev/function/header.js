const makeHeader = function() {
    let header = document.querySelector('.header');
    let names = ["홈", "당신의집사는", "지원하기", "고객페이지"]
    names = names.map(name => {
        let a = document.createElement("div");
        a.className = "header-menu";
        a.innerHTML = name;
        return a;
    })
    header.append(...names);
}

export default makeHeader;