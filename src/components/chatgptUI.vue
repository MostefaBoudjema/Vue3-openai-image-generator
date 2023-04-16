<template>
    <div class="error" v-if="error">{{ error }}</div>
    <main class="main">
        <section class="showcase">
            <form @submit.prevent id="image-form" class="form-class">
                <h1>Describe An Image</h1>
                <div class="form-control">
                    <input
                        type="text"
                        id="prompt"
                        v-model="prompt"
                        placeholder="Enter Text"
                    />
                    <!-- <button @click='prompt=""'>x</button> -->
                </div>
                <!-- size -->
                <div class="form-control">
                    <select name="size" id="size" v-model="size">
                        <option value="small" selected>Small (256x256)</option>
                        <option value="medium">Medium (512x512)</option>
                        <option value="large">Large (1024x1024)</option>
                    </select>
                </div>
                <!-- size -->
                <div class="form-control">
                    <select name="howmany" id="howmany" v-model="howmany">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div class="flex-container">
                    <button @click="generateImage" class="btn">Generate</button>
                    <button @click="ClearImage" class="btn red">Clear</button>
                </div>
            </form>
        </section>
        <section>
            <slider-page
                width="40"
                v-if="false"
                :items="Object.values(imageUrl)"
            />
            <loading-page v-show="spinner" :spaceT="10" :spaceB="10" />
            <div v-show="!spinner" class="flex" v-if="imageUrl">
                <img
                    v-for="(image, index) in imageUrl.data"
                    :key="index"
                    :src="image.url"
                    :alt="image.url"
                />
            </div>
        </section>
    </main>
</template>
<script>
import axios from "axios";

import LoadingPage from "../components/LoadingPage.vue";
import SliderPage from "./SliderPage.vue";
export default {
    name: "chatgptUI",
    components: {
        LoadingPage,
        SliderPage,
    },
    data() {
        return {
            error: "",
            prompt: "",
            spinner: false,
            // prompt: "Annaba city at night",
            size: "small",
            howmany: 1,
            imageUrl: null,
        };
    },
    methods: {
        obj2array(obj) {
            // return obj.values();
            return Object.values(obj);
        },
        ClearImage() {
            this.imageUrl = null;
            this.error = "";
            this.spinner = false;
        },
        async generateImage() {
            this.imageUrl = null;
            this.error = "";
            this.spinner = true;
            const imageSize =
                this.size === "small"
                    ? "256x256"
                    : this.size === "medium"
                    ? "512x512"
                    : "1024x1024";
            try {
                const response = await axios.post(
                    "https://api.openai.com/v1/images/generations",
                    {
                        model: "image-alpha-001",
                        prompt: this.prompt,
                        size: imageSize,
                        n: parseInt(this.howmany),
                        response_format: "url",
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${process.env.VUE_APP_OPENAI_API_KEY}`, // Replace with your OpenAI API key
                        },
                    }
                );
                this.imageUrl = response.data;

                this.spinner = false;
            } catch (error) {
                console.error(error.response.status);
                this.spinner = false;
                // if (error.response.status == "400") {
                //     }
                    this.error = error.response.data.error.message;
            }
        },
    },
};
</script>

<style scoped>
.main {
    padding-bottom: 50px;
    background: var(--primary-color);
}
.form-control {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
}
.showcase h1 {
    color: #fff;
}
.form-class {
    padding: 20;
    color: rgb(85, 0, 255);
}
.red {
    color: #f00;
}
.error {
    background-color: #ff0000;
    color: #fff;
    text-align: center;
    font-weight: 600;
    line-height: 75px;
    font-size: 30px;
}
.flex-container {
    display: flex;
    flex-wrap: nowrap;
    /* background-color: DodgerBlue; */
}
.flex-container > div {
    /* background-color: #f1f1f1; */
    width: 100px;
    margin: 10px;
    text-align: center;
    line-height: 75px;
    font-size: 30px;
}

.flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: wrap;
    width: 100%;
    padding: 60px;
    background-color: var(--primary-color);
}
</style>
