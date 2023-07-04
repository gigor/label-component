<script setup>
import 'assets/app.css'

const handle_click = () => {
	console.log('clicked')
}
</script>

<template>
	<div>
		<h2 class="highlight-anchor">Content Audit</h2>
		<div class="card">
			<table class="w-full">
				<thead>
					<tr>
						<th>
							<Pill type="ghost">
								<Label class="th-fade"
									>Optimization Categories</Label
								>
							</Pill>

							<Pill type="ghost">
								<Label
									>Content optimization opportunities for your
									landing pages</Label
								>
							</Pill>
						</th>
						<th>
							<Pill type="ghost">
								<Label class="th-fade">Impact</Label>
							</Pill>

							<Pill type="ghost">
								<Label>Keywords</Label>
							</Pill>
						</th>
						<th>
							<Pill type="ghost">
								<Label class="th-fade">SERP Data</Label>
							</Pill>

							<Pill type="ghost">
								<Label>Clicks</Label>
							</Pill>
						</th>
						<th>
							<Pill type="ghost">
								<Label class="th-fade">Search Data</Label>
							</Pill>

							<Pill type="ghost">
								<Label>Volume & YoY</Label>
							</Pill>
						</th>
						<th>
							<Pill type="ghost">
								<Label class="th-fade">Ranking Data</Label>
							</Pill>

							<Pill type="ghost">
								<Label><Icon size="micro" /> Visibility</Label>
							</Pill>
						</th>
						<th>
							<Pill type="ghost">
								<Label class="th-fade">Opportunity</Label>
							</Pill>

							<Pill type="ghost">
								<Label>Score</Label>
							</Pill>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<Pill type="ghost">
								<Label size="identity"
									>Missing Title or H1</Label
								>
							</Pill>
						</td>
						<td>
							<Pill>
								<Label size="identity">{{
									formatNumber(242)
								}}</Label>
							</Pill>
						</td>
						<td>
							<Pill>
								<Label size="identity">{{
									formatNumber(0.24, '0%')
								}}</Label>
							</Pill>
						</td>
						<td>
							<Pill :trend="getTrend(0.12)">
								<Label size="identity">{{
									formatNumber(35000, '0a')
								}}</Label>
								<Label
									size="identity"
									:trend="getTrend(0.12)"
									>{{ formatNumber(0.12, '+0%') }}</Label
								>
							</Pill>
						</td>
						<td>
							<Pill>
								<Label size="identity">{{
									formatNumber(0.35, '0%')
								}}</Label>
							</Pill>
						</td>
						<td>
							<Pill>
								<Label size="identity">{{
									formatNumber(0.08, '0%')
								}}</Label>
							</Pill>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<h2 class="highlight-anchor">Agency Dashboard</h2>
		<div class="card">
			<table class="w-full">
				<thead>
					<tr>
						<th class="w-full">
							<Pill type="ghost" :clickable="true">
								<Label
									>Campaigns & Visibility <Icon size="micro"
								/></Label>
							</Pill>
						</th>
						<th>
							<Pill type="ghost">
								<Label>Health & MRR</Label>
							</Pill>
						</th>
						<th>
							<Pill type="ghost" :clickable="true">
								<Label>Objectives <Icon size="micro" /></Label>
							</Pill>
						</th>
						<th>
							<Pill type="ghost">
								<Label
									>Reports
									<template #secondary
										>July 23`</template
									></Label
								>
							</Pill>
						</th>
						<th>
							<Pill type="ghost">
								<Label>Insights</Label>
							</Pill>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<Pill trend="positive">
								<Label size="identity"
									><Icon /> Elefant.ro</Label
								>
								<Pill type="ghost">
									<Label>{{ formatNumber(0.1, '0%') }}</Label>
									<Label :trend="getTrend(0.05)">{{
										formatNumber(0.05, '+0%')
									}}</Label>
								</Pill>
							</Pill>
						</td>
						<td>
							<Pill>
								<Label>
									<Icon />
									{{ formatNumber(1500, '$0[.]0a') }}
								</Label>
							</Pill>
						</td>
						<td>
							<Pill :trend="getTrend(0.9)">
								<Label :trend="getTrend(0.9)">{{
									formatNumber(0.9, '0%')
								}}</Label>
							</Pill>
						</td>
						<td>
							<Pill>
								<Label><Icon /> Inactive</Label>

								<Pill type="ghost">
									<Label size="micro">
										<template #secondary
											><Icon size="micro" /> 3</template
										>
									</Label>
									<Label size="micro">
										<template #secondary
											><Icon size="micro" /> 2</template
										>
									</Label>
									<Label size="micro">
										<template #secondary
											><Icon size="micro" /> 1</template
										>
									</Label>
								</Pill>
							</Pill>
						</td>

						<td>
							<Pill :badge_value="25">
								<Label><Icon /></Label>
							</Pill>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<h2 class="highlight-anchor">Rank Tracker</h2>
		<div class="card">
			<table class="w-full">
				<thead>
					<tr class="default-anchor th-faded nowrap">
						<th class="w-full"></th>
						<th class="text-right px-8">SERP Data</th>
						<th class="px-8">Search Data</th>
						<th></th>
						<th colspan="2" class="px-8">Rankin Data</th>
						<th class="px-8">Opportunity</th>
					</tr>
					<tr>
						<th>
							<Pill type="ghost">
								<Label
									>Keywords
									<template #secondary>{{
										formatNumber(2400, '0[.]0a')
									}}</template>
								</Label>
							</Pill>
						</th>
						<th class="text-right">
							<Pill type="ghost">
								<Label>% Clicks</Label>
							</Pill>
						</th>
						<th>
							<Pill type="ghost">
								<Label>Volume & YoY</Label>
							</Pill>
						</th>
						<th></th>
						<th>
							<Pill type="ghost" :clickable="true">
								<Label
									><Icon /> Rank <Icon size="micro"
								/></Label>
							</Pill>
						</th>
						<th>
							<Pill type="ghost">
								<Label>Page</Label>
							</Pill>
						</th>
						<th>
							<Pill type="ghost" :clickable="true">
								<Label>Score <Icon size="micro" /></Label>
							</Pill>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<Pill type="ghost">
								<Label size="identity"
									>Mermaid british museum</Label
								>
							</Pill>
						</td>
						<td class="text-right">
							<Pill type="ghost">
								<Pill type="ghost">
									<Label><Icon size="micro" /></Label>
									<Label><Icon size="micro" /></Label>
								</Pill>
								<Pill>
									<Label>{{ formatNumber(1, '0%') }}</Label>
								</Pill>
							</Pill>
						</td>
						<td>
							<Pill type="ghost">
								<Label>{{
									formatNumber(152000, '0[.]0a')
								}}</Label>
								<Label :trend="getTrend(0.12)">{{
									formatNumber(0.12, '+0%')
								}}</Label>
							</Pill>
						</td>
						<td>
							<Pill type="ghost">
								<Label
									><template #secondary
										>3 <Icon size="micro" /></template
								></Label>
							</Pill>
						</td>
						<td>
							<Pill trend="positive">
								<Pill type="ghost"
									><Label>{{ formatNumber(16) }}</Label></Pill
								>
								<Pill type="anchor" trend="positive">
									<Label>
										{{ formatNumber(32, '+0') }}
									</Label>
								</Pill>
							</Pill>
						</td>
						<td>
							<Pill
								@clicked="console.log('clicked')"
								:clickable="true"
							>
								<Label><Icon /></Label>
							</Pill>
						</td>
						<td>
							<Pill>
								<Label size="identity">{{
									formatNumber(0.08, '0%')
								}}</Label>
							</Pill>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<h2 class="highlight-anchor">Trends</h2>
		<div class="card">
			<Pill :badge_value="879" trend="positive">
				<Label>Positive</Label>
			</Pill>

			<Pill trend="negative">
				<Label>Negative</Label>
			</Pill>

			<Pill trend="insignificant">
				<Label>Insignificant</Label>
			</Pill>

			<Pill trend="normal">
				<Label>Normal</Label>
			</Pill>

			<Pill type="ghost">
				<Label>Ghost</Label>
			</Pill>
		</div>

		<h2 class="highlight-anchor">Sizes</h2>
		<div class="card">
			<Pill :badge_value="879" trend="positive">
				<Label size="micro"
					>🛠️ Micro
					<template #secondary>Secondary</template>
				</Label>
			</Pill>

			<Pill :badge_value="879" trend="positive">
				<Label
					>🛠️ Default
					<template #secondary>Secondary</template>
				</Label>
			</Pill>

			<Pill :badge_value="879" trend="positive">
				<Label size="identity"
					>🛠️ Identity
					<template #secondary>Secondary</template>
				</Label>
			</Pill>

			<Pill :badge_value="879" trend="positive">
				<Label size="section"
					>🛠️ Section
					<template #secondary>Secondary</template>
				</Label>
			</Pill>

			<Pill :badge_value="879" trend="positive">
				<Label size="page"
					>🛠️ Page
					<template #secondary>Secondary</template>
				</Label>
			</Pill>
		</div>
	</div>

	<h2 class="highlight-anchor">Icons & Multilabel</h2>
	<div class="card">
		<Pill :badge_value="879" trend="positive" type="ghost">
			<Label>🛠️ Primary</Label>
			<Label>
				<Icon />
				String
				<template #secondary>Secondary</template>
			</Label>
		</Pill>

		<Pill :badge_value="879" trend="positive">
			<Label>🛠️ Primary</Label>
			<Label>
				<Icon />
				String
				<template #secondary>Secondary</template>
			</Label>
			<Label>
				String 2
				<template #secondary>Secondary 2 </template>
			</Label>
			<Label>
				String 3
				<template #secondary>Secondary 3</template>
			</Label>
		</Pill>
	</div>

	<h2 class="highlight-anchor">Clickable</h2>
	<div class="card">
		<Pill
			trend="positive"
			type="ghost"
			:clickable="true"
			@clicked="handle_click"
		>
			<Label>Ghost positive</Label>
		</Pill>

		<Pill trend="negative" type="ghost" :clickable="true">
			<Label>Ghost negative</Label>
		</Pill>

		<Pill
			trend="insignificant"
			type="ghost"
			:clickable="true"
			@clicked="handle_click"
		>
			<Label>Ghost insignificant</Label>
		</Pill>

		<Pill
			trend="normal"
			type="ghost"
			:clickable="true"
			@clicked="handle_click"
		>
			<Label>Ghost normal</Label>
		</Pill>

		<Pill type="ghost" :clickable="true" @clicked="handle_click">
			<Label>Ghost</Label>
		</Pill>

		<Pill trend="positive" :clickable="true" @clicked="handle_click">
			<Label>Positive</Label>
		</Pill>

		<Pill trend="negative" :clickable="true" @clicked="handle_click">
			<Label>Negative</Label>
		</Pill>

		<Pill trend="insignificant" :clickable="true" @clicked="handle_click">
			<Label>Insignificant</Label>
		</Pill>

		<Pill trend="normal" :clickable="true" @clicked="handle_click">
			<Label>Normal</Label>
		</Pill>

		<Pill :clickable="true" @clicked="handle_click">
			<Label>No trend</Label>
		</Pill>
	</div>

	<h2 class="highlight-anchor">Disabled</h2>
	<div class="card">
		<Pill
			trend="positive"
			type="ghost"
			:clickable="true"
			@clicked="handle_click"
			:disabled="true"
		>
			<Label>Ghost positive</Label>
		</Pill>

		<Pill
			trend="negative"
			type="ghost"
			:clickable="true"
			@clicked="handle_click"
			:disabled="true"
		>
			<Label>Ghost negative</Label>
		</Pill>

		<Pill
			trend="insignificant"
			type="ghost"
			:clickable="true"
			@clicked="handle_click"
			:disabled="true"
		>
			<Label>Ghost insignificant</Label>
		</Pill>

		<Pill
			trend="normal"
			type="ghost"
			:clickable="true"
			@clicked="handle_click"
			:disabled="true"
		>
			<Label>Ghost normal</Label>
		</Pill>

		<Pill
			type="ghost"
			:clickable="true"
			@clicked="handle_click"
			:disabled="true"
		>
			<Label>Ghost</Label>
		</Pill>

		<Pill
			trend="positive"
			:clickable="true"
			@clicked="handle_click"
			:disabled="true"
		>
			<Label>Positive</Label>
		</Pill>

		<Pill
			trend="negative"
			:clickable="true"
			@clicked="handle_click"
			:disabled="true"
		>
			<Label>Negative</Label>
		</Pill>

		<Pill
			trend="insignificant"
			:clickable="true"
			@clicked="handle_click"
			:disabled="true"
		>
			<Label>Insignificant</Label>
		</Pill>

		<Pill
			trend="normal"
			:clickable="true"
			@clicked="handle_click"
			:disabled="true"
		>
			<Label>Normal</Label>
		</Pill>

		<Pill :clickable="true" @clicked="handle_click" :disabled="true">
			<Label>No trend</Label>
		</Pill>
	</div>
</template>

<style scoped lang="postcss">
.card {
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 8px;
	flex-wrap: wrap;

	max-width: 1024px;
	background: var(--white);
	padding: 12px 8px 16px 8px;
	box-shadow: 0px 25px 60px 0px rgba(0, 0, 0, 0.06);
	border-radius: 12px;

	margin: 20px auto 60px;
}

table thead tr:last-child th {
	border-bottom: 1px solid var(--layers-alive);
	padding-bottom: 8px;
}
table tbody tr:first-child td {
	padding-top: 16px;
}

.th-faded {
	--symbols-primary: var(--symbols-secondary);
	color: var(--symbols-secondary);
}

.th-fade {
	--symbols-primary: var(--symbols-secondary);
}
</style>
