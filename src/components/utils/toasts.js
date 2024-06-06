import { toast } from 'react-toastify';

export const errorToast = (error) => {
  toast.error('Ocorreu um erro.');
  throw error;
};

export const signupToast = {
  success: () => toast.success('Conta criada e sessão iniciada com sucesso!'),
  error: () => toast.error('Erro ao criar conta.'),
  errorPasswordSize: () =>
    toast.error('A password tem que ter mais do que 6 caracteres.'),
  errorPasswordMatch: () => toast.error('As passwords têm que ser iguais.'),
};

export const loginToast = {
  success: () => toast.success('Sessão iniciada com sucesso!'),
  error: () => toast.error('Erro ao iniciar sessão.'),
};

export const logoutToast = {
  success: () => toast.success('Sessão termianda com sucesso!'),
  error: () => toast.error('Erro ao terminar sessão.'),
};

export const favouritesToast = {
  success: () => toast.success('Favoritos atualizados com sucesso.'),
};

export const contactToast = {
  success: () => toast.success('Contacto realizado com sucesso.'),
  warning: () =>
    toast.warning('É necessário iniciar sessão para contactar o vendedor.'),
};

export const profileToast = {
  successUpdate: () =>
    toast.success('Conta actualizada com sucesso.'),
  successDelete: () =>
    toast.success('Conta apagada com sucesso.'),
};
