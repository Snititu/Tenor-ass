const btn = document.querySelector("#btn");
const space = document.querySelector("#space");
btn.addEventListener("click", function () {
  let subject = document.querySelector("#input").value;
  let myRequest = new XMLHttpRequest();
  myRequest.open(
    "GET",
    `https://g.tenor.com/v1/search?q=${subject}&key=LIVDSRZULELA`,
    true
  );

  myRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var newData = JSON.parse(this.responseText);
      var output = "";
      for (let i = 0; i < 20; i++) {
        output += `<div class="char">
                <img class="imgs" src = ${newData.results[i].media[0].gif.url} width=25% height=auto>
                </div>`;
      }
      space.innerHTML = output;
    }
  };
  myRequest.send();
});
