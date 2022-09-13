let posts = [
  { title: "Post1", desc: "Post1" },
  { title: "Post2", desc: "Post2" },
  { title: "Post3", desc: "Post3" },
  { title: "Post4", desc: "Post4" },
];

let readPosts = () => {
  posts.forEach((post) => console.log(post));
};

let addPost = (_post) =>
  new Promise((resolve, reject) => {
    posts.push(_post);
    let isSuccess = posts.find((post) => post.title == _post.title);
    if (isSuccess) {
      resolve("Post is added successfully.");
    } else {
      reject("A problem is occured.");
    }
  });

let doProcess = async () => {
  let newPost = { title: "Post5", desc: "Post5" };
  try
  { 
    let isSuccess = await addPost(newPost);
    readPosts();
  } catch(error)
  {
    console.log(error);
  }
};

doProcess();
