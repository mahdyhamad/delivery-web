

export function transformClientsData(data) {
  const clients = data.clients || {};
  const edges = clients.edges || [];

  return [
    ...edges
  ]
}
