 

function mostrar(div,id){
            const checkboxes = document.getElementById(id)
            var dis = "none"
            if(checkboxes.checked){
                dis = "block";
            }
            document.getElementById(div).style.display = dis;
}

let caracteresPinyinTraduccion = [
    {   
        //pinyin
        pinyin: 'zhè',        
        //traduccion
        traduccion: 'este, eso',
        //caracter
        caracter: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36825.svg" title="这 ( zhe / zhè ) orden de los trazos" width="150" height="150"></object>'

    },
    {   
        //pinyin
        pinyin: 'nà',        
        //traduccion
        traduccion: 'aquel',
        //caracter
        caracter: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/37027.svg" title="那 ( na / nà ) orden de los trazos" width="150" height="150"></object>'

    },
    {   
        //pinyin
        pinyin: 'zhèr',        
        //traduccion
        traduccion: 'aquí',
        //caracter
        caracter: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/36825.svg" title="这 ( zhe / zhè ) orden de los trazos" width="150" height="150"></object> <object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20799.svg" title="儿 ( er / ér ) orden de los trazos" width="150" height="150"></object>'

    },
    {   
        //pinyin
        pinyin: 'nàr',        
        //traduccion
        traduccion: 'hay',
        //caracter
        caracter: '<object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/37027.svg" title="那 ( na / nà ) orden de los trazos" width="150" height="150"></object> <object id="ccwSvg" class="ccwSvg" type="image/svg+xml" data="https://www.hantrainerpro.com/dictionary/chinese-character-animations/20799.svg" title="儿 ( er / ér ) orden de los trazos" width="150" height="150"></object>'

    }
];

let bufferCaracteres = [];
let bufferPinyin = [];
let bufferTraduccion = [];
for (const e of caracteresPinyinTraduccion) {
    caracter = e.caracter
    pinyin = e.pinyin;
    traduccion = e.traduccion;
    
    bufferCaracteres.push(caracter);
    bufferPinyin.push(pinyin);
    bufferTraduccion.push(traduccion);
}

function generarEnteroAleatorio(cantidadImagenes) {
    return Math.floor(Math.random() * cantidadImagenes);
}    

function cargarImagenAleatoria(){
    let indiceAleatorio = generarEnteroAleatorio(caracteresPinyinTraduccion.length);
    let caracterAleatorio = bufferCaracteres[indiceAleatorio];
    let pinyinAleatorio = bufferPinyin[indiceAleatorio];
    let traduccionAleatoria = bufferTraduccion[indiceAleatorio];
    
    document.getElementById("hanzi").innerHTML=caracterAleatorio;
    document.getElementById("PinYin").innerHTML=pinyinAleatorio;
    document.getElementById("traduccion").innerHTML=traduccionAleatoria;
}

    