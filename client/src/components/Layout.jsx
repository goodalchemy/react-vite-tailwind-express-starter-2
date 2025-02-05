import { Header } from "./Header";
import { useStore } from "../../store";
import { useEffect } from "react";
import { BASE_URL } from "../../constants";

export const Layout = ({ children }) => {
  const { setMessage } = useStore();

  useEffect(() => {
    const fetchMessage = async () => {
      const res = await fetch(`${BASE_URL}/api/hello`);
      const data = await res.json();
      setMessage(data.message);
    };

    fetchMessage();
  }, []);

  return (
    <div className="px-4">
      <Header />
      {children}
    </div>
  );
};
