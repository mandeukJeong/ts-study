var 제목 = document.querySelector('#title');
// if (제목 instanceof Element) {
//     제목.innerHTML = '반가워요';
// }
if ((제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) != undefined) {
    제목.innerHTML = '반가워요';
}
var 링크 = document.querySelectorAll('.naver');
링크.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = 'https://kakao.com';
    }
});
var 버튼 = document.querySelector("#button");
var image = document.querySelector("#image");
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
    if (image instanceof HTMLImageElement) {
        image.src = 'new.jpg';
    }
});
