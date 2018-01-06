/*
  autor: drincastX (https://github.com/drincast)
  Código javascript para simular una lista de reproducción de videos de youtube
  versión: 0.1
  2018-01-04
*/

// primero ejecutar lo siguiente hatas el comentario [FIN 1]
//la variable lstVideos es el array donde se agregara la lista de videos
var lstVideos = ['nada', 'https://www.youtube.com/watch?v=kkx-7fsiWgg', 'https://www.youtube.com/watch?v=YG2p6XBuSKA', 'https://www.youtube.com/watch?v=CRN75ev73JY'];
var nodo = document.getElementById('content');
var nodoPadre = nodo.parentNode;
var iframeVideo = document.createElement('iframe');
iframeVideo.setAttribute('id', 'iframeVideoX');
iframeVideo.setAttribute('style', 'width:100%; height: 800px');
iframeVideo.setAttribute('src', 'https://www.youtube.com/watch?v=OxxggwHFj7M'); //la url puede ser cualquiera de un video de youtube
// FIN 1

// ejecutar de segunto lo siguiente hasta el comentario [FIN 2]
//nodo.parentNode.children.content
nodo.parentNode.removeChild(nodo);
nodoPadre.appendChild(iframeVideo);
// FIN 2

//Ejecutar lo siguiente hasta el comentario [FIN 3]
var varConteVideo = iframeVideo.contentDocument.getElementById('movie_player').getElementsByTagName('video');

function ActulizarNodoVideo(){
  varConteVideo = iframeVideo.contentDocument.getElementById('movie_player').getElementsByTagName('video');
  varConteVideo[0].onended = SiguienteVideo;
}

function SiguienteVideo(){
  lstVideos.shift();
  iframeVideo.setAttribute('src', lstVideos[0]);
  //document.location.target = "_self";
  //document.location.href=urlListaMusica[0];
  //document.location.href = sigVideoUrl;
  setTimeout(ActulizarNodoVideo, 7000);
}
varConteVideo[0].onended = SiguienteVideo;
// FIN 3
