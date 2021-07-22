import { feed, blueFood, hydrate, giveLight, superWater, storeState, changeState, stateControl } from './../src/plant.js';

describe('changeState', () => {
  let reusablePlant;

  beforeEach(() => {
    reusablePlant = { soil: 0, water: 0, light: 0 };
  });
  
  test('feed should update current state to increment the soil property by 1.', () => {
    expect(feed(reusablePlant)).toEqual({soil: 1, water: 0, light: 0});
  });

  test('blueFood should update current state to increment the soil proberty by 5.', () => {
    expect(blueFood(reusablePlant)).toEqual({soil: 5, water: 0, light: 0}); 
  });

  test('hydrate should increment the water property by 1.', () => {
    expect(hydrate(reusablePlant)).toEqual({soil: 0, water: 1, light: 0});
  });

  test('superWater should increment the property value of the current state by 5.', () => {
    expect(superWater(reusablePlant)).toEqual(({soil: 0, water: 5, light: 0}));
  });
  test('giveLight should increnet the light property value by 1.', () => {
    expect(giveLight(reusablePlant)).toEqual(({soil: 0, water: 0, light: 1}));
  });
});  

  