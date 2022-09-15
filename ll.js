'use strict';

const Node = require("./node");

class LinkedList{

    constructor(){
        this.head =null;
    }

    insert=(value)=>{
        const node = new Node(value);

        if(!this.head){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
    }

    append = (value)=>{
        const node = new Node(value);
        if(!this.head){
            this.head = node;
        }else{
            let currentNode = this.head;

            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = node;
        }
    }

    length = ()=>{
        let length = 0;
        if(!this.head){
            return length;
        }else{
            let current = this.head;

            while(current){
                current= current.next;
                length++;
            }
        }
        return length;
    }

    display=()=>{

        if(!this.head){
            return null;
        }
        let temp = this.head;
        let nodes = '';
        while(temp){
            nodes+= temp.value + (temp.next === null?"": ",");
           temp= temp.next;
        }
        return nodes;
    }

    deleteMidlleNode = ()=>{
        
        if(!this.head){
            return null;
        } else if(!this.head.next){
            return null;
        }

        let slowPtr = this.head;
        let fastPtr = this.head;
        let prev = null;

        while(fastPtr && fastPtr.next){

            fastPtr = fastPtr.next.next;
            prev = slowPtr;
            slowPtr = slowPtr.next
        }
        prev.next = slowPtr.next
        return this.display();
        }
    

    deleteElement=(value)=>{

        let currentNode = this.head;
        let previousNode ;
        if(currentNode.value == value){
            this.head = currentNode.next;
        } else{
            while(currentNode.value !== value){
                previousNode = currentNode;
                currentNode = currentNode.next
            }
            previousNode.next = currentNode.next;
        }
    }

    addAtPostion = (node, pos)=>{
        if(!this.head){
            return this.head = node;
        }else if(pos === 0){
            node.next = this.head;
            this.head = node;
        }else{
            let currentNode = this.head;
            for(let i =0; i< pos-1; i++){
                currentNode = currentNode.next;
            }

            node.next = currentNode.next;
            currentNode.next = node; 
        }
    }
}

module.exports = LinkedList;