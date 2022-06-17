const skills = [
    {id: 125223, skill: 'Play guitar',skilled: true},
    {id: 127904, skill: 'Dancing', skilled: false},
    {id: 139608, skill: 'Singing', skilled: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

function getOne(id){
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}