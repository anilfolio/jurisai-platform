import { getMockCaseById, getMockDocumentRequests, getMockPortalUpdates, getMockClientUploadedDocuments } from "@/lib/mock-data"
import { notFound } from "next/navigation"
import { PortalDashboard } from "@/components/portal/PortalDashboard"
import { MessageSquare } from "lucide-react"

export default async function PortalDashboardPage() {
  // For the generic /portal route, we'll fetch the user's primary case
  // In a real app, this would be fetched based on the logged-in user's ID
  const caseId = "case-1"; 
  const caseData = getMockCaseById(caseId);

  if (!caseData) {
    notFound();
  }

  // Fetch the data scoped to this case
  const documentRequests = getMockDocumentRequests(caseData.firmId, caseId);
  const portalUpdates = getMockPortalUpdates(caseData.firmId, caseId);
  const uploadedDocuments = getMockClientUploadedDocuments(caseData.firmId, caseId);

  // Strictly sanitize caseData to prevent internal firm data or AI analysis from leaking to the client
  const clientCaseData = {
    id: caseData.id,
    referenceId: caseData.referenceId,
    title: caseData.title,
    client: caseData.client,
    clientEmail: caseData.clientEmail,
    clientPhone: caseData.clientPhone,
    type: caseData.type,
    dateOfInjury: caseData.dateOfInjury,
    status: caseData.status,
    firmId: caseData.firmId,
    createdAt: caseData.createdAt,
    updatedAt: caseData.updatedAt,
    assignedUsers: caseData.assignedUsers,
  };

  return (
    <div className="w-full font-sans relative flex flex-col gap-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#12263D] to-[#1A3757] rounded-xl p-4 sm:p-8 text-white shadow-xs relative overflow-hidden border border-[#23486F]/30">
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">Welcome, {clientCaseData.client.split(' ')[0]}</h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-light">
              This is your secure portal to track case progress, upload documents directly to your legal team, and sign necessary authorizations.
            </p>
          </div>
          <div className="shrink-0 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <h2 className="font-bold text-white flex items-center gap-2 mb-2 text-sm">
              <MessageSquare className="w-4 h-4 text-[#B49158]" />
              Need Assistance?
            </h2>
            <div className="space-y-1 text-xs">
              <p><span className="text-[#B49158] font-medium">Email:</span> support@lawfirm.com</p>
              <p><span className="text-[#B49158] font-medium">Phone:</span> (555) 555-0199</p>
            </div>
          </div>
        </div>
        
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#B49158] rounded-full mix-blend-screen filter blur-3xl opacity-15 pointer-events-none"></div>
      </div>

      <PortalDashboard 
        caseData={clientCaseData} 
        documentRequests={documentRequests} 
        uploadedDocuments={uploadedDocuments} 
      />
      
      {/* Security Notice */}
      <div className="mt-8 pt-6 border-t border-slate-200 text-center">
        <p className="text-xs text-slate-500 font-medium">
          Your connection is secure and encrypted. Documents uploaded here are protected under Attorney-Client privilege.
        </p>
      </div>
    </div>
  )
}
