// import {isEqual, keys} from "lodash-es";
// import example from "/@/store/example";
//
// type Includes<T extends Array<any>, E> = T extends [infer o,...infer u]?E extends o?true:Includes<u, E>:false
//     //T extends [infer o,...infer C]?o extends E ?true:C extends number[]?Includes<C,E>:false:false;// 你的实现代码
//     type I1110 = Includes<[], 222> // false
// type I121 = Includes<[2, 2, 3, 1], 2> // true
// type I222 = Includes<[2, 3, 3, 1], 1> // true
// let S0:I1110 = false
// let I1:I121 = true
// let I2:I222 = true
//
// interface Person1 {
//     name: string;
//     age: number;
// }
// interface Guang {
//     name: string;
//     age: number;
//     hobbies: string[];
// }
//
// let printHobbies: (guang: Guang) => void;
// printHobbies = (guang) => {console.log(guang.hobbies);}
//     let printName:(person: Person1) => void;
//     printName = (person) => {console.log(person.name)}
//         printHobbies = printName
//         printName= printHobbies;
//
// type UnionToIntersection1<U> =(U extends U ? (x:U)=>void:never) extends (x:infer R)=>void?R:never;
//     //逆变
//     // (U extends U ? (x:U)=>void:never) extends (x:infer R)=>void?R:never;
// // 测试用例
//     type U0 = UnionToIntersection1<string | number> // never
//     type U1 = UnionToIntersection1<{ name: string } | { age: number }> // { name: string; } & { age: number; }
// let oposa :U1 = 1 as never;
//
// type Person2 = {
//     id: string;
//     name: string;
//     age: number;
//     from?: string;
//     speak?: string;
// };
//
// type OptionalKeys<T> = Exclude<{
//     [k in keyof T]:undefined extends T[k]?k:never
// }[keyof T], undefined>;
// // 你的实现代码
//     type PersonOptionalKeys = OptionalKeys<Person2> // "from" | "speak"
//
//
// type Curry<
//     F extends (...args: any[]) => any,
//     P extends any[] = Parameters<F>,
//     R = ReturnType<F>
//     > = P extends [infer c,...infer b]?b extends any[]?(arg:c)=>Curry<(...args:b) => R>:F:R;// 你的实现代码
//
//     type F10333 = Curry<() => Date>; // () => Date
// type F30333 = Curry<(a: number) => Date>; // (arg: number) => Date
// type F20333 = Curry<(a: number, b: string,c: string) => Date>; //  (arg_0: number) => (b: string) => Date
//
// type Foo = {
//     a: number;
//     b: string;
// };
//
// type Bar = {
//     b: number;
// };
//
// type Merge<FirstType, SecondType> =
//     // {
//     //     [k in keyof (FirstType & SecondType)]: k extends keyof SecondType?SecondType[k]:k extends keyof FirstType?FirstType[k]:never;
//     // }
// Omit<FirstType, keyof SecondType> ;
// const ab: Merge<Foo, Bar> = { a: 1};
//
// type Responder = {
//     text?: () => string;
//     json?: () => string;
//     secure?: boolean;
// };
//
// type RequireAtLeastOne<
//     ObjectType,
//     KeysType extends keyof ObjectType = keyof ObjectType,
//     > =  KeysType extends KeysType
//     ? Omit<ObjectType, KeysType> & Required<Pick<ObjectType, KeysType>>
//     : never// 你的实现代码
//
// // 表示当前类型至少包含 'text' 或 'json' 键
// const responder: RequireAtLeastOne<Responder, 'text' | 'json'> = {
//     text: () => '{"message": "ok"}',
//     json: () => '{"message": "ok"}',
//     secure: true
// };
// interface nnn {
//     [key: string]: any;
//     [key: number]: any;
//     bar(): void;
// }
// type RemoveIndexSignature<T> = {
//     [k in keyof T as string extends k?never:number extends k?never:k]:T[k]
// };
//
// // 测试用例
// type FooWithOnlyBar = RemoveIndexSignature<nnn>; //{ bar: () => void; }
//
// let cc :FooWithOnlyBar ={ 'bar': () => {
//
//     } }
//
// type PPP = {
//     readonly a: number;
//     readonly b: string;
//     readonly c: boolean;
// };
//
// type Mutable<T, Keys extends keyof T = keyof T> = Omit<T, Keys> & {
//    -readonly[c in Keys]:T[c]
// };// 你的实现代码
//
// const mutableFoo: Mutable<PPP, 'a'> = { a: 1, b: '2', c: true };
//
// mutableFoo.a = 3; // OK
// mutableFoo.b = '6'; // Cannot assign to 'b' because it is a read-only property.
//
// //_________________________________________
//
//
// type IsUnion<T, U = T> =
//     // ([string | never]) extends [never] ? false :true |
//     // ([string | never]) extends [string] ? false : true
// T extends any ? ([U] extends [T] ? false : true) : never
//
//
// const ve = {
//     to:12,
//     oo:22
// }
//
// //_________________________________________
// type IsNever<T,u=T> =  [string | unknown]
// type I0 = IsNever<never> // true
// type I1 = IsNever<never | string> // false
// type I2 = IsNever<null> // false
// let oo:I0=true;
//
// //_________________________________________
// type Reverse<T extends any[]> = T extends [infer R1, ...infer R2] ? [...Reverse<R2>, R1] : []
//
//     type R0 = Reverse<[]> // []
//     type R1 = Reverse<[1, 2, 3]> // [3, 2, 1]
//  let c:R1 =[3, 2, 1]
//
// //_________________________________________
// type Item = 'semlinker,lolo,kakuqo';
//
// type Split<
//     S extends string,
//     Delimiter extends string,
//     R extends Array<any> =[]
//     > = S extends `${infer A}${Delimiter}${infer B}`?Split<B, Delimiter,[...R,A]>:[...R,S,];// 你的实现代码
//
//     type ElementType = Split<Item, ','>; // ["semlinker", "lolo", "kakuqo"]
// let y :ElementType = ["semlinker", "lolo", "kakuqo"]
// //_________________________________________
//
// type point<S extends string, R extends Array<any> =[]> =
//     S extends `${infer A}.${infer B}`?point<B, [...R,...ps<A>]>:[...R,...ps<S>]; // 你的实现代码
//
// type ps<S extends string, R extends Array<any> =[]> =
//     S extends `${infer A}[${infer B}]${infer c}`?
//         S extends `[${infer D}]${infer E}`?
//            ps<E, [...R,D]>:ps<c, [...R,...[A,B]]>:[...R];
// // ToPath<'foo[0].bar.baz'> //=> ['foo', '0', 'bar', 'baz']
// let ooo :point<'foo[0]'> = ['foo', '0']
// // type  ToPath<S extends Array<any>, R extends Array<any> =[]> =
// //     S extends [infer A,...infer B]?B extends any[]?res<S>:ps<A extends string?string :''>:never;
// let ppp :point<"foo[0][2][3][4].bar[5][6][9[9[99]]].baz[12][13]"> = ['foo','0','2','3','4','bar','5','6','9[9[99','baz','12','13']
//
//
// //_________________________________________
//
// declare const config: Chainable
//
// // {
// //     option<K extends string, V extends any>(key: K, value: V): Chainable<T & { [key in [K] as `${K}`]: V }>
// // get(): { [K in keyof T]: T[K] }    //  这里也可以直接返回 T, 不过这样并不直观, 所以手动遍历一下
// // }
// type Chainable<T = {}> = {
//     option<k extends string,V extends any>(I:k,p:V):Chainable<T & {[p in  k]:V}>
//     get():{[c in keyof T]:T[c]}
// }
// const result = config
//     .option('age', 7)
//     .option('name', 'lolo')
//     .option('address', { value: 'XiaMen' })
//     .get()
//
// type ResultType = typeof result
// // 期望 ResultType 的类型是：
// // {
// //   age: number
// //   name: string
// //   address: {
// //     value: string
// //   }
// // }
//
// //_________________________________________
// type Repeat<T, C extends number,R extends any[] = []> = R['length'] extends C?R:Repeat<T, C,[...R,T]>// 你的实现代码
//
//     type R01 = Repeat<0, 0>; // []
// type R12 = Repeat<1, 1>; // [1]
// type R2 = Repeat<number, 2>; // [number, number]
// //_________________________________________
// type RepeatString<
//     T extends string,
//     C extends number,
//     P extends string = '',
//     k extends any[] = []
//     > =  k['length'] extends C? P :RepeatString<T, C,`${P}${T}`,[...k,1]>// 你的实现代码
//
//     type S0 = RepeatString<"a", 0>; // ''
// type S1 = RepeatString<"a", 2>; // 'aa'
// type S2 = RepeatString<"ab", 3>; // 'ababab'
//
// //_________________________________________
//
// type ToNumber<T extends string,I extends any[]  = []> = `${I['length']}` extends T?I['length']: ToNumber<T, [...I,1]>
//
//     type T0 = ToNumber<"0">; // 0
// type T1 = ToNumber<"10">; // 10
// type T2 = ToNumber<"20">; // 20
//
//
// //_________________________________________
// type SmallerThan<N extends number,
//     M extends number,
//     > = keyof Repeat<1, N> ;// 你的实现代码
//
//     type S0111 = SmallerThan<0, 1>; // true
// type S122 = SmallerThan<2, 0>; // false
// type S233 = SmallerThan<8, 10>; // true
//
//
//
// //_________________________________________
//
// type Add<T extends number, R extends number> = [...Repeat<1, T>,...Repeat<1, R>]['length'];// 你的实现代码
//
//     type A0 = Add<5, 5>; // 10
// type A1 = Add<8, 20> // 28
// type A2 = Add<10, 30>; // 40
//
// let pppaaaa:A1 = 28;
//
//
// //_________________________________________
// type Filter<T extends any[], F , R extends any[] = []> =
//     T extends [infer i,...infer U]?U extends any[]?i extends F?Filter<U, F, [...R,i]>:Filter<U, F, [...R]>:R:R
// ;
//     type F0 = Filter<[6, "lolo", 7, "semlinker", false], number>; // [6, 7]
// type F1 = Filter<["kakuqo", 2, ["ts"], "lolo"], string>; // ["kakuqo", "lolo"]
// type F2 = Filter<[0, true, any, "abao"], string>; // [any, "abao"]
// let aaa: F2 = [1, "abao"]
//
// //_________________________________________
// type Flat<T extends any[],R extends any[] = []> =
//     T extends [infer i,...infer U]?
//             i extends any[]?
//             Flat<U,Flat<i, R>>:Flat<U,[...R,i]>:R;
//
//     type F101 = Flat<[]> // []
//     type F112 = Flat<['a', 'b', 'c']> // ["a", "b", "c"]
//     type F123 = Flat<['a', ['b', 'c'], ['d', ['e', ['f']]]]> // ["a", "b", "c", "d", "e", "f"]
// let aaa2: F123 =  ["a", "b", "c", "d", "e", "f"]
//
// //_________________________________________
//
// type StartsWith<T extends string, U extends string> = T extends `${U}${infer c}`?true:false// 你的实现代码
// type EndsWith<T extends string, U extends string> = T extends `${infer c}${U}`?true:false// 你的实现代码
//
// //     type S000 = StartsWith<'123', '12'> // true
// // type S0001 = StartsWith<'123', '13'> // false
// // type S00012 = StartsWith<'123', '1234'> // false
// type E0 = EndsWith<'123', '23'> // true
// type E1 = EndsWith<'123', '13'> // false
// type E2 = EndsWith<'123', '123'> // true
// let baa:E0 = true
// //_________________________________________
//
//
// type NotEmptyObject<T> = T extends {}?{} extends T?false:true:true;
// type Flasy = 0 | "" | false | [] | null  | 0n ;
// type AnyOf<T extends any[]> = T extends [infer U,...infer reset]?
//     U extends Flasy?
//         AnyOf<reset>:
//         NotEmptyObject<U>
//     : false
//
// type A01 = AnyOf<[]>; // false
// type A11 = AnyOf<[0, "", false, [], {}]>; // false
// type A21= AnyOf<[1, "", false, [], {}]>; // true
// let baaa:A21 = true
//
//
// //________________________________
// type Replace<
//     S extends string,
//     From extends string,
//     To extends string
//     > = S extends `${infer c}${From}${infer i}`?`${ c}${To}${ i}`:S
//
//     type Rs = Replace<'', '', ''> // ''
// type Rs1 = Replace<'foobar', 'bar', 'foo'> // "foofoo"
// type Rs2 = Replace<'foobarbar', 'bar', 'foo'> // "foofoobar"
// // let bcaa:Rs2 = "foofoobar"
//
//
// type ReplaceAll<
//     S extends string,
//     From extends string,
//     To extends string,
//     res extends string = '',
//     end extends string = ''
//     > =
//     S extends `${infer H}${From}${infer T}`
//         ? `${H}${To}${ReplaceAll<T, From, To>}`
//         : S;
//     // S extends `${infer c}${From}${infer i}`?ReplaceAll<i, From, To,`${res}${c}${To}`,`${i}`>:`${res}${end}`
// let bcaa:ReplaceAll<"foobarfoobar", "ob", "b"> = "fobarfobar"
// //________________________________
// type IndexOf<A extends any[], Item> =
//     A extends [...infer u, infer i] ?
//         i extends Item ?
//             Exclude<keyof A, keyof u> extends string ?
//                 ToNumber<Exclude<keyof A, keyof u>> : -1 :
//             IndexOf<u, Item>
//         : -1
//     // Item extends A[number] ?true:false;// 你的实现代码
//
//     type Arr = [1, 2, 3, 4, 5]
// type IQ0 = IndexOf<Arr, 0> // -1
// type IQ1 = IndexOf<Arr, 5> // 0
// type IQ2 = IndexOf<Arr, 3> // 2
//
// let bcaaad:IQ2 =2
//
// //________________________________
// type Permutation<T, k=T> = [T] extends [never]?[]:k extends k?[k,...Permutation<Exclude<T, k>>]:never
//
//     type P0 = Permutation<'a' | 'b'>  // ["a", "b"] | ["b", "a"]
//     // type P1 = ["a", "b", "c"] | ["a", "c", "b"] | ["b", "a", "c"]
//     // | ["b", "c", "a"] | ["c", "a", "b"] | ["c", "b", "a"]
//     type P1 = Permutation<'a' | 'b' | 'c'>
// type TTT<T, K=T> = T extends [never] ? true : false // true
// let asd:P0 =["a", "b"]
//
// //_---------------------------
// type Unpacked<T> = T extends (infer u)[]?u:
//     T extends  ()=>infer c?c:
//         T extends Promise<infer d>?d:T
//     ;// 你的实现代码
//
//     type T00 = Unpacked<string>;  // string
// type T01 = Unpacked<string[]>;  // string
// type T02 = Unpacked<() => string>;  // string
// type T03 = Unpacked<Promise<string>>;  // string
// type T04 = Unpacked<Unpacked<Promise<string>[]>>;  // string
// type T05 = Unpacked<any>;  // any
// type T06 = Unpacked<never>;  // never
// let oi:T06 = '' as never
// //_---------------------------
// type Jsonified<T extends object> = {
//     [k in keyof T]: T[k] extends { toJSON(): infer Return }
//         ? ReturnType<T[k]['toJSON']>
// :T[k] extends object?
//         Jsonified<T[k]>:T[k]
// };// 你的实现代码
//
//     type MyObject = {
//     str: "literalstring",
//     fn: () => void,
//     date: Date,
//     customClass: MyClass,
//     obj: {
//         prop: "property",
//         clz: MyClass,
//         nested: { attr: Date }
//     },
// }
//
// declare class MyClass {
//     toJSON(): "MyClass";
// }
//
// /**
//  * type JsonifiedMyObject = {
//  *  str: "literalstring";
//  *  fn: never;
//  *  date: string;
//  *  customClass: "MyClass";
//  *  obj: JsonifiedObject<{
//  *    prop: "property";
//  *    clz: MyClass;
//  *    nested: {
//  *      attr: Date;
//  *    };
//  *   }>;
//  * }
//  */
// type JsonifiedMyObject = Jsonified<MyObject>;
// declare let ex: JsonifiedMyObject;
// const z1: 'MyClass' = ex.customClass;
// const z2: string = ex.obj.nested.attr;
//
//
// //_---------------------------
// interface Person {
//     name: string;
//     age?: number;
//     gender?: number;
// }
//
// //使用never 将 age?: number;gender?: number; 的类型变为never，所以当类型为number的时候会报错
// //
// type RequireAllOrNone<T, K extends keyof T> =Omit<T, K>&(Required<Pick<T, K>>| Partial<{ age: object,
//     gender: object }>);
//
// const p1: RequireAllOrNone<Person, 'age' | 'gender'> = {
//     name: "lolo",
// };
//
// const p2: RequireAllOrNone<Person, 'age' | 'gender'> = {
//     name: "lolo",
//     age: 1,
//     gender: 1
// };
// const ppppp:Omit<Person, 'age' | 'gender'> = { name: "lolo"}
//
//
// //——————————————————————————————
// interface Person {
//     name: string;
//     age?: number;
//     gender?: number;
// }
//
// // 只能包含Keys中唯一的一个Key
// type RequireExactlyOne<T, Keys extends keyof T> =
//     Keys extends Keys? Omit<T, Keys>  & Partial<Record<Keys, never>>
// : never
//
// const p12: RequireExactlyOne<Person, 'age' | 'gender'> = {
//     name: "lolo",
//     age: 7,
// };
//
// const p213: RequireExactlyOne<Person, 'age' | 'gender'> = {
//     name: "lolo",
//     gender: 1,
// };
//
// // Error
// const p33: RequireExactlyOne<Person, 'age' | 'gender'> = {
//     name: "lolo",
//     age: 7,
//     gender: undefined
// };
//
// //----------------------
//
// type ConsistsOnlyOf<LongString extends string, Substring extends string> =
//     LongString extends ''?true:
//     LongString extends  `${Substring}${infer P}`? ConsistsOnlyOf<P,Substring>:false
//     ;
//     type C0 = ConsistsOnlyOf<'aaa', 'a'> //=> true
// type C1 = ConsistsOnlyOf<'ababab', 'ab'> //=> true
// type C2 = ConsistsOnlyOf<'aBa', 'a'> //=> false
// type C3 = ConsistsOnlyOf<'', 'a'> //=> true
// let C12322223:C3 =true
//
//
// //---------------------------
// //     (t: T) => T
// type UnionToIntersection<U> =
//     (U extends any ? (arg: U) => any : never) extends (arg: infer I) => void ? I : never;
//
// type UnionToTuple<T> =
//     UnionToIntersection<T extends any ? (t: T) => T : never> extends (_: any) => infer W
//         ? [...UnionToTuple<Exclude<T, W>>, W]
//         : [];
// type UnionToArray<U> = (U extends any ? (arg: [U]) => any : never) extends (
//         ...arg: infer R
//     ) => any
//     ? R extends [arg: [infer O]]
//         ? [...UnionToArray<Exclude<U, O>>, O]
//         : []
//     : never;
//     type A03 = UnionToArray<'aaa' | 'bbb' | 'ccc'> //=> ['aaa' , 'bbb' , 'ccc']
//     // type A13 = UnionToTuple<1 | 2 | 3 > //=> [1, 2, 3]
//     // type A23 = UnionToTuple<{type:'input'} | {type:'select',hasOptions:boolean}> //=> [{type:'input'} ,{type:'select',hasOptions:boolean}]
//
// let as:A03 = ['aaa' , 'bbb' , 'ccc']
//
//
// //-----------------------
//
// type SomeProps = {
//     a: string
//     b: number
//     c: (e: MouseEvent) => void
//     d: (e: TouchEvent) => void
// }
// // 如何得到 'c' | 'd' ？
//
// type GetKeyByValueType<T, Condition> = {
//     [K in keyof T]: K
// } [keyof T];
//
//
// const asa:GetKeyByValueType<SomeProps, Function>= 'd'
//

import {extend} from "lodash-es";

/**
 * 第一题
 */
type User = {
    id: number;
    kind: string;
};

function makeCustomer<T extends User>(u: T): T {
    // Error（TS 编译器版本：v4.4.2）
    // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
    // '{ id: number; kind: string; }' is assignable to the constraint of type 'T',
    // but 'T' could be instantiated with a different subtype of constraint 'User'.
    return {
        ...u, // 因为泛型只是约束于user但是并不限制于user所以需要在返回值中接受其他的参数 即可认为泛型约束的属性是必须属性，其他属性是可选属性，但是必须有地方进行接收
        id: u.id,
        kind: 'customer',

    }
}

/**
 * 第二题
 * @description 本道题我们希望参数 a 和 b 的类型都是一致的，即 a 和 b 同时为 number 或 string 类型。当它们的类型不一致的值，TS 类型检查器能自动提示对应的错误信息。
 */
//函数重载
type CustomType = string | number;

function f(a: number, b: number): number;
function f(a: string, b: string): string;

function f(a: CustomType, b: CustomType): CustomType {
    if (typeof a === 'string') {
        return a + ':' + b; // no error but b can be number!
    } else {
        return (a as number) + (b as number); // error as b can be number | string
    }
}

f(2, 3); // Ok
f(1, 'a'); // Error
f('a', 2); // Error
f('a', 'b') // Ok

/**
 * 3
 * @description 那么如何定义一个 SetOptional 工具类型，支持把给定的 keys 对应的属性变成可选的？
 */
type Foo = {
    a: number;
    b?: string;
    c: boolean;
}
type Simplify<T> = {
    [P in keyof T]: T[P]
}
// 测试用例
// type SomeOptional = SetOptional<Foo, 'a' | 'b'>;

type SetOptional<T, K extends keyof T> = Simplify<Partial<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>>
type SetRequired<T, K extends keyof T> = Simplify<Required<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>>
// 测试用例
type SomeRequired = SetRequired<Foo, 'b' | 'c'>;
// type SomeRequired = {
// 	a?: number;
// 	b: string; // 保持不变
// 	c: boolean; // 该属性已变成必填
// }
let c: SomeRequired = {
    a: 1,
    b: 'string',
    c: true,
}

/**
 * 4
 * @description 定义一个 ConditionalPick 工具类型，支持根据指定的 Condition 条件来生成新的类型，对应的使用示例如下
 */

interface Example {
    a: string;
    b: string | number;
    c: () => void;
    d: {};
}

//as 可以将键重新映射为新句子中的内容
type ConditionalPick<T, k> = {
    [c in keyof T as (T[c] extends k ? c : never)]: T[c]
}
// 测试用例：
type StringKeysOnly = ConditionalPick<Example, string>;
//=> {a: string}
let ls: StringKeysOnly = {a: '12'}

/**
 * 5
 * @description  定义一个工具类型 AppendArgument，为已有的函数类型增加指定类型的参数，新增的参数名是 x，将作为新函数类型的第一个参数。具体的使用示例如下所示
 * Parameters 返回函数的参数 ReturnType 返回函数的返回值
 */
type Fn = (a: number, b: string) => number
type AppendArgument<F extends (...args: any) => any, A> = (x: A, ...args: Parameters<F>) => ReturnType<F>

type FinalFn = AppendArgument<Fn, boolean>
// (x: boolean, a: number, b: string) => number
let fn: FinalFn = (x, a, b) => a

/**
 * 6
 *@description 定义一个 NativeFlat 工具类型，支持把数组类型拍平（扁平化）
 * 如果是联合类型
 */
type NaiveFlat<T extends any[]> =
    T[number] extends infer u ?
        u extends any[] ? NaiveFlat<u>
            : u : never

// 测试用例：
type NaiveResult = NaiveFlat<[['a'], ['b', 'c'], [['d']], [[[['e']]]]]>
// NaiveResult的结果： "a" | "b" | "c" | "d"
let lo1: NaiveResult = 'a'

/**
 * 7
 * @description 使用类型别名定义一个 EmptyObject 类型，使得该类型只允许空对象赋值：
 * @description 在通过 EmptyObject 类型的测试用例检测后，我们来更改以下 takeSomeTypeOnly 函数的类型定义，让它的参数只允许严格SomeType类型的值
 */
type EmptyObject = {
    [k in PropertyKey]: never
}

// 测试用例
const shouldPass: EmptyObject = {}; // 可以正常赋值
const shouldFail: EmptyObject = { // 将出现编译错误
    prop: "TS"
}
type SomeType = {
    prop: string
}
type EmptyObject1<T, U extends T> = {
    [k in keyof U]: k extends keyof T ? U[k] : never;
}

// 更改以下函数的类型定义，让它的参数只允许严格SomeType类型的值
function takeSomeTypeOnly<T extends SomeType>(x: EmptyObject1<SomeType, T>) {
    return x
}

// 测试用例：
const x = {prop: 'a'};
takeSomeTypeOnly(x) // 可以正常调用

const y = {prop: 'a', addditionalProp: 'x'};
takeSomeTypeOnly(y) // 将出现编译错误


/**
 * 8
 * @description 定义 NonEmptyArray 工具类型，用于确保数据非空数组
 */

type NonEmptyArray<T> = [T, ...T[]]// 你的实现代码

const a: NonEmptyArray<string> = [] // 将出现编译错误
const b: NonEmptyArray<string> = ['Hello TS', '123'] // 非空数据，正常使用


/**
 * 9
 * @description 定义一个 JoinStrArray 工具类型，用于根据指定的 Separator 分隔符，对字符串数组类型进行拼接。
 */
type JoinStrArray<Arr extends string[], Separator extends string, Result extends string = ""> =
    Arr extends [infer O, ...infer E] ?
        Result extends "" ?
            JoinStrArray<E, Separator, O> :
            JoinStrArray<E, Separator, `${Result}${Separator}${O}`> : Result;

// 测试用例
type Names = ["Sem", "Lolo", "Kaquko"]
type NamesComma = JoinStrArray<Names, ","> // "Sem,Lolo,Kaquko"
type NamesSpace = JoinStrArray<Names, " "> // "Sem Lolo Kaquko"
type NamesStars = JoinStrArray<Names, "⭐️"> // "Sem⭐️Lolo⭐️Kaquko"
let lsoa: NamesSpace = "Sem Lolo Kaquko"

/**
 * 10
 * @description 实现一个 Trim 工具类型，用于对字符串字面量类型进行去空格处理
 *
 */
type trimLeft<V extends string> = V extends ` ${infer A}` ? trimLeft<A> : V;
type trimright<V extends string> = V extends `${infer A} ` ? trimright<A> : V;
type Trim<V extends string> = trimLeft<trimright<V>>;// 你的实现代码

// 测试用例
let los2: Trim<' semlinker '> = 'semlinker'
//=> 'semlinker'

/**
 * 11
 * @description 实现一个 IsEqual 工具类型，用于比较两个类型是否相等。
 *
 */
type IsEqual<A, B> = A extends B ? (B extends A ? true : false) : false// 你的实现代码

// 测试用例
type E0 = IsEqual<1, 2>; // false
type E1 = IsEqual<{ a: 1 }, { a: 1 }> // true
type E2 = IsEqual<[1], []>; // false
/**
 * 12
 * @description 实现一个 Head 工具类型，用于获取数组类型的第一个类型
 */
type Head<T extends Array<any>> = T extends [infer A, ...infer B] ?
    A extends never ? never : A : never;

// 测试用例
type H0 = Head<[]> // never
type H1 = Head<[1]> // 1
type H2 = Head<[3, 2]> // 3
let los12: H1 = 1;

/**
 * 13
 * @description 实现一个 Tail 工具类型，用于获取数组类型除了第一个类型外，剩余的类型
 */


type Tail<T extends Array<any>> = T extends [infer A, ...infer B] ?
    A extends never ? [] : B : [];
// 测试用例
type T0 = Tail<[]> // []
type T1 = Tail<[1, 2]> // [2]
type T2 = Tail<[1, 2, 3, 4, 5]> // [2, 3, 4, 5]

/**
 * 14
 * @description 实现一个 Unshift 工具类型，用于把指定类型 E 作为第一个元素添加到 T 数组类型中
 */
type Unshift<T extends any[], E> = T extends [...infer B] ? [E, ...B] : []

// 测试用例
type Arr0 = Unshift<[], 1>; // [1]
type Arr1 = Unshift<[1, 2, 3], 0>; // [0, 1, 2, 3]
/**
 * 15
 * @description 实现一个 Shift 工具类型，用于移除 T 数组类型中的第一个类型。
 */
type Shift<T extends any[]> = T extends [infer A, ...infer B] ? B : []// 你的实现代码

// 测试用例
type S0 = Shift<[1, 2, 3]>
type S1 = Shift<[string, number, boolean]>

/**
 * 16
 * @description 实现一个 Push 工具类型，用于把指定类型 E 作为第最后一个元素添加到 T 数组类型中
 */
type Push<T extends any[], V> = [...T, V]// 你的实现代码

// 测试用例
type Arr0 = Push<[], 1> // [1]
type Arr1 = Push<[1, 2, 3], 4> // [1, 2, 3, 4]
/**
 * 17
 * @description 实现一个 Includes 工具类型，用于判断指定的类型 E 是否包含在 T 数组类型中
 */
type Includes<T extends Array<any>, E> = T extends [infer A, ...infer B] ?
    A extends E ? true : Includes<B, E> : false;

type I0 = Includes<[], 1> // false
type I1 = Includes<[2, 2, 3, 1], 2> // true
type I2 = Includes<[2, 3, 3, 1], 1> // true

/**
 * 18
 * @description 实现一个 UnionToIntersection 工具类型，用于把联合类型转换为交叉类型
 *
 *
 * (U extends any?(K:U)=>void:never) 利用联合类型extends被分发的原理再利用函数的参数类型逆变实现转换
 */
type UnionToIntersection<U> =( U extends any?(key:U)=>void:never)extends ((key:infer p)=>void)?p:never;

// 测试用例
type U0 = UnionToIntersection<string | number> // never
type U1 = UnionToIntersection<{ name: string } | { age: number }> // { name: string; } & { age: number; }


/**
 * 19
 * @description 实现一个 OptionalKeys 工具类型，用来获取对象类型中声明的可选属性。
 */
type Person = {
    id: string;
    name: string;
    age: number;
    from?: string;
    speak?: string;
};

type OptionalKeys<T> = keyof {
    [k in keyof T as (undefined extends T[k] ? k : never)]: T[k]
}
type PersonOptionalKeys = OptionalKeys<Person> // "from" | "speak"
/**
 * 20
 * @description 实现一个 Curry 工具类型，用来实现函数类型的柯里化处理
 */
type Curry<F extends (...args: any[]) => any,
    P extends any[] = Parameters<F>,
    R = ReturnType<F>> = P extends [infer A, ...infer B]
    ? B extends never
        ? F
        : (arg: A) => Curry<(...args: B) => R>
    : F;

type F0 = Curry<() => Date>; // () => Date
type F1 = Curry<(a: number) => Date>; // (arg: number) => Date
type F2 = Curry<(a: number, b: string) => Date>; //  (arg_0: number) => (b: string) => Date

/**
 * 21
 * @description 实现一个 Merge 工具类型，用于把两个类型合并成一个新的类型。
 * 第二种类型（SecondType）的 Keys 将会覆盖第一种类型（FirstType）的 Keys。具体的使用示例如下所示
 */
type Fool = {
    a: number;
    b: string;
};

type Bar = {
    b: number;
};

type Merge<FirstType, SecondType> = {
    [K in keyof (FirstType & SecondType)]:
    K extends keyof SecondType ?
        SecondType[K] :
        K extends keyof FirstType ?
            FirstType[K] : never
}
const abOP: Merge<Fool, Bar> = {a: 1, b: 2};
/**
 * 22
 * @description 实现一个 RequireAtLeastOne 工具类型，
 * 它将创建至少含有一个给定 Keys 的类型，其余的 Keys 保持原样
 */

type Responder = {
    text?: () => string;
    json?: () => string;
    secure?: boolean;
};

type RequireAtLeastOne<ObjectType,
    KeysType extends keyof ObjectType = keyof ObjectType,
    > = KeysType extends unknown ?
    ObjectType & { [K in KeysType]-?: ObjectType[K] } : never;

// 表示当前类型至少包含 'text' 或 'json' 键
const responder: RequireAtLeastOne<Responder, 'text' | 'json'> = {
    json: () => '{"message": "ok"}',
    // text: () => '{"message": "ok"}',
    secure: true
};


/**
 * 23
 * @description 实现一个 RemoveIndexSignature 工具类型，用于移除已有类型中的索引签名
 */
interface Fooe {
    [key: string]: any;

    [key: number]: any;

    bar(): void;
}

type RemoveIndexSignature<T> = {
    [k in keyof T as (T[k] extends (string | number) ? never : k)]: T[k]
}

type FooWithOnlyBar = RemoveIndexSignature<Fooe>; //{ bar: () => void; }

/**
 * 24
 * @description 实现一个 Mutable 工具类型，用于移除对象类型上所有属性或部分属性的 readonly 修饰符。
 */
type Foo3 = {
    readonly a: number;
    readonly b: string;
    readonly c: boolean;
};

type Mutable<T, Keys extends keyof T = keyof T> = Omit<T, Keys> & {
    -readonly [k in Keys]: T[k]
}

const mutableFoo: Mutable<Foo3, 'a'> = {a: 1, b: '2', c: true};

mutableFoo.a = 3; // OK
mutableFoo.b = '6'; // Cannot assign to 'b' because it is a read-only property.
/**
 * 25
 * @description 实现一个 IsUnion 工具类型，判断指定的类型是否为联合类型
 */
type IsUnion<T, U = T> =
    T extends any //T被分发
        ? [U] extends [T] // u 不会被分发
            ? false
            : true
        : false// 你的实现代码

type I013 = IsUnion<string | number> // true
type I11 = IsUnion<string | never> // false
type I21 = IsUnion<string | unknown> // false
let poas: I013 = true;


/**
 * 26
 * @description 实现一个 IsNever 工具类型，判断指定的类型是否为 never 类型。具体的使用示例如下所示：
 * */
type IsNever<T> = T extends any ? [T] extends [never] ? true : false : false;
type I0u = IsNever<never> // true
type I1u = IsNever<never | string> // false
type I2u = IsNever<null> // false

/**
 * 27
 * @description 实现一个 Reverse 工具类型，用于对元组类型中元素的位置颠倒，
 * 并返回该数组。元组的第一个元素会变成最后一个，最后一个元素变成第一个。
 * */
type Reverse<T extends Array<any>,
    R extends Array<any> = []> =
    T extends [infer i, ...infer B] ?
        B extends any[] ?
            Reverse<B, [i, ...R]> : i : R;

type R0 = Reverse<[]> // []
type R1 = Reverse<[1, 2, 3]> // [3, 2, 1]
let opas: R1 = [3, 2, 1]

/**
 * 28
 * @description 实现一个 Split 工具类型，根据给定的分隔符（Delimiter）对包含分隔符的字符串进行切割。
 * 可用于定义 String.prototype.split 方法的返回值类型。具体的使用示例如下所示：
 *
 * */
type Item = 'semlinker,lolo,kakuqo';

type Split<S extends string,
    Delimiter extends string,
    op extends any[] = []> = S extends `${infer i}${Delimiter}${infer b}` ? Split<b, Delimiter, [...op, i]> : [...op, S];

type ElementType = Split<Item, ','>; // ["semlinker", "lolo", "kakuqo"]
/**
 * 29
 * @description 实现一个 ToPath 工具类型，用于把属性访问（. 或 []）路径转换为元组的形式。具体的使用示例如下所示
 * */
type noKuo<S extends string, op extends any[] = []> = S extends `${infer i}[${infer b}]${infer c}` ? i extends '' ? c extends '' ? [...op, b] : noKuo<c, [...op, b]> : noKuo<c, [...op, i, b]> : [...op, S];
type ToPath3<S extends string, op extends any[] = []> =
    S extends `${infer H}.${infer R}` ? ToPath3<R, [...op, ...noKuo<H>]> : [...op, S];// 你的实现代码

type ol = ToPath3<'foo.bar.baz'> //=> ['foo', 'bar', 'baz']
type ol1 = ToPath3<'foo[0][0][1][2][3][4].bar.baz'> //=> ['foo', '0', 'bar', 'baz']

/**
 * 30
 * 暂时懵
 * @description 完善 Chainable 类型的定义，使得 TS 能成功推断出 result 变量的类型。
 * 调用 option 方法之后会不断扩展当前对象的类型，使得调用 get 方法后能获取正确的类型
 * */
declare const config: Chainable

type Chainable<T = {}> = {
    option<V, S extends string>(keys: S, value: V): Chainable<T & {
        [P in keyof {
            S: S,
        } as `${S}`]: V
    }>
    get(): {
        [p in keyof T]: T[p]
    }
}

const result = config
    .option('age', 7)
    .option('name', 'lolo')
    .option('address', {value: 'XiaMen'})
    .get()

type ResultType = typeof result
// 期望 ResultType 的类型是：
// {
//   age: number
//   name: string
//   address: {
//     value: string
//   }
// }

/**
 * 31
 * @description 实现一个 Repeat 工具类型，用于根据类型变量 C 的值，
 * 重复 T 类型并以元组的形式返回新的类型
 * */
type Repeat<T, C extends number, A extends any[] = []> = A["length"] extends C
    ? A
    : Repeat<T, C, [...A, T]>;

type R023 = Repeat<0, 0>; // []
type R1321 = Repeat<1, 1>; // [1]
type R2 = Repeat<number, 2>; // [number, number]

/**
 * 32
 * @description 实现一个 RepeatString 工具类型，用于根据类型变量 C 的值
 * ，重复 T 类型并以字符串的形式返回新的类型
 * */
type RepeatString<T extends string,
    C extends number,
    s extends string = '',
    o extends any[] = []> = o['length'] extends C ? s : RepeatString<T, C, `${s}${T}`, [...o, T]>;// 你的实现代码

type S023 = RepeatString<"a", 0>; // ''
type S1333 = RepeatString<"a", 2>; // 'aa'
type S2 = RepeatString<"ab", 3>; // 'ababab'

/**
 * 33
 * @description 实现一个 ToNumber 工具类型，用于实现把数值字符串类型转换为数值类型
 * */
type ToNumber<T extends string, S extends any[] = [], L extends number = S['length']> =
    `${L}` extends T ? L : ToNumber<T, [...S, T]>

//  用例
type col = ToNumber<"0">; // 0
type T100 = ToNumber<"10">; // 10
type T20= ToNumber<"20">; // 20

/**
 * 34
 * @description 实现一个 SmallerThan 工具类型，用于比较数值类型的大小
 * */
type SmallerThan<
    N extends number,
    M extends number,
    P extends any[] = []
    > = P['length'] extends N?
    P['length'] extends M?false:true:
    P['length'] extends M?false:SmallerThan<N, M, [...P,N]>

    type S10 = SmallerThan<0, 1>; // true
type S11 = SmallerThan<2, 1>; // false
type S12 = SmallerThan<8, 10>; // true

/**
 * 35
 * @description 实现一个 Add 工具类型，用于实现对数值类型对应的数值进行加法运算
 * */
type Add<T, R, A extends any[] = [], B extends any[] = [],> =
    A['length'] extends T ?
    B['length'] extends R ? [...A, ...B]['length'] : Add<T, R, A, [...B, '']>
    : Add<T, R, [...A, ''], B>

    type A0 = Add<5, 5>; // 10
type A1 = Add<8, 20> // 28
type A2 = Add<10, 30>; // 40
/**
 * 36
 * @description 实现一个 Filter 工具类型，用于根据类型变量 F 的值进行类型过滤
 * */

type Filter<T extends any[], F,s extends any[] = []> =
    T extends [infer i,...infer b]?
    [i] extends [F]?
        Filter<b, F,[...s,i]>:Filter<b, F,s>:s;// 你的实现代码

    type F0s = Filter<[6, "lolo", 7, "semlinker", false], number>; // [6, 7]
type F1s = Filter<["kakuqo", 2, ["ts"], "lolo"], string>; // ["kakuqo", "lolo"]
type F2s = Filter<[0, true, any, "abao"], string>; // [any, "abao"]
let ou:F2s = [1,"abao"]
/**
 * 37
 * @description 实现一个 Flat 工具类型，支持把数组类型拍平（扁平化）。
 * */
type Flat<T extends any[],s extends any[] =[]> =
    T extends [infer i,...infer b]?
        i extends any[]?
            Flat<b, Flat<i, s>> :
            Flat<b, [...s, i]> :s

    ; // 你的实现代码

    type sil = Flat<[]> // []
    type sil2 = Flat<['a', 'b', 'c']> // ["a", "b", "c"]
    type sil3 = Flat<['a', ['b', 'c'], ['d', ['e', ['f']]]]> // ["a", "b", "c", "d", "e", "f"]


/**
 * 38
 * @description 实现 StartsWith 工具类型，判断字符串字面量类型 T
 * 是否以给定的字符串字面量类型 U 开头，并根据判断结果返回布尔值。
 * */
type StartsWith<T extends string, U extends string> = T extends `${U}${infer c}`?true:false// 你的实现代码

    type sol1 = StartsWith<'123', '12'> // true
type sol2 = StartsWith<'123', '13'> // false
type sol3 = StartsWith<'123', '1234'> // false


type EndsWith<T extends string, U extends string> =
    T extends `${infer c}${U}`?true:false// 你的实现代码// 你的实现代码

    type E0 = EndsWith<'123', '23'> // true
type E1 = EndsWith<'123', '13'> // false
type E2 = EndsWith<'123', '123'> // true


/**
 * 39
 * @description 实现 IsAny 工具类型，用于判断类型 T 是否为 any 类型。
 * */
type IsAny<T> = 0 extends 1&T?true:false// 你的实现代码

    type I0 = IsAny<never> // false
    type I1 = IsAny<unknown> // false
    type I2 = IsAny<any> // true
/**
 * 40
 * @description 实现 AnyOf 工具类型，只要数组中任意元素的类型非 Falsy 类型
 * 、 {} 类型或 [] 类型，则返回 true，否则返回 false。
 * 如果数组为空的话，则返回 false。具体的使用示例如下所示：
 * */
type Falsy = 0|''| false|[]| {
    [k in PropertyKey]: never
};
type NotEmptyObject<T> = T extends {} ? ({} extends T ? false : true) : true;
type AnyOf<T extends any[],s extends boolean=false> =
    T extends [infer i,...infer b]?

        i extends Falsy?
            AnyOf<b,s>:AnyOf<b,true>:s;

    type A0 = AnyOf<[]>; // false
type A1 = AnyOf<[0, '', false, [], {}]> // false
type A2 = AnyOf<[1, "", false, [], {}]> // true


/**
 * 41
 * @description 实现 Replace 工具类型，用于实现字符串类型的替换操作
 * */
type Replace<
    S extends string,
    From extends string,
    To extends string
    > = S extends `${infer c}${From}${infer o}`
    ?`${c}${To}${o}`:S;

    type R0 = Replace<'', '', ''> // ''
type R1 = Replace<'foobar', 'bar', 'foo'> // "foofoo"
type R2 = Replace<'foobarbar', 'bar', 'foo'> // "foofoobar"


type ReplaceAll<
    S extends string,
    From extends string,
    To extends string,
    ss extends string =''
    > = S extends `${infer c}${From}${infer o}`
    ?ReplaceAll<o, From, To,`${ss}${c}${To}`>:`${ss}${S}`;

    type R0 = ReplaceAll<'', '', ''> // ''
type R1 = ReplaceAll<'barfoo', 'bar', 'foo'> // "foofoo"
type R2 = ReplaceAll<'foobarbar', 'bar', 'foo'> // "foofoofoo"
type R3 = ReplaceAll<'foobarfoobar', 'ob', 'b'> // "fobarfobar"
/**
 * 42
 * @description 实现 IndexOf 工具类型，用于获取数组类型中指定项的索引值。
 * 若不存在的话，则返回 -1 字面量类型
 * */

type IndexOf<A extends any[], Item,s extends any[] =[]> =
    A extends [infer a,...infer b]?a extends Item?s['length']:IndexOf<b, Item,[...s,a]>:-1

;    type Arr = [1, 2, 3, 4, 5]
type I0 = IndexOf<Arr, 0> // -1
type I232 = IndexOf<Arr, 1> // 0
type I231 = IndexOf<Arr, 3> // 2
let asl:I232 = 0
/**
 * 43
 * @description 实现一个 Permutation 工具类型，当输入一个联合类型时
 * ，返回一个包含该联合类型的全排列类型数组
 * Exclude<T, K> 会出现never 的情况
 * */
type Permutation<T, K=T> =
    [T] extends [never] ?[]:
        K extends K?
            [K,...Permutation<Exclude<T, K>>]:[]

// ["a", "b"] | ["b", "a"]
    type P0 = Permutation<'a' | 'b'>  // ['a', 'b'] | ['b' | 'a']
    // type P1 = ["a", "b", "c"] | ["a", "c", "b"] | ["b", "a", "c"]
    // | ["b", "c", "a"] | ["c", "a", "b"] | ["c", "b", "a"]
    type P1 = Permutation<'a' | 'b' | 'c'>

/**
 * 44
 * @description 实现 Unpacked 工具类型，用于对类型执行 “拆箱” 操作
 * */
type Unpacked<T> = T extends Array<infer c>?
    c:T extends (...any:any)=>infer i?
        i:T extends Promise<infer l>?
            l:T

    type T00 = Unpacked<string>;  // string
type T01 = Unpacked<string[]>;  // string
type T02 = Unpacked<() => string>;  // string
type T03 = Unpacked<Promise<string>>;  // string
type T04 = Unpacked<Unpacked<Promise<string>[]>>;  // string
type T05 = Unpacked<any>;  // any
type T06 = Unpacked<never>;  // never
/**
 * 45
 * @description 实现 JsonifiedObject 工具类型，用于对 object 对象类型进行序列化操作
 * */
type JsonifiedObject<T extends object> = ;// 你的实现代码

    type MyObject = {
    str: "literalstring",
    fn: () => void,
    date: Date,
    customClass: MyClass,
    obj: {
        prop: "property",
        clz: MyClass,
        nested: { attr: Date }
    },
}

declare class MyClass {
    toJSON(): "MyClass";
}

/**
 * type JsonifiedMyObject = {
 *  str: "literalstring";
 *  fn: never;
 *  date: string;
 *  customClass: "MyClass";
 *  obj: JsonifiedObject<{
 *    prop: "property";
 *    clz: MyClass;
 *    nested: {
 *      attr: Date;
 *    };
 *   }>;
 * }
 */
type JsonifiedMyObject = Jsonified<MyObject>;
declare let ex: JsonifiedMyObject;
const z1: "MyClass" = ex.customClass;
const z2: string = ex.obj.nested.attr;
