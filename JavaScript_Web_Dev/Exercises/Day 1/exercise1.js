/*
Write a JavaScript function to extract unique characters from a string. 


Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"

(Hint: Refer the String Operations tables in  the Quick Reference section.)
*/

let text = "thequickbrownfoxjumpsoverthelazydog";

function cutString() {
    let part1 = text.slice(0,14)
    let part2 = text.slice(15,17)
    let part3 = text.slice(18,21)
    let part4 = text.slice(28,33)
    let part5 = text.slice(34,35)

    console.log(part1 + part2 + part3 + part4 + part5)
}

cutString();