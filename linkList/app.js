// class Cookie{
//     constructor(color){
//         this.color=color

//     }
//     getcolor(){
//         return this.color
//     }
//     setcolor(color){
//         this.color=color
//     }
// }

// let greenCookie=new Cookie('green')
// console.log(greenCookie.color)

///


//Node 
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }

}

//Linked list class

class LinkedList{
    constructor(value){
       const newNode=new Node(value)
       this.head=newNode
       this.tail=this.head
       this.length=1
    }

    //push
    //add Node to the end of list
    //there is no loop so its O(1)
    push(value){
        const newNode=new Node(value)
        //check if list is empty 
        //if it is added it as new one
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }
        this.tail.next=newNode
        this.tail=newNode
        this.length++
        return this
    }

    //pop
    //remove node from end of the linked list
    pop(){
        //check if its empty
        //there is loop its o(n)
        if(!this.head){
            return undefined
        }
        let temp=this.head
        let pre=temp
        while(temp.next){
            pre=temp
            temp=temp.next

        }
        this.tail=pre
        this.tail.next=null
        this.length--
        if(this.length===0){
            this.tail=null
            this.head=null
        }
        return temp
    }

    //unshift
    //Adds element at the front of the list

    unshift(value){
        const newNode=new Node(value)
        if(!this.head){
            this.head=newNode
            this.tail=newNode
        }else{
            newNode.next=this.head
            this.head=newNode
            this.length++
            return this
        }
        
        
    }

    //shift
    //remove the first node from list
    shift(){
        if(!this.head){
            return undefined
        }
        let temp=this.head
        this.head=temp.next
        this.length--
        if(this.length===0){
            this.head=null
            this.tail=null
        }
        return temp

        
    }



}

const myLinkedList=new LinkedList(4)
myLinkedList.push(3)
