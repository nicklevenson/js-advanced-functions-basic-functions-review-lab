// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(flare = `*`) {
  return function(param = 'default') {
    return `You are ${flare + param + flare}!`
  }
}

const Calculator = {
  add: function(a, b) {
    return a + b
  },
  subtract: function(a, b) {
    return a - b
  },
  multiply: function(a, b) {
    return a * b
  },
  divide: function(a, b) {
    return a / b
  }
}

function actionApplyer(start, functions) {
  if (functions == false) {
    return start
  } else {
    return functions[start]
  }
}