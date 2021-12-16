# [Master-Games Web](https://master-games.eu/)

## Installation

Nejdříve musíme stáhnout kód z této repository. Na instalaci všech potřebných věcí je potřeba npm (node package manager) který je v NodeJs. Tudíž potřebjeme nainstalovat NodeJs. 

Nainstalujeme veškeré věci potřebné pro to aby web běžel.

```
npm install
```

Nainstalujeme serveJS pro run webu.

```
npm install serve -g
```

Nainstalujeme pm2 pro deploy.
```
npm install pm2 -g
```

Nainstalujeme bootstrap pro základ UI.
```
npm install bootstrap -g
```


Nyní by vše mělo být nainstalované a připravené k deploymentu.

## Deployment

Nejdříve musíme udělat produkční verzi webu.
```
npm run build
```

### Nyní máme 2 možnosti jak deploynout web. Jednu přes skript a druhou přes pm2.

Pm2 verze deploye.
```
pm2 serve -s -l 443 dist
```

Script verze deploye.
```
./web.sh
```



### Pm2 commands

Veškeré pm2 commandy jsou [zde](https://www.npmjs.com/package/pm2).
