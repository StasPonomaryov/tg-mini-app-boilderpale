import { useEffect, useState } from "react";
import useUserStore from "../store/userStore";
import useTelegram from "../hooks/useTelegram";
import { isTelegramApp } from "../utilities";
import { useUsers } from "../hooks/useUsers";
import LoadingSpinner from "../components/UI/LoadingSpinner";

function Home() {
  const [user, setUser] = useUserStore((state) => [state.user, state.setUser]);
  const { tg } = useTelegram();
  const {users, isUsersError, isUsersLoading, usersError} = useUsers();
  const [friend, setFriend] = useState<TUser|null>(null);

  useEffect(() => {
    if (isTelegramApp(tg)) {
      tg.expand();
      tg.BackButton.hide();
      setUser({ name: tg.initDataUnsafe.user.first_name });
    }
  }, [tg, setUser]);

  useEffect(() => {
    if (users) {
      const randomUser = Math.floor(Math.random() * users.length);
      setFriend({
        name: users[randomUser].fullName
      });
    }
  }, [users]);

  if (isUsersError) return <div>Error: {usersError?.message}</div>
  if (isUsersLoading) return <LoadingSpinner />

  return (
    <div className="home">
      <h2>Home page</h2>
      {user && user.name.length ? <span>Hello, {user.name}</span> : null}
      {friend && <div>Your friend today id {friend.name}</div>}
    </div>
  )
}

export default Home;
