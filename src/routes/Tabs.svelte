<script lang="ts">
	export let items: any[] = [];
	export let activeTabValue = 1;

	const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<ul class="w-full">
	{#each items as item}
		{#if activeTabValue == item.value}
			<span on:click={handleClick(item.value)} class="bg-slate-50 p-4 w-1/3 rounded-t-2xl text-slate-900 text-xl font-semibold">{item.label}</span>
		{:else}
			<span
				on:click={handleClick(item.value)}
				class="p-4 w-1/3 bg-slate-900 rounded-t-2xl text-slate-50 hover:bg-slate-50 hover:text-slate-950 text-xl font-semibold"
				>{item.label}</span
			>
		{/if}
	{/each}
</ul>
{#each items as item}
	{#if activeTabValue == item.value}
		<div class="box border-l-slate-50 border-r-slate-50 border-b-slate-50 border-t-slate-900 w-[100%]">
			<svelte:component this={item.component} />
		</div>
	{/if}
{/each}

<style>
	.box {
		margin-bottom: 10px;
		padding: 40px;
		border: 1px solid #dee2e6;
		border-radius: 0 0 0.5rem 0.5rem;
		border-top: 0;
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		padding-left: 0;
		margin-bottom: 0;
		list-style: none;
		border-bottom: 1px solid #dee2e6;
	}
	li {
		margin-bottom: -1px;
	}

	li.active > span {
		color: #495057;
		background-color: #fff;
		border-color: #dee2e6 #dee2e6 #fff;
	}
	
</style>
