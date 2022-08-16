// import faker from 'faker'
const { faker } = require('@faker-js/faker');

const Tutorials =[
  {
    "key": 0,
    "avatar" : faker.image.avatar(),
    "name" : faker.name.firstName(),
    "description": "Description: delivery",
    "star": "5 star"
  },
  { 
    "key": 1,
    "avatar" : faker.image.avatar(),
    "name" : faker.name.firstName(),
    "description": "Description: delivery",
    "star": "5 star"
  },
  {   
    "key": 2,
    "avatar" : faker.image.avatar(),
    "name" : faker.name.firstName(),
    "description": "Description: delivery",
    "star": "5 star"
  }
]

export default Tutorials