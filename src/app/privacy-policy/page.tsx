import React from 'react';

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
                <div className="bg-blue-600 px-6 py-8 sm:px-10">
                    <h1 className="text-3xl font-bold text-white tracking-tight">Privacy Policy</h1>
                    <p className="mt-2 text-blue-100">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                <div className="px-6 py-8 sm:px-10 space-y-8 text-neutral-600">
                    <section>
                        <h2 className="text-xl font-semibold text-neutral-900 mb-3">1. Introduction</h2>
                        <p className="leading-relaxed">
                            Welcome to eWheels ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-neutral-900 mb-3">2. Information We Collect</h2>
                        <p className="leading-relaxed mb-4">
                            We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Names</li>
                            <li>Phone numbers</li>
                            <li>Email addresses</li>
                            <li>Mailing addresses</li>
                            <li>Billing addresses</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-neutral-900 mb-3">3. How We Use Your Information</h2>
                        <p className="leading-relaxed">
                            We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-neutral-900 mb-3">4. Sharing Your Information</h2>
                        <p className="leading-relaxed">
                            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-neutral-900 mb-3">5. Contact Us</h2>
                        <p className="leading-relaxed">
                            If you have questions or comments about this policy, you may email us or contact us by post to:
                        </p>
                        <div className="mt-4 p-4 bg-neutral-100 rounded-lg">
                            <p className="font-medium text-neutral-900">eWheels Support</p>
                            <p>[Insert Physical Address]</p>
                            <p>[Insert Support Email]</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
