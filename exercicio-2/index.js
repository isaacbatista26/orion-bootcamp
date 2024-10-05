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
