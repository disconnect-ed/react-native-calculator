import {DB} from "./db/db";

export async function bootstrap() {
    try {
        await DB.init()
    } catch (e) {
        console.log('error ', e)
    }

}