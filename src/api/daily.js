const dailyCelebrity = {
  name: "Cristiano Ronaldo",
  photo:
    "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
  hints: [
    "It has been deemed worthy of many awards around the world.",
    "Currently living in Saudi Arabia.",
    "Known for his incredible performance on the soccer field.",
    "Started his career at a young age.",
    "Born in Portugal.",
  ],
};

export function getDailyCelebrity() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dailyCelebrity);
    }, 1000);
  });
}
