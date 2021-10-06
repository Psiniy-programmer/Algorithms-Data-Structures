import CustomPromise from "./CustomPromise/CustomPromise";
import CPromise from "./CPromise/CPromise";

const norm = new Promise((resolve, reject) => {
    resolve('kek');
})
// norm
// norm.then()

const secTest = new CPromise((resolve: any, reject: any) => {
    resolve();
})

console.log(secTest);

