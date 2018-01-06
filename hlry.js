/***************************************************************************************************/
var lstVideos = ['nada', 'https://www.youtube.com/watch?v=kkx-7fsiWgg', 'https://www.youtube.com/watch?v=YG2p6XBuSKA', 'https://www.youtube.com/watch?v=CRN75ev73JY'];
var nodo = document.getElementById('content');
var nodoPadre = nodo.parentNode;
var iframeVideo = document.createElement('iframe');
iframeVideo.setAttribute('id', 'iframeVideoX');
iframeVideo.setAttribute('style', 'width:100%; height: 800px');
iframeVideo.setAttribute('src', 'https://www.youtube.com/watch?v=OxxggwHFj7M');

//nodo.parentNode.children.content
nodo.parentNode.removeChild(nodo);
nodoPadre.appendChild(iframeVideo);

var varConteVideo = iframeVideo.contentDocument.getElementById('movie_player').getElementsByTagName('video');

function ActulizarNodoVideo(){
  varConteVideo = iframeVideo.contentDocument.getElementById('movie_player').getElementsByTagName('video');
  varConteVideo[0].onended = SiguienteVideo;
}

function SiguienteVideo(){
  lstVideos.shift();
  //document.location.target = "_self";
  //document.location.href=urlListaMusica[0];
  //document.location.href = sigVideoUrl;
  iframeVideo.setAttribute('src', lstVideos[0]);
  setTimeout(ActulizarNodoVideo, 7000);
}
varConteVideo[0].onended = SiguienteVideo;
