import type { FeedGroup } from '../app/types/feed'
// 友链检测 CLI 需要使用显式导入和相对路径
import { myFeed } from '../blog.config'
// eslint-disable-next-line unused-imports/no-unused-imports
import { getFavicon, getGithubAvatar, getGithubIcon, getOciqGroupAvatar, getOicqAvatar, OicqAvatarSize } from './utils/img'

export default [
	// #region Clarity
	{
		name: '全部友联',
		desc: '网络孤岛，友链连线',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			myFeed,
			// {
			// 	author: 'GuuGuai',
			// 	sitenick: '杂记本',
			// 	title: '古怪杂记本',
			// 	desc: '一个什么都可能会写的博客',
			// 	link: 'https://blog.guuguai.site/',
			// 	feed: 'https://blog.guuguai.site/atom.xml',
			// 	icon: 'https://cravatar.cn/avatar/646331BFF8F19A0E05679C3CC0FC54D6',
			// 	avatar: 'https://cdn.libravatar.org/avatar/646331bff8f19a0e05679c3cc0fc54d6?s=160',
			// 	archs: ['Nuxt', 'Netlify'],
			// 	date: '2023-12-23',
			// 	comment: '高中同学，技术好友，爱好番剧/折腾。',
			// },
		],
	},
	// #endregion
] satisfies FeedGroup[]
