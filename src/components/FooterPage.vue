<template>
    <header>
        <div class="footer">
            <h5><i aria-hidden="true"></i></h5>
            <h5><i aria-hidden="true"></i></h5>
            <h5><i aria-hidden="true"></i></h5>
            <h5><i aria-hidden="true"></i></h5>
            <h5><i aria-hidden="true"></i></h5>
            <h5><i aria-hidden="true"></i></h5>
            <h5><i aria-hidden="true">© Mostefa Boudjema 2023 </i></h5>
            <div class="nav-links">
                <ul></ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
    background: #333;
    color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer ul {
    list-style: none;
    display: flex;
}

.footer ul li {
    margin-left: 1rem;
}

.footer a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
}

.footer a:hover {
    color: var(--primary-color);
}

.footer h5{
    font-size: 0.7rem;
    text-align: right;
    color: rgb(255, 255, 255);
}
</style>
