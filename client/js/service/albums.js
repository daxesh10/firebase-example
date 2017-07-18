angular
.module('AlbumSrv',[])
.factory('AlbumService',function($resource){
    return { 
    albums:$resource('/api/albums')
    }

})