import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "duck's app" },
    { name: "description", content: "I am having a skill issue" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">I LOVE EMPIRE</h1>
      <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/edsm-api">System Info</Link></li>
      </ul>
    </nav>
    </div>
  );
}
