import { DynamicModule, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { RmqService } from "./rmq.service";
interface RmqModuleOptions {
    name: string;
}
@Module({
    providers: [RmqService],
    exports: [RmqService]
})
export class RmqModule{
    static register({name}: RmqModuleOptions): DynamicModule {
        return {
            module: RmqModule,
            imports: [
                ClientsModule.registerAsync([
                    {
                        name,
   
                        useFactory: (configService: ConfigService) => {
                            console.log(`RABBIT_MQ_URI: ${configService.get<string>(`RABBIT_MQ_URI`)}`)
                            console.log(`RABBIT_MQ_BILLING_QUEUE: ${configService.get<string>(`RABBIT_MQ_${name}_QUEUE`)}`)
                            return {
                            transport: Transport.RMQ,
                            options: {
                                urls: ['amqp://rabbitmq:5672'],
                                queue: configService.get<string>(`RABBIT_MQ_${name}_QUEUE`)
                            }
                        }},
                        inject: [ConfigService],
                    }
                ])
            ],
            exports: [ClientsModule],
        }
    }
}