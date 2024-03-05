import calculateCommissionFunction from "./CalculateComission";
 
describe("Calculate Commission", () => {
    test("Calculate commission for 70 locks, 80 stocks, and 90 barrels", () => {
        expect(calculateCommissionFunction(35, 40, 45)).toEqual([3675, 735]);
    });
    test("Calculate commission for 70 locks, 80 stocks, and 90 barrels", () => {
        expect(calculateCommissionFunction(70, 80, 90)).toEqual([7350, 1470]);
    });

    test("Calculate commission for 71 locks, 80 stocks, and 90 barrels", () => {
        expect(calculateCommissionFunction(71, 81, 91)).toEqual("Sales quantities exceed maximum limits.");
    });
});
