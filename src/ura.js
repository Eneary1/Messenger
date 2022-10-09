const g = document.getElementById("root");

const k = `
{{#each k}}
<div>{{full}}</div>
{{/each}}
`
Handlebars.registerHelper('full', function () {
    return this.first + ' ' + this.last
})

const h = Handlebars.compile(k)

let j = h({
	k: [
		{
			first: "ura",
			last: "neveroyatno"
		},
		{
			first: "ura1",
			last: "neveroyatno1"
		}
	]
})

const tag = j.match(/(?<=<).[^\s>]+/)[0]

console.log(tag)

let elem = document.createElement(tag)

elem.innerHTML = j

g.textContent = "";

for (let k of Array.from(elem.children))
g.appendChild(k)