<script>
	import img from '$lib/images/luc.jpg';
	import ProfileHeader from '$lib/components/ProfileHeader.svelte';
	import ResumeElement from '$lib/components/ResumeElement.svelte';
</script>

<ProfileHeader image={img} name="Luc Billaud" description="Software Engineer at Dative" />

<div class="resume">
	<div class="resume-title">My experiences</div>

	<ResumeElement
		title="Software Engineer at Dative"
		dates="2021-2023"
		description="Fullstack developper (C# and Vue.JS)"
		color="primary"
	>
		<div class="list-element">Developped features for a data acquisition application.</div>
		<div class="list-element">Created extensions for a cloud data vizualisation platform</div>
		<div class="list-element">Increased test coverage by more than 20 percent</div>
		<div class="list-element">Created tools to increase the team's efficiency</div>
	</ResumeElement>

	<ResumeElement
		title="End of studies internship"
		dates="2021-2021"
		description="VR reseach project in an IT laboratory"
		color="secondary"
		onLeft
	>
		<div class="list-element">Created a protocol to dynamically stream compressed 3D meshes</div>
		<div class="list-element">Implemented different strategies and metrics</div>
		<div class="list-element">
			Performed a statistical analysis to determine the best combination
		</div>
	</ResumeElement>

	<ResumeElement
		title="Master of Science in Computer Science and Engineering"
		dates="2016-2021"
		description="Institut National des Sciences Appliquées de Lyon"
		color="tertiary"
	/>
</div>

<style>
	.resume-title {
		font-size: 2.5rem;
	}

	.list-element {
		padding-left: 2rem;
	}

	.list-element:first {
		margin-top: 0.5rem;
	}
</style>
