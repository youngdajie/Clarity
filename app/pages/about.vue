<script setup lang="ts">
import { onMounted } from 'vue'

const appConfig = useAppConfig()
useSeoMeta({
	title: '关于',
	description: `关于 ${appConfig.author.name} 以及这个博客的一切。`,
})

onMounted(() => {
	// fetchTotalStats()
})

const layoutStore = useLayoutStore()
layoutStore.setAside([])

const birthYear = appConfig.component.stats.birthYear
const age = new Date().getFullYear() - birthYear

// 添加更多个人信息
const skills = [
	{ name: 'XXXX', level: 90 },
	{ name: 'XXXX', level: 75 },
	{ name: 'XXXX', level: 80 },
	{ name: 'XXXX', level: 70 },
]

const hobbies = [
	{ name: '阅读', icon: 'ph:book-bold' },
	{ name: '音乐', icon: 'ph:music-note-bold' },
	{ name: '旅行', icon: 'ph:airplane-tilt-bold' },
	{ name: '摄影', icon: 'ph:camera-bold' },
	{ name: '编程', icon: 'ph:code-bold' },
	{ name: '骑行', icon: 'ph:bicycle' },
]
</script>

<template>
<div class="about-page">
	<header class="about-header">
		<div class="left-content">
			<h1>关于我</h1>
			<p>人生就像一艘小船，内心指引方向</p>
		</div>
		<div class="right-content">
			<div class="avatar-frame">
				<img :src="appConfig.author.avatar" alt="作者头像" class="avatar-image">
			</div>
		</div>
	</header>

	<div class="cards-grid">
		<div class="card intro-card">
			<p>你好, 很高兴认识你</p>
			<h2>我叫 {{ appConfig.author.name }}</h2>
			<p>是一名 打工仔</p>
		</div>

		<div class="card info-card">
			<div class="info-item special-info-item">
				<span class="label">生于</span>
				<span class="value">{{ birthYear }}</span>
			</div>
			<div class="info-item special-info-item">
				<span class="label">当前</span>
				<span class="value">{{ age }} 岁</span>
			</div>
		</div>

		<div class="card motto-card">
			<span class="label">座右铭</span>
			<div class="motto-content">
				<p class="motto-text">
					人生就像一艘小船，内心指引方向
				</p>
			</div>
		</div>

		<div class="card tech-card">
			<span class="label">关注</span>
			<div class="tech-content">
				<h3>科技，生活</h3>
				<div class="tech-icons">
					<Icon name="ph:cpu-bold" class="tech-icon" />
					<Icon name="ph:heartbeat-bold" class="tech-icon" />
					<Icon name="ph:infinity-bold" class="tech-icon" />
				</div>
			</div>
		</div>

		<div class="card music-card">
			<span class="label">音乐</span>
			<div class="music-content">
				<h3>民谣，古风</h3>
				<div class="music-note">
					<Icon name="ph:music-notes-bold" class="music-icon" />
				</div>
			</div>
		</div>

		<div class="card info-card personality-card">
			<span class="label">性格</span>
			<div class="content-center">
				<span class="value">主人公</span>
				<span class="value-small">IENFJ-T</span>
			</div>
			<a href="https://www.16personalities.com/" target="_blank" rel="noopener noreferrer" class="card-link">在
				16personalities 了解更多</a>
		</div>

		<div class="card specialty-card">
			<span class="label">特长</span>
			<p class="specialty-text">
				Ctrl C/V <span class="highlight"> MAX</span>
			</p>
		</div>

		<!-- 新增技能卡片 -->
		<div class="card skills-card">
			<span class="label">技能</span>
			<div class="skills-content">
				<div v-for="skill in skills" :key="skill.name" class="skill-item">
					<div class="skill-name">
						{{ skill.name }}
					</div>
					<div class="skill-bar">
						<div class="skill-level" :style="{ width: `${skill.level}%` }" />
					</div>
					<div class="skill-percent">
						{{ skill.level }}%
					</div>
				</div>
			</div>
		</div>

		<!-- 新增爱好卡片 -->
		<div class="card hobbies-card">
			<span class="label">爱好</span>
			<div class="hobbies-content">
				<div v-for="hobby in hobbies" :key="hobby.name" class="hobby-item">
					<Icon :name="hobby.icon" class="hobby-icon" />
					<span class="hobby-name">{{ hobby.name }}</span>
				</div>
			</div>
		</div>

		<div class="card contact-card">
			<span class="label">联系我</span>
			<div class="contact-links">
				<a href="https://github.com/youngdajie" target="_blank" rel="noopener noreferrer"
					title="GitHub:youngdajie">
					<Icon name="ph:github-logo-fill" />
				</a>
				<a href="mailto:ok@yangjie.site" target="_blank" rel="noopener noreferrer"
					title="Email:ok@yangjie.site">
					<Icon name="ph:envelope-simple-fill" />
				</a>
			</div>
		</div>
	</div>
</div>
</template>

<style lang="scss" scoped>
.about-page {
	max-width: 1000px;
	margin: 0 auto;
	padding: 2rem 1rem;
}

.about-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 3rem;
	padding: 1rem 0;
	text-align: left;

	.left-content {
		h1 {
			margin-bottom: 0.5rem;
			font-size: 2.5rem;
			font-weight: 800;
		}

		p {
			margin: 0;
			font-size: 1.2rem;
			color: var(--c-text-2);
		}
	}

	.right-content {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.avatar-frame {
		display: flex;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		width: 120px;
		height: 120px;
		border: 3px solid var(--c-border);
		border-radius: 20px;
		background-color: var(--c-bg-soft);
	}

	.avatar-image {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

.cards-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 1.5rem;
}

.card {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	overflow: hidden;
	min-height: 220px;
	padding: 0.5rem 0.8rem;
	border-radius: 0.8rem;
	box-shadow: none;
	background-color: var(--ld-bg-card);
	text-align: center;
	transform: none;
	transition: none;
}

.card:hover {
	box-shadow: none;
	transform: none;
	transition: none;
}

.label {
	position: absolute;
	opacity: 0.8;
	top: 1rem;
	left: 1.2rem;
	margin: 0;
	font-size: 0.8rem;
	color: var(--c-text-2);
}

.intro-card {
	grid-column: 1 / -1;
	color: var(--c-text-1);

	h2 {
		margin: 0.5rem 0;
		font-size: 3rem;
		font-weight: bold;
	}
}

.info-card {
	align-items: stretch;
	justify-content: center;
	padding: 2.5rem 1.5rem;
	color: var(--c-text-1);

	.special-info-item {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		align-items: flex-start;
		justify-content: center;
		position: relative;
		width: 100%;

		.label {
			flex-shrink: 0;
			position: static;
			width: 100%;
			margin-bottom: 0.5rem;
			text-align: left;
		}
	}

	.value {
		display: block;
		width: 100%;
		font-size: 2.5rem;
		font-weight: bold;
		text-align: center;
	}

	.value-small {
		display: block;
		width: 100%;
		font-size: 2rem;
		font-weight: bold;
		text-align: center;
	}

	.card-link {
		position: absolute;
		right: 0.8rem;
		bottom: 0.5rem;
		font-size: 0.8rem;
		text-decoration: none;
		color: var(--c-text-2);

		&:hover {
			color: var(--c-primary);
		}
	}
}

.motto-card {
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: var(--c-text-1);
	padding: 1.5rem;

	.motto-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.motto-text {
		margin: 0;
		font-size: 2.2rem;
		font-weight: bold;
		line-height: 1.3;
		text-align: left;
		position: relative;
		z-index: 1;
	}

}

.tech-card {
	display: flex;
	flex-direction: column;
	min-height: 250px;
	color: var(--c-text-1);
	padding: 1.5rem;

	.tech-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	h3 {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 1.5rem;
		text-align: center;
	}

	.tech-icons {
		display: flex;
		gap: 1.5rem;
	}

	.tech-icon {
		font-size: 2.5rem;
		color: var(--c-primary);
		transition: transform 0.3s ease;

		&:hover {
			transform: translateY(-5px);
		}
	}
}

.music-card {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 250px;
	text-shadow: none;
	color: var(--c-text-1);
	padding: 1.5rem;

	.music-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	h3 {
		font-size: 2rem;
		font-weight: bold;
		margin-bottom: 1rem;
		text-align: center;
	}

	.music-note {
		margin: 1rem 0;
	}

	.music-icon {
		font-size: 3rem;
		color: var(--c-primary);
		animation: bounce 2s infinite;
	}

}

@keyframes bounce {

	0%,
	100% {
		transform: translateY(0);
	}

	50% {
		transform: translateY(-10px);
	}
}

.personality-card {
	color: var(--c-text-1);
}

.specialty-card {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 1.8rem;
	font-weight: bold;
	text-align: center;
	color: var(--c-text-1);

	.specialty-text {
		margin: 0.2em 0;
	}

	.highlight {
		display: inline-block;
		font-size: 2.5rem;
		line-height: 1;
		color: var(--c-primary);
	}
}

.skills-card {
	grid-column: 1 / -1;
	color: var(--c-text-1);
	padding: 2rem 1.5rem;
}

.skills-content {
	width: 100%;
	max-width: 600px;
}

.skill-item {
	display: flex;
	align-items: center;
	margin-bottom: 1.5rem;

	&:last-child {
		margin-bottom: 0;
	}
}

.skill-name {
	width: 100px;
	font-size: 1rem;
	text-align: left;
}

.skill-bar {
	flex: 1;
	height: 10px;
	margin: 0 15px;
	background-color: var(--c-border);
	border-radius: 5px;
	overflow: hidden;
}

.skill-level {
	height: 100%;
	background-color: var(--c-primary);
	border-radius: 5px;
	transition: width 1s ease-in-out;
}

.skill-percent {
	width: 50px;
	font-size: 1rem;
	font-weight: bold;
	text-align: right;
}

.hobbies-card {
	grid-column: 1 / -1;
	color: var(--c-text-1);
	padding: 2rem 1.5rem;
}

.hobbies-content {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1.5rem;
	width: 100%;
}

.hobby-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 80px;

	@media (max-width: 768px) {
		width: 60px;
	}
}

.hobby-icon {
	font-size: 2.5rem;
	margin-bottom: 0.5rem;
	color: var(--c-primary);

	@media (max-width: 768px) {
		font-size: 2rem;
	}
}

.hobby-name {
	font-size: 1rem;

	@media (max-width: 768px) {
		font-size: 0.9rem;
	}
}

.contact-card {
	grid-column: 1 / -1;
	color: var(--c-text-1);

	.contact-links {
		display: flex;
		gap: 1.5rem;

		a {
			font-size: 2.5rem;
			color: var(--c-text-1);

			&:hover {
				color: var(--c-primary);
			}
		}
	}
}

.stats-card {
	grid-column: 1 / -1;
	margin-bottom: 1.5rem;
	color: var(--c-text-1);
}

.stats-card .label {
	color: inherit;
}

.stats-content {
	width: 100%;
}

.stats-range-section {
	margin-bottom: 0;

	h3 {
		margin-bottom: 1rem;
		font-size: 1.5rem;
		color: var(--c-text-1);
	}
}

.stats-grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
	margin-bottom: 0;

	@media (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
	}
}

.stat-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
}

.stat-value {
	margin-bottom: 0.25rem;
	font-size: 2rem;
	font-weight: bold;
	color: var(--c-text-1);
}

.stat-label {
	opacity: 0.9;
	font-size: 0.9rem;
	color: var(--c-text-2);
}

.stats-loading,
.stats-error {
	padding: 2rem;
	font-size: 1.1rem;
	text-align: center;
	color: var(--c-text-1);
}

.stats-error {
	color: var(--c-danger);
}
</style>
