import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('calcHistory.db')

export class DB {
    static init() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS history (id INTEGER PRIMARY KEY NOT NULL, calculate TEXT NOT NULL, result TEXT NOT NULL, date TEXT)',
                    [],
                    resolve,
                    (_, error) => reject(error)
                )
            })
        })
    }

    static getHistory() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'SELECT * FROM history',
                    [],
                    (_, result) => resolve(result.rows._array),
                    (_, error) => reject(error)
                )
            })
        })
    }

    static addCalculate({calculate, result, date}) {
        // console.log(calculate, result, date)
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `INSERT INTO history (calculate, result, date) VALUES (?, ?, ?)`,
                    [calculate, result, date],
                    (_, result) => resolve(console.log(result.insertId)),
                    (_, error) => reject(error)
                )
            })
        })
    }

    static removeCalc(id) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'DELETE FROM history WHERE id = ?',
                    [id],
                    resolve,
                    (_, error) => reject(error)
                )
            })
        })
    }

    static deleteAllHistory() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'DELETE FROM history',
                    [],
                    resolve,
                    (_, error) => reject(error)
                )
            })
        })
    }
}

    // static updatePost(post) {
    //     return new Promise((resolve, reject) => {
    //         db.transaction(tx => {
    //             tx.executeSql(
    //                 'UPDATE posts SET booked = ? WHERE id = ?',
    //                 [post.booked ? 0 : 1, post.id],
    //                 resolve,
    //                 (_, error) => reject(error)
    //             )
    //         })
    //     })
    // }

//     static removePost(id) {
//         return new Promise((resolve, reject) => {
//             db.transaction(tx => {
//                 tx.executeSql(
//                     'DELETE FROM posts WHERE id = ?',
//                     [id],
//                     resolve,
//                     (_, error) => reject(error)
//                 )
//             })
//         })
//     }
// }
