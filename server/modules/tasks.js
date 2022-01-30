const Task = require("../modals/task");
const Validator = require("../utilities/validations/task");

exports.all = async function (req, res) {
  try {
    const data = await Task.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({msg: "unable to process request"});
  }
};

exports.add = async function (req, res, next) {
  const { errors } = Validator(req.body);

  // validates request body
  if (!errors.length == 0) return res.status(400).json(errors);

  try {
    const response = await Task.create(req.body);
    res.json(response);
    return;
  } catch (error) {
    res.status(500).json({msg: "unable to process request"});
  }
};

exports.getById = async function (req, res) {
  const { id } = req.params;

  try {
    const response = await Task.findById(id)

    if (response == null){
      res.json({})
      return
    }
    res.json(response)
  } catch (error) {
    res.status(500).json({msg: "unable to process request"});
  }

};

exports.delete = async function (req, res) {
  const { id } = req.params;

  try {
    await Task.findByIdAndDelete({ _id: id })
    res.json({ msg: "deleted" })
  } catch (error) {
    res.status(500).json({msg: "unable to process request"});
  }
};
