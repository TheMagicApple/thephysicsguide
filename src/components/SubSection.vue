<template>
	<div :style="css" id="SubSection">
		<div id="Title">{{name}}</div>
		<div id="Line"></div>
	</div>
</template>
<script>
export default{
	props:["name","num","y"],
	computed:{
		css(){
			return{
				"--height":this.num*150+"px",
				"--y":this.y
			}
		}
	}
	
}
</script>
<style scoped>
#SubSection{
	position:absolute;
	left:0%;
	width:100%;
	top:var(--y);
	height:var(--height);
}
#Title{
	position:absolute;
	width:20%;
	left:28%;
	font-size:30px;
	height:10%;
	top:0%;
	
	text-align:right;
}
#Line{
	background-color:rgba(0,0,0,0.2);
	width:2px;
	height:100%;
	position:absolute;
	left:50%;
	top:0%;
}
</style>