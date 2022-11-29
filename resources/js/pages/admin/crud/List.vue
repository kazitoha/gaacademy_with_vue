<template>
        <div>
            <div><h1>Users List</h1></div>
            <div v-for="singleUser in toahData">
                <p>{{ singleUser.name }}</p>
                <p>{{ singleUser.email }}</p>
                <p>{{ singleUser.created_at }}</p>
            </div>
        </div>
</template>

<script>
export default {
    name: "List",
    data() {
        return {
            toahData: {}
        };
    },
    mounted() {
        this.getTohaData();
    },


    methods: {
        getTohaData() {
            axios.get("/api/crud/list").then((response) => {
                this.toahData = response.data;
                console.log(this.toahData);
            }).catch((error) => {
                console.log(error)
            })
        }
    },
}
</script>


<style scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
</style>
