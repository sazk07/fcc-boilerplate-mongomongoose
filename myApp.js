require('dotenv').config();
const mongoose = require('mongoose')
try {
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  console.log("Database connection successful")
} catch (error) {
  console.error(error)
}

const Schema = mongoose.Schema
const personSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  age: { type: Number },
  favoriteFoods: { type: [String] }
})

let Person = mongoose.model("Person", personSchema)

const createAndSavePerson = (done) => {
  const bob = new Person({
    name: "bob",
    age: 23,
    favoriteFoods: ["biryani", "pizza"]
  })
  bob.save((err, data) => {
    if (err) return done(err)
    done(null, data);
  })
};

const arrayOfPeople = [{
  name: 'johnny',
  age: 12,
  favoriteFoods: ["burger", "daal"]
}, {
  name: "suzie",
  age: 45,
  favoriteFoods: ["ramen", "pasta", "chicken"]
}, {
  name: "jack",
  age: 33,
  favoriteFoods: ["beef", "pork", "spaghetti"]
}]
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return done(err)
    done(null, people);
  })
};

const findPeopleByName = (personName, done) => {
  Person.find({
    name: personName
  }, (err, personFound) => {
    if (err) return done(err)
    done(null, personFound);
  })
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
