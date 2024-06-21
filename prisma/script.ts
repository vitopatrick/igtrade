// lib/prisma.js
import { PrismaClient } from "@prisma/client";

let global: any = globalThis;

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export { prisma };
