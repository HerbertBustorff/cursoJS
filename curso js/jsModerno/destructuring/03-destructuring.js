const user = {
    firstName: 'Herbert',
    lastName: 'Bustorff',
    full_name: 'Herbert Bustorff',
    age: 18,
    instagram: 'https.brebet',
    skills: ['Front-End', 'Node.js', 'Python', 'Django']
}

const { firstName, age, skills, full_name: fullName } = user
const [primary, secondary, tertiery, quaternery] = skills


console.log(fullName)
