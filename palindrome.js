//palindrome//
const str = 'repaper';

const strsplit = str.split('');

const reversedstr = strsplit.reverse('');

const joinreversed = reversedstr.join('');

if (str === joinreversed){    // using if-else statement//
    console.log(`given string ${str} is palindrome`);
}else{
    console.log(`given string ${str}is not palindrome`);
}