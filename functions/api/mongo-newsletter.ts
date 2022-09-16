import { PrismaClient } from '@prisma/client/edge';

let prisma: PrismaClient;

export async function onRequestPost(context: any) {
  const { request, env } = context;
  const { DATABASE_URL } = env;

  const { email } = await request.json();

  if (!prisma) {
    prisma = new PrismaClient({
      datasources: {
        db: {
          url: DATABASE_URL,
        },
      },
    });
  }

  const submittedEmail = await prisma.newsletter.create({
    data: {
      email
    }
  })

  return new Response(JSON.stringify(submittedEmail));
}
