<script>
	import img from '$lib/images/luc.jpg';
	import ProfileHeader from '$lib/components/ProfileHeader.svelte';
	import Resume from '$lib/components/Resume.svelte';
</script>

<ProfileHeader
	image={img}
	name="Luc Billaud"
	description="Software Engineer at Dative"
	fullHeight
/>

<Resume fullHeight />
