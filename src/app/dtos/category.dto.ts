import { AccessType, Category } from "../models/category.model";
import { Product } from "../models/product.model";
import { IsEmpty, IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validateOrReject } from "class-validator";

export interface ICreateCategoryDto extends Omit<Category, 'id'>{

}

export class CreateCategoryDto implements ICreateCategoryDto{
  // ! Sirve para indicarle que lo validaremos más adelante
  @IsNotEmpty()
  @Length(4, 140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = "asdfs";
    dto.image = "https://platzi.com/new-home/clases/2880-typescript-poo/47273-decoradores/";
    await validateOrReject(dto);
  }
  catch(error) {
    console.log(error);
  }
})();
