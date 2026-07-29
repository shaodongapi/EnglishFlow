# 部署到手机可离线(推荐:GitHub Pages)

Service Worker 只在**受信任的 HTTPS 源**下注册。局域网 + 自签证书(mkcert)在手机上
(尤其 iOS)不可靠,因此**生产用离线请部署到正经 HTTPS 静态主机**。GitHub Pages 免费、自带 HTTPS、
且本项目已配好自动部署工作流。

## 步骤

1. 把项目推到 GitHub 仓库(如 `yourname/englishflow`)。
2. 仓库 **Settings → Pages → Build and deployment → Source** 选 **"GitHub Actions"**。
3. 推送到 `main` 分支。`.github/workflows/deploy.yml` 会自动:
   - `npm ci` + `npm run build`(以 `BASE_PATH=/<仓库名>/` 构建,自动适配子路径)
   - 上传 `dist/` 为 Pages 产物并发布
4. 部署完成后,访问 `https://yourname.github.io/englishflow/`。

## 安装为手机 App(离线)

- **iOS Safari**:打开网址 → 分享 →「添加到主屏幕」。首次在线加载后,**飞行模式仍可正常使用**。
- **Android Chrome**:打开网址 → 菜单 →「添加到主屏幕 / 安装应用」。

> 首次必须在线访问一次(让 SW 预缓存全部资源);之后即可完全离线。

## 本地验证离线(可选)

```bash
npm run build
npm run preview        # 走 vite 预览(本机 HTTPS,浏览器视为可信)
# 浏览器打开后 → DevTools → Application → Service Workers 确认已激活
# 再断网刷新,验证仍可用
```

## 部署到根域(自定义域名 / `<owner>.github.io`)

若部署到域名根(非子路径),`base` 应为 `/`,无需 `BASE_PATH`。
手动构建:`npm run build`(默认 `base:'/'`)即可。GitHub Actions 仅用于项目子路径页。

## 关于 `base`

- 子路径页(`<owner>.github.io/<repo>/`)→ `BASE_PATH=/<repo>/`(工作流已自动设置)。
- 根域 → 默认 `'/'`。
- `manifest` 的 `start_url`/`scope` 用相对路径(`'./'`),两种部署都兼容。
