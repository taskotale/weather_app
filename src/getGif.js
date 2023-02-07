export default async function getGif(searchParam) {
    try {
        const response = await fetch(
            `https://api.giphy.com/v1/gifs/translate?api_key=H04x2cbqGE1H3kFQWOrSud70rPKEEb8X&s=${searchParam}`,
            { mode: 'cors' }
        );
        const imgData = await response.json();
        const imgUrl = await imgData.data.images.original.url;
        console.log(imgUrl)
        return imgUrl
    } catch (error) {
        console.error('Error:', error);
        alert('Can`t find picture, try refreshing');
    }
}
