import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VariantServiceBase } from "./base/variant.service.base";

@Injectable()
export class VariantService extends VariantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
