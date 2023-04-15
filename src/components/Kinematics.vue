<template>
	<Header></Header>
	<SectionOverview name="Kinematics" desc="Physics is about motion! Learn how to calculate velocity, acceleration, position, time of a wide variety of moving objects in all sorts of different situations." color="rgb(240,70,50)"></SectionOverview>
	<SubSection name="1D Kinematics" num="2" y="65%"></SubSection>
	<SubSubSection name="Introduction to Kinematics Equations" y="65" n="0" desc="Using 3 of the most fundamental equations in physics." frequency="Somewhat Frequent"></SubSubSection>
	<SubSubSection name="Applications of 1D Kinematics" y="65" n="1" desc="Looking at specific 'real life' situations where 1D Kinematics come into play." frequency="Not Frequent"></SubSubSection>
	<SubSection name="2D Kinematics" num="3" y="100%"></SubSection>
	<SubSubSection name="Breaking up Components" y="100" n="0" desc="Using x and y components of position, velocity, and acceleration to solve 2D problems." frequency="Very Frequent"></SubSubSection>
	<SubSubSection name="Angular Problems" y="100" n="1" desc="Dealing with angles in 2D problems." frequency="Somewhat Frequent"></SubSubSection>
	<SubSubSection name="Applications of 2D Kinematics" y="100" n="2" desc="Looking at situations where 2D Kinematics apply." frequency="Not Frequent"></SubSubSection>
	<SubSection name="Representations of Motion" num="2" y="150%"></SubSection>
	<SubSubSection name="Graphs of Position, Velocity, and Acceleration" y="150" n="0" desc="Dealing with graphs of position vs time, velocity vs time, or even acceleration vs time." frequency="Somewhat Frequent"></SubSubSection>
	<SubSubSection name="Kinematic Word Problems" y="150" n="1" desc="Figuring out which equations and strategies to use when given a longer word problem." frequency="Somewhat Frequent"></SubSubSection>
	
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
	}
}
</script>