---
cssclass: dashboard
banner: "![[home.webp]]"
banner_y: 0.404
obsidianUIMode: preview
---

# Universidad

| Hora          | Lunes                     | Martes                                | Miércoles              | Jueves                  |
| ------------- | ------------------------- | ------------------------------------- | ---------------------- | ----------------------- |
| 14:35 - 15:35 | Ingeniería de Software   |                                       |                        |                         |
| 15:40 - 16:40 | Redes de computadoras     | Ingeniería de Software                |                        |                         |
| 16:45 - 17:45 | Tecnologías para la web   | Gestión de bases de datos             |                        |                         |
| 18:00 - 18:59 | Gestión de bases de datos | Redes de computadoras                 | Ingeniería de Software | Tecnologías para la web |
| 19:00 - 19:59 | Interfaces y multimedia   | Redes de computadoras                 |                        | Tecnologías para la web |
| 20:00 - 20:59 | Interfaces y multimedia   | Administración de sistemas operativos |                        |                         |
| 21:00 - 21:59 |                           | Administración de sistemas operativos |                        |                         |
- ##### Ingenieria de Software
`$=dv.list(dv.pages("#Universitario/ingSoftware").limit(4).file.link)`
- ##### Administracion de Sistemas Operativos
`$=dv.list(dv.pages("#Universitario/adminSO").limit(4).file.link)`
- ##### Gestion de Bases de Datos
`$=dv.list(dv.pages("#Universitario/gestionDB").limit(4).file.link)`
- ##### Interfaces y multimedia 
`$=dv.list(dv.pages("#Universitario/interfacesMultimedia").limit(4).file.link)`
- ##### Redes de Computadoras
`$=dv.list(dv.pages("#Universitario/redesComputadoras").limit(4).file.link)`
- ##### Tecnologias para la Web
`$=dv.list(dv.pages("#Universitario/techWeb").limit(4).file.link)`
# Universidad
```dataviewjs
const calendarData = {
    year: 2022,  // (optional) defaults to current year
    colors: {    // (optional) defaults to green
        blue:        ["#8cb9ff", "#69a3ff", "#428bff", "#1872ff", "#0058e2"], // first entry is considered default if supplied
        green:       ["#c6e48b", "#7bc96f", "#49af5d", "#2e8840", "#196127"],
        red:         ["#ff9e82", "#ff7b55", "#ff4d1a", "#e73400", "#bd2a00"],
        orange:      ["#ffa244", "#fd7f00", "#dd6f00", "#bf6000", "#9b4e00"],
        pink:        ["#ff96cb", "#ff70b8", "#ff3a9d", "#ee0077", "#c30062"],
        orangeToRed: ["#ffdf04", "#ffbe04", "#ff9a03", "#ff6d02", "#ff2c01"]
    },
    showCurrentDayBorder: true, // (optional) defaults to true
    defaultEntryIntensity: 4,   // (optional) defaults to 4
    intensityScaleStart: 10,    // (optional) defaults to lowest value passed to entries.intensity
    intensityScaleEnd: 100,     // (optional) defaults to highest value passed to entries.intensity
    entries: [],                // (required) populated in the DataviewJS loop below
}

for(let page of dv.pages('"dailyNotes"').where(p=>p.universidad)) {
	calendarData.entries.push({
		date: page.file.name,
		intensity: page.universidad,
		color: "red"
	})
}

renderHeatmapCalendar(this.container, calendarData)
```
```dataviewjs

```
# Dormir
```dataviewjs
const calendarData = {
    year: 2022,  // (optional) defaults to current year
    colors: {    // (optional) defaults to green
        blue:        ["#8cb9ff", "#69a3ff", "#428bff", "#1872ff", "#0058e2"], // first entry is considered default if supplied
        green:       ["#c6e48b", "#7bc96f", "#49af5d", "#2e8840", "#196127"],
        red:         ["#ff9e82", "#ff7b55", "#ff4d1a", "#e73400", "#bd2a00"],
        orange:      ["#ffa244", "#fd7f00", "#dd6f00", "#bf6000", "#9b4e00"],
        pink:        ["#ff96cb", "#ff70b8", "#ff3a9d", "#ee0077", "#c30062"],
        orangeToRed: ["#ffdf04", "#ffbe04", "#ff9a03", "#ff6d02", "#ff2c01"]
    },
    showCurrentDayBorder: true, // (optional) defaults to true
    defaultEntryIntensity: 4,   // (optional) defaults to 4
    intensityScaleStart: 10,    // (optional) defaults to lowest value passed to entries.intensity
    intensityScaleEnd: 100,     // (optional) defaults to highest value passed to entries.intensity
    entries: [],                // (required) populated in the DataviewJS loop below
}

for(let page of dv.pages('"dailyNotes"').where(p=>p.dormir)) {
	calendarData.entries.push({
		date: page.file.name,
		intensity: page.dormir,
		color: "blue"
	})
}

renderHeatmapCalendar(this.container, calendarData)
```
# Github
```dataviewjs
const calendarData = {
    year: 2022,  // (optional) defaults to current year
    colors: {    // (optional) defaults to green
        blue:        ["#8cb9ff", "#69a3ff", "#428bff", "#1872ff", "#0058e2"], // first entry is considered default if supplied
        green:       ["#c6e48b", "#7bc96f", "#49af5d", "#2e8840", "#196127"],
        red:         ["#ff9e82", "#ff7b55", "#ff4d1a", "#e73400", "#bd2a00"],
        orange:      ["#ffa244", "#fd7f00", "#dd6f00", "#bf6000", "#9b4e00"],
        pink:        ["#ff96cb", "#ff70b8", "#ff3a9d", "#ee0077", "#c30062"],
        orangeToRed: ["#ffdf04", "#ffbe04", "#ff9a03", "#ff6d02", "#ff2c01"]
    },
    showCurrentDayBorder: true, // (optional) defaults to true
    defaultEntryIntensity: 4,   // (optional) defaults to 4
    intensityScaleStart: 10,    // (optional) defaults to lowest value passed to entries.intensity
    intensityScaleEnd: 100,     // (optional) defaults to highest value passed to entries.intensity
    entries: [],                // (required) populated in the DataviewJS loop below
}

for(let page of dv.pages('"dailyNotes"').where(p=>p.github)) {
	calendarData.entries.push({
		date: page.file.name,
		intensity: page.github,
		color: "green"
	})
}

renderHeatmapCalendar(this.container, calendarData)
```
# Vault Info
- 🗄️ Recientes
 `$=dv.list(dv.pages('').sort(f=>f.file.mtime.ts,"desc").limit(4).file.link)`
- 〽️ Estadisticas
	-  Numero de Documentos: `$=dv.pages().length`
	-  Personal recipes: `$=dv.pages('"Family/Recipes"').length`