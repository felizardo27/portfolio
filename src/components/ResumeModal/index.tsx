import React, { useState, useEffect, useRef } from 'react';
import { useLanguageStore } from '../../context/useLanguageStore';
import { X, ExternalLink, FileText, Loader2, AlertCircle } from 'lucide-react';
import { dataResume } from '../../data/dataResume';
import {
  Backdrop,
  ModalContainer,
  ModalHeader,
  TitleContainer,
  ActionsWrapper,
  IconButton,
  ModalBody,
  IframeViewer,
  LoadingContainer,
  FallbackContainer,
  FallbackTitle,
  FallbackDesc,
  ActionButton
} from './styles';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl?: string;
  title?: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, resumeUrl, title }) => {
  const { language } = useLanguageStore();
  const { data: dbResumeUrl } = dataResume();
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isEn = language === 'en';


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      
      // Reset state when opening
      setLoading(true);
      setLoadError(false);

      // Timeout fallback if the iframe fails to load or takes way too long
      timeoutRef.current = setTimeout(() => {
        setLoading(false);
      }, 6500); // Wait 6.5s before enabling fallback button options
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Transform Google Drive viewer URL to embeddable preview link
  const getEmbedUrl = (rawUrl?: string): string => {
    if (!rawUrl) return '';
    
    try {
      if (rawUrl.includes('drive.google.com')) {
        if (rawUrl.includes('/file/d/')) {
          const fileId = rawUrl.split('/file/d/')[1]?.split('/')[0];
          if (fileId) {
            return `https://drive.google.com/file/d/${fileId}/preview`;
          }
        } else if (rawUrl.includes('?id=')) {
          const urlObj = new URL(rawUrl);
          const fileId = urlObj.searchParams.get('id');
          if (fileId) {
            return `https://drive.google.com/file/d/${fileId}/preview`;
          }
        }
      }
    } catch (e) {
      console.warn('Error rewriting resume URL for iframe:', e);
    }
    return rawUrl;
  };

  const finalResumeUrl = resumeUrl || dbResumeUrl || (isEn 
    ? 'https://drive.google.com/file/d/1ZQ7RIbdf-dOfxkjC9VaVSScbovDvmj0x/view?usp=sharing'
    : 'https://drive.google.com/file/d/1yHs4kRM3iPrcZeixHKNC2QFp2CRH5Mro/view?usp=sharing');

  const embedUrl = getEmbedUrl(finalResumeUrl);

  const handleIframeLoad = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setLoading(false);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const defaultTitle = isEn ? 'Curriculum Vitae' : 'Currículo Profissional';
  const modalTitle = title || defaultTitle;

  return (
    <Backdrop onClick={handleBackdropClick} id="resume-backdrop">
      <ModalContainer id="resume-modal">
        <ModalHeader>
          <TitleContainer>
            <FileText size={18} />
            <span>{modalTitle}</span>
          </TitleContainer>
          
          <ActionsWrapper>
            <IconButton 
              as="a" 
              href={finalResumeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              title={isEn ? 'Open in new tab' : 'Abrir em nova aba'}
            >
              <ExternalLink size={16} />
            </IconButton>
            <IconButton 
              onClick={onClose} 
              title={isEn ? 'Close' : 'Fechar'}
              aria-label="Close modal"
            >
              <X size={18} />
            </IconButton>
          </ActionsWrapper>
        </ModalHeader>

        <ModalBody>
          {loading && (
            <LoadingContainer>
              <Loader2 size={32} className="animate-spin" style={{ color: '#9D4EDD' }} />
              <span>{isEn ? 'LOADING DOCUMENT...' : 'CARREGANDO CURRÍCULO...'}</span>
            </LoadingContainer>
          )}

          {loadError ? (
            <FallbackContainer>
              <AlertCircle size={44} style={{ color: '#EF4444' }} />
              <FallbackTitle>
                {isEn ? 'Unable to load preview' : 'Não foi possível carregar a pré-visualização'}
              </FallbackTitle>
              <FallbackDesc>
                {isEn 
                  ? 'Your browser or connection restricted the inline document player. You can open or download the complete item in a secure outer window.'
                  : 'Seu navegador ou rede restringiu a exibição interna do documento. Você pode abrir o item completo em uma nova aba com segurança.'}
              </FallbackDesc>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <ActionButton 
                  className="primary" 
                  as="a" 
                  href={finalResumeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  <span>{isEn ? 'Open' : 'Abrir'}</span>
                </ActionButton>
                <ActionButton className="secondary" onClick={onClose}>
                  {isEn ? 'Close' : 'Fechar'}
                </ActionButton>
              </div>
            </FallbackContainer>
          ) : (
            <>
              <IframeViewer
                src={embedUrl}
                title={modalTitle}
                onLoad={handleIframeLoad}
                onError={() => setLoadError(true)}
              />
            </>
          )}
        </ModalBody>
      </ModalContainer>
    </Backdrop>
  );
};
