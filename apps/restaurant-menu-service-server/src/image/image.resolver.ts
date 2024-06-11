import * as graphql from "@nestjs/graphql";
import { ImageResolverBase } from "./base/image.resolver.base";
import { Image } from "./base/Image";
import { ImageService } from "./image.service";

@graphql.Resolver(() => Image)
export class ImageResolver extends ImageResolverBase {
  constructor(protected readonly service: ImageService) {
    super(service);
  }
}
