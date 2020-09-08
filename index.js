function BoardMember(name, homeState, training){
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}

BoardMember.prototype.veto = () => {
  return 'No, I must disagree'
}

BoardMember.prototype.approve = () => {
  return 'You can do that!'
}

BoardMember.prototype.doCharity = () => {
  return 'I like to help people.'
}

BoardMember.prototype.releasePressStatement = () => {
  return 'You will see great things from Scuber.'
}

BoardMember.prototype.sayHi = () => {
  return `Hi, my name is ${this.name}. I am from ${this.homestate}, and I was trained in ${this.training}.`
}

const c = new BoardMember("Mr. Polished", "New York", "law")
