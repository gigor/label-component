<script setup>
const props = defineProps({
	value: {
		type: Number,
		default: 0
	},
	position: {
		type: String,
		default: 'top-right',
		validator(value) {
			return [
				'top-right',
				'top-left',
				'bottom-right',
				'bottom-left'
			].includes(value)
		}
	}
})

const formatedValue = computed(() => (props.value > 99 ? '99+' : props.value))
</script>

<template>
	<span v-if="value > 0" class="label-badge" :class="props.position">{{
		formatedValue
	}}</span>
</template>

<style scoped>
.label-badge {
	position: absolute;
	z-index: 2;
	background-color: var(--info-informing);
	color: var(--white);

	border-radius: 10px;
	padding: 2px 6px;

	font-size: 10px;
	font-style: normal;
	font-weight: 600;
	line-height: 120%;

	top: 0px;
	right: 0px;
	transform: translate(50%, -50%);
}
</style>
