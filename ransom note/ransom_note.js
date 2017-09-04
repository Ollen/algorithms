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

    return true;
}

let a = ransomNote('To be or', 'To be or not to be that is the question');
console.log(a);