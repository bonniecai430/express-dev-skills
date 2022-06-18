const skills = [
    {id: 125223, skill: 'Play guitar',skilled: true},
    {id: 127904, skill: 'Dancing', skilled: false},
    {id: 139608, skill: 'Singing', skilled: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  
  function getAll() {
    return skills;
  }

function getOne(id){
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}
function create(skill){
  // Add the id
  skill.id = Date.now() % 1000000;
  // New todos wouldn't be done :)
  skill.skilled = false;
  skills.push(skill);
    }
  
   function deleteOne(id){
  id= parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
   } 