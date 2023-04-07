

type Includes<T extends Array<any>, E> = // 你的实现代码

    type I0 = Includes<[], 1> // false
type I1 = Includes<[2, 2, 3, 1], 2> // true
type I2 = Includes<[2, 3, 3, 1], 1> // true


// type UnionToIntersection<U> = U extends [...infer O]?;// 你的实现代码
//
// // 测试用例
//     type U0 = UnionToIntersection<string | number> // never
//     type U1 = UnionToIntersection<{ name: string } | { age: number }> // { name: string; } & { age: number; }
// let S0:I0 = false
// let I1:I1 = true
// let I2:I2 = true
// for (let i = 0; i < ; i++) {
//
// }
