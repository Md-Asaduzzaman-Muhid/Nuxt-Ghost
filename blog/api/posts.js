import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: 'https://asaduzzamanmuhid.ghost.io', 
    key: '01a5e7eeed785ca0704d7c2db7',
    version: "v2"
});

export async function getPosts(){
    return await api.posts
        .browse({
            limit: "all",
            include: "tags,authors"
        })
        .catch (err => {
            console.error(err);
        })
}