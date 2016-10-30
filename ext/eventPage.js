chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
   if(changeInfo.url){
       
       var urlHash = new URL(changeInfo.url).hash;
       
       if(urlHash != DOMPurify.sanitize(urlHash)){
                  
           alert("YOU HAVE BEEN HACKED");
       }
   }
   
}); 
