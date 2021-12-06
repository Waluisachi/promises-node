/* async */

console.log("Start");

function login(email, password, callback) {
  setTimeout(() => {
    console.log("Data is back");
    callback({ email, password });
  }, 3000);
}

const getVideos = (email, callback) => {
  setTimeout(() => {
    callback(["Video1", "Video2", "Video3"]);
  }, 2000);
}

login("Quilres@yahoo.com", "12345", (user) => {
  console.log(user);
  getVideos(user.email, videos => console.log(videos));
})


console.log("End");
