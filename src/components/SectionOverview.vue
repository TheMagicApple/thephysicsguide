<template>
	<div :style="css" id="Background">
		<div id="Title"><b>{{name}}</b></div>
		<div id="Desc">{{desc}}</div>
	</div>
</template>
<script>
export default{
	props:["name","desc","color"],
	computed:{
		css(){
			return{
				"--color":this.color,
			}
		}
	}
}
</script>
<style scoped>
#Background{
	width:100%;
	
	height:50%;
	min-height:540px;
	background-color:var(--color);
	position:absolute;
	left:0%;
	top:10.2%;
	
}
#Title{
	color:white;
	display:flex;
	justify-content:center;
	align-items:center;
	width:100%;
	height:50%;
	position:absolute;
	left:0%;
	top:5%;
	font-size:100px;
}
#Desc{
	color:white;
	display:flex;
	justify-content:center;
	align-items:center;
	text-align:center;
	position:absolute;
	width:40%;
	min-width:750px;
	height:20%;
	left: 50%;
	transform: translateX(-50%);
	top:60%;
	font-size:30px;
}
</style>