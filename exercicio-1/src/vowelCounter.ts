const vowelCounter = (word: string): number => {
  var counter = 0;

  // tratamento de vogais acentuadas
  var vowels = "aeiouâêîôûáéíóúàèìòùãẽĩõũ";

  for (var i of word.toLowerCase()) {
    if (vowels.includes(i)) {
      counter += 1;
    }
  }
  return counter;
}

// 1.a) Teste com uma palavra recebida como parâmetro
console.log(vowelCounter("Isaac"));


// 2.b) Teste com uma palavra recebida via input no form

const form = <HTMLFormElement>document.getElementById("form");
const input = <HTMLInputElement>document.getElementById('word');
const resultElement = <HTMLElement>document.getElementById('result');

form.addEventListener('submit', function (event: Event) {
  event.preventDefault();

  const word: string = input.value;
  const vowels: number = vowelCounter(word);

  resultElement.textContent = 'A palavra tem ' + vowels + ' vogais.';
})