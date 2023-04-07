// @ts-ignore
// interface Person {
//     readonly id:string,
//     arg?:string,
//     ele:number,
//     [index:string]:string|undefined|number,
// }
// let el:Person = {
//     id: '999',
//     arg:'1',
//     ele:1,
// }
// function reverse(x: number): number;
// function reverse(x: string): string;
// function reverse(x: number | string): number | string | void {
//     if (typeof x === 'number') {
//         return Number(x.toString().split('').reverse().join(''));
//     } else if (typeof x === 'string') {
//         return x.split('').reverse().join('');
//     }
// }
// console.log(reverse(1));
// interface Animal {
//     name: string;
// }
// interface Cat {
//     name: string;
//     run(): void;
// }
//
// let tom: Cat = {
//     name: 'Tom',
//     run: () => { console.log('run') }
// };
// let animal: Animal = tom
// console.log(animal);
//
// type Item = {
//     ss:string,
//     bb:number
// }
// type Tuple = {
//     [index:number]: Item
// }
// let aa:Tuple = [{ss:'12',bb:1},{ss:'12',bb:1}]
// console.log(aa,'aa')
// interface Alarm {
//     alert:()=>void
// }
// class Door{
//
// }
// class securityDoor extends Door implements Alarm{
//     alert(){
//         console.log(1)
//     }
// }
// let bb:securityDoor = new securityDoor();
// bb.alert()
//
// class Generic<T = string>{
//     constructor(name:T) {
//         this.zero = name;
//         this.two = name ;
//     }
//     zero:string|Array<T>
//     two:T;
// }
// console.log(new Generic([123,123]))
// interface TType{
//     sl:number,
//     ln?:number,
//     bb:string
// }
// function identity <T extends TType> (arg:T) :T{
//     return {
//         ...arg,
//         sl:1,
//     }
// }
//
// let myIdentity: <T extends TType>(arg:T)=>T = identity;
//
// console.log(myIdentity({sl:1,bb:'123'}));
// interface pe {
//     arg:number,
//     name:string
// }
// interface pi extends pe  {el:number}
//
//
// function setAge(age: pi ) {
//     age?.toString()
//     console.log(age);
// }
//
// setAge({arg:1,name:'1',el:1})
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
