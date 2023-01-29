<script>
	import img from '$lib/images/luc.jpg';
	import ProfileHeader from '$lib/components/ProfileHeader.svelte';
	import ResumeElement from '$lib/components/ResumeElement.svelte';
</script>

<ProfileHeader image={img} name="Luc Billaud" description="Software Engineer at Dative" />

<div class="resume">
	<ResumeElement title="test" dates="2000-2000" description="foo" color="primary" />
	<ResumeElement title="test2" dates="2023-2023" description="bar" color="secondary" onLeft />
</div>
