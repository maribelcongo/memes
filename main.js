//-----------------------------------------------VARIABLES-------------------------------------------------------//

const body = document.querySelector('body');

// VARIABLES HEADER
const textButton = document.querySelector('#text-button');
const imgButton = document.querySelector('#img-button');
const lightModeButton = document.querySelector('#light-mode-button');
const darkModeButton = document.querySelector('#dark-mode-button');

// VARIABLES MAIN

const imgMeme = document.getElementById('meme-img');
const topTextInMemebox = document.getElementById("top-text-in-memebox");
const memeBox = document.getElementById("meme-box");
const bottomTextInMemebox = document.getElementById("bottom-text-in-memebox");
const downloadButton = document.querySelector('.download-button');

// VARIABLES ASIDE

const asidePanel = document.getElementById("aside-panel");

// VARIABLES PANEL IMAGEN
const imgPanel = document.querySelector('.img-panel');
const imgClosePanel = document.querySelector('.img-panel-close');
const filterButton = document.querySelector('.filter-button');

// VARIABLES INPUT-RANGE IMAGEN

const brightness = document.querySelector('#brightness');
const opacity = document.querySelector('#opacity');
const contrast = document.querySelector('#contrast');
const inputBlur = document.querySelector('#blur');
const grayscale = document.querySelector('#grayscale');
const sepia = document.querySelector('#sepia');
const hueRotate = document.querySelector('#hue');
const saturate = document.querySelector('#saturate');
const invert = document.querySelector('#invert');

//VARIABLES INPUT IMAGEN

const urlInput = document.querySelector('#url-input');
const selectBackground = document.querySelector('#select-background');
const colorBackground = document.querySelector('#color-background');
const colorBackgroundImage = document.querySelector('#input-background-image');
const inputBackgroundTextSpan = document.getElementById("input-background-text");
const colorInputFontTextSpan = document.getElementById("input-font-color-text-span");

// VARIABLES PANEL TEXTO

const textPanel = document.querySelector('#text-panel');
const buttonNoOutline = document.querySelector('#button-no-outline');
const buttonLightOutline = document.querySelector('#button-light-outline');
const buttonDarkOutline = document.querySelector('#button-dark-outline');


// VARIABLES INPUT TEXTO

const topTextInput = document.getElementById("top-text-input");
const bottomTextInput = document.getElementById("bottom-text-input");
const hideTopText = document.getElementById("hide-top-text");
const hideBottomText = document.getElementById("hide-bottom-text");
const fontSizeInput = document.getElementById("font-size-input");
const textAlignLeft = document.getElementById("text-align-left");
const textAlignCenter = document.getElementById("text-align-center");
const textAlignRight = document.getElementById("text-align-right");
const paddingInput = document.getElementById("padding-input");
const selectFont = document.getElementById("select-font");
const textColorInput = document.getElementById("font-color-input");
const textBackgroundInput = document.getElementById("text-background-input");
const textBackgroundTransparent = document.getElementById("transparent-background-checkbox");
const spaceLineInput = document.getElementById("spaceline-input");


// VARIABLES RESPONSIVE

const medidaMemeBox = document.querySelector(".meme-box");
const clientWidth = medidaMemeBox.clientWidth;
const clientHeight = medidaMemeBox.clientHeight;


//-----------------------------------------FUNCIONALIDAD MODO OSCURO----------------------------------------------//

const switchMode = () => {
    body.classList.toggle('light-mode');
    darkModeButton.classList.toggle('disappear');
    lightModeButton.classList.toggle('disappear');
}

lightModeButton.onclick = switchMode;
darkModeButton.onclick = switchMode;

//-------------------------------------FUNCIONALIDAD BOTONES TEXTO/IMAGEN--------------------------------------//

textButton.onclick = () => {
    asidePanel.classList.add("menu-text");
}

imgButton.onclick = () => {
    asidePanel.classList.remove("menu-text");
}

//-------------------------------------FUNCIONALIDAD BOTON DE DESCARGA------------------------------------------//

downloadButton.onclick = () => {
	domtoimage.toBlob(memeBox)
    .then(function (blob) {
        window.saveAs(blob, 'my-meme.png');
    });
}


//----------------------------------------- FUNCIONALIDADES TEXTO------------------------------------------------//

// FUNCIONALIDAD INPUTS TEXTO INFERIOR Y SUPERIOR

topTextInput.oninput = () => { 
    topTextInMemebox.innerText = topTextInput.value;
}
bottomTextInput.oninput = () => {
    bottomTextInMemebox.innerText = bottomTextInput.value;
}

// FUNCIONALIDAD OCULTAR TEXTO SUPERIOR E INFERIOR

hideTopText.onclick = () => {
    topTextInMemebox.classList.toggle("disappear");
}

hideBottomText.onclick = () => {
    bottomTextInMemebox.classList.toggle("disappear");
}

// FUNCIONALIDAD TIPO Y TAMAÑO DE FUENTE

selectFont.oninput = () => {
    topTextInMemebox.style.fontFamily = selectFont.value;
    bottomTextInMemebox.style.fontFamily = selectFont.value;
}

fontSizeInput.oninput = () => {
    topTextInMemebox.style.fontSize = fontSizeInput.value + "px";
    bottomTextInMemebox.style.fontSize = fontSizeInput.value + "px";
}

// FUNCIONALIDAD ALINEAR TEXTO

textAlignLeft.onclick = () => {
    topTextInMemebox.style.textAlign = "left";
    bottomTextInMemebox.style.textAlign = "left";
}

textAlignCenter.onclick = () => {
    topTextInMemebox.style.textAlign = "center";
    bottomTextInMemebox.style.textAlign = "center";
}
textAlignRight.onclick = () => {
    topTextInMemebox.style.textAlign = "right";
    bottomTextInMemebox.style.textAlign = "right";
}

// FUNCIONALIDAD COLOR DE TEXTO

colorInputFontTextSpan.textContent = textColorInput.value.toUpperCase();

textColorInput.oninput = () => {
    topTextInMemebox.style.color = textColorInput.value;
    bottomTextInMemebox.style.color = textColorInput.value;
    colorInputFontTextSpan.textContent = textColorInput.value.toUpperCase();
}

// FUNCIONALIDAD COLOR DE FONDO DEL TEXTO

inputBackgroundTextSpan.textContent = textBackgroundInput.value.toUpperCase();

textBackgroundInput.oninput = () => {
    if (textBackgroundTransparent.checked) {
        topTextInMemebox.style.backgroundColor = "transparent";
        bottomTextInMemebox.style.backgroundColor = "transparent";
    } else {
    topTextInMemebox.style.backgroundColor = textBackgroundInput.value;
    bottomTextInMemebox.style.backgroundColor = textBackgroundInput.value;
    }

inputBackgroundTextSpan.textContent = textBackgroundInput.value.toUpperCase();
}

textBackgroundTransparent.onclick = () => {
    if (textBackgroundTransparent.checked) {
        topTextInMemebox.style.backgroundColor = "transparent";
        bottomTextInMemebox.style.backgroundColor = "transparent";
        bottomTextInMemebox.style.position = "absolute";
        topTextInMemebox.style.position = "absolute";
        bottomTextInMemebox.style.bottom = "0";

    } else {
        bottomTextInMemebox.style.position = "static";
        topTextInMemebox.style.position = "static";
        topTextInMemebox.style.backgroundColor = textBackgroundInput.value;
        bottomTextInMemebox.style.backgroundColor = textBackgroundInput.value;
    }

}

// FUNCIONALIDAD CONTORNO

const noOutline = () => {
    topTextInMemebox.style.textShadow = ("none")
    bottomTextInMemebox.style.textShadow = ("none")   
}
buttonNoOutline.onclick = noOutline

const lightOutline = () => {
    topTextInMemebox.style.textShadow = ("2px 2px 0 #FFFFFF, 2px -2px 0 #FFFFFF, -2px 2px 0 #FFFFFF, -2px -2px 0 #FFFFFF, 2px 0px 0 #FFFFFF, 0px 2px 0 #FFFFFF, -2px 0px 0 #FFFFFF, 0px -2px 0 #FFFFFF")
    bottomTextInMemebox.style.textShadow = ("2px 2px 0 #FFFFFF, 2px -2px 0 #FFFFFF, -2px 2px 0 #FFFFFF, -2px -2px 0 #FFFFFF, 2px 0px 0 #FFFFFF, 0px 2px 0 #FFFFFF, -2px 0px 0 #FFFFFF, 0px -2px 0 #FFFFFF")   
}
buttonLightOutline.onclick = lightOutline

const darkOutline = () => {
    topTextInMemebox.style.textShadow = ("2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000, -2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000, -2px 0px 0 #000000, 0px -2px 0 #000000")
    bottomTextInMemebox.style.textShadow = ("2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000, -2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000, -2px 0px 0 #000000, 0px -2px 0 #000000")   
}
buttonDarkOutline.onclick = darkOutline

// FUNCIONALIDAD ESPACIADO

paddingInput.oninput = () => {
    topTextInMemebox.style.padding = paddingInput.value + "px";
    bottomTextInMemebox.style.padding = paddingInput.value + "px";
}

// FUNCIONALIDAD INTERLINEADO

spaceLineInput.oninput = () => {
    topTextInMemebox.style.lineHeight = spaceLineInput.value;
    bottomTextInMemebox.style.lineHeight = spaceLineInput.value;  

}


//---------------------------------------FUNCIONALIDADES IMAGEN-----------------------------------------------//

// FUNCIONALIDAD INPUT URL/IMAGEN MEME

urlInput.oninput = () => {
    imgMeme.style.backgroundImage = `url("${urlInput.value}")`
}

// FUNCIONALIDAD INPUT COLOR FONDO

let colorBackgroundValue = colorBackground.value.toUpperCase();
colorBackgroundImage.textContent = `${colorBackgroundValue}`

colorBackground.oninput = () => {
    imgMeme.style.backgroundColor = `${colorBackground.value}`;
    colorBackgroundValue = colorBackground.value.toUpperCase()
    colorBackgroundImage.textContent = `${colorBackgroundValue}`;
}

// FUNCIONALIDAD FONDO - PRESETS

selectBackground.onchange = () => {
    imgMeme.style.backgroundBlendMode = `${selectBackground.value}`;
}

// FUNCIONALIDAD FILTROS IMAGEN

const changeFilters = () => {
    imgMeme.style.filter =
      `brightness(${brightness.value})
      opacity(${opacity.value})
      contrast(${contrast.value}%)
      blur(${inputBlur.value}px)
      grayscale(${grayscale.value}%)
      sepia(${sepia.value}%)
      hue-rotate(${hueRotate.value}deg)
      saturate(${saturate.value}%)
      invert(${invert.value})`;
  };

  brightness.onchange = changeFilters
  opacity.onchange = changeFilters
  contrast.onchange = changeFilters
  inputBlur.onchange = changeFilters
  grayscale.onchange = changeFilters
  sepia.onchange = changeFilters
  hueRotate.onchange = changeFilters
  saturate.onchange = changeFilters
  invert.onchange = changeFilters


//FUNCIONALIDAD BOTON REESTABLECER

const restore = () => {
    brightness.value = "1";
    imgMeme.style.filter = "brightness(1)";
    opacity.value = "1";
    imgMeme.style.filter = "opacity(1)";
    contrast.value = "100";
    imgMeme.style.filter = "contrast(100%)";
    inputBlur.value = "0";
    imgMeme.style.filter = "blur(0px)";
    grayscale.value = "0"
    imgMeme.style.filter = "grayscale(0%)";
    sepia.value = "0";
    imgMeme.style.filter = "sepia(0%)";
    hueRotate.value = "0";
    imgMeme.style.filter = "hue-rotate(0deg)";
    saturate.value = "100";
    imgMeme.style.filter = "saturate(100%)";
    invert.value = "0";
    imgMeme.style.filter = "invert(0)";
}

filterButton.onclick = restore

//---------------------------------------FUNCIONALIDADES RESPONSIVE-----------------------------------------------//

const responsiveHeight = () =>{  
    if (clientWidth !== clientHeight) {
        medidaMemeBox.style.height = clientWidth + "px"
        }
    }
    
    responsiveHeight()
    
    window.onresize = resize;
    
    function resize()
    {
        const clientWidth = medidaMemeBox.clientWidth
        const clientHeight = medidaMemeBox.clientHeight
        medidaMemeBox.style.height = clientWidth + "px"
          
    }

// FUNCIONALIDAD ABRIR PANELES RESPONSIVE
const imgPanelOpen = () => {
    if (asidePanel.style.display = "none") {
        asidePanel.style.display = "block"
        asidePanel.classList.remove("menu-text");
    }
}

imgButton.onclick = imgPanelOpen


const textPanelOpen = () => {
    if (asidePanel.style.display = "none") {
        asidePanel.style.display = "block"
        asidePanel.classList.add("menu-text");
        
    }
}

textButton.onclick = textPanelOpen

// FUNCIONALIDAD CERRAR PANELES RESPONSIVE

const imgPanelOculto = () => {
    asidePanel.style.display = "none" 
}
imgClosePanel.onclick = imgPanelOcult