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

//listas de videos
//salsa
["UKBlYmqDf4I", "HRt8Ho_eyEM", "1j3QHyBOyhg", "0wWRdgEw1I0", "XixGgMfaJck", "RGqQXW_qblg", "1ZguRilbRjA", "83h-cjtfTgE", "coW-lY_uHWM", "QkZscosb6mM", "hd0cl2d2ziU", "Njkg2ubUaug", "fciL4yULkns", "k4ZYi0DbpTY", "JfoIqtyCnCU", "AYc8SC5nnNA", "wU52X9duq6U", "cEz2J24LLUw", "j_CfZK8FPqY", "BUCtau7a7Ak", "_EQIyt5-z0I", "C5ihFyxaUMo", "KU4LpLKwez4", "v2zARXKRHVg", "DZtGjOqqlbE", "SYMx8kT4c7U", "ket82fTGQpg", "0ykUIOdmkj8", "PDUYfpDhD40", "5eQamJHEue8", "QBuueYkmYVI", "4YAoWksQhw4", "OvQArMzHt90", "PdoNzV19vng", "7DikmNa_gg0", "hQdN437xMHg", "tY9oa_1rZsw", "scC8I9xl4eg", "7z2SULKMdiQ", "JfoIqtyCnCU", "7KxkMLAZlzw", "q9SqG4XX8ZU", "PqmLPeL8aj4", "H0vU9mtxZ98", "FKKl24q73vI", "EhM6qKx-ECI", "uN0rmmreopE", "J1--Eg5DPRo", "arWvQNcLKqs", "A3uIUXMJ1xc", "KS9xeYh-HWk", "XiEoCGjwN08", "r4WWa5j-NJk", "WI0Ikrs3E_k", "6nFpUWeyDUc", "e0DWx8kG-4o", "i4PA7rvpvhk", "7HmG_XZYtZg", "jo9i8I83HIw", "XIoUz-nEu0g", "ZChfr2rhQEg", "q9SqG4XX8ZU", "7vuYeJ1gSSE", "x6EGixAn7Lk", "J1--Eg5DPRo", "FEWDArMv6GU", "3H2rE2i_fL4"]

//rock
["EU0LljxpHIk", "fnD0MKzq6QI", "6NXnxTNIWkc", "75_slEkywpY", "hSylsKEKGCo", "z_NJhmtQWAs", "PUzWDf9S9Rk", "JAU88rTbPGg", "fciL4yULkns", "r2g0pM3PMNQ", "1w7OgIMMRc4", "l9kXym1doYA", "twEGSGpLiyc", "YbK00KvsNAE", "re1btP_rGys", "7QU1nvuxaMA"]

//electro
["JRfuAukYTKg", "N9hazmsUxrM", "gCYcHz2k5x0", "JwQZQygg3Lk", "PVzljDmoPVs", "ALZHF5UqnU4", "_ovdm2yX4MA", "hWjrMTWXH28", "EVr__5Addjw", "jUe8uoKdHao", "mIIN_SGQy9c", "ebXbLfLACGM", "hHUbLv4ThOo", "IcrbM1l_BoI", "u0pmV7GoTjc", "NUVCQXMUVnI", "EPo5wWmKEaI", "u9LH_y159sg", "YxIiPLVR6NA", "5jlI4uzZGjU", "TSNerxNwWtU", "nYh-n7EOtMA", "cHHLHGNpCSA", "HJb0VYVtaNc", "BR_DFMUzX4E", "b4Bj7Zb-YD4", "fciL4yULkns", "5dbEhBKGOtY"]

//varios
["7zp1TbLFPp8", "kXYiU_JCYtU", "GurkREc-q4I", "H2jCbXiEQI4", "6dW6aNAZGTM", "p-Z3YrHJ1sU", "RYnFIRc0k6E", "mIIN_SGQy9c", "m3fx4LUBSrM", "gmc4tkVJow8", "EPo5wWmKEaI", "E3zxvWvxDjQ", "mcGBVy3-W4s", "2up_Eq6r6Ko", "9J9FlVCUeLM", "5jlI4uzZGjU", "EVr__5Addjw", "j0lSpNtjPM8", "S5FCdx7Dn0o", "cHHLHGNpCSA", "EH6myRjE848", "jzy2dgEUOhY", "CdXesX6mYUE", "5ZF5m-vmDzM", "jRGrNDV2mKc", "7iNbnineUCI", "0pPXOq87atY", "VqEbCxg2bNI", "_i2EwTKRmsU", "920jLVQOLFI", "YbK00KvsNAE", "SHq2qrFUlGY", "0S3foICf5uI", "OxxggwHFj7M", "_I00wIWw7FQ", "RIUy6aCqUMw", "jnDjEHyhFpU", "CHekNnySAfM", "fciL4yULkns", "YG2p6XBuSKA", "SmM0653YvXU", "5dbEhBKGOtY"]

//piano
["JbjzPKTfjlc", "rExcQ5nm_yU", "Pm1a7VzISK4", "pL0bxewHbjo", "2W_G3xmSGfo", "W_0GdB4oD6s", "4I_NYya-WWg", "GdU6snztM0A", "eHwR9kTIMeI", "NvryolGa19A", "kcihcYEOeic", "fciL4yULkns"]


//lista rock español
["UJqcH0my0mY", "uvVNoP6U1OQ", "50jlKbvk9O0", "slctnzJ2dzA", "yh8S4Blnd6M", "Ru24puGqKuM", "hSylsKEKGCo", "uZ3x0I5lIGo", "_R-l7KYx9sM", "HIppnw4wt7Q", "fnD0MKzq6QI", "hbiQn4-1qv8", "PUzWDf9S9Rk", "R7s6rZuuff8", "guHN79sQ3gk", "Kdp4KAyO2Zo", "BESD2Oo2PrQ", "iQiQYbTA0sw", "wL2012Q3h3M", "CJcr4Yg9DMA", "EU0LljxpHIk", "75_slEkywpY", "YbK00KvsNAE", "zABYI-f7wkE", "lEa1F3wyuho", "re1btP_rGys", "AruE3oCxF70", "5k-QLyo9Hoc"]


https://www.youtube.com/watch?v=y9uqsn33MS4

//---------------------------------------------------------
//guia: copiar el código acontinuación y copiarlo en la consola del browser
//luego Ejecutar la siguiente lines
//
//hlry.m.iniciar()
//luego ejecutar la siguiente linea
//hlry.crearcontrolesHTML()
//con esto se crean unos controles html al inicio de la pagina, con lo cual, se puede
//cambiar al siguiente video, y agregar nuevos videos a la lista


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
  divContenF: null,
  divIzq: null,
  divDer: null,
  divSiguiente: null,
  btnSiguiente: null,
  btnQuitar: null,
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

  agregarVideoAlFinal2: function(){
    if(txtUrlVideoYoutube.value !== ""){
      console.log(txtUrlVideoYoutube.value);
      txtUrlVideoYoutube.value = txtUrlVideoYoutube.value.replace(hlry.p.urlPpal, '');
      hlry.p.lstVideos.push(txtUrlVideoYoutube.value);
      txtUrlVideoYoutube.value = "";
    }
  },

  agregarRandom: function(){
    if(txtUrlVideoYoutube.value !== ""){
      var cantidad = hlry.p.lstVideos.length;
      var posicion = Math.floor((Math.random() * (cantidad - 3)) + 3);
      console.log("en: ", posicion, txtUrlVideoYoutube.value);
      txtUrlVideoYoutube.value = txtUrlVideoYoutube.value.replace(hlry.p.urlPpal, '');
      hlry.p.lstVideos.splice(posicion, 0, txtUrlVideoYoutube.value);
      txtUrlVideoYoutube.value = "";
    }
  },

  siguiente: function(){
    siguienteVideo();
  },

  quitarActual: function(){
    if(hlry.p.lstVideos.length > 0){
      hlry.p.lstVideos.shift();
    }
    else{
      alert("!es el ultimo¡, no se puede elimar");
    }
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

  crearDivFila: function(){
    hlry.p.divContenF = document.createElement('div');
    hlry.p.divIzq = document.createElement('div');
    hlry.p.divDer = document.createElement('div');
    hlry.p.divIzq.style.width = '70px';
    hlry.p.divDer.style.width = '300px';
    hlry.p.divIzq.style.display = 'inline-block';
    hlry.p.divIzq.style.marginRight = '5px';
    hlry.p.divIzq.style.textAlign = 'right';
    hlry.p.divDer.style.display = 'inline-block';
    hlry.p.divContenF.style.display = 'block';
    hlry.p.divContenF.style.marginBottom = '5px';
    hlry.p.divContenF.appendChild(hlry.p.divIzq);
    hlry.p.divContenF.appendChild(hlry.p.divDer);
  },

  crearcontrolesHTML: function(){
    //para ejecución en
    hlry.p.varConteVideo = hlry.p.iframeVideo.contentDocument.getElementById('movie_player').getElementsByTagName('video');

    //evento de etiqueta video html5
    hlry.p.varConteVideo[0].onended = hlry.m.siguienteVideo;

    hlry.p.divReproductor = document.createElement('div');
    hlry.p.divReproductor.setAttribute('id', 'divReproductor');
    hlry.p.divReproductor.style.display = 'block';
    hlry.p.divReproductor.style.paddingLeft = '5px';

    hlry.p.divSiguiente = document.createElement('div');
    //hlry.p.divSiguiente.style.marginBottom = '5px';
    hlry.p.btnSiguiente = document.createElement('button');
    hlry.p.btnSiguiente.setAttribute('id', 'btnSiguiente');
    hlry.p.btnSiguiente.innerHTML = '>>';
    hlry.p.btnSiguiente.float = 'left';
    hlry.p.btnSiguiente.addEventListener('click', hlry.m.siguienteVideo);
    hlry.p.btnQuitar = document.createElement('button');
    hlry.p.btnQuitar.setAttribute('id', 'btnQuitar');
    hlry.p.btnQuitar.innerHTML = 'X';
    hlry.p.btnQuitar.addEventListener('click', hlry.m.quitarActual);
    hlry.p.btnQuitar.float = 'right';

    hlry.p.divSiguiente.appendChild(hlry.p.btnSiguiente);
    hlry.p.divSiguiente.appendChild(hlry.p.btnQuitar);
    hlry.m.crearDivFila();
    hlry.p.divDer.appendChild(hlry.p.divSiguiente);
    hlry.p.divReproductor.appendChild(hlry.p.divContenF);

    hlry.p.divURL = document.createElement('div');
    hlry.p.divURL.style.marginBottom = '5px';
    hlry.p.lblURLV = document.createElement('label');
    hlry.p.lblURLV.setAttribute('for', 'txtUrlVideoYoutube');
    hlry.p.lblURLV.innerHTML = 'URL Video: ';
    hlry.p.txtUrlVideoYoutube = document.createElement('input');
    hlry.p.txtUrlVideoYoutube.setAttribute('id', 'txtUrlVideoYoutube');
    //hlry.p.divURL.appendChild(hlry.p.lblURLV);
    //hlry.p.divURL.appendChild(hlry.p.txtUrlVideoYoutube);
    hlry.m.crearDivFila();
    hlry.p.divIzq.appendChild(hlry.p.lblURLV);
    hlry.p.divDer.appendChild(hlry.p.txtUrlVideoYoutube);
    hlry.p.divReproductor.appendChild(hlry.p.divContenF);

    hlry.p.divCola = document.createElement('div');
    hlry.p.divCola.style.marginBottom = '5px';
    hlry.p.btnJDespues = document.createElement('button');
    hlry.p.btnCola = document.createElement('button');
    hlry.p.btnRandom = document.createElement('button');
    hlry.p.btnJDespues.setAttribute('id', 'btnJDespues');
    hlry.p.btnCola.setAttribute('id', 'btnCola');
    hlry.p.btnRandom.setAttribute('id', 'btnRandom');
    hlry.p.btnJDespues.innerHTML = 'justo despues';
    hlry.p.btnCola.innerHTML = 'al final';
    hlry.p.btnRandom.innerHTML = 'Aleatorio';
    // btnJDespues.addEventListener('onclick', hlry.m.agregarVideoDespues("'"+txtUrlVideoYoutube.value+"'"));
    // btnCola.addEventListener('onclick', hlry.m.agregarVideoAlFinal("'"+txtUrlVideoYoutube.value+"'"));
    hlry.p.btnJDespues.addEventListener('click', hlry.m.agregarVideoDespues2);
    hlry.p.btnCola.addEventListener('click', hlry.m.agregarVideoAlFinal2);
    hlry.p.btnRandom.addEventListener('click', hlry.m.agregarRandom);
    // hlry.p.divCola.appendChild(hlry.p.btnJDespues);
    // hlry.p.divCola.appendChild(hlry.p.btnCola);
    hlry.m.crearDivFila();
    hlry.p.divIzq.innerHTML = "Agregar:";
    hlry.p.divDer.appendChild(hlry.p.btnJDespues);
    hlry.p.divDer.appendChild(hlry.p.btnCola);
    hlry.p.divDer.appendChild(hlry.p.btnRandom);
    hlry.p.divReproductor.appendChild(hlry.p.divContenF);



    // hlry.p.divReproductor.appendChild(hlry.p.divSiguiente);
    // hlry.p.divReproductor.appendChild(hlry.p.divURL);
    // hlry.p.divReproductor.appendChild(hlry.p.divCola);

    hlry.p.appYT = document.getElementsByTagName('ytd-app')[0];
    hlry.p.appYT.style.position = 'inherit';
    //var container = document.getElementById('container');

    document.getElementsByTagName('body')[0].insertBefore(hlry.p.divReproductor, hlry.p.appYT);
  },

  limpiararrayUrl: function(array){
    if(array !== null || array !== undefined){
      array.forEach(function(item, index){
        array[index] = item.replace(hlry.p.urlPpal, '');

      });
    }
    return array;
  }
};
