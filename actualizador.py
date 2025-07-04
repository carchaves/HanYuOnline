from bs4 import BeautifulSoup
import requests

def obtenerPagina(urlAsk):
    url = str(urlAsk)

    r = requests.get(url)
    return BeautifulSoup(r.text, 'html.parser')

def anadirCaracter(url):
    with open('caracteres.txt', 'r',encoding="utf-8") as file:
        caracteresAnterioresObjeto = file.read().splitlines()
    
    caracteresAnteriores = []
    
    for caracter in caracteresAnterioresObjeto:
        partes = caracter.split(" : ")
        caracteresAnteriores.append(partes[0])

    pagina = obtenerPagina(url)

    object = pagina.find('object')
    objectString = str(object)
    objectString = objectString.replace("></object>", ' width=\"150\" height=\"150\"></object>')

    titulo = object.get('title')
    tituloString = str(titulo)
    tituloString = tituloString.replace(" ", "_")
    tituloString = tituloString.replace("(", "")
    tituloString = tituloString.replace(")", "")
    tituloString = tituloString.replace("/", "")
    tituloString = tituloString.replace("_orden_de_los_trazos", "")
    tituloString = tituloString.replace("__", "_")

    if not(tituloString in caracteresAnteriores):
        with open("caracteres.txt", "a", encoding="utf-8") as file:
            file.writelines([",\n",tituloString, " : ","\'", objectString,"\'"])
    
    return tituloString




opcion = int(input("añadir caracter [1], añadir palabra [2]: "))

if opcion==1:
    while True:
        url = input("url?: ")
        anadirCaracter(url)
elif opcion==2:
    
    with open('categorias.txt', 'r') as file:
        categorias = file.read().splitlines()

    while True:

        # -comun-
        url = input("url?: ")
        pagina = obtenerPagina(url)

        # categoria
        print("0 : [añadir categoría]")
        for i in range(1,len(categorias)):
            print(str(i)+" : "+categorias[i])

        categoriaInput = int(input("elección?: "))

        if categoriaInput==0:
            categoriaNueva= str(input("Categoria Nueva: "))
            
            categorias.append(categoriaNueva)

            with open("categorias.txt", "a", encoding="utf-8") as file:
                file.write(categoriaNueva+"\n")
            categoria = categoriaNueva
        else:
            categoria = categorias[categoriaInput]
        
        #pinyin

        pinyin = pagina.find('span',{'itemprop':'name'})
        pinyin = pinyin.get_text()

        #traduccion
        tablaConInformacion = pagina.find('div', {'class': 'outerTableBorder principalText'})
        filasConInformacion = tablaConInformacion.find_all('div', {'class': 'visible-row'})
        filaConTraduccion = filasConInformacion[2]
        celdaConTraduccion = filaConTraduccion.find('div', {'class':'word-right floatLeft'})
        pConTraduccion = celdaConTraduccion.find('b')        
        traduccion = pConTraduccion.get_text()

        traduccionComprobador = str(input(traduccion+"??: "))
        
        if traduccionComprobador!="":
            traduccion = traduccionComprobador

        #caracter

        caracteresSpan = pagina.find_all('span', {'class': 'enlargeOnMobile'})
        caracteres = []

        if caracteresSpan!=[]:
            for span in caracteresSpan:
                linkDeCaracteres = span.find('a')
                linkDeCaracteres = linkDeCaracteres.get('href')
                caracteres.append(anadirCaracter(linkDeCaracteres))
        else:
            caracteres.append(anadirCaracter(url))
        
        with open("palabras.txt", "a", encoding="utf-8") as file:
            file.write(",\n{")
            file.write("categoria: " + "\"" + categoria + "\",\n")
            file.write("//pinyin\n")
            file.write("pinyin: " + "\"" + pinyin + "\",\n")
            file.write("//traduccion\n")
            file.write("traduccion: " + "\"" + traduccion + "\",\n")
            file.write("//caracter\n")
            file.write("caracter: ")
            file.write("diCh."+caracteres[0])


            for caracter in caracteres[1:]:
                file.write(" + diCh."+caracter)
            file.write("\n")
            file.write("}")