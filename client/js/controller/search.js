angular
.module('SearchCtrl',[])
.controller('SearchController',function($scope,$log,RegService){

$scope.name = "daxesh"
$scope.users=[]
$scope.user=[]




RegService.mylist.query({



},(response)=>{

     $scope.myList = response
     $log.info("list view"+JSON.stringify($scope.myList))
 })



$scope.addUser= ()=>{


// Object.newUser = {
//     name:$scope.uname,
//     email:$scope.uemail,
//     msg:$scope.umsg,
// }


RegService.search.query({
    
    name:$scope.uname,
    email:$scope.uemail,
    //users:$scope.users,
    msg:$scope.umsg,
  //  newUser:newUser

})


//$log.info(JSON.stringify($scope.users))



}



//$scope.users = []
// $scope.user1 = 
// {

//     name: 'dex',
//     sex:'male',
//     email:'daxeshmehra10@gamil.com'


// }
// $scope.users.push(user1)

// console.log(JSON.stringify(users))
//$log.info(JSON.stringify(users))






})