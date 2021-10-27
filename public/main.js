const range = n => [...Array(n).keys()]

function renderData(data, htmlId) {
  const preNode = document.createElement('pre');
  const match = data.access_token_in === data.access_token_out;
  const color = match ? 'green' : 'red';
  preNode.style = `color: ${color}`;
  preNode.textContent = `route: ${data.route} -- ${data.access_token_in} -> ${data.access_token_out} (access_token in -> out)`;
  document.getElementById(htmlId).appendChild(preNode)
}

function hit_api_a(token, htmlId) {
  fetch(`/api/route_a?access_token=a-${token}`)
    .then(response => response.json())
    .then(data => renderData(data, htmlId));
}

function hit_api_b(token, htmlId) {
  fetch(`/api/route_b?access_token=b-${token}`)
    .then(response => response.json())
    .then(data => renderData(data, htmlId));
}

function main() {
  for (const i of range(10)) {
    hit_api_a(i, 'output');
    hit_api_b(i, 'output');
  }
}

window.onload = function() {
  main();
}