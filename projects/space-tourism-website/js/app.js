const dir = "/projects/space-tourism-website";
const host = "http://localhost:5500";
const links = document.querySelectorAll('a');
const images = document.querySelectorAll('img');

links.forEach(link => {
    link.href = host + dir + link.href.replace(host, "");
    console.log(link.href);
})

images.forEach((link) => {
  link.src = host + dir + link.src.replace(host, "");
  console.log(link.src);
});