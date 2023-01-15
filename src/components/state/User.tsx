import React, { useState } from "react";

type authUser = {
  fName: string;
  lName: string;
};

const User = () => {
  const [user, setUser] = useState<authUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
    setUser({ fName: "diana", lName: "bruce" });
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setUser(null)
  };

  return (
    <div>
      <div>
        user is {user?.fName} and {isLoggedIn ? "Online" : "offline"}
      </div>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
};

export default User;
