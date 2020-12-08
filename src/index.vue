<template>
    <div class="tmv-video-wrapper">
        <video :id="videoId" class="tmv-video" :poster="poster" :src="url" :autoplay="autoPlay"></video>
        <Error v-if="isError" errorMessage="NETWORK_ERROR" />
        <ControlsBar v-if="!isError && controls" v-bind="$props" :videoId="videoId" />
    </div>
</template>

<script>
import ControlsBar from './components/ControlsBar/index.vue'
import Error from './components/Error/index.vue'
import { randomHash, videoInitialize } from './utils'
import './index.less'

export default {
    name: 'VueApp',
    props: {
        poster: String,
        toNextVideo: {
            default: null
        },
        qualityList: {
            default: null
        },
        url: {
            required: true
        },
        type: {
            default: 'mp4'
        },
        autoPlay: {
            default: true
        },
        controls: {
            default: true
        },

        platform: {
            default: 'pc'
        },
        mute: {
            default: false
        },
        playbackRateList: {
            default: null
        }
    },
    components: {
        ControlsBar,
        Error
    },
    data: () => {
        return {
            videoId: `video_${randomHash(6)}`,
            video: null,
            isError: false
        }
    },
    mounted() {
        this.video = document.getElementById(this.videoId)
        this.videoInit()
    },
    methods: {
        videoInit() {
            videoInitialize({ type: this.type, autoPlay: this.autoPlay, video: this.video }, err => {
                console.log(err)
            })
        }
    }
}
</script>
