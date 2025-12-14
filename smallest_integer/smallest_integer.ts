function findSmallestMissingPositive(orderNumbers: number[]): number {
  // Write your code here
  if (orderNumbers.length === 0) return 1;
  if (orderNumbers.length === 1) return orderNumbers[0] === 1 ? 2 : 1;
  if (!orderNumbers.includes(1)) return 1;
  const filtered = orderNumbers.filter(n => n > 0);
  const uniqueFiltered = [...new Set(filtered)];
  uniqueFiltered.sort()
  if (uniqueFiltered.length === 1) return uniqueFiltered[0] === 1 ? 2 : 1;

  console.log(uniqueFiltered);
  let i = 0;
  for (i=0; i < uniqueFiltered.length; i++) {
      if (i === uniqueFiltered.length - 1) {
        if (uniqueFiltered[i + 1] - uniqueFiltered[i] === 1) return uniqueFiltered[i] + 1;
      } else {
        return uniqueFiltered[i]
      }
      if (uniqueFiltered[i+1] - uniqueFiltered[i] === 1) continue;
      else break;
  }
}

console.log(findSmallestMissingPositive([1,2,3,5]));