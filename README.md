# benguan.work

关新宇的个人网站项目

## 环境配置

本项目使用环境变量来存储敏感信息，如API密钥。请按照以下步骤进行配置：

1. 在项目根目录创建一个`.env`文件
2. 根据`.env.example`文件中的示例，添加必要的环境变量：
   ```
   VITE_DEEPSEEK_API_KEY=your_deepseek_api_key_here
   ```
3. 确保`.env`文件已添加到`.gitignore`中，防止敏感信息被提交到公共仓库

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 部署

```bash
# 部署到GitHub Pages
npm run deploy
```
