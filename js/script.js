// element selector
// $("document").ready(function () {
//     $("h1").html("<h5>vdsfdrtfr</h5>")
// })
// element selector

//this
// $("document").ready(function () {
//     $("h1").click(function () {
//         var a = $(this).html();
//         console.log(a);
//     })
// })
//this

// id selector
// $("document").ready(function () {
//     $("#a").click(function () {
//         var a = $(this).html();
//         console.log(a)
//     })
// })
// id selector

// class selector
// $("document").ready(function () {
//     $(".cls-chng").click(function () {
//         var a = $(this).html();
//         console.log(a)
//     })
// })
// class selector

// multiple selector
// $("document").ready(function () {
//     $('.a,#b').html('gfdjgnjfg');
//     $('.a,#b').css('color', 'red')
// })
// multiple selector

// first and last element selector
// $(document).ready(function () {
//     $('.a:first').css('color', 'orange');
//     $('.a:last').css('color', 'orange')
// })
// first and last element selector

// class with Element selector
// $(document).ready(function () {
//     $('p.a').css('background-color', 'red')
// })
// class with Element selector

//contains
// $(document).ready(function(){
//     $('p:contains(c)').css('color',"orange")
// })
//contains


// attribute in jquery
$(document).ready(function () {
    $('img').click(function () {
        var a = $(this).attr('src')
        alert(a)
        $(this).attr('src','images/slide-3.jpg')
    })
})
// attribute in jquery