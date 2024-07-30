document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: [
        {
          title: 'Event 1',
          start: '2024-05-01'
        },
        {
          title: 'Event 2',
          start: '2024-05-05',
          end: '2024-05-07'
        }
      ]
    });
    calendar.render();
  });


    $(function() {
        $("#calender").datepicker({
            dateFormat: "yy-mm-dd"
        });
    });

// 숫자만 입력할 수 있음 
function isNumberKey(evt) {
var charCode = (evt.which) ? evt.which : event.keyCode;
if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false;
return true;
}

// 입력 필드에 숫자만 입력하도록 이벤트 리스너 추가
document.getElementById("input6").addEventListener("keypress", function(event) {
if (!isNumberKey(event)) {
    event.preventDefault();
}
});

// 글자만 입력할 수 있음 
function isCharacterKey(evt) {
var charCode = (evt.which) ? evt.which : event.keyCode;
if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))
    return true;
return false;
}

// 입력 필드에 글자만 입력하도록 이벤트 리스너 추가
document.getElementById("input5").addEventListener("keypress", function(event) {
if (!isCharacterKey(event)) {
    event.preventDefault();
}
});



// 선택 가능한 요소에 이벤트 리스너 추가
var selectableElements = document.querySelectorAll('.selectable');
selectableElements.forEach(function(element) {
element.addEventListener('click', function() {
    // 선택된 요소에 selected 클래스 추가 또는 제거
    if (element.classList.contains('selected')) {
        element.classList.remove('selected');
    } else {
        element.classList.add('selected');
    }
});
});

// <!-- 희망시간 자바스크립트 -->

    document.addEventListener('DOMContentLoaded', function() {
        var hourSelect = document.getElementById('hourSelect');
        var minuteSelect = document.getElementById('minuteSelect');

        hourSelect.addEventListener('change', function() {
            // 시간 선택 시 분을 00으로 고정
            var selectedHour = hourSelect.value;
            var f
            ormattedTime = selectedHour + ':00';
            console.log('선택된 시간:', formattedTime);
        });
    });


//  <!-- 반려동물 종류 -->

     document.addEventListener('DOMContentLoaded', function() {
            var petSelect = document.getElementById('petSelect');
        
            petSelect.addEventListener('change', function() {
                var selectedPet = petSelect.value;
                console.log('선택된 반려동물:', selectedPet);
            });
        });
// <!-- 반려동물 수 -->

// 반려동물 수 선택 시 텍스트 변경
document.addEventListener('DOMContentLoaded', function() {
    var petCountSelect = document.getElementById('petCount');
    var placeholderOption = petCountSelect.querySelector('option[value=""]');

    petCountSelect.addEventListener('change', function() {
        var selectedOption = petCountSelect.value;
        if (selectedOption === "") {
            placeholderOption.textContent = "모두 몇마리인가요?";
        } else {
            placeholderOption.textContent = "반려동물 수";
        }
    });
});
