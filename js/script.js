var card = null;

function validate() {
  var cardString = card.toString();
  var cardDigits = [];
  var oddPosition = false;
  var sum = 0;
  for (i = 0; i < cardString.length; i++) {
    digit = parseInt(cardString.charAt(i));
    cardDigits.push(digit);
  }
  for (i = cardDigits.length - 1; i >= 0; i--) {
    digit = cardDigits[i];
    if (oddPosition) {
      digit = digit * 2;
    }
    if (digit > 9) {
      digit = digit - 9;
    }
    sum = sum + digit;
    oddPosition = !oddPosition;
  }
  if (sum % 10 == 0) {
    console.log('validation successful');
  } else {
    console.log('validation failed');
  }
}
