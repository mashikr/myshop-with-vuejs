<template>
    <div>
        <nav class="navbar fixed-top navbar-expand-md navbar-dark bg-primary">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <router-link class="navbar-brand" :to="{ name: 'home' }">My Shop</router-link>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <router-link :to="{ name: 'home' }" tag="li" activeClass="active" exact>
                        <a class="nav-link">Home</a>
                    </router-link>
                    <router-link to="/categories" tag="li" activeClass="active">
                        <a class="nav-link">Categories</a>
                    </router-link>
                    <router-link to="/checkout" tag="li" activeClass="active">
                        <a class="nav-link">Checkout</a>
                    </router-link>
                </ul>
                <form @submit.prevent="searchItems" class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" v-model= "key" type="search" placeholder="Search" aria-label="Search" required>
                <input type="submit" class="btn btn-outline-light" value="Search">
                </form>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data () {
        return {
            key: ''
        }
    },
    methods: {
        searchItems () {
            if (this.key.trim()) {
                this.$router.push({ name: 'search', query: { key: this.key }})
                this.$router.go({ name: 'search', query: { key: this.key }})
            }
        }
    }
}
</script>