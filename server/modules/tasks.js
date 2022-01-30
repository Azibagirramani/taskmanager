const Task = require("../modals/task");
const Validator = require("../utilities/validations/task");

exports.all = async function (req, res) {
  const data = await Task.find();
  res.json(data);
};

exports.add = async function (req, res) {
  const { errors } = Validator(req.body);

  // validates request body
  if (!errors) return res.status(400).json(errors);

  try {
    const response = await Task.create(req.body);

    console.log(req.body);
    res.json(response);
    return;
  } catch (error) {
    res.status(500).json("unable to process request");
  }
};


exports.patch = function(req, res){

   

}

exports.delete = async function(req, res){
   const { id } = req.params

   try {
      const remove = await Task.deleteOne({_id: id })
      res.json({ count: remove.deletedCount })      
   } catch (error) {
      res.status(500).json("unable to process request");
   }
}
