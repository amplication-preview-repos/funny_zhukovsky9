import * as graphql from "@nestjs/graphql";
import { VariantResolverBase } from "./base/variant.resolver.base";
import { Variant } from "./base/Variant";
import { VariantService } from "./variant.service";

@graphql.Resolver(() => Variant)
export class VariantResolver extends VariantResolverBase {
  constructor(protected readonly service: VariantService) {
    super(service);
  }
}
