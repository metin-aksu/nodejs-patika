const Koa = require('koa');
const app = new Koa();

// response
app.use(res => {
    console.log(res.path);
    res.type = 'text/html';    

    if (res.path === '/') {
        res.response.status = 200; 
        res.body = '<h1>Giriş Sayfası</h1>';
    }
    else if (res.path === '/hakkimda') {
        res.response.status = 200; 
        res.body = '<h1>Hakkımda Sayfası</h1>';
    }
    else if (res.path === '/iletisim') {
        res.response.status = 200; 
        res.body = '<h1>İletişim Sayfası</h1>';
    }
    else {
        res.response.status = 404; 
        res.body = '<h1>404 - Sayfa Bulunamadı</h1>'; 
    }
});

const port = 3000;

app.listen(port,()=>{
    console.log(`Server is starting at port ${port}`);
});