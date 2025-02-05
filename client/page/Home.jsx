import { Layout } from "../components/Layout";
import { useStore } from "../store";

export default function Home() {
  const { message } = useStore();
  return (
    <Layout>
      <div>
        <h1 className="mt-24 mb-4 text-3xl font-bold">Home</h1>
        <p>
          <b>Message:</b> {message}
        </p>
        <p className="my-3">
          This is a starter template for a{" "}
          <b>React/Vite/Tailwind/Express project.</b>
        </p>
        <p className="mt-4">
          <a
            className="text-blue-500 hover:underline"
            href="https://github.com/goodalchemy/react-vite-tailwind-express-starter"
            target="_blank"
            rel="noreferrer"
          >
            Documentation
          </a>
        </p>
      </div>
    </Layout>
  );
}
