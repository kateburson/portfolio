
$('#menu-button').on('click', function(){
    if ($('#menu').text() === 'menu –') {
        $('#menu').text('menu +');
    } else {
        $('#menu').text('menu –');
    }
});

$('#undead').on('click', undead);
$('#tweed').on('click', tweed);
$('#medEx').on('click', medEx);
$('#fab').on('click', fab);
$('#infographic').on('click', infographic);
$('#cloud').on('click', cloud);


function undead() {
    $('.project').hide();
    var $row = $('<div class="row">');
    var $back = $('<a id="back" href="design.html"><< back</a><br>')
    var $p = $('<p id="description" class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">');
    $p.text(
        'I designed this phone charger packaging to be a reusable phone-charging station. It is based on the saying, "My phone is dead," and is therefore a resting place for dead phones while they charge.'
    );
    $($p).prepend($back);
    $($row).append($p);
    var $right = $('<div class="col-lg-8">');
    var $img1 = $('<img class="col-lg-12">');
    $img1.attr('src', 'assets/images/undeadChargers.jpg');
    var $img2 = $('<img class="col-xl-12">');
    $img2.attr('src', 'assets/images/undeadLabel.png');
    var $img3 = $('<img class="col-xl-12">');
    $img3.attr('src', 'assets/images/coffincutout.jpg');
    $($right).append($img1, $img2, $img3);
    $row.append($right);
    $('#grid').append($row);
}

function tweed() {
    $('.project').hide();
    var $row = $('<div class="row">');
    var $back = $('<a id="back" href="design.html"><< back</a><br>')
    var $p = $('<p id="description" class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">');
    $p.text(
        'I imagined this branding concept for a well established suit making business called Tweed. I created the logo, business card, and letterhead.'
    );
    $($p).prepend($back);
    $($row).append($p);
    var $right = $('<div class="col-lg-8">');
    var $img1 = $('<img class="col-xl-12">');
    $img1.attr('src', 'assets/images/tweed.png');
    $($right).append($img1);
    var $img2 = $('<img class="col-xl-12">');
    $img2.attr('src', 'assets/images/tweedidentity.png');
    $($right).append($img2);
    $row.append($right);
    $('#grid').append($row);
}

function medEx() {
    $('.project').hide();
    var $row = $('<div class="row">');
    var $back = $('<a id="back" href="design.html"><< back</a><br>')
    var $p = $('<p id="description" class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">');
    $p.text(
        'This business card and website is part of the branding I created for the Seattle based restaurant Mediterranean Express.'
    );
    $($p).prepend($back);
    $($p).append('<br><a href="http://www.medexpress-seattle.com" target="new">Mediterranean Express Website</a>');
    $($row).append($p);
    var $right = $('<div class="col-lg-8">');
    var $img1 = $('<img class="col-lg-12">');
    $img1.attr('src', 'assets/images/MedExBusinessCard.png');
    var $img2 = $('<img class="col-lg-12">');
    $img2.attr('src', 'assets/images/screenshot.png');
    var $img3 = $('<img class="col-lg-12">');
    $img3.attr('src', 'assets/images/IMG_1914.png');
    $($right).append($img1, $img2, $img3);
    $row.append($right);
    $('#grid').append($row);
}

function fab() {
    $('.project').hide();
    var $row = $('<div class="row">');
    var $back = $('<a id="back" href="design.html"><< back</a><br>')
    var $p = $('<p id="description" class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">');
    $p.text(
        "This logo design is for a high-end interior design house located in Northern California. I created an elegant motif based on the brand's previous double 'f' logo design."
    );
    $($p).prepend($back);
    $($row).append($p);
    var $right = $('<div class="col-lg-8">');
    var $img1 = $('<img class="col-lg-12">');
    $img1.attr('src', 'assets/images/fabFinishes.png');
    $($right).append($img1);
    $row.append($right);
    $('#grid').append($row);
}

function infographic() {
    $('.project').hide();
    var $row = $('<div class="row">');
    var $back = $('<a id="back" href="design.html"><< back</a><br>')
    var $p = $('<p id="description" class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">');
    $p.text(
        'This information design poster was created for print and is 24" x 36". It is a visual representation of the research I conducted on gun violence in America.'
    );
    $($p).append('<br><a href="InfoDesign_Final.pdf" target="new">Info Design PDF</a>');
    $($p).prepend($back);
    $($row).append($p);
    var $right = $('<div class="col-lg-8">');
    var $img1 = $('<img class="col-xl-12">');
    $img1.attr('src', 'assets/images/infodesignfull.png');
    $($right).append($img1);
    $row.append($right);
    $('#grid').append($row);
}

function cloud() {
    $('.project').hide();
    var $row = $('<div class="row">');
    var $back = $('<a id="back" href="design.html"><< back</a><br>')
    var $p = $('<p id="description" class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">');
    $p.text(
        'Website images made to highlight products for sale at Kasala.');
    $($p).prepend($back);
    $($row).append($p);
    var $right = $('<div class="col-lg-8">');
    var $img1 = $('<img class="col-lg-12">');
    $img1.attr('src', 'assets/images/cloud1.jpg');
    var $img2 = $('<img class="col-lg-12">');
    $img2.attr('src', 'assets/images/cloud2.jpg');
    var $img3 = $('<img class="col-lg-12">');
    $img3.attr('src', 'assets/images/cloud3.jpg');
    var $img4 = $('<img class="col-lg-12">');
    $img4.attr('src', 'assets/images/cloud4.jpg');
    $($right).append($img1, $img2, $img3, $img4);
    $row.append($right);
    $('#grid').append($row);
}