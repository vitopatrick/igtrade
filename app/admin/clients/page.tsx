import { getAllUsers } from '@/actions/user'
import ClientTable from '@/components/admin/ClientTable'
import React from 'react'

const ClientsPage = async () => {
  const users = await getAllUsers()

  return (
    <div>
      <h4 className="text-3xl font-bold">Clients</h4>
      <div className="my-4">
        <ClientTable users={Array.isArray(users) ? users : []} />
      </div>
    </div>
  )
}

export default ClientsPage
