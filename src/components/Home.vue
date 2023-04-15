<template>
  <Header></Header>
  <div id="Pitch"><span class="blue"><b>Physics</b></span> is <span class="red"><b>HARD...</b></span></div>
  <div id="Subpitch">or is it?</div>
  <div id="Subsubpitch">We make physics <span class="green"><b>EASY</b></span> with simple explanations, pictures, and practice problems.</div>
  <SectionBox name="Kinematics" color="rgb(240,70,50)"></SectionBox>
  <SectionBox name="Vectors" color="rgb(232, 166, 35)"></SectionBox>
  <SectionBox name="Dynamics" color="rgb(232, 212, 35)"></SectionBox>
  <SectionBox name="Centripetal" color="rgb(54, 255, 54)"></SectionBox>
  <SectionBox name="Energy" color="rgb(54, 211, 255)"></SectionBox>
  <SectionBox name="Momentum" color="rgb(54, 111, 255)"></SectionBox>
  <SectionBox name="Rotational" color="rgb(175, 54, 255)"></SectionBox>
  <SectionBox name="Harmonic" color="rgb(255, 54, 248)"></SectionBox>
  <div id="Action">Click on a topic!</div>
</template>

<script>
import SectionBox from "./SectionBox.vue"
import Header from "./Header.vue"
export default {
  name: 'Home',
  components:{
	SectionBox,
	Header
  },
  mounted(){
	document.title="The Physics Guide";
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
body{
	background-color:rgb(220,220,220);
}
div{
	font-family: 'Open Sans', sans-serif;
}
#Pitch{
	position:absolute;
	width:100%;
	left:0%;
	top:38%;
	font-size:80px;
	text-align:center;
}
#Subpitch{
	position:absolute;
	width:100%;
	left:0%;
	top:48%;
	font-size:50px;
	text-align:center;
}
#Subsubpitch{
	position:absolute;
	width:40%;
	left:30%;
	top:58%;
	font-size:30px;
	text-align:center;
}
#Action{
	position:absolute;
	width:40%;
	left:30%;
	top:94%;
	font-size:25px;
	text-align:center;
	color:rgb(120,120,120);
}
.red{
	color:rgb(240,70,50);
}
.blue{
	color:rgb(54, 111, 255);
}
.green{
	color:rgb(54, 215, 54);
}
</style>
