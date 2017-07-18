angular
.module('SpotifyCtrl',[])
.directive('selectlist',function(){

    return{
     restrict:'AEC',
     templateUrl:'views/results.html'

    }
})
.controller('SpotifyController',function($scope,$parse,$log,SpotifyService){

$scope.sp = "welocme to spotify"




$scope.searchAlbum = (id)=>{
$log.info('searching albums')
SpotifyService.albums.query({

id:id

},(response)=>{

$log.info(JSON.stringify(response)+"\n from albums")
$scope.albumDetails = response

let r = response
let urls = []
let imagesArr = []
let albumItems = r[0].items
//$log.info(JSON.stringify(albumItems))
$scope.albumItems = albumItems

let i,j,k,imgs = []
for(i=0;i<$scope.albumItems.length;i++)
{

if(albumItems[i].images.length >0)
{
    let images = albumItems[i].images
    for(j=0;j<images.length;j++)
    {
        $log.info(JSON.stringify(albumItems[i].images[j]))
        let o = albumItems[i].images[j]
        imgs.push(o)
        if(j===1)
        {
            urls.push(o)
        }
    }

}


}
$scope.urls = urls
$scope.albumimages = imgs

$log.info('urls'+$scope.urls)
$log.info($scope.images)

//$log.info(JSON.stringify(r[0].artists.href))
//$log.info(JSON.stringify(r[0].artists.items))
// let items = r[0].artists.items
// let i,j 
// for(i=0;i<items.length;i++)
// {


// // if(items[i].images != null && items[i].images.length>0)
// // {
//    // $log.info(JSON.stringify(r[0].artists.items[i].images))
//    for(j=0;j<r[0].artists.items[i].images.length;j++)
//    {


//   //     $log.info(r[0].artists.items[i].images[j].url)
//         imagesArr.push(JSON.stringify(items[i].images[j].url))
//     //    if(items[i].images[j].length >0 && items[i].images[j] != null && items[i].images[j].url !=null )
//     //    {
       
//     //    $log.info(r[0].artists.items[i].images[i].url)
//     //    imagesArr.push(r[0].artists.items[i].images[i].url)
  
//     //    }
       
//  }
   
// }
    


// }


// $scope.images = imagesArr
// $log.info($scope.images)
// })


})
}

$scope.search= (q)=>{

$log.info("searching..")
SpotifyService.spotify.query({

    searchText:q


},(response)=>{

    $scope.result = response



    $log.info($scope.result)

//    $scope.hidelist = false
})

$scope.hidelist= true

}


$scope.viewResult = (m)=>{

    $scope.selectShow = true 
    $scope.selectedLink = m
    $log.info(m)

    $scope.genAr = m.genres 

if($scope.genAr.length<=0)
{
    $log.info('no genres')
    $scope.gentxt ='no genres'
}
else
{
    $log.info('content exsist')



let i,txt='' 

    for(i=0 ; i<$scope.genAr.length ; i ++)
    {
        if($scope.genAr!=null && $scope.genAr[i] != null)
        {
        $log.info('gen',$scope.genAr[i])
         
        txt+= '|'+$scope.genAr[i]
        }
    }    

 
$log.info(txt)
$scope.gentxt = txt






}           

    
//filteing images
$scope.searchAlbum(m.id)




    //hiding list 
    $scope.hidelist= false
}

$scope.showHide = ()=>{

$scope.hidelist = $scope.hidelist ===false ? true : false
    

}

$scope.filter1 = (x)=>{

        $log.info(x)

return x
}

})
.filter('Myfilter1',function(){

    return function (x)
    {
        $scope.filter1(x)
    }
    

})
.filter('imgfilter',function(){


    return function(images)
    {
            console.log(images)
        return images

    }
})