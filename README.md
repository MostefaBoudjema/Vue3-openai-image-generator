### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# OpenAI Image Generator

This is a simple image generator built with Vue3 that uses [OpenAI's Dall-E models](https://beta.openai.com/docs/guides/images) to generate images.

<img src="public/img/screen.png" width="800">
<img src="public/img/screen2.png" width="800">
<img src="public/img/screen3.png" width="800">

## Usage

Rename the `.env.example` file to `.env`.

Generate an API KEY at [OpenAI](https://beta.openai.com/) and add it to the `.env` file.

Install the dependencies

```bash
npm install
```

Run server

```bash
npm start
```

Visit `http://localhost:8080` in your browser.

The endpoint is at `POST http://localhost:8080/openai/generateimage`.

<a href="https://vue3-openai-image-generator.vercel.app/">Live demo Here</a> 
