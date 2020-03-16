const fs = require('fs');

const routes = (req, res) => {
  switch(req.url){
    case '/':
      res.writeHead(200, {'Content-type': 'text/html'});
      fs.readFile('./view/index.html', (err, data) => {
        if(err) res.write(err);
        // console.log(data.toString());
        res.write(data.toString());
        res.end();
      })
      break;
      
    default:
      res.writeHead(200, {'Content-type': 'text/html'});
      fs.readFile('./view/404.html', (err, data) => {
        if(err) res.write(err);
        // console.log(data.toString());
        res.write(data.toString());
        res.end();
      })
      console.log("Page not found!!");
  }
}


module.exports = routes;