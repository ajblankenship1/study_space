import mysql from "mysql2/promise";

export default async function myQuery(sql){
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "study_time_app"
    });

    const [results, info] = await connection.query(sql);

    connection.end();

    return results;
}