const $results = $(".results");
const $search = $(".input");

function appendGiphy(res) {
  let gifDL = res.data.length;
  if (gifDL) {
    let randomIdx = Math.floor(Math.random() * gifDL);
    let $newGiphyDiv = $("<div>", { class: "giphyDiv" });
    let $giphy = $("<img>", {
      src: res.data[randomIdx].images.original.url,
      class: "w-100"
    });
    $newGiphyDiv.append($giphy);
    $results.append($newGiphyDiv);
  }
}

$("form").on("submit", async function(e) {
  e.preventDefault();

  let searchTerm = $search.val();
  $search.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  appendGiphy(response.data);
});


$("#removeBtn").on("click", function() {
  $results.empty();
});

console.log("Let's get this party started!");
