from bs4 import BeautifulSoup
import requests

opcion = int(input("añadir caracter [1], añadir palabra [2]: "))

if opcion==1:
    while True:
        url = str(input("url?: "))

        r = requests.get(url)
        pagina = BeautifulSoup(r.text, 'html.parser')


        object = pagina.find('object')
        objectString = str(object)
        objectString = objectString.replace("></object>", ' width=\"150\" height=\"150\"></object>')

        titulo = object.get('title')
        tituloString = str(titulo)
        tituloString = tituloString.replace(" ", "_")

        with open("resultado.txt", "a", encoding="utf-8") as file:
            file.writelines([tituloString, " : ","\"", objectString,"\"", "\n"])
elif opcion==2:
    
    with open('categorias.txt', 'r') as file:
        categorias = file.read().splitlines()

    while True:
        # -comun-
        url = str(input("url?: "))

        r = requests.get(url)
        pagina = BeautifulSoup(r.text, 'html.parser')

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

        traduccion = pagina.find_all('div', {'class': 'word-right floatLeft'})


        print(categoria)
        print(pinyin)
        print(traduccion)

