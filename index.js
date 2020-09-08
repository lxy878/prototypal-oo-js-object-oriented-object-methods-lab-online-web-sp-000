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
  return `Hi, my name is ${name}. I am from ${homestate}, and I was trained in ${training}.`
}

const c = new BoardMember("Mr. Polished", "New York", "law");
console.log(c.sayHi())
