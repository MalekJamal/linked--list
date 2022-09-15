'use strict';

const LinkedList = require('../ll');
const Node = require('../node');
describe("Testing A Linked list",()=>{

    test('Testing Create a Linked list', ()=>{

        const linkedList = new LinkedList();

        expect(linkedList).toBeDefined();
        expect(linkedList).toBeInstanceOf(LinkedList);
        expect(linkedList.head).toBeNull();
    });
});

describe("Insert In The Begining Of The LinkedList", ()=>{

    test("Insert to empty linked list", ()=>{

        const ll = new LinkedList();
        ll.insert('a');

        expect(ll.head.value).toEqual('a');
        expect(ll.head.next).toBeNull();
    });

    test("Insert to none empty linked list", ()=>{
        const ll = new LinkedList();
        ll.insert('a');
        ll.insert('b');

        expect(ll.head.value).toEqual('b');
        expect(ll.head.next.value).toEqual('a');
        expect(ll.head.next.next).toBeNull();
    });

});

describe("Appending to the end of the linkedlist", ()=>{

    test('Appending to Empty LinkedList', ()=>{

        const linkedList = new LinkedList();
        linkedList.append('a');

        expect(linkedList.head.value).toEqual('a');
        expect(linkedList.head.next).toBeNull();
    });

    test('Appending to None Empty LinkedList', ()=>{

        const linkedList = new LinkedList();
        linkedList.append('a');
        linkedList.append('b');
        linkedList.append('c');
        linkedList.append('d');

        expect(linkedList.head.value).toEqual('a');
        expect(linkedList.head.next.value).toEqual('b');
        expect(linkedList.head.next.next.value).toEqual('c');
        expect(linkedList.head.next.next.next.value).toEqual('d');
        expect(linkedList.head.next.next.next.next).toBeNull();
    });

});

describe("Get The Length of Linkedlist", ()=>{

    test('It Should return the length of the given linked list', ()=>{

        const linkedList = new LinkedList();
        
        linkedList.insert('a');
        linkedList.insert('b');
        linkedList.insert('c');
        linkedList.insert('d');

        expect(linkedList.length()).toEqual(4);

    });
});


describe('Delete The Middle Node', ()=>{

    test('Retern Empty if It\'s Empty', ()=>{

        const linkedList = new LinkedList();

        expect(linkedList.head).toBeNull();
    });

    test("Delete The Middle Node When it has Even Length", ()=>{

        const linkedlist = new LinkedList();
        linkedlist.append('1');
        linkedlist.append('2');
        linkedlist.append('3');
        linkedlist.append('4');
        linkedlist.append('5');
        linkedlist.append('6');
        linkedlist.append('7');
        linkedlist.append('8');

        linkedlist.deleteMidlleNode();
        expect(linkedlist.display()).toEqual('1,2,3,4,6,7,8')
       
    });

    test("Delete The Middle Node When it has Odd Length", ()=>{

        const linkedlist = new LinkedList();
        linkedlist.append('1');
        linkedlist.append('2');
        linkedlist.append('3');
        linkedlist.append('4');
        linkedlist.append('5');
        linkedlist.append('6');
        linkedlist.append('7');


        linkedlist.deleteMidlleNode();
        expect(linkedlist.display()).toEqual('1,2,3,5,6,7');
       
    });
});


describe("Delete an element in the linked list", ()=>{

    test("it should delete the passed element", ()=>{

        const linkedlist = new LinkedList();

        linkedlist.append('2');
        linkedlist.append('3');
        linkedlist.append('4');
       
        linkedlist.deleteElement('4')
        expect(linkedlist.length()).toBe(2);
    });
});


describe("Add an element in specific location", ()=>{

    test("Test Add in specific location", ()=>{

        const linkedlist = new LinkedList();
        const node = new Node();
        
        linkedlist.append('1');
        linkedlist.append('2');
        linkedlist.append('3');
        linkedlist.append('4');
        linkedlist.addAtPostion(node,3);
       
       
        expect(linkedlist.length()).toBe(5);
    });
});