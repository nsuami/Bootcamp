 - you can access string characters the same way you can access array indeces with bracket notation []
 - there are more efficient ways to access string indeces and manipulate strings than brackets though
 - the .substr() method
   - receives a maximum of two arguments. the first argument is the index that you want to begin your substring
   - the second number is the number of characters that you want to be included in your substring. this number includes the character that belongs to the index specified in the first argument. 
   - sentence.substr(0,1) accesses the first character of a string and only the first character
   - sentence.substr(1) accesses the second character of the string... and the rest from that point onward, too. If you do not pass a second argument into the .substr() method, the method assumes that you wish to create a substring that includes the character of the specified index (index 1 in this case) AND every character after that as well.
 - the .split() method
   - with this method, you can split a string up into an array of multiple strings. 
   - the argument passed into the method will be a string, and it represents the string of characters that you wish for the method to find and split new strings by and store into the array. 
   - the argument you pass into this method will also NOT BE INCLUDED in the array that the method creates. However, a blank index may be left behind in its place.
   - one common use of this method is to store each individual word as it's own piece of data. To do this, the argument " " (a blank space) is passed to the method. The method will find each space in the string and make a new piece of data out of the word before and after it, over and over again. 
   - if...
        sentence = "The Once and Future King"
        and the .split() method is called like this...
        sentence.split(" ")
        the action will create this array
        [ 'The', 'Once', 'and', 'Future', 'King' ]
        to store this array, simply declare a variable before it
        let myWords = [ 'The','Once','and','Future','King' ] // this can be done with the .join() method as well, and any other method too
 - the .join() method
   - this method joins the elements of an array together with whatever is specified in the argument placed between each index element.
   - if you have an array of words, you can pull it all together into a sentence by writing...
        let sentence = array.join(" ")
        you may want to push a period to the end of that sentence in a separate command like...
        sentence += "."
   - if nothing is passed into the argument field of .join(), by default, the method will join the elements together with a comma separating each element
        myWords = [ 'The', 'Once', 'and', 'Future', 'King' ]
        myWords.join() // The,Once,and,Future,King