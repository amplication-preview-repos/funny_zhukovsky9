import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VariantService } from "./variant.service";
import { VariantControllerBase } from "./base/variant.controller.base";

@swagger.ApiTags("variants")
@common.Controller("variants")
export class VariantController extends VariantControllerBase {
  constructor(protected readonly service: VariantService) {
    super(service);
  }
}
