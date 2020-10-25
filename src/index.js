const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
    let resultArr = [];
    let result;
    let letterArr = [];
    for (let i = 0; i < expr.length; i += 10) {
        let letter = expr.slice(i, i+10);
        letterArr.push(letter);
    }
    let decodedArr = letterArr.map(el => el
      .replace(/00/g, '')
      .replace(/10/g, '.')
      .replace(/11/g, '-'));

    decodedArr.map(el => {
        if (el === '**********') {
            resultArr.push(' ');
        } else {
            resultArr.push(MORSE_TABLE[el]);
        }
    });
    return result = resultArr.join('');
}

module.exports = {
    decode
}
