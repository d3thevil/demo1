const apiUrl = 'https://fakestoreapi.com/products';

// Fetch data using Callbacks
function fetchDataWithCallback(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true); 
    xhr.onload = function() {
        const data = JSON.parse(xhr.responseText);
        callback(data);
    };
    xhr.send();
}


// Fetch data using Promises
function fetchDataWithPromise() {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', apiUrl);
        xhr.onload = function() {
            const data = JSON.parse(xhr.responseText);
            resolve(data);
        };
        xhr.send();
    });
}


// Fetch data using async/await
async function fetchDataWithAsync() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
}


// Using Callbacks
fetchDataWithCallback(data => {
    console.log('Data fetched with callback:', data);
});

// Using Promises
fetchDataWithPromise().then(data => {
    console.log('Data fetched with promise:', data);
});

// Using async/await
(async () => {
    const data = await fetchDataWithAsync();
    console.log('Data fetched with async/await:', data);
})();
