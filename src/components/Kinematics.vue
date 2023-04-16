<template>
	<Header></Header>
	<SectionOverview name="Kinematics" desc="Physics is about motion! Learn how to calculate velocity, acceleration, position, time of a wide variety of moving objects in all sorts of different situations." color="rgb(240,70,50)"></SectionOverview>
	<template v-for="SubSection in SubSections">
		<SubSection :name="SubSection.name" :num="SubSection.num" :y="SubSection.y"></SubSection>
	</template>
	<template v-for="SubSubSection in SubSubSections">
		<template v-for="(section,index) in SubSubSection.sections">
			<SubSubSection :name="section.name" :y="SubSubSection.y" :n="index" :desc="section.desc" :frequency="section.frequency"></SubSubSection>
		</template>
	</template>
</template>
<script>
import Header from "./Header.vue"
import SectionOverview from "./SectionOverview.vue"
import SubSection from "./SubSection.vue"
import SubSubSection from "./SubSubSection.vue"
export default{
	components:{
		Header,
		SectionOverview,
		SubSection,
		SubSubSection
	},
	data(){
		return{
			SubSections:[
				{name:"1D Kinematics"},
				{name:"2D Kinematics"},
				{name:"Representations of Motion"}
			],
			SubSubSections:[
				{sections:[
				{name:"Introduction to Kinematics Equations",desc:"Using 3 of the most fundamental equations in physics.",frequency:"Very Frequent"},
				{name:"Applications of 1D Kinematics",desc:"Looking at specific 'real life' situations where 1D Kinematics come into play.",frequency:"Not Frequent"}
				]},
				{sections:[
				{name:"Breaking up Components",desc:"Using x and y components of position, velocity, and acceleration to solve 2D problems.",frequency:"Very Frequent"},
				{name:"Angular Problems",desc:"Dealing with angles in 2D problems.",frequency:"Somewhat Frequent"},
				{name:"Applications of 2D Kinematics",desc:"Looking at situations where 2D Kinematics apply.",frequency:"Not Frequent"}
				]},
				{sections:[
				{name:"Graphs of Position, Velocity, and Acceleration",desc:"Dealing with graphs of position vs time, velocity vs time, or even acceleration vs time.",frequency:"Somewhat Frequent"},
				{name:"Kinematic Word Problems",desc:"Figuring out which equations and strategies to use when given a longer word problem.",frequency:"Somewhat Frequent"}
				]}
			]
		}
	},
	mounted(){
		var y=65;
		for(var i=0;i<this.SubSubSections.length;i++){
			this.SubSubSections[i].y=y;
			this.SubSections[i].y=y;
			this.SubSections[i].num=this.SubSubSections[i].sections.length;
			y+=this.SubSubSections[i].sections.length*15+5;
		}
	}
}
</script>