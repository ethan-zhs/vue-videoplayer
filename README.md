# Vue Video Player

Vue Video Player 是一个跨平台的视频播放器，解决多端视频播放器功能样式统一问题。
1. 支持PC端和移动端样式
3. 支持视频源`mp4, hls, flv`

## Install

```bash
npm install vue-videoplayer
```

## Usage

### Vue Component

```javascript
// Vue Component
import Tmvv from 'vue-videoplayer'
import 'vue-videoplayer/dist/index.css'

// template
<Tmvv
    poster="poster url"
    url="video url"
/>
```

### Webpack config

```javascript
// webpack 配置打包 @tmedia/tmv css 文件
{
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
    include: [path.join(__dirname, 'node_modules/vue-videoplayer/dist')]
}
```

## Configuration

| 配置项| 类型| 默认值| 描述 | 可选 |
| :---- | :----: | :----: | ---- | :----: |
| poster| string | null | 视频封面图片 | 是 |
| url | string | null | 播放地址, 目前支持`.mp4 .flv .m3u8`三种播放源 | 否 |
| autoPlay | boolean | true | 自动播放 | 是 |
| mute | boolean | false | 静音 | 是 |
| platform | string | "pc" | 播放平台，支持`"pc"`和`"mobile"`两种UI | 是 |
| type | string | "mp4" | 播放源类型, 决定播放视频的方式, 取值包括`["hls","flv","mp4"] `| 是 |
| controls | string | true | 是否显示播放控件 | 是 |
| qualityList | array | null | 画质选择列表, 数据结构[{name: 'hd', cName: '高清', url: ''},{name: 'sd', cName: '标清', url: ''}] | 是 |
| playbackRateList | array | null | 播放速率列表, 数据结构[{value: '1', default: true},{value: '1.5'}] | 是 |
| toNextVideo | function | null | 点击下一条或播放结束回调函数 | 是 |
