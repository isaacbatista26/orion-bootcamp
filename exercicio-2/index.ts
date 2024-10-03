let lista = [
    {"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}];

// a) Funcional
const getBioByIdFunctional = (id: number) => {
    let people = lista.find(item => item.id === id);
    let bio = people?.bio;
    return bio
}


// a) Imperativo
const getBioByIdImperative = (id: number) => {
    let bio = '';
    for(let i = 0; i < lista.length; i++){
        if (lista[i].id === id) {
            bio = lista[i].bio;
            break;
        }
    }
    return bio;
}


// b) Funcional
const getNameByIdFunctional = (id: number) => {
    let people = lista.find(item => item.id === id);
    let name = people?.name;
    return name;
}

// b) Imperativo
const getNameByIdImperative = (id: number) => {
    let name = '';
    
    for(let i = 0; i < lista.length; i++){
        if(lista[i].id === id) {
            name = lista[i].name;
            break;
        }
    }
    return name;
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
            break;
        }
    }
    return lista
}


// d) Funcional
const updatePerson = (person: { id: number; name: string; bio: string }, name?: string, bio?: string) => {
    return {
        ...person,
        name: name !== undefined ? name : person.name,
        bio: bio !== undefined ? bio : person.bio
    };
};
const changeNameOrBioByIdFunctional = (id: number, name?: string, bio?: string) => {
    const people = lista.find(item => item.id === id);
    
    if (!people) {
        return lista;
    }
    
    const updatedPerson = updatePerson(people, name, bio);
    
    return lista.map(person => person.id === id ? updatedPerson : person);
};

// d) Imperativo
const changeNameOrBioByIdImperative = (id: number, name?: string, bio?: string) => {
    for(let i = 0; i < lista.length; i++){
        if(lista[i].id === id) {
            if (name !== undefined) {
                lista[i].name = name;
            }
            if (bio !== undefined) {
                lista[i].bio = bio;
            }
        }
    }
    return lista
}