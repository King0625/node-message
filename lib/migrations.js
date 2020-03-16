const { connection }= require('./connection');

const sql_posts = `CREATE TABLE IF NOT EXISTS Posts
(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  u_name VARCHAR(255) NOT NULL,
  content VARCHAR(2048) NOT NULL,
  datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`

const sql_replies = `CREATE TABLE IF NOT EXISTS Replies
(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  post_id INTEGER NOT NULL,
  u_name VARCHAR(255) NOT NULL, 
  content VARCHAR(2048) NOT NULL,
  datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (post_id) REFERENCES Posts(id)
);`

const sql_sub_replies = `CREATE TABLE IF NOT EXISTS Sub_replies
(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  reply_id INTEGER NOT NULL,
  u_name VARCHAR(255) NOT NULL, 
  content VARCHAR(2048) NOT NULL,
  datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (reply_id) REFERENCES Replies(id)
);`

const sql = [sql_posts, sql_replies, sql_sub_replies].join(" ");

connection.query(sql, (err, results, fields) => {
  if(!err){
    console.log("Success");
    console.log(results);
  }
  console.log(err);
  connection.close();
})