import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ImageService } from "./image.service";
import { ImageControllerBase } from "./base/image.controller.base";

@swagger.ApiTags("images")
@common.Controller("images")
export class ImageController extends ImageControllerBase {
  constructor(protected readonly service: ImageService) {
    super(service);
  }
}
