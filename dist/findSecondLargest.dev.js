"use strict";

function getSecondLargest(input1) {
  var firstLargest = -Infinity;
  var secondLargest = -Infinity;
  input1.forEach(function (inp) {
    if (inp > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = inp;
    } else if (inp > secondLargest && inp !== firstLargest) {
      secondLargest = inp;
    }
  });
  return secondLargest;
}