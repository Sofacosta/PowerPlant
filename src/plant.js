
// This function stores our state.

const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}

const stateControl = storeState();

// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    })
  }
}

const storeNewState = (inputState) => {
  let currentState = inputState;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  }
}


// We create four functions using our function factory. We could easily create many more.

const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);
const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);
const giveLight = changeState("light")(1);
const newPlant = storeNewState({soil: 0, water: 0, light: 0, 'type': 'cactus'})


export { feed, blueFood, hydrate, superWater, stateControl, giveLight}