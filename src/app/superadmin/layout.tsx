import { getSession } from "@/lib/auth"
import { redirect } from "next/navigation"
import SuperadminSidebar from "@/components/SuperadminSidebar"
import Header from "@/components/Header"
import IdleTimeoutProvider from "@/components/IdleTimeoutProvider"
import FirstLoginModal from "@/components/FirstLoginModal"

export default async function SuperadminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()
  if (!session) redirect('/login')

  // Prevent non-superadmin access (SUPERADMIN must be defined in auth roles, default redirect otherwise)
  if (session.role !== 'SUPERADMIN') redirect('/')

  return (
    <IdleTimeoutProvider timeoutInMinutes={30}>
      <FirstLoginModal />
      <div className="min-h-screen bg-[#F6F5F1] flex font-sans">
        <div className="md:sticky md:top-0 md:h-screen shrink-0 z-50">
          <SuperadminSidebar
            user={{ firstName: session.firstName, lastName: session.lastName }}
          />
        </div>
        <main className="flex-1 flex flex-col min-w-0 relative">
          <Header role={session.role} user={{ firstName: session.firstName, lastName: session.lastName }} />
          <div className="flex-1 p-3.5 sm:p-5 md:p-8 max-w-[1600px] w-full mx-auto">
            {children}
          </div>
        </main>
      </div>
    </IdleTimeoutProvider>
  )
}

