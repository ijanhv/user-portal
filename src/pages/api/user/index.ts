import { connectToDB } from "@/lib/mongoose";
import User from "@/models/user.model";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("HELLO");

  if (req.method !== "POST") {
    return res.status(405).end();
  }

  connectToDB();

  try {
    const {
      id,
      email,
      name,
      // password,
      age,
      dateOfBirth,
      phoneNumber,
      walletAddress,
      address,
    } = req.body;

    // const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      email,
      id,
      name,
      // password: hashedPassword,
      age,
      dateOfBirth,
      phoneNumber,
      walletAddress,
      address,
    });

    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}


