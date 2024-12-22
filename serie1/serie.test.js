const {isPalindrome,secondLargest}=require('./ex2.js');
test('check if radar is palaindrome or not', () => {
    expect(isPalindrome("radar")).toBe(true);
  });
test('check if javascript is  palaindrome or not', () => {
    expect(isPalindrome("javascript")).toBe(false);
  });
test('check secondlargest', () => {
    expect(secondLargest([19,2,21,3])).toBe(19);
  });
test('check secondlargest', () => {
    expect(secondLargest([19])).toBe(-1);
  });