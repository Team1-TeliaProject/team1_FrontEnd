import { useState, useEffect } from 'react';
import { getOneTalent, getOneCompany } from '../services/userService';

export const useUser = (id, type) => {
  const [user, setUser] = useState(null);
  const fetchUser = async () => {
    if (type === 'talent') {
      await getOneTalent(id).then((response) => {
        if (response.data) {
          setUser(response.data);
        }
      });
    } else {
      await getOneCompany(id).then((response) => {
        if (response.data) {
          setUser(response.data);
        }
      });
    }
  };

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return [user];
};
