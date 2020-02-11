import { Tamagotchi } from './../src/logic';

describe ('Goddard', () => {
  jest.useFakeTimers();
  let goddard;

  beforeEach(function() {
    goddard = new Tamagotchi("Goddard");
    goddard.setHunger();
    });

    afterEach(function() {
      jest.clearAllTimers();
    });

    test("Should have a name and food level of 10 when created.", () => {
      expect(goddard.name).toEqual("Goddard");
      expect(goddard.foodLevel).toEqual(10);
    });

    test("Should have a food level of 7 after 3001 milliseconds", () => {
      jest.advanceTimersByTime(3001);
      expect(goddard.foodLevel).toEqual(7);
    })
});