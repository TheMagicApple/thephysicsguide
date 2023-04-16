<template>
	<Header></Header>
	<SectionOverview name="Dynamics" desc="Dynamics is arguably the most important concept in physics! Learn everything about forces, like tension, friction, gravity, and more, and explore the key idea of Newton's 2nd Law, F=ma." color="rgb(232, 212, 35)"></SectionOverview>
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
				{name:"Introduction to Dynamics"},
				{name:"Forces 101"},
				{name:"Ramp Physics"},
				{name:"More 2D Dynamics"}
			],
			SubSubSections:[
				{sections:[
				{name:"Newton's 2nd Law",desc:"Learn the most important formula in all of physics, F=ma.",frequency:"Extremely Frequent"},
				{name:"Free Body Diagrams",desc:"Drawing dots and arrows to represent complex force scenarios.",frequency:"Very Frequent"}
				]},
				{sections:[
				{name:"Gravity",desc:"The fundamental force in every situation, g.",frequency:"Extremely Frequent"},
				{name:"Normal Force",desc:"The counter to g, pushing back to stabilize every object.",frequency:"Extremely Frequent"},
				{name:"Tension",desc:"Pulling force caused by a string.",frequency:"Extremely Frequent"},
				{name:"Static Friction",desc:"Force that prevents an object from moving.",frequency:"Not Frequent"},
				{name:"Kinetic Friction",desc:"Force that slows an object down while moving.",frequency:"Extremely Frequent"}
				]},
				{sections:[
				{name:"Angled Ramps",desc:"Using trigonometry to break up forces on a ramp into x and y components.",frequency:"Very Frequent"}
				]},
				{sections:[
				{name:"The Lawnmower Problem",desc:"A classic 2D dynamics problem with multiple angled forces.",frequency:"Somewhat Frequent"},
				{name:"Vector Dynamics",desc:"Using force vectors to represent 2D motion.",frequency:"Somewhat Frequent"}
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