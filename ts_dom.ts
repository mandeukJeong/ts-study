let 제목 = document.querySelector('#title');
// if (제목 instanceof Element) {
//     제목.innerHTML = '반가워요';
// }

if (제목?.innerHTML != undefined) {
    제목.innerHTML = '반가워요';
}

let 링크 = document.querySelectorAll('.naver');

링크.forEach((a) => {
    if (a instanceof HTMLAnchorElement) {
        a.href = 'https://kakao.com';
    }
})

let 버튼 = document.querySelector("#button");
let image = document.querySelector("#image");
버튼?.addEventListener('click', function() {
    if (image instanceof HTMLImageElement) {
        image.src = 'new.jpg';
    }
});