import { PrismaClient } from '@prisma/client';
import type { RequestHandler } from '@sveltejs/kit';

const prisma = new PrismaClient();

const parseId = (id: string | undefined) => {
  const num = Number(id);
  return isNaN(num) ? null : num;
};

export const PATCH: RequestHandler = async ({ params, request }) => {
  const id = parseId(params.id);
  if (!id) return new Response(JSON.stringify({ error: 'Invalid ID' }), { status: 400 });

  try {
    const data = await request.json();
    const updated = await prisma.contact.update({ where: { id }, data });
    return new Response(JSON.stringify(updated), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: 'Failed to update contact' }), { status: 500 });
  }
};

export const DELETE: RequestHandler = async ({ params }) => {
  const id = parseId(params.id);
  if (!id) return new Response(JSON.stringify({ error: 'Invalid ID' }), { status: 400 });

  try {
    await prisma.contact.delete({ where: { id } });
    return new Response(JSON.stringify({ message: 'Contact deleted successfully' }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ error: 'Failed to delete contact' }), { status: 500 });
  }
};
