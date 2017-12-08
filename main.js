let first_card_clicked = null;
let second_card_clicked = null;

$(document).ready(initializeApp);

function initializeApp (){
    console.log('app initialized');
    $(".card").click(handleCardClick);
}

function handleCardClick (){
    console.log('card clicked', this);
    $(this).find('.front').removeClass('remove');
    console.log('1st front card revealed');

    if(first_card_clicked === null){
        first_card_clicked = this;
    } else {
        second_card_clicked = this;
    }
}

