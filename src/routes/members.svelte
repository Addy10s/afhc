<script lang="ts">
	let { data } = $props();
</script>

{#each data.memberArray as member (member.id)}
<div class="flex">
	
	<img src={member.imageUrl} class="rounded-2xl max-w-25" alt={member.realName + "'s Profile Picture"}/>
    <h2 class="font-bold">{member.realName}({member.pronouns})</h2>

</div>
{/each}

<!-- {#each data?.entries ?? [] as entry, index} 
				<!-- svelte-ignore event_directive_deprecated 
				<button
					on:click={() => (modalStates[index] = true)}
					class="bg-ctp-surface1 size-fit max-w-[80vw] min-w-[80vw] cursor-pointer rounded-lg p-2 outline-0 outline-offset-0 transition-all duration-250 hover:outline-4 lg:max-w-[50vw] lg:min-w-[50vw]"
				>
					{#if entry?.Title}
						<h1 class="text-[1.25rem] font-bold">{entry.Title}({entry.PublishedDate})</h1>
					{:else}
						<p>No title available</p>
					{/if}
					<div class="line-clamp-3">
						{@html snarkdown(entry.Content)}
					</div>
				</button>
				{#if index < modalStates.length}
					<Modal
						size="lg"
						title={entry.Title}
						classes={{ header: 'text-ctp-text', close: 'bg-ctp-text ! ' }}
						form
						bind:open={modalStates[index]}
						onaction={({ action }) => alert(`Handle "${action}"`)}
						class="bg-ctp-surface1 *:text-ctp-subtext1 text-ctp-subtext1 h-screen text-[140%] outline-3 outline-offset-0 outline-solid"
					>
						<h1>{@html snarkdown(entry?.Content)}</h1>
					</Modal>
				{/if}
			{/each} -->