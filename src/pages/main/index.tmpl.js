const chatElement = `
{{#each chatObject}}
	<hr style="width: 80%; position: relative; left: 10%">
	<div class="chat-list__list-element">
		<div class="element__icon"></div>
		<p class="element__name">{{this.name}}</p>
		<p class="element__text-preview">{{this.text}}</p>
		<p class="element__date">{{this.date}}</p>
		<div class="element__circle circle">
			{{this.incoming}}
		</div>
	</div>
{{/each}}
`

const chatObject = {chatObject: [{
	name: "ivan",
	text: "TEXTEXT",
	date: Date().match(/..:../)[0],
	incoming: 5
}]}

for (let i = 0; i < 10; ++i)
{
	chatObject.chatObject.push({
		name: "ivan",
		text: "TEXTEXT",
		date: Date().match(/..:../)[0],
		incoming: 5
	})
}

const comp = Handlebars.compile(chatElement);

const content = comp(chatObject)

const elHelper = document.createElement("div");

elHelper.innerHTML = content;

const container = document.getElementsByClassName("chat-list__list-container")[0];

for (let i of Array.from(elHelper.children))
{
	container.appendChild(i);
}



