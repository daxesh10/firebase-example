let firebase = require('firebase-admin')
,serviceAcc = require('./serviceAccount.json')


firebase.initializeApp({
    credential: firebase.credential.cert(serviceAcc),
    databaseURL: "https://mydata-d5748.firebaseio.com"

});

//console.log(firebase)

let ref = firebase.database().ref('mydata')
let msgref = ref.child('messages')



//info for firebase updates
let status = ()=>{

msgref.orderByKey().limitToLast(1).on('child_changed',function(snap){

    console.log('changed: '+ JSON.stringify(snap.val()))
})

msgref.on('child_removed',function(snap){
    console.log('deleted : '+ JSON.stringify(snap.val()))
})

msgref.orderByKey().limitToLast(1).on('child_added',function(snap){
       console.log('added new entry'+ JSON.stringify(snap.val()))
})

}

let addEntry = (obj)=>{

//    let newObj = {}
//         Object.keys(obj).forEach((key)=>{

//             newObj[key]= obj[key]
//             // console.log(obj[key])
        
//         })
//     console.log("newOBj ",newObj)

  msgref.push(obj)
  console.log('msg key', msgref.push().key)
  status()      

}

let delEntry = (key)=>{

// //msgref.child(key).remove()
// msgref.orderByKey().limitToLast(1).on('value',function(snap){
//     console.log(snap.val())
// })

//console.log(msgref.child(key))

 
}

let obj ={
    name:'daxesh',
    email:'daxesh10@gmail.com',
    admin:true,
    count:1
}
//addEntry(obj)   
delEntry("-KhUAzuOM32NTIV-GBgS")
// msgref.once('value').then(function(snapshot){

//     console.log('key: '+snapshot.key+'\n')
//     console.log('values: '+JSON.stringify(snapshot.val())+'\n')
//     console.log('refence'+snapshot.ref.toString()+'\n')
// })

// msgref.child("-KhUBFg7FiX3brk3BHhW").set({name:"hello guys !!",count:3})
// ref.child("-KhUBFg7FiX3brk3BHhW").remove()

let getall = (callback)=>{

let values = {}
msgref.on('value',function(snapshot){

//console.log(snapshot.val())
let v = snapshot.val()
Object.keys(v).forEach((key)=>{

    values[key] = v[key]
})
//console.log("return from fb values: ",values)
callback(values)
})

}
//return values



// msgref.once('value').then(function(snapshot){

// console.log('getting all')
// let values = snapshot.val()
// let newObj = {}    
   
//     Object.keys(values).forEach(function(key,index){

//         newObj[key] = values[key]
//         //console.log(key+" : "+val.name+" : "+val.email+" :"+val.msg)

//     })
    
// return newObj
//     // values.forEach((item,index)=>{

//     //     console.log(item.name)
//     //     console.log(item.email)
//     // })

// })




module.exports = {

add:addEntry,
getall:getall
}




 //delEntry('KhUBFgIOnDACzbBNXA6')