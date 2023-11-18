/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button');
const searchClose = document.getElementById('search-close');
const searchContetnt= document.getElementById('search-content');

if(searchButton){
	searchButton.addEventListener('click',() =>{
		searchContetnt.classList.add('show-search');
	})
}

/*=========Hide Search bar=======*/
if(searchClose){
	searchClose.addEventListener('click' ,()=>{
		searchContetnt.classList.remove('show-search');
	})
}

/*=============== LOGIN ===============*/

const loginButton = document.getElementById('login-button');
const loginClose = document.getElementById('login-close');
const loginContent = document.getElementById('login-content');

if(loginButton){
	loginButton.addEventListener('click',() =>{
		loginContent.classList.add('show-login');
	})
}

if(loginClose){
	loginClose.addEventListener('click',() =>{
		loginContent.classList.remove('show-login');
	})
}
/*=============== ADD SHADOW HEADER ===============*/


/*=============== HOME SWIPER ===============*/	

/*=============== FEATURED SWIPER ===============*/


/*=============== NEW SWIPER ===============*/


/*=============== TESTIMONIAL SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
