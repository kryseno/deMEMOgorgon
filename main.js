let first_card_clicked = null;
let second_card_clicked = null;
let allow_card_click = true;

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
    displayCards();
    $(".card").click(handleCardClick);
}

function displayCards(){
    console.log('displaying cards');
    for(let row=0; row<3; row++){
        const makeCardRow = $("<div>").addClass("row cardContainer");
        for(let cardElem=0; cardElem<cardImgs.length; cardElem++){
            const makeCardCols = $("<div>").addClass("col-lg-2 col-mg-2 col-sm-2 col-xs-2");
            const rowCard = $("<div>").addClass("row card").click(flip);
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
    function flip() {
        $(this).addClass('flipped');
    }
}

function handleCardClick(){
    if(!allow_card_click){
        $(this).removeClass('flipped');
        console.log('cards have already been clicked! WAIT');
        return
    }
    
    $(this).find('.front').removeClass('remove');

    if(first_card_clicked === null){
        first_card_clicked = this;
        console.log('first card clicked: ',first_card_clicked);
        return
    } else {
        second_card_clicked = this;
        console.log('second card clicked: ',second_card_clicked);
        allow_card_click = false;
        
        if(first_card_clicked === second_card_clicked){
            console.log('cannot choose same card!!');
            allow_card_click = true;
            return
        }

        if($(first_card_clicked).find("img").attr("src") === $(second_card_clicked).find("img").attr("src")){
            console.log('issa match!');
            var timeOut = setTimeout(function () {
                console.log('inside timeOut function');
                $(first_card_clicked).addClass('animated fadeOut');
                $(second_card_clicked).addClass('animated fadeOut');
                first_card_clicked = null;
                second_card_clicked = null;
                allow_card_click = true;    
                console.log('clicking cards now permitted');
                console.log('after timeOut function');
            }, 2000);
            console.log('before return timeOut');
            return timeOut;
        } else {
            console.log('issa NOT a match!');
            console.log('before timeOut');
            var timeOut = setTimeout(function () {
                console.log('inside timeOut function');
                $(first_card_clicked).removeClass('flipped').find('.front').addClass('remove');
                $(second_card_clicked).removeClass('flipped').find('.front').addClass('remove');
                console.log('cards should be flipped now');
                first_card_clicked = null;
                second_card_clicked = null;
                allow_card_click = true;  
                console.log('clicking cards now permitted');
                console.log('after timeOut function');             
            }, 2000);
            console.log('before return timeOut');
            return timeOut;
        }
    }
}
