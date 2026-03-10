---
title: Netease Cloud Music API
icon: fa-solid fa-music
---

- [Project Repository](https://gitlab.com/Binaryify/neteasecloudmusicapi)

## Public Servers

::: warning
**Please use public servers with caution for login operations.**

**We are not responsible for any account theft or other issues caused by using public servers.**
:::

<netease-api />

::: warning
If you encounter login issues with self-hosted API.

Please make sure you follow the deployment guide below and change the login method to email login.
:::

## Configuration Location

### V4

```toml {4}
# API settings
[api]
# Netease Cloud Music
netease-link = "https://ncm.zhenxin.me"
```

### V2

```json {8}
/// API settings
  "api": {
    /// Netease Cloud Music API address
    ///
    /// Using open source project NeteaseCloudMusicApi
    /// Recommended to self-host, requires Node.js environment
    /// Repository: https://github.com/Binaryify/NeteaseCloudMusicApi
    "netease": "https://ncm.zhenxin.me"
  },
```

## Deployment

Before deployment, make sure you have the following environment installed

- [Git](https://git-scm.com/download)
- [Node.js](https://nodejs.org/)

1. Get the code

```shell
wget https://registry.npmmirror.com/NeteaseCloudMusicApi/-/NeteaseCloudMusicApi-4.27.0.tgz
tar -xzvf NeteaseCloudMusicApi-4.27.0.tgz
mv package NeteaseCloudMusicApi
cd NeteaseCloudMusicApi
```

2. Install dependencies

```shell
npm install
```

3. Run

```shell
node app.js
```

4. Custom port

4.1 Linux

```shell
PORT=4000 node app.js
```

4.2 Windows

```bat
set PORT=4000 && node app.js
```
