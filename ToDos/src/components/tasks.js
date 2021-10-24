const tasks = {
    items: [],
    filter: '',
    add: function (item) {

        this.items.push(item);
    },

    remove: function (key) {
        this.items.splice(key, 1);
    },

    get: function () {

        return this.items.filter((item) => {
            return (!this.filter || this.filter === 'all') || item.status === this.filter;
        });
    }
}

export default tasks;