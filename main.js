const heading1 = document.getElementsByTagName('h1');

heading1.addEventListener('click', function(e) {
    console.log(e.target.value)
});