import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { Settings } from 'lucide-react'
import SettingsTabs from '@/components/settings/SettingsTabs'

const SettingsPage = async () => {
  const session = await auth.api.getSession({
    headers: headers(),
  })

  if (!session) {
    return <div>Please sign in</div>
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Settings className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account preferences and security
          </p>
        </div>
      </div>

      {/* Settings Content */}
      <SettingsTabs user={session.user} />
    </div>
  )
}

export default SettingsPage
