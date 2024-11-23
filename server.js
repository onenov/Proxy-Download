const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

const PORT = 3000;

// 静态页面资源
app.use(express.static(path.join(__dirname, 'public')));

// 下载代理路由
app.get('/download', async (req, res) => {
    const downloadURL = req.query.url;
    if (!downloadURL) {
        return res.status(400).send('Missing download URL');
    }

    try {
        // 请求远程资源
        const response = await axios.get(downloadURL, {
            responseType: 'stream', // 流式转发数据
        });

        // 提取文件名（从 URL 或 Content-Disposition 头中）
        const fileName =
            response.headers['content-disposition']?.match(/filename="(.+)"/)?.[1] ||
            downloadURL.split('/').pop() ||
            'file';

        // 设置响应头以直接下载
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        res.setHeader('Content-Type', response.headers['content-type'] || 'application/octet-stream');

        // 将远程文件流直接转发到客户端
        response.data.pipe(res);
    } catch (error) {
        console.error('Download error:', error.message);
        res.status(500).send('Failed to download the file.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});