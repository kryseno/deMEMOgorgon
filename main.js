let first_card_clicked = null;
let second_card_clicked = null;

$(document).ready(initializeApp);

function initializeApp(){
    console.log('app initialized');
    $(".card").click(handleCardClick);
}

function handleCardClick(){
    $(this).find('.front').removeClass('remove');

    if(first_card_clicked === null){
        first_card_clicked = this;
        console.log('first card: ',first_card_clicked);
    } else {
        second_card_clicked = this;
        console.log('second card: ',second_card_clicked);
        if($(first_card_clicked).find("img").attr("src") === $(second_card_clicked).find("img").attr("src")){
            console.log('issa match!');
            $(first_card_clicked).addClass('remove');
            $(second_card_clicked).addClass('remove');
            first_card_clicked = null;
            second_card_clicked = null;
        } else {
            console.log('issa NOT a match!');
            $(first_card_clicked).find('.front').addClass('remove');
            $(second_card_clicked).find('.front').addClass('remove');
            first_card_clicked = null;
            second_card_clicked = null;
        }
    }
}
