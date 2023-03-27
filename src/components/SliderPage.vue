<template>
    <div class="slider">
        <div
            v-if="items"
            class="slider-container"
            :style="{ transform: 'translateX(' + translateValue + '%)' }"
        >
            <div
                v-for="(item, index) in items[1]"
                :key="index"
                class="slider-item"
            >
                <img :src="item.url" :alt="item.url" class="slider-image" />
            </div>
        </div>
        <button class="slider-button left" @click="slide(-1)">
            <i class="fa fa-chevron-left"></i>
        </button>
        <button class="slider-button right" @click="slide(1)">
            <i class="fa fa-chevron-right"></i>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            currentIndex: 0,
            translateValue: 0,
        };
    },
    methods: {
        slide(direction) {
            const itemWidth = 100 / this.items[1].length;
            if (direction === 1) {
                if (this.currentIndex === this.items[1].length - 1) {
                    this.currentIndex = 0;
                } else {
                    this.currentIndex++;
                }
            } else {
                if (this.currentIndex === 0) {
                    this.currentIndex = this.items[1].length - 1;
                } else {
                    this.currentIndex--;
                }
            }
            this.translateValue = -1 * this.currentIndex * itemWidth;
        },
    },
};
</script>

<style>
.slider {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.slider-container {
    display: flex;
    width: 100%;
    transition: transform 0.5s ease;
}

.slider-item {
    flex-basis: 25%;
}

.slider-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.slider-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 24px;
    width: 50px;
    height: 50px;
}

.slider-button.left {
    left: 0;
}

.slider-button.right {
    right: 0;
}
</style>
