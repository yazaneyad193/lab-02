'use strict';
let myKeyWordsArray = [];
let objList = [];
// Rendering for page 2
$("#pageTwo").click(function () {
    $("div").empty();
    $.ajax('./data/page-2.json')
        .then(data => {
            // console.log(data);
            data.forEach((item) => {
                //     // console.log(item);
                //     let newAnimal = new Animal(item);
                //     // console.log(newAnimal);
                //     // newPerson.render();
                //     newAnimal.render();
                myKeyWordsArray = [];
                var newObj = new Animal(item);
                objList.push(newObj);
                // newObj.toHtml()
                var renderedObj = newObj.render();
                console.log(renderedObj);
                $('.photo-template').append(renderedObj);
            })
            animalList();
            // $( ".photo-template" ).show();
        })
});
// Renderin for Page 1
$("#pageOne").click(function () {
    $("div").empty();
    $.ajax('./data/page-1.json')
        .then(data => {
            // console.log(data);
            data.forEach((item) => {
                //     // console.log(item);
                //     let newAnimal = new Animal(item);
                //     // console.log(newAnimal);
                //     // newPerson.render();
                //     newAnimal.render();
                myKeyWordsArray = [];
                var newObj = new Animal(item);
                objList.push(newObj);
                // newObj.toHtml()
                var renderedObj = newObj.render();
                console.log(renderedObj);
                $('.photo-template').append(renderedObj);
            })
            animalList();
            // $( ".photo-template" ).show();
        })
});
$.ajax('./data/page-1.json')
    .then(data => {
        // console.log(data);
        data.forEach((item) => {
            //     // console.log(item);
            //     let newAnimal = new Animal(item);
            //     // console.log(newAnimal);
            //     // newPerson.render();
            //     newAnimal.render();
            var newObj = new Animal(item);
            objList.push(newObj);
            // newObj.toHtml()
            var renderedObj = newObj.render();
            console.log(renderedObj);
            $('.photo-template').append(renderedObj);
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
    // let animalClone = $('.photo-template').clone();
    // animalClone.removeClass('photo-template');
    // // $('section').addClass(`${this.keyword}`);
    // animalClone.find('h2').text(this.title);
    // animalClone.find('img').attr('src',this.image_url);
    // animalClone.find('p').text(this.description);
    // animalClone.attr('class',this.keyword);
    // // console.log(anim  alClone);
    // $('main').append(animalClone);
    // get the template from HTML
    let template = $('#template-neigh').html();
    // use Mustache to render new html by merging the template with the object
    //   console.log(this);
    let newObj = Mustache.render(template, this);
    //   console.log(newObj);
    //   console.log(this.keyword);
    //   $('#myDiv').addClass(`${this.keyword}`);
    //   newObj.attr('class',this.keyword);
    return newObj;
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
    console.log('I am ' + keyWordList);
    $('div').hide();
    $(`div[class="${keyWordList}"]`).show();

})


function optionListener() {
    $('select').change(() => {
        const $selectedImage = $('select option:selected').text();
        if ($selectedImage === 'Filter by Keyword') {
            $('img').show();
        } else {
            $(`section[keyword!=${$selectedImage}]`).hide();
            $(`section[keyword=${$selectedImage}]`).show();
        }
    })
}

let titleSort = () => {
    console.log(objList);
    objList.forEach(() => {
        objList.sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        });
        return objList;


    });

    $('.photo-template').remove();
    displayAllImages();
};

$('#title').on('click', titleSort);


function displayAllImages() {
    alert("I cant do it :(");
}