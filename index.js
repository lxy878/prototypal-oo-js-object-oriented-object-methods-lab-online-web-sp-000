function BoardMember(name, homeState, training){
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}

BoardMember.prototype.veto = () => {
  return 'No, I must disagree'
}
