import { parentPort, workerData } from "worker_threads";
function calculateFactorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = BigInt(1);
  for (let i = 2; i <= n; i++) {
    result *= BigInt(i);
  }
  return result;
}

const result = calculateFactorial(workerData.value);
// console.log(result);

parentPort.postMessage(result);
