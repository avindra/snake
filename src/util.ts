/**
 * Helper to arbitrarily sleep in async fashion
 * 
 * @param ms Milliseconds to sleep for
 */
export const sleep = (ms: number) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(true);
    }, ms);
});