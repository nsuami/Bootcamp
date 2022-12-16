you can use 'const' anytime that only one declaration is
committed for that variable, even in cases where the variable
will be updated automatically in a loop based on the index or 
condition that you are looping over. It seems as long as there is 
only one declaration statement, 'const' works and is the correct
choice for that variable.

'let' can be used to initialize a variable that is expected to have more than one value declaration statement.

'var' does the same as 'let' except you can use the 'var' keyword to change the value of an already initialized variable. 'var' is outmoded and should not be used unless you are working in an old code base that uses it. 'let' is the correct alternative to 'var'.