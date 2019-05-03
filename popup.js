
    document.addEventListener('DOMContentLoaded', function() {
        var checkPageButton = document.getElementById('checkPage');
        checkPageButton.addEventListener('click', function() { 
            chrome.tabs.getSelected(null, function(tab) {
                var tablink = tab.url;
                window.open('http://webcache.googleusercontent.com/search?q=cache:'+encodeURIComponent(tablink))();
            });
        }, false);
        var checkPageButton2 = document.getElementById('checkPage2');
        checkPageButton2.addEventListener('click', function() { 
            chrome.tabs.getSelected(null, function(tab) {
                javascript:void((function(){var a,b,c,d,e,f;f=new Array('pink','orange','yellow','aquamarine','lightskyblue','plum');for(a=1;a<=6;a++){b=document.getElementsByTagName('h'+a);for(c=0;c<b.length;c++){d=b[c];e=d.style;e.backgroundColor=f[a-1];e.border='solid';e.padding='2px';e.color='black';d.innerHTML='H'+a+' - '+d.innerHTML;}}})())
            });
        }, false);
    }, false);

    