'use strict';

const Node = require('../node');

describe("Testing the Node Class", ()=>{

    test("Test Create a New Node",()=>{
        const value = "Malek";
        const node = new Node(value);

        expect(node).toBeInstanceOf(Node);
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull();
    });

})