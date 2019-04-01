
$('#menu-button').on('click', function(){
    if ($('#menu').text() === 'menu –') {
        $('#menu').text('menu +');
    } else {
        $('#menu').text('menu –');
    }
});
