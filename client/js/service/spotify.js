angular
.module('SpotifySrv',[])
.factory('SpotifyService',function($resource){
    return { 
        
        spotify:$resource('/api/spotify'),
        albums:$resource('/api/albums')
        }
    


})