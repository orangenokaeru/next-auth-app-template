export { auth as middleware } from '@/auth';

export const config = {
    // 除外するパスを指定
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
