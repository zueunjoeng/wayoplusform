// script.js
document.addEventListener("DOMContentLoaded", function() {
    const clickableText = document.getElementById("clickableText");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");

    // 텍스트를 클릭하면 팝업 열기
    clickableText.addEventListener("click", function() {
        popup.style.display = "flex"; // 팝업 표시
    });

    // 팝업 닫기
    closePopup.addEventListener("click", function() {
        popup.style.display = "none"; // 팝업 숨기기
    });
});
