from bs4 import BeautifulSoup
import json
from urllib.request import urlopen

file = urlopen("https://laendercode.net/es/3-letter-list.html")

html = file.read()
file.close()

soup = BeautifulSoup(html,'html.parser')
buscar = soup.find_all("td")
cod = []



for nom in buscar:
    codigo= nom.find_all(text=True,recursive=True)
    if(codigo!=[]):
        cod.append(codigo[0])
    
p_code=[]
name=[]

for elmt in cod:
    if(len(elmt)==3):
        p_code.append(elmt)
    else:
        name.append(elmt)
    

paises={
    'p_codigo':p_code,
    'nombre':name
}

jsn_obj=json.dumps(paises,indent=4)

with open('excludes.json','w',encoding='utf-8')as outfile:
    outfile.write(jsn_obj)


