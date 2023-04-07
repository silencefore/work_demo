import {isEqual, keys} from "lodash-es";
import example from "/@/store/example";

// type Includes<T extends Array<any>, E> = T extends [infer o,...infer C]?o extends E ?true:C extends number[]?Includes<C,E>:false:false;// 你的实现代码
//
//     type I0 = Includes<[], 1> // false
// type I1 = Includes<[2, 2, 3, 1], 2> // true
// type I2 = Includes<[2, 3, 3, 1], 1> // true
// let S0:I0 = false
// let I1:I1 = true
// let I2:I2 = true

// interface Person {
//     name: string;
//     age: number;
// }
// interface Guang {
//     name: string;
//     age: number;
//     hobbies: string[];
// }

// let printHobbies: (guang: Guang) => void;
// printHobbies = (guang) => {console.log(guang.hobbies);}
//     let printName:(person: Person) => void;
//     printName = (person) => {console.log(person.name)}
//         printHobbies = printName
//         printName= printHobbies;
// type UnionToIntersection<U> = (U extends U ? (x:U)=>void:never) extends (x:infer R)=>void?R:never;
//
// // 测试用例
//     type U0 = UnionToIntersection<string | number> // never
//     type U1 = UnionToIntersection<{ name: string } | { age: number }> // { name: string; } & { age: number; }


// type Person = {
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
//     type PersonOptionalKeys = OptionalKeys<Person> // "from" | "speak"


// type Curry<
//     F extends (...args: any[]) => any,
//     P extends any[] = Parameters<F>,
//     R = ReturnType<F>
//     > = P extends [infer c,...infer b]?b extends any[]?(arg:c)=>Curry<(...args:b) => R>:F:R;// 你的实现代码
//
//     type F0 = Curry<() => Date>; // () => Date
// type F1 = Curry<(a: number) => Date>; // (arg: number) => Date
// type F2 = Curry<(a: number, b: string,c: string) => Date>; //  (arg_0: number) => (b: string) => Date

type Foo = {
    a: number;
    b: string;
};

type Bar = {
    b: number;
};

type Merge<FirstType, SecondType> =
    // {
    //     [k in keyof (FirstType & SecondType)]: k extends keyof SecondType?SecondType[k]:k extends keyof FirstType?FirstType[k]:never;
    // }
Omit<FirstType, keyof SecondType> ;
const ab: Merge<Foo, Bar> = { a: 1};

type Responder = {
    text?: () => string;
    json?: () => string;
    secure?: boolean;
};

type RequireAtLeastOne<
    ObjectType,
    KeysType extends keyof ObjectType = keyof ObjectType,
    > =  KeysType extends KeysType
    ? Omit<ObjectType, KeysType> & Required<Pick<ObjectType, KeysType>>
    : never// 你的实现代码

// 表示当前类型至少包含 'text' 或 'json' 键
const responder: RequireAtLeastOne<Responder, 'text' | 'json'> = {
    text: () => '{"message": "ok"}',
    json: () => '{"message": "ok"}',
    secure: true
};
interface nnn {
    [key: string]: any;
    [key: number]: any;
    bar(): void;
}
type RemoveIndexSignature<T> = {
    [k in keyof T as string extends k?never:number extends k?never:k]:T[k]
};

// 测试用例
type FooWithOnlyBar = RemoveIndexSignature<nnn>; //{ bar: () => void; }

let cc :FooWithOnlyBar ={ 'bar': () => {

    } }

type PPP = {
    readonly a: number;
    readonly b: string;
    readonly c: boolean;
};

type Mutable<T, Keys extends keyof T = keyof T> = Omit<T, Keys> & {
   -readonly[c in Keys]:T[c]
};// 你的实现代码

const mutableFoo: Mutable<PPP, 'a'> = { a: 1, b: '2', c: true };

mutableFoo.a = 3; // OK
mutableFoo.b = '6'; // Cannot assign to 'b' because it is a read-only property.

//_________________________________________


type IsUnion<T, U = T> =
    // ([string | never]) extends [never] ? false :true |
    // ([string | never]) extends [string] ? false : true
T extends any ? ([U] extends [T] ? false : true) : never


const ve = {
    to:12,
    oo:22
}

//_________________________________________
type IsNever<T,u=T> =  [string | unknown]
type I0 = IsNever<never> // true
type I1 = IsNever<never | string> // false
type I2 = IsNever<null> // false
let oo:I0=true;

//_________________________________________
type Reverse<T extends any[]> = T extends [infer R1, ...infer R2] ? [...Reverse<R2>, R1] : []

    type R0 = Reverse<[]> // []
    type R1 = Reverse<[1, 2, 3]> // [3, 2, 1]
 let c:R1 =[3, 2, 1]

//_________________________________________
type Item = 'semlinker,lolo,kakuqo';

type Split<
    S extends string,
    Delimiter extends string,
    R extends Array<any> =[]
    > = S extends `${infer A}${Delimiter}${infer B}`?Split<B, Delimiter,[...R,A]>:[...R,S,];// 你的实现代码

    type ElementType = Split<Item, ','>; // ["semlinker", "lolo", "kakuqo"]
let y :ElementType = ["semlinker", "lolo", "kakuqo"]
//_________________________________________

type point<S extends string, R extends Array<any> =[]> =
    S extends `${infer A}.${infer B}`?point<B, [...R,...ps<A>]>:[...R,...ps<S>]; // 你的实现代码

type ps<S extends string, R extends Array<any> =[]> =
    S extends `${infer A}[${infer B}]${infer c}`?
        S extends `[${infer D}]${infer E}`?
           ps<E, [...R,D]>:ps<c, [...R,...[A,B]]>:[...R];
// ToPath<'foo[0].bar.baz'> //=> ['foo', '0', 'bar', 'baz']
let ooo :point<'foo[0]'> = ['foo', '0']
// type  ToPath<S extends Array<any>, R extends Array<any> =[]> =
//     S extends [infer A,...infer B]?B extends any[]?res<S>:ps<A extends string?string :''>:never;
let ppp :point<"foo[0][2][3][4].bar[5][6][9[9[99]]].baz[12][13]"> = ['foo','0','2','3','4','bar','5','6','9[9[99','baz','12','13']


//_________________________________________

declare const config: Chainable

// {
//     option<K extends string, V extends any>(key: K, value: V): Chainable<T & { [key in [K] as `${K}`]: V }>
// get(): { [K in keyof T]: T[K] }    //  这里也可以直接返回 T, 不过这样并不直观, 所以手动遍历一下
// }
type Chainable<T = {}> = {
    option<k extends string,V extends any>(I:k,p:V):Chainable<T & {[p in  k]:V}>
    get():{[c in keyof T]:T[c]}
}
const result = config
    .option('age', 7)
    .option('name', 'lolo')
    .option('address', { value: 'XiaMen' })
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

//_________________________________________
type Repeat<T, C extends number,R extends any[] = []> = R['length'] extends C?R:Repeat<T, C,[...R,T]>// 你的实现代码

    type R01 = Repeat<0, 0>; // []
type R12 = Repeat<1, 1>; // [1]
type R2 = Repeat<number, 2>; // [number, number]
//_________________________________________
type RepeatString<
    T extends string,
    C extends number,
    P extends string = '',
    k extends any[] = []
    > =  k['length'] extends C? P :RepeatString<T, C,`${P}${T}`,[...k,1]>// 你的实现代码

    type S0 = RepeatString<"a", 0>; // ''
type S1 = RepeatString<"a", 2>; // 'aa'
type S2 = RepeatString<"ab", 3>; // 'ababab'

//_________________________________________

type ToNumber<T extends string,I extends any[]  = []> = `${I['length']}` extends T?I['length']: ToNumber<T, [...I,1]>

    type T0 = ToNumber<"0">; // 0
type T1 = ToNumber<"10">; // 10
type T2 = ToNumber<"20">; // 20


//_________________________________________
type SmallerThan<N extends number,
    M extends number,
    > = keyof Repeat<1, N> ;// 你的实现代码

    type S0111 = SmallerThan<0, 1>; // true
type S122 = SmallerThan<2, 0>; // false
type S233 = SmallerThan<8, 10>; // true



//_________________________________________

type Add<T extends number, R extends number> = [...Repeat<1, T>,...Repeat<1, R>]['length'];// 你的实现代码

    type A0 = Add<5, 5>; // 10
type A1 = Add<8, 20> // 28
type A2 = Add<10, 30>; // 40

let pppaaaa:A1 = 28;


//_________________________________________
type Filter<T extends any[], F , R extends any[] = []> =
    T extends [infer i,...infer U]?U extends any[]?i extends F?Filter<U, F, [...R,i]>:Filter<U, F, [...R]>:R:R
;
    type F0 = Filter<[6, "lolo", 7, "semlinker", false], number>; // [6, 7]
type F1 = Filter<["kakuqo", 2, ["ts"], "lolo"], string>; // ["kakuqo", "lolo"]
type F2 = Filter<[0, true, any, "abao"], string>; // [any, "abao"]
let aaa: F2 = [1, "abao"]

//_________________________________________
type Flat<T extends any[],R extends any[] = []> =
    T extends [infer i,...infer U]?
            i extends any[]?
            Flat<U,Flat<i, R>>:Flat<U,[...R,i]>:R;

    type F101 = Flat<[]> // []
    type F112 = Flat<['a', 'b', 'c']> // ["a", "b", "c"]
    type F123 = Flat<['a', ['b', 'c'], ['d', ['e', ['f']]]]> // ["a", "b", "c", "d", "e", "f"]
let aaa2: F123 =  ["a", "b", "c", "d", "e", "f"]

//_________________________________________

type StartsWith<T extends string, U extends string> = T extends `${U}${infer c}`?true:false// 你的实现代码
type EndsWith<T extends string, U extends string> = T extends `${infer c}${U}`?true:false// 你的实现代码

//     type S000 = StartsWith<'123', '12'> // true
// type S0001 = StartsWith<'123', '13'> // false
// type S00012 = StartsWith<'123', '1234'> // false
type E0 = EndsWith<'123', '23'> // true
type E1 = EndsWith<'123', '13'> // false
type E2 = EndsWith<'123', '123'> // true
let baa:E0 = true
//_________________________________________


type NotEmptyObject<T> = T extends {}?{} extends T?false:true:true;
type Flasy = 0 | "" | false | [] | null  | 0n ;
type AnyOf<T extends any[]> = T extends [infer U,...infer reset]?
    U extends Flasy?
        AnyOf<reset>:
        NotEmptyObject<U>
    : false

type A01 = AnyOf<[]>; // false
type A11 = AnyOf<[0, "", false, [], {}]>; // false
type A21= AnyOf<[1, "", false, [], {}]>; // true
let baaa:A21 = true


//________________________________
type Replace<
    S extends string,
    From extends string,
    To extends string
    > = S extends `${infer c}${From}${infer i}`?`${ c}${To}${ i}`:S

    type Rs = Replace<'', '', ''> // ''
type Rs1 = Replace<'foobar', 'bar', 'foo'> // "foofoo"
type Rs2 = Replace<'foobarbar', 'bar', 'foo'> // "foofoobar"
// let bcaa:Rs2 = "foofoobar"


type ReplaceAll<
    S extends string,
    From extends string,
    To extends string,
    res extends string = '',
    end extends string = ''
    > =
    S extends `${infer H}${From}${infer T}`
        ? `${H}${To}${ReplaceAll<T, From, To>}`
        : S;
    // S extends `${infer c}${From}${infer i}`?ReplaceAll<i, From, To,`${res}${c}${To}`,`${i}`>:`${res}${end}`
let bcaa:ReplaceAll<"foobarfoobar", "ob", "b"> = "fobarfobar"
//________________________________
type IndexOf<A extends any[], Item> =
    A extends [...infer u, infer i] ?
        i extends Item ?
            Exclude<keyof A, keyof u> extends string ?
                ToNumber<Exclude<keyof A, keyof u>> : -1 :
            IndexOf<u, Item>
        : -1
    // Item extends A[number] ?true:false;// 你的实现代码

    type Arr = [1, 2, 3, 4, 5]
type IQ0 = IndexOf<Arr, 0> // -1
type IQ1 = IndexOf<Arr, 5> // 0
type IQ2 = IndexOf<Arr, 3> // 2

let bcaaad:IQ2 =2

//________________________________
type Permutation<T, K=T> = T extends T?

// ["a", "b"] | ["b", "a"]
    type P0 = Permutation<'a' | 'b'>  // ['a', 'b'] | ['b' | 'a']
    // type P1 = ["a", "b", "c"] | ["a", "c", "b"] | ["b", "a", "c"]
    // | ["b", "c", "a"] | ["c", "a", "b"] | ["c", "b", "a"]
    type P1 = Permutation<'a' | 'b' | 'c'>
