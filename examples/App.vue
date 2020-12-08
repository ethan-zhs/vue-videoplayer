<template>
    <div>
        <h1>Vue Components</h1>
        <div class="video-demo">
            <h2>Vue视频组件</h2>
            <Tmvv
                poster="https://img2-cloud.itouchtv.cn/news/877c305a8fce17015150622dad25be06.png"
                url="https://vod.gdtv.cn/m3u8/202011/160614192836.m3u8"
                type="hls"
                platform="pc"
                :autoPlay="false"
                :toNextVideo="toNextVideo"
            />
        </div>
    </div>
</template>

<script>
import Tmvv from '../src/index.vue'

export default {
    name: 'app',
    components: {
        Tmvv
    },
    methods: {
        toNextVideo() {
            alert('下一个视频的回调')
        }
    }
}
</script>
