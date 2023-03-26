<template>
    <div class="error" v-if="error">{{ error }}</div>
    <main class="">
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
                        <option value="5">5</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div class="flex-container">
                    <button @click="generateImage" class="btn">Generate</button>
                    <button @click="ClearImage" class="btn red">Clear</button>
                </div>
            </form>
        </section>
        <section>
            <div class="flex" v-if="imageUrl">
                <img
                    v-for="(image, index) in imageUrl.data"
                    :key="index"
                    :src="image.url"
                    :alt="image.url"
                />
            </div>
        </section>
    </main>

    <div class="spinner"></div>
</template>
<script>
import axios from "axios";

export default {
    name: "chatgptUI",
    data() {
        return {
            error: "",
            prompt: "",
            // prompt: "Annaba city at night",
            size: "small",
            howmany: 2,
            imageUrl: null,
        };
    },
    methods: {
        ClearImage() {
            this.imageUrl = null;
            this.error = "";
        },
        async generateImage() {
            
            this.imageUrl = null;
            this.error = "";
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
                        // method:"POST"
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${process.env.VUE_APP_OPENAI_API_KEY}`// Replace with your OpenAI API key
                        },
                    }
                );
                this.imageUrl = response.data;
            } catch (error) {
                this.error = error;
                console.error(error);
            }
        },
    },
};
</script>

<style scoped>
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
    background-color: #34a853;
}
</style>
