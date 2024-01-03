// import { Worker, isMainThread, parentPort } from "worker_threads";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

// let factPromise = (value) =>
//   new Promise((resolve, reject) => {
//     let startTime = Date.now();
//     const worker = new Worker("./fact.js", {
//       workerData: {
//         value,
//       },
//     });
//     worker.once("message", (data) => {
//       let endTime = Date.now();
//       resolve(`${endTime - startTime} ms`);
//       worker.terminate();
//     });
//     worker.once("error", (err) => {
//       reject(err);
//       worker.terminate();
//     });
//   });

// //   main async

// const mainworker = async () => {
//   let startTime = Date.now();
//   console.log("1");
//   console.log(
//     await Promise.all([
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//       factPromise(10000),
//     ])
//   );
//   console.log("2");
//   let endTime = Date.now();
//   console.log(`${endTime - startTime} ms`);
// };

// // main();
// mainworker();

import { Worker, isMainThread, parentPort } from "worker_threads";

// Function to calculate factorial (a time-consuming task)
function calculateFactorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = BigInt(1);
  for (let i = 2; i <= n; i++) {
    result *= BigInt(i);
  }
  return result;
}

// Main thread code
console.log("Main thread started.");

const mainStartTime = Date.now();

// Create a worker thread

let factPromise = (value) => {
  const worker = new Worker("./fact.js", {
    workerData: {
      value,
    },
  });
  worker.on("message", (data) => {
    console.log(data);
  });
};
const value = 1000;
factPromise(value);

// console.log("Main thread posted message to Worker.");
