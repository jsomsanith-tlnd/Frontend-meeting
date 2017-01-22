# Javascript challenge : compute the price

Uber wants you to develop an app to optimise the Uber best option, depending on the distance and the maximum cost.
There are 5 types of Uber : UberX, UberXL, UberPlus, UberBlack, UberSUV

The price by kilometer of each type is

 | Type | Price for 1 km |
 |---|---|
 | UberX | 0.3€ |
 | UberXL | 0.5€ |
 | UberPlus | 0.7€ |
 | UberBlack | 1€ |
 | UberSUV | 1.3€ |
 
Your job is, for a given distance (in km) and maximum price, choose the Uber type that fits the requirements
 * the final price should be lower than or equals to (<=) the maximum price
 * the price should be as high as possible
 
Example : `distance = 30km` and `maximumPrice = 20€`,

 | Type | Total Price |
 |---|---|
 | UberX | 9€ |
 | UberXL | 15€ |
 | UberPlus | 21€ |
 | UberBlack | 30€ |
 | UberSUV | 39€ |
 
 The choice should be `UberXL`
 
## Implementation
Open price.js, the function to implement is `whichUber(distance, maximumPrice)`.

 
## To run your code
 ```
 > node uber.js
 ```