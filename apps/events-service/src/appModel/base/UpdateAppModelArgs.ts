/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AppModelWhereUniqueInput } from "./AppModelWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AppModelUpdateInput } from "./AppModelUpdateInput";

@ArgsType()
class UpdateAppModelArgs {
  @ApiProperty({
    required: true,
    type: () => AppModelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AppModelWhereUniqueInput)
  @Field(() => AppModelWhereUniqueInput, { nullable: false })
  where!: AppModelWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AppModelUpdateInput,
  })
  @ValidateNested()
  @Type(() => AppModelUpdateInput)
  @Field(() => AppModelUpdateInput, { nullable: false })
  data!: AppModelUpdateInput;
}

export { UpdateAppModelArgs as UpdateAppModelArgs };
