var image = ["photo/bes.jpg","photo/bir.jpg","photo/dort.jpg","photo/uc.jpg"];

i=0;
function bir(){
	i++;
	if(i==4){
		i=0;
	}
	document.getElementsByTagName('img')[0].src = image[i];
}

var image = ["photo/uc.jpg","photo/dort.jpg","photo/bir.jpg","photo/bes.jpg"];
i=0;
function iki(){
	i++;
	if(i==4){
		i=0;
	}
	document.getElementsByTagName('img')[0].src = image[i];
}