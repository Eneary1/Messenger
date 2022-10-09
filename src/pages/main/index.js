const elems = document.getElementsByClassName("chat-list__list-element");

let obj = {
	elem: null
};

for (let i = 0; i < elems.length; ++i)
{
	elems[i].onclick = function(){
		if (this.classList.contains("checked")) return;
		if (obj.elem !== null) obj.elem.classList.remove("checked");
		this.classList.add("checked");
		obj.elem = this;
	}
}