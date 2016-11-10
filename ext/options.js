function saveOptions (){
    var activity = document.getElementById('activity').value;
    chrome.storage.sync.set({'act': activity}, function() {
        });   
    chrome.storage.sync.get('act', function(obj) {
        document.getElementById('status').innerHTML = obj['act'];
    });
}

document.getElementById('submit').onclick = saveOptions;
chrome.storage.sync.get('act', function(obj) {
    document.getElementById('status').innerHTML = obj['act'];
});