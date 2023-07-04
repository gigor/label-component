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
	}
})
</script>

<template>
    <i class="icon" :class="`${size}`"></i>
</template>

<style scoped lang="postcss">
    .icon {
        display: inline-block;
        width: 14px;
        height: 14px;
        background: var(--symbols-secondary);
        border-radius: 100%;
        vertical-align: middle;
        line-height: 14px;
        
        &.micro {
            width: 12px;
            height: 12px;
        }
    }
</style>