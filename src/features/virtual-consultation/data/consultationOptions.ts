import { Video, MessageSquare, Calendar } from 'lucide-react';

export const consultationOptions = [
  {
    id: 'video',
    icon: Video,
    title: 'Video Consultation',
    description: 'Face-to-face virtual consultation with our skincare experts',
    buttonText: 'Book Video Call'
  },
  {
    id: 'chat',
    icon: MessageSquare,
    title: 'Chat Consultation',
    description: 'Text-based consultation with quick response times',
    buttonText: 'Start Chat'
  },
  {
    id: 'ai',
    icon: Calendar,
    title: 'AI Skin Analysis',
    description: 'Upload photos for instant AI-powered skin analysis',
    buttonText: 'Start Analysis'
  }
] as const;