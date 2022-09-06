import { AbstractRepository } from "@app/common";
import { Category } from "@app/common/schemas/category.schema";
import { Injectable, Logger } from "@nestjs/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";

@Injectable()
export class CategoryRepository extends AbstractRepository<Category>{
    protected logger: Logger = new Logger(CategoryRepository.name);

    constructor(
        @InjectModel(Category.name) private readonly category: Model<Category>,
        @InjectConnection() connection: Connection
    ){
        super(category, connection);
    }
}