# calculator
A web-based calculator that uses JavaScript to do its magic.

## Description
This is a web-based calculator created entirely with vanilla JavaScript, CSS, and HTML. The function is fairly basic with your standard operators, but is designed to simulate the keypad layout, behavior, and screen response of a physical calculator. (Some inspiration was also taken from the built-in calculator apps in Windows and Mac OS.)

## Features

- Hitting the = key multiple times after a calculation will repeat the previous calculation with the new screen value.
- Clicking an operator key multiple times after entering a number will accomplish something similar. It will calculate that operation using the display number as both ends of the calculation, and repeat as many times as the operator key is clicked.
- The % key will divide the current number in the display by 100 to create a percentage value to be worked with.
- The +/- key will make the current display value the opposite of what it currently is. If the value is a positive number, it will become negative, and vice versa.
- Numbers generated greater than 9 decimal places will display the value using exponent notation (e+value).
- I used two different Google fonts to lend an aesthetic authenticity to the calculator look.

## Screenshot

![Screen Shot 2022-12-15 at 10 36 44 AM](https://user-images.githubusercontent.com/58447266/207940738-026cfd78-cad0-470a-b607-645a85775c4e.png)

## Setup
To run this project, download all files to a new folder and install it locally using npm:

```
$ cd ../[new folder]
$ npm install
$ npm start
```

## To Do
- Add a memory function that allows for stored values
