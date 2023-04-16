<template>
	<div>
		<router-link to="/" id="Title"><b>The Physics Guide</b></router-link>
		<router-link to="/topics" id="Topics">Topics</router-link>
		<router-link to="/problems" id="Problems">Problems</router-link>
		<router-link to="/resources" id="Resources">Resources</router-link>
		<router-link to="/login" id="Login">Login</router-link>
	</div>
</template>
<style scoped>
div{
	position:absolute;
	width:100%;
	height:10%;
	min-height:108px;
	left:0%;
	top:0%;
	border-bottom:2px solid rgba(0,0,0,0.2);
}
#Title{
	position:absolute;
	width:17%;
	height:100%;
	left:0%;
	top:0%;
	font-size:30px;
	display:flex;
	justify-content:center;
	align-items:center;
	border:none;
}
a{
	font-size:25px;
	color:rgba(0,0,0,0.7);
	text-decoration:none;
	position:absolute;
	height:100%;
	display:flex;
	justify-content:center;
	align-items:center;
	width:10%;
	
}
a:hover{
	border-bottom:1px solid rgba(0,0,0,0.7);
}
#Topics{
	left:60%;
}
#Problems{
	left:70%;
}
#Resources{
	left:80%;
}
#Login{
	left:90%;
	font-size:28px;
}
</style>