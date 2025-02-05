import { Layout } from "../components/Layout";
import { useStore } from "../../store";

export default function About() {
  const { message } = useStore();
  return (
    <Layout>
      <h1 className="mt-24 mb-4 text-3xl font-bold">About</h1>
      <p>
        <b>Message:</b> {message}
      </p>
    </Layout>
  );
}
