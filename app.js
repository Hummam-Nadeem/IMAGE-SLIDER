const img = document.getElementById("img")
img.src = './image/a.jpg'
let a = 3;

img.addEventListener('click', (event) => {
	const Xaxis = event.clientX;
	console.log(event.clientX);

	a++
	switch (a) {
		case 1:
			img.src = './image/a.jpg'
	
			break;
		case 2:
			img.src = './image/d.jpeg'
			break;
		case 3:
			img.src = './image/gh.jpeg'
			break;
			case 4:
				img.src = './image/f.jpg'
				break;
			default:
			img.src = './image/h.jpg'
			break;
	}
	console.log(a)
	if (a > 8 || a < 0) a = 1
});