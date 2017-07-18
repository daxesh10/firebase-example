const
    express = require('express'),
    path = require('path'),
    router = express.Router(),
    superagent = require('superagent'),
    firebaseClient = require('../firebaseClient')
    ,fs = require('fs')
  

  let api_data = []
    module.exports = () => {

        router.get('/api/search',(req,res)=>{

           let name = req.query.name
           ,email = req.query.email
           ,msg = req.query.msg
         //  ,user = req.query.newUser
         //   const users = req.query.users
            //firebase code 
            console.log("routes"+name,email,msg)

            let block1 = {
                name:name,
                email:email,
                msg:msg
            }

            firebaseClient.add(block1)

            


//            console.log(firebaseApp)
            //console.log('value passed from angular is : '+JSON.stringify(name))
           // console.log("all users : "+users)
        })


        let arrVal =[] 
        router.get('/api/list',(request,response)=>{

         let vals = {}
           
        firebaseClient.getall(function(val){

            
                arrVal.push(val)
            })
        
        
        console.log("in router",arrVal)
        if(arrVal)
        response.send(arrVal)
        
      
        


    })

 
router.get('/api/albums',(request,response)=>{

let id = request.query.id
let url = "https://api.spotify.com/v1/artists/"+id+"/albums"
console.log('album url '+url)
let rs = superagent.get(url)
.then(function(res){

let rsarr = []
rsarr.push(res.body)

response.send(rsarr)
console.log((rsarr)? "result at"+rsarr : " no data ")



})

})

router.get('/api/spotify',(request,response)=>{

let q = request.query.searchText
console.log((q)?"true "+q: "no value")

var url = "https://api.spotify.com/v1/search?q=%22"+q+"%22&type=artist"

let reqs = superagent.get(url)
.then(function(res) {
    const body = res.body;
    //const video = body.data[0];
    //const comments = video.comments;
  console.log((body)? "result at myapi/get" : " no data ")
  let arr = []
  
  arr.push(body)
  api_data.push(body)

  response.send(arr)

     });



})

     router.get('/myapi/get',(request,response)=>{

        response.send(api_data)
    

  })


       




    // router.get('/api/spotify',(request,response)=>{

    //     let qr = request.query.searchText
    //    // let sr = { searchText:qr}
    //     let ar = []
    //     ar.push(qr)
    //     let type = "artist"

  




        //superagent to make api call
        
    //    superagent
    //    .get("https://api.spotify.com/v1/search?q=:q&type=:type")
    //    .query({q:qr,type:"artist"})
    //    .end(function(err,res){

          //  if(err)
          //  response.send(err)
          //  console.log("this is superagent response ",JSON.stringify(res.body))
           
//                data = res.body

    //   fs.createWriteStream('./body.json').write(JSON.stringify(res.body,null,4))
                
        
       //  response.json(res.body)
            
      //       fs.readFile('./body.json','utf-8',function(err,data){
    //         console.log(data)

       //   let pData = JSON.parse(data)
       //   let arrData = []
       //    arrData.push(pData)               
       //   response.send(arrData)
//          response.end()
       
 //console.log("new data send ",pData)    

// })  
    


//   response.end()
    

   // })


  //  })

        router.get('*',(request,response)=>{

            response.sendFile(__dirname+'/client/index.html')
        })

        return router
    }