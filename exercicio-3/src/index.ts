let lista = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];

// a) Funcional
const getBioByIdFunctional = (id: number) => {
    let people = lista.find(item => item.id === id);
    return people?.bio;
}

// a) Imperativo
const getBioByIdImperative = (id: number) => {
    for(let i = 0; i < lista.length; i++){
        if (lista[i].id === id) {
            return lista[i].bio;
        }
    }
}

// b) Funcional
const getNameByIdFunctional = (id: number) => {
    let people = lista.find(item => item.id === id);
    return people?.name;
}

// b) Imperativo
const getNameByIdImperative = (id: number) => {
    for(let i = 0; i < lista.length; i++){
        if(lista[i].id === id) {
            return lista[i].name;
        }
    }
}


// c) Funcional
const deleteByIdFunctional = (id: number) => {
    const removePeople = (person: {id: number, name: string, bio: string}) => person.id !== id;
    return lista.filter(removePeople)
}


// c) Imperativo
const deleteByIdImperative = (id: number) => {
    for(let i = 0; i < lista.length; i++){
        if(lista[i].id === id) {
            lista.splice(i, 1);
            return lista
        }
    }
}

// d) Funcional
const changeNameOrBioByIdFunctional = (id: number, name?: string, bio?: string) => {
    return lista.map(person => person.id === id ? { ...person, name: name ?? person.name, bio: bio ?? person.bio } : person )
};

// d) Imperativo
const changeNameOrBioByIdImperative = (id: number, name?: string, bio?: string) => {
    if(!name && !bio){
        return lista;
    }
    for(let i = 0; i < lista.length; i++){
        if(lista[i].id === id){
            lista[i].name = name ? name : lista[i].name;
            lista[i].bio = bio ? bio : lista[i].bio;

            return lista;
        }
    }
    return lista;
}

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
  
const form = <HTMLFormElement>document.getElementById("form");
const input = <HTMLInputElement>document.getElementById('word');
const resultElement = <HTMLElement>document.getElementById('result');

form.addEventListener('submit', function (event: Event) {
  event.preventDefault();

  const word: string = input.value;
  const vowels: number = vowelCounter(word);

  resultElement.textContent = 'A palavra tem ' + vowels + ' vogais.';
})



// form de busca de Bio (Funcional)
document.getElementById('formBioFuncional')!.addEventListener('submit', function (event) {
  event.preventDefault();
  const id = parseInt((document.getElementById('bioIdFunctional') as HTMLInputElement).value);
  const bio = getBioByIdFunctional(id);
  document.getElementById('resultBioFunctional')!.textContent = bio ? bio : 'Bio não encontrada';
});

// form de busca de Bio (Imperativo)
document.getElementById('formBioImperativo')!.addEventListener('submit', function (event) {
  event.preventDefault();
  const id = parseInt((document.getElementById('bioIdImperativo') as HTMLInputElement).value);
  const bio = getBioByIdImperative(id);
  document.getElementById('resultBioImperativo')!.textContent = bio ? bio : 'Bio não encontrada';
});

// form de busca de Nome (Funcional)
document.getElementById('formNameFuncional')!.addEventListener('submit', function (event) {
  event.preventDefault();
  const id = parseInt((document.getElementById('nameIdFunctional') as HTMLInputElement).value);
  const name = getNameByIdFunctional(id);
  document.getElementById('resultNameFunctional')!.textContent = name ? name : 'Nome não encontrado';
});

// form de busca de Nome (Imperativo)
document.getElementById('formNameImperativo')!.addEventListener('submit', function (event) {
  event.preventDefault();
  const id = parseInt((document.getElementById('nameIdImperativo') as HTMLInputElement).value);
  const name = getNameByIdImperative(id);
  document.getElementById('resultNameImperativo')!.textContent = name ? name : 'Nome não encontrado';
});

// form de delete (Funcional)
document.getElementById('formDeleteFuncional')!.addEventListener('submit', function (event) {
  event.preventDefault();
  const id = parseInt((document.getElementById('deleteIdFunctional') as HTMLInputElement).value);
  lista = deleteByIdFunctional(id);
  document.getElementById('resultDeleteFunctional')!.textContent = lista.length > 0
    ? lista.map(person => `ID: ${person.id}, Nome: ${person.name}, Bio: ${person.bio}`).join(" | ")
    : 'Nenhuma pessoa encontrada na lista.';
  console.log(lista);
});

// form de delete (Imperativo)
document.getElementById('formDeleteImperativo')!.addEventListener('submit', function (event) {
  event.preventDefault();
  const id = parseInt((document.getElementById('deleteIdImperativo') as HTMLInputElement).value);
  lista = deleteByIdImperative(id) || [];
  document.getElementById('resultDeleteImperativo')!.textContent = lista.length > 0
    ? lista.map(person => `ID: ${person.id}, Nome: ${person.name}, Bio: ${person.bio}`).join(' | ')
    : 'Nenhuma pessoa encontrada na lista.';

  console.log(lista);
});

// form de alteração (Funcional)
document.getElementById('formChangeFuncional')!.addEventListener('submit', function (event) {
  event.preventDefault();
  const id = parseInt((document.getElementById('changeIdFunctional') as HTMLInputElement).value);
  const newName = (document.getElementById('newNameFunctional') as HTMLInputElement).value;
  const newBio = (document.getElementById('newBioFunctional') as HTMLInputElement).value;
  
  lista = changeNameOrBioByIdFunctional(id, newName, newBio);
  document.getElementById('resultChangeFunctional')!.textContent = lista.length > 0
    ? lista.map(person => `ID: ${person.id}, Nome: ${person.name}, Bio: ${person.bio}`).join(' | ')
    : 'Nenhuma pessoa encontrada na lista.';
    
  console.log(lista);
});

// form de alteração (Imperativo)
document.getElementById('formChangeImperativo')!.addEventListener('submit', function (event) {
  event.preventDefault();
  const id = parseInt((document.getElementById('changeIdImperativo') as HTMLInputElement).value);
  const newName = (document.getElementById('newNameImperativo') as HTMLInputElement).value;
  const newBio = (document.getElementById('newBioImperativo') as HTMLInputElement).value;
  
  lista = changeNameOrBioByIdImperative(id, newName, newBio);
    document.getElementById('resultChangeImperativo')!.textContent = lista.length > 0
    ? lista.map(person => `ID: ${person.id}, Nome: ${person.name}, Bio: ${person.bio}`).join(' | ')
    : 'Nenhuma pessoa encontrada na lista.';
    
  console.log(lista);
});

