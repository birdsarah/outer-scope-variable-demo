function main() {
  console.log('running');
  document.getElementById('output').textContent = 'test'; 
}

console.log('AAA');

window.onload = function() {
  console.log('loaded');
  main();
}