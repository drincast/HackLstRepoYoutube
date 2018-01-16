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
hlry = {
  p: {
    lstVideos: [],
    indiceVideoActual: 0,
  },

  m: {
    agregarVideoAlFinal: function(url){
      hlry.p.lstVideos.push(url);
    },

    agregarVideoAlInicio: function(url){
      hlry.p.lstVideos.unshift(url);
    },

    agregarVideoDespues: function(url){
      hlry.p.lstVideos.splice(1, 0, url);
    },

    agregarVideoAlInicio2: function(){
      if(txtUrlVideoYoutube.value !== ""){
        console.log(txtUrlVideoYoutube.value);
        hlry.p.lstVideos.unshift(url);
        txtUrlVideoYoutube.value = "";
      }
    },

    agregarVideoDespues2: function(){
      if(txtUrlVideoYoutube.value !== ""){
        console.log(txtUrlVideoYoutube.value);
        hlry.p.lstVideos.splice(1, 0, txtUrlVideoYoutube.value);
        txtUrlVideoYoutube.value = "";
      }
    },

    siguiente: function(){
      SiguienteVideo();
    }
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

// var iframe2 = document.getElementById('iframeVideoX');
// iframe2.contentDocument.getElementById('container').style.display = "none";

var divReproductor = document.createElement('div');
divReproductor.setAttribute('id', 'divReproductor');
divReproductor.style.display = 'block';

var divSiguiente = document.createElement('div');
divSiguiente.style.marginBottom = '5px';
var btnSiguiente = document.createElement('button');
btnSiguiente.setAttribute('id', 'btnSiguiente');
btnSiguiente.innerHTML = 'Siguiente';
btnSiguiente.addEventListener('click', SiguienteVideo);
divSiguiente.appendChild(btnSiguiente);

var divURL = document.createElement('div');
divURL.style.marginBottom = '5px';
var lblURLV = document.createElement('label');
lblURLV.setAttribute('for', 'txtUrlVideoYoutube');
lblURLV.innerHTML = 'URL Video: ';
var txtUrlVideoYoutube = document.createElement('input');
txtUrlVideoYoutube.setAttribute('id', 'txtUrlVideoYoutube');
divURL.appendChild(lblURLV);
divURL.appendChild(txtUrlVideoYoutube);

var divCola = document.createElement('div');
divCola.style.marginBottom = '5px';
var btnJDespues = document.createElement('button');
var btnCola = document.createElement('button');
btnJDespues.setAttribute('id', 'btnJDespues');
btnCola.setAttribute('id', 'btnCola');
btnJDespues.innerHTML = 'justo despues';
btnCola.innerHTML = 'al final';
// btnJDespues.addEventListener('onclick', hlry.m.agregarVideoDespues("'"+txtUrlVideoYoutube.value+"'"));
// btnCola.addEventListener('onclick', hlry.m.agregarVideoAlFinal("'"+txtUrlVideoYoutube.value+"'"));
btnJDespues.addEventListener('click', hlry.m.agregarVideoDespues2);
btnCola.addEventListener('click', hlry.m.agregarVideoAlFinal2);
divCola.appendChild(btnJDespues);
divCola.appendChild(btnCola);

divReproductor.appendChild(divSiguiente);
divReproductor.appendChild(divURL);
divReproductor.appendChild(divCola);

var appYT = document.getElementsByTagName('ytd-app')[0];
appYT.style.position = 'inherit';
//var container = document.getElementById('container');

document.getElementsByTagName('body')[0].insertBefore(divReproductor, appYT);

///


// var btnAgregar = document.createElement('buttom');
// btnAgregar.setAttribute('id', 'btnAgregar');
// btnAgregar.innerHTML = 'Agregar';
// divControles.appendChild(txtUrlVideoYoutube);
// divControles.appendChild(btnAgregar);








//salsa
lstVideos: ["https://www.youtube.com/watch?v=AYc8SC5nnNA", "https://www.youtube.com/watch?v=wU52X9duq6U", "https://www.youtube.com/watch?v=hQdN437xMHg", "https://www.youtube.com/watch?v=scC8I9xl4eg", "https://www.youtube.com/watch?v=cgXGhyGwMFc", "https://www.youtube.com/watch?v=7z2SULKMdiQ", "https://www.youtube.com/watch?v=JfoIqtyCnCU", "https://www.youtube.com/watch?v=7KxkMLAZlzw", "https://www.youtube.com/watch?v=J1--Eg5DPRo", "https://www.youtube.com/watch?v=arWvQNcLKqs", "https://www.youtube.com/watch?v=A3uIUXMJ1xc", "https://www.youtube.com/watch?v=KS9xeYh-HWk", "https://www.youtube.com/watch?v=XiEoCGjwN08", "https://www.youtube.com/watch?v=r4WWa5j-NJk", "https://www.youtube.com/watch?v=WI0Ikrs3E_k", "https://www.youtube.com/watch?v=ZChfr2rhQEg", "https://www.youtube.com/watch?v=q9SqG4XX8ZU", "https://www.youtube.com/watch?v=7vuYeJ1gSSE", "https://www.youtube.com/watch?v=x6EGixAn7Lk", "https://www.youtube.com/watch?v=3H2rE2i_fL4", "https://www.youtube.com/watch?v=0wWRdgEw1I0", "https://www.youtube.com/watch?v=XixGgMfaJck", "https://www.youtube.com/watch?v=RGqQXW_qblg", "https://www.youtube.com/watch?v=1ZguRilbRjA", "https://www.youtube.com/watch?v=83h-cjtfTgE", "https://www.youtube.com/watch?v=coW-lY_uHWM", "https://www.youtube.com/watch?v=QkZscosb6mM", "https://www.youtube.com/watch?v=hd0cl2d2ziU", "https://www.youtube.com/watch?v=Njkg2ubUaug", "https://www.youtube.com/watch?v=fciL4yULkns", "https://www.youtube.com/watch?v=k4ZYi0DbpTY", "https://www.youtube.com/watch?v=JfoIqtyCnCU"],

//rock
lstVideos: ["https://www.youtube.com/watch?v=EU0LljxpHIk", "https://www.youtube.com/watch?v=fnD0MKzq6QI", "https://www.youtube.com/watch?v=6NXnxTNIWkc", "https://www.youtube.com/watch?v=75_slEkywpY", "https://www.youtube.com/watch?v=hSylsKEKGCo", "https://www.youtube.com/watch?v=z_NJhmtQWAs", "https://www.youtube.com/watch?v=PUzWDf9S9Rk", "https://www.youtube.com/watch?v=JAU88rTbPGg", "https://www.youtube.com/watch?v=fciL4yULkns", "https://www.youtube.com/watch?v=r2g0pM3PMNQ", "https://www.youtube.com/watch?v=1w7OgIMMRc4", "https://www.youtube.com/watch?v=l9kXym1doYA", "https://www.youtube.com/watch?v=twEGSGpLiyc", "https://www.youtube.com/watch?v=YbK00KvsNAE", "https://www.youtube.com/watch?v=re1btP_rGys", "https://www.youtube.com/watch?v=7QU1nvuxaMA"],

//electro
lstVideos: ["https://www.youtube.com/watch?v=JRfuAukYTKg", "https://www.youtube.com/watch?v=N9hazmsUxrM", "https://www.youtube.com/watch?v=gCYcHz2k5x0", "https://www.youtube.com/watch?v=JwQZQygg3Lk", "https://www.youtube.com/watch?v=PVzljDmoPVs", "https://www.youtube.com/watch?v=ALZHF5UqnU4", "https://www.youtube.com/watch?v=_ovdm2yX4MA", "https://www.youtube.com/watch?v=hWjrMTWXH28", "https://www.youtube.com/watch?v=EVr__5Addjw", "https://www.youtube.com/watch?v=jUe8uoKdHao", "https://www.youtube.com/watch?v=mIIN_SGQy9c", "https://www.youtube.com/watch?v=ebXbLfLACGM", "https://www.youtube.com/watch?v=hHUbLv4ThOo", "https://www.youtube.com/watch?v=IcrbM1l_BoI", "https://www.youtube.com/watch?v=u0pmV7GoTjc", "https://www.youtube.com/watch?v=NUVCQXMUVnI", "https://www.youtube.com/watch?v=EPo5wWmKEaI", "https://www.youtube.com/watch?v=u9LH_y159sg", "https://www.youtube.com/watch?v=YxIiPLVR6NA", "https://www.youtube.com/watch?v=5jlI4uzZGjU", "https://www.youtube.com/watch?v=TSNerxNwWtU", "https://www.youtube.com/watch?v=nYh-n7EOtMA", "https://www.youtube.com/watch?v=cHHLHGNpCSA", "https://www.youtube.com/watch?v=HJb0VYVtaNc", "https://www.youtube.com/watch?v=BR_DFMUzX4E", "https://www.youtube.com/watch?v=b4Bj7Zb-YD4", "https://www.youtube.com/watch?v=fciL4yULkns", "https://www.youtube.com/watch?v=5dbEhBKGOtY"]

//varios
["https://www.youtube.com/watch?v=7zp1TbLFPp8", "https://www.youtube.com/watch?v=kXYiU_JCYtU", "https://www.youtube.com/watch?v=GurkREc-q4I", "https://www.youtube.com/watch?v=H2jCbXiEQI4", "https://www.youtube.com/watch?v=6dW6aNAZGTM", "https://www.youtube.com/watch?v=p-Z3YrHJ1sU", "https://www.youtube.com/watch?v=RYnFIRc0k6E", "https://www.youtube.com/watch?v=mIIN_SGQy9c", "https://www.youtube.com/watch?v=m3fx4LUBSrM", "https://www.youtube.com/watch?v=gmc4tkVJow8", "https://www.youtube.com/watch?v=EPo5wWmKEaI", "https://www.youtube.com/watch?v=E3zxvWvxDjQ", "https://www.youtube.com/watch?v=mcGBVy3-W4s", "https://www.youtube.com/watch?v=2up_Eq6r6Ko", "https://www.youtube.com/watch?v=9J9FlVCUeLM", "https://www.youtube.com/watch?v=5jlI4uzZGjU", "https://www.youtube.com/watch?v=EVr__5Addjw", "https://www.youtube.com/watch?v=j0lSpNtjPM8", "https://www.youtube.com/watch?v=S5FCdx7Dn0o", "https://www.youtube.com/watch?v=cHHLHGNpCSA", "https://www.youtube.com/watch?v=EH6myRjE848", "https://www.youtube.com/watch?v=jzy2dgEUOhY", "https://www.youtube.com/watch?v=CdXesX6mYUE", "https://www.youtube.com/watch?v=5ZF5m-vmDzM", "https://www.youtube.com/watch?v=jRGrNDV2mKc", "https://www.youtube.com/watch?v=7iNbnineUCI", "https://www.youtube.com/watch?v=0pPXOq87atY", "https://www.youtube.com/watch?v=VqEbCxg2bNI", "https://www.youtube.com/watch?v=_i2EwTKRmsU", "https://www.youtube.com/watch?v=920jLVQOLFI", "https://www.youtube.com/watch?v=YbK00KvsNAE", "https://www.youtube.com/watch?v=SHq2qrFUlGY", "https://www.youtube.com/watch?v=0S3foICf5uI", "https://www.youtube.com/watch?v=OxxggwHFj7M", "https://www.youtube.com/watch?v=_I00wIWw7FQ", "https://www.youtube.com/watch?v=RIUy6aCqUMw", "https://www.youtube.com/watch?v=jnDjEHyhFpU", "https://www.youtube.com/watch?v=CHekNnySAfM", "https://www.youtube.com/watch?v=fciL4yULkns", "https://www.youtube.com/watch?v=YG2p6XBuSKA", "https://www.youtube.com/watch?v=SmM0653YvXU", "https://www.youtube.com/watch?v=5dbEhBKGOtY"]

//piano
["https://www.youtube.com/watch?v=JbjzPKTfjlc", "https://www.youtube.com/watch?v=rExcQ5nm_yU", "https://www.youtube.com/watch?v=Pm1a7VzISK4", "https://www.youtube.com/watch?v=pL0bxewHbjo", "https://www.youtube.com/watch?v=2W_G3xmSGfo", "https://www.youtube.com/watch?v=W_0GdB4oD6s", "https://www.youtube.com/watch?v=4I_NYya-WWg", "https://www.youtube.com/watch?v=GdU6snztM0A", "https://www.youtube.com/watch?v=eHwR9kTIMeI", "https://www.youtube.com/watch?v=NvryolGa19A", "https://www.youtube.com/watch?v=kcihcYEOeic", "https://www.youtube.com/watch?v=fciL4yULkns"]


//---------------------------------------------------------

//Se inicia creación de clase/objeto que maneje la reproducción
hlry = {};
//para el manejo de las propiedades
hlry.p = {
  lstVideos: [],
  urlPpal: "https://www.youtube.com/watch?v=",
  indiceVideoActual: 0,
  nodo: null,
  nodoPadre: null,
  iframeVideo: null,
  varConteVideo: null,

  //controles html
  divReproductor: null,
  divSiguiente: null,
  btnSiguiente: null,
  divURL: null,
  lblURLV: null,
  txtUrlVideoYoutube: null,
  divCola: null,
  btnJDespues: null,
  btnCola: null,
  appYT: null,
};
//para el manejo de los métodos
hlry.m = {
  agregarVideoAlFinal: function(url){
    hlry.p.lstVideos.push(url);
  },

  agregarVideoAlInicio: function(url){
    hlry.p.lstVideos.unshift(url);
  },

  agregarVideoDespues: function(url){
    hlry.p.lstVideos.splice(1, 0, url);
  },

  agregarVideoAlInicio2: function(){
    if(txtUrlVideoYoutube.value !== ""){
      console.log(txtUrlVideoYoutube.value);
      txtUrlVideoYoutube.value = txtUrlVideoYoutube.value.replace(hlry.p.urlPpal, '');
      hlry.p.lstVideos.unshift(url);
      txtUrlVideoYoutube.value = "";
    }
  },

  agregarVideoDespues2: function(){
    if(txtUrlVideoYoutube.value !== ""){
      console.log(txtUrlVideoYoutube.value);
      txtUrlVideoYoutube.value = txtUrlVideoYoutube.value.replace(hlry.p.urlPpal, '');
      hlry.p.lstVideos.splice(1, 0, txtUrlVideoYoutube.value);
      txtUrlVideoYoutube.value = "";
    }
  },

  siguiente: function(){
    siguienteVideo();
  },

  actulizarNodoVideo: function(){
    hlry.p.varConteVideo = hlry.p.iframeVideo.contentDocument.getElementById('movie_player').getElementsByTagName('video');
    hlry.p.varConteVideo[0].onended = hlry.m.siguienteVideo;
  },

  siguienteVideo: function(){
    let url;
    hlry.p.lstVideos.push(hlry.p.lstVideos[0]);
    hlry.p.lstVideos.shift();
    url = hlry.p.urlPpal + hlry.p.lstVideos[0];
    hlry.p.iframeVideo.setAttribute('src', url);
    setTimeout(hlry.m.actulizarNodoVideo, 7000);
  },

  iniciar: function(){
    hlry.p.nodo = document.getElementById('content');
    hlry.p.nodoPadre = hlry.p.nodo.parentNode;
    hlry.p.iframeVideo = document.createElement('iframe');
    hlry.p.iframeVideo.setAttribute('id', 'iframeVideoX');
    hlry.p.iframeVideo.setAttribute('style', 'width:100%; height: 800px');
    hlry.p.iframeVideo.setAttribute('src', 'https://www.youtube.com/watch?v=fciL4yULkns'); //la url puede ser cualquiera de un video de youtube

    //ejecuta la carga del iframe con la url del video
    hlry.p.nodo.parentNode.removeChild(hlry.p.nodo);
    hlry.p.nodoPadre.appendChild(hlry.p.iframeVideo);
  },

  crearcontrolesHTML: function(){
    //para ejecución en
    hlry.p.varConteVideo = hlry.p.iframeVideo.contentDocument.getElementById('movie_player').getElementsByTagName('video');

    //evento de etiqueta video html5
    hlry.p.varConteVideo[0].onended = hlry.m.siguienteVideo;


    hlry.p.divReproductor = document.createElement('div');
    hlry.p.divReproductor.setAttribute('id', 'divReproductor');
    hlry.p.divReproductor.style.display = 'block';

    hlry.p.divSiguiente = document.createElement('div');
    hlry.p.divSiguiente.style.marginBottom = '5px';

    hlry.p.btnSiguiente = document.createElement('button');
    hlry.p.btnSiguiente.setAttribute('id', 'btnSiguiente');
    hlry.p.btnSiguiente.innerHTML = 'Siguiente';
    hlry.p.btnSiguiente.addEventListener('click', hlry.m.siguienteVideo);
    hlry.p.divSiguiente.appendChild(hlry.p.btnSiguiente);

    hlry.p.divURL = document.createElement('div');
    hlry.p.divURL.style.marginBottom = '5px';
    hlry.p.lblURLV = document.createElement('label');
    hlry.p.lblURLV.setAttribute('for', 'txtUrlVideoYoutube');
    hlry.p.lblURLV.innerHTML = 'URL Video: ';
    hlry.p.txtUrlVideoYoutube = document.createElement('input');
    hlry.p.txtUrlVideoYoutube.setAttribute('id', 'txtUrlVideoYoutube');
    hlry.p.divURL.appendChild(hlry.p.lblURLV);
    hlry.p.divURL.appendChild(hlry.p.txtUrlVideoYoutube);

    hlry.p.divCola = document.createElement('div');
    hlry.p.divCola.style.marginBottom = '5px';
    hlry.p.btnJDespues = document.createElement('button');
    hlry.p.btnCola = document.createElement('button');
    hlry.p.btnJDespues.setAttribute('id', 'btnJDespues');
    hlry.p.btnCola.setAttribute('id', 'btnCola');
    hlry.p.btnJDespues.innerHTML = 'justo despues';
    hlry.p.btnCola.innerHTML = 'al final';
    // btnJDespues.addEventListener('onclick', hlry.m.agregarVideoDespues("'"+txtUrlVideoYoutube.value+"'"));
    // btnCola.addEventListener('onclick', hlry.m.agregarVideoAlFinal("'"+txtUrlVideoYoutube.value+"'"));
    hlry.p.btnJDespues.addEventListener('click', hlry.m.agregarVideoDespues2);
    hlry.p.btnCola.addEventListener('click', hlry.m.agregarVideoAlFinal2);
    hlry.p.divCola.appendChild(hlry.p.btnJDespues);
    hlry.p.divCola.appendChild(hlry.p.btnCola);

    hlry.p.divReproductor.appendChild(hlry.p.divSiguiente);
    hlry.p.divReproductor.appendChild(hlry.p.divURL);
    hlry.p.divReproductor.appendChild(hlry.p.divCola);

    hlry.p.appYT = document.getElementsByTagName('ytd-app')[0];
    hlry.p.appYT.style.position = 'inherit';
    //var container = document.getElementById('container');

    document.getElementsByTagName('body')[0].insertBefore(hlry.p.divReproductor, hlry.p.appYT);
  }
};
