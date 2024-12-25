mongoose = require('mongoose');
const MONGO_URI = 'mongodb://localhost:27017/Week8';

mongoose.connect(MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', function (err){
  console.log("Error occurred during connection" +err)});

db.once('connected', function()  {
  console.log(`Connected to ${MONGO_URI}`);
});

const PersonScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  Gender: String,
  Salary: Number,
});


const person_doc = mongoose.model('modelname', PersonScheme, 'personCollection');

// Creating a single document
const doc1 = new person_doc({
  name: 'Jacky',
  age: 362,
  Gender: 'Male',
  Salary: 3456,
});

// Adding the document to the collection
doc1
  .save()
  .then((doc1) => {
    console.log("New Article Has Been Added Into Your Database.", doc1);
  })
  .catch((err) => {
    console.error(err);
  });
manypersons= [{name: 'Simon', age:42, Gender:"Male", Salary:3456}
    , {name:'Neesha', age:27, Gender:"Female", salary:1000}
        ,{name:'Mary', age:27, Gender:"Female", Salary:5402},
        {name: 'Mike', age:40, Gender:"Male", Salary: 4519}]
        person_doc.insertMany (manypersons).then(function(){
            console.log("Data inserted")})
            .catch(function(error){
                console.log(error)});
                person_doc.find({})
                .sort({Salary:1})
                .select('name Salary age')
                .limit(10)
                .exec()
                .then(docs=>{
                    console.log("showing multiple document")
                    docs.forEach(function(Doc){
                        console.log(Doc.age,Doc.name);})})
                        .catch(err=>{
                            console.error(err)})
                            person_doc.countDocuments().exec()
                            .then(count=>{
                                console.log("total documents count:", count)
                            }).catch(err=>{
                    console.error(err)})
                    person_doc.deleteMany({age:{$gte:25}})
                    .exec()
                    .then(docs=>{
                        console.log('deleted documents are:', docs);
                    }).catch(function(error){
                        console.log(error);
                    });
                    person_doc.updateMany({Gender:"Female"},{Salary:5555})
                    .exec()
                    .then(docs=>{
                        console.log("update")
                        console.log(docs);
                    }).catch(function(error){
                        console.log(error);
                    });