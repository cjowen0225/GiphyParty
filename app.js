const gifDiv = $('#gifs');
const search = $('#searchBar');

function addGIF(text) {
	let results = text.data.length;
	console.log(text.data);
	if (results) {
		let rand = Math.floor(Math.random() * results);
		let gifSpot = $('<div>', { class: 'col-md-4 col-12 mb-4' });
		let newGIF = $('<img>', { src: text.data[rand].images.original.url, class: 'w-100' });
		//let newGIF = $('<img>');
		//newGIF.attr('src', text.data[rand].images.original.url);
		//newGIF.attr('src', 'https://media1.giphy.com/media/BpDYodBlBXFIs/giphy.gif');
		gifSpot.append(newGIF);
		console.log(gifSpot);
		gifDiv.append(gifSpot);
	}
}

$('form').on('submit', async function(e) {
	e.preventDefault();

	let searchedWord = search.val();
	let newIMG = await axios.get('http://api.giphy.com/v1/gifs/search', {
		params: {
			q: searchedWord,
			api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'
		}
	});
	search.val('');
	addGIF(newIMG.data);
});

$('button').on('click', function() {
	$('#gifs').empty();
});

console.log("Let's get this party started!");
