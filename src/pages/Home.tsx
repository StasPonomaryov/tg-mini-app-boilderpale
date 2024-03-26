import useUserStore from "../store/userStore";
import useTelegram from "../hooks/useTelegram";
import { isTelegramApp } from "../utilities";
import { useEffect } from "react";

function Home() {
  const [user, setUser] = useUserStore((state) => [state.user, state.setUser]);
  const { tg } = useTelegram();

  useEffect(() => {
    if (isTelegramApp(tg)) {
      tg.expand();
      tg.BackButton.hide();
      setUser({ name: tg.initDataUnsafe.user.first_name });
    }
  }, [tg, setUser]);

  return (
    <div className="home">
      <h2>Home page</h2>
      {user && user.name.length ? <span>Hello, {user.name}</span> : null}
    </div>
  )
}

export default Home;
