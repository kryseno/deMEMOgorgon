$(document).ready(initializeApp);

function initializeApp (){
    console.log('app initialized');
    $(".card").click(handleCardClick);
}

function handleCardClick (){
    console.log('card clicked', this);
    $(this).find('.front').removeClass('remove');
    console.log('front card revealed');
}

