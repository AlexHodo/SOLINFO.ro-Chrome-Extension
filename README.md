# SOLINFO.ro-Chrome-Extension

## Instalare din Chrome Web Store
Extensia este acum disponibilă pe Chrome Web Store [aici](https://chrome.google.com/webstore/detail/solinforo/abmhdbimjkobbjbdbafjnamidmjkopkh).
 
## Instalare manuală
- Descarcă arhiva _extension.zip_
- Dezarhivează într-un folder pe PC-ul tău
- Intră pe chrome://extensions (Sau _setări_ > _extensii_)
- Bifează _Developer mode_
- Click pe _Load unpacked_
- Selectează folderul creat în urma dezarhivării

### Compilare pe propriul calculator
Extensia a fost creată folosind ReactJS. Pentru a o compila direct pe PC-ul tău, urmează pașii de mai jos:
- Instalează _git_ și _npm_ pe PC-ul tău
- Crează un nou folder și deschide-l în terminal / cmd
```
git clone https://github.com/AlexHodo/SOLINFO.ro-Chrome-Extension
cd SOLINFO.ro-Chrome-Extension
npm install
npm run build
```
- Un nou folder build va fi creat. Urmează pașii din prima secțiune pentru a instala extensia și selectează _SOLINFO.ro-Chrome-Extension/build_ în locul folderului creat prin dezarhivare.
