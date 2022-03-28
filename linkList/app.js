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

class Node{
    constructor(value){
        this.value=value
        this.next=null
        
    }
}

class LinkedList{
    constructor(value){
        const newNode=new Node(value)
        this.head=newNode
        this.tail=this.head
        
        this.length=1
        
    }
    //push
   push(value){
       const newNode=new Node(value)
       //if head isnot point to anything or linked is empty
       if(!this.head){ 
           this.head=newNode.value
           this.tail=this.head

       }
       //if head is point to something or if its not empty
       else{
           //here we set new value for next not tail
          
           this.tail.next=newNode.next
           
           this.tail=newNode
          
           

       }
       
        this.length++
        return this

    
   }

}

//frst step on on push
let myLinkedList=new LinkedList(7)
myLinkedList.push(4)


