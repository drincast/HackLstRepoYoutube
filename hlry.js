/*
  autor: drincastX (https://github.com/drincast)
  Código javascript para simular una lista de reproducción de videos de youtube
  versión: 0.1.0.1
  2018-01-04
  ult mod: 2018-01-25
*/

/************************************************************************************************************/
//VERSIÓN CON CLASE PARA EL MANEJO DE LA LISTA DE REPRODUCCIÓN

//---------------------------------------------------------
//guia: copiar el código desde el comentario CODIGO INICIO hasta el comentario CODIGO final,
//luego copiarlo en la consola del browser
//luego Ejecutar la siguiente lineas
//
//hlry.m.iniciar()
//luego ejecutar la siguiente linea
//hlry.crearControlesHTML()
//con esto se crean unos controles html al inicio de la pagina, con lo cual, se puede
//cambiar al siguiente video, y agregar nuevos videos a la lista

//Si desea iniciar con una lista, puede asignarle un valor a la propiedad lstVideos
//ej hlry.p.lstVideos = ["fciL4yULkns", "hQdN437xMHg", "EU0LljxpHIk", "N9hazmsUxrM"]


//CODIGO INICIO
//Se inicia creación de clase/objeto que maneje la reproducción
hlry = {};
//para el manejo de las propiedades
hlry.p = {
  lstVideos: [],
  urlPpal: "https://www.youtube.com/watch?v=",
  indiceVideoActual: 0,
};
//parametros para etiquetas html
hlry.pHTML = {
  nodo: null,
  nodoPadre: null,
  iframeVideo: null,
  varConteVideo: null,
  divPpal: null,
  divReproductor: null,
  divMensajes: null,

  //ctrls de divReproductor
  divContenF: null,
  divIzq: null,
  divDer: null,
  divSiguiente: null,
  btnSiguiente: null,
  btnQuitarAct: null,
  btnQuitarUlt: null,
  divURL: null,
  lblURLV: null,
  txtUrlVideoYoutube: null,
  divCola: null,
  btnJDespues: null,
  btnCola: null,
  appYT: null,

  //ctrls de divMensaje
  divMsj: null,
};
//para el manejo de los métodos
hlry.m = {
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
      //console.log(txtUrlVideoYoutube.value);
      hlry.pHTML.divMsj.innerHTML = "se agrego despues: " + txtUrlVideoYoutube.value;
      txtUrlVideoYoutube.value = txtUrlVideoYoutube.value.replace(hlry.p.urlPpal, '');
      hlry.p.lstVideos.splice(1, 0, txtUrlVideoYoutube.value);
      txtUrlVideoYoutube.value = "";
    }
  },

  agregarVideoAlFinal2: function(){
    if(txtUrlVideoYoutube.value !== ""){
      //console.log(txtUrlVideoYoutube.value);
      hlry.pHTML.divMsj.innerHTML = "se agrego al final: " + txtUrlVideoYoutube.value;
      txtUrlVideoYoutube.value = txtUrlVideoYoutube.value.replace(hlry.p.urlPpal, '');
      hlry.p.lstVideos.push(txtUrlVideoYoutube.value);
      txtUrlVideoYoutube.value = "";
    }
  },

  agregarRandom: function(){
    if(txtUrlVideoYoutube.value !== ""){
      var cantidad = hlry.p.lstVideos.length;
      var posicion = Math.floor((Math.random() * (cantidad - 3)) + 3);
      //console.log("en: ", posicion, txtUrlVideoYoutube.value);
      hlry.pHTML.divMsj.innerHTML = "se agrego en: " + posicion + " - " + txtUrlVideoYoutube.value;
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
      hlry.pHTML.divMsj.innerHTML = "se elimino actual: " + hlry.p.lstVideos[0];
      hlry.p.lstVideos.shift();
    }
    else{
      alert("!es el ultimo¡, no se puede elimar");
    }
  },

  quitarUltimo: function(){
    if(hlry.p.lstVideos.length > 0){
      hlry.p.lstVideos.pop();
    }
    else{
      alert("!es el ultimo¡, no se puede elimar");
    }
  },

  actulizarNodoVideo: function(){
    hlry.pHTML.varConteVideo = hlry.pHTML.iframeVideo.contentDocument.getElementById('movie_player').getElementsByTagName('video');
    hlry.pHTML.varConteVideo[0].onended = hlry.m.siguienteVideo;
  },

  siguienteVideo: function(){
    let url;
    hlry.p.lstVideos.push(hlry.p.lstVideos[0]);
    hlry.p.lstVideos.shift();
    url = hlry.p.urlPpal + hlry.p.lstVideos[0];
    hlry.pHTML.iframeVideo.setAttribute('src', url);

    hlry.pHTML.divMsj.innerHTML = "sonando: " + url;
    setTimeout(hlry.m.actulizarNodoVideo, 7000);
  },

  iniciar: function(){
    hlry.pHTML.nodo = document.getElementById('content');
    hlry.pHTML.nodoPadre = hlry.pHTML.nodo.parentNode;
    hlry.pHTML.iframeVideo = document.createElement('iframe');
    hlry.pHTML.iframeVideo.setAttribute('id', 'iframeVideoX');
    hlry.pHTML.iframeVideo.setAttribute('style', 'width:100%; height: 800px');
    hlry.pHTML.iframeVideo.setAttribute('src', 'https://www.youtube.com/watch?v=fciL4yULkns'); //la url puede ser cualquiera de un video de youtube

    //ejecuta la carga del iframe con la url del video
    hlry.pHTML.nodo.parentNode.removeChild(hlry.pHTML.nodo);
    hlry.pHTML.nodoPadre.appendChild(hlry.pHTML.iframeVideo);
  },

  crearDivPpls: function(){
    hlry.pHTML.divPpal = document.createElement('div');
    hlry.pHTML.divPpal.setAttribute('id', 'divPpal');
    hlry.pHTML.divPpal.style.display = 'block';

    hlry.pHTML.divReproductor = document.createElement('div');
    hlry.pHTML.divReproductor.setAttribute('id', 'divReproductor');
    hlry.pHTML.divReproductor.style.width = '375px';
    hlry.pHTML.divReproductor.style.display = 'inline-block';
    hlry.pHTML.divReproductor.style.marginBottom = '5px';

    hlry.pHTML.divMensajes = document.createElement('div');
    hlry.pHTML.divMensajes.setAttribute('id', 'divMensajes');
    hlry.pHTML.divMensajes.style.display = 'inline-block';
    hlry.pHTML.divPpal.appendChild(hlry.pHTML.divReproductor);
    hlry.pHTML.divPpal.appendChild(hlry.pHTML.divMensajes);
  },

  crearCtrlDivReproductor: function(){
    hlry.pHTML.divIzq = document.createElement('div');
    hlry.pHTML.divDer = document.createElement('div');
    hlry.pHTML.divIzq.style.width = '70px';
    hlry.pHTML.divDer.style.width = '300px';
    hlry.pHTML.divIzq.style.display = 'inline-block';
    hlry.pHTML.divIzq.style.marginRight = '5px';
    hlry.pHTML.divIzq.style.textAlign = 'right';
    hlry.pHTML.divDer.style.display = 'inline-block';

    hlry.pHTML.divReproductor.appendChild(hlry.p.divIzq);
    hlry.pHTML.divReproductor.appendChild(hlry.p.divDer);
  },

  crearDivFila: function(){
    hlry.pHTML.divContenF = document.createElement('div');
    hlry.pHTML.divIzq = document.createElement('div');
    hlry.pHTML.divDer = document.createElement('div');
    hlry.pHTML.divIzq.style.width = '70px';
    hlry.pHTML.divDer.style.width = '300px';
    hlry.pHTML.divIzq.style.display = 'inline-block';
    hlry.pHTML.divIzq.style.marginRight = '5px';
    hlry.pHTML.divIzq.style.textAlign = 'right';
    hlry.pHTML.divDer.style.display = 'inline-block';
    hlry.pHTML.divContenF.style.display = 'block';
    hlry.pHTML.divContenF.style.marginBottom = '5px';
    hlry.pHTML.divContenF.appendChild(hlry.pHTML.divIzq);
    hlry.pHTML.divContenF.appendChild(hlry.pHTML.divDer);
  },

  crearCtrlDivMensajes: function(){
    hlry.pHTML.divMsj = document.createElement('div');
    hlry.pHTML.divMensajes.appendChild(hlry.pHTML.divMsj);
  },

  crearControlesHTML: function(){
    //para ejecución en
    hlry.pHTML.varConteVideo = hlry.pHTML.iframeVideo.contentDocument.getElementById('movie_player').getElementsByTagName('video');

    //evento de etiqueta video html5
    hlry.pHTML.varConteVideo[0].onended = hlry.m.siguienteVideo;

    hlry.m.crearDivPpls();

    hlry.pHTML.divSiguiente = document.createElement('div');

    hlry.pHTML.btnSiguiente = document.createElement('button');
    hlry.pHTML.btnSiguiente.setAttribute('id', 'btnSiguiente');
    hlry.pHTML.btnSiguiente.innerHTML = '>>';
    hlry.pHTML.btnSiguiente.float = 'left';
    hlry.pHTML.btnSiguiente.addEventListener('click', hlry.m.siguienteVideo);

    hlry.pHTML.btnQuitarAct = document.createElement('button');
    hlry.pHTML.btnQuitarAct.setAttribute('id', 'btnQuitarAct');
    hlry.pHTML.btnQuitarAct.innerHTML = 'XA';
    hlry.pHTML.btnQuitarAct.addEventListener('click', hlry.m.quitarActual);
    hlry.pHTML.btnQuitarAct.float = 'right';

    hlry.pHTML.btnQuitarUlt = document.createElement('button');
    hlry.pHTML.btnQuitarUlt.setAttribute('id', 'btnQuitarUlt');
    hlry.pHTML.btnQuitarUlt.innerHTML = 'XU';
    hlry.pHTML.btnQuitarUlt.addEventListener('click', hlry.m.quitarUltimo);
    hlry.pHTML.btnQuitarUlt.float = 'right';

    hlry.pHTML.divSiguiente.appendChild(hlry.pHTML.btnSiguiente);
    hlry.pHTML.divSiguiente.appendChild(hlry.pHTML.btnQuitarAct);
    hlry.pHTML.divSiguiente.appendChild(hlry.pHTML.btnQuitarUlt);

    hlry.m.crearDivFila();
    //hlry.m.crearCtrlDivReproductor();

    hlry.pHTML.divDer.appendChild(hlry.pHTML.divSiguiente);
    hlry.pHTML.divReproductor.appendChild(hlry.pHTML.divContenF);

    hlry.pHTML.divURL = document.createElement('div');
    hlry.pHTML.divURL.style.marginBottom = '5px';
    hlry.pHTML.lblURLV = document.createElement('label');
    hlry.pHTML.lblURLV.setAttribute('for', 'txtUrlVideoYoutube');
    hlry.pHTML.lblURLV.innerHTML = 'URL Video: ';
    hlry.pHTML.txtUrlVideoYoutube = document.createElement('input');
    hlry.pHTML.txtUrlVideoYoutube.setAttribute('id', 'txtUrlVideoYoutube');
    //hlry.pHTML.divURL.appendChild(hlry.pHTML.lblURLV);
    //hlry.pHTML.divURL.appendChild(hlry.pHTML.txtUrlVideoYoutube);
    hlry.m.crearDivFila();
    hlry.pHTML.divIzq.appendChild(hlry.pHTML.lblURLV);
    hlry.pHTML.divDer.appendChild(hlry.pHTML.txtUrlVideoYoutube);
    hlry.pHTML.divReproductor.appendChild(hlry.pHTML.divContenF);

    hlry.pHTML.divCola = document.createElement('div');
    hlry.pHTML.divCola.style.marginBottom = '5px';
    hlry.pHTML.btnJDespues = document.createElement('button');
    hlry.pHTML.btnCola = document.createElement('button');
    hlry.pHTML.btnRandom = document.createElement('button');
    hlry.pHTML.btnJDespues.setAttribute('id', 'btnJDespues');
    hlry.pHTML.btnCola.setAttribute('id', 'btnCola');
    hlry.pHTML.btnRandom.setAttribute('id', 'btnRandom');
    hlry.pHTML.btnJDespues.innerHTML = 'justo despues';
    hlry.pHTML.btnCola.innerHTML = 'al final';
    hlry.pHTML.btnRandom.innerHTML = 'Aleatorio';
    // btnJDespues.addEventListener('onclick', hlry.m.agregarVideoDespues("'"+txtUrlVideoYoutube.value+"'"));
    // btnCola.addEventListener('onclick', hlry.m.agregarVideoAlFinal("'"+txtUrlVideoYoutube.value+"'"));
    hlry.pHTML.btnJDespues.addEventListener('click', hlry.m.agregarVideoDespues2);
    hlry.pHTML.btnCola.addEventListener('click', hlry.m.agregarVideoAlFinal2);
    hlry.pHTML.btnRandom.addEventListener('click', hlry.m.agregarRandom);
    // hlry.pHTML.divCola.appendChild(hlry.pHTML.btnJDespues);
    // hlry.pHTML.divCola.appendChild(hlry.pHTML.btnCola);
    hlry.m.crearDivFila();
    hlry.pHTML.divIzq.innerHTML = "Agregar:";
    hlry.pHTML.divDer.appendChild(hlry.pHTML.btnJDespues);
    hlry.pHTML.divDer.appendChild(hlry.pHTML.btnCola);
    hlry.pHTML.divDer.appendChild(hlry.pHTML.btnRandom);
    hlry.pHTML.divReproductor.appendChild(hlry.pHTML.divContenF);

    hlry.m.crearCtrlDivMensajes();

    // hlry.pHTML.divReproductor.appendChild(hlry.pHTML.divSiguiente);
    // hlry.pHTML.divReproductor.appendChild(hlry.pHTML.divURL);
    // hlry.pHTML.divReproductor.appendChild(hlry.pHTML.divCola);

    hlry.pHTML.appYT = document.getElementsByTagName('ytd-app')[0];
    hlry.pHTML.appYT.style.position = 'inherit';
    //var container = document.getElementById('container');

    //document.getElementsByTagName('body')[0].insertBefore(hlry.pHTML.divReproductor, hlry.p.appYT);
    document.getElementsByTagName('body')[0].insertBefore(hlry.pHTML.divPpal, hlry.pHTML.appYT);
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
//CODIGO FIN

//listas de videos
//salsa
["hQdN437xMHg", "t15qx9F5bi8", "eqwu2NpbQT8", "xSGXNc8T9S0", "OGWUI-Z8Z4w", "wzY3oHpIMso", "tY9oa_1rZsw", "scC8I9xl4eg", "8vBeHY6yoUg", "7z2SULKMdiQ", "mvX4__COaaY", "JfoIqtyCnCU", "7KxkMLAZlzw", "q9SqG4XX8ZU", "bGizZTJs0Uo", "PqmLPeL8aj4", "H0vU9mtxZ98", "FKKl24q73vI", "akNxndZQ45A", "EhM6qKx-ECI", "uN0rmmreopE", "cQhvoL6vLXo", "27eJPzxvuG8", "J1--Eg5DPRo", "arWvQNcLKqs", "AXN-_asIaYs", "A3uIUXMJ1xc", "KS9xeYh-HWk", "XiEoCGjwN08", "rGoMd4kBxQY", "r4WWa5j-NJk", "WI0Ikrs3E_k", "6nFpUWeyDUc", "V1NiWuosRRM", "e0DWx8kG-4o", "i4PA7rvpvhk", "7HmG_XZYtZg", "jo9i8I83HIw", "XIoUz-nEu0g", "ZChfr2rhQEg", "z1LLPvhpCQE", "q9SqG4XX8ZU", "eu-A5X_x3k4", "yt8_NLgNfQw", "E9iIBCO3vlE", "7vuYeJ1gSSE", "x6EGixAn7Lk", "J1--Eg5DPRo", "FEWDArMv6GU", "3H2rE2i_fL4", "xTHmHHhk3WY", "UKBlYmqDf4I", "PHbvY3WGImE", "hDTkzhvUhwM", "t6j1fuwRGQ4", "VrTkv3vMCvw", "ZBlDF78IGc8", "xJHHMDLqJAA", "zVZHqpgQvlg", "CIcDWHxR-ao", "sqmIOptW8Jo", "OvQArMzHt90", "HRt8Ho_eyEM", "zwUJIgBJhZg", "C5ihFyxaUMo", "JYxIhRYv_nc", "L6GI1r2teW4", "1j3QHyBOyhg", "0wWRdgEw1I0", "LuqGyeJgT6E", "XixGgMfaJck", "RGqQXW_qblg", "1ZguRilbRjA", "ghjFffX25cw", "83h-cjtfTgE", "coW-lY_uHWM", "QkZscosb6mM", "dJ43r_jswQM", "hd0cl2d2ziU", "Njkg2ubUaug", "fciL4yULkns", "KU4LpLKwez4", "rGoMd4kBxQY", "k4ZYi0DbpTY", "NB4x_QqZECw", "AYc8SC5nnNA", "wU52X9duq6U", "cEz2J24LLUw", "oz13wzHmEWM", "j_CfZK8FPqY", "BUCtau7a7Ak", "_EQIyt5-z0I", "C5ihFyxaUMo", "HOEyK-UHXEA", "KU4LpLKwez4", "m5_NNJSpPUM", "v2zARXKRHVg", "DZtGjOqqlbE", "SYMx8kT4c7U", "ket82fTGQpg", "-L-lSzDeZw8", "0ykUIOdmkj8", "bXA1agPWzg0", "PDUYfpDhD40", "5eQamJHEue8", "QBuueYkmYVI", "5UWk3_e6edg", "ygC21anaSwA", "JcASh0OpWoU", "4YAoWksQhw4", "OvQArMzHt90", "pk7MrZ-_7iQ", "PdoNzV19vng", "7DikmNa_gg0"]

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


///https://www.youtube.com/watch?v=y9uqsn33MS4
