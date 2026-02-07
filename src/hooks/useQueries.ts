// Simplified version - returns empty data for standalone React app
// When VITE_API_URL is set, contact/partnership/mentor/donation forms hit the c2r-admin-backend.
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const API_BASE = ((typeof import.meta !== 'undefined' && import.meta.env?.VITE_API_URL) || '').trim().replace(/\/$/, '');

export type Program = {
  id: number;
  title: string;
  objective: string;
  focusAreas: string[];
  modules: string[];
  outcomes: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  linkedinUrl?: string;
  photoUrl?: string;
};

export type Testimonial = {
  name: string;
  role: string;
  message: string;
  photoUrl?: string;
};

export type GalleryItem = {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
};

export type ResourceVideo = {
  id: number;
  title: string;
  description: string;
  topic: string;
  video_id: string;
  sort_order: number;
  created_at?: string;
};

export function usePrograms() {
  return useQuery<Program[]>({
    queryKey: ['programs'],
    queryFn: async () => [],
    enabled: false,
  });
}

export function useTeamMembers() {
  return useQuery<TeamMember[]>({
    queryKey: ['teamMembers'],
    queryFn: async () => [],
    enabled: false,
  });
}

export function useTestimonials() {
  return useQuery<Testimonial[]>({
    queryKey: ['testimonials'],
    queryFn: async () => [],
    enabled: false,
  });
}

export function useGalleryItems() {
  return useQuery<GalleryItem[]>({
    queryKey: ['galleryItems'],
    queryFn: async () => [],
    enabled: false,
  });
}

export function useResourceVideos() {
  return useQuery<ResourceVideo[]>({
    queryKey: ['resourceVideos'],
    queryFn: async () => {
      if (API_BASE) {
        const res = await fetch(`${API_BASE}/api/resource-videos`);
        if (!res.ok) return [];
        const data = await res.json();
        return Array.isArray(data) ? data : [];
      }
      return [];
    },
    enabled: !!API_BASE,
  });
}

export function useContactForm() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: { name: string; email: string; message: string }) => {
      if (API_BASE) {
        const res = await fetch(`${API_BASE}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err.message || 'Failed to send message');
        }
        return res.json();
      }
      console.log('Contact form submission:', data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactForms'] });
    },
  });
}

export function usePartnershipInquiry() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: { companyName: string; contactPerson: string; email: string; message: string }) => {
      if (API_BASE) {
        const res = await fetch(`${API_BASE}/api/partnership`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err.message || 'Failed to send inquiry');
        }
        return res.json();
      }
      console.log('Partnership inquiry:', data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['partnershipInquiries'] });
    },
  });
}

export function useMentorApplication() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: { name: string; email: string; profession: string; experience: string; motivation: string }) => {
      if (API_BASE) {
        const res = await fetch(`${API_BASE}/api/mentor-application`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err.message || 'Failed to submit application');
        }
        return res.json();
      }
      console.log('Mentor application:', data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['mentorApplications'] });
    },
  });
}

export type CreatePaymentResponse = {
  checkoutUrl: string;
};

export type PaymentSuccessResponse = {
  payment: {
    amount: bigint;
    status: string;
    paymentMethod: {
      brand: string;
      last4: string;
    };
  };
};

export type PaymentCancelResponse = {
  message: string;
};

export function useCreateDonation() {
  return useMutation<CreatePaymentResponse, Error, { amount: bigint; donorName: string; donorEmail: string }>({
    mutationFn: async (data) => {
      if (API_BASE) {
        const res = await fetch(`${API_BASE}/api/donations`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: Number(data.amount),
            donorName: data.donorName,
            donorEmail: data.donorEmail,
          }),
        });
        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err.message || 'Failed to create donation');
        }
        const json = await res.json();
        return { checkoutUrl: json.checkoutUrl };
      }
      return {
        checkoutUrl: `/donation-success?donationId=0&sessionId=test&accountId=test`,
      };
    },
  });
}

export function usePaymentSuccess(sessionId: string, accountId: string, caffeineCustomerId: string) {
  return useQuery<PaymentSuccessResponse>({
    queryKey: ['paymentSuccess', sessionId],
    queryFn: async () => {
      console.log('Payment success:', { sessionId, accountId, caffeineCustomerId });
      // In a real app, you would verify the payment with your backend
      return {
        payment: {
          amount: BigInt(50000), // Example: 500.00 in paise
          status: 'succeeded',
          paymentMethod: {
            brand: 'visa',
            last4: '4242',
          },
        },
      };
    },
    enabled: !!sessionId && !!accountId && !!caffeineCustomerId,
    retry: false,
  });
}

export function usePaymentCancel(sessionId: string) {
  return useQuery<PaymentCancelResponse>({
    queryKey: ['paymentCancel', sessionId],
    queryFn: async () => {
      console.log('Payment cancelled:', sessionId);
      // In a real app, you would handle the cancellation with your backend
      return {
        message: 'Payment cancelled successfully',
      };
    },
    enabled: !!sessionId,
    retry: false,
  });
}
