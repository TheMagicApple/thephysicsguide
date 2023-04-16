<template>
	<Header></Header>
	<SectionOverview name="Vectors" desc="Motion in 2D can be tricky, but vectors can help! Learn about arrow vectors, unit vectors and ijk vectors, and see how vectors can be applied to concepts like velocity and acceleration." color="rgb(232, 166, 35)"></SectionOverview>
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
				{name:"Introduction to Vectors"},
				{name:"Vectors in 2D Kinematics"},
			],
			SubSubSections:[
				{sections:[
				{name:"What is a Vector?",desc:"Learn about ijk, arrows, and unit vectors.",frequency:"Not Frequent"},
				{name:"Vector Arithmetic",desc:"Adding or subtracting 2 vectors to produce a new vector.",frequency:"Somewhat Frequent"},
				{name:"Vectors in the Coordinate Plane",desc:"How to convert between graphical vectors and numerical vectors.",frequency:"Not Frequent"}
				]},
				{sections:[
				{name:"Relative Velocity",desc:"Combining two velocity vectors to create one relative net vector.",frequency:"Somewhat Frequent"},
				{name:"Acceleration Vectors",desc:"How to represent acceleration as a vector arrow and how to interpret an acceleration vector.",frequency:"Very Rare"}
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