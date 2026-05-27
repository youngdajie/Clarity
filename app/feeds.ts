import type { FeedGroup } from '../app/types/feed'
// 友链检测 CLI 需要使用显式导入和相对路径
import { myFeed } from '../blog.config'
// eslint-disable-next-line unused-imports/no-unused-imports
import { getFavicon, getGithubAvatar, getGithubIcon, getOciqGroupAvatar, getOicqAvatar, OicqAvatarSize } from './utils/img'

export default [
	// 不清楚怎么写，请参考下方示例
	{
		name: 'example',
		desc: '描述信息',
		// @keep-sorted { "keys": ["date"] }
		entries: [],

	// {
	// 	name: '漫游',
	// 	desc: '网上冲浪时发现的精彩内容与常读订阅，与君共享。',
	// 	// @keep-sorted { "keys": ["date"] }
	// 	entries: [
	// 		{
	// 			author: '风记星辰',
	// 			desc: '热爱你来过的每度温暖',
	// 			feed: 'https://www.thyuu.com/feed',
	// 			link: 'https://www.thyuu.com/',
	// 			icon: 'https://std.thyuu.com/logo.svg',
	// 			avatar: 'https://std.thyuu.com/logo.svg',
	// 			archs: ['WordPress', '服务器'],
	// 			date: '2024-02-01',
	// 		},
	// 		{
	// 			author: 'Design Scenes',
	// 			link: 'https://fenx.work/',
	// 			feed: 'https://fenx.work/rss/',
	// 			icon: 'https://fenx.work/favicon.ico',
	// 			avatar: 'https://fenx.work/favicon.ico',
	// 			archs: ['Ghost', 'Fly'],
	// 			date: '2026-03-13',
	// 			comment: '聚焦设计与技术交叉领域，旗下Design Fragments不错。',
	// 		},
	// 	],
	},
] satisfies FeedGroup[]
