function MathChallenge(num) {
  let remainder = num;
  let coins = [11, 9, 7, 5, 1];
  let coinsCount = 0;

  while (remainder > 0) {
    coins.forEach((coin) => {
      if (remainder - coin >= 0) {
        coinsCount += 1;
        remainder = remainder - coin;
      }
    });
  }

  return coinsCount;
}

// keep this function call here
console.log(MathChallenge(readline()));
