var $inp = $('form[name=cal]');
var $input      = $inp.find('input');
var $cls_btn    = $('.cls_btn');
var $result_btn = $('.result_btn');
var $result     = $inp.find('input[name=result]');

$('input').click(function(){
   var $input_value = $(this).val();
  
  if($input_value != '=' && $input_value != 'clear'){
    calc($input_value);
  }
});

$('.cls_btn').click(function(){
  clr();
});

$('.result_btn').click(function(){
  try{
    my_result();
  }
  catch(err){
    $result.val('입력 오류');
  }
})

function clr(){
  $result.val(0);
}

function calc(value){
  if($result.val() == 0){
    $result.val('');
  }
  
  var val = $result.val() + value;
  $result.val(val);
}

function my_result(){
  var calc = eval($result.val());
  
  $result.val(calc);
}