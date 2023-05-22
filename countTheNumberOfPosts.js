//The time-complexity of these solution is O(n)

//The space complexity of these solution is O(n)

let posts = [
  { userId: 1, postName: "post 1" },
  { userId: 2, postName: "post 2" },
  { userId: 3, postName: "post 3" },
  { userId: 1, postName: "post 4" },
  { userId: 1, postName: "post 5" },
  { userId: 2, postName: "post 6" },
  { userId: 1, postName: "post 7" },
  { userId: 2, postName: "post 8" },
  { userId: 3, postName: "post 9" },
];

let postCounts = {};

for (let i = 0; i < posts.length; i++) {
  let post = posts[i];
  let userId = post.userId;

  if (postCounts[userId]) {
    postCounts[userId] += 1;
  } else {
    postCounts[userId] = 1;
  }
}

let output = [];
for (let userId in postCounts) {
  output.push({ userId: parseInt(userId), postCount: postCounts[userId] });
}

console.log(output);
