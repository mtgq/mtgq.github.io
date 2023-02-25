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
            '/linux/': sidebarLinux(),
            '/mysql/': sidebarMysql(),
            '/about/': sidebarAbout(),
            '/docker/': sidebarDocker(),
            '/wsl/': sidebarWsl()
        }
    }
})

function nav() {
    return [
        {
            text: '代码知识库',
            items: [
                {
                    text: 'Docker',
                    link: '/docker/how-to-install-docker-in-ubuntu'
                },
                {
                    text: 'Linux',
                    link: '/linux/set-mirror-cn'
                },
                {
                    text: 'MySQL',
                    link: '/mysql/how-to-configure-mysql-remote-connection'
                },
                {
                    text: 'PHP',
                    link: '/php/started'
                },
                {
                    text: 'Tools',
                    link: '/tools/started'
                },
                {
                    text: 'Web',
                    link: '/guide/started'
                },
                {
                    text: 'Uni-app',
                    link: '/uniapp/css'
                },
                {
                    text: 'WSL',
                    link: '/wsl/how-to-open-systemd-in-wsl'
                }
            ]
        },
        {
            text: '笔记',
            items: [
                {
                    text: '关于',
                    link: '/about/me'
                },
                {
                    text: '婚礼',
                    link: '/about/marry'
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
                { text: 'VSCode如何便携', link: '/tools/started' },
                { text: 'VSCode配置', link: '/tools/vscode-setting' }
            ]
        },
        {
            text: '浏览器',
            collapsible: true,
            items: [
                { text: 'uBlock Origin 过滤规则', link: '/tools/uBlock Origin' },
                { text: '油猴脚本', link: '/tools/Tampermonkey' }
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
                { text: '文档部署', link: '/guide/started' }
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
                { text: '向数据添加元素', link: '/guide/array_add_item' }
            ]
        },
        {
            text: '代码格式化',
            collapsible: true,
            items: [
                { text: 'editorconfig文件格式', link: '/guide/editorconfig' }
            ]
        },
        {
            text: '工具类',
            collapsible: true,
            items: [
                { text: '安装yarn', link: '/guide/yarn-install' }
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
                { text: '项目推荐', link: '/uniapp/ext' }
            ]
        }
    ]
}

function sidebarPhp() {
    return [
        {
            text: 'php',
            collapsible: true,
            items: [
                { text: 'uniapp发布h5端', link: '/php/uniapp' },
                { text: '配置环境上传大文件', link: '/php/config-php-upload' },
                { text: '设置网站首页变灰色', link: '/php/设置网站首页变灰色' },
                { text: '部署二级网站', link: '/php/nginx' }
            ]
        }
    ]
}

function sidebarLinux() {
    return [
        {
            text: 'Linux',
            collapsible: true,
            items: [
                { text: '配置国内镜像源', link: '/linux/set-mirror-cn' },
                { text: 'Systemd 入门命令', link: '/linux/systemd-tutorial-commands' }
            ]
        }
    ]
}

function sidebarMysql() {
    return [
        {
            text: 'MySQL',
            collapsible: true,
            items: [
                { text: '配置远程连接', link: '/mysql/how-to-configure-mysql-remote-connection' }
            ]
        }
    ]
}

function sidebarDocker() {
    return [
        {
            text: 'docker',
            collapsible: true,
            items: [
                { text: 'ubuntu 安装 docker', link: '/docker/how-to-install-docker-in-ubuntu' },
                { text: 'docker 常用命令', link: '/docker/mingling' }
            ]
        }
    ]
}

function sidebarWsl() {
    return [
        {
            text: 'wsl',
            collapsible: true,
            items: [
                { text: 'wsl2 开启 Systemd', link: '/wsl/how-to-open-systemd-in-wsl' },
                { text: 'wsl2 常用命令', link: '/wsl/basic-commands' }
            ]
        }
    ]
}

function sidebarAbout() {
    return [
        {
            text: '关于',
            collapsible: true,
            items: [
                { text: '关于我', link: '/about/me' },
                { text: '关于本文档', link: '/about/this-doc' }
            ]
        },
        {
            text: '结婚',
            collapsible: true,
            items: [
                { text: '人生大事（ 结婚 ）', link: '/about/marry' }
            ]
        }
    ]
}