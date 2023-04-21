import {defineConfig} from 'vitepress'

export default defineConfig({
    lang: 'zh-CN',
    title: '铃芽之旅',
    description: 'Vite & Vue powered static site generator.',
    lastUpdated: true,
    cleanUrls: true,
    head: [
        ['link', {
            rel: "icon",
            type: "image/png",
            href: "https://github.githubassets.com/favicons/favicon.svg"
        }],
        ['meta', {name: "theme-color", content: "#ffffff"}],
    ],

    themeConfig: {
        lastUpdatedText: 'Updated Date',
        logo: 'https://vuejs.org/images/logo.png',
        search: {
            provider: 'local'
        },
        nav: nav(),
        sidebar: {
            '/tools/': sidebarTools(),
            '/guide/': sidebarGuide(),
            '/backend/': sidebarBackend(),
            '/mysql/': sidebarMysql(),
            '/about/': sidebarAbout(),
            '/wsl/': sidebarWsl(),
            '/browser/': sidebarBrowser(),
            '/book/': sidebarBook(),
            '/frontend/': sidebarFrontend(),
            '/server/': sidebarServer(),
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/mtgq/mtgq.github.io'},
        ],
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-${new Date().getFullYear()} MTGQ_TOP'
        }
    }
})

function nav() {
    return [
        {
            text: '开发手册',
            items: [
                {
                    text: 'php',
                    link: '/book/book-php',
                },
                {
                    text: 'vue',
                    link: '/book/book-vue',
                },
                {
                    text: 'uniapp',
                    link: '/book/book-uniapp',
                },
                {
                    text: 'java',
                    link: '/book/book-java',
                },

            ]
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
                {text: 'uniapp', link: '/frontend/uniapp/css'},
            ]
        },
        {
            text: '后端',
            items: [
                {
                    text: 'php',
                    link: '/backend/php/config-php-upload'
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
                    link: '/server/nginx'
                },
                {
                    text: 'apache',
                    link: '/server/apache'
                },
                {
                    text: 'docker',
                    link: '/server/docker/how-to-install-docker-in-ubuntu'
                },
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

function sidebarBook() {
    return [
        {
            text: '编程语言手册',
            items: [
                {text: 'php', link: '/book/book-php'},
                {text: 'vue', link: '/book/book-vue'},
                {text: 'uniapp', link: '/book/book-uniapp'},
            ]
        },
        {
            text: '开发工具手册',
            items: [
                {text: 'dev-tools', link: '/book/book-development-tool'}
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
                {text: 'VSCode如何便携', link: '/tools/started'},
                {text: 'VSCode配置', link: '/tools/vscode-setting'}
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
                {text: '文档部署', link: '/guide/started'}
            ]
        },
        {
            text: 'web',
            collapsible: true,
            items: [
                {text: 'vue封装storage', link: '/guide/storage'},
                {text: '项目中定义常量', link: '/guide/define'},
                {text: '常用验证类收集', link: '/guide/validate'},
                {text: '表单验证正则类', link: '/guide/formValidate'},
                {text: 'eslint配置', link: '/guide/eslint'},
                {text: '向数组添加元素', link: '/guide/array_add_item'}
            ]
        },
        {
            text: '代码格式化',
            collapsible: true,
            items: [
                {text: 'editorconfig文件格式', link: '/guide/editorconfig'}
            ]
        }
    ]
}

function sidebarBackend() {
    return [
        {
            text: 'php',
            collapsible: true,
            items: [
                {text: 'eq-ge都是什么意思', link: '/backend/php/eq-and-ge'},
                {text: 'uniapp发布h5端', link: '/backend/php/uniapp'},
                {text: '配置环境上传大文件', link: '/backend/php/config-php-upload'},
                {text: '设置网站首页变灰色', link: '/backend/php/设置网站首页变灰色'}
            ]
        },
        {
            text: 'java',
            collapsible: true
        }
    ]
}

function sidebarMysql() {
    return [
        {
            text: 'MySQL',
            collapsible: true,
            items: [
                {text: '配置远程连接', link: '/mysql/how-to-configure-mysql-remote-connection'},
                {text: 'mysqldump使用', link: '/mysql/how-to-use-mysqldump'},
                {text: 'sql_mode区别', link: '/mysql/sql_mode-diff'}
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
                {text: 'wsl2 开启 Systemd', link: '/wsl/common-problem-in-wsl'},
                {text: 'wsl2 常用命令', link: '/wsl/basic-commands'}
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
                {text: '关于我', link: '/about/me'},
                {text: '关于本文档', link: '/about/this-doc'}
            ]
        },
        {
            text: '结婚',
            collapsible: true,
            items: [
                {text: '人生大事（ 结婚 ）', link: '/about/marry'}
            ]
        }
    ]
}

function sidebarBrowser() {
    return [
        {
            text: '浏览器相关',
            collapsible: true,
            items: [
                {text: '自用油猴脚本', link: '/browser/自用油猴脚本'},
                {text: 'uBlock Origin 过滤规则', link: '/browser/uBlock-origin'},
            ]
        }
    ]
}

function sidebarFrontend() {
    return [
        {
            text: '前端工具使用&&配置',
            collapsible: true,
            items: [
                {text: 'npm', link: '/frontend/npm'}
            ]
        },
        {
            text: 'uniapp',
            collapsible: true,
            items: [
                {text: 'page引入css', link: '/frontend/uniapp/css'},
                {text: '封装cache', link: '/frontend/uniapp/cache'},
                {text: '项目中定义常量', link: '/frontend/uniapp/define'},
                {text: 'data中使用默认日期', link: '/frontend/uniapp/date'},
                {text: '项目推荐', link: '/frontend/uniapp/ext'}
            ]
        }
    ]
}

function sidebarServer() {
    return [
        {
            text: 'linux',
            collapsible: true,
            items: [
                {text: '单个知识点', link: '/server/linux/knowledge-points'},
                {text: '配置国内镜像源', link: '/server/linux/set-mirror-cn'},
                {text: 'Systemd 入门命令', link: '/server/linux/systemd-tutorial-commands'},
                {text: '防火墙使用', link: '/server/linux/fanghuoqiang'}
            ]
        },
        {
            text: 'nginx',
            collapsible: true,
            items: [
                {text: 'nginx配置文件详解', link: '/server/nginx'}
            ]
        },
        {
            text: 'apache',
            collapsible: true,
            items: [
                {text: 'apache配置文件详解', link: '/server/apache'}
            ]
        },
        {
            text: 'docker',
            collapsible: true,
            items: [
                {text: '安装docker', link: '/server/docker/how-to-install-docker-in-ubuntu'},
                {text: 'docker 常用命令', link: '/server/docker/mingling'}
            ]
        }
    ]
}
