# DOM-demo

This repo contains a number of demos to introduce working with the DOM. This is also called DOM manipulation. It simply means using javascript to find, create, add, remove and change the objects created from your HTML, when they are in the browser.

These examples also revise the use of functions, conditional statements and form elements.

The projects here are 'change-dom', 'todo' and 'pizza-order'. The first two have line-by line commentary in the .js files.

## change-dom
Good place to start, demonstrates:
1. finding by `id` property, adding and removing paragraph elements (and setting hardcoded text content)
2. finding by the `class` name and changing/updating styles

Focus on the `document`'s `.querySelector` and `.querySelectorAll` to find elements

## todo
Continue here. A 'to-do' app is a classic example. This is a very simple implementation. Demonstrates:
1. taking a dynamic input value (instead of hardcoded text, as in the first example) and adding it to the dom

Focus on the `document`'s `.getElementById` method to find elements. Just to show you that it works just the same as `.querySelector('#idName')`. You choose what you use.

## pizza-order
A more 'real world' example, where the user submits their pizza selection choices and can preview them (maybe before paying). Demonstrates:
1. A clean, good-practice way to use the DOM to work with form elements and submission.
