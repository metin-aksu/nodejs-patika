import express from 'express';

const app = express();

app.get('/', (reg, res) => {

    const blog = `
    { id: 1, title: "Blog title 1", description: "Blog description 1" }, 
    { id: 2, title: "Blog title 2", description: "Blog description 2" },
    { id: 3, title: "Blog title 3", description: "Blog description 3" }
    `;
  res.send(blog)
})

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});