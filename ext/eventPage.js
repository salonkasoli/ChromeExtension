chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if(changeInfo.url){
          
        var urlHash = new URL(changeInfo.url).hash;
       
        if(urlHash != DOMPurify.sanitize(urlHash)){
//            alert("HACKED");
            chrome.storage.sync.get('act', function(obj) {
                var activity = obj['act'];
                
                if (activity == "block"){
                chrome.tabs.query({currentWindow: true, active: true}, function (tab) {
                    chrome.tabs.update(tab.id, {url: "block.html"});
                });
                }
                
                else if (activity == "ignore"){
                }
                
            });

       }
   }
   
}); 
