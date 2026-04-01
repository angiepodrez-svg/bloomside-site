"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitTalentForm(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const linkedin = formData.get('linkedin') as string;
    const expertise = formData.get('expertise') as string;
    const resume = formData.get('resume') as File;

    if (!name || !email || !linkedin || !expertise || !resume) {
        return { success: false, error: "All fields are required." };
    }

    try {
        const arrayBuffer = await resume.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // 1. Send email to admin
        await resend.emails.send({
            from: 'Bloomside Portal <onboarding@resend.dev>',
            to: 'angie.podrez@gmail.com', // Updated Admin email
            subject: `New Candidate: ${name} - ${expertise}`,
            text: `
        Name: ${name}
        Email: ${email}
        LinkedIn: ${linkedin}
        Expertise: ${expertise}
      `,
            attachments: [
                {
                    filename: resume.name,
                    content: buffer,
                },
            ],
        });

        // 2. Send thank you email to candidate
        await resend.emails.send({
            from: 'Bloomside <onboarding@resend.dev>',
            to: email,
            subject: 'Thank you for joining our Talent Network - Bloomside',
            text: `
        Hi ${name},

        Thank you for reaching out to Bloomside. We've received your CV and details.
        
        Our team will review your profile and reach out if there's a match with our current AdTech opportunities.

        Best regards,
        The Bloomside Team
      `,
        });

        return { success: true };
    } catch (error: any) {
        console.error("Resend error:", error);
        // Even if it fails due to missing API key, we return a mock success if in development for UI testing
        if (process.env.NODE_ENV === 'development') {
            return { success: true, message: "Mock success in development mode." };
        }
        return { success: false, error: "Failed to send email. Please try again later." };
    }
}
