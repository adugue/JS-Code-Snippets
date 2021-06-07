function checkCashRegister(price, cash, cid) {
  let ref = {"PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100};
  let ref2 = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
  
  let totalCashInDrawer = 0;
  for (let i = 0; i < cid.length; i++) totalCashInDrawer += cid[i][1];
  totalCashInDrawer = totalCashInDrawer.toFixed(2);
  console.log("totalCashInDrawer = " + totalCashInDrawer);

  let change = cash - price;
  let instructions = {status: "INSUFFICIENT_FUNDS", change: []};
  console.log("change to give back (total): " + change + "\n");

  if (totalCashInDrawer < change) return instructions;

  // Calculate change to give back
  console.log("-------Calculate change to give back-------");
  let count = Array(cid.length).fill(0);
  let rest = change;
  let fit, currentUnit, currentCash, totalCurr, current, multiplier;

  for (let i = 0; i < cid.length; i++) {
    currentUnit = ref[cid[cid.length - 1 - i][0]]; // current cash unit in cash register (["ONE HUNDRED", 100], ...)
    currentCash = cid[cid.length - 1 - i][1]; // current amount of currency unit in cash register
    
    if (currentCash < currentUnit) {
      console.log("currency ($" + currentUnit + ") skipped");
      continue;
    } else if (currentCash == currentUnit) {
      current = currentCash;
      multiplier = 1;
    } else {
      current = currentCash;
      multiplier = Math.round(currentCash / currentUnit);
    }
    console.log("currentUnit: " + currentUnit + "   \tcurrentCash: " + currentCash + "   \tmultiplier: " + multiplier);
    
    fit = Math.floor(rest / currentUnit); // how many times a currency unit fits in rest
    totalCurr = fit * currentUnit; // amount to take out from cash register;
    
    if (fit > 0) {
      while (currentCash > 0 && rest > 0 && !(rest - currentUnit < 0)) {
        rest -= currentUnit;
        rest = rest.toFixed(2);
        currentCash -= currentUnit;
        currentCash = currentCash.toFixed(2);
        count[cid.length - 1 - i]++;
        console.log(rest)
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
  console.log("count: " + count);

  // Calculate "instructions.change" array
  let temp = [];
  let temp2;

  if (instructions.status == "OPEN") {
    for (let i = 0; i < count.length; i++) {
      if (count[i] > 0) {
        temp2 = ref2[i][1] * count[i];
        // temp2 = temp2.toFixed(2)
        temp = [ref2[i][0], temp2];
        instructions.change.unshift(temp);
        console.log(temp);
      }
    }
  }

  if (instructions.status == "CLOSED") {
    for (let i = 0; i < count.length; i++) {
      temp2 = ref2[i][1] * count[i];
      // temp2 = temp2.toFixed(2)
      temp = [ref2[i][0], temp2];
      instructions.change.push(temp);
      console.log(temp);
    }
  }

  return instructions;
}

// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 0.30], ["QUARTER", 0], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));