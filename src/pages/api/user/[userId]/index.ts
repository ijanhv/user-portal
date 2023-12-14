import { connectToDB } from "@/lib/mongoose";
import User from "@/models/user.model";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";

// get user by id
// id from params

// export default async function getUserById(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== "GET") {
//     return res.status(405).end();
//   }

//   connectToDB();

//   try {
//     const { userId } = req.query;


//     const user = await User.findOne({
//         id: userId,
//     });

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     return res.status(201).json(user);

//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: "Something went wrong" });
//   }
// }


// check if user exists

export async function checkIfUserExists(
    req: NextApiRequest,
    res: NextApiResponse
    ) {
    if (req.method !== "GET") {
        return res.status(405).end();
    }
    
    connectToDB();
    
    try {
        const { userId } = req.query;

     
    const user = await User.findOne({
        id: userId,
    });

    if (!user) {
      return false;
    }

    return true;

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}
   


