// Alternate each case of each of string given 

// alternateCase("abc")            => "ABC"
// alternateCase("ABC")            => "abc"
// alternateCase("Hello World")    => "hELLO wORLD"

let alternated ="";

const solusi = (kata) => {
    for (let i = 0; i <= kata.length -1; i++) {
        if (kata.charAt(i) === kata.charAt(i).toUpperCase()) {
            alternated += kata.charAt(i).toLowerCase();
        }else{
            alternated += kata.charAt(i).toUpperCase()
        }
    }
    console.log(alternated);
    alternated="";
}

solusi("abc");
solusi("ABC");
solusi("Hello World");