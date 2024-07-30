//./calender.js
let date = new Date();
let selectedDate = null;

const specialDates = new Map([
    [0, [1]],
    [1, [9, 10, 11, 12]],
    [2, [1]],
    [3, [10]],
    [4, [1, 5, 6, 15]],
    [5, [6]],
    [7, [15]],
    [8, [16, 17, 18]],
    [9, [3, 9]],
    [11, [25]]
]);

const renderCalendar = () => {
    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();

    document.querySelector('.year-month').textContent = `${viewMonth + 1}월`;

    const prevLast = new Date(viewYear, viewMonth, 0);
    const thisLast = new Date(viewYear, viewMonth + 1, 0);

    const PLDate = prevLast.getDate();
    const PLDay = prevLast.getDay();

    const TLDate = thisLast.getDate();
    const TLDay = thisLast.getDay();

    const prevDates = [];
    const thisDates = [...Array(TLDate + 1).keys()].slice(1);
    const nextDates = [];

    if (PLDay !== 6) {
        for (let i = 0; i < PLDay + 1; i++) {
            prevDates.unshift(PLDate - i);
        }
    }

    for (let i = 1; i < 7 - TLDay; i++) {
        nextDates.push(i);
    }

    const dates = prevDates.concat(thisDates, nextDates);
    const firstDateIndex = dates.indexOf(1);
    const lastDateIndex = dates.lastIndexOf(TLDate);

    dates.forEach((date, i) => {
        const condition = i >= firstDateIndex && i < lastDateIndex + 1
                          ? 'this'
                          : 'other';
        const dayClass = (i % 7 === 0) ? 'sunday' : (i % 7 === 6) ? 'saturday' : '';
        let specialClass = '';

        // 현재 월이 맵에 있는지 확인하고, 해당 날짜가 있는지 확인
        if (specialDates.has(viewMonth) && specialDates.get(viewMonth).includes(date)) {
            specialClass = 'red-circle';
        }

        // 선택된 날짜에 파란 원을 표시
        if (selectedDate === date && i >= firstDateIndex && i < lastDateIndex + 1) {
            specialClass += ' blue-circle';
        }

        // 빨간 원이 있는 날짜에는 클릭 이벤트 추가하지 않음
        const clickable = specialClass.includes('red-circle') ? '' : `onclick="selectDate(${date})"`;

        dates[i] = `<div class="date"><span class="${condition} ${dayClass} ${specialClass}" ${clickable}>${date}</span></div>`;
    });                

    document.querySelector('.dates').innerHTML = dates.join('');

    const today = new Date();
    if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
        for (let date of document.querySelectorAll('.this')) {
            if (+date.innerText === today.getDate()) {
                date.classList.add('today');
                break;
            }
        }
    }
};

// 날짜 선택 시 실행될 함수
const selectDate = (clickedDate) => {
    selectedDate = clickedDate;
    renderCalendar();

    // 선택된 날짜를 오른쪽 달력에 설정 (변경된 부분)
    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();
    const selectedFullDate = new Date(viewYear, viewMonth, selectedDate);
    $("#datepicker").datepicker("setDate", selectedFullDate);
};

// 이전 달 표시 함수
const prevMonth = () => {
    date.setMonth(date.getMonth() - 1);
    selectedDate = null; // 선택된 날짜 초기화
    renderCalendar();
};

// 다음 달 표시 함수
const nextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    selectedDate = null; // 선택된 날짜 초기화
    renderCalendar();
};

// 오늘로 이동 함수
const goToday = () => {
    date = new Date();
    selectedDate = null; // 선택된 날짜 초기화
    renderCalendar();
};

// 오른쪽 달력 초기화 (변경된 부분)
$(document).ready(function() {
    $("#datepicker").datepicker();
});

renderCalendar();