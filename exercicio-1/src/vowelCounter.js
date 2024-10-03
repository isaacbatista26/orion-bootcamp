var vowelCounter = function (word) {
    var counter = 0;
    // tratamento de vogais acentuadas
    var vowels = "aeiouâêîôûáéíóúàèìòùãẽĩõũ";
    for (var _i = 0, _a = word.toLowerCase(); _i < _a.length; _i++) {
        var i = _a[_i];
        if (vowels.includes(i)) {
            counter += 1;
        }
    }
    return counter;
};
// 1.a) Teste com uma palavra recebida como parâmetro
console.log(vowelCounter("Isaac"));
// 2.b) Teste com uma palavra recebida via input no form
var form = document.getElementById("form");
var input = document.getElementById('word');
var resultElement = document.getElementById('result');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var word = input.value;
    var vowels = vowelCounter(word);
    resultElement.textContent = 'A palavra tem ' + vowels + ' vogais.';
});
