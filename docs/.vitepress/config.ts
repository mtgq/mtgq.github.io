import {defineConfig} from "vitepress";
import {nav} from './configs/nav';
import {sidebar} from './configs/sidebar';

export default defineConfig({
    lang: 'zh-CN',
    title: 'Powered By Suzume',
    description: '编程的成长之路，包含编程知识、日常提效工具等',
    lastUpdated: true,
    cleanUrls: true,

    themeConfig: {
        i18nRouting: false,
        nav,
        sidebar,
        socialLinks: [
            {icon: 'github', link: 'https://github.com/mtgq/mtgq.github.io'},
        ],
        darkModeSwitchLabel: '外观',
        returnToTopLabel: '返回顶部',
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        footer: {
            message: '如有转载或 CV 的请标注本站原文地址',
            copyright: 'Copyright © 2023 mtgq.top All rights reserved'
        }
    }
})
