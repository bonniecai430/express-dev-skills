const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new:newTodo,
    create,
    delete:deleteSkill
  };
 
 
 // controllers/todos.js

 function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  };

  function show(req,res){
      console.log(req.params)
res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
  });
  }

  function newTodo(req,res){
    res.render('skills/new')
    }

  function create(req,res){
    console.log(req.body);
    
    Skill.create(req.body);
  
    res.redirect('/skills');
  }
  
  function deleteSkill(req,res){
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }