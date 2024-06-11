/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { DishCreateNestedManyWithoutCategoriesInput } from "./DishCreateNestedManyWithoutCategoriesInput";
import { Type } from "class-transformer";
import { ImageWhereUniqueInput } from "../../image/base/ImageWhereUniqueInput";

@InputType()
class CategoryCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => DishCreateNestedManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => DishCreateNestedManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => DishCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  dishes?: DishCreateNestedManyWithoutCategoriesInput;

  @ApiProperty({
    required: false,
    type: () => ImageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ImageWhereUniqueInput)
  @IsOptional()
  @Field(() => ImageWhereUniqueInput, {
    nullable: true,
  })
  image?: ImageWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { CategoryCreateInput as CategoryCreateInput };
