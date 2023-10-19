import type {DefaultTheme} from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
    {
        text: '开发手册',
        link: '/book/php',
        activeMatch: '/reference/'
    },
    {
        text: '代码知识库',
        items: [
            {
                text: 'mysql',
                link: '/mysql/how-to-configure-mysql-remote-connection'
            },
            {
                text: '工具',
                link: '/tools/started'
            },
            {
                text: 'wsl',
                link: '/wsl/basic-commands'
            },
            {
                text: '浏览器',
                link: '/browser/自用油猴脚本'
            }
        ]
    },
    {
        text: '前端',
        items: [
            {text: 'npm', link: 'frontend/npm'},
            {text: 'js', link: '/frontend/js/js-code-snippet-1'},
            {text: 'uniapp', link: '/frontend/uniapp/css'},
            {text: 'web相关', link: '/web/head'},
        ]
    },
    {
        text: '后端',
        items: [
            {
                text: 'php',
                link: '/backend/php/eq-and-ge'
            },
            {
                text: 'java',
                link: '/backend/java/java-started'
            }
        ]
    },
    {
        text: '服务器',
        items: [
            {
                text: 'linux',
                link: '/server/linux/knowledge-points'
            },
            {
                text: 'nginx',
                link: '/server/nginx/index'
            },
            {
                text: 'apache',
                link: '/server/apache/index'
            },
            {
                text: 'docker',
                link: '/server/docker/how-to-install-docker-in-ubuntu'
            },
        ]
    },
    {
        text: '搞机玩家',
        items: [
            {
                text: 'ios',
                link: '/ios/dopamine-rootless-in-sileo-plugins'
            },
            {
                text: 'windows',
                link: '/windows/windows-skip-user-account'
            }
        ]
    },
    {
        text: '笔记',
        items: [
            {
                text: '关于',
                link: '/notes/about/me'
            },
            {
                text: '婚礼',
                link: '/notes/about/marry'
            }
        ]
    }
]
