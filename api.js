document.getElementById('fetchData').addEventListener('click', () => {
    promiseAPI1()
        .then(() => promiseAPI2())
        .then(() => promiseAPI3())
        .catch((error) => console.error('Error fetching data:', error));
});

function promiseAPI1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/posts')
                .then(response => response.json())
                .then(data => {
                    displayData('Posts', data.posts);
                    resolve();
                })
                .catch(err => reject(err));
        }, 1000);
    });
}

function promiseAPI2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/products')
                .then(response => response.json())
                .then(data => {
                    displayData('Products', data.products);
                    resolve();
                })
                .catch(err => reject(err));
        }, 2000);
    });
}

function promiseAPI3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/todos')
                .then(response => response.json())
                .then(data => {
                    displayData('Todos', data.todos);
                    resolve();
                })
                .catch(err => reject(err));
        }, 3000);
    });
}

function displayData(type, items) {
    const table = document.getElementById('dataTable');
    items.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${type}</td><td>${JSON.stringify(item)}</td>`;
        table.appendChild(row);
    });
}
