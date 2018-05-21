// 문제 객체(생성자 함수)
function Question(text, choice, answer){
    this.text   = text;
    this.choice = choice;
    this.answer = answer;
  }
  
  // 퀴즈 정보 객체
  function Quiz(questions){
    this.score         = 0;
    this.questions     = questions;
    this.questionIndex = 0;
  }
  
  // 문제 데이터
  var questions = [
    new Question('다음 중 최초의 상용 웹 브라우저는?', ['모자이크','인터넷 익스플로러','구글 크롬','넷스케이프 네비케이터'],'넷스케이프 네비게이터'), new Question('웹 문서에서 스타일을 작성하는 언어는?',['HTML','JQuery','CSS','XML'],'CSS'), new Question('명령어 기반의 인터페이스를 의미하는 용어는?',['GUI','CLI','HUD','SI'],'CLI'), new Question('CSS 속성 중 글자의 굵기를 변경하는 속성은?',['font-size','font-style','font-weight','font-variant'],'font-weight')
  ];
  
  // 퀴즈 객체 생성
  var quiz = new Quiz(questions);
  
  // 문제 출력 함수
  function updateQuiz(){
    var question = document.querySelector('#question');
    var idx      = quiz.questionIndex + 1;
    var choice   = document.querySelectorAll('.btn');
    
    // 문제 출력
    question.innerHTML = '문제' + idx + ')' + quiz.questions[quiz.questionIndex].text;
    
    // 선택 항목 출력
    for(var i = 0; i < 4; i++){
      choice[i].innerHTML = quiz.questions[quiz.questionIndex].choice[i];
      }
    progress();
  }
  
  updateQuiz();
  
  // 정답 확인 메서드
  Quiz.prototype.correctAnswer = function(answer){
    return answer == this.questions[this.questionIndex].answer;
  }
  
  var btn = document.querySelectorAll('.btn');
  
  // 입력 및 정답 확인 함수
  function checkAnswer(i){
    //선택 버튼 이벤트 리스너
    btn[i].addEventListener('click', function(){
      var answer = btn[i].innerText;
      
      if(quiz.correctAnswer(answer)){
        alert('정답입니다!');
        quiz.score++;
      } else {
        alert('틀렸습니다!');
      }
      
      // 다음 문제로 진행 및 결과 처리
      if(quiz.questionIndex < quiz.questions.length - 1){
        quiz.questionIndex++;
        updateQuiz();
      } else {
        // 결과 화면
        result();
      }
    });
  }
  
  // 4개의 버튼 이벤트 리스너 지정
  for(var i = 0; i < btn.length; i++){
    checkAnswer(i);
  }
  
  // 문제 진행 정보 표시
  function progress(){
    var progress           = document.querySelector('#progress');
        progress.innerHTML = '문제 ' + (quiz.questionIndex + 1) + ' / ' + quiz.questions.length;
  }
  
  // 경과 표시
  function result(){
    var quizDiv = document.querySelector('#quiz');
    
    // 백분율 점수 계산
    var per = parseInt((quiz.score*100) / quiz.questions.length);
    
    // 표시할 텍스 정보와 변수
    var txt               = '<h1>결과</h1>' + '<h2 id = "score"> 당신의 점수: ' + quiz.score + '/' + quiz.questions.length + '<br><br>' + per + '점</h2>';
        quizDiv.innerHTML = txt;
    
    // 점수별 결과 텍스트 출력
    if(per < 60){
      txt               += '<h2 class = "message">더 분발하세요</h2>'
      quizDiv.innerHTML  = txt;
    } else if(per >= 60 && per < 80){
      txt               += '<h2 class = "message">무난한 점수네요</h2>'
      quizDiv.innerHTML  = txt;
    } else if(per >= 80){
      txt               += '<h2 class = "message">훌륭합니다</h2>'
      quizDiv.innerHTML  = txt;
    }
    
  }