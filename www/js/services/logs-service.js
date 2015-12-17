angular.module('final-project')

.factory('LogsService', function(LocalStorageService) {
    var logId = 0;
    return {
        add: function(log){
            LocalStorageService.setStorageList(logId++ ,log);
        },
        
        get: function(log){
            return LocalStorageService.getStorageList(logId);
        }
    };
});