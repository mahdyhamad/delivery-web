
export function transformUsersData(data) {
  const users = data.users || {};
  const edges = users.edges || [];

  return [
    ...edges
  ]
}
