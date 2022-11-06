export const getGifs = async (cat) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=u4GJzuos7f94bx5utY2PZ8dV9TswX66c&q=${cat}&limit=10`;
    const resp = await fetch (url);
    const {data}= await resp.json();

    const gifs = data.map(img=>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))
    console.log(gifs);
    return gifs;
};