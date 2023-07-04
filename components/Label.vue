<script setup>
const props = defineProps({
	size: {
		type: String,
		default: 'default',
		validate(value) {
			return ['default', 'page', 'section', 'micro', 'identity'].includes(
				value
			)
		}
	},
    trend: {
		type: String,
		default: 'none',
		validator(value) {
			return [
				'insignificant',
				'normal',
				'positive',
				'negative',
				'none'
			].includes(value)
		}
	},
})
</script>

<template>
	<span class="label" :class="`${size}-anchor trend-${trend}`">
		<slot />

		<span
			v-if="$slots.secondary"
			class="secondary"
			:class="`${size}-primary`"
			><slot name="secondary"
		/></span>
	</span>
</template>

<style scoped lang="postcss">
.label {
	color: var(--symbols-primary);
	display: inline-block;
    vertical-align: baseline;
	padding: 8px 0 8px 0px;

	display: inline-flex;
	gap: 4px;
	align-items: middle;


    &.trend-insignificant {
        color: var(--trend-insignificant);
    }
    &.trend-normal {
        color: var(--trend-normal);
    }
    &.trend-positive {
        color: var(--trend-positive);
    }
    &.trend-negative {
        color: var(--trend-negative);
    }
}

.secondary {
	color: var(--symbols-secondary);
	display: inline-block;
	padding: 0px;
}
</style>
