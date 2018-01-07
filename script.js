 $(document).ready(function () {
 	function BurgerMenu() {

 		$("nav").addClass("BurgerMenu");
 		$(".logo").addClass("BurgerMenu_logo");
 		$(".information").hide();
 		$(".websites").hide();
 		$(".competence_picture").hide();
 		$("strong").hide();


 	}

 	function RemoveMenu() {

 		$("nav").removeClass("BurgerMenu");
 		$(".information").show();
 		$(".websites").show();
 		$(".competence_picture").show();
 		$("strong").show();


 	}

 	document.getElementById("mobile").addEventListener("click", BurgerMenu);



 	document.getElementById("link1").addEventListener("click", RemoveMenu);



 	document.getElementById("link2").addEventListener("click", RemoveMenu);




 	document.getElementById("link3").addEventListener("click", RemoveMenu);


 });
