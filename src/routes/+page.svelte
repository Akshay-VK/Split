<script>
	import Users from './Users.svelte';
	import Payments from './Payments.svelte';
	import Split from './Split.svelte';
	import Tabs from './Tabs.svelte';

	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export const data = writable([]);
	setContext('data',data);

	export const payments = writable([]);
	setContext('payments',payments);

	export const transactions = writable([]);

	// List of tab items with labels, values and assigned components
	let items = [
		{ label: 'Users 1️⃣', value: 1, component: Users },
		{ label: 'Payments 2️⃣', value: 2, component: Payments },
		{ label: 'Split 3️⃣', value: 3, component: Split }
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Tabs {items} />
</section>

<style lang="postcss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: top;
		padding-top: 10%;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
