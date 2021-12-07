// Refactor code with promises

console.log("Start");

function login(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data is back");
      resolve({ email, password });
    }, 3000);
  });
}

const getVideos = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { name:"Video1" },
        { name:"Video2" },
        { name:"Video3" }
      ]);
    }, 2000);
  });

}

const getDetails = (videos) => {
  return new Promise((resolve, reject) => {
    let titles = [];
    setTimeout(() => {
      videos.forEach((video) => {
        console.log(video)
        titles.push(video.name);
      });
      resolve(titles);
    })
  });
}

login("Quilres@yahoo.com", "12345")
      .then(user => getVideos(user.email)
      .then(video => getDetails(video)
      .then(titles => console.log(titles)
    )
  )
);


console.log("End");
