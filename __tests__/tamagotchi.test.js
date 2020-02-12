import { Tamagotchi } from './../src/logic';
import { SingleEntryPlugin } from 'webpack';

describe ('Goddard', () => {
  jest.useFakeTimers();
  let goddard;

  beforeEach(function() {
    goddard = new Tamagotchi("Goddard");
    goddard.getHungry();
    });

    afterEach(function() {
      jest.clearAllTimers();
    });

    test("Returns a name when created.", () => {
      expect(goddard.name).toEqual("Goddard");
    });

    test("Returns a health level of 100 when created.", () => {
      expect(goddard.health).toEqual(100);
    });

    test("Returns food level of 10 when created.", () => {
      expect(goddard.foodLevel).toEqual(10);
    });

    test("Returns health at 70 by getting hungry.", () => {
      jest.advanceTimersByTime(10001);
      expect(goddard.health).toEqual(70);
    });

    test("Returns foodLevel at 0 by getting hungry", () => {
      jest.advanceTimersByTime(10001);
      expect(goddard.foodLevel).toEqual(0);
    });

    test("Should return health to 80 by sleeping", () => {
      jest.advanceTimersByTime(10001);
      goddard.sleep();
      expect(goddard.health).toEqual(80);
    });

    test("Should return foodLevel to 2 by feeding", () => {
      jest.advanceTimersByTime(9001);
      goddard.feed();
      expect(goddard.foodLevel).toEqual(3);
    });

    test("Should return health to 75 by walking.", () => {
      jest.advanceTimersByTime(10001);
      goddard.walk();
      expect(goddard.health).toEqual(75);
    })
});