import { _prod_ } from "./constants";
import {Post} from "./entities/Post";
import {MikroORM} from "@mikro-orm/core";
import path from "path";

export default {

    migrations: {
        path: path.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    },      
    entities: [Post],
    dbName: 'lireddit',
    type: 'postgresql',
    debug: !_prod_,
} as Parameters<typeof MikroORM.init>[0];