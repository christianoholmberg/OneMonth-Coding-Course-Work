/* 1. Grab the input value */


document.querySelector(".js-go").addEventListener('click', function () {

	var input = document.querySelector("input").value;
	searchEng (input)

});

document.querySelector(".js-userinput").addEventListener('keyup', function (e) {


	if (e.which === 13) {

		var input = document.querySelector("input").value;
		searchEng(input);
	}


});



/* 2. do the data stuff with the API */

function searchEng(searchQuery) {

	var url = "http://api.giphy.com/v1/gifs/search?q=" + searchQuery + "&api_key=dc6zaTOxFJmzC";

	// AJAX REQUEST
	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open('GET', url);
	GiphyAJAXCall.send();

	GiphyAJAXCall.addEventListener('load', function (e) {

		var data = e.target.response;
		pushToDOM(data);

	});

}



/* 3. Show me the GIFs */

function pushToDOM(response) {

	var response = JSON.parse(response);

	var imageURLs = response.data;
	var container = document.querySelector(".js-container");

	container.innerHTML = "";

	imageURLs.forEach(function (image) {

		var src = image.images.fixed_height.url;

		container.innerHTML += "<img src=\"" + src + "\" class = \"container-image\">";

	});


	

}


