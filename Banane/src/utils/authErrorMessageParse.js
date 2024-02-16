export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Geçersiz e-posta';

    case 'auth/email-already-exist':
      return 'e-mail adresi zaten kayıtlı';

    case 'auth/user-not-found':
      return 'Kullanıcı bulunamadı';

    case 'auth/weak-password':
      return 'Zayıf şifre';

    case 'auth/invalid-credential':
      return 'Şifre hatalı';

    default:
      return errorCode;
  }
}
