var c = document.getElementById('c'),
o = c.getContext('2d');
function reset_canvas(){
o.fillStyle = 'white'
o.fillRect(0, 0, c.width, c.height)
o.fillStyle = 'black'	
}
function picked_file(file){
if(!file) return;
document.getElementById("output").className = 'processing'

var ext = file.name.split('.').slice(-1)[0];
var reader = new FileReader();

if(file.type == "image/x-portable-bitmap" || ext == 'pbm' || ext == 'pgm' || ext == 'pnm' || ext == 'ppm'){
    reader.onload = function(){
        reset_canvas();
        document.getElementById("text").innerHTML = 'Recognizing Text... This may take a while...'
        o.font = '30px sans-serif'
        o.fillText('No previews for NetPBM format.', 50, 100);
        runOCR(new Uint8Array(reader.result), true);
    }
    reader.readAsArrayBuffer(file)
}else{
    reader.onload = function(){
        var img = new Image();
        img.src = reader.result;
        img.onerror = function(){
            reset_canvas();
            o.font = '30px sans-serif'
            o.fillText('Error: Invalid Image ' + file.name, 50, 100);
        }
        img.onload = function(){
            document.getElementById("text").innerHTML = 'Recognizing Text... This may take a while...'
            reset_canvas();
            var rat = Math.min(c.width / img.width, c.height / img.height);
            o.drawImage(img, 0, 0, img.width * rat, img.height * rat)
            var tmp = document.createElement('canvas')
            tmp.width = img.width;
            tmp.height = img.height;
            var ctx = tmp.getContext('2d')
            ctx.drawImage(img, 0, 0)
            var image_data = ctx.getImageData(0, 0, tmp.width, tmp.height);
            runOCR(image_data, true)
        }
        
    }
    reader.readAsDataURL(file)
}

}

var lastWorker;
var worker = new Worker(
window.URL.createObjectURL(
new (window.MozBlobBuilder || window.WebKitBlobBuilder || window.BlobBuilder)().append(
"importScripts('ocrad.js'); onmessage = function(e){postMessage(OCRAD(e.data))}"
).getBlob()
)
);
			var worker = new Worker('http://antimatter15.com/ocrad.js/worker.js')
function runOCR(image_data, raw_feed){
document.getElementById("output").className = 'processing'
worker.onmessage = function(e){

    document.getElementById("output").className = ''
    
    if('innerText' in document.getElementById("text")){
        document.getElementById("text").innerText = e.data
    }else{
        document.getElementById("text").textContent = e.data	
    }
    document.getElementById('timing').innerHTML = 'recognition took ' + ((Date.now() - start)/1000).toFixed(2) + 's';
}
var start = Date.now()
if(!raw_feed){
    image_data = o.getImageData(0, 0, c.width, c.height);	
}

worker.postMessage(image_data)
lastWorker = worker;
}