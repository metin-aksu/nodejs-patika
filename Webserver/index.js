const http = require("http");

const server = http.createServer((req, res) => {
    const url = req.url; // sunucu kök adresinden sonraki kısmı alır.
    const method = req.method.toLowerCase(); // GET, POST, PUT, DELETE

    console.log(`Gönderilen istek: ${method} ${url}`);

    if (url === "/") {
        res.writeHead(200,{ "Content-Type": "text/html"});
        res.write("<h2>INDEX SAYFASINA HOŞGELDİNİZ</h2>");

    } else if (url === "/hakkimda") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>HAKKIMDA SAYFASINA HOŞGELDİNİZ</h2>");

    } else if (url === "/iletisim") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>İLETİŞİM SAYFASINA HOŞGELDİNİZ</h2>");

    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 SAYFA BULUNAMADI, YADA BEN BECEREMEDİM</h1>");
    }

    // res.end();
    res.end("<br><br><br>response.end() boş olacak diye bir kuralda yok nasılsa");
});

const port = 5000;

server.listen(port, () => {
    console.log(`Sunucu port ${port} de başlatıldı.`);
});
