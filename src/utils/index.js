//深拷贝
let copier = {a: {c: 123}}

function cloneDeep(arg, cache = []) {
    if(arg === null || typeof arg ==='object') return arg
    let mark = cache.find(el=>el.origin === arg)
    if(mark)return mark.result
    cache.
}

console.log(cloneDeep(copier))

//防抖  执行完后n秒在执行下一次，否者重置时间
const debounce = function (fn, delay) {
   let timer;
   return ()=>{
       if(timer) clearTimeout(timer)
       setTimeout(()=>{
           fn.call(this);
           timer = null
       },delay)
   }
}
//节流 n秒内运行最后一次,
function throttled(fn, delay) {
    let timer;
    let start = Date.now()
    return () => {
        clearTimeout(timer);
        let current = Date.now()
        if (current - start > delay) {
            fn()
            start = Date.now()
        } else {
            timer = setTimeout(() => {
                fn();
            }, delay)
        }
    }
}
//这个更好
function throttle(func, wait) {
   let timer;
   return ()=>{
       if(!timer){
           timer = setTimeout(()=>{
               func.call(this);
               timer = null
           },wait)
       }

   }
}


/**
 * @description 输出以下代码运行结果，为什么？如果希望每隔 1s 输出一个结果，应该如何改造？注意不可改动 square 方法
 * */
const list = [1, 2, 3]
const square = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num)
        }, 1000)
    })
}


async function test() {
    for (const re of list) {
        const res = await square(re)
        console.log(res)
    }
}

test()

// 要求实现函数体
var foo = function (...args) {
    let target = (...arg) => foo(...[...args, ...arg])
    target.getValue = () => args.reduce((a, b) => a + b)
    return target
}
var f1 = foo(1, 2, 3);
; // 6 输出是参数的和
var f2 = foo(1)(2, 3);
f2.getValue(); // 6
var f3 = foo(1)(2)(3)(4);
f3.getValue(); // 10
console.log(f1.getValue(), f2.getValue(), f3.getValue())

//输出顺序

var date = new Date()

console.log(1, new Date() - date)

setTimeout(() => {
    console.log(2, new Date() - date)
}, 500)

Promise.resolve().then(console.log(3, new Date() - date))

while (new Date() - date < 1000) {
}

console.log(4, new Date() - date)

// 1342
//提供一个异步 add 方法如下，需要实现一个 await sum(...args) 函数
function asyncAdd(a, b, callback) {
    setTimeout(function () {
        callback(null, a + b);
    }, 1000);
}

function sumT(a, b) {
    return new Promise((resolve, reject) => {
        asyncAdd(a, b, (err, res) => {
            if (!err) {
                resolve(res)
            }
            reject(err)
        })
    })
}

// 测试
const test2 = await sumT(1, 2)
console.log(test2, 'OO')


//如何判断url中只包含qq.com

// http://www.qq.com  // 通过
//
//     http://www.qq.com.cn  // 不通过
//
//         http://www.qq.com/a/b  // 通过
//
//             http://www.qq.com?a=1  // 通过
//
//                 http://www.123qq.com?a=1  // 不通过
function testUrl(arg){
    return /.*?\.qq\.com[^\/\.]*$/.test(arg)
}

console.log(testUrl('http://www.123qq.com?a=1'))

class Scheduler {
    constructor(maxNum) {
        //等待执行的任务队列
        this.taskList = []
        //当前任务数
        this.count = 0
        //最大任务数
        this.maxNum = maxNum
    }

    async add(promiseCreator) {
        //当当前任务数超出最大任务数就将其加入等待执行的任务队列
        if (this.count >= this.maxNum) {
            await new Promise(resolve => {
                this.taskList.push(resolve)
            })
        }
        this.count++
        const result = await promiseCreator()
        this.count--
        //当其它任务执行完任务队列中还有任务没执行就将其出队并执行
        if (this.taskList.length > 0) {
            this.taskList.shift()()
        }
        return result;
    }
}
// 模拟请求
function request(url) {
    return new Promise((r) => {
        const time = Math.random() * 1000;
        setTimeout(() => r(url), time);
    });
}

function multiRequest(urls, maxNum){
    const requests = [];
    const scheduler = new Scheduler(maxNum);
    for(let i = 0, len = urls.length; i < len; i++) {
        requests.push(scheduler.add(() => request(urls[i])))
    }
    Promise.all(requests).then((res) => res.forEach((r) => console.log(r)))
}


// 实现一个 normalize 函数，能将输入的特定的字符串转化为特定的结构化数据
let normalize  = (str)=>{
    let arg = str;
    if( typeof str === 'string') arg = str.split(/[\[\]]/g).filter(Boolean)
    let result;
    result = {
        value:arg[0]
    }
    if(arg.slice(1,Infinity).length){
        result.children = normalize(arg.slice(1,2))
    }
    return result
}
//多个数据组的交集
let setData1 = [1, 2, 3, 4],
    setData2 = [2, 3, 4, 9, 19, 91];
function mixedArr(...args){
    if (args.length < 2) {
        return args[0];
    }
    return args.reduce((result, arg) => {
        return result.filter(item => arg.includes(item))
    })
}

//已知如下数组：
//
// var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
//
// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
let arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

function flat1(arr){
    if(!Array.isArray(arr)) return arr
    let result = [];
    Object.keys(arr).forEach(el=>{
        result = result.concat(flat1(arr[el]))
    })
    return [... new Set(result)].sort((a,b)=>a-b)
}

console.log(flat1(arr),'===>1')
