let first_card_clicked = null;
let second_card_clicked = null;
const cardImgs = [
    'images/demogorgon.jpg',
    'images/eleven.jpg',
    'images/demogorgon.jpg',
    'images/demogorgon.jpg',
    'images/demogorgon.jpg',
    'images/demogorgon.jpg',
];

$(document).ready(initializeApp);

function initializeApp(){
    console.log('app initialized');
    $(".card").click(handleCardClick);
    displayCards();
}

function displayCards(){
    console.log('displaying cards');
    for(let row=0; row<3; row++){
        const makeCardRow = $("<div>").addClass("row");
        for(let cardElem=0; cardElem<cardImgs.length; cardElem++){
            const makeCardCols = $("<div>").addClass("col-lg-2 col-mg-2 col-sm-2 col-xs-2");
            const rowCard = $("<div>").addClass("row card");
            const frontCardCol = $("<div>").addClass("col-lg-12 col-mg-12 col-sm-12 col-xs-12 front remove");
            const backCardCol = $("<div>").addClass("col-lg-12 col-mg-12 col-sm-12 col-xs-12 back");
            const frontImg = $("<img>").attr("src", cardImgs[row]);
            const backImg = $("<img>").attr("src", "images/strangerThingsCard.jpg");
            $(frontCardCol).append(frontImg);
            $(backCardCol).append(backImg);
            $(rowCard).append(frontCardCol);
            $(rowCard).append(backCardCol);
            $(makeCardCols).append(rowCard);
            $(makeCardRow).append(makeCardCols);
            $("#game-area").append(makeCardRow);
        }
    }
}

function handleCardClick(){
    $(this).find('.front').removeClass('remove');

    if(first_card_clicked === null){
        first_card_clicked = this;
        console.log('first card: ',first_card_clicked);
        return
    } else {
        second_card_clicked = this;
        console.log('second card: ',second_card_clicked);
        if($(first_card_clicked).find("img").attr("src") === $(second_card_clicked).find("img").attr("src")){
            console.log('issa match!');
            var timeOut = setTimeout(function () {
                console.log('inside timeOut function');
                $(first_card_clicked).addClass('remove');
                first_card_clicked = null;
                $(second_card_clicked).addClass('remove');
                second_card_clicked = null;
                console.log('after timeOut function');
            }, 2000);
            console.log('before return timeOut');
            return timeOut;
        } else {
            console.log('issa NOT a match!');
            console.log('before timeOut');
            var timeOut = setTimeout(function () {
                console.log('inside timeOut function');
                $(first_card_clicked).find('.front').addClass('remove');
                first_card_clicked = null;
                $(second_card_clicked).find('.front').addClass('remove');
                second_card_clicked = null;
                console.log('after timeOut function');
            }, 2000);
            console.log('before return timeOut');
            return timeOut;
        }
    }
}
