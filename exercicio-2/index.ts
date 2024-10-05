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
