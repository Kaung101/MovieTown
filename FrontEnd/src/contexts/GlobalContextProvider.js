import { useMemo, useState } from 'react';

import GlobalContext from './GlobalContext';

export default function GlobalContextProvider(props) {
  const [user, setUser] = useState('');
  const [status, setStatus] = useState('');
  const globalState = useMemo(() => {
    return {
      user,
      setUser,
      status,
      setStatus,
    };
  }, [user, status]);

  return (
    <GlobalContext.Provider value={globalState}>
      {props.children}
    </GlobalContext.Provider>
  );
}