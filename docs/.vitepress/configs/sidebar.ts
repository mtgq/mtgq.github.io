import type {DefaultTheme} from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/book/': sidebarBook(),
    '/tools/': sidebarTools(),
    '/guide/': sidebarGuide(),
    '/backend/': sidebarBackend(),
    '/backend/java/': sidebarBackendJava(),
    '/mysql/': sidebarMysql(),
    '/notes/': sidebarNotes(),
    '/wsl/': sidebarWsl(),
    '/browser/': sidebarBrowser(),
    '/frontend/': sidebarFrontend(),
    '/server/': sidebarServer(),
    '/ios/': sidebarIos(),
    '/windows/': sidebarWin(),
    '/frontend/js/': sidebarJs(),
    '/web/': sidebarWeb()
}

function sidebarIos() {
    return [
        {
            text: 'ios',
            collapsible: true,
            items: [
                {text: 'Dopamine 无根越狱 Rootless', link: '/ios/dopamine-rootless-in-sileo-plugins'}
            ]
        }
    ]
}

function sidebarWin() {
    return [
        {
            text: 'windows',
            collapsible: true,
            items: [
                {text: '跳过 Windows 11 账户', link: '/windows/windows-skip-user-account'},
                {text: 'wps操作技巧', link: '/windows/wps-skill'},
                {text: '浏览器搜索引擎', link: '/windows/browser-url'}
            ]
        }
    ]
}

function sidebarBook() {
    return [
        {
            text: '编程语言手册',
            items: [
                {text: 'php', link: '/book/php'},
                {text: 'java', link: '/book/java',},
                {text: 'vue', link: '/book/vue'},
                {text: 'uni-app', link: '/book/uni-app'},
                {text: 'web-ui', link: '/book/web-ui'}
            ]
        },
        {
            text: '开发工具手册',
            items: [
                {text: '编辑器', link: '/book/book-development-tool'}
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

function sidebarBackendJava() {
    return [
        {
            text: 'java',
            collapsible: true,
            items: [
                {text: '环境搭建工具下载', link: '/backend/java/java-started'}
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
                {text: '设置网站首页变灰色', link: '/backend/php/设置网站首页变灰色'},
                {text: 'php与phpMyAdmin对应关系', link: '/backend/php/phpMyAdmin'},
                {text: 'fastadmin', link: '/backend/php/fastadmin'}
            ]
        },
        {
            text: 'thinkphp',
            collapsible: true,
            items: [
                {text: 'paginate不使用each', link: '/backend/php/thinkphp5-paginate-foreach'}
            ]
        },
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
                {text: 'sql_mode区别', link: '/mysql/sql_mode-diff'},
                {text: 'server has gone away', link: '/mysql/server-has-gone-away'},
                {text: 'replace替换函数使用', link: '/mysql/mysql-replace'}
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
                {text: 'wsl2 常用命令', link: '/wsl/basic-commands'},
                {text: 'wsl2 开启 Systemd', link: '/wsl/common-problem-in-wsl'}
            ]
        }
    ]
}

function sidebarNotes() {
    return [
        {
            text: '关于',
            collapsible: true,
            items: [
                {text: '关于我', link: '/notes/about/me'},
                {text: '关于本文档', link: '/notes/about/this-doc'}
            ]
        },
        {
            text: '结婚',
            collapsible: true,
            items: [
                {text: '人生大事（ 结婚 ）', link: '/notes/about/marry'}
            ]
        }
    ]
}

function sidebarWeb() {
    return [
        {
            text: 'web内容',
            collapsible: true,
            items: [
                {text: '自用油猴脚本', link: '/web/head'},
                {text: 'Layui', link: '/web/layui'},
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
                {text: '论坛问题收集', link: '/frontend/uniapp/bbs'},
                {text: 'page引入css', link: '/frontend/uniapp/css'},
                {text: '封装cache', link: '/frontend/uniapp/cache'},
                {text: '项目中定义常量', link: '/frontend/uniapp/define'},
                {text: 'data中使用默认日期', link: '/frontend/uniapp/date'},
                {text: '优秀项目记录', link: '/frontend/uniapp/ext'},
                {text: 'HBuilderX插件记录', link: '/frontend/uniapp/HBuilderX'},
                {text: '开发注意事项', link: '/frontend/uniapp/feature'}
            ]
        }
    ]
}

function sidebarJs() {
    return [
        {
            text: '代码片段',
            collapsible: true,
            items: [
                {text: '收集的片段', link: '/frontend/js/js-code-snippet-1'}
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
                {text: 'nginx配置文件详解', link: '/server/nginx/index'}
            ]
        },
        {
            text: 'apache',
            collapsible: true,
            items: [
                {text: 'apache配置文件详解', link: '/server/apache/index'}
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