// 모바일 네비게이션 토글
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });

        // 메뉴 항목 클릭 시 메뉴 닫기
        navMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
            });
        });
    }

    // 스크롤 시 헤더 스타일 변경
    var header = document.querySelector('.header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// 문의 폼 처리
function handleContactForm(event) {
    event.preventDefault();
    alert('문의가 접수되었습니다. 감사합니다!');
    event.target.reset();
}
