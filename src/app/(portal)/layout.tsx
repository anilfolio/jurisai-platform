import { getSession } from "@/lib/auth"
import { redirect } from "next/navigation"
import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"
import { getMockFirm } from "@/lib/mock-data"
import IdleTimeoutProvider from "@/components/IdleTimeoutProvider"

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()
  if (!session) redirect('/login')

  if (session.role === 'SUPERADMIN') {
    redirect('/superadmin')
  }

  const firm = getMockFirm();
  const timeoutInMinutes = firm?.sessionTimeout || 30;

  return (
    <IdleTimeoutProvider timeoutInMinutes={timeoutInMinutes}>
      <div className="min-h-screen bg-[#F6F5F1] flex font-sans">
        <div className="md:sticky md:top-0 md:h-screen shrink-0 z-50">
          <Sidebar
            role={session.role}
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
