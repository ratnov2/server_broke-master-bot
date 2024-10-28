import { Injectable, NotFoundException } from "@nestjs/common";
import { ModelType, DocumentType } from "@typegoose/typegoose/lib/types";
import { genSalt, hash } from "bcryptjs";
import { Types } from "mongoose";
import { InjectModel } from "nestjs-typegoose";
import { UpdateDto } from "./dto/update.dto";
import { UserModel } from "./user.model";

@Injectable()
export class UserService {
 constructor(
  @InjectModel(UserModel) private readonly userModel: ModelType<UserModel>
 ) {}

 async byId(id: string): Promise<DocumentType<UserModel>> {
  const user = await this.userModel.findById(id).exec();

  if (user) return user;
  throw new NotFoundException("User not found");
 }

 async updateProfile(_id: string, data: {have_read:boolean}) {
  let user = await this.userModel.findById(_id);
  if(!user) throw new NotFoundException("User not found");

  user.have_read=data.have_read
  await user.save()
  return user.have_read;
 }

 async getCount() {
  return this.userModel.find().count().exec();
 }

 async getAll(searchTerm?: string): Promise<DocumentType<UserModel>[]> {
  let options = {};
  console.log('wefefwefw');
  
  if (searchTerm) {
   options = {
    $or: [
     {
      email: new RegExp(searchTerm, "i"),
     },
    ],
   };
  }

  return this.userModel
   .find(options)
   .select("-password -updatedAt -__v")
   .sort({ createdAt: "desc" })
   .exec();
 }

 async delete(id: string): Promise<DocumentType<UserModel> | null> {
  return this.userModel.findByIdAndDelete(id).exec();
 }
}
