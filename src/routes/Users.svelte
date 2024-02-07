<script>
	import { getContext } from 'svelte';

	let data = getContext('data');
	let nameinput = '';

	function addname() {
		let escape = false;
		if (nameinput == '') {
			escape = true;
		}
		for (let i = 0; i < $data.length; i++) {
			//console.log($data[i]);
			if (nameinput.localeCompare($data[i]) == 0) {
				alert('Already added.');
				escape = true;
			}
		}
		if (escape == true) {
			nameinput = '';
			return;
		}
		data.update((/** @type {string[]} */ n) => n.concat(nameinput));
		nameinput = '';
	}
    /**
	 * @param {string} item
	 */
    function removename(item){
        data.update((/** @type {string[]} */ dat)=>dat.filter((_v)=>_v!=item));
        console.log($data)
    }
</script>

<div class="w-full grid grid-cols-6 grid-flow-row-dense gap-4 pt-4 pb-4">
	<input
		bind:value={nameinput}
		class="p-4 font-bold text-2xl col-span-5 rounded-3xl w-full bg-slate-900"
		placeholder="Add name.."
	/><button
		on:click={() => addname()}
		class="p-4 col-span-1 bg-slate-900 text-green-500 hover:text-slate-50 hover:bg-green-500 rounded-3xl font-semibold text-xl transition-colors duration-250"
		>Add</button
	>
</div>
{#if $data.length != 0}
	<div class="bg-slate-900 rounded-xl p-4 pt-4 w-full">
		{#each $data as item}
			<div class="w-full grid grid-cols-6 grid-flow-row-dense bg-slate-900 hover:bg-slate-800 rounded-3xl p-2">
				<div class="p-4 font-bold text-2xl col-span-5">{item}</div>
                <button
                    on:click={()=>removename(item)}
					class="p-4 col-span-1 bg-slate-900 bg-opacity-0 hover:bg-opacity-100 text-red-500 hover:text-slate-50 hover:bg-red-500 rounded-3xl font-semibold text-xl  transition-colors duration-250"
					>Remove</button
				>
			</div>
		{/each}
	</div>
	<br />
{/if}


<style>
</style>
