"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, CheckCircle2, Loader2, FileText, X } from 'lucide-react';
import { submitTalentForm } from '@/app/actions/submit-talent';

export default function TalentForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            if (selectedFile.type === 'application/pdf') {
                setFile(selectedFile);
                setError(null);
            } else {
                setError("Please upload a PDF file.");
            }
        }
    };

    const onDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const onDragLeave = () => {
        setIsDragging(false);
    };

    const onDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const selectedFile = e.dataTransfer.files[0];
            if (selectedFile.type === 'application/pdf') {
                setFile(selectedFile);
                setError(null);
            } else {
                setError("Please upload a PDF file.");
            }
        }
    };

    const removeFile = () => {
        setFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!file) {
            setError("Please upload your resume.");
            return;
        }

        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        formData.append('resume', file);

        const result = await submitTalentForm(formData);

        if (result.success) {
            setIsSuccess(true);
        } else {
            setError(result.error || "Something went wrong.");
        }
        setIsSubmitting(false);
    }

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 rounded-3xl text-center max-w-2xl mx-auto"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                    <CheckCircle2 className="text-green-500 w-10 h-10" />
                </motion.div>
                <h2 className="font-serif text-3xl font-bold text-white mb-4">Application Sent!</h2>
                <p className="text-slate-400 font-sans text-lg mb-8">
                    Thank you for joining our network. We've received your CV and details.
                    Check your email for a confirmation message.
                </p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="text-brand-blue font-bold hover:text-brand-blue-light transition-colors"
                >
                    Send another application
                </button>
            </motion.div>
        );
    }

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-card p-8 md:p-12 rounded-3xl max-w-2xl mx-auto space-y-6"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300 ml-1">Full Name</label>
                    <input
                        required
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors font-sans"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300 ml-1">Email Address</label>
                    <input
                        required
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors font-sans"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 ml-1">LinkedIn Profile URL</label>
                <input
                    required
                    name="linkedin"
                    type="url"
                    placeholder="https://linkedin.com/in/username"
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors font-sans"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 ml-1">Area of Expertise</label>
                <select
                    required
                    name="expertise"
                    defaultValue=""
                    className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors font-sans appearance-none"
                >
                    <option value="" disabled>Select your expertise</option>
                    <option value="Programmatic">Programmatic</option>
                    <option value="Data">Data</option>
                    <option value="Product">Product</option>
                    <option value="Ops">Ops</option>
                </select>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 ml-1">Resume / CV (PDF)</label>
                <div
                    onDragOver={onDragOver}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                    className={`relative border-2 border-dashed rounded-2xl p-8 transition-all flex flex-col items-center justify-center text-center cursor-pointer ${isDragging ? 'border-brand-blue bg-brand-blue/5' : 'border-slate-800 hover:border-slate-700'
                        } ${file ? 'bg-slate-900/30' : ''}`}
                    onClick={() => !file && fileInputRef.current?.click()}
                >
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="hidden"
                    />

                    <AnimatePresence mode="wait">
                        {!file ? (
                            <motion.div
                                key="upload-icon"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-2"
                            >
                                <Upload className="w-10 h-10 text-slate-500 mx-auto mb-2" />
                                <p className="text-slate-300 font-medium">Click to upload or drag & drop</p>
                                <p className="text-slate-500 text-xs uppercase tracking-wider">PDF files only (max 10MB)</p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="file-info"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center gap-4 bg-slate-800/50 px-4 py-3 rounded-xl border border-slate-700"
                            >
                                <FileText className="text-brand-blue" />
                                <div className="text-left">
                                    <p className="text-white text-sm font-medium truncate max-w-[200px]">{file.name}</p>
                                    <p className="text-slate-500 text-xs">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={(e) => { e.stopPropagation(); removeFile(); }}
                                    className="p-1 hover:bg-slate-700 rounded-full transition-colors ml-2"
                                >
                                    <X size={16} className="text-slate-400" />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {error && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm font-medium text-center"
                >
                    {error}
                </motion.p>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-blue hover:bg-brand-blue-light disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] flex items-center justify-center gap-3 active:scale-[0.98]"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="animate-spin" size={20} />
                        Processing Application...
                    </>
                ) : (
                    "Join Talent Network"
                )}
            </button>

            <p className="text-xs text-slate-500 text-center font-sans px-4">
                By joining, you agree to our privacy policy. Your data will only be used for recruitment purposes.
            </p>
        </motion.form>
    );
}
