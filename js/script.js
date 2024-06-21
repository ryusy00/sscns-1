// 마우스 커서 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    const customCursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove',function(e) {
        // 마우스 위치에 따라 커서 아이콘 위치 업데이트
        customCursor.style.left = e.pageX + 'px';
        customCursor.style.top = e.pageY + 'px';
    });
});

// 퀵 네비게이션 효과
$(function() {
    $('.menuBtn'). on('click', 
    function(event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $('#gnb').toggleClass('visible');
    });
});

// 메인배너 넘어갔을 때, 네비게이션 색상 변경 애니메이션
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('topBox');
    const bannerHeight = 1080; // 메인 배너 높이

    window.addEventListener('scroll', function() {
        if (window.scrollY > bannerHeight) { // 스크롤 위치가 메인 배너 높이 이상일 때
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// 회사연혁 영역 - 연도별 내용
let currentTimeline = 0;

const timelines = [
    [
        {
            left: "10%",
            year: "2012",
            description: "(주)성산씨엔에스 창립 <br> SW 사업자 등록"
        },
        {
            left: "27%",
            year: "2013",
            description: "정보통신 공사업 등록 <br> IBM SW, 파트너 등록"
        },
        {
            left: "44%",
            year: "2014",
            description: "서울사무소개소"
        },
        {
            left: "61%",
            year: "2015",
            description: "재가장기요양관리 프로그램 개발 <br> 정보통신 공사업 등록 <br> IBM 소프트웨어 파트너 등록"
        }
    ],
    [
        {
            left: "10%",
            year: "2016",
            description: "특허획득(휴대단말기 및 인터페이스 제어) <br> GS인증 획득(도서관통합일지 솔루션)"
        },
        {
            left: "27%",
            year: "2017",
            description: "광주, 전남지방중소기업청 여성기업 인증 <br> 기술혁신형 중소기업(INNO-BIZ) 선정"
        },
        {
            left: "44%",
            year: "2018",
            description: "성산드론교육원 창립 <br> 비디오 제작업 등록"
        },
        {
            left: "61%",
            year: "2019",
            description: "기술혁신형 중소기업 (INNO-BIZ) 확인 (재인증) <br> 주 사업자 부설 드론 교육원 설립 (국토부) <br> 여성기업확인(광주, 전남 지방중소벤처기업청)"
        }
    ],
    [
        {
            left: "10%",
            year: "2020~2021",
            description: "교육플랫폼 공동개발 협약(데이터 이음) <br> 카카오 클라우드 협력업체"
        },
        {
            left: "35.5%",
            year: "2022",
            description: "광주광역시장 표창 수여 (지역사회 발전 공로)"
        },
        {
            left: "61%",
            year: "2023",
            description: "NHN Cloud MSP 체결"
        }
    ]
];
// 회사연혁 버튼 클릭 시, 다음 년도로 넘어가는 애니메이션
function showMore(timelineIndex) {
    const timeline = timelines[timelineIndex];
    const timelineContainer = document.querySelector('.timeline');
    timelineContainer.innerHTML = '<div class="line"></div>';

    timeline.forEach(event => {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.left = event.left;

        const year = document.createElement('p');
        year.classList.add('year');
        year.innerHTML = event.year;
        circle.appendChild(year);

        const description = document.createElement('p');
        description.classList.add('description');
        description.innerHTML = event.description;
        circle.appendChild(description);

        timelineContainer.appendChild(circle);
    });

    currentTimeline = (timelineIndex + 1) % timelines.length;

    const moreBtn = document.createElement('button');
    moreBtn.classList.add('more-btn');
    moreBtn.innerHTML = "more →";
    moreBtn.setAttribute('onclick', `showMore(${currentTimeline})`);
    timelineContainer.appendChild(moreBtn);
}
document.addEventListener("DOMContentLoaded", () => {
    showMore(0);
});


// 전체 요소 스크롤 시, 애니메이션
window.addEventListener('scroll', function() {
    // 스크롤 위치
    var scrollPosition = window.scrollY;
    // 애니메이션을 시작할 위치
    var triggerPosition = document.getElementById('recruit-wrap').offsetTop - window.innerHeight;
    var triggerPosition2 = document.getElementById('business-text-wrap').offsetTop - window.innerHeight;
    var triggerPosition3 = document.getElementById('si-wrap').offsetTop - window.innerHeight;
    var triggerPosition4 = document.getElementById('OS-wrap').offsetTop - window.innerHeight;
    var triggerPosition5 = document.getElementById('more-btn').offsetTop - window.innerHeight;
    var triggerPosition6 = document.getElementById('history-wrap').offsetTop - window.innerHeight;
    var triggerPosition7 = document.getElementById('contact-title-wrap').offsetTop - window.innerHeight;
    var triggerPosition8 = document.getElementById('contact-content-wrap').offsetTop - window.innerHeight;


    // 인재채용 영역 원 확대 애니메이션
    if (scrollPosition > triggerPosition) {
        document.getElementById('passion').classList.add('animate-circle');
        document.getElementById('teamwork').classList.add('animate-circle');
        document.getElementById('competition').classList.add('animate-circle');
        document.getElementById('recruit-title-wrap').classList.add('animated');
        document.querySelector('.bg-circle').classList.add('animate');
    }
    else if (scrollPosition > triggerPosition2) {
        document.querySelector('#business-text-wrap > h3').classList.add('animated');
        document.querySelector('#business-text-wrap > p').classList.add('animated');
    }
    if (scrollPosition > triggerPosition3) {
        document.getElementById('si-wrap').classList.add('animated');
        document.getElementById('IC-wrap').classList.add('animated');
    }
    if (scrollPosition > triggerPosition4) {
        document.getElementById('OS-wrap').classList.add('animated');
        document.getElementById('SL-wrap').classList.add('animated');
    }
    if (scrollPosition > triggerPosition5) {
        document.getElementById('more-btn').classList.add('animated');
    }
    if (scrollPosition > triggerPosition6) {
        document.getElementById('history-title-wrap').classList.add('animated');
        document.getElementById('history-content-wrap').classList.add('animated');
    }
    if (scrollPosition > triggerPosition7) {
        document.getElementById('contact-title-wrap').classList.add('animated');
    }
    if (scrollPosition > triggerPosition8) {
        document.getElementById('bg-logo').classList.add('animated');
        document.getElementById('contact-left').classList.add('animated');
        document.getElementById('contact-right').classList.add('animated');
    }
    
});