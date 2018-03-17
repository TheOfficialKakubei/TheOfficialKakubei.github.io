//WebTechs.Net, http://www.webtechs.net		
function changeIt(ImageToChange, ImageToShow) {		
if (document.images) { document[ImageToChange].src = ImageToShow; } }		
function bar(message) {		
if (document.images) { window.status = message; return true } }		
if (document.images) {
i1 = new Image;			
i1.src = "images/homebutt2.gif";
i2 = new Image;			
i2.src = "images/radiatorbutt2.gif";
i3 = new Image;			
i3.src = "images/cylinderbutt2.gif";
i4 = new Image;			
i4.src = "images/enginebutt2.gif";
i5 = new Image;
i5.src = "images/contactbutt2.gif";

}

function right(e) {
if (navigator.appName == 'Netscape' && 
(e.which == 3 || e.which == 2))
return false;
else if (navigator.appName == 'Microsoft Internet Explorer' && 
(event.button == 2 || event.button == 3)) {
alert("No Right Clicking Allowed, Thank You!!");
return false;
}
return true;
}

document.onmousedown=right;
document.onmouseup=right;
if (document.layers) window.captureEvents(Event.MOUSEDOWN);
if (document.layers) window.captureEvents(Event.MOUSEUP);
window.onmousedown=right;
window.onmouseup=right;

function showpopup(url) { 
newwindow=window.open(url,'name','height=75,width=75,top=200,left=300,resizable'); 
if (window.focus) {newwindow.focus()} 
} 
