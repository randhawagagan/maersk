window.onload = function () {

  // Add event listeners
  document.getElementById("shuffle").onclick = shuffleNodes;
  document.getElementById("sort").onclick = sortNodes;

  let ulItems = document.getElementById("unorderedItems");


  function sortNodes() {

    nodes = ulItems.children, i = 1;
    nodes = Array.prototype.slice.call(nodes);

    nodes.sort(function (a, b) {
      return parseInt(a.innerText, 10) -
        parseInt(b.innerText, 10);
    });

    while (i < nodes.length) {
      ulItems.appendChild(nodes[i]);
      ++i;
    }
  }

  function shuffle(items) {
    let cached = items.slice(0), temp, i = cached.length, random;
    while (--i) {
      random = Math.floor(i * Math.random());
      temp = cached[random];
      cached[random] = cached[i];
      cached[i] = temp;
    }
    return cached;
  }

  function shuffleNodes() {
    let nodes = ulItems.children, i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffle(nodes);
    while (i < nodes.length) {
      ulItems.appendChild(nodes[i]);
      ++i;
    }
  }


}