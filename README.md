# [Master-Games Web](https://master-games.eu/)

## Instalace

Nejdříve musíme stáhnout kód z této repository. Na instalaci všech potřebných věcí je potřeba npm (node package manager) který je v NodeJs. Tudíž potřebjeme nainstalovat NodeJs a samozřejmě stáhnout či pullnou celý projekt.

### Instalace pro Deploy
```
npm install
```

### Instalace pro Development
```
npm install --save-dev
```

## Run

Pro to aby jsme web mohli rozjet jsou potřeba tyto commandy.

### Run Deployment
```
npm run build
```
`
pm2 serve -s -l 443 dist
` 
 / 
`
./web.sh
`

### Run Development
```
npm run serve
```

## Aktualizovat kód
```
git pull origin main
```

## Pm2 commands

Veškeré pm2 commandy jsou [zde](https://www.npmjs.com/package/pm2).
