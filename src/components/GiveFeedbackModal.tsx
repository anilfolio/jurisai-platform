"use client";

import { useState } from "react";
import { MessageSquare, Bug, ThumbsUp, Sparkles, Star, X, CheckCircle2, Send, HelpCircle } from "lucide-react";

export default function GiveFeedbackModal({
  buttonVariant = "header",
}: {
  buttonVariant?: "header" | "sidebar" | "floating";
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState<"Bug Report" | "Feedback" | "Feature Request" | "Praise">("Feedback");
  const [rating, setRating] = useState<number>(5);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
      setMessage("");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    }, 600);
  };

  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-6 right-6 z-[99999] flex items-center gap-2.5 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-slate-800 text-xs animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Thank you! Your feedback has been submitted to system superadmin.</span>
        </div>
      )}

      {/* Trigger Button */}
      {buttonVariant === "sidebar" ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 transition-all cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 text-[#B49158] shrink-0" />
          <span>Give Feedback / Report Bug</span>
        </button>
      ) : buttonVariant === "floating" ? (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2.5 bg-[#1A3757] hover:bg-[#12263D] text-white text-xs font-bold rounded-full shadow-2xl border border-[#B49158]/40 transition-all hover:scale-105 cursor-pointer"
        >
          <MessageSquare className="w-4 h-4 text-[#B49158]" />
          <span>Give Feedback / Report Bug</span>
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-lg transition-all shadow-xs cursor-pointer"
          title="Give Feedback or Report Bug"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#B49158]" />
          <span className="hidden sm:inline">Feedback / Bug</span>
        </button>
      )}

      {/* Feedback Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200/80 w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#12263D] to-[#1A3757] px-6 py-4 text-white flex items-center justify-between border-b border-slate-700/40">
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-5 h-5 text-[#B49158]" />
                <div>
                  <h3 className="font-bold text-base leading-tight">Give Feedback / Report Bug</h3>
                  <p className="text-[11px] text-slate-300">We appreciate your suggestions to improve JurisAI</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Category Pills */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                  Category *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setCategory("Bug Report")}
                    className={`flex items-center justify-center gap-1.5 p-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      category === "Bug Report"
                        ? "bg-rose-50 border-rose-300 text-rose-800 shadow-xs"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <Bug className="w-3.5 h-3.5 text-rose-600" /> Bug Report
                  </button>

                  <button
                    type="button"
                    onClick={() => setCategory("Feedback")}
                    className={`flex items-center justify-center gap-1.5 p-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      category === "Feedback"
                        ? "bg-[#B49158]/10 border-[#B49158]/40 text-[#B49158] shadow-xs"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#B49158]" /> Feedback
                  </button>

                  <button
                    type="button"
                    onClick={() => setCategory("Feature Request")}
                    className={`flex items-center justify-center gap-1.5 p-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      category === "Feature Request"
                        ? "bg-blue-50 border-blue-300 text-blue-800 shadow-xs"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Feature Request
                  </button>

                  <button
                    type="button"
                    onClick={() => setCategory("Praise")}
                    className={`flex items-center justify-center gap-1.5 p-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                      category === "Praise"
                        ? "bg-emerald-50 border-emerald-300 text-emerald-800 shadow-xs"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5 text-emerald-600" /> Praise
                  </button>
                </div>
              </div>

              {/* Star Rating */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Rate Experience (Optional)
                </label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 hover:scale-110 transition-transform cursor-pointer"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= rating
                            ? "fill-amber-400 text-amber-500"
                            : "text-slate-300"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-semibold text-slate-500 ml-2">{rating} / 5</span>
                </div>
              </div>

              {/* Description / Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Message / Details *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    category === "Bug Report"
                      ? "Describe the issue or error you encountered, including steps to reproduce..."
                      : "Share your feedback or feature ideas with our team..."
                  }
                  className="w-full p-3 text-xs text-slate-800 border border-slate-200/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B49158]/20 focus:border-[#B49158] bg-slate-50 focus:bg-white transition-all resize-none leading-relaxed"
                />
              </div>

              {/* Footer Buttons */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="h-10 px-4 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !message.trim()}
                  className="h-10 px-5 text-xs font-bold text-white bg-[#1A3757] hover:bg-[#12263D] rounded-lg shadow-xs disabled:opacity-50 flex items-center gap-1.5 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" /> Submit Feedback
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
