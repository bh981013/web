function makeDiv(n) {
    let appendList = []
    for (let i = 0; i < n; i++) {
        let div = document.createElement("div");
        div.className = `item${i}`
        appendList.push(div);
    }
    return appendList;
}

export const makeIntro = function() {
    let intro = document.querySelector(".introduce");
    //text 설정
    const text1 = `일하기 힘드셨죠?`
    const text2 = `가사도우미, 이사청소팀 모집`

    let textNodeList = [document.createElement("div"), document.createElement("div")]
    textNodeList[0].innerHTML = text1;
    textNodeList[0].className = "text1";
    textNodeList[1].innerHTML = text2;
    textNodeList[1].className = "text2";

    let textDiv = document.createElement("div");
    textDiv.className += " intro-text";
    textDiv.append(...textNodeList)

    //img 설정
    let imgNode = document.createElement("img");
    imgNode.src = "./img/person.png"

    let imgDiv = document.createElement("div");
    imgDiv.className = "intro-img";
    imgDiv.append(imgNode)

    //button 설정
    let btnNode = document.createElement("button");
    btnNode.className = "btn";
    btnNode.innerHTML = "당신의집사에 지원하기";

    let btnDiv = document.createElement("div");
    btnDiv.className = "intro-btn";
    btnDiv.append(btnNode);



    intro.append(textDiv, imgDiv, btnDiv);

}