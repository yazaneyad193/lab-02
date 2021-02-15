'use strict';
let myKeyWordsArray = [];
let objList = [];

$.ajax('./data/page-1.json')
    .then(data => {
        // console.log(data);
        data.forEach((item) => {
            // console.log(item);
            let newAnimal = new Animal(item);
            // console.log(newAnimal);
            // newPerson.render();

            newAnimal.render();
        })

        animalList();
    })

function Animal(animal) {
    this.image_url = animal.image_url;
    this.title = animal.title;
    this.description = animal.description;
    this.keyword = animal.keyword;
    if (!myKeyWordsArray.includes(this.keyword)) {
        myKeyWordsArray.push(this.keyword);
    }
    objList.push(this);

}


Animal.prototype.render = function () {
    // $('ul').append(`
    //     <li>${this.name}</li>
    // `);
    // let personClone = $('.person-template').first().clone();
    let animalClone = $('.photo-template').clone();
    animalClone.removeClass('photo-template');
    // $('section').addClass(`${this.keyword}`);

    animalClone.find('h2').text(this.title);
    animalClone.find('img').attr('src', this.image_url);
    animalClone.find('p').text(this.description);
    animalClone.attr('class', this.keyword);
    // console.log(animalClone);
    $('main').append(animalClone);

}

// Animal.prototype.filter = () =>{
//     for (let i = 0; i < myKeyWordsArray.length; i++) {
//         let keyWord = myKeyWordsArray[i];
//         $('select').append(`<option>${keyWord}</option>`);  
//     }

// }

function animalList() {
    for (let i = 0; i < myKeyWordsArray.length; i++) {
        let keyWord = myKeyWordsArray[i];
        // console.log(keyWord);

        $('select').append(`<option>${keyWord}</option>`);

    }
}

$('select').on('change', function (event) {
    let keyWordList = event.target.value;
    console.log(keyWordList);
    $('div').hide();
    $(`div[class="${keyWordList}"]`).show();

})
