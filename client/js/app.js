angular
.module('app',['ngRoute', 'ngResource','SearchCtrl','SpotifyCtrl','RegSrv','SpotifySrv'])
.config(['$locationProvider',($locationProvider)=>{

$locationProvider.hashPrefix('')

}])
.config(['$locationProvider','$routeProvider',($locationProvider,$routeProvider)=>{

$routeProvider
.when('/msg',{

    templateUrl:'views/search.html',
    controller:'SearchController'

})
.when('/spotify',{

    templateUrl:'views/spotify.html',
    controller:'SpotifyController'

})
.when('/bitnotes',{

    templateUrl:'views/bitnotes.html'
    //controller:''

})
.when('/lab5',{

    templateUrl:'views/lab5.html',
  //  controller:'lab5Controller'

})

.otherwise({
    redirectTo:'/'
})


}])