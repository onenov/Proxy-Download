# 代理文件下载服务

这是一个使用 Express.js 和 Axios 构建的简单文件下载代理服务，允许用户通过代理方式下载文件。

![](https://io.onenov.cn/file/202411232135852.png)

## 项目简介

用户可以在网页输入文件的 URL，然后由服务器通过代理方式下载该文件并提供给用户。

## 目录结构

- `public/`: 包含静态页面资源
- `server.js`: 服务器端代码

## 安装步骤

确保已安装 Node.js 和 npm。

1. 克隆项目到本地：
    ```bash
    git clone https://github.com/onenov/Proxy-Download.git
    cd Proxy-Download
    ```

2. 安装项目依赖：
    ```bash
    npm install
    ```

## 启动服务

### 使用 Node.js 直接启动

在项目目录下运行：

```bash
node server.js
```

服务器将在 `http://localhost:3000` 运行。

### 使用 PM2 管理启动

1. 安装 PM2 globally：
    ```bash
    npm install pm2 -g
    ```

2. 使用 PM2 启动服务：
    ```bash
    pm2 start ecosystem.config.js
    ```

## 使用说明

通过浏览器访问 `http://localhost:3000`。

- 输入要下载文件的 URL。
- 点击“下载”按钮，服务器将通过代理下载该文件。

## 常见问题

如果下载失败：
- 检查输入的 URL 是否正确。
- 检查控制台或 PM2 的日志输出查看错误信息。

## 贡献方式

欢迎提交问题、功能请求或代码改进。

## 许可证

本项目采用 MIT 许可证。