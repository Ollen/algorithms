/**
 * Ransom Note
 * 1. Split the input into arrays.
 * 2. Check if noteArr is > than magArr.
 * 3. Create a number of words lookup table using the magArr.
 * 4. Check the noteArr alongside the lookup table.
 * 
 * @param {String} noteText 
 * @param {String} magazineText 
 */

function ransomNote(noteText, magazineText) {
    let noteArr = noteText.toLowerCase().split(' ');
    let magArr = magazineText.toLowerCase().split(' ');

    if (noteArr.length > magArr.length) {
        return false;
    }

    // Store the number of times the words appear 
    // in the magArr into a hash table.
    let magTable = {};
    magArr.forEach(word => {
        if (!magTable[word]) {
            magTable[word] = 0;
        }
        magTable[word]++;
    });

    // Loop the note array and decrement
    // The value in the lookup table.
    return noteArr.every(word => {
        if (!magTable[word]) {
            return false;
        }
        magTable[word]--;
        return true;
    });

    // NOTE: Array.prototype.forEach() is not used in noteArr checking
    // because there is no way to stop of break a forEach() loop other than throwing an exception.
}

let a = ransomNote('To be or not to be that is the question', 
'puerto rico is a place of great wonder and excitement it has many secrect waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out note that you must wear hiking boots this is one of the best places i have ever visited');
console.log(a);