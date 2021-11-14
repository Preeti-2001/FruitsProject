// jshint esversion:6

const mongoose= require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true , useUnifiedTopology: true } );

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"No name given"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
  rating: 7,
  review: "Great fruit"
});

// fruit.save();

const personSchema= new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person",personSchema);

const apple= new Fruit({
  name: "Apple",
  rating: 9,
  review: "seet n sour"
});
// apple.save();

Person.updateOne({name:"John"},{favouriteFruit:apple},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("successful updation");
  }
});

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "juicy"
});
// pineapple.save();

// const person = new Person({
//   name:"Alisa",
//   age: 17,
//   favouriteFruit: pineapple
// });
// person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Healthy to eat"
});
const orange = new Fruit({
  name: "Orange",
  rating: 3,
  review: "Too sour to eat"
});
const banana = new Fruit({
  name: "Banana",
  rating: 9,
  review: "deliciously delicate"
});

// Fruit.insertMany([kiwi,orange,banana], function(){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully saved fruits in DB");
//   }
// });

Fruit.find(function(err,fruits){
  if(err){
    console.log(err);
  }else{
    mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({_id:"611232e57dce9541fc93b537"},{name:"Grape"}, function(err){
//   if (err){
//     console.log(err);
//   }else{
//     console.log("Successfully updated");
//   }
// });

// Fruit.deleteOne({name:"Apple"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("successful deletion");
//   }
// });

// Person.deleteMany({name:"John"},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("successfullyy deleted all johns");
//   }
// });
