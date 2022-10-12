import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig : TypeOrmModuleOptions = {
    type : 'mysql',
    host : 'localhost',
    port : 3306,
    username : '',
    password : '',
    database : '',
    entities : [],
    synchronize : true

}