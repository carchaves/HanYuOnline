palabras = ""
añadirPalabra = True

while añadirPalabra !=False:
    pinyin = input('pinyin del caracter: ')
    traduccion = input('traduccion del caracter: ')
    
    caracteres = ""
    añadirCaracter = True
    while añadirCaracter != False:
        caracter = input('caracter a agregar: ')
        caracter = caracter[0:-10] + ' width="150" height="150"' + caracter[-10:]
        
        
        respuestaValida = False
        while (respuestaValida != True):
            seguirAñadiendo = (input("agregar otro caracter?(s/n): ")).lower()
            if (seguirAñadiendo=="n"):
                respuestaValida = True
                añadirCaracter = False
            elif(seguirAñadiendo=="s"):
                respuestaValida = True
            else:
                print ("respuesta no válida")
        
        caracteres = caracteres +" "+ caracter

    
    palabra = "{\n                    //caracter \n                    caracter: '" + caracteres + "',\n                    //pinyin\n                    pinyin: '" + pinyin + "',\n                    //traduccion\n                    traduccion: '" + traduccion + "'}"
    palabras = palabras + ", \n" + palabra

    respuestaValida2 = False
    while (respuestaValida2 != True):
        seguirAñadiendo = (input("agregar otra palabra?(s/n): ")).lower()
        if (seguirAñadiendo=="n"):
            respuestaValida2 = True
            añadirPalabra = False
        elif(seguirAñadiendo=="s"):
            respuestaValida2 = True
        else:
            print ("respuesta no válida")

print(palabras)


    
    
    





