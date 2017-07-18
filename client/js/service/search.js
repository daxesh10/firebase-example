angular
.module('RegSrv',[])
.factory('RegService',function($resource){
    return { 
        search:$resource('/api/search'),
        mylist:$resource('/api/list'),
        spotify:$resource('/api/spotify'),
        lab5:$resource('api/lab5')
        }
    


})