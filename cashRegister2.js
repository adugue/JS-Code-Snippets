function checkCashRegister(price, cash, cid) {
  let ref = {"PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100};
  let ref2 = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
  let cidLength = cid.length, totalCashInDrawer = 0;
  for (let i = 0; i < cidLength; i++) totalCashInDrawer += cid[i][1];
  totalCashInDrawer = totalCashInDrawer.toFixed(2);

  let change = cash - price;
  let instructions = {status: "INSUFFICIENT_FUNDS", change: []};
  if (totalCashInDrawer < change) return instructions;

  // Calculate change to give back
  let count = Array(cidLength).fill(0);
  let rest = change;
  let fit, currentUnit, currentCash, totalCurr;

  for (let i = 0; i < cidLength; i++) {
    currentUnit = ref[cid[cidLength - 1 - i][0]]; // current cash unit in cash register
    currentCash = cid[cidLength - 1 - i][1]; // current amount of currency unit in cash register
    if (currentCash < currentUnit) continue;
    fit = Math.floor(rest / currentUnit); // how many times a currency unit fits in rest
    totalCurr = fit * currentUnit; // amount to take out from cash register;
    if (fit > 0) {
      while (currentCash > 0 && rest > 0 && !(rest - currentUnit < 0)) {
        rest = (rest - currentUnit).toFixed(2);
        currentCash = (currentCash - currentUnit).toFixed(2);
        count[cidLength - 1 - i]++;
      }
    }
  }

  if (rest > 0) {
    return instructions;
  } else if (rest == 0 && totalCashInDrawer == change) {
    instructions.status = "CLOSED";
  } else if (rest == 0) {
    instructions.status = "OPEN";
  }

  // Calculate output change array
  if (instructions.status == "OPEN") {
    for (let i = 0; i < count.length; i++) {
      if (count[i] > 0) {
        instructions.change.unshift([ref2[i][0], ref2[i][1] * count[i]]);
      }
    }
  } else if (instructions.status == "CLOSED") {
    for (let i = 0; i < count.length; i++) {
      instructions.change.push([ref2[i][0], ref2[i][1] * count[i]]);
    }
  }
  return instructions;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);