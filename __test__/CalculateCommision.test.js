const calculateCommissionFunction = require("../CalculateCommission.js");
 
describe("Calculate Commission", () => {
    test("Calculate commission for 35 locks, 40 stocks, and 45 barrels", () => {
        expect(calculateCommissionFunction(35, 40, 45)).toEqual([3900, 771]);
    });
    test("Calculate commission for 70 locks, 80 stocks, and 90 barrels", () => {
        expect(calculateCommissionFunction(70, 80, 90)).toEqual([7800, 1551]);
    });

    test("Calculate commission for 71 locks, 80 stocks, and 90 barrels", () => {
        expect(calculateCommissionFunction(71, 81, 91)).toEqual("Sales quantities exceed maximum limits.");
    });
});
