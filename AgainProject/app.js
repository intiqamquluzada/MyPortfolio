const searcher = document.getElementById('searcher');
searcher.addEventListener('keyup', e => {

    let currentValue = e.target.value.toLowerCase();
    console.log(currentValue);
    let results = document.querySelectorAll('h5.title')
    results.forEach(result => {
        if(result.textContent.toLowerCase().includes(currentValue)){
            result.parentNode.style.display = 'block';
        }
        else{
            result.parentNode.style.display = 'none';
        }
    });
});
