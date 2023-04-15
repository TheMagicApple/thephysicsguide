<template>
	<router-link :to="name" :style="css" id="Section">
		<div id="Title">{{name}}</div>
		<div id="Frequency">{{frequency}}</div>
		<div id="Desc">{{desc}}</div>
		<div id="Circle"></div>
	</router-link>
</template>
<script>
export default{
	props:["name","frequency","desc","y","n"],
	computed:{
		css(){
			return{
				"--y":(parseInt(this.y)+parseInt(this.n)*13.88)+"%",
			}
		}
	}
}
</script>
<style scoped>
#Section{
	height:150px;
	width:30%;
	position:absolute;
	left:52%;
	top:var(--y);
	text-decoration:none;
	color:black;
}

#Section:hover #Title{
	color:rgb(35, 105, 217);
}
#Section:hover #Frequency{
	color:rgba(35, 105, 217,1);
}
#Section:hover #Desc{
	color:rgba(35, 105, 217,1);
}
#Section:hover #Circle{
	transform:scale(1);
}
#Title{
	position:absolute;
	width:100%;
	height:20%;
	font-size:25px;
	text-align:left;
	left:0%;
	top:0%;
	transition:0.1s all;
}
#Frequency{
	position:absolute;
	width:100%;
	height:20%;
	font-size:18px;
	text-align:left;
	left:0%;
	top:25%;
	color:rgba(0,0,0,0.5);
	transition:0.1s all;
}
#Desc{
	position:absolute;
	width:100%;
	height:20%;
	font-size:18px;
	text-align:left;
	left:0%;
	top:50%;
	color:rgba(0,0,0,0.7);
	transition:0.1s all;
}
#Circle{
	transform:scale(0);
	background-color:rgba(35, 105, 217,1);
	width:30px;
	height:30px;
	border-radius:30px;
	position:absolute;
	left:-9%;
	top:15%;
	transition:0.2s all;
}
</style>