// JavaScript source code

var url = "http://api.giphy.com/v1/gifs/search?q=funny+dog&api_key=dc6zaTOxFJmzC"

var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', url);


GiphyAJAXCall.addEventListener('load', function (e) {

    var data = e.target.response;
    pushToDom(data);
   
}); 

GiphyAJAXCall.send();





function pushToDom(data) {

    var response = JSON.parse(data);

    var imageURL = response.data;

    var container = document.querySelector(".container");
    container.innerHTML = "";


    for (i = 0; i < 20; i++) {


        setTimeout(function () {

            var src = imageURL[i].images.original.url;
            container.innerHTML = "";
            container.innerHTML += "<div class=\"gif\"><img src='" + src + "' class='container__image' /></div>";
            i++;      
            
        }, 3000 * i);
                 
    }

}


