$(document).ready(initializeApp);

function initializeApp (){
    console.log('app initialized');
    $(".card").click(handleCardClick);
}

function handleCardClick (){
    console.log('card clicked', this);
    const back = $(this).find('.back');
}

