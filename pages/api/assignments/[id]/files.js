import { useRouter } from "next/router";
import { AssignmentFile } from "../../models";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const router = useRouter();
  const { id } = router.query;
  if (req.method === "GET") {
    res.end(
      JSON.stringify(
        AssignmentFile.findAll({ include: [{ where: { AssignmentId: id } }] })
      )
    );
  }
};
