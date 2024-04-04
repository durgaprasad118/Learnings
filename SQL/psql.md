## why

- using mongoose schema which is at node js level, not at db level
- mongodb is scheamaless
- we can use gui compass to alter the data
- IT does not give strictness of the data entered
- SO DOING AT DB LEVEL IS VERY GOOD

```js
import { log } from "console";
import { getDiffieHellman } from "crypto";
import { Client } from "pg";
const client = new Client({
  connectionString:
    "postgresql://durgaprasadachana1108:prBRT75bfesD@ep-soft-bonus-29675063.us-east-2.aws.neon.tech/dp?sslmode=require",
});
const createUser = async () => {
  await client.connect();
  const result = await client.query(`
  CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
`);
  console.log(result);
};

//foreign key
const createAddress = async () => {
  try {
    await client.connect();
    const query = `CREATE TABLE addresses(
id SERIAL PRIMARY KEY,
user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(id) on DELETE CASCADE
)`;
    const result = await client.query(query);
    console.log(result);
  } catch (error) {
    console.log(error);
    await client.end();
  }
};
// createAddress();

const AddAddress1 = async (user_id: number, city: string) => {
  try {
    await client.connect();
    const insertQuery = `INSERT INTO addresses (user_id,city) VALUES($1,$2)`;
    const values: any[] = [user_id, city];
    const result = await client.query(insertQuery, values);
    console.log("succcessfully added addresse", result.rows);
  } catch (error) {
    console.log(error);
    await client.end();
  }
};

// AddAddress1(2, "Hyd");
const InsertUser = async (
  username: string,
  email: string,
  password: string,
) => {
  try {
    await client.connect();
    const insertQuery = `
INSERT INTO users (username,email,password)
VALUES ($1, $2, $3)
`;
    const values = [username, email, password];
    const result = await client.query(insertQuery, values);
    console.log("success: ", result);
  } catch (error) {
    console.log(error);
    await client.end();
  }
};
// InsertUser("dpp", "dppp@gmail.com", "1234");

//getting the address and user deatils using join

const getDetails = async (id: number) => {
  try {
    await client.connect();
    const getQuery = `SELECT username ,email, city FROM users JOIN addresses ON users.id = addresses.user_id WHERE users.id=$1`;
    const values = [id];
    const result = await client.query(getQuery, values);
    console.log(result.rows);
  } catch (error) {
    console.log(error);
    await client.end();
  }
};
getDetails(2);
const getAllusers = async () => {
  try {
    await client.connect();
    const insertQuery = `SELECT * from users`;
    const result = await client.query(insertQuery);
    console.log("success: ", result);
  } catch (error) {
    console.log(error);
    await client.end();
  }
};

// getAllusers();

const getParticualrUser = async (email: string) => {
  try {
    await client.connect();
    const insertQuery = `SELECT * from users WHERE email = $1 `;
    const values = [email];
    const result = await client.query(insertQuery, values);
    if (result.rows.length > 0) {
      console.log("user found", result.rows[0]);

      return result.rows[0];
    } else {
      console.log("no user found");
      return null;
    }
  } catch (error) {
    console.log(error);
    await client.end();
  }
};

// getParticualrUser("dp@gmail.com");
//
const updateUser = async (username: string, email: string) => {
  try {
    await client.connect();
    const querystr = `UPDATE users SET username= $1 where email =$2 `;
    const values = [username, email];
    const result = await client.query(querystr, values);
    console.log("succeess", result);
  } catch (error) {
    console.log(error);
  }
};

// updateUser("dp@1108", "dppp@gmail.com");

const deleteUser = async (email: string) => {
  try {
    await client.connect();
    const deleteQuery = `DELETE FROM users where email= $1`;
    const values = [email];
    const result = await client.query(deleteQuery, values);
    console.log("succeess", result);
  } catch (error) {
    console.log(error);
    await client.end();
  }
};
// deleteUser("dppp@gmail.com");
```
