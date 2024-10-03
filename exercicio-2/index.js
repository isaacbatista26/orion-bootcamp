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
    var bio = people === null || people === void 0 ? void 0 : people.bio;
    return bio;
};
// a) Imperativo
var getBioByIdImperative = function (id) {
    var bio = '';
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            bio = lista[i].bio;
            break;
        }
    }
    return bio;
};
console.log(getBioByIdImperative(2));
// b) Funcional
var getNameByIdFunctional = function (id) {
    var people = lista.find(function (item) { return item.id === id; });
    var name = people === null || people === void 0 ? void 0 : people.name;
    return name;
};
// b) Imperativo
var getNameByIdImperative = function (id) {
    var name = '';
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            name = lista[i].name;
            break;
        }
    }
    return name;
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
            break;
        }
    }
    return lista;
};
// d) Funcional
var updatePerson = function (person, name, bio) {
    return __assign(__assign({}, person), { name: name !== undefined ? name : person.name, bio: bio !== undefined ? bio : person.bio });
};
var changeNameOrBioByIdFunctional = function (id, name, bio) {
    var people = lista.find(function (item) { return item.id === id; });
    if (!people) {
        return lista;
    }
    var updatedPerson = updatePerson(people, name, bio);
    return lista.map(function (person) { return person.id === id ? updatedPerson : person; });
};
// d) Imperativo
var changeNameOrBioByIdImperative = function (id, name, bio) {
    for (var i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            if (name !== undefined) {
                lista[i].name = name;
            }
            if (bio !== undefined) {
                lista[i].bio = bio;
            }
        }
    }
    return lista;
};
