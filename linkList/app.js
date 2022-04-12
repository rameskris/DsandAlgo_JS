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
    //no loop o(1)
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

    //Get
    //get value from given index


    get(index){
        let temp=this.head
        if(!this.head){
            return undefined
        }
        if(index<0|| index>=this.length){
            return false
        }
        for(let i=0;i<index;i++){
            temp=this.head.next
            

        }
        return temp

    }

    //set
    //set or replace value on particular place


    set(index,value){
        let temp=this.get(index)
        if(temp){
            temp.value=value
            return true
        }
        return false

        




    }

    //insert

    insert(index,value){
        if(index===0){
            return this.unshift(value)
        }
        if(index===this.length){
            return this.push(value)
        }
        if(index<0 || index >this.length){
            return false
        }
        const newNode=new Node(value)
        let temp=this.get(index-1)
        newNode.next=temp.next
        temp.next=newNode
        this.length++
        return true
    }
    //remove

    remove(index){
        
    }



// if(index===0){
//             return this.unshift(value)
//         }
//         if(index===this.length){
//             return this.push(value)
//         }
//         let temp=this.get(index)
//         let pre=this.get(index-1)
//         temp.next=pre.next
//         pre.next=temp
//         return true

}

const myLinkedList=new LinkedList(4)
myLinkedList.push(3)
