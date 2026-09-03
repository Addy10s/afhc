<script lang="ts">
// @ts-nocheck
	
	
	 let { data } = $props();

	import favicon from '$lib/assets/afhc.svg';
	import { onMount } from 'svelte';

	const HERO_W = 960;
	const HERO_H = 480;

	let scrolled = $state(false);
	/**
	 * @type {HTMLDivElement}
	 */
	let heroSlot, barSlot;
	let transform = $state('scale(0)');

	function update() {
	const slot = scrolled ? barSlot : heroSlot;
	const rect = slot.getBoundingClientRect();
	const scale = rect.width / HERO_W;
	transform = `translate(${rect.left}px, ${rect.top}px) scale(${scale})`;
	}

	onMount(() => {
	update();
	const onScroll = () => {
		scrolled = window.scrollY > 200;
		update();
	};
	window.addEventListener('scroll', onScroll);
	window.addEventListener('resize', update);
	return () => {
		window.removeEventListener('scroll', onScroll);
		window.removeEventListener('resize', update);
	};
	});
</script>

<header class="fixed inset-x-0 top-0 z-40 flex h-20 items-center gap-6 border-b border-gray-200/25 bg-[#5bc0de]/80 px-6 backdrop-blur">
	<div bind:this={barSlot} class="h-16 w-32"></div>
	<div class="flex grow" > </div>
	<nav class="flex gap-6 text-sm font-medium text-[#8492a6]">
	<a href="#members" class="text-gray-900 text-xl font-bold hover:text-[#8492a6]">Members</a>
	<a href="#" class="text-gray-900 text-xl font-bold hover:text-[#8492a6]">Our Values</a>
	<a href="#" class="text-gray-900 text-xl font-bold hover:text-[#8492a6]">History</a>
	</nav>
</header>

<section class="flex min-h-screen flex-col items-center justify-center gap-6 pt-16 text-center">
	<div bind:this={heroSlot} style="width:{HERO_W}px;height:{HERO_H + 25}px"></div>
	<h1 class="font-[Tomorrow] text-3rem font-bold tracking-tight text-gray-900 m-0">Alternative For Hack Club</h1>
	<h2 class=" font-[Tomorrow] text-2xl font-semibold tracking-tight text-gray-900 m-0 "> {data?.newWord} </h2>
</section>

<img
	src={favicon}
	alt="Logo"
	class="fixed left-0 top-0 z-50 origin-top-left transition-transform duration-500 ease-in-out"
	style="width:{HERO_W}px;height:{HERO_H}px;transform:{transform}"
/>