import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    onModuleInit() {
        console.log(
            "Database Connected"
        );
        this.$connect()
    }
    onModuleDestroy() {
        this.$disconnect()
    }
}





