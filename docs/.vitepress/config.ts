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
            '/wsl/': sidebarWsl(),
            '/browser/': sidebarBrowser(),
            '/book/': sidebarBook()
        }
    }
})

function nav() {
    return [
        {
            text: '手册大全',
            items: [
                {
                    text: '完全开发手册',
                    link: '/book/book-php',
                }
            ]
        },
        {
            text: '代码知识库',
            items: [
                {
                    text: 'docker',
                    link: '/docker/how-to-install-docker-in-ubuntu'
                },
                {
                    text: 'linux',
                    link: '/linux/set-mirror-cn'
                },
                {
                    text: 'mysql',
                    link: '/mysql/how-to-configure-mysql-remote-connection'
                },
                {
                    text: '工具',
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
            text: '编程语言',
            items: [
                {
                    text: 'php',
                    link: '/php/started'
                },
              {
                text: 'java',
                link: '/java/java-started'
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

function sidebarBook() {
    return [
      {
        text: '编程手册大全',
        items: [
          { text: 'php', link: '/book/book-php' },
          { text: 'vue', link: '/book/book-vue' }
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
                { text: '向数组添加元素', link: '/guide/array_add_item' }
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
                { text: 'eq-ge都是什么意思', link: '/php/eq-and-ge' },
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
                { text: '单个知识点', link: '/linux/knowledge-points' },
                { text: '配置国内镜像源', link: '/linux/set-mirror-cn' },
                { text: 'Systemd 入门命令', link: '/linux/systemd-tutorial-commands' },
                { text: '防火墙使用', link: '/linux/fanghuoqiang' }
            ]
        } ,
        {
            text: 'nginx',
            collapsible: true,
            items: [
                { text: 'nginx单个网站配置', link: '/linux/nginx-site-conf' }
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
                { text: 'wsl2 开启 Systemd', link: '/wsl/common-problem-in-wsl' },
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

function sidebarBrowser() {
    return [
        {
            text: '浏览器相关',
            collapsible: true,
            items: [
                { text: '自用油猴脚本', link: '/browser/自用油猴脚本' },
                { text: 'uBlock Origin 过滤规则', link: '/browser/uBlock-origin' },
            ]
        }
    ]
}
