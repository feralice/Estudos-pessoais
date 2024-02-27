import { CategoryModule } from "@/modules/category/category.module";
import { AddressModule } from "@/modules/address/address.module";
import { StateModule } from "@/modules/state/state.module";
import { CityModule } from "@/modules/city/city.module";
import { UserModule } from "@/modules/user/user.module";
import { AuthModule } from "./modules/auth/auth.module";
import typeOrmConfig from "@/config/typeorm.config";
import { RolesGuard } from "./guards/roles.guard";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    StateModule,
    CityModule,
    AddressModule,
    AuthModule,
    JwtModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [
    {
      provide: "APP_GUARD",
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
