/*
  autor: drincastX (https://github.com/drincast)
  Código javascript para simular una lista de reproducción de videos de youtube
  versión: 0.1
  2018-01-04
*/

// primero ejecutar lo siguiente hatas el comentario [FIN 1]
//la variable lstVideos es el array donde se agregara la lista de videos
//var lstVideos = ['nada', 'https://www.youtube.com/watch?v=kkx-7fsiWgg', 'https://www.youtube.com/watch?v=YG2p6XBuSKA', 'https://www.youtube.com/watch?v=CRN75ev73JY'];
var nodo = document.getElementById('content');
var nodoPadre = nodo.parentNode;
var iframeVideo = document.createElement('iframe');
iframeVideo.setAttribute('id', 'iframeVideoX');
iframeVideo.setAttribute('style', 'width:100%; height: 800px');
iframeVideo.setAttribute('src', 'https://www.youtube.com/watch?v=fciL4yULkns'); //la url puede ser cualquiera de un video de youtube
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
  setTimeout(ActulizarNodoVideo, 7000);
}
varConteVideo[0].onended = SiguienteVideo;
// FIN 3





/************************************************************************************************************/
//VERSIÓN CON CLASE PARA EL MANEJO DE LA LISTA DE REPRODUCCIÓN

// primero ejecutar lo siguiente hatas el comentario [FIN 1]
//la variable lstVideos es el array donde se agregara la lista de videos
//var lstVideos = ['nada', 'https://www.youtube.com/watch?v=kkx-7fsiWgg', 'https://www.youtube.com/watch?v=YG2p6XBuSKA', 'https://www.youtube.com/watch?v=CRN75ev73JY'];
var nodo = document.getElementById('content');
var nodoPadre = nodo.parentNode;
var iframeVideo = document.createElement('iframe');
iframeVideo.setAttribute('id', 'iframeVideoX');
iframeVideo.setAttribute('style', 'width:100%; height: 800px');
iframeVideo.setAttribute('src', 'https://www.youtube.com/watch?v=fciL4yULkns'); //la url puede ser cualquiera de un video de youtube
// FIN 1

//Se inicia creación de clase/objeto que maneje la reproducción
hlry = {};
//para el manejo de las propiedades
hlry.p = {
  lstVideos: ["https://www.youtube.com/watch?v=EU0LljxpHIk", "https://www.youtube.com/watch?v=fnD0MKzq6QI", "https://www.youtube.com/watch?v=6NXnxTNIWkc", "https://www.youtube.com/watch?v=75_slEkywpY", "https://www.youtube.com/watch?v=hSylsKEKGCo", "https://www.youtube.com/watch?v=z_NJhmtQWAs", "https://www.youtube.com/watch?v=PUzWDf9S9Rk", "https://www.youtube.com/watch?v=JAU88rTbPGg", "https://www.youtube.com/watch?v=fciL4yULkns", "https://www.youtube.com/watch?v=r2g0pM3PMNQ", "https://www.youtube.com/watch?v=1w7OgIMMRc4", "https://www.youtube.com/watch?v=l9kXym1doYA", "https://www.youtube.com/watch?v=twEGSGpLiyc", "https://www.youtube.com/watch?v=YbK00KvsNAE", "https://www.youtube.com/watch?v=re1btP_rGys", "https://www.youtube.com/watch?v=7QU1nvuxaMA"],
  indiceVideoActual: 0,
};
//para el manejo de los métodos
hlry.m = {
  agregarVideoAlFinal: function(url){
    hlry.p.lstVideos.push(url);
  },

  agregarVideoAlInicio: function(url){
    hlry.p.lstVideos.unshift(url);
  },

  agregarVideoDespues(url){
    hlry.p.lstVideos.splice(1, 0, url);
  }
};

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

//se modifica para que sea un ciclo infinito
function SiguienteVideo(){
  hlry.p.lstVideos.push(hlry.p.lstVideos[0]);
  hlry.p.lstVideos.shift();
  iframeVideo.setAttribute('src',hlry.p.lstVideos[0]);
  //document.location.target = "_self";
  //document.location.href=urlListaMusica[0];
  //document.location.href = sigVideoUrl;
  setTimeout(ActulizarNodoVideo, 7000);
}
varConteVideo[0].onended = SiguienteVideo;
// FIN 3
