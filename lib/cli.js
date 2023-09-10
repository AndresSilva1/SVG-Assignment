const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require("./shapes")

function CLI() {
    inquirer.prompt([
        {
            type: "list",
            name: "shapeType",
            message: "select a shape",
            choices: ["circle", "square", "triangle"]
        },
        {
            type: "list",
            name: "shapeColor",
            message: "select a color",
            choices: ["blue", "red", "yellow", "green"]
        },
        {
            type: "input",
            name: "text",
            message: "What is the text? No more than 3 characters",
        },
        {
            type: "list",
            name: "textColor",
            message: "What color is the text",
            choices: ["blue", "red", "yellow", "green"]
        },
    ]).then((response) => {
        console.log(response);
        let shape;
        switch (response.shapeType) {
            case "circle":
                shape = new Circle()

                break;
            case "square":
                shape = new Square()

                break;
            case "triangle":
                shape = new Triangle()

                break;

            default:
                break;
        }
        shape.setColor(response.shapeColor)
        console.log("this is the same after color is set!~~~ line 51 cli.js ", shape)
        const svg = `
<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

  ${shape.render()}
  <text x="150" y="125" font-size="50" text-anchor="middle" fill="${response.textColor}">${response.text}</text>  
</svg>
        `
    fs.writeFileSync("generatelogo.svg",svg)
    });
}

module.exports = CLI