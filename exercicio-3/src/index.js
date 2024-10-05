var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
// a) Funcional
var getBioByIdFunctional = function (id) {
    var people = lista.find(function (item) { return item.id === id; });
    return people === null || people === void 0 ? void 0 : people.bio;
};
// a) Imperativo
var getBioByIdImperative = function (id) {
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            return lista[i].bio;
        }
    }
};
// b) Funcional
var getNameByIdFunctional = function (id) {
    var people = lista.find(function (item) { return item.id === id; });
    return people === null || people === void 0 ? void 0 : people.name;
};
// b) Imperativo
var getNameByIdImperative = function (id) {
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            return lista[i].name;
        }
    }
};
// c) Funcional
var deleteByIdFunctional = function (id) {
    var removePeople = function (person) { return person.id !== id; };
    return lista.filter(removePeople);
};
// c) Imperativo
var deleteByIdImperative = function (id) {
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            lista.splice(i, 1);
            return lista;
        }
    }
};
// d) Funcional
var changeNameOrBioByIdFunctional = function (id, name, bio) {
    return lista.map(function (person) { return person.id === id ? __assign(__assign({}, person), { name: name !== null && name !== void 0 ? name : person.name, bio: bio !== null && bio !== void 0 ? bio : person.bio }) : person; });
};
// d) Imperativo
var changeNameOrBioByIdImperative = function (id, name, bio) {
    if (!name && !bio) {
        return lista;
    }
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            lista[i].name = name ? name : lista[i].name;
            lista[i].bio = bio ? bio : lista[i].bio;
            return lista;
        }
    }
    return lista;
};
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
var form = document.getElementById("form");
var input = document.getElementById('word');
var resultElement = document.getElementById('result');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var word = input.value;
    var vowels = vowelCounter(word);
    resultElement.textContent = 'A palavra tem ' + vowels + ' vogais.';
});
// form de busca de Bio (Funcional)
document.getElementById('formBioFuncional').addEventListener('submit', function (event) {
    event.preventDefault();
    var id = parseInt(document.getElementById('bioIdFunctional').value);
    var bio = getBioByIdFunctional(id);
    document.getElementById('resultBioFunctional').textContent = bio ? bio : 'Bio não encontrada';
});
// form de busca de Bio (Imperativo)
document.getElementById('formBioImperativo').addEventListener('submit', function (event) {
    event.preventDefault();
    var id = parseInt(document.getElementById('bioIdImperativo').value);
    var bio = getBioByIdImperative(id);
    document.getElementById('resultBioImperativo').textContent = bio ? bio : 'Bio não encontrada';
});
// form de busca de Nome (Funcional)
document.getElementById('formNameFuncional').addEventListener('submit', function (event) {
    event.preventDefault();
    var id = parseInt(document.getElementById('nameIdFunctional').value);
    var name = getNameByIdFunctional(id);
    document.getElementById('resultNameFunctional').textContent = name ? name : 'Nome não encontrado';
});
// form de busca de Nome (Imperativo)
document.getElementById('formNameImperativo').addEventListener('submit', function (event) {
    event.preventDefault();
    var id = parseInt(document.getElementById('nameIdImperativo').value);
    var name = getNameByIdImperative(id);
    document.getElementById('resultNameImperativo').textContent = name ? name : 'Nome não encontrado';
});
// form de delete (Funcional)
document.getElementById('formDeleteFuncional').addEventListener('submit', function (event) {
    event.preventDefault();
    var id = parseInt(document.getElementById('deleteIdFunctional').value);
    lista = deleteByIdFunctional(id);
    document.getElementById('resultDeleteFunctional').textContent = lista.length > 0
        ? lista.map(function (person) { return "ID: ".concat(person.id, ", Nome: ").concat(person.name, ", Bio: ").concat(person.bio); }).join(" | ")
        : 'Nenhuma pessoa encontrada na lista.';
    console.log(lista);
});
// form de delete (Imperativo)
document.getElementById('formDeleteImperativo').addEventListener('submit', function (event) {
    event.preventDefault();
    var id = parseInt(document.getElementById('deleteIdImperativo').value);
    lista = deleteByIdImperative(id) || [];
    document.getElementById('resultDeleteImperativo').textContent = lista.length > 0
        ? lista.map(function (person) { return "ID: ".concat(person.id, ", Nome: ").concat(person.name, ", Bio: ").concat(person.bio); }).join(' | ')
        : 'Nenhuma pessoa encontrada na lista.';
    console.log(lista);
});
// form de alteração (Funcional)
document.getElementById('formChangeFuncional').addEventListener('submit', function (event) {
    event.preventDefault();
    var id = parseInt(document.getElementById('changeIdFunctional').value);
    var newName = document.getElementById('newNameFunctional').value;
    var newBio = document.getElementById('newBioFunctional').value;
    lista = changeNameOrBioByIdFunctional(id, newName, newBio);
    document.getElementById('resultChangeFunctional').textContent = lista.length > 0
        ? lista.map(function (person) { return "ID: ".concat(person.id, ", Nome: ").concat(person.name, ", Bio: ").concat(person.bio); }).join(' | ')
        : 'Nenhuma pessoa encontrada na lista.';
    console.log(lista);
});
// form de alteração (Imperativo)
document.getElementById('formChangeImperativo').addEventListener('submit', function (event) {
    event.preventDefault();
    var id = parseInt(document.getElementById('changeIdImperativo').value);
    var newName = document.getElementById('newNameImperativo').value;
    var newBio = document.getElementById('newBioImperativo').value;
    lista = changeNameOrBioByIdImperative(id, newName, newBio);
    document.getElementById('resultChangeImperativo').textContent = lista.length > 0
        ? lista.map(function (person) { return "ID: ".concat(person.id, ", Nome: ").concat(person.name, ", Bio: ").concat(person.bio); }).join(' | ')
        : 'Nenhuma pessoa encontrada na lista.';
    console.log(lista);
});
