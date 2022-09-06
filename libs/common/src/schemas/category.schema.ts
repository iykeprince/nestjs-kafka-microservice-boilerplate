import { Prop, raw, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose from "mongoose";
import { AbstractDocument } from "../database/abstract.schema";

@Schema()
export class Category extends AbstractDocument{
    @Prop()
    name: string;
    @Prop()
    slug: string;
    @Prop()
    description: string;
    @Prop()
    level: string;
    @Prop({ default: '' })
    imgUrl: string;
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }] })
    ancestors: string;
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }] })
    children: string[];
    @Prop({ default: 'active' })
    status: string;
    @Prop({ default: "#9acd32" })
    statusColour: string;
    @Prop([raw({
        name: String,
        key: String,
        values: [{ type: Array, default: [] }],
    })])
    filters: any;
    @Prop({ type: Number, default: 15 })
    commission: number;
    @Prop({ type: Number, default: 0 })
    discount: number;
    // click count
    @Prop({ type: Number, default: 0 })
    cc: number;
    // purchase count
    @Prop({ type: Number, default: 0 })
    pc: number;
}

export const CategorySchema = SchemaFactory.createForClass(Category)