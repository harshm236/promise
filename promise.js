//1 Write one example explaining how you can write a callback function ?

/*exe = (a)=> {
      a()
}

function x()
{
    let a = 10
    console.log(a)
}

exe(x)

//2 "Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

/*Explain callback hell.
Numbers
1
2
3
4
5
6
7*/

/*setTimeout(()=> {
    console.log(1)
    setTimeout(()=> {
        console.log(2)
        setTimeout(() => {
            console.log(3)
            setTimeout(()=> {
                console.log(4)
                setTimeout(()=>{
                    console.log(5)
                    setTimeout(()=>{
                       console.log(6)
                       setTimeout(() => {
                        console.log(7)  
                       },7000) 
                    },6000)
                },5000)
            },4000)
        }, 3000)
    },2000)
},1000)

//3 "Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

/*Numbers
1
2
3
4
5
6
7*/

/*let a = new Promise((resolve, reject) => {
    let x =1
    if(x==1)
    resolve('resolve')
    else 
    reject('reject')
})
     
console.log(a)
a.then((data)=>{ console.log(data)
    setTimeout(()=> {
        console.log(1)
        setTimeout(()=> {
            console.log(2)
            setTimeout(() => {
                console.log(3)
                setTimeout(()=> {
                    console.log(4)
                    setTimeout(()=>{
                        console.log(5)
                        setTimeout(()=>{
                           console.log(6)
                           setTimeout(() => {
                            console.log(7)  
                           },7000) 
                        },6000)
                    },5000)
                },4000)
            }, 3000)
        },2000)
    },1000)
}).catch((data)=>{console.log(data)})*/

//4 Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 
/*let y = new Promise((resolve, reject) => {
    let x ='yes'
    if(x =='yes')
    resolve('resolved')
    else
    reject('rejected')
})
y.then(()=>{console.log('promise resolved')}).catch(()=>{console.log('promise rejected')})*/
 
//5 Create examples to explain callback function

/*let x = ()=> {
     console.log('hello')
}
let y = (a)=>{
   a()
}

y(x);*/

//6 Create examples to explain callback hell function

/*setTimeout(()=> {
    console.log(1)
    setTimeout(()=> {
        console.log(2)
        setTimeout(() => {
            console.log(3)
            setTimeout(()=> {
                console.log(4)
                setTimeout(()=>{
                    console.log(5)
                    setTimeout(()=>{
                       console.log(6)
                       setTimeout(() => {
                        console.log(7)  
                       },7000) 
                    },6000)
                },5000)
            },4000)
        }, 3000)
    },2000)
},1000)*/

//7 Create examples to explain promises function

/*let y = new Promise((resolve, reject) => {
    let x ='yes'
    if(x =='yes')
    resolve('resolved')
    else
    reject('rejected')
})
y.then(()=>{console.log('promise resolved')}).catch(()=>{console.log('promise rejected')})*/

//8 Create examples to explain async await function

 async function exe() {
    let a =10
    let x = new Promise((resolve, reject) => {
        if (a>9)
        resolve('resolved')
        else
        reject('rejected')
    })

 await x.then((response)=>{console.log(response)}).catch((response)=>{console.log(response)})
       setTimeout(() => {
         console.log(123)
       }, 200);
        

}

exe()

//9 Create examples to explain promise.all function
let x = 0
let p1 = new Promise((resolve, reject) => {
    if(x==0)
    resolve('resolved')
    else
    reject('rejected')
})

let p2 = new Promise((yesTrue, notTrue) => {
    if (x<5)
    yesTrue('true')
    else
    notTrue('false')
})
let p3 = new Promise((right, wrong) => {
    if(x>-10) 
    right('correct')
    else
    wrong('not correct')
})
Promise.all([p1,p2,p3]).then((response)=>{console.log(response)}).catch((response)=>{console.log(response)})
