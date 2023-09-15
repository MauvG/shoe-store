import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import SignUpForm from "@/components/SignUpForm";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  return <SignUpForm />;
};

export default page;
