import "dotenv/config";
import { PrismaClient } from '../lib/generated/prisma';
import sampleData from './sample-data';

const prisma = new PrismaClient();

async function main () {

    await prisma.product.deleteMany();
    await prisma.account.deleteMany();
    await prisma.session.deleteMany();
    await prisma.verificationToken.deleteMany();
    await prisma.user.deleteMany();

    await prisma.product.createMany({ data: sampleData.products });
    await prisma.user.createMany({ data: sampleData.users });

    console.log('Database has been seeded successfully.');
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
}).finally(async () => {    
    await prisma.$disconnect();
});

// To run this seed script, use the following command:
// npx tsx ./db/seed