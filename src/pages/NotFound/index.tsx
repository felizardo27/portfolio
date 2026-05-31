import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguageStore } from '../../context/useLanguageStore';
import { ArrowLeft } from 'lucide-react';
import {
  NotFoundLayout,
  Container404,
  ErrorCode,
  ErrorTitle,
  ErrorDescription,
  BackButton,
  Footer
} from './styles';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguageStore();
  const isEn = language === 'en';

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <NotFoundLayout>
      <Container404
        id="not-found-container"
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <ErrorCode>404</ErrorCode>
        
        <ErrorTitle>
          {isEn ? 'Page Not Found' : 'Página Não Encontrada'}
        </ErrorTitle>
        
        <ErrorDescription>
          {isEn 
            ? 'The page you are looking for does not exist, has been removed, or is temporarily unavailable.' 
            : 'A página que você está procurando não existe, foi removida ou está indisponível temporariamente.'}
        </ErrorDescription>

        <BackButton
          id="back-home-button"
          onClick={handleGoHome}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <ArrowLeft size={18} />
          {isEn ? 'Return Home' : 'Voltar ao Início'}
        </BackButton>
      </Container404>

      <Footer>
        &lt; felizardo27_ <span>/&gt;</span> // {isEn ? 'SYSTEM ERROR' : 'ERRO DE SISTEMA'}
      </Footer>
    </NotFoundLayout>
  );
};
