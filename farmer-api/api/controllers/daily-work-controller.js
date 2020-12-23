var mongoose = require('mongoose'),
  Task = mongoose.model('DailyWork');

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};




exports.create_a_task = function(req, res) {
    console.log("11111", req.body)
     req.body.created_date = new Date(req.body.date).toISOString();
     console.log("22222", req.body)
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

exports.read_date_wise_task = function(req,res) {
  console.log(req.body);
  let fromdate = new Date(req.body.from).toISOString();
  let todate = new Date(req.body.to).toISOString();
  Task.find({
    created_date: {
        $gte: fromdate,
        $lt: todate
    }
  }, function(err, task) {
    if (err)
      res.send(err);
    console.log(task.length);  
    res.json(task);
  });  
}