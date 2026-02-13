


// utils/testBase.js
import { test as base } from "@playwright/test";

export const customTestBase = base.extend({
  testDataForOrder: {
    productName: "ZARA COAT 3",
    email: "gudelajitendra987@gmail.com",
    password: "Manny@037"
  }
});
