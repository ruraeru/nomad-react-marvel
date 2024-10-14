export async function fetchCharsData() {
    return fetch("https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023")
        .then(res => res.json())
        .then(json => json.data.results);
}

export async function fetchCharDetailData(id) {
    return fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`)
        .then(res => res.json())
        .then(json => json.data.results[0]);
}