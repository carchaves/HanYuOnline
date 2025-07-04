from bs4 import BeautifulSoup
import requests

opcion = int(input("añadir caracter [1], añadir palabra [2]: "))

def obtenerPagina(urlAsk):
    url = str(urlAsk)

    r = requests.get(url)
    return BeautifulSoup(r.text, 'html.parser')


if opcion==1:
    while True:
        url = input("url?: ")
        pagina = obtenerPagina(url)

        object = pagina.find('object')
        objectString = str(object)
        objectString = objectString.replace("></object>", ' width=\"150\" height=\"150\"></object>')

        titulo = object.get('title')
        tituloString = str(titulo)
        tituloString = tituloString.replace(" ", "_")
        tituloString = tituloString.replace("_orden_de_los_trazos", "")

        with open("resultado.txt", "a", encoding="utf-8") as file:
            file.writelines([tituloString, " : ","\"", objectString,"\"", "\n"])
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
        else:
            categoria = categorias[categoriaInput]
        
        #pinyin

        pinyin = pagina.find('span',{'itemprop':'name'})
        pinyin = pinyin.get_text()

        #pinyin
        traduccion = pagina.find('div', {'class': 'word-right floatLeft'})
        traduccion = traduccion.find('b')
        if traduccion:
            traduccion = traduccion.get_text()
        else:
            traduccion = str(traduccion)

        #caracter

        caracteresSpan = pagina.find_all('span', {'class': 'enlargeOnMobile'})
        caracteres = []
        for span in caracteresSpan:
            link = span.find('a')
            link = link.get('href')
            paginaDeCaracter = obtenerPagina(link)
            object = paginaDeCaracter.find('object')
            titulo = object.get('title')
            tituloString = str(titulo)
            tituloString = tituloString.replace(" ", "_")
            tituloString = tituloString.replace("_orden_de_los_trazos", "")
            caracteres.append(tituloString)

        
        with open("resultado.txt", "a", encoding="utf-8") as file:
            file.write("{")
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
            file.write("},\n")