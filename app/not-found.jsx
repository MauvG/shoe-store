import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center pt-16">
      <h1 className="text-4xl">404</h1>
      <p className="pt-10 text-lg">
        Unfortunately, the page you are looking for does not exist!
      </p>
      <p className="text-lg">
        Click{" "}
        <Link href="/" className="text-cyan-600 hover:underline">
          here
        </Link>{" "}
        to return home.
      </p>
    </div>
  );
}
