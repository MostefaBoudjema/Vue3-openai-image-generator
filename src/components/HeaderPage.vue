<template>
    <header>
        <div class="navbar">
            <h2>OpenAI Image Genrator</h2>
            <div class="nav-links">
                <ul></ul>
            </div>
            <img class="right" src="/favicon.png" alt="img" />
        </div>
    </header>
</template>

<script>
export default {};
</script>

<style>
/* Navbar */
.navbar {
    background: #333;
    color: #fff;
    padding: 1rem;
    /* display: flex; */
    justify-content: space-between;
    align-items: center;
}

/* .navbar ul {
    list-style: none;
    display: flex;
}

.navbar ul li {
    margin-left: 1rem;
} */

/* .navbar a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
}

.navbar a:hover {
    color: var(--primary-color);
} */

img {
    float: right;
    align-items: center;
    display: block;

    background: #333;
    color: #fff;
  position: relative;
  top: -45px;
    margin-left: auto;
    margin-right: auto;
}
</style>
