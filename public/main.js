const range = n => [...Array(n).keys()]

function renderData(data, htmlId) {
  const dataNode = document.createElement('li');
  const match = data.access_token_in === data.access_token_out;
  const color = match ? 'green' : 'red';
  dataNode.style = `color: ${color}`;
  dataNode.textContent = `route: ${data.route} | access_token in: ${data.access_token_in} | access_token out: ${data.access_token_out}`;
  document.getElementById(htmlId).appendChild(dataNode)
}

function hit_api_b(token, htmlId) {
  fetch(`/api/route_b?access_token=${token}`)
    .then(response => response.json())
    .then(data => renderData(data, htmlId));
}

function hit_api_a(token, htmlId) {
  fetch(`/api/route_a?access_token=${token}`)
    .then(response => response.json())
    .then(data => renderData(data, htmlId));
}

function main() {
  for (const i of range(10)) {
    hit_api_a(i, 'slow-output');
    hit_api_b(i, 'slow-output');
  }
  // Wait for slow pass to run
  setTimeout(() => {
    for (const i of range(10)) {
      hit_api_a(i, 'fast-output');
      hit_api_b(i, 'fast-output');
    }
  }, 15000)
}

window.onload = function() {
  main();
}