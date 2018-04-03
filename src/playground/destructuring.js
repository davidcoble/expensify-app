console.log('dest')

const person = {

    age: 53,
    location: {
        city: 'Seattle',
        temp: 40
    }
}

const { name = 'anon', age, location } = person;
const { city, temp: temperature} = location;

console.log(`${name} is ${age}. He lives in ${city}, where it's ${temperature} degrees.`)