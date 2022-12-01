const user = {
    firstName: 'Herbert',
    lastName: 'Bustorff',
    full_name: 'Herbert Bustorff',
    age: 18,
    instagram: 'https.brebet',
    skills: ['Front-End', 'Node.js', 'Python', 'Django']
}

//o rest operator tem que ser o ultimo elemento
const { firstName, skills, ...rest } = user
const [ primary, ...restSkills ] = skills


console.log( rest )
console.log( restSkills )
