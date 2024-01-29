import { LoggedUserContext } from "@/contexts/LoggedUser";
import { useContext } from "react";

export const Header = () => {
  const loggedUserCtx = useContext(LoggedUserContext);

  const handleLogOut = () => {
    loggedUserCtx?.setName("");
  };

  const handleLogIn = () => {
    loggedUserCtx?.setName("Morgan");
  };

  return (
    <header>
      <h1 className="text-3xl text-white">Page title</h1>
      {loggedUserCtx?.name && (
        <>
          <p>Logged user: {loggedUserCtx?.name}</p>
          <button onClick={handleLogOut}>Log out</button>
        </>
      )}
      {!loggedUserCtx?.name && (
        <button onClick={handleLogIn}>Log in as Morgan</button>
      )}
    </header>
  );
};

export default Header;
