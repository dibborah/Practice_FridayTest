let p = fetch("https://jsonplaceholder.typicode.com/posts")

p.then((res) => {
    console.log(res.status)
    console.log(res.ok)
  return res.json()
}).then((res) => {
//   console.log(res);
})