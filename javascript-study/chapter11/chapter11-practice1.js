var book = [
    {
        "title" : "채식주의자",
        "author": "한강",
        "price" : "12000"
    },
    {
        "title" : "종의 기원",
        "author": "정유정",
        "price" : "10000"
    },
    {
        "title" : "다르게 보는 힘",
        "author": "이종인",
        "price" : "12600"
    }
];

$(book).each(function(i, obj){
    var title  = obj.title;
    var author = obj.author;
    var price  = obj.price;
    var txt    = '<td>' + title + '</td>' + '<td>' + author + '</td>' + '<td>' + price + '</td>';
    $('table').append('<tr>');
    $('table tr:last').html(txt);
});