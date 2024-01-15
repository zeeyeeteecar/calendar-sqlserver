import Image from "next/image";
import { prisma } from "./lib/db";

async function fetchDate() {
  const result = await prisma.tAdmin.findMany({});
  return result;
}

export default async function Home() {
  const Admins = await fetchDate();

  return <div>{JSON.stringify(Admins)}</div>;
}
