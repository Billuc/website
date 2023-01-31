<script>
	import img from '$lib/images/luc.webp';
	import ProfileHeader from '$lib/components/profile/ProfileHeader.svelte';
	import Resume from '$lib/components/resume/Resume.svelte';
	import Projects from '$lib/components/projects/Projects.svelte';
</script>

<ProfileHeader
	image={img}
	name="Luc Billaud"
	description="Software Engineer at Dative"
	fullHeight
/>

<Resume fullHeight />

<Projects fullHeight />
