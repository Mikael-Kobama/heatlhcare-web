import Image from "next/image";
import Link from "next/link";

const Home = ({ searchParams }: SerchParamsProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      <h1 className="text-3xl underline">Home!</h1>
    </div>
  );
};

export default Home;
