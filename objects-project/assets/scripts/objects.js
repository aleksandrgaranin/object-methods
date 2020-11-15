const movieList = document.getElementById('movie-list');

// movieList.style['background-color'] = 'green';
movieList.style.display = 'block';

const userChosenKeyName = 'level';


const person = {
    'first name': 'Max',
    age: 30,
    [userChosenKeyName]: '...',
    nobbies: ['Sports', 'Cooking'],
    greet: function () {
        alert('hi there');
    },
    1.5: 'hello'
};

// person.greet();

// delete person.age
person.isAdmin = true;
const keyName = 'first name'

console.log(person['first name'])
console.log(person[keyName])
console.log(person[1.5])

console.log(person.level)

