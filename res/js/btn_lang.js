window.onload = function () {
    // 버튼 이벤트
    document.getElementById("btn-en").addEventListener("click", e => {
        window.location.replace("../../en/index.html")
    })
    document.getElementById("btn-ko").addEventListener("click", e => {
        window.location.replace("../../ko/index.html")
    })
}