const posts = [
    {id : 1, title : 'Hello World 1'},
    {id : 2, title : 'Hello World 2'},
    {id : 3, title : 'Hello World 3'}
];

function listPost() {
    posts.map(post => {console.log(post.title);});
}

function addPost(newPost) {
    const promise = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve("Post added successfully");
        reject("Error occurred. Post not added");
    });    
}

async function showPosts() {
    try{
        await addPost({id : 4, title : 'Hello World 4'});
        listPost();
    }
    catch (error) {
        console.log(error);
    }    
}
showPosts();

posts.push({id : 5, title : 'Hello World 5'});