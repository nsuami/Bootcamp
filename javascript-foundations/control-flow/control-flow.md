 - ternary operator
   - syntax for if else statements:
     if (condition) {
       do this if true;
     } else { if false do this }
   - syntax for ternary operator:
     condition ? do this if truthy : do this if falsy;
 - switch statements
   - instead of writing a big long tree of if/else statements when you are writing code to determine steps based on the status of ONE condition, you can use a switch statement.
   - example:

     if (light === 'green') {
         console.log('Go!');
     } else if (light === 'yellow') {
         console.log('Slow down!');
     } else if (light === 'red') {
         console.log('Stop!');
     }

     can be written as...

     switch (light) {
         case 'green': 
            console.log('Go!');
            break;
         case 'yellow':
            console.log('Slow down!');
            break;
         case 'red':
            console.log('Stop!');
            break;
     }
   - the switch statement doesn't necessarily save lines, but it is cleaner, easier to read, and probably easier to write too.

