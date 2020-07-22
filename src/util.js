
// /**
//  * 节流函数
//  *
//  * @param {Function} fn 要节流的函数
//  * @param {number} delay 节流延迟，即有事件触发时，每隔多长时间执行一次函数
//  */
// function throttle(fn, delay = 300) {
//   let runnable = true;
//   return args => {
//     if (!runnable) { return; }
//     runnable = false;
//     setTimeout(() => runnable = true, delay);
//     return fn(args);
//   };
// }

// /**
//  * 防抖函数
//  *
//  * @param {Function} fn 要防抖的函数
//  * @param {number} interval 防抖间隔，即多久没有抖动后才执行函数
//  */
// function debounce(fn, interval = 300) {
//   let timer;
//   return args => {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn(args), interval);
//   };
// }
