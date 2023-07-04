<script setup>
import LabelBadge from './LabelBadge.vue'

const props = defineProps({
	clickable: false,
	disabled: false,
	type: {
		type: String,
		default: 'highlighted',
		validator(value) {
			return ['highlighted', 'ghost', 'anchor'].includes(value)
		}
	},
	badge_value: {
		type: Number,
		default: 0
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
	}
})
</script>

<template>
	<span
		@click="clickable && !disabled && $emit('clicked')"
		class="pill"
		:class="`
			${trend} 
			${type} 
			${disabled ? 'disabled' : ''} 
			${clickable ? 'clickable' : ''}
		`"
	>
		<slot />
		<LabelBadge :value="badge_value" />
	</span>
</template>

<style scoped lang="postcss">
.pill {
	position: relative;
	color: var(--symbols-primary);
	display: inline-flex;
	align-items: center;
	gap: 4px;
	white-space: nowrap;
	border-radius: 20px;
	padding: 0px 8px;
	vertical-align: middle;

	& > &:last-child {
		margin-right: -8px;
	}

	& > &:first-child {
		margin-left: -8px;
	}

	&.highlighted {
		background-color: var(--layers-alive);
		&.positive {
			background-color: var(--trend-area-positive);
		}
		&.negative {
			background-color: var(--trend-area-negative);
		}
		&.normal {
			background-color: var(--trend-area-normal);
		}
		&.insignificant {
			background-color: var(--trend-area-insignificant);
		}
	}

	&.highlighted{
		@media (any-hover: hover) {
			&.clickable:not(.disabled):hover {
				background-color: var(--layers-alive-hover);
				&.positive {
					background-color: var(--trend-area-positive-hover);
				}
				&.negative {
					background-color: var(--trend-area-negative-hover);
				}
				&.normal {
					background-color: var(--trend-area-normal-hover);
				}
				&.insignificant {
					background-color: var(--trend-area-insignificant-hover);
				}
			}
		}
	}

	&.ghost {
		@media (any-hover: hover) {
			&.clickable:not(.disabled):hover {
				background-color: var(--layers-alive);
				&.positive {
					background-color: var(--trend-area-positive);
				}
				&.negative {
					background-color: var(--trend-area-negative);
				}
				&.normal {
					background-color: var(--trend-area-normal);
				}
				&.insignificant {
					background-color: var(--trend-area-insignificant);
				}
			}
		}
	}

	&.anchor {
		--symbols-primary: var(--layers-primary);

		background-color: var(--layers-anchor);
		&.positive {
			background-color: var(--trend-positive);
		}
		&.negative {
			background-color: var(--trend-negative);
		}
		&.normal {
			background-color: var(--trend-normal);
		}
		&.insignificant {
			background-color: var(--trend-insignificant);
		}
	}

	&.clickable:not(.disabled) {
		cursor: pointer;
	}

	&.disabled {
		opacity: 0.3;
	}
}
</style>
