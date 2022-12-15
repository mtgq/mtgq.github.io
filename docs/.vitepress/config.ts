import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'zh-CN',
    title: '知识库',
    description: 'Vite & Vue powered static site generator.',

    cleanUrls: 'without-subfolders',

    markdown: {
        headers: {
            level: [0, 0]
        }
    },

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/tools/': sidebarTools(),
            '/guide/': sidebarGuide(),
            '/uniapp/': sidebarUniapp(),
            '/php/': sidebarPhp(),
        },
    }
})

function nav() {
    return [
        {
            text: '代码知识库',
            items: [
                {
                    text: '工具1',
                    link: '/tools/started'
                },
                {
                    text: 'web',
                    link: '/guide/started'
                },
                {
                    text: 'uni-app',
                    link: '/uniapp/css'
                },
                {
                    text: 'PHP',
                    link: '/php/started'
                },
                {
                    text: 'Linux',
                    link: '/linux/started'
                },
                {
                    text: 'MySQL',
                    link: '/mysql/how-to-configure-mysql-remote-connection'
                }
            ]
        }
    ]
}

function sidebarTools() {
    return [
        {
            text: '工具',
            collapsible: true,
            items: [
                { text: 'vscode使用', link: '/tools/started' },
            ]
        }
    ]
}

function sidebarGuide() {
    return [
        {
            text: '指引',
            collapsible: true,
            items: [
                { text: '文档说明', link: '/guide/started' },
            ]
        },
        {
            text: 'web',
            collapsible: true,
            items: [
                { text: 'vue封装storage', link: '/guide/storage' },
                { text: '项目中定义常量', link: '/guide/define' },
                { text: '常用验证类收集', link: '/guide/validate' },
                { text: '表单验证正则类', link: '/guide/formValidate' },
                { text: 'eslint配置', link: '/guide/eslint' },
                { text: '向数据添加元素', link: '/guide/array_add_item' },
            ]
        },
        {
            text: '代码格式化',
            collapsible: true,
            items: [
                { text: 'editorconfig文件格式', link: '/guide/editorconfig' },
            ]
        },
        {
            text: '工具类',
            collapsible: true,
            items: [
                { text: '安装yarn', link: '/guide/yarn-install' },
            ]
        }
    ]
}

function sidebarUniapp() {
    return [
        {
            text: 'uniapp',
            collapsible: true,
            items: [
                { text: 'page引入css', link: '/uniapp/css' },
                { text: '封装cache', link: '/uniapp/cache' },
                { text: '项目中定义常量', link: '/uniapp/define' },
                { text: 'data中使用默认日期', link: '/uniapp/date' },
                { text: '项目推荐', link: '/uniapp/ext' },
            ]
        }
    ]
}

function sidebarPhp(){
    return [
        {
            text: 'php',
            collapsible: true,
            items: [
                { text: 'uniapp发布h5端', link: '/php/uniapp' },
            ]
        }
    ]
}
