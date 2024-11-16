import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../lib/users";

export const useUsers = () => {
  const {
    data: users,
    isPending: isUsersPending,
    isLoading: isUsersLoading,
    isError: isUsersError,
    error: usersError
  } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetchUsers(),
    staleTime: 10 * 60 * 1000
  });

  return {
    users,
    isUsersPending,
    isUsersLoading,
    isUsersError,
    usersError
  }
};